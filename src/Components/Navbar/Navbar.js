import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CompanyLogo from '../../Assets/Images/shoprun 1.png'
import DeliveryVector from '../../Assets/Images/Vector.png'
import ClockVector from '../../Assets/Images/clock.png'
import ShopVector from '../../Assets/Images/ShopVector.png'
import PersonVector from '../../Assets/Images/user.png'
import FavouriteVector from '../../Assets/Images/favourite.png'
import ShoppingBagVector from '../../Assets/Images/shopping bag.png'
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { Drawer, Divider, IconButton } from '@material-ui/core'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import ReorderIcon from '@material-ui/icons/Reorder'
import './Navbar.css'
import { color } from '@mui/system'

const styles = {
  sideNav: {
    zIndex: 3,
    marginLeft: '0px',
  },
  link: {
    color: 'black',
    textDecoration: 'none',
  },
}

const Navbar = () => {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false)
  // reducer state
  const cartReducer = useSelector((state) => state.Reducers.cart)
  const favouriteItemsReducer = useSelector(
    (state) => state.FavouriteItemsReducer.favouriteItems,
  )
  const toggleDrawerStatus = () => {
    setIsDrawerOpened(true)
  }
  const closeDrawer = () => {
    setIsDrawerOpened(false)
  }

  return (
    <div>
      <div style={styles.sideNav} className="navbar">
        <IconButton onClick={toggleDrawerStatus} className="drawver">
          {!isDrawerOpened ? <ReorderIcon /> : null}
        </IconButton>
        {/* Company Logo */}
        <div className="companyLogo">
          <Link to="/">
            <img src={CompanyLogo} alt="company" />
          </Link>
        </div>

        {/* Delivery */}
        <div className="deliveryAsap">
          <div className="delivery">
            <img src={DeliveryVector} alt="delivery" />
            <input
              type={'text'}
              placeholder="Delivery Address / Postal Code"
              className="address"
            />
          </div>
        </div>
        {/* Asap */}
        <div className="asap">
          <img src={ClockVector} alt="asap" />
          Delivery ASAP
          <span>
            <ArrowDropDownIcon />
          </span>
        </div>

        {/* Shops */}
        <div className="shopGroup">
          <Link to="/">
            <img src={ShopVector} />
            <div className="shop">Shop</div>
          </Link>
        </div>

        {/* Login */}
        <div className="LoginContainer">
          <img src={PersonVector} />
          Sign In
          <span>
            <ArrowDropDownIcon />
          </span>
        </div>

        {/* Favourite */}
        <div className="favourites">
          <Link to="/favourite">
            <img src={FavouriteVector} />
          </Link>

          <span className="favouriteQty">
            {favouriteItemsReducer ? favouriteItemsReducer.length : 0}
          </span>
        </div>

        {/* Bags */}
        <div className="bags">
          <Link to="/cart">
            <img src={ShoppingBagVector} />
          </Link>
          <span className="bagQty">{cartReducer ? cartReducer.length : 0}</span>
        </div>
      </div>
      <Divider />

      {/* Drawer */}
      <Drawer variant="temporary" open={isDrawerOpened} onClose={closeDrawer}>
        <Link to="/" style={styles.link}>
          <List>
            <ListItem button key="Shops">
              <ListItemIcon>
                <img src={ShopVector} />
              </ListItemIcon>
              <ListItemText primary="Shops" />
            </ListItem>
          </List>
        </Link>
        <Link to="/shopDetails" style={styles.link}>
          <List>
            <ListItem button key="Shop Details">
              <ListItemIcon>
                <ShoppingBasketOutlinedIcon sx={{ color: '#43b028' }} />
              </ListItemIcon>
              <ListItemText primary="Shop Details" />
            </ListItem>
          </List>
        </Link>
        <Link to="/cart" style={styles.link}>
          <List>
            <ListItem button key="Cart">
              <ListItemIcon>
                <img src={ShoppingBagVector} />
              </ListItemIcon>
              <ListItemText primary="Cart" />
            </ListItem>
          </List>
        </Link>
        <Link to="/favourite" style={styles.link}>
          <List>
            <ListItem button key="Favourite">
              <ListItemIcon>
                <img src={FavouriteVector} />
              </ListItemIcon>
              <ListItemText primary="Favourite" />
            </ListItem>
          </List>
        </Link>
      </Drawer>
    </div>
  )
}
export default Navbar
