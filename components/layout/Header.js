import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Header = () => {
  return (
    <div className='w-full bg-gray-200 box-border h-12'>
        <div className='container mx-auto px-4 flex'>
            <div className=''>
                <Image src='/images/ethnos-logo.png' alt='logo' width={`150`} height={`40`}/>
            </div>
            <div>
                <Link href={`/`}>
                    <a>Company</a>
                </Link>
                <Link href={`/`}>
                    <a>Features</a>
                </Link>
                <Link href={`/`}>
                    <a>Services</a>
                </Link>
                <Link href={`/login`}>
                    <button className='loginButtonHandler'>
                        <span>Login</span>
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header