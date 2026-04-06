import { Button } from '@/components/ui/button';
import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';

type UserCardProps = {
    avatarUrl: string;
    name: string;
    bio: string;
    url: string;
    user: string;
    following: string;
    followers: string;
}

const UserCard = ({avatarUrl, name, bio, url, user, followers, following }: UserCardProps) => {
  return (
    <Card className='w-full border-none lg:min-h-screen'>
        <CardHeader className='flex flex-row lg:flex-col gap-x-8 '>
            <img src={avatarUrl} alt={name} className='w-[80%] g-3 rounded-full object-cover'/>
            <div className='flex lg:flex-col gap-3'>
                <CardTitle className='lg:text-3xl'>{name || "Coding Addict"}</CardTitle>
                <CardDescription className='lg:text-lg '>@{user}</CardDescription>
                <CardDescription className='lg:text-lg '>{bio ||"This user has no bio"}</CardDescription>
                <Button asChild size='sm' className='lg:w-full mt-2'>
                    <a href={url} target='_blank' rel='noreferrer'>Follow</a>
                </Button>
                <div className='flex justify-between'>
                  <CardDescription> <span className='font-bold text-lg'>{following}</span>{""} <span className=''>following</span></CardDescription>
                <CardDescription><span className='font-bold text-lg'>{followers}</span> {""} <span>followers</span></CardDescription>
                </div>
                

            </div>
        </CardHeader>
    </Card>
  )
}

export default UserCard
