import { useQuery } from "@apollo/client/react";
import { GET_TRENDING_USERS } from "@/queries";
import type { TrendingUsersResponse } from "@/types";
import { calculateTrendingUsers } from "@/utils";

const TrendingUsers = () => {
  const { data, loading, error } =
    useQuery<TrendingUsersResponse>(GET_TRENDING_USERS);

  if (loading) return <p>Loading trending users...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No data found</p>;

  const users = data.search.nodes.filter(Boolean);
const trendingUsers = calculateTrendingUsers(users);

  return (
    <div className="grid gap-4">
      {trendingUsers.map((user) => (
        <div
          key={user.login}
          className="flex items-center gap-4 p-4 border rounded-lg"
        >
          <img
            src={user.avatarUrl}
            alt={user.login}
            className="w-12 h-12 rounded-full"
          />

          <div>
            <h3 className="font-semibold">
              {user.name ?? user.login}
            </h3>

            <p className="text-sm text-gray-500">
              Followers: {user.followers.totalCount} · Repos:{" "}
              {user.repositories.totalCount}
            </p>

            <p className="text-sm font-medium">
              Trending score: {user.score}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingUsers;
