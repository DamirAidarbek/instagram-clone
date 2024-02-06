import {FaRegComment, FaRegHeart} from "react-icons/fa";
import cls from './CardItem.module.scss'
import Card from "../../../ui/Card/Card.tsx";
import CommentList from "../../Comment/CommentList/CommentList.tsx";
import {Post} from "../../../types/types.ts";
import classNames from "classnames";
import {memo} from "react";
import Avatar from "../../../ui/Avatar/Avatar.tsx";

interface CardItemProps {
    post: Post
    className?: string
}

function CardItem(props: CardItemProps) {
    const {
        post,
        className
    } = props

    return (
        <Card className={classNames(cls.item, className)}>
            <div className={cls.cap}>
                <Avatar
                    src={post.user.avatar}
                    alt='user avatar'
                    size={30}
                />
                <span>{post?.user.username}</span>
            </div>
            <img
                className={cls.img}
                src={post.img}
                alt={post.title}
            />
            <div className={cls.icons}>
                <FaRegHeart />
                <FaRegComment />
            </div>
            <p className={cls.likes}>1 000 000 отметок "Нравится"</p>
            <p className={cls.subInfo}>
                <span className={cls.usename}>{post.user.username}: </span>
                {post.title}
            </p>
            <CommentList postId={post.id} />
        </Card>
    );
}

export default memo(CardItem);
