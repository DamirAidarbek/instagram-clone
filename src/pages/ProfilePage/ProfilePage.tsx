import { useQuery } from '@tanstack/react-query';
import { memo, useCallback } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Photo from "../../components/Photo/Photo.tsx";
import { RoutePaths } from "../../config/router/router.tsx";
import PostService from '../../services/post.service.ts';
import ProfileService from '../../services/profile.service.ts';
import { useUserStore } from "../../store/userStore.ts";
import Avatar from "../../ui/Avatar/Avatar.tsx";
import Button from "../../ui/Button/Button.tsx";
import Loader from '../../ui/Loader/Loader.tsx';
import Text from "../../ui/Text/Text.tsx";
import cls from './ProfilePage.module.scss';

function ProfilePage() {
    const { id: userId } = useParams<{ id: string }>()
    const logoutFunction = useUserStore(state => state.logout)
    const userData = useUserStore(state => state?.user)
    const navigate = useNavigate()

    const { data: posts, isLoading: postsLodaing } = useQuery({
        queryKey: ['posts'],
        queryFn: () => PostService.fetchPostsByUserId(userId!),
        enabled: !!userId,
        select: (response) => response.data
    })

    const { data: user, isLoading: userLoading, isFetching } = useQuery({
        queryKey: ['userData'],
        queryFn: () => ProfileService.fetchProfileData(userId!),
        enabled: !!userId,
        select: (response) => response.data
    })

    const logout = useCallback(() => {
        logoutFunction()    
        navigate(RoutePaths.main) 
    }, [])

    if (userLoading || postsLodaing || isFetching) {
        return <Loader className={cls.loader} />
    }

    return (
        <section className={cls.page}>
            <section className={cls.top}>
                <Avatar
                    src={user?.avatar}
                    size={150}
                    className={cls.avatar}
                />
                <div className={cls.aboutUser}>
                    <Text title={user?.username} className={cls.username} />
                    <div className={cls.info}>
                        <Text text={String(posts?.length) + ' publishes'} />
                        <Text text='0 likes' />
                        <Text text='0 follows' />
                    </div>
                    {userData?.id === user?.id && <Button onClick={logout} className={cls.logout}>Выйти из аккаунта</Button>}
                </div>
            </section>
            <section className={cls.bottom}>
                <Text title='Публикаций' className={cls.title} />
                <div className={cls.publishes}>
                    {posts?.map(post =>
                        <Photo src={post.img} key={post.id} />
                    )}
                </div>
            </section>
        </section>
    );
}

export default memo(ProfilePage);
