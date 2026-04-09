import { Card, CardContent, CardHeader,  } from "../ui/card"
import { Skeleton } from "../ui/skeleton"

function Loading() {
  return (
    <div className="flex flex-col lg:flex-row gap-5 items-start mx-auto w-full lg:max-w-[80%] mt-6 bg-[#0d1117] h-screen lg:max-h-screen">
        <div className="w-full lg:w-[30%] p-4 ">
           <Card className="w-full lg:h-screen bg-[#0d1117] border-[#30363d] ">
      <CardHeader >
        <Skeleton className="h-20 w-20 lg:h-48 lg:w-48 rounded-full bg-[#30363d] " />
        <Skeleton className="h-4 w-2/3 bg-[#30363d]" />
        <Skeleton className="h-4 w-1/2 bg-[#30363d]" />
      </CardHeader>
      <CardContent>
        <Skeleton className="aspect-video w-full hidden lg:block bg-[#30363d]" />
        
      </CardContent>
      
    </Card>
    <Card className=" p-4 mt-6 border-[#30363d]  bg-[#0d1117] lg:hidden">
        <div className="grid grid-cols-2 lg:hidden gap-4">
            <Skeleton className="h-24  bg-[#30363d]" />
                <Skeleton className="h-24  bg-[#30363d]" />
                <Skeleton className="h-24 bg-[#30363d] " />
                 <Skeleton className="h-24  bg-[#30363d]" />

        </div>
      </Card>
      <Card className="mt-6 p-4 border-[#30363d] bg-[#0d1117] lg:hidden">
        <Skeleton className=" aspect-video w-full block lg:hidden bg-[#30363d] " />
      </Card>
        </div>
        <div className="hidden lg:w-[70%] lg:flex flex-col gap-6 p-4">
            <Card className="w-full flex flex-col gap-12 border-[#30363d] bg-[#0d1117]">
      <CardHeader>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Skeleton className="h-24 bg-[#30363d] " />
                <Skeleton className="h-24 bg-[#30363d] " />
                <Skeleton className="h-24 bg-[#30363d]" />
                 <Skeleton className="h-24 bg-[#30363d]" />

        </div>
        <Skeleton className="h-40 w-full bg-[#30363d]" />
        
        
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <Skeleton className="h-48 w-full aspect-video bg-[#30363d]" />
            <Skeleton className="h-48 w-full aspect-video bg-[#30363d]" />

        </div>
      </CardContent>
    </Card>
        </div>
      
    </div>
  )
}

export default Loading
