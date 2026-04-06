import { type Repository } from '@/types';

import { calculateMostForkedRepos } from '@/utils';

const ForkedRepos = ({ repositories }: { repositories: Repository[] }) => {
  // Calculate most forked repositories and return array of {repo: string, count: number}
  const mostForkedRepos = calculateMostForkedRepos(repositories);
  console.log(mostForkedRepos)

  return (
    <div>
      
    </div>
  );
};

export default ForkedRepos;