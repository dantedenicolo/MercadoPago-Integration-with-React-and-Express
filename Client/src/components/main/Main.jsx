import style from './Main.module.css'
import products from '../../Products/products' // This is the file that contains the products that will be displayed
import axios from 'axios' // npm install axios

const Main = () => {

    return (
        <div className={style.main}>
            <h1>MercadoPago Integration with React</h1>
            <div className={style.products}>
                <h2>Products:</h2>
                 <div id="wallet_container"></div>
                <div className={style.container}>
                {products.map(product => { // This is the map that will display the products with their props
                    return (
                        <div className={style.card} key={product.id}>
                            <h4>{product.title}</h4>
                            <img src={product.images[0]} alt={product.title} />
                            <br />
                            <button onClick={() => {
                                axios.post('http://localhost:3001/api/payment', { // Calling the api/payment route in the backend
                                    title: product.title,
                                    price: product.price,
                                    description: product.description,
                                    image: product.images[0] // take the first image of the array because the product has multiple images
                                })
                                .then(res => {
                                    window.location.href = res.data.response.body.init_point // Redirecting the user to the MercadoPago checkout
                                }
                                )
                                .catch(err => console.log(err))
                            
                            }
                            }>${product.price} - Comprar</button>
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    )
}

export default Main