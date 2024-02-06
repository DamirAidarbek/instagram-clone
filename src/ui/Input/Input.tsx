import {InputHTMLAttributes, memo} from 'react';
import classNames from "classnames";
import cls from './Input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    className?: string
    label?: string
}

function Input(props: InputProps) {
    const {
        className,
        label,
        type = 'text',
        ...otherProps
    } = props

    return (
        <div className={classNames(cls.Input)}>
            {label && <label className={cls.label} htmlFor={label}>{label}</label>}
            <div className={cls.inputWrapper}>
                <input
                    id={label}
                    type={type}
                    className={classNames(cls.inputItem, className)}
                    {...otherProps}
                />
            </div>
        </div>
    );
}

export default memo(Input)
