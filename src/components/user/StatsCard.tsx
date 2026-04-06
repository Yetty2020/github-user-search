import { Card, CardTitle, CardDescription } from '../ui/card';

type StatsCardProps = {
  title: string;
  count: number;
};

function StatsCard({ title, count }: StatsCardProps) {
  return (
    <Card>
      <div className='flex flex-col gap-5 items-start px-5 py-1'>
         <CardDescription className='font-bold text-2xl'>{count}</CardDescription>
        <CardTitle>{title}</CardTitle>
       
      </div>
    </Card>
  );
}

export default StatsCard;