import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Center = () => {
      const [news,setNews] = useState([]);
    
      useEffect(()=>{
        fetch('news.json')
        .then(res=>res.json())
        .then(data => setNews(data))

      },[])


    return (
        <div>
            <h1 className="2xl">Dragon news home</h1>
            <div className="space-y-6">
                {
                    news.map(item => (
                        <div className=" border border-sky-300 rounded-sm" key={item.id}>
                          <div className=" bg-base-100 shadow-xl">
                          <div className="card-body">
                          <h2 className="card-title">Shoes!</h2>
                           <p>If a dog chews shoes whose shoes does he choose?</p>
                           </div>
                         <figure><img src={item.image_url} alt="Shoes" /></figure>
                           </div>
                           {item.details.length > 200 ? (
                             <div>
                        {item.details.slice(0, 200)}
                        <Link to={`/details/${item._id}`} className=" text-red-500"> read more</Link>
                          </div>
                          ) : (
                            item.details
                               )}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Center;