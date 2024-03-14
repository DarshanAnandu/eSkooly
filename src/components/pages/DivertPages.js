import { useState, useEffect } from "react";
import Home from './Home2'
import SignUp from "../Signup/Type-1/SignUp";

const DivertPages = () => {
    const [login, setLogin] = useState(false);
    const [loginType, setLoginType] = useState(true);
    useEffect(() => {
        if (login) {
            console.log("Navigating to SignUp component");
        }
    }, [login]);
    return (
        <div className="overflow-auto flex w-full h-full">
            {login ? <SignUp loginType={loginType} /> : <Home loginType={loginType} setLogin={setLogin} setLoginType={setLoginType} />}
        </div>
    );
}
export default DivertPages;