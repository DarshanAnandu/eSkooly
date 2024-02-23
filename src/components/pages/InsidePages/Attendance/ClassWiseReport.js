import { TfiFaceSad } from "react-icons/tfi";
const ClassWiseReport = () => {
    return (
        <div className="p-9 w-full flex">
            <div className="bg-white w-1/3" style={{ padding: '10px'}}>
                <h5 className="font-bold" style={{ color: '#4d4ca', color: '#4d4cac' }}>10</h5>
                <div className="flex justify-center"><TfiFaceSad size="80px" color="#ff808b" className="" style={{ padding: '20px'}} /></div>
                <div className="flex justify-center"><span className="" style={{ color: "#ff808b" }}>Attendance Not Marked Yet !</span></div>
            </div>
        </div>
    );
}
export default ClassWiseReport;