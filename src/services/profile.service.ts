import { $api } from "../config/api/api";
import { Like, User } from "../types/types";

class ProfileService {

  async fetchProfileData(userId: string) {
    return $api.get<User & {likes: Like[]}>(`users/${userId}`, {
      params: {
        _embed: 'likes'
      }
    })
  }

}

export default new ProfileService()