const mercadopago = require("mercadopago") // npm i mercadopago
const { Router } = require("express"); // npm i express
const routermp = Router(); 
require("dotenv").config(); // npm i dotenv

mercadopago.configure({access_token: process.env.MERCADOPAGO_ACCESS_TOKEN})
//Configure the access_token in the .env file



routermp.post("/payment", (req, res) => {
    const prod = req.body; // get the product info from the front end
    let preference = {
        items: [{
            id: 1234, // can configure this to be the product id (passed as a prop from the front end) or an incremental id
            title: prod.title, // product title (passed as a prop from the front end)
            currency_id: 'ARS', // currency (in this case pesos argentinos)
            picture_url: prod.image, // product image (passed as a prop from the front end)
            description: prod.description, // product description (passed as a prop from the front end)
            category_id: 'art', // product category (in this case article)
            quantity: 1, // product quantity (can be passed as a prop from the front end)
            unit_price: Number(prod.price) // product price (passed as a prop from the front end)
        }],
        back_urls: {
            success: 'http://localhost:5173/success', // redirect to this url if payment is successful
            failure: 'http://localhost:5173/failure', // redirect to this url if payment fails
            pending: 'http://localhost:5173/pending' // redirect to this url if payment is pending
        },
        auto_return: 'approved', // redirect to the success url automatically if payment is approved
        binary_mode: true, // if true, the payment can be paid only with the methods specified in the payment_methods parameter
        // can specify the payment methods like this:
        // payment_methods: {
        //     excluded_payment_methods: [
        //         {
        //             id: 'amex' // exclude amex
        //         }
        //     ],
        //     excluded_payment_types: [
        //         {
        //             id: 'atm' // exclude atm
        //         }
        //     ],
        //     installments: 12 // max number of installments
        // }
    };
    mercadopago.preferences.create(preference).then((response) => {res.status(200).send({response})})
    // send the preference object to the front end
    // the front end will use the response to redirect the user to the payment page
    // you can see this in the front end in the file Client/src/components/Main.jsx

    .catch((err) => {res.status(500).send({message: err})})
    // if there is an error, send the error message to the front end
})

module.exports = routermp;