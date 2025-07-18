
import './bottle.css'
const Bottle = ({propBottle,propHandleAddToCart}) => {
    const {img,id,name,price,stock}=propBottle;
    return (
        <div className="bottle">
            <img src={propBottle.img} alt="" />
            <h4>Id: {propBottle.id}</h4>
            <p>Name: <span className='name'> {propBottle.name}</span></p>
            <h4>Price: <span className='price'>{propBottle.price} $</span></h4>
            <p>Stock: {propBottle.stock}</p>
            <button onClick={()=>propHandleAddToCart(propBottle)}>Purches</button>
        </div>
    );
};

export default Bottle;