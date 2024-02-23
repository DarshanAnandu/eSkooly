const AddORUpdateExam = () => {
    return (
        <div className='flex items-center justify-center p-9'>
            <div className='w-full flex flex-col items-center justify-center'>
                <h3 className='text-center text-xl font-bold text-red-600'>Add OR Update Exam</h3>
                <hr />
                <select id="feeFor" placeholder="---- Select Class Teacher ----" className="w-3/5 mt-2 p-2 focus:ring-blue-500 focus:border-blue-500">
                    <option selected>---- Select Class Teacher ----</option>
                </select>
                <button className='flex items-center bg-red-500 rounded-sm mt-2 p-1 px-2 text-white'><span className='pl-2'>Search</span></button>
            </div>
        </div>
    );
}
export default AddORUpdateExam;