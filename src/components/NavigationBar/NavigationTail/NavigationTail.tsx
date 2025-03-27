import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface NavigationTailProps {
    title: string;
    href: string;
    active: boolean;
    styles: { readonly [key: string]: string };
}

const NavigationTail: React.FC<NavigationTailProps> = ({ title, href, active , styles }) => (
    <Link
        href={href}
        className={clsx(
            styles.tail,
            active && styles.active
        )}
    >
        {title}
    </Link>
);

export default NavigationTail;
