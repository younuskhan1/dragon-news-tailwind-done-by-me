
const RightSideNews = () => {
    return (
        <div className="w-[100%] lg:w-[22%]">
            <h1 className="text-center text-black text-xl font-semibold">Login with</h1>
            <div className="mt-5">
                <button className="border-2 border-[#0D7FEE] text-[#0D7FEE] w-full py-1 rounded-md"><i className="fa-brands fa-google mr-3"></i>Login with Google</button>
                <button className="border-2 border-black text-black w-full py-1 rounded-md mt-2"><i className="fa-brands fa-github mr-3"></i>Login with Github</button>
            </div>
        </div>
    );
};

export default RightSideNews;