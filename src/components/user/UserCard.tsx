import { Button } from "@/components/ui/button";
import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

type UserCardProps = {
  avatarUrl: string;
  name: string;
  bio: string;
  url: string;
  user: string;
  following: number;
  followers: number;
};

const UserCard = ({
  avatarUrl,
  name,
  bio,
  url,
  user,
  followers,
  following,
}: UserCardProps) => {
  return (
    <Card className="w-full border-none lg:min-h-screen bg-[#0d1117]  ">
      <CardHeader className="flex flex-col gap-x-8 ">
        <div className="flex gap-10  lg:hidden w-full">
          <img
            src={avatarUrl}
            alt={name}
            className=" w-[40%] rounded-full object-cover"
          />
          <div className="flex flex-col gap-2 w-full">
            <CardTitle className="lg:text-3xl text-[#e6edf3]">
              {name || "Coding Addict"}
            </CardTitle>
            <CardDescription className="lg:text-lg text-[#8b949e] ">
              @{user}
            </CardDescription>
            <Button
              asChild
              size="sm"
              className="lg:w-full mt-2 bg-[#21262d] border-[#8b949e] hover:bg-[#21262d]/80 text-[#e6edf3]"
            >
              <a href={url} target="_blank" rel="noreferrer">
                Follow
              </a>
            </Button>
          </div>
        </div>
        <img
          src={avatarUrl}
          alt={name}
          className="hidden lg:flex lg:w-[80%] g-3 rounded-full object-cover"
        />
        <div>
          <div className="hidden lg:flex lg:flex-col gap-3">
            <CardTitle className="lg:text-3xl text-[#e6edf3]">
              {name || "Coding Addict"}
            </CardTitle>
            <CardDescription className="lg:text-lg text-[#8b949e] ">
              @{user}
            </CardDescription>
            <CardDescription className="lg:text-md text-[#8b949e]">
              {bio || "This user has no bio"}
            </CardDescription>
            <Button
              asChild
              size="sm"
              className="lg:w-full mt-2 bg-[#21262d] border-[#8b949e] hover:bg-[#21262d]/80 text-[#e6edf3]"
            >
              <a href={url} target="_blank" rel="noreferrer">
                Follow
              </a>
            </Button>
          </div>
          <div className="flex justify-between gap-6 lg:mt-4">
            <CardDescription>
              {" "}
              <span className="font-bold text-lg text-[#e6edf3] ">
                {following}
              </span>{" "}
              <span className="text-[#8b949e]">following</span>
            </CardDescription>
            <CardDescription>
              <span className="font-bold text-lg text-[#e6edf3]">
                {followers}
              </span>{" "}
              <span className="text-[#8b949e]">followers</span>
            </CardDescription>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default UserCard;
