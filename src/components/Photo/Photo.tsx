import {ImgHTMLAttributes} from "react";
import cls from './Photo.module.scss'
import classNames from "classnames";

interface PhotoProps extends ImgHTMLAttributes<HTMLImageElement>{
    className?: string
}

function Photo(props: PhotoProps) {
    const {
        src,
        className,
        alt
    } = props

    return (
        <div className={classNames(cls.Photo, className)}>
            <img
                src={src}
                alt={alt}
                className={cls.img}
            />
        </div>
    )
}

export default Photo
