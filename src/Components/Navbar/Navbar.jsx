import { Link } from "react-router-dom";
import logoImage from "../../assets/logo.png";
import TimeTable from "../TimeTable/TimeTable";
import Marquee from "react-fast-marquee";
import user from "../../assets/user.png";


const Navbar = () => {
    return (
        <div>
            <div className="w-full h-[100px] flex justify-center">
                <div className="pt-10"><img src={logoImage} alt="logo-image"/></div>
            </div>
            <h1 className="text-center text-[18px] pt-2 text-[#706F6F]">Journalism Without Fear or Favour</h1>
            <TimeTable></TimeTable>
            <div className="w-[90%] h-[70px] bg-[#f3f3f3] m-auto flex justify-center items-center">
                <div className="flex">
                    <button className="btn bg-[#d72050] mx-3 text-white">Breaking News</button>
                    <Marquee pauseOnHover = {true} speed={80}>
                        <Link className="mr-3 text-[18px] text-red-900" to = "/">I can be a React component, multiple React components, or just some text.</Link>
                        <Link className="mr-3 text-[18px] text-red-900" to = "/">I can be a React component, multiple React components, or just some text.</Link>
                        <Link className="mr-3 text-[18px] text-red-900" to = "/">I can be a React component, multiple React components, or just some text.</Link>
                        <Link className="mr-3 text-[18px] text-red-900" to = "/">I can be a React component, multiple React components, or just some text.</Link>
                        <Link className="mr-3 text-[18px] text-red-900" to = "/">I can be a React component, multiple React components, or just some text.</Link>
                    </Marquee>
                </div>
            </div>
            <div className="flex justify-end w-[90%] m-auto">
                <div className="w-[60%] h-[70px] flex justify-between mr-0 items-center">
                    <ul className="flex">
                        <li className="mr-5 cursor-pointer">Home</li>
                        <li className="mr-5 cursor-pointer">About</li>
                        <li className="cursor-pointer">Career</li>
                    </ul>
                    <ul className="flex">
                        <li><img className="w-[35px] h-[35px] mr-4 cursor-pointer" src={user} alt="" /></li>
                        <li><button className="bg-[#403f3f] text-white w-[90px] h-[35px] text-[18px]">Login</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;