import { useQuery } from "@tanstack/react-query";
import { memo } from "react";
import PostService from "../../../services/post.service.ts";
import Loader from "../../../ui/Loader/Loader.tsx";
import CardItem from "../CardItem/CardItem.tsx";
import cls from './CardList.module.scss';

function CardList() {
    const { data: posts, isLoading, isFetching } = useQuery({
        queryKey: ['allPosts'],
        queryFn: PostService.fetchPosts,
        select: (response) => response.data
    })

    if (isLoading || isFetching) {
        return (
            <Loader className={cls.loader} />
        )
    }

    return (
        <main className={cls.CardList}>
            {posts?.map(post => <CardItem post={post} key={post.id} />)}
        </main>
    );
}

export default memo(CardList)
