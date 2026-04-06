import { type Repository } from '@/types';
import { Card } from '../ui/card';



import { calculateMostStarredRepos } from '@/utils';
import { useEffect, useState } from 'react';

const PopularRepos = ({ repositories }: { repositories: Repository[] }) => {

  const [isAnimated, setIsAnimated] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setIsAnimated(true)

    })
  }, [repositories])
  // Calculate most starred repositories and return array of {repo: string, stars: number}
  const popularRepos = calculateMostStarredRepos(repositories);
  console.log(popularRepos)

  //to get an array of just the starred numers
  const starCounts = popularRepos.map((repo) => repo.stars)

  //to find the highest number in the array
  const starMax = Math.max(...starCounts)
  console.log(starMax)

  




  //to get the percentage of each starred repo for the bar weight
  const starPercent = popularRepos.map((perc) =>{
    return { repo: perc.repo, 
     
      percentage: ((perc.stars)/starMax * 100).toFixed(1),

      //to get the count in k if its in thousands, else return the acutual count
      formattedStars: perc.stars >=1000 ? (perc.stars / 1000).toFixed(1) + "k" : perc.stars
     

    }
  })

  console.log(starPercent)

  
  return (
    <Card className='w-full p-5'>
    <div>
      <h2 className='text-2xl font-semibold text-center mb-4'>Popular Repos</h2>

      
      
   
      <div>{
       starPercent.map((repo, index)=>{
          // to reduce the opacity of the background 
  const fadeOpacity = 1 - index * 0.2
  return (
    
    <div key={repo.repo} className='grid grid-cols-[70px_1fr_50px] items-center gap-4   '>
      <span className='truncate'>{repo.repo}</span>
      <div className='relative bg-[#8b949e]/30 rounded-full overflow-hidden'>
      <div style={{width: isAnimated ? `${repo.percentage}%` : "0%" , backgroundColor: "#0a5c2bff", opacity: fadeOpacity }} className='h-3 rounded-full transition-all duration-1000 ease-out'></div>
      </div>
      <span>{repo.formattedStars}</span>
    </div>
  )

         
        })
        }</div>
    </div>
    </Card>
  );
};

export default PopularRepos;