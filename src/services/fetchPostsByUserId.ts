import {$api} from "../config/api/api.ts";
import {Post} from "../types/types.ts";

export async function fetchPostsByUserId(userId: string | undefined) {

    if (!userId) return undefined

    try {
        const response = await $api.get<Post[]>('/posts', {
            params: {
                userId  
            }
        })

        if (!response.data) throw new Error('no data')

        return response.data

    } catch (e) {
        console.log(e)
    }

}
