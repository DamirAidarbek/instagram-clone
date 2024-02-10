import { useMutation } from "@tanstack/react-query";
import classNames from "classnames";
import { memo, useState } from "react";
import { FaHeart, FaRegComment, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RoutePaths } from "../../../config/router/router.tsx";
import LikeService from "../../../services/like.service.ts";
import { useUserStore } from "../../../store/userStore.ts";
import { Like, Post } from "../../../types/types.ts";
import Avatar from "../../../ui/Avatar/Avatar.tsx";
import Button from "../../../ui/Button/Button.tsx";
import Card from "../../../ui/Card/Card.tsx";
import CommentList from "../../Comment/CommentList/CommentList.tsx";
import cls from './CardItem.module.scss';

interface CardItemProps {
    post: Post
    className?: string
}

function CardItem(props: CardItemProps) {
    const {
        post,
        className
    } = props

    const userId = useUserStore(state => state?.user?.id)
    const [like, setLike] = useState<Like | undefined>(post.likes.find(like => like.userId === userId))
    const [isLiked, setIsLiked] = useState<boolean>(like ? true : false)
    const [likesAmount, setLikesAmount] = useState(post.likes.length)

    const mutation = useMutation({
        mutationFn: () => isLiked ? LikeService.removeLike(like!.id) : LikeService.addLike(post.id, userId!),
        onSuccess: (data) => {
            setLike(data.data)
            setIsLiked(prev => !prev)
            setLikesAmount(prev => {
                if (isLiked) {
                    return prev - 1
                } else {
                    return prev + 1
                }
            })
        }
    })

    return (
        <Card className={classNames(cls.item, className)}>
            <Link to={`${RoutePaths.profile}/${post.userId} `} className={cls.cap}>
                <Avatar
                    src={post.user.avatar}
                    alt='user avatar'
                    size={30}
                />
                <span>{post?.user.username}</span>
            </Link>
            <img
                className={cls.img}
                src={post.img}
                alt={post.title}
            />
            <div className={cls.icons}>
                <Button className={cls.button} onClick={() => mutation.mutate()}>
                    {isLiked ? <FaHeart size={23} /> : <FaRegHeart size={23} />}
                </Button>
                <Button className={cls.button}>
                    <FaRegComment size={23}/>
                </Button>
            </div>
            <p className={cls.likes}>{likesAmount} отметок "Нравится"</p>
            <p className={cls.subInfo}>
                <span className={cls.usename}>{post.user.username}: </span>
                {post.title}
            </p>
            <CommentList postId={post.id} />
        </Card>
    );
}

export default memo(CardItem);
