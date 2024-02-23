const HomeWork = () => {
    return (
        <div className='p-9'>
            <div className='flex justify-between items-center p-3 rounded bg-white'>
                <div>
                    <b>Homework</b>
                    <span>|</span>
                    <span>Homeworks</span>
                </div>
                <div>
                    <button className='flex items-center text-white justify-center ml-3 px-8 bg-violet-300' style={{ borderColor: '#4099ff', padding: '10px', fontSize: '15px', borderRadius: '12px' }}>Add Homework</button>
                </div>
            </div>
            <div className='flex items-center p-3 mt-2 bg-white rounded'>
                <div class="relative flex items-center my-3 mt-5 mx-2 w-1/4">
                    <label class="text-[13px] text-white absolute px-2 top-[-10px] left-[18px] font-semibold" style={{ background: 'linear-gradient(87deg, #5e72e4 0, #825ee4 100%)', borderRadius: '30px', border: '1px solid #999' }}>Homework Date*</label>
                    <input type="text" placeholder="******"
                        class="px-5 bod-sin py-3.5 bg-transparent text-black w-full text-sm border-2 rounded outline-none" style={{ borderRadius: '30px' }} />
                </div>
                <div class="relative flex items-center my-3 mx-2 mt-5 w-1/4">
                    <label class="text-[13px] text-white absolute px-2 top-[-10px] left-[18px] font-semibold" style={{ background: 'linear-gradient(87deg, #5e72e4 0, #825ee4 100%)', borderRadius: '30px', border: '1px solid #999' }}>Class*</label>
                    <select name="timezone" id='searchlist'
                        class="px-5 bod-sin py-3.5 bg-transparent text-black w-full text-sm border-2 rounded outline-none" style={{ borderRadius: '30px', }}>
                        <option value="All Teachers">All Classes</option>
                    </select>
                </div>
                <div class="relative flex items-center my-3 mx-2 mt-5 w-1/4">
                    <label class="text-[13px] text-white absolute px-2 top-[-10px] left-[18px] font-semibold" style={{ background: 'linear-gradient(87deg, #5e72e4 0, #825ee4 100%)', borderRadius: '30px', border: '1px solid #999' }}>Teacher*</label>
                    <select name="timezone" id='searchlist'
                        class="px-5 bod-sin py-3.5 bg-transparent text-black w-full text-sm border-2 rounded outline-none" style={{ borderRadius: '30px', }}>
                        <option value="All Teachers">All Teachers</option>
                    </select>
                </div>
                <button className='flex items-center text-white justify-center ml-3 mx-2 px-3 h-min py-2 rounded-3xl' style={{ background: 'linear-gradient(87deg, #5e72e4 0, #825ee4 100%)' }}> Search</button>
            </div>
            <div className='mt-4 p-3 bg-white'>
                <span className='flex justify-center'>No Data Found!</span>
            </div>
        </div>
    );
}
export default HomeWork;  