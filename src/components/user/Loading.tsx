import { Card, CardContent, CardHeader,  } from "../ui/card"
import { Skeleton } from "../ui/skeleton"

function Loading() {
  return (
    <div className="flex flex-col lg:flex-row gap-5 items-start mx-auto w-full lg:max-w-[80%] mt-6 ">
        <div className="w-full lg:w-[30%] p-4">
           <Card className="w-full lg:min-h-screen ">
      <CardHeader >
        <Skeleton className="h-20 w-20 lg:h-48 lg:w-48 rounded-full " />
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-1/2" />
      </CardHeader>
      <CardContent>
        <Skeleton className="aspect-video w-full hidden lg:block" />
        
      </CardContent>
      
    </Card>
    <Card className=" p-4 mt-6">
        <div className="grid grid-cols-2 lg:hidden gap-4">
            <Skeleton className="h-24 " />
                <Skeleton className="h-24 " />
                <Skeleton className="h-24 " />
                 <Skeleton className="h-24 " />

        </div>
      </Card>
      <Card className="mt-6 p-4">
        <Skeleton className=" aspect-video w-full block lg:hidden " />
      </Card>
        </div>
        <div className="hidden lg:w-[70%] lg:flex flex-col gap-6 p-4">
            <Card className="w-full flex flex-col gap-12 ">
      <CardHeader>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Skeleton className="h-24 " />
                <Skeleton className="h-24 " />
                <Skeleton className="h-24 " />
                 <Skeleton className="h-24 " />

        </div>
        <Skeleton className="h-40 w-full" />
        
        
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 grid-cols-2 gap-5">
            <Skeleton className="h-48 w-full aspect-video" />
            <Skeleton className="h-48 w-full aspect-video" />

        </div>
      </CardContent>
    </Card>
        </div>
      
    </div>
  )
}

export default Loading
