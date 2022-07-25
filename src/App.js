import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Shops from './Pages/Shops'
import ShopDetails from './Pages/ShopDetails'
import ProductDetails from './Pages/ProductDetails'
import Cart from './Pages/Cart'
import Footer from './Pages/Footer'
import Navbar from './Components/Navbar/Navbar'
import FavouriteItems from './Pages/FavouriteItems'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Shops />} />
          <Route exact path="/shopDetails" element={<ShopDetails />} />
          <Route
            exact
            path="/productDetails/:id"
            element={<ProductDetails />}
          />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/favourite" element={<FavouriteItems />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
