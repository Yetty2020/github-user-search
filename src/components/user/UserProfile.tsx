import { useQuery } from '@apollo/client/react';
import { GET_USER } from '@/queries';
import type { UserData } from '@/types';
import UserCard from './UserCard';
import StatsContainer from './StatsContainer';
import ForkedRepos from '../charts/ForkedRepos';
import PopularRepos from '../charts/PopularRepos';
import UsedLanguages from '../charts/UsedLanguages';


type userProfileProps = {
    userName: string
}


const UserProfile = ({userName}: userProfileProps) => {

    const {data,loading,error} = useQuery<UserData>(GET_USER, {
        variables: {
            login: userName
        },
    })

    if (loading) return <div>Loading...</div>
    if (error) return <h2 className='text-xl'>{error.message}</h2>
    if (!data) return <h2 className='text-xl'>User Not Found</h2>

    const {
    avatarUrl,
    user,
    name,
    bio,
    url,
    repositories,
    followers,
    following,
    gists,
  } = data.user;
  return (
    <div className='flex flex-col lg:flex-row gap-5 items-start'>
      <div className='lg:w-[30%]'>
        <UserCard avatarUrl={avatarUrl} bio={bio} name={name} url={url} user={userName} followers={followers.totalCount} following={following.totalCount}/>
      </div>
        

        <div className='flex flex-col lg:w-[70%] gap-6'>
          <StatsContainer totalRepos={repositories.totalCount} followers={followers.totalCount} following={following.totalCount} gists={gists.totalCount}/>

       {repositories.totalCount > 0 && (<div className='flex flex-col gap-6'>
        <UsedLanguages repositories={repositories.nodes}/>
        <div className='flex flex-col lg:flex-row gap-6'>
          <PopularRepos repositories={repositories.nodes}/>
        <ForkedRepos repositories={repositories.nodes}/>

        </div>
        
       
        
       </div>)}
          
        </div>
        
      
   
    </div>
    
  )
}

export default UserProfile
