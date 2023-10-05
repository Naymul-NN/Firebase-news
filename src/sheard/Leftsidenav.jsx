import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Leftsidenav = () => {
      const [category,setCategory]=useState([]);

      useEffect(()=>{
        fetch('categories.json')
        .then(res=> res.json())
        .then(data => setCategory(data))
      },[])

    return (
        <div>
            <h1 className="text-3xl">All category</h1>
            {
                category.map(item=> (
                    <Link className="block py-3" key={item.id}>{item.name}</Link>
                ))
            }
        </div>
    );
};

export default Leftsidenav;