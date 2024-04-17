import React from 'react';
import Link from 'next/link';

const Logo = ({ fill, size }) => {
    return (
        <Link href="/events"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 32 32" with={size} height={size} fill={fill} style={{ enableBackground: 'new 0 0 32 32' }} xmlSpace="preserve">
            <path d="M16.8,31.5c-0.6,0-1.1,0-1.7,0c-0.1,0-0.1,0-0.2,0c-0.7-0.1-1.4-0.1-2.1-0.3c-3.6-0.8-6.6-2.6-9-5.5
            c-1.8-2.3-2.9-4.9-3.3-7.8c0-0.4-0.1-0.7-0.1-1.1c0-0.6,0-1.1,0-1.7c0-0.1,0-0.1,0-0.2c0.1-0.7,0.1-1.4,0.3-2.1
            c0.8-3.6,2.6-6.7,5.5-9c3.8-3,8.1-4,12.8-3.1c3.5,0.7,6.5,2.5,8.8,5.3c3.1,3.8,4.2,8.2,3.3,13c-0.7,3.7-2.6,6.7-5.5,9
            c-2.3,1.8-4.9,2.9-7.7,3.3C17.6,31.4,17.2,31.5,16.8,31.5z M13.6,16c0-2.5,0-5,0-7.5c0-0.1,0-0.2,0-0.3c0-0.3-0.3-0.6-0.7-0.6
            c-0.3,0-0.6,0.2-0.6,0.6c0,0.1,0,0.2,0,0.2c0,5,0,9.9,0,14.9c0,0.1,0,0.2,0,0.3c0,0.3,0.3,0.6,0.6,0.6c0.4,0,0.6-0.2,0.7-0.5
            c0-0.1,0-0.2,0-0.3C13.6,21,13.6,18.5,13.6,16z M19.7,16c0-2.5,0-5,0-7.4c0-0.1,0-0.2,0-0.3c0-0.3-0.3-0.5-0.6-0.5
            c-0.4,0-0.6,0.2-0.7,0.5c0,0.1,0,0.2,0,0.3c0,5,0,9.9,0,14.9c0,0.1,0,0.2,0,0.2c0,0.3,0.3,0.6,0.7,0.6c0.3,0,0.6-0.2,0.6-0.6
            c0-0.1,0-0.2,0-0.3C19.7,21,19.7,18.5,19.7,16z M4.7,16.6c0,0.8,0,1.6,0,2.3c0,1.1,0,2.3,0,3.4c0,0.4,0.3,0.7,0.6,0.7
            c0.4,0,0.6-0.3,0.6-0.7c0,0,0-0.1,0-0.1c0-3.7,0-7.4,0-11.1c0-0.1,0-0.1,0-0.2c0-0.3-0.3-0.6-0.6-0.6c-0.3,0-0.6,0.2-0.7,0.5
            c0,0.1,0,0.2,0,0.3C4.7,12.9,4.7,14.8,4.7,16.6z M26.1,16.6c0,1.9,0,3.7,0,5.6c0,0.1,0,0.1,0,0.2c0,0.3,0.3,0.6,0.6,0.6
            c0.3,0,0.6-0.2,0.6-0.5c0-0.1,0-0.2,0-0.3c0-3.7,0-7.4,0-11.1c0-0.1,0-0.1,0-0.2c0-0.4-0.3-0.6-0.7-0.6c-0.3,0-0.6,0.3-0.6,0.6
            c0,0.1,0,0.1,0,0.2C26.1,13,26.1,14.8,26.1,16.6z M11,16.5c0-0.6,0-1.1,0-1.7c0-0.9,0-1.7,0-2.6c0-0.4-0.3-0.7-0.7-0.7
            c-0.3,0-0.5,0.3-0.5,0.7c0,2.9,0,5.7,0,8.5c0,0,0,0.1,0,0.1c0.1,0.4,0.4,0.6,0.8,0.5c0.3-0.1,0.5-0.3,0.5-0.7
            C11,19.4,11,18,11,16.5z M22.3,16.5c0-0.1,0-0.2,0-0.3c0-1.3,0-2.6,0-3.9c0-0.4-0.2-0.7-0.6-0.7c-0.4,0-0.7,0.3-0.7,0.7
            c0,2.9,0,5.7,0,8.6c0,0,0,0.1,0,0.1c0,0.3,0.3,0.6,0.6,0.6c0.4,0,0.6-0.3,0.6-0.7C22.3,19.4,22.3,17.9,22.3,16.5z M16.5,15.4
            c0,0.1,0,0.2,0,0.3c0,1.5,0,3,0,4.5c0,0.3-0.2,0.5-0.5,0.5c-0.3,0-0.5-0.2-0.6-0.5c0-0.2,0-0.4,0-0.6c0-0.1-0.1-0.3-0.2-0.4
            c-0.2-0.2-0.4-0.2-0.6-0.1c-0.2,0.1-0.4,0.3-0.4,0.5c0,0.3,0,0.5,0,0.8c0.1,0.8,0.4,1.1,1.2,1.1c0.4,0,0.8,0,1.2,0
            c0.6,0,1-0.4,1-1c0-0.3,0-0.6,0-0.9c0-1.1,0-2.2,0-3.3C17.7,15.7,17.2,15.4,16.5,15.4z M15.5,16.5c0-0.1,0-0.2,0-0.3
            c0-1.1,0-2.2,0-3.3c0-0.4,0.2-0.6,0.5-0.6c0.3,0,0.5,0.2,0.5,0.6c0,0.4,0,0.8,0,1.2c0,0.1,0.1,0.2,0.2,0.3
            c0.4,0.3,0.9,0,1-0.5c0-0.5,0-1,0-1.4c-0.1-0.6-0.4-0.9-1-1c-0.4,0-0.9,0-1.3,0c-0.7,0-1,0.4-1,1c0,1,0,1.9,0,2.9
            C14.3,16.2,14.8,16.6,15.5,16.5z M3.4,16c0-0.8,0-1.5,0-2.3c0-0.1,0-0.2,0-0.3c0-0.3-0.2-0.5-0.5-0.6c-0.3-0.1-0.6,0.1-0.7,0.4
            c0,0.1-0.1,0.3-0.1,0.4c0,1.6,0,3.2,0,4.8c0,0.1,0,0.2,0,0.2c0,0.3,0.3,0.5,0.6,0.5c0.3,0,0.6-0.1,0.7-0.4c0-0.1,0-0.2,0-0.4
            C3.4,17.6,3.4,16.8,3.4,16z M29.9,16c0-0.8,0-1.7,0-2.5c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.6,0.3-0.6,0.7c0,1.6,0,3.1,0,4.7
            c0,0.1,0,0.3,0,0.4c0,0.4,0.3,0.6,0.7,0.6c0.3,0,0.6-0.3,0.6-0.7C29.9,17.7,29.9,16.8,29.9,16z M7.2,16c0,0.4,0,0.8,0,1.2
            c0,0,0,0,0,0c0,0.4,0.3,0.7,0.6,0.7c0.4,0,0.6-0.3,0.6-0.7c0-0.8,0-1.7,0-2.5c0-0.4-0.3-0.7-0.6-0.7c-0.4,0-0.6,0.3-0.6,0.7
            C7.2,15.2,7.2,15.6,7.2,16z M24.8,16c0-0.4,0-0.8,0-1.2c0-0.4-0.3-0.7-0.6-0.7c-0.4,0-0.6,0.3-0.6,0.7c0,0.8,0,1.6,0,2.5
            c0,0.4,0.3,0.7,0.6,0.7c0.4,0,0.6-0.3,0.6-0.7C24.8,16.8,24.8,16.4,24.8,16z"/>
        </svg></Link>

    );
}

export default Logo;
