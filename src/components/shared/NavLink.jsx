'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
    const pathName = usePathname();
    console.log(pathName,'pathname');
    const isactive = href === pathName;

    return (
        <Link href={href} className={`${isactive ? 'text-primary' : 'text-gray-700'} hover:text-primary`}>
            {children}
        </Link>
    );
};

export default NavLink;