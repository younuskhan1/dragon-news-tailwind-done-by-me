import { Link } from "react-router-dom";
import notFoundImage from "../../assets/not-found-page.jpg";

const ErrorElement = () => {
    return (
        <div className="w-full h-[100vh] flex items-center justify-center">
            <div>
                <div className="h-[400px] w-[500px]">
                    <img className="w-full h-full" src={notFoundImage} alt="nothing has found" />
                </div>
                <div className="flex justify-center"><Link to = "/"><button className="btn btn-outline btn-secondary text-[16px]" >Go Home</button></Link></div>
            </div>
        </div>
    );
};

export default ErrorElement;