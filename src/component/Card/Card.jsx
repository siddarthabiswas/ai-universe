import React, { useEffect, useState } from 'react';
import SingData from '../SinData/SingData';

const Card = () => {
    const [data,setData] =useState([]);

    useEffect(() =>{
        const loadData = async () => {
            const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
            const value =await res.json();
            console.log(value.data.tools)
            setData(value.data.tools)
        }
        loadData()
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-12'>
           {
            data.map((SinData) =>{
                return <SingData SingData={SinData}></SingData>
            })
           }
        </div>
    );
};

export default Card;