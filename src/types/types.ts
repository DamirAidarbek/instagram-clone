
export interface User {
    id: string
    username: string
    password: string
    avatar: string
}

export interface Post {
    id: string
    userId: string
    title: string
    img: string
    user: User
}

export interface Comment {
    id: string
    userId: string
    postId: string
    text: string
    user: User
}
