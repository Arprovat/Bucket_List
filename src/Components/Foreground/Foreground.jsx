import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import { data } from "autoprefixer";

const Foreground = () => {
    const [Data,setData] = useState([])

    useEffect(()=>{
       const storedata =JSON.parse( localStorage.getItem('List'));
       if(storedata && storedata.length >0){
        setData(storedata);
       }
    },[]);
    return (
        <div className='fixed z-[3] w-full h-screen  top-[10%]'>
          <div className="grid grid-cols-5 max-md:grid-cols-3 max-sm:grid-cols-2 gap-10">
            
            {
            Data.map(data =>  <Card key={data.id} data={data} />)
           }
            </div> 
        </div>
    );
};

export default Foreground;