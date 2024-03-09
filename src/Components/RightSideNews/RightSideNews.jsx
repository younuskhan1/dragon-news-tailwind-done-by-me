import swimming from "../../assets/qZone1.png";
import schoolClass from "../../assets/qZone2.png";
import playGround from "../../assets/qZone3.png";
import bgPicture from "../../assets/bg.png";

const RightSideNews = () => {
    return (
        <div className="w-[100%] lg:w-[22%] mb-5">
            <h1 className="text-center text-black text-xl font-semibold">Login with</h1>
            <div className="mt-5">
                <button className="border-2 border-[#0D7FEE] text-[#0D7FEE] w-full py-1 rounded-md"><i className="fa-brands fa-google mr-3"></i>Login with Google</button>
                <button className="border-2 border-black text-black w-full py-1 rounded-md mt-2"><i className="fa-brands fa-github mr-3"></i>Login with Github</button>
            </div>
            <div className="mt-5">
                <h1 className="text-[#403f3f] font-bold mb-3">Find Us On</h1>
                <div className="w-full h-full flex justify-start items-center bg-white py-2 pl-3 border-[1.5px] rounded-md mb-1">
                    <i className='bx bxl-facebook text-[#2227F2] text-xl w-[25px] h-[25px] bg-slate-100 rounded-full flex justify-center items-center'></i>
                    <p className="pl-4 text-[#9f9f9f]">Facebook</p> 
                </div>
                <div className="w-full h-full flex justify-start items-center bg-white py-2 pl-3 border-[1.5px] rounded-md mb-1">
                    <i className='bx bxl-twitter text-[#22D8F2] text-xl w-[25px] h-[25px] bg-slate-100 rounded-full flex justify-center items-center'></i>
                    <p className="pl-4 text-[#9f9f9f]">Twitter</p> 
                </div>
                <div className="w-full h-full flex justify-start items-center bg-white py-2 pl-3 border-[1.5px] rounded-md">
                    <i className='bx bxl-instagram text-[#D82D7E] text-xl w-[25px] h-[25px] bg-slate-100 rounded-full flex justify-center items-center'></i>
                    <p className="pl-4 text-[#9f9f9f]">Instagram</p> 
                </div>
            </div>
            <div className="bg-slate-100 mt-8 w-full">
                <h1 className="pl-5 pt-5 pb-8">Q-Zone</h1>
                <div className="pb-6 w-full"><img className="w-full" src={swimming} alt="swimming" /></div>
                <div className="pb-6 w-full"><img className="w-full" src={schoolClass} alt="schoolClass" /></div>
                <div className="pb-5 w-full"><img className="w-full" src={playGround} alt="playGround" /></div>
            </div>
            <div className="mt-4 relative">
                <div className="w-full">
                    <img className="w-full" src={bgPicture} alt="background Picture" />
                </div>
                <div className="absolute top-12 right-0 left-0">
                    <h1 className="text-3xl text-center font-bold [line-height:40px] text-white">Create an Amazing Newspaper</h1>
                    <p className="text-white px-4 text-center pt-7 text-xl">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <div className="w-full mt-10 flex justify-center">
                        <button className="text-white w-[150px] bg-[#D72050] py-4 text-[19px]">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSideNews;