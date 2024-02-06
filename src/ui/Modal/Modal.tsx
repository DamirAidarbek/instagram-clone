import React, {memo, ReactNode} from "react";
import {Portal} from "./Portal.ts";
import cls from './Modal.module.scss'
import classNames from "classnames";

interface ModalProps {
    children: ReactNode
    open: boolean
    onClose: () => void
}

function Modal({ children, onClose, open }: ModalProps) {
    const onContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
    }

    if (!open) {
        return null
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, { [cls.opened]: open })}>
                <div className={cls.overlay} onClick={onClose}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}

export default memo(Modal)
