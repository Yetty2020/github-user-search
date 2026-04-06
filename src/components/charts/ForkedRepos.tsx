import { type Repository } from '@/types';

import { calculateMostForkedRepos } from '@/utils';
import { useEffect, useState } from 'react';
import { Card } from '../ui/card';

const ForkedRepos = ({ repositories }: { repositories: Repository[] }) => {

  const [isAnimated, setIsAnimated] = useState(false)
  
    useEffect(()=>{
      setTimeout(()=>{
        setIsAnimated(true)
  
      })
    }, [repositories])
  // Calculate most forked repositories and return array of {repo: string, count: number}
  const mostForkedRepos = calculateMostForkedRepos(repositories);
  console.log(mostForkedRepos)

  //to get an array of just the forked numbers
  const forkedCount = mostForkedRepos.map((repo) => repo.count)

  //to find the highest number in the array using math.Max
  const forkedMax = Math.max(...forkedCount)
  console.log(forkedMax)

  // to get the percentage for each forked repo for the bar weight
  const forkedPercent = mostForkedRepos.map((perct) =>{
    return {
      repo: perct.repo,
      percentage: ((perct.count)/forkedMax * 100).toFixed(1),
      //to get the count in k if its in thousands, else return the acutual count
      formattedCount: perct.count >=1000 ? (perct.count / 1000).toFixed(1) + "k" : perct.count
    }

  })

  console.log(forkedPercent)

  return (
    <Card className='w-full p-4'>
    <div>

      <h2 className='text-2xl font-semibold text-center mb-4'>Forked Repos</h2>
      {
        forkedPercent.map((repo, index)=>{

           // to reduce the opacity of the background 
  const fadeOpacity = 1 - index * 0.2
          return(
            <div key={repo.repo} className='grid grid-cols-[70px_1fr_50px] items-center gap-4  '>
      <span className='truncate'>{repo.repo}</span>
      <div className='relative bg-[#8b949e]/30 rounded-full overflow-hidden'>
        <div style={{width: isAnimated ? `${repo.percentage}%` : "0%" , backgroundColor: "#3178c6", opacity: fadeOpacity }} className='h-3 rounded-full transition-all duration-1000 ease-out   '></div>

      </div>
      
      <span>{repo.formattedCount}</span>
    </div>
           
          )

        })
      }
      
    </div>
    </Card>
  );
};

export default ForkedRepos;