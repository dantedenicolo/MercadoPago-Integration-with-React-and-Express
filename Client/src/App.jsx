import './App.css'
import Main from './components/main/Main' // This is the component that will be called when the user enters the website
import { Routes, Route } from 'react-router-dom' // npm install react-router-dom

function App() {

  return (
    <Routes>
      <Route path='/' element={<Main/>}/> {/* This is the route that will be called when the user enters the website */}
      <Route path='/success' element={<h1>Success</h1>}/> {/* This is the route that will be called when the payment is successful */}
      <Route path='/failure' element={<h1>Failure</h1>}/> {/* This is the route that will be called when the payment fails */}
      <Route path='/pending' element={<h1>Pending</h1>}/> {/* This is the route that will be called when the payment is pending */}
    </Routes>
  )
}

export default App
