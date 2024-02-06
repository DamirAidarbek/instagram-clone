import {Comment} from "../types/types.ts";
import {$api} from "../config/api/api.ts";

export async function fetchCommentsByPostId(postId: string) {

    try {
        const response = await $api.get<Comment[]>(`/comments`, {
            params: {
                postId,
                _expand: 'user'
            }
        })

        if (!response.data) throw new Error('no data')

        return response.data

    } catch (e) {
        console.log(e)
    }

}
