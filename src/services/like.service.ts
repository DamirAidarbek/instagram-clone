import { $api } from "../config/api/api";

class LikeService {

  async removeLike(likeId: string) {
    return $api.delete(`likes/${likeId}`)
  }

  async addLike(postId: string, userId: string) {
    return $api.post('likes', {
      postId,
      userId
    })
  }

}

export default new LikeService()