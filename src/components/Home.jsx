import React from 'react'
import mac from "../assets/mac.jpeg"
import shoes from "../assets/shoes.jpeg"


const Home = () => {
    const productLlist = [
        {
            name: 'Mac Book',
            price: 120000,
            imgSrc: mac,
            id: "sfg",
        },
        {
            name: 'Black Shoes',
            price: 490,
            imgSrc: shoes,
            id: "sfg",
        },
        {
            name: 'Mac Book',
            price: 120000,
            imgSrc: mac,
            id: "sfg",
        },
        {
            name: 'Black Shoes',
            price: 490,
            imgSrc: shoes,
            id: "sfg",
        },
        {
            name: 'Mac Book',
            price: 120000,
            imgSrc: mac,
            id: "sfg",
        }
    ];

    const addToCartHandler = (options) => {
        console.log(options);
    }

  return (
    <div className='home'>
        {
            productLlist.map(i => (
                <ProductCard key={i.id} imgSrc={i.imgSrc} name={i.name} price={i.price} id={i.id} handler={addToCartHandler} />
            ))
        }
    </div>
  )
}

const ProductCard = ({name, id, price, handler, imgSrc}) => (
    <div className='productCard'>
        <img src={imgSrc} alt={name} />
        <p>{name}</p>
        <h4>${price}</h4>
        <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>Add to Cart</button>
    </div>
)

export default Home