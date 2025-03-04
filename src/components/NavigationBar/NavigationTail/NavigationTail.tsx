import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface NavigationTailProps {
    title: string;
    href: string;
    active: boolean;
}

const NavigationTail: React.FC<NavigationTailProps> = ({ title, href, active }) => (
    <Link
        href={href}
        className={clsx(
            "block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 ",
            active && "bg-sky-700 text-white rounded px-2 py-1"
        )}
    >
        {title}
    </Link>
);

export default NavigationTail;
