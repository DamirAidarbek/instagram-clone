import {$api} from "../config/api/api.ts";
import {useUserStore} from "../store/userStore.ts";


export async function addCommentToPost(text: string, postId: string) {
    const userId = useUserStore.getState().user?.id

    if(!text) return 'no comment text'

    try {
        const res = await $api.post('/comments', {
            userId,
            postId,
            text
        })

        if (!res.data) throw new Error()

        return res
    } catch (e) {
        console.log(e)
    }

}
