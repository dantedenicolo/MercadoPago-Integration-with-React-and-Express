# MercadoPago integration with React and Express

![MercadoPago integration project image](https://raw.githubusercontent.com/dantedenicolo/MercadoPago-Integration-with-React-and-Express/main/preview.png)

MercadoPago has one of the hardest payment integrations for developers but not because of how hard it is to code it, but because of it's very bad explained documentation. In this project, I try to explain the best as I can the step-by-step process to integrate MercadoPago's checkout to React and Express.

#### All the explanation is in the code written with comments.

## Live Deploy

You can try this integration live in [https://mpintegration.dantu.me/](https://mpintegration.dantu.me/).

## Clone the repo

```bash
  git clone https://github.com/dantedenicolo/MercadoPago-Integration-with-React-and-Express.git
  cd MercadoPago-Integration-with-React-and-Express
```

## Install dependencies for Client

```bash
  cd Client
  npm install
  cd ../
```

## Install dependencies for Server

```bash
  cd Server
  npm install
  cd ../
```

## Run Locally

First open the project with your code editor. You can do it manually or from your terminal using:

```bash
    code .
```

#### Then go to the 'Server' folder and open the '.env' file. Follow instructions written in comments and set your MercadoPago Access Token. This step is VERY IMPORTANT because if the token is not set, the integration won't work at all.

Finally, you can run both Server and Client sides. If you don't know how, follow these steps:

### Start Client side

Open your terminal in the project folder and use the following commands:

```bash
    cd Client
    npm run dev
```

### Start Server side

Open another terminal in the project folder (without closing the other one) and use the following commands:

```bash
    cd Server
    npm start
```

# You are all set!

Now you can test this project and read the code to know how it works. The code is fully commented in order to explain the step-by-step process of the integration so anyone can do it in their own project.

## Support, suggestions or issues

For support, suggestions, or issues, email denicolodante@gmail.com or DM [@dantedenicolo](https://instagram.com/dantedenicolo) on Instagram.

## Leave your star!

If you liked this repo, you can leave your star to help me.

## Connect with me:

- [Twitter](https://twitter.com/dantutu_)
- [Instagram](https://instagram.com/dantedenicolo)
- [LinkedIn](https://www.linkedin.com/in/dantedenicolo/)
