import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import { useTheme } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  )
}
const ProductInformation = () => {
  const theme = useTheme()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeIndex = (index) => {
    setValue(index)
  }
  return (
    <div>
      <Box
        sx={{
          bgcolor: 'background.paper',
          width: 500,
          position: 'relative',
          minHeight: 200,
        }}
        className="btnPanel"
      >
        <AppBar position="static" color="">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            aria-label="action tabs example"
          >
            <Tab label="Information" />
            <Tab label="Ingredients" />
            <Tab label="Directions" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  )
}

export default ProductInformation
