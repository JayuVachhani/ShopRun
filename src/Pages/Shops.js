import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import ShopsCard from '../Components/ShopsCard/ShopsCard'
import AllShopsData from '../Assets/AppData/AllShopsData/AllShopsData'
import AllDepartmentsData from '../Assets/AppData/AllDepartmentsData/AllDepartmentsData'
import Departments from '../Components/Departments/Departments'
import HeroImage from '../Assets/Images/harris-farm-0004.png'
import './PageStyles/Shops.css'

const Shops = () => {
  const [shops, setShops] = useState(AllShopsData)
  const [pageNumber, setPageNumber] = useState(0)

  // Display shops for selected department
  const displayShops = (departmentName) => {
    if (departmentName === 'All') {
      setShops(AllShopsData)
    } else {
      const result = AllShopsData.filter((shopsData) => {
        return shopsData.availableFoodCategory
          .split(', ')
          .includes(departmentName)
      })
      setShops(result)
    }
  }

  // pagination
  const showItemsPerPage = 8
  const pageVisited = pageNumber * showItemsPerPage
  const itemsToDisplay = shops.slice(
    pageVisited,
    pageVisited + showItemsPerPage,
  )
  const pageCount = Math.ceil(shops.length / showItemsPerPage)

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <>
      <div className="shopPageBanner">
        <div className="shopPageHeroImage">
          <div className="heroContent">
            <div>Shop from your favourite</div>
            <div>Grocery store!</div>
            <div className="shopDetailsSearch">
              <input
                type={'text'}
                placeholder="I am looking for..."
                // onChange={(e) => setSearchText(e.target.value)}
              />
              <button onClick={''}>Search</button>
            </div>
          </div>
        </div>
        {/* <img src={HeroImage} alt="shopPageHeroImage" /> */}
        {/* </div> */}
        {/* <div className="heroBackgroundImageOver">
        <div className="heroContect"> */}
        {/* <img src={shopLogo} /> */}
        {/* <h1>Harris Market Farm</h1> */}

        {/* <div className="shopDetailsSearch">
            <input
              type={'text'}
              placeholder="Search Harris Farm Products" */}
        {/* // onChange={(e) => setSearchText(e.target.value)} */}
        {/* /> */}
        {/* <button onClick={searchItems(AllFoodItems)}>Search</button> */}
        {/* </div> */}
        {/* </div> */}
      </div>
      <div className="shopPageContainer">
        <div className="shopPageDepartments">
          {/* Display All Departments */}
          {AllDepartmentsData &&
            AllDepartmentsData.map((department) => {
              return (
                <Departments
                  key={department.id}
                  departments={department}
                  displayShops={displayShops}
                />
              )
            })}
        </div>

        {/* All Available Shops for selected Department */}
        <section>
          <div className="shopsCount">{shops.length} shops found</div>
          <div className="allShops">
            {itemsToDisplay &&
              itemsToDisplay.map((shopData) => {
                return <ShopsCard allShopsDetails={shopData} />
              })}
          </div>
        </section>

        {/* Pagination */}
        <div className="pagination">
          <ReactPaginate
            nextLabel={'Next'}
            previousLabel="Previous"
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName="paginationBtns"
            previousLinkClassName="previousBtn"
            nextLinkClassName="nextBtn"
            disabledClassName="paginationDisabled"
            activeClassName="paginationActive"
          />
        </div>
      </div>
    </>
  )
}

export default Shops
