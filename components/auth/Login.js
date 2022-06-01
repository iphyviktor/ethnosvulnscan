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
            />
            <br/>
            <input type={`password`} 
            placeholder='Password' 
            required 
            value={password} onChange={(e) => setPassword(e.target.value)} 
            />
            <br/>
            <button type='submit'>
                {loading ? 'Authenticating...' : 'Login'}
            </button>
        </form>
    </div>
  )
}

export default Login