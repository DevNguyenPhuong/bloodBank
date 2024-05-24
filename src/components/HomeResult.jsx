import { useQuery } from "@tanstack/react-query";
import UserHomeAcitivyItem from "../features/users/UserHomeActivityItem";

function HomeResult() {
  const { data: activities } = useQuery({
    queryKey: ["activities"],
    staleTime: Infinity,
  });

  return (
    <>
      <div className="flex justify-center flex-col items-center gap-4">
        <div className=" text-red-500 font-bold text-2xl">
          {activities?.length} kết quả
        </div>
        {activities?.map((item, index) => (
          <UserHomeAcitivyItem {...item} key={item.id} />
        ))}
      </div>
    </>
  );
}

export default HomeResult;
