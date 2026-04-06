import { type Repository } from '@/types';



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
      stars: perc.stars,
      percentage: ((perc.stars)/starMax * 100).toFixed(1)

    }
  })

  console.log(starPercent)

  
  return (
    <div>
      <h2 className='text-2xl font-semibold text-center mb-4'>Popular Repos</h2>

      
      
   
      <div>{
       starPercent.map((repo, index)=>{
          // to reduce the opacity of the background 
  const fadeOpacity = 1 - index * 0.2
  return (
    <div key={repo.repo} className='flex items-center space-y-2 '>
      <span>{repo.repo}</span>
      <div style={{width: isAnimated ? `${repo.percentage}%` : "0%" , backgroundColor: "#3178c6", opacity: fadeOpacity }} className='h-4 rounded-full transition-all duration-1000 ease-out'></div>
      <span>{repo.stars}</span>
    </div>
  )

         
        })
        }</div>
    </div>
  );
};

export default PopularRepos;