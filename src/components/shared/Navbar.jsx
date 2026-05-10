import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvater from '@/assets/user.png';
import NavLink from './NavLink';
const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between mt-6'>
            <div></div>
            <ul className='flex justify-between items-center gap-4 text-gray-700'>
                <li><NavLink href="/">Home</NavLink></li>
                <li><NavLink href="/about">About</NavLink></li>
                <li><NavLink href="/career">Career</NavLink></li>
            </ul>
            <div className='flex items-center gap-2'>
                <Image src={userAvater} alt="User Avatar"/>
                <button className='btn btn-primary'><Link href="/login">Login</Link></button>
            </div>
        </div>
    );
};

export default Navbar;