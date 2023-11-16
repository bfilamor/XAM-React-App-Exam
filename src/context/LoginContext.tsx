import { createContext, useMemo, useState, useContext, SetStateAction, Dispatch } from 'react';

interface ILogin {
    userName: string;
    password: string;
    branchId: string;
  }
type LoginContextType = {
    loginData : ILogin;
    isLoggedIn : Boolean;
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
    setLoginData : any
  };

const LoginContext = createContext<LoginContextType>({
        loginData: {
            userName: '',
            password: '',
            branchId: ''
        },
      isLoggedIn : false,
      setIsLoggedIn: () => false,
      setLoginData : () => {
        return {
            userName: '',
            password: '',
            branchId: ''
        }
    }

} || null);
LoginContext.displayName = 'LoginContext';

export const useLogin = () => {
    const context = useContext(LoginContext)
    if (context === undefined) {
        throw new Error('useLogin must be used within a ValueProvider')
    }
    return context
}

const LoginProvider = ({children} : { children: React.ReactNode }) => {

    const [loginData, setLoginData] = useState({
        branchId: '',
        userName: '',
        password: ''
      });
      const [isLoggedIn, setIsLoggedIn] = useState(false);


   
    const valueObject = useMemo(() => {
        return { loginData, setLoginData, isLoggedIn, setIsLoggedIn }
    }, [loginData, setLoginData, isLoggedIn, setIsLoggedIn])

    return <LoginContext.Provider value={valueObject}>{children} </LoginContext.Provider>
}
export default LoginProvider
