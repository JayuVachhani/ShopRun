import React, { useState } from 'react'
import AllItems from '../Assets/AppData/AllAvailableItemsData/AllItems'
import GridCarousel from '../Components/Grid_Carousel/GridCarousel'
import heroImage from '../Assets/Images/harris-farm-0004.png'
import allItemsShape from '../Assets/Images/Shape.png'
import FruitItemsShape from '../Assets/Images/FruitShape.png'
import VegetablesItemsShape from '../Assets/Images/VegetableShape.png'
import shopLogo from '../Assets/Images/6f3a29267940d594 (1) 1.svg'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import './PageStyles/ShopDetails.css'

const ShopDetails = () => {
  const [searchText, setSearchText] = useState('')
  const [category, setCategory] = useState('All')

  let fruitVisible = true
  let vegetableVisible = true
  let AllFoodItems = []

  // display items for selected category
  if (category === 'All') {
    AllFoodItems = AllItems
    fruitVisible = true
    vegetableVisible = true
  } else if (category === 'fruit') {
    AllFoodItems = AllItems.filter((items) => {
      return items.foodCategory === category
    })
    fruitVisible = true
    vegetableVisible = false
  } else if (category === 'vegetable') {
    AllFoodItems = AllItems.filter((items) => {
      return items.foodCategory === category
    })
    fruitVisible = false
    vegetableVisible = true
  }

  // search items
  const searchItems = () => {
    const result = AllFoodItems.filter((item) =>
      item.itemName.toLowerCase().includes(searchText.toLowerCase()),
    )
    AllFoodItems = result
  }

  return (
    <>
      <div className="shopDetailsPage">
        {/* Hero Section */}
        <div className="heroBackgroundImage">
          <img src={heroImage} alt="heroImage" />
        </div>
        <div className="heroBackgroundImageOver">
          <div className="heroContect">
            <img src={shopLogo} />
            <h1>Harris Market Farm</h1>
            <div className="ratingSection">
              {Array.from({ length: 5 }, (_, index) => (
                <StarBorderOutlinedIcon key={index} />
              ))}{' '}
              No Reviews Found yet
            </div>
            <div className="shopDetailsBtns">
              <button>More Info</button>
              <button>Give a Review</button>
            </div>
            <div className="shopDetailsSearch">
              <input
                type={'text'}
                placeholder="Search Harris Farm Products"
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button onClick={searchItems(AllFoodItems)}>Search</button>
            </div>
          </div>
        </div>
        {/* Body section */}
        <div className="shopDetailsBody">
          <div className="categoryBtns">
            <div className="Items" onClick={() => setCategory('All')}>
              <img src={allItemsShape} />
              <div className="categoryName">
                <b>All</b>
              </div>
            </div>
            <div className="Items" onClick={() => setCategory('fruit')}>
              <img src={FruitItemsShape} />
              <div className="categoryName">
                <b>Fruits</b>
              </div>
            </div>
            <div className="Items" onClick={() => setCategory('vegetable')}>
              <img src={VegetablesItemsShape} />
              <div className="categoryName">
                <b>Vegetables</b>
              </div>
            </div>
          </div>
          {/* Carousel */}
          <div className="fruitsCarousel">
            {fruitVisible && (
              <GridCarousel
                itemsData={
                  AllFoodItems.length > 0 &&
                  AllFoodItems.filter((item) => item.foodCategory === 'fruit')
                }
                title={'Fruits'}
              />
            )}

            {vegetableVisible && (
              <GridCarousel
                itemsData={AllFoodItems.filter(
                  (item) => item.foodCategory === 'vegetable',
                )}
                title={'Vegetables'}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default ShopDetails
