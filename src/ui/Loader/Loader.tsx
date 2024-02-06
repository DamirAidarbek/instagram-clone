import cls from './Loader.module.scss'
import {memo} from "react";

function Loader({ className }: { className?: string }) {
    return (
        <div className={className}>
            <div className={cls.loader}></div>
        </div>
    )
}

export default memo(Loader)
