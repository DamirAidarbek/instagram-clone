import {ButtonHTMLAttributes, memo, ReactNode} from 'react';
import classNames from "classnames";
import cls from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode
    className?: string
}

function Button(props: ButtonProps) {
    const {
        children,
        className,
        ...otherProps
    } = props

    return (
        <button
            className={classNames(cls.Button, className)}
            {...otherProps}
        >
            {children}
        </button>
    );
}

export default memo(Button);
