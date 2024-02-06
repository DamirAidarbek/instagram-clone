import {memo, useCallback, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import Avatar from "../../ui/Avatar/Avatar.tsx";
import cls from './ProfilePage.module.scss'
import Text from "../../ui/Text/Text.tsx";
import Photo from "../../components/Photo/Photo.tsx";
import Button from "../../ui/Button/Button.tsx";
import {useUserStore} from "../../store/userStore.ts";
import {Post} from "../../types/types.ts";
import {fetchPostsByUserId} from "../../services/fetchPostsByUserId.ts";
import {RoutePaths} from "../../config/router/router.tsx";

function ProfilePage() {
    const logoutFunction = useUserStore(state => state.logout)
    const [posts, setPosts] = useState<Post[]>([])
    const navigate = useNavigate()
    const { id, avatar, username } = useUserStore(state => state.user)!

    const logout = useCallback(() => {
        logoutFunction()
        navigate(RoutePaths.main)
    }, [])

    useEffect(() => {
        async function preload() {
            if (!id) return <p>No user ID</p>
            const posts = await fetchPostsByUserId(id)
            setPosts(posts ? posts : [])
        }

        preload()
    }, []);

    return (
        <section className={cls.page}>
            <section className={cls.top}>
                <Avatar
                    src={avatar}
                    size={150}
                    className={cls.avatar}
                />
                <div className={cls.aboutUser}>
                    <Text title={username} className={cls.username} />
                    <div className={cls.info}>
                        <Text text='0 published' />
                        <Text text='0 likes' />
                        <Text text='0 follows' />
                    </div>
                    <Button onClick={logout} className={cls.logout}>Выйти из аккаунта</Button>
                </div>
            </section>
            <section className={cls.bottom}>
                <Text title='Публикаций' className={cls.title} />
                <div className={cls.publishes}>
                    {posts.map(post =>
                        <Photo src={post.img} key={post.id} />
                    )}
                </div>
            </section>
        </section>
    );
}

export default memo(ProfilePage);
