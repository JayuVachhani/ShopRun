import React from 'react'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import './ShopsCard.css'
const ShopsCard = (props) => {
  const {
    shopTitle,
    shopLocation,
    shopReviews,
    shopImage,
  } = props.allShopsDetails
  return (
    <div>
      <Card sx={{ maxWidth: 345 }} className="card">
        <CardMedia
          component="img"
          height="200"
          image={shopImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {shopTitle}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="location"
          >
            <LocationOnOutlinedIcon />
            {shopLocation}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="ratingReviews"
          >
            <div>
              {Array.from({ length: 5 }, (_, index) => (
                <StarBorderOutlinedIcon key={index} />
              ))}
            </div>

            <div>{shopReviews} Reviews</div>
          </Typography>
        </CardContent>

        <Link className="shopBtn" to={'/shopDetails'}>
          View All 56 ITEMS
        </Link>
      </Card>
    </div>
  )
}

export default ShopsCard
