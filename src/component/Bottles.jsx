import { useEffect, useState } from 'react';
import Bottle from './Bottle';

const Bottles = () => {

    const [Bottles,setBottles]=useState([])

    useEffect(() => {
        fetch("bottles.json")
        .then(res => res.json())
        .then(data=>setBottles(data))
    },[])

    return (
        
        <div>
            <h2>Here Bottle: {Bottles.length}</h2>

            <div className='bottle-container'>
                {
                Bottles.map((bottle)=> <Bottle propBottle={bottle}></Bottle>)
              }
            </div>

        </div>
    );
};

export default Bottles;