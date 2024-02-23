import { useEffect } from 'react';
import { useState } from 'react';

const LiveClass = () => {
    const [check, setCheck] = useState(false);
    const [schedule, setSchedule] = useState(0);
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    const formatTime = (time) => {
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`;
    };
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatDate = (date) => {
        const options = { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };
    return (
        <div className='p-9'>
            <div className='flex'>
                <div className='w-2/5'>
                    <div className='flex justify-center'><button className='flex items-center mt-2 p-2 px-5 text-white' style={{ background: 'linear-gradient(87deg, #f5365c 0, #f56036 100%)', borderRadius: '20px' }}><span className='pl-2'>Host Meetings</span></button></div>
                    <div class="relative flex items-center my-3 mt-5">
                        <label class="text-[13px] text-white absolute px-2 top-[-10px] left-[18px] font-semibold" style={{ background: 'linear-gradient(45deg, #2840e0, #2c45e7)', borderRadius: '30px', border: '1px solid #999' }}>Meeting Title*</label>
                        <input type="text" placeholder="Meeting Title*"
                            class="px-5 bod-sin py-3.5 bg-transparent text-black w-full text-sm border-2 rounded outline-none" style={{ borderRadius: '30px' }} />
                    </div>
                    <div class="relative flex items-center my-3 mt-5">
                        <label class="text-[13px] text-white absolute px-2 top-[-10px] left-[18px] font-semibold" style={{ background: 'linear-gradient(45deg, #2840e0, #2c45e7)', borderRadius: '30px', border: '1px solid #999' }}>Meeting ID*</label>
                        <input type="text" placeholder="Meeting ID*"
                            class="px-5 bod-sin py-3.5 bg-transparent text-black w-full text-sm border-2 rounded outline-none" style={{ borderRadius: '30px' }} />
                    </div>
                    <div class="relative flex items-center my-3 mt-5">
                        <label class="text-[13px] text-white absolute px-2 top-[-10px] left-[18px] font-semibold" style={{ background: 'linear-gradient(45deg, #2840e0, #2c45e7)', borderRadius: '30px', border: '1px solid #999' }}>Meeting with*</label>
                        <input type="text" placeholder="Meeting with*"
                            class="px-5 bod-sin py-3.5 bg-transparent text-black w-full text-sm border-2 rounded outline-none" style={{ borderRadius: '30px' }} />
                    </div>
                    <strong className='font-medium'>
                        <input type='checkbox' name='schedule' onClick={() => { setCheck(!check) }} className='mr-1' />
                        I want to schedule this meeting.
                    </strong>
                    {check && (
                        <div>
                            <div className='flex'>
                                <div className='w-1/2'>
                                    <div class="relative flex items-center my-3 mt-5">
                                        <label class="text-[13px] text-white absolute px-2 top-[-10px] left-[18px] font-semibold" style={{ background: 'linear-gradient(45deg, #2840e0, #2c45e7)', borderRadius: '30px', border: '1px solid #999' }}>Date*</label>
                                        <input type="date"
                                            class="px-5 bod-sin py-3.5 bg-transparent text-black w-full text-sm border-2 rounded outline-none" style={{ borderRadius: '30px' }} />
                                    </div>
                                </div>
                                <div className='ml-1 w-1/2'>
                                    <div class="relative flex items-center my-3 mt-5">
                                        <label class="text-[13px] text-white absolute px-2 top-[-10px] left-[18px] font-semibold" style={{ background: 'linear-gradient(45deg, #2840e0, #2c45e7)', borderRadius: '30px', border: '1px solid #999' }}>Start Time*</label>
                                        <input type="time"
                                            class="px-5 bod-sin py-3.5 bg-transparent text-black w-full text-sm border-2 rounded outline-none" style={{ borderRadius: '30px' }} />
                                    </div>
                                </div>
                            </div>
                            <div class="relative flex items-center my-3 mt-5">
                                <label class="text-[13px] text-white absolute px-2 top-[-10px] left-[18px] font-semibold" style={{ background: 'linear-gradient(45deg, #2840e0, #2c45e7)', borderRadius: '30px', border: '1px solid #999' }}>Duration*</label>
                                <input type="text" placeholder="e.g 1 hour 30 minutes" name='duration'
                                    class="px-5 bod-sin py-3.5 bg-transparent text-black w-full text-sm border-2 rounded outline-none" style={{ borderRadius: '30px' }} />
                            </div>
                        </div>
                    )}
                    <textarea className='w-full p-3 rounded-xl bod-in' rows={5} name='message' placeholder='write your message here, if any..' />
                    <p>Max 244 Character</p>
                    <div className='flex justify-center'><button className='flex items-center mt-2 p-2 px-5 text-white' style={{ background: 'linear-gradient(87deg, #f5365c 0, #f56036 100%)', borderRadius: '20px' }}><span className='pl-2'>Create & Join</span></button></div>
                </div>
                <div className='w-3/5 ml-5 rounded-2xl h-max'>
                    <div className='rounded-2xl' style={{ backgroundImage: 'url(https://eskooly.com/bb/asserts/images/apploginbg.jpg)' }}>
                        <div className='text-white p-8 flex flex-col items-center rounded-2xl acc-det-bg'>
                            <h3 className='font-bold text-2xl '>{formatTime(time)}</h3>
                            <span className='leading-4'>{formatDate(date)}</span>
                        </div>
                    </div>
                    <h6 className='flex mt-3'>
                        <span className={`mx-2 p-1 px-3 cursor-pointer focus:ring-4 focus:ring-blue-300 rounded-2xl ${schedule === 0 ? 'text-white' : ''}`} style={{ background: schedule === 0 ? `linear-gradient(45deg, #2840e0, #2c45e7)` : 'rgb(209 213 219 / var(--tw-bg-opacity))' }} onClick={() => { setSchedule(0) }}>All Meetings</span>
                        <span className={`mx-2 p-1 px-3 cursor-pointer focus:ring-4 focus:ring-blue-300 rounded-2xl ${schedule === 1 ? 'text-white' : ''}`} style={{ background: schedule === 1 ? `linear-gradient(45deg, #2840e0, #2c45e7)` : 'rgb(209 213 219 / var(--tw-bg-opacity))' }} onClick={() => { setSchedule(1) }}>Today</span>
                        <span className={`mx-2 p-1 px-3 cursor-pointer focus:ring-4 focus:ring-blue-300 rounded-2xl ${schedule === 2 ? 'text-white' : ''}`} style={{ background: schedule === 2 ? `linear-gradient(45deg, #2840e0, #2c45e7)` : 'rgb(209 213 219 / var(--tw-bg-opacity))' }} onClick={() => { setSchedule(2) }}>Tomorrow</span>
                        <span className={`mx-2 p-1 px-3 cursor-pointer focus:ring-4 focus:ring-blue-300 rounded-2xl ${schedule === 3 ? 'text-white' : ''}`} style={{ background: schedule === 3 ? `linear-gradient(45deg, #2840e0, #2c45e7)` : 'rgb(209 213 219 / var(--tw-bg-opacity))' }} onClick={() => { setSchedule(3) }}>Self Hosted</span>
                        <span className={`mx-2 p-1 px-3 cursor-pointer focus:ring-4 focus:ring-blue-300 rounded-2xl ${schedule === 4 ? 'text-white' : ''}`} style={{ background: schedule === 4 ? `linear-gradient(45deg, #2840e0, #2c45e7)` : 'rgb(209 213 219 / var(--tw-bg-opacity))' }} onClick={() => { setSchedule(4) }}>Invitations</span>
                    </h6>
                    <div className='overflow-auto' style={{ height: '580px' }}>
                        <div className='flex flex-col items-center mt-4'>
                            <img src='https://eskooly.com/bb/assets/liveclass.png' alt='peoples-logo' className='max-w-72 h-auto' />
                            <br />
                            <strong className='text-lg' style={{ color: '#999' }}>No Meeting Found.</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LiveClass;