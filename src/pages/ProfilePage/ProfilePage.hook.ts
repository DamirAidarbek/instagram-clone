import { useQuery } from "@tanstack/react-query";
import postService from "../../services/post.service";

export const useGetPostsByUserId = (userId: string) => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: () => postService.fetchPostsByUserId(userId!),
    enabled: !!userId,
  })
}