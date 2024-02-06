import { ReactNode } from "react";
import classNames from 'classnames'
import cls from './Card.module.scss'

interface CardProps {
    children: ReactNode
    className?: string | undefined;
}

function Card({ children, className }: CardProps) {
    return (
        <div className={classNames(cls.Card, className)}>
            {children}
        </div>
    );
}

export default Card;
