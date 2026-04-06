
import {type Repository} from '@/types'
import {calculatePopularLanguages} from "@/utils"

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
  return colorMap ?? "#8b949e";
};

function UsedLanguagess({repositories}: {repositories: Repository[]}) {



    const popularLanguages = calculatePopularLanguages(repositories);
  return (
    <div>
      
    </div>
  )
}

export default UsedLanguagess
