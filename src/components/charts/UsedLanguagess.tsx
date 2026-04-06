
import {type Repository} from '@/types'
import {calculatePopularLanguages} from "@/utils"
import { useEffect, useState } from 'react';

//to declare the color mapping
  const colorMap: { [key: string]: string } = {
      
      JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  CSS: "#563d7c",
  HTML: "#e34c26",
  Ruby: "#701516",
  Shell: "#89e051",
  Python: "#3572A5",
  Go: "#00ADD8",
  Rust: "#dea584",
  Java: "#b07219",
  PHP: "#4F5D95",
  C: "#f34b7d"

    };

  //to declare the popular langluages color
  const getLangColor = (language: string): string => {
  return colorMap[language] ?? "#8b949e";
};

function UsedLanguagess({repositories}: {repositories: Repository[]}) {

    const [animated, setAnimated] = useState(false)

    useEffect(()=>{

        setTimeout(() =>{
            setAnimated(true)

        }, 1000)
        

    }, [repositories])



    const popularLanguages = calculatePopularLanguages(repositories);
    console.log(popularLanguages);
    // to calculate the total count of the languages to know the total weight of the bar
    const total = popularLanguages.reduce((acc, curr) =>{
        return acc + curr.count
    }, 0)
    console.log(total)

    // to get the percentage of each language to know how much space it should take in the bar

    const langPercent = popularLanguages.map((lang)=>{
        return {
            lang: lang.language,
            percent: ((lang.count / total) * 100).toFixed(1),
            
        }

    })
    console.log(langPercent)
  return (
    <div>
        <div className='overflow-hidden h-3 rounded-full bg-slate-800 flex transition-all duration-700 ease-out'>
            {langPercent.map((item, index) => {
                return <div key={index} style={{
        // The "Switch" Logic: 
        // If animated is true, use the percentage. If false, use 0.
        width: animated ? `${item.percent}%` : "0%",
        backgroundColor: getLangColor(item.lang),
      }}></div>

            })}
        </div>
        <div className='flex flex-wrap justify-between'>{langPercent.map((item) =>{
            return <div key={item.lang} className='flex gap-3'>
                <div style={{backgroundColor: getLangColor(item.lang)}} className='h-5 w-5 rounded-full'></div>
                <span>{item.lang}</span>
                <span>{item.percent}%</span>
            </div>
            
        })}</div>
    </div>
  )
}

export default UsedLanguagess
