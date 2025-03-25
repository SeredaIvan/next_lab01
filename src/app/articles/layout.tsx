import NavigationBar from "@/components/NavigationBar/NavigationBar";
import {ArticlesLayoutProps, Url} from "@/types/types";

export default function ArticlesLayout({ children }:ArticlesLayoutProps) {

    const urls:Url[] = [
        {title :'Всі статті', href:'/articles'},
        {title :'Улюблені статті', href:'/articles/favorite'},
        {title :'Створити статтю', href:'/articles/create'},
    ];
    return (
        <>
            <NavigationBar urls={urls}></NavigationBar>
            {children}
        </>
    );
}
