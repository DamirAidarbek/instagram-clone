import { $api } from "../config/api/api";
import { Post } from "../types/types";

class PostService {

  async fetchPosts() {
    return $api.get<Post[]>('posts', {
      params: {
        _expand: 'user',
        _embed: 'likes'
      }
    })
  }

  async fetchPostsByUserId(userId: string) {
    return $api.get<Post[]>('posts', {
      params: {
        userId
      }
    })
  }

}

export default new PostService()