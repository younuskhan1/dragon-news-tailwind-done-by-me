import { useLoaderData } from "react-router-dom";
import LeftSideNews from "../LeftSideNews/LeftSideNews";
import MiddleSideNews from "../MiddleSideNews/MiddleSideNews";
import RightSideNews from "../RightSideNews/RightSideNews";
import { useState } from "react";

const Home = () => {
    const [categoryData, setCategoryData] = useState([]);
    const newsData = useLoaderData();

    const getSelectedCategory = (id)=>{
        // console.log(id);
        const selectedItems = newsData?.filter((news)=>news.category_id === id);
        // console.log(selectedItems);
        setCategoryData(selectedItems);
    }
    console.log(categoryData);
    return (
        <div className="w-[98%] lg:w-[90%] flex flex-col md:flex-col lg:flex-row justify-between m-auto mt-8 gap-1">
           <LeftSideNews getSelectedCategory={getSelectedCategory}></LeftSideNews> 
           <MiddleSideNews newsData = {newsData} categoryData = {categoryData}></MiddleSideNews>
           <RightSideNews></RightSideNews>
        </div>
    );
};

export default Home;