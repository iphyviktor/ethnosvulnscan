import axios from 'axios';
import { useState, useEffect, createContext } from 'react'
import { useRouter } from 'next/router';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState(null);

    const router = useRouter();

    // Login user
    const login = async ({ username, password }) => {
        try {
            setLoading(true);
            const res = await axios.post(`${process.env.API_URL}/api/auth/login`, {
                username,
                password
            })

            if(res.data.success){
                isAuthenticated(true);
                setLoading(false);
                router.push("/dashboard")
            }
        } catch (error) {
            setLoading(false);
            setError(
                error.response && (error.response.data.detail || error.response.data.error)
            )
        }
    }

    // Register user
    const register = async ({ username, email, password }) => {
        try {
            setLoading(true);
            const res = await axios.post(`${process.env.API_URL}/api/auth/register`, {
                username,
                email,
                password
            })

            if(res.data.username){
                // isAuthenticated(true);
                setLoading(false);
                router.push("/login")
            }
        } catch (error) {
            setLoading(false);
            setError(
                error.response && (error.response.data.detail || error.response.data.error)
            )
        }
    }
    // clear error
    const clearErrors = () =>{
        setError(null);
    }


    return (
        <AuthContext.Provider
            value={{
                loading,
                user,
                isAuthenticated,
                error,
                register,
                login,
                clearErrors
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContext