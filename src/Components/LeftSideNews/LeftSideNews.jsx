import PropTypes from 'prop-types'; // ES6
import cuteGirl from "../../assets/1.png";
import family from "../../assets/2.png";
import footballGround from "../../assets/3.png";
import { useEffect, useState } from "react";




const LeftSideNews = ({getSelectedCategory}) => {
    const [categoriesNames, setCategoriesNames] = useState([]);


    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const URL = `categories.json`;
                const res = await fetch(URL);
                const data = await res.json();
                setCategoriesNames(data);
            }catch (error){
                console.log(error);
            }
        };
        fetchData();
    },[]);

        let button_list = document.querySelectorAll(".category-button");
        button_list.forEach(element=>{
            element.addEventListener("click",function(){
            button_list.forEach(remove_background=>{
            remove_background.style.color="#000000";
            remove_background.style.background="#ECECEC";
            });
            this.style.color="#FFFFFF";
            this.style.background="#000000";
        });
     });

    return (
        <div className="w-[100%] lg:w-[22%] mb-5">
            <h1 className="text-center text-black text-xl font-semibold">All Categories</h1>
            <ul className='pt-8'>
                {categoriesNames.map((categoryName) => 
                <li className='category-button py-2 px-4 rounded-md text-center
                mb-3 cursor-pointer font-bold bg-[#ECECEC]' 
                key={categoryName.id} onClick={()=>getSelectedCategory(categoryName.id)}>{categoryName.name}</li>)
                }
            </ul>

            {/*
            className='py-2 px-4 hover:bg-slate-200 rounded-sm text-center 
                mb-3 cursor-pointer text-[#9f9f9f] hover:text-[#403f3f] font-bold 
                transition-all ease-in duration-300'
            */}
            
            <div>
                <div className='w-full mt-4'>
                    <img className='w-full' src={cuteGirl} alt="cuteGirl" />
                </div>
                <p className='mt-4 font-bold leading-7 [word-spacing:2px]'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
            </div>
            <div className='flex justify-between w-[85%] mt-2'>
                <p>Sports</p>
                <p className='text-[#9f9f9f]'><i className="fa-solid fa-calendar"></i> Jan 4, 2022</p>
            </div>
            <div>
                <div className='w-full mt-4'>
                    <img className='w-full' src={family} alt="cuteGirl" />
                </div>
                <p className='mt-4 font-bold leading-7 [word-spacing:2px]'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
            </div>
            <div className='flex justify-between w-[85%] mt-2'>
                <p>Sports</p>
                <p className='text-[#9f9f9f]'><i className="fa-solid fa-calendar"></i> Jan 4, 2022</p>
            </div>
            <div>
                <div className='w-full mt-4'>
                    <img className='w-full' src={footballGround} alt="cuteGirl" />
                </div>
                <p className='mt-4 font-bold leading-7 [word-spacing:2px]'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
            </div>
            <div className='flex justify-between w-[85%] mt-2'>
                <p>Sports</p>
                <p className='text-[#9f9f9f]'><i className="fa-solid fa-calendar"></i> Jan 4, 2022</p>
            </div>
        </div>
    );
};

LeftSideNews.propTypes = {
    getSelectedCategory:PropTypes.func.isRequired,
}

export default LeftSideNews;