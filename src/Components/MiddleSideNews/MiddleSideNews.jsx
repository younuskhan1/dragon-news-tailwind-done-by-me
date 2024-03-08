import { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";

const MiddleSideNews = () => {

    const [bulletins, setBulletins] = useState([]);
    // console.log(bulletins);

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const URL = `news.json`;
                const res = await fetch(URL);
                const data = await res.json();
                setBulletins(data);
            }catch (error){
                console.log(error);
            }
        };
        fetchData();
    },[])

    return (
        <div className="w-[100%] lg:w-[50%]">
            <h1 className="text-center text-black text-xl font-semibold">Dragon News Home</h1>
            <div>
                <ul>
                    {
                        bulletins.map((bulletin)=><NewsCard key={bulletin._id} bulletin = {bulletin}></NewsCard>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default MiddleSideNews;