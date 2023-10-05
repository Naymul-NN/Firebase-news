import { useLoaderData, useParams } from "react-router-dom";
import Header from "../sheard/Header";
import Navbar from "../sheard/Navbar";
import Rightsidenav from "../sheard/Rightsidenav";

const News = () => {
    const news = useLoaderData();
    const { _id } = useParams();
    const newes = news.find((item) => item._id === _id);
    console.log(newes);
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4 gap-5">
                <div className="border col-span-3">
                    <p>deatils here</p>
                    
                        
                            <div >
                                <img src={newes.image_url} alt="" />
                                <p>{newes.details}</p>

                            </div>
                    
                    
                </div>
                <div>
                    <Rightsidenav></Rightsidenav>
                </div>
            </div>
        </div>
    );
};

export default News;