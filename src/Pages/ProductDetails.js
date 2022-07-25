import React, { useState, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import AllItems from '../Assets/AppData/AllAvailableItemsData/AllItems'
import {
  add_to_cart,
  adjust_food_quantity,
  add_to_favourite,
} from '../Redux_Store/CartActions/Actions'
import ProductInformation from '../Components/Product_Information/ProductInformation'
import GridCarousel from '../Components/Grid_Carousel/GridCarousel'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined'
import './PageStyles/ProductDetails.css'

const ProductDetails = () => {
  // fetch id from url
  const { id } = useParams()
  const dispatch = useDispatch()
  const [itemQty, setItemQty] = useState(1)
  // fetch state from Reducer
  const cartReducer = useSelector((state) => state.Reducers.cart)
  // check if item is present in cart
  const itemInCart = cartReducer.find((item) => item.id === id)
  // filter item for selected id
  const result = AllItems.find((item) => item.id === id)
  const {
    itemImage,
    itemName,
    itemPrice,
    itemPerKgPrice,
    foodCategory,
  } = result

  // filter all related items for selected item
  const relatedProducts = useMemo(
    () =>
      AllItems.filter(
        (items) => items.foodCategory === result.foodCategory,
      ).filter((remainingItems) => {
        return remainingItems.id !== id
      }),
    [],
  )

  const decreaseQty = () => {
    if (itemQty > 1) {
      setItemQty(itemQty - 1)
    }
  }
  const increaseQty = () => {
    setItemQty(itemQty + 1)
  }
  return (
    <>
      <div className="productDetailsPage">
        <div className="productDetailsPageNavigation">
          <div className="breadcrumb">
            Departments {'>'} {foodCategory} {'>'} SubCategory1 {'>'} {itemName}
          </div>
          <div className="backToPreviousPage">
            <Link to="/shopDetails">
              <ArrowBackOutlinedIcon /> Back to Harris Farm Market
            </Link>
          </div>
        </div>
        <div className="productDetails">
          <div className="productImage">
            <img src={itemImage} />
          </div>
          <div className="productInfo">
            <h2>{itemName}</h2>
            <span>
              Sold by{' '}
              <Link to="/shopDetails" className="sellerName">
                Harris Farm Market
              </Link>
            </span>{' '}
            |
            <span>
              {' '}
              Status : <span className="stockStatus">In Stock</span>
            </span>
            <div className="productPrice">
              <h1>
                ${itemPrice}
                <span>/item</span>
              </h1>
              <h1 className="pricePerKg">
                (${itemPerKgPrice}
                <span>/kg</span>)
              </h1>
            </div>
            <label htmlFor="Quantity">Quantity</label>
            <div className="quantityandCart">
              <div className="quantitySection">
                <div className="manageItem">
                  <RemoveOutlinedIcon
                    className="decreaseBtn"
                    onClick={decreaseQty}
                  />
                  <div className="manage">{itemQty}</div>
                  <AddOutlinedIcon
                    className="increaseBtn"
                    onClick={increaseQty}
                  />
                </div>
              </div>
              <div className="productCartBtn">
                <button
                  onClick={() =>
                    itemInCart
                      ? dispatch(adjust_food_quantity(id, itemQty))
                      : dispatch(add_to_cart(result))
                  }
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="favouriteSection">
              <div className="productFavouriteVector">
                <FavoriteBorderIcon
                  onClick={() => dispatch(add_to_favourite(result))}
                />
              </div>
              <span>Add to Wishlist</span>
            </div>
            <div className="categorySection">
              <h4>Categories: {foodCategory}</h4>
            </div>
          </div>
        </div>
        <div className="productInformation">
          <ProductInformation />
        </div>
        {/* related Products */}
        <div className="relatedProducts">
          <h2>Related Products</h2>
          <GridCarousel itemsData={relatedProducts} title={''} />
        </div>
      </div>
    </>
  )
}

export default ProductDetails
