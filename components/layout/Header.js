import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Header = () => {
    let navLinks = [
        {name:"HOME", link:"/"},
        {name:"ABOUT", link:"/"},
        {name:"FEATURE", link:"/"},
        {name:"CONTACT", link:"#contact"},
    ]
  return (
    // <div className='w-full bg-gray-200 box-border h-12'>
    //     <div className='container mx-auto px-4 flex'>
    //         <div className=''>
    //             <Image src='/images/logo.png' alt='logo' width={`120`} height={`40`}/>
    //         </div>
    //         <div>
    //             <Link href={`/`}>
    //                 <a>Company</a>
    //             </Link>
    //             <Link href={`/`}>
    //                 <a>Features</a>
    //             </Link>
    //             <Link href={`/`}>
    //                 <a>Services</a>
    //             </Link>
    //             <Link href={`/login`}>
    //                 <button className='loginButtonHandler'>
    //                     <span>Login</span>
    //                 </button>
    //             </Link>
    //         </div>
    //     </div>
    // </div>
    // <div className='w-full fixed shadow-md top-0 left-0'>
    //     <div className='flex justify-between items-center w-full h-full px-2'>
    //         <Image src='/images/logo.png' alt='logo' width={`120`} height={`40`}/>
    //         <div>
    //             <ul className='flex'>
    //                 <Link href="/">
    //                     <li className="ml-10 text-sm uppercase hover:border-r">Home</li>
    //                 </Link>
    //                 <Link href="/">
    //                     <li className="ml-10 text-sm uppercase hover:border-r">About</li>
    //                 </Link>
    //                 <Link href="/">
    //                     <li className="ml-10 text-sm uppercase hover:border-r">Features</li>
    //                 </Link>
    //                 <Link href="/">
    //                     <li className="ml-10 text-sm uppercase hover:border-r">Contact</li>
    //                 </Link>
    //                 <Link href="/login">
    //                     <button className='loginButtonHandler'>
    //                         <span>Login</span>
    //                     </button>
    //                 </Link>
                        
    //             </ul>
    //         </div> 
    //     </div>
    // </div>

    <div className='w-full fixed shadow-md top-0 left-0 z-50'>
        <div className='flex item-center justify-between bg-white py-4 px-7'>
            {/* logo */}
            <Image src="/images/logo.png" alt='logo' width="120" height="40" />
            {/* links */}
            <ul className='flex items-center'>
                {
                    navLinks.map((navlink) => (
                        <li key={navlink.name} className="ml-8 text-sm">
                            <a href={navlink.link} className="text-gray-800 hover:text-gray-400 duration-500">{navlink.name}</a>
                        </li>
                    ))
                }
                <Link href={`/login`}>
                    <button className='bg-red-600 hover:bg-red-400 duration-500 text-white py-2 px-6 ml-8 text-sm'>
                        Login
                    </button>
                </Link>
                
            </ul>
        </div>
    </div>
  )
}

export default Header