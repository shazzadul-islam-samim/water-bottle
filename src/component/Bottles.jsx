import { useEffect, useState } from 'react';
import Bottle from './Bottle';
import { addToLS, getStoredCart, saveCartToLS } from '../utilities/localStorage';
import Cart from './Cart';

const Bottles = () => {

    const [Bottles,setBottles]=useState([])
    const [cart,setCart]=useState([])

    useEffect(() => {
        fetch("bottles.json")
        .then(res => res.json())
        .then(data=>setBottles(data))
    },[])

    useEffect(()=>{
        console.log('Called the use effect', Bottles.length);
        //console.log(storedCart);
        if(Bottles.length >0){
            const storedCart= getStoredCart();
            console.log(storedCart,Bottles);
            const saveCart=[];
            for(const id of storedCart){
                console.log(id);

                const bottle=Bottles.find(bottle=> bottle.id===id);
                if(bottle){
                    saveCart.push(bottle);
                }
            }
            console.log(saveCart);
            setCart(saveCart);
        }
    },[Bottles])

    const handleAddToCart=(bottle)=>{
        console.log(bottle);
        const newCart=[...cart,bottle];
        setCart(newCart);
        addToLS(bottle.id)
    }


    return (
        
        <div>
            <h2>{Bottles.length} kind of bottle are available here.</h2>

            <Cart cart={cart}></Cart>

            <div className='bottle-container'>
                {
                Bottles.map((bottle)=> <Bottle key={bottle.id} propBottle={bottle} propHandleAddToCart={handleAddToCart}></Bottle>)
              }
            </div>

        </div>
    );
};

export default Bottles;