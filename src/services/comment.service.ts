import { $api } from "../config/api/api";
import { Comment } from "../types/types";

class CommentService {

  async fetchCommentsByPostId(postId: string) {
    return await $api.get<Comment[]>('comments', {
      params: {
        postId,
        _expand: 'user'
      }
    })
  }

  async addCommentToPost(text: string, postId: string, userId: string) {
    return await $api.post<Comment>('comments', {
      text,
      postId,
      userId
    })
  }

}

export default new CommentService()