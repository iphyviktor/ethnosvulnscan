import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

import AuthContext from '../../context/AuthContext'
import { toast } from 'react-toastify'


const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();

    const { loading, error, isAuthenticated, register, clearErrors } = useContext(AuthContext);

    useEffect(() => {
        if(error){
            toast.error(error);
            clearErrors();
        }
        if(isAuthenticated && !loading){
            router.push('/dashboard');
        }
    }, [isAuthenticated, error, loading]);

    const submitHandler = (e) => {
        e.preventDefault();
        register({username, email, password});
    }

  return (
    <div className='flex h-screen w-full'>
        <div className="w-3/5 h-full bg-auth-bg-img bg-no-repeat bg-cover bg-center">
            <div className='m-auto text-center self-center'>
                <h1 className='text-4xl text-white font-bold'>Ethnos Vulnerability Scanner</h1>
                <p className='text-white font-bold'>Using up-to-date CVEs, gain insight into the <br/>security posture of your infrastructure</p>
            </div>   
        </div>

        <div className='w-2/5 m-auto items-center px-10'>
            <div className='mb-10'>
                <Image src={`/images/logo.png`} width="120" height="40" alt='logo'/>
            </div>
            <h1 className='text-2xl font-bold'>Signup</h1>
            <div className='w-full mt-12'>
                <form onSubmit={submitHandler}>
                    <input type='text' 
                    placeholder='Username' 
                    required 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    // pattern ='\S+@\S+\.\S+'
                    // title='Your username is invalid'
                    className="w-full px-4 mb-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                    <br/>

                    <input type='text' 
                    placeholder='email' 
                    required 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    pattern ='\S+@\S+\.\S+'
                    title='Your email is invalid'
                    className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                    <br/>

                    <input type={`password`} 
                    placeholder='Password' 
                    required 
                    value={password} onChange={(e) => setPassword(e.target.value)} 
                    minLength={8}
                    className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                    <br/>
                    <button type='submit' className='bg-red-600 hover:bg-red-400 duration-500 text-white py-2 px-6 rounded-sm text-sm mt-4'>
                        {loading ? 'Loading...' : 'Register'}
                    </button>
                </form>

                <div className='text-center mt-5'>
                    <p>Already have an account?</p>
                    <Link href="/login">
                        <a className='hover:text-red-500 font-bold text-sm'>Log in here</a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register