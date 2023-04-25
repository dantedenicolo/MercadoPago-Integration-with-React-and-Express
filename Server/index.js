const express = require("express") // npm i express
const server = express()
const PORT = 3001
const routermp = require("./controllers/mercadopago")
const morgan = require("morgan") // npm i morgan

server.use(express.json()) // for req.body

server.use(morgan("dev")) // for logging

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
}); // for CORS errors

server.use("/api", routermp) // redirect to the router of mercadopago in the controllers folder

server.listen(PORT, () => {
   console.log(`Server listening on port ${PORT}`) // listen on port 3001
}
)