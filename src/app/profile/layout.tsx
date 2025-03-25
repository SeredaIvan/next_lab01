import NavigationBar from "@/components/NavigationBar/NavigationBar";
import {ProfileLayoutProps} from "@/types/types";

export default function ArticlesLayout({ children }:ProfileLayoutProps) {
    const urls = [
        {title : 'Статті', href : '/articles'},
        {title : 'Профіль', href : '/profile/settings'},
        {title : 'Безпека профілю', href : '/profile/security'},
    ];

    return (
        <>
            <NavigationBar urls={urls}></NavigationBar>
            {children}
        </>
    );
}
