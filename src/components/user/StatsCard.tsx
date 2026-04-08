import { Card, CardTitle, CardDescription } from '../ui/card';

type StatsCardProps = {
  title: string;
  count: number;
};

function StatsCard({ title, count }: StatsCardProps) {
  return (
    <Card className='bg-[#161b22]  border-[#30363d]'>
      <div className='flex flex-col gap-5 items-start px-5 py-1 '>
         <CardDescription className='font-bold text-2xl text-[#e6edf3]'>{count}</CardDescription>
        <CardTitle className='text-[#8b949e]'>{title}</CardTitle>
       
      </div>
    </Card>
  );
}

export default StatsCard;