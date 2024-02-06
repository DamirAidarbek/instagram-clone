import cls from './CommentItem.module.scss'
import {memo} from "react";
import {Comment} from "../../../types/types.ts";
import classNames from "classnames";

interface CommentItemProps {
    className?: string
    comment: Comment
}

function CommentItem({ comment, className }: CommentItemProps) {
    return (
        <p className={classNames(cls.item, className)}>
            <span>{comment.user.username}: </span>
            {comment.text}
        </p>
    );
}

export default memo(CommentItem);
