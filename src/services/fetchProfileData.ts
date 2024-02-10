import { $api } from "../config/api/api";
import { User } from "../types/types";

export async function fetchProfileData(userId: string | undefined): Promise<User | undefined> {

  if (!userId) return undefined

  try {
    const response = await $api.get<User>('users/' + userId, {
      params: {
        _embed: 'likes'
      }
    })

    if (!response.data) throw new Error('no data')
    
    return response.data

  } catch (e) {
    console.log(e);
  }

}