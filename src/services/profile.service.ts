import { $api } from "../config/api/api";
import { User } from "../types/types";

class ProfileService {

  async fetchProfileData(userId: string) {
    return $api.get<User>(`users/${userId}`, {
      params: {
        _embed: 'likes'
      }
    })
  }

}

export default new ProfileService()