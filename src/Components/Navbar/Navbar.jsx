import logoImage from "../../assets/logo.png";
import TimeTable from "../TimeTable/TimeTable";



const Navbar = () => {
    return (
        <div>
            <div className="w-full h-[100px] flex justify-center">
                <div className="pt-10"><img src={logoImage} alt="logo-image"/></div>
            </div>
            <h1 className="text-center text-[18px] pt-2 text-[#706F6F]">Journalism Without Fear or Favour</h1>
            <TimeTable></TimeTable>
        </div>
    );
};

export default Navbar;