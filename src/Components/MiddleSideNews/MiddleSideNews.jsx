import PropTypes from 'prop-types'; // ES6
import NewsCard from "../NewsCard/NewsCard";

const MiddleSideNews = ({newsData, categoryData}) => {
    // console.log(newsData);

    return (
        <div className="w-[100%] lg:w-[50%]">
            <h1 className="text-center text-black text-xl font-semibold">Dragon News Home</h1>
            <div>
                <ul>
                    {   
                        categoryData?.length? categoryData?.map((anews)=><NewsCard key={anews._id} anews= {anews}></NewsCard>)
                        :
                        newsData?.map((anews)=><NewsCard key={anews._id} anews= {anews}></NewsCard>)
                        
                    }
                </ul>
            </div>
        </div>
    );
};
MiddleSideNews.propTypes = {
    newsData:PropTypes.array.isRequired,
    categoryData:PropTypes.array.isRequired,
}

export default MiddleSideNews;