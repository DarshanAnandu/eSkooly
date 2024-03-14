import Logo from '../../assets/Vidyalay.png';
const NavHome = ({ loginType, setLogin, setLoginType }) => {
    return (
        <div className='flex justify-around sticky top-0 bg-[#fff] w-full py-7 items-center'>
            <div className='flex justify-between ml-[-8rem]'>
                <img src={Logo} alt='logo not visible' className='h-[60px] p-[8px] mx-4 cursor-pointer' />
                <button className='mx-4'>Product</button>
                <button className='mx-4'>Resources</button>
                <button className='mx-4'>Pricing</button>
                <button className='mx-4'>Talk to Sales</button>
            </div>
            <div className='flex mr-[-8rem] justify-between'>
                <button className='mx-4 hover:bg-black hover:text-[#fff] py-2 px-3 rounded-xl' onClick={() => {
                    setLogin(true);
                    setLoginType(true);
                    // window.location.reload();
                }}>Login</button>
                <button className='mx-4 border-black border hover:border-none py-2 px-3 rounded-xl' onClick={() => {
                    setLogin(true);
                    setLoginType(false);
                    // window.location.reload();
                }}>Sign up</button>
                <button className='mx-4 text-[#fff] border-black border hover:bg-[#fff] hover:text-[black] bg-black py-2 px-3 rounded-xl'>Book a demo</button>
            </div>
        </div>
    );
}
export default NavHome;