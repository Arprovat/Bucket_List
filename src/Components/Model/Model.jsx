import React, { useState,useEffect } from 'react';
import Form from '../Form/Form';

const Model = ({ open, isClose }) => {
    const [List, setList] = useState([]);
    useEffect(()=>{
        const storedata =JSON.parse( localStorage.getItem('List'));
        if(storedata && storedata.length >0){
         setList(storedata);
        }
     },[]);
    const handleList = (newList) => {

       const updateList =[...List,newList];
        setList(updateList);
        localStorage.setItem('List', JSON.stringify(updateList));
    }
    if (!open) return null;
    return (
        <div onClick={isClose} className={`fixed  z-[5] bg-black bg-opacity-25 backdrop-blur-sm inset-0 flex justify-center items-center  transition-colors`}>
            <div onClick={(e) => e.stopPropagation()} className={`top-[25%] left-[25%]  w-[50%] h-[50%] bg-slate-300 flex flex-col p-5 rounded-2xl `}>
                <div>

                    <button onClick={isClose} className='text-3xl font-bold hover:text-slate-900 place-self-end  text-gray-400'>x</button>
                </div>
                <div className='flex justify-center text-zinc-800 items-center'>
                    <Form List={handleList} isClose={isClose} />
                </div>
            </div>
        </div>

    );
};

export default Model;