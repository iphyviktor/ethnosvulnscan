import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

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
    <div>
        <h1>Signup</h1>
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

            <input type='text' 
            placeholder='email' 
            required 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            pattern ='\S+@\S+\.\S+'
            title='Your email is invalid'
            />
            <br/>

            <input type={`password`} 
            placeholder='Password' 
            required 
            value={password} onChange={(e) => setPassword(e.target.value)} 
            minLength={8}
            />
            <br/>
            <button type='submit'>
                {loading ? 'Loading...' : 'Register'}
            </button>
        </form>
    </div>
  )
}

export default Register