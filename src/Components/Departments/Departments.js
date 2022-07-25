import React from 'react'
import './Departments.css'
const Departments = (props) => {
  const filterDepartment = (departmentTitle) => {
    props.displayShops(departmentTitle)
  }
  const { departmentTitle } = props.departments
  return (
    <button
      className="shopPageDepartmentName"
      onClick={() => filterDepartment(departmentTitle)}
    >
      {departmentTitle}
    </button>
  )
}

export default Departments
