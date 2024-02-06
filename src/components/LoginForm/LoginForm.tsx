import {ChangeEvent, FormEvent, memo, useCallback} from "react";
import { FaRegWindowClose } from "react-icons/fa";
import Modal from "../../ui/Modal/Modal.tsx";
import cls from './LoginForm.module.scss'
import Button from "../../ui/Button/Button.tsx";
import Input from "../../ui/Input/Input.tsx";
import {useLoginFormStore} from "../../store/loginFormStore.ts";

interface LoginFormProps {
    open: boolean
    onClose: () => void
}

function LoginForm(props: LoginFormProps) {
    const { open, onClose } = props
    const {
        username,
        password,
        setUsername,
        setPassword,
        authorization
    } = useLoginFormStore()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        authorization()
        onClose()
    }

    const changeUsername = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }, [])

    const changePassword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }, [])

    return (
        <Modal open={open} onClose={onClose}>
            <div className={cls.cap}>
                <h3 className={cls.title}>Форма авторизаций</h3>
                <FaRegWindowClose
                    size={30}
                    className={cls.icon}
                    onClick={onClose}
                />
            </div>
            <form
                onSubmit={handleSubmit}
                className={cls.form}
            >
                <Input
                    className={cls.input}
                    value={username}
                    onChange={changeUsername}
                    placeholder='Enter your username'
                    label='Username'
                    autoFocus
                />
                <Input
                    className={cls.input}
                    value={password}
                    onChange={changePassword}
                    type='password'
                    placeholder='Enter your password'
                    label='Password'
                />
                <Button className={cls.button}>
                    Авторизоваться
                </Button>
            </form>
        </Modal>
    );
}

export default memo(LoginForm);
