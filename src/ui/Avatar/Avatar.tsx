import {CSSProperties, ImgHTMLAttributes, memo} from 'react';
import classNames from "classnames";
import cls from './Avatar.module.scss'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
    size?: number
    className?: string
}

function Avatar(props: AvatarProps) {
    const {
        className,
        size = 50,
        src,
        alt,
        ...otherProps
    } = props

    const styles: CSSProperties = {
        width: `${size * 0.0623}rem`,
        height: `${size * 0.0623}rem`
    }

    return (
        <img
            className={classNames(cls.Avatar, className)}
            src={src}
            alt={alt}
            style={styles}
            {...otherProps}
        />
    );
}

export default memo(Avatar);
