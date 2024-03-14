import Nav from '../navbars/NavHome5';
import Mock from './InsideHome/Mock';
import SecondPage from './InsideHome/SecondPage';
const Home = ({ loginType, setLogin, setLoginType }) => {
    // h-max w-max
    return (
        <div className='h-screen w-full overflow-auto bg-[#fff]'>
            <Nav loginType={loginType} setLogin={setLogin} setLoginType={setLoginType} />
            <Mock />
            <SecondPage />
            {/* <h1>hiii</h1> */}
        </div>
    )
}

export default Home