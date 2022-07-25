import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  adjust_food_quantity,
  remove_food_from_cart,
} from '../Redux_Store/CartActions/Actions'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import './PageStyles/Cart.css'

const Cart = () => {
  const [itemsTotalPrice, setItemsTotalPrice] = useState(0)
  const cartReducer = useSelector((state) => state.Reducers.cart)

  useEffect(() => {
    let total = cartReducer.reduce(
      (acc, cur) =>
        cur.foodCategory === 'fruit'
          ? acc + cur.itemPrice * cur.quantity
          : acc + cur.itemPrice * cur.quantity,
      0,
    )
    setItemsTotalPrice(total)
  }, [cartReducer])

  const dispatch = useDispatch()
  return (
    <>
      {/* <Title title=" Cart" /> */}
      <div className="cartTable">
        <h2 className="cartTitle">Your Food in Bag</h2>
        {cartReducer.length > 0 ? (
          <div className="cartSection">
            <div className="cartLeft">
              <TableContainer component={Paper}>
                <Table
                  size="small"
                  aria-label=" table"
                  options={{
                    rowStyle: {
                      fontSize: 50,
                    },
                  }}
                >
                  <TableHead className="tableHead">
                    <TableRow>
                      <TableCell align="right">
                        <span className="tableHeading text-white">
                          Product Image
                        </span>
                      </TableCell>
                      <TableCell align="center">
                        <span className="tableHeading text-white">
                          Product Title
                        </span>
                      </TableCell>
                      <TableCell align="center">
                        <span className="tableHeading text-white">
                          Product Price
                        </span>
                      </TableCell>
                      <TableCell align="center">
                        <span className="tableHeading text-white">
                          Product Quantity
                        </span>
                      </TableCell>
                      <TableCell align="center">
                        <span className="tableHeading text-white">
                          Product Total
                        </span>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cartReducer.map((item) => (
                      <TableRow
                        key={item.id}
                        sx={{
                          border: 0,
                        }}
                      >
                        <TableCell component="th" scope="row" align="center">
                          <div className="removeItem">
                            <span
                              className="removeItem_btn"
                              onClick={() =>
                                dispatch(remove_food_from_cart(item.id))
                              }
                            >
                              <HighlightOffIcon />
                            </span>

                            <img
                              className="cartItemImage"
                              src={item.itemImage}
                              alt="ItemImage"
                            />
                          </div>
                        </TableCell>
                        <TableCell align="center" className="cartItemsTitle">
                          <Link
                            style={{ textDecoration: 'none', color: 'black' }}
                            to={`/productDetails/${item.id}`}
                          >
                            {item.itemName}
                          </Link>
                        </TableCell>
                        <TableCell align="center">{item.itemPrice}</TableCell>
                        <TableCell align="center">
                          <input
                            type={'number'}
                            min="1"
                            value={item.quantity}
                            className="qty"
                            onChange={(e) =>
                              dispatch(
                                adjust_food_quantity(item.id, e.target.value),
                              )
                            }
                          />
                        </TableCell>
                        <TableCell align="center">
                          {(item.itemPrice * item.quantity).toFixed(2)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div className="cartRight">
              <div className="OverviewCartItems">
                <h3 className="overviewTitle">Order Summary</h3>
                <div className="overview">
                  <h6>
                    Basket Subtotal (
                    {cartReducer.length > 1
                      ? `${cartReducer.length} itmes`
                      : `1 item`}
                    )
                  </h6>

                  <h5>${itemsTotalPrice.toFixed(2)}</h5>
                </div>
                <div className="overview">
                  <h6 className="">Shipping charge</h6>
                  <h5 className="">$0</h5>
                </div>
                <div className="overview">
                  <h6>GST</h6>
                  <h5>
                    <span className="gst">(18%)</span>$
                    {(itemsTotalPrice * 0.18).toFixed(2)}
                  </h5>
                </div>
                <hr></hr>
                <div className="overview">
                  <h4>Grand Total</h4>
                  <h4>
                    $
                    {(itemsTotalPrice + Number(itemsTotalPrice * 0.18)).toFixed(
                      2,
                    )}
                  </h4>
                </div>
                <button className="paymentBtn">Proceed to Pay</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="emptyBagSection">
            {/* <img src={EmptyBasket} alt="Empty Basket" /> */}
            <h4>
              <span className="emptyCart">No Items in your Bag.</span>
              <div className="goback">
                <Link className="" to={'/'}>
                  Explore Stores
                </Link>
              </div>
            </h4>
          </div>
        )}
      </div>
    </>
  )
}

export default Cart
