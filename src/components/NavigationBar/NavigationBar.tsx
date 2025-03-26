"use client"
import { usePathname } from "next/navigation";
import NavigationTail from "@/components/NavigationBar/NavigationTail/NavigationTail";
import { NavigationBarProps } from "@/types/types";
import styles from "./menu_style.module.scss";

function NavigationBar({ urls }: NavigationBarProps) {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <header className={styles.myMenu}>
            <div className={styles.logoContainer}>
                <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>
                </svg>
                <span>Lab01</span>
            </div>
            <div className={styles.linksContainer}>
                <div>
                    {urls.map(({ title, href }, index) => (
                        <NavigationTail
                            key={index}
                            title={title}
                            href={href}
                            active={pathname.replace(/\/$/, "") === href.replace(/\/$/, "")}
                            styles={styles}
                        />
                    ))}
                </div>
            </div>
            <div>

            </div>
        </header>
    );
}

export default NavigationBar;
