import { useEffect, useState } from "react";
import { Post } from "../types/types.ts";
import { $api } from "../config/api/api.ts"

export function fetchPosts() {
    const [posts, setPosts] = useState<Post[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<null | unknown>(null)

    useEffect(() => {
        async function preload() {
            try {
                setIsLoading(true)
                setError(null)
                const response = await $api.get<Post[]>('posts', {
                    params: {
                        _expand: 'user',
                        _embed: 'likes',
                    }
                })

                if (!response.data) throw new Error('no data')

                setPosts(response.data)
                setIsLoading(false)
            } catch (e) {
                setIsLoading(false)
                setError(e)
            }
        }

        preload()
    }, []);

    return {
        posts,
        isLoading,
        error,
    }
}
