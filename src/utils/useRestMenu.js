import  { useEffect, useState } from 'react'
import { MENU_URL } from './constant'

const useRestMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null)

  useEffect(()=>{
     fetchData(resId)
  },[])

  const fetchData = async (resId) => {
    const data = await fetch(MENU_URL + resId)
    const json = await data.json()
    setResInfo(json)
  }

  return resInfo;
}

export default useRestMenu