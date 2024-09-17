import React, { useState } from 'react';

const Form = ({List}) => {
    const [FromData, SetFromData] = useState(
        {
            title: '',
            description: '',
            deadline: '',
        }
    );
    const handleOnChange = (e) => {
        const { name,value } = e.target;
        SetFromData({...FromData,[name]:value});
    }
const handleSubmit=(e)=>{
    e.preventDefault();
if(FromData.title){
    List({...FromData,id:Date.now()})
    SetFromData({ title: '',
        description: '',
        deadline: ''})
}
}
    return (
        <div>
            <form onSubmit={handleSubmit}>
                        <label className='text-lg font-semibold' For="title">Title</label><br />
                        <input onChange={handleOnChange} value={FromData.title} className='w-64 rounded-md text-xl p-2' type="text" name="title" id="title" /><br />
                        <label className='text-lg font-semibold' For='description'>Description</label><br />
                        <input onChange={handleOnChange} value={FromData.description} className="text-xl p-2 w-64 h-12 rounded-md textarea-bordered" name='description' placeholder="Bio"></input><br />
                        <label className='text-xl font-semibold' For='date'>Date</label><br />

                        <input onChange={handleOnChange} value={FromData.deadline} className='w-64 text-xl p-2 rounded-md' type="date" name="deadline" id="" /><br />
                        <button type="submit" className='w-20 mt-5 h-8 rounded-xl bg-blue-600 text-center font-bold'>Submit</button>
                    </form>
        </div>
    );
};

export default Form;