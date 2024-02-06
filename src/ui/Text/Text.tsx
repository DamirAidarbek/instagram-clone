import classNames from "classnames";
import cls from './Text.module.scss'

interface TextProps {
    title?: string
    text?: string
    className?: string
}

function Text(props: TextProps) {
    const {
        title,
        text,
        className
    } = props

    return (
        <div className={classNames(cls.Text, className)}>
            {title && <h3 className={cls.title}>{title}</h3>}
            {text && <p>{text}</p>}
        </div>
    )
}

export default Text
