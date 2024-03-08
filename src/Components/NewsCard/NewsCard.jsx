import PropTypes from 'prop-types'; // ES6
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({bulletin}) => {
    console.log(bulletin);
    return (
        <div className='my-5 border-[1px] border-[#9f9f9f] rounded-t-md'>
            <div>
                <div className='flex justify-between items-center w-full h-[70px] bg-slate-100 mb-2 px-5 rounded-t-md'>
                    <div className='flex items-center'>
                        <div className='w-[40px] h-[40px]'><img className='w-[40px] h-[40px] rounded-full' src={bulletin.author.img} alt="author image" /></div>
                        <div className='pl-3'>
                                <p>{bulletin?.author?.name ? bulletin?.author?.name : "no_available_author"}</p>
                                <p className='text-[#9f9f9f]'>{bulletin?.author?.published_date ? bulletin?.author?.published_date: "no_published_date" }</p>
                        </div>
                    </div>
                    <div className='flex '>
                        <p><i className="fa-regular fa-bookmark text-xl text-[#9f9f9f]"></i></p>
                        <p><i className='bx bx-share-alt ml-3 text-xl text-[#9f9f9f]'></i></p>
                    </div>
                </div>
                <div className='h-auto pb-5 border-b-[1.5px]'>
                    <h1 className='px-4 text-[18px] font-bold text-[#403f3f] pt-2'>{bulletin.title}</h1>
                    <div className='w-full h-[250px] mt-4'>
                        <img className='w-[96%] m-auto h-full' src={bulletin.thumbnail_url} alt="" />
                    </div>
                    <div>
                        {bulletin.details.length > 300 ? <p className='text-justify pt-5 w-[96%] m-auto'> {bulletin.details.slice(0,300)+ "..."} <Link className='text-[#1F21EF] font-bold' to="/">Read More</Link></p> : <p>{bulletin.details}</p>}
                    </div>
                </div>
                <div className='flex items-center justify-between w-full h-[60px] bg-slate-100 px-5 mt-5'>
                    <div className='flex items-center'><Rating className='text-2xl text-[#F2D022] mr-3' initialRating={bulletin.rating.number} emptySymbol="bx bx-star" fullSymbol='bx bxs-star'/><p className='text-[#9f9f9f]'>{bulletin.rating.number}</p></div>
                    <p className='text-[#9f9f9f]'><i className="fa-solid fa-eye mr-3"></i>{bulletin.total_view}</p>
                </div>
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    bulletin:PropTypes.object.isRequired,
}
export default NewsCard;