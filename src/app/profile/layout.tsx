import NavigationBar from "@/components/NavigationBar/NavigationBar";

export default function ArticlesLayout({ children }) {
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
