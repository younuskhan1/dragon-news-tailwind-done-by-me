import { useLoaderData } from "react-router-dom";
import LeftSideNews from "../LeftSideNews/LeftSideNews";
import MiddleSideNews from "../MiddleSideNews/MiddleSideNews";
import RightSideNews from "../RightSideNews/RightSideNews";

const Home = () => {
    const categoriesNames = useLoaderData();
    return (
        <div className="w-[98%] lg:w-[90%] flex flex-col md:flex-col lg:flex-row justify-between m-auto mt-8 gap-1">
           <LeftSideNews categoriesNames = {categoriesNames}></LeftSideNews> 
           <MiddleSideNews></MiddleSideNews>
           <RightSideNews></RightSideNews>
        </div>
    );
};

export default Home;