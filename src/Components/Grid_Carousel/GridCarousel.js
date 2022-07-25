import React from 'react'
import { useDispatch } from 'react-redux'
import {
  add_to_cart,
  add_to_favourite,
} from '../../Redux_Store/CartActions/Actions'
import Carousel from 'react-grid-carousel'
import ItemCards from '../ItemCards/ItemCards'

const GridCarousel = (props) => {
  const dispatch = useDispatch()
  const itemAddToCard = (id, actionType) => {
    if (actionType === 'cart') {
      const result = props.itemsData.find((item) => {
        return item.id === id
      })
      dispatch(add_to_cart(result))
    } else {
      const result = props.itemsData.find((item) => {
        return item.id === id
      })
      dispatch(add_to_favourite(result))
    }
  }
  return (
    <div>
      <h2
        style={{
          textDecoration: 'underline #43b028',
        }}
      >
        {props.title}
      </h2>
      <Carousel cols={5} rows={1} gap={10} loop>
        {props.itemsData &&
          props.itemsData.map((items) => {
            if (props.title === 'Fruits' && items.foodCategory === 'fruit') {
              return (
                <Carousel.Item>
                  <ItemCards
                    itemCategory={items}
                    itemAddToCard={itemAddToCard}
                  />
                </Carousel.Item>
              )
            } else {
              return (
                <Carousel.Item>
                  <ItemCards
                    itemCategory={items}
                    itemAddToCard={itemAddToCard}
                  />
                </Carousel.Item>
              )
            }
          })}
      </Carousel>
    </div>
  )
}

export default GridCarousel
