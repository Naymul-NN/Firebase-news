import Marquee from "react-fast-marquee"
import { Link } from "react-router-dom";

const Brakingnews = () => {
    return (
        <div className="flex w-full border p-1 mt-3 bg-slate-200 items-center">
            <button className="btn btn-primary"> Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
           <Link > I can be a React component, multiple React components, or just some text.</Link> 
            </Marquee>
            
        </div>
    );
};

export default Brakingnews;