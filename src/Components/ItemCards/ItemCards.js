import React from 'react'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import ListIcon from '@mui/icons-material/List'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const ItemCards = (props) => {
  const {
    id,
    itemImage,
    itemName,
    itemPrice,
    itemPerKgPrice,
  } = props.itemCategory

  const style = {
    position: 'absolute',
    width: '22%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
  const itemActions = {
    display: 'flex',
    fontSize: '20px',
    cursor: 'pointer',
  }
  const itemPriceSection = {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
  }
  const addProduct = (id) => {
    props.itemAddToCard(id, 'cart')
  }
  const addProductToFavourite = (id) => {
    props.itemAddToCard(id, 'favourite')
  }
  return (
    <div>
      <>
        <Card sx={{ width: 305 }} className="card">
          <CardMedia
            component="img"
            height="300"
            image={itemImage}
            alt="green iguana"
            style={{ width: '100%' }}
          />
          <div style={style}>
            <div style={itemActions}>
              <Link
                style={{ textDecoration: 'none', color: 'black' }}
                to={`/productDetails/${id}`}
              >
                <ListIcon
                  sx={{
                    fontSize: '30px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                  }}
                />
              </Link>
            </div>
            <div style={itemActions}>
              <FavoriteBorderIcon
                style={{ textDecoration: 'none', color: 'black' }}
                onClick={() => addProductToFavourite(id)}
              />
            </div>
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <Link
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  fontSize: '15px',
                }}
                to={`/productDetails/${id}`}
              >
                <b>
                  {itemName.length > 30
                    ? itemName.slice(0, 27) + '...'
                    : itemName}
                </b>
              </Link>
            </Typography>
            <div style={itemPriceSection}>
              <Typography variant="body2" component="div">
                <h2>${itemPrice}</h2>
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                component="div"
              >
                ({itemPerKgPrice} /Kg)
              </Typography>
            </div>
          </CardContent>

          <button className="shopBtn" onClick={() => addProduct(id)}>
            Add To Cart
          </button>
        </Card>
      </>
    </div>
  )
}

export default ItemCards
