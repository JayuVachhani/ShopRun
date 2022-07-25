import React from 'react'
import logo from '../Assets/Images/shoprun 1.png'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined'
import InstagramIcon from '@mui/icons-material/Instagram'
import './PageStyles/Footer.css'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="section-1">
          <img src={logo} />
          <div className="contact">
            <div className="contactIcon">
              <PhoneOutlinedIcon />
            </div>

            <span>Support: 1300 585 888</span>
          </div>
        </div>
        <div className="section-2">
          <h3 className="footerHead">POPULAR SUBURBS</h3>
          <div className="subList">
            <div className="sub">Castle Hill</div>
            <div className="sub">Kellyville</div>
            <div className="sub">CherryBrook</div>
            <div className="sub">Baulkham Hills</div>
            <div className="sub">Pennant Hills</div>
          </div>
        </div>
        <div className="section-3">
          <h3 className="footerHead">PAGES</h3>
          <div className="subList">
            <div className="sub">About Us</div>
            <div className="sub">Shop Registration</div>
            <div className="sub">Shop {'&'} Drive For Us</div>
            <div className="sub">Terms {'&'} Conditions</div>
          </div>
        </div>
        <div className="section-4">
          <h3 className="footerHead">KEEP IN TOUCH</h3>
          <div className="subList">
            <div className="sub">Contact Us</div>
            <div className="sub">Help Center</div>
            <div className="socialMedia">
              <FacebookOutlinedIcon />
              <InstagramIcon />
            </div>
          </div>
        </div>
        {/* Scroll to top */}
        <div className="section-5">
          <div className="arrow">
            <button
              className="scrollBtn"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                })
              }
            >
              {' '}
              <ArrowCircleUpOutlinedIcon
                sx={{
                  fontSize: 40,
                  backgroundColor: 'transparent',
                  color: 'green',
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
