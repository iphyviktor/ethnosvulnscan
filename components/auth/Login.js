import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import AuthContext from '../../context/AuthContext'
import { toast } from 'react-toastify'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const { loading, error, isAuthenticated, login, clearErrors } = useContext(AuthContext);

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
        login({username, password});
    }

  return (
    <div className='flex h-screen w-full'>
        <div style="background-image: url('/images/Pen_Testing.jpg');" className="w-full h-full bg-contain">Test</div>
        <div>
        <h1>Login</h1>
        <form onSubmit={submitHandler}>
            <input type='text' 
            placeholder='Username' 
            required 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            // pattern ='\S+@\S+\.\S+'
            // title='Your username is invalid'
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
            <br/>
            <input type={`password`} 
            placeholder='Password' 
            required 
            value={password} onChange={(e) => setPassword(e.target.value)} 
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 mt-4"
            />
            <br/>
            <button type='submit' className='bg-red-600 hover:bg-red-400 duration-500 text-white py-2 px-6 rounded-sm text-sm mt-4'>
                {loading ? 'Authenticating...' : 'Login'}
            </button>
        </form>
        </div>
        
    </div>
  )
}

export default Login