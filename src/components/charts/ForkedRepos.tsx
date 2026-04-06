import { type Repository } from '@/types';

import { calculateMostForkedRepos } from '@/utils';
import { useEffect, useState } from 'react';

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
      count: perct.count
    }

  })

  console.log(forkedPercent)

  return (
    <div>

      <h2 className='text-2xl font-semibold text-center mb-4'>Forked Repos</h2>
      {
        forkedPercent.map((repo, index)=>{

           // to reduce the opacity of the background 
  const fadeOpacity = 1 - index * 0.2
          return(
            <div key={repo.repo} className='flex items-center space-y-2 '>
      <span>{repo.repo}</span>
      <div style={{width: isAnimated ? `${repo.percentage}%` : "0%" , backgroundColor: "#3178c6", opacity: fadeOpacity }} className='h-4 rounded-full transition-all duration-1000 ease-out'></div>
      <span>{repo.count}</span>
    </div>
           
          )

        })
      }
      
    </div>
  );
};

export default ForkedRepos;