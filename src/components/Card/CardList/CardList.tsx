import CardItem from "../CardItem/CardItem.tsx";
import cls from './CardList.module.scss'
import {fetchPosts} from "../../../services/fetchPosts.ts";
import Loader from "../../../ui/Loader/Loader.tsx";
import {memo} from "react";

function CardList() {
    const { posts, isLoading } = fetchPosts()

    if (isLoading) {
        return (
            <Loader className={cls.loader} />
        )
    }

    return (
        <div className={cls.CardList}>
            {posts.map(post => <CardItem post={post} key={post.id} />)}
        </div>
    );
}

export default memo(CardList)
