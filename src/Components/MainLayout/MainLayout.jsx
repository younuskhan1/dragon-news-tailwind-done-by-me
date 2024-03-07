import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <section>
                <div>My Name is ALI KHAN</div>
                <p>Hello World</p>
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default MainLayout;