
import './style.css'
import Menu from './menuapi'
import Menucard from './menucard'
import { useState } from 'react'
import Navbar from './navbar'


const uniqecategory = [...new Set(Menu.map((curelem) => {

  return curelem.category

}
)
), "ALL",
];



const Reastaurant = () => {


  const [menudata, setmenudata] = useState(Menu)
  const [menuList, setmenuList] = useState(uniqecategory)
  const filterItem = (category) => {
    const afterfilter = Menu.filter((curelem) => {
      console.log(curelem.category)
      return curelem.category === category


    })
    setmenudata(afterfilter)


  }
  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />

      <Menucard menudata={menudata} />

    </>
  )
}

export default Reastaurant