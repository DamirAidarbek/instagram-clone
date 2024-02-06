import {IoMdSend} from "react-icons/io";
import CommentItem from "../CommentItem/CommentItem.tsx";
import cls from './CommentList.module.scss'
import {ChangeEvent, FormEvent, memo, useEffect, useState} from "react";
import classNames from "classnames";
import Input from "../../../ui/Input/Input.tsx";
import Button from "../../../ui/Button/Button.tsx";
import {addCommentToPost} from "../../../services/addCommentToPost.ts";
import {fetchCommentsByPostId} from "../../../services/fetchCommentsByPostId.ts";
import {Comment} from "../../../types/types.ts";

interface CommentListProps {
    className?: string
    postId: string
}

function CommentList({ postId, className }: CommentListProps) {
    const [value, setValue] = useState<string>('')
    const [comments, setComments] = useState<Comment[] | undefined>([])

    const getComments = async () => {
        const comments = await fetchCommentsByPostId(postId)
        setComments(comments)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        addCommentToPost(value, postId)
        setValue('')
        getComments()
    }

    useEffect(() => {
        getComments()
    }, []);

    return (
        <div className={classNames(className)}>
            {comments
                ? (
                    <>
                        <p className={cls.all}>Посмотреть все комментарии ({comments.length})</p>
                        {comments?.map(comment => <CommentItem comment={comment} key={comment.id}/>)}
                    </>
                )
                : <div>no comments</div>}
            <hr className={cls.hr} />
            <form className={cls.form} onSubmit={handleSubmit}>
                <Input
                    className={cls.input}
                    placeholder='Add comment'
                    value={value}
                    onChange={handleChange}
                />
                <Button
                    className={cls.button}
                >
                    <IoMdSend />
                </Button>
            </form>
        </div>
    );
}

export default memo(CommentList);
