import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove_food_from_favourite } from '../Redux_Store/CartActions/Actions'
import { Link } from 'react-router-dom'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import './PageStyles/Cart.css'

// fetch state from Reducer
const FavouriteItems = () => {
  const favouriteItemsReducer = useSelector(
    (state) => state.FavouriteItemsReducer.favouriteItems,
  )

  const dispatch = useDispatch()

  // Note : Same table used as Cart
  return (
    <>
      {/* <Title title=" Cart" /> */}
      <div className="cartTable">
        <h2 className="cartTitle">Your Food in Favourite</h2>
        {favouriteItemsReducer.length > 0 ? (
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
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {favouriteItemsReducer.map((item) => (
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
                                dispatch(remove_food_from_favourite(item.id))
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
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        ) : (
          <div className="emptyBagSection">
            <h4>
              <span className="emptyCart">No Items in your Favorite.</span>
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

export default FavouriteItems
