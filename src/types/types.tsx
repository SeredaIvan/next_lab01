import {ReactNode} from "react";

export type PageProps= {
    params: Promise<{ id: string }>
}

export type Post = {
    userId:number,
    id:number,
    title:string,
    body:string
}
export type Comment ={
    postId:number,
    id:number,
    name:string,
    email:string,
    body:string
}
export type LayoutProps = {
    children: ReactNode
}

export type ProfileLayoutProps = LayoutProps
export type ArticlesLayoutProps = LayoutProps

export type Url={
    title:string,
    href:string
}
export type NavigationBarProps = {
    urls: Url[];
};
