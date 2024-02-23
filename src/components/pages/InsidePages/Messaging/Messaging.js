const Messaging = () => {
    return (
        <div className='p-9'>
            <div className='flex'>
                <div className='shadow rounded hover:shadow-2xl hover:rounded-xl bg-white w-1/2 p-10 text-center flex flex-col'>
                    <h5 className='cursor-pointer m-2 font-semibold' style={{ color: '#5e81f4', fontSize: '1.25rem' }}>COMPOSE A MESSAGE</h5>
                    <label className='flex flex-col justify-center items-center my-3' style={{ fontSize: '12px', color: '#9698d6' }}>
                        Send Message To*
                        <select className='bg-transparent bod-in rounded-2xl w-1/5 py-2 px-3' style={{ fontSize: '14px', color: '#495057' }}>
                            <option>All Students</option>
                            <option>All Teachers</option>
                            <option>Specific Class</option>
                            <option>Specific Student</option>
                            <option>Specific Teacher</option>
                        </select>
                    </label>
                    <textarea id='message' rows='5' placeholder='Write your Message here...' className='bg-transparent bod-in rounded-2xl py-2 px-3 mt-3 focus:outline-blue-600' />
                    <span>244 Character</span>
                    <div className='flex justify-center'><button className='bg-transparent bod-in rounded w-max py-2 px-3 my-3'>Attach a file</button></div>
                    <hr />
                    <div className='flex justify-center'><button className='text-white text-bold bod-in rounded-xl w-max py-2 px-3 my-3' style={{ background: 'linear-gradient(45deg, #5e81f4, #7191f7)' }}>Send Message</button></div>
                </div>
                <div className='w-1/2 p-3 pl-6'>
                    <div className='flex justify-between'>
                        <h6 className='flex'>
                            <span className='px-2' style={{ color: '#5e81f4' }}>Sent</span>
                            <span className='px-2' style={{ color: '#9698d6' }}>All</span>
                            <span className='px-2' style={{ color: '#4d4cac' }}>Chat ( 0 - 50 )</span>
                        </h6>
                        <h6>
                            <span className='text-red-500'>Received</span>
                        </h6>
                    </div>
                    <div className='flex justify-center text-white my-4'><button className='cursor-pointer rounded-xl' style={{ padding: '10px 19px', fontSize: '15px', background: 'linear-gradient(45deg, #9698d6, #a9abdb)' }}>Load More</button></div>
                </div>
            </div>
        </div>
    );
}
export default Messaging;