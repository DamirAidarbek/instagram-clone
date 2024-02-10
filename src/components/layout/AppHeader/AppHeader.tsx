import {FaInstagram, FaRegUser} from "react-icons/fa";
import cls from './AppHeader.module.scss'
import LoginForm from "../../LoginForm/LoginForm.tsx";
import {memo, useCallback, useState} from "react";
import Avatar from "../../../ui/Avatar/Avatar.tsx";
import {useUserStore} from "../../../store/userStore.ts";
import {useNavigate} from "react-router-dom";
import {RoutePaths} from "../../../config/router/router.tsx";

function AppHeader() {
    const [modal, setModal] = useState<boolean>(false)
    const user = useUserStore(state => state.user)
    const navigate = useNavigate()

    const closeModal = useCallback(() => {
        setModal(false)
    }, [])

    const openModal = useCallback(() => {
        setModal(true)
    }, [])

    const navigateToProfile = useCallback(() => {
        navigate(`${RoutePaths.profile}/${user?.id}`)
    }, [user])

    const navigateToMain = useCallback(() => {
        navigate(RoutePaths.main)
    }, [])

    return (
        <header className={cls.Header}>
            <div className={cls.headerWrapper}>
                <div className={cls.logo} onClick={navigateToMain}>
                    <FaInstagram />
                    <span>Instagram</span>
                </div>
                <div className={cls.avatarWrapper}>
                    {user
                        ? (
                            <Avatar
                                className={cls.avatar}
                                src={user?.avatar}
                                alt={user?.username}
                                size={40}
                                onClick={navigateToProfile}
                            />
                        )
                        : (
                            <FaRegUser
                                className={cls.avatar}
                                size={22}
                                onClick={openModal}
                            />
                        )
                    }

                </div>
            </div>
            <LoginForm
                open={modal}
                onClose={closeModal}
            />
        </header>
    );
}

export default memo(AppHeader);
