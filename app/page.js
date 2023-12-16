"use client"
import MainComp from '@/components/MainComp'
import WeeklyComp from '@/components/WeeklyComp'
import { useState } from 'react'

export default function Home() {
  const [cityy, setCityy] = useState("Delhi");
  return (

    <div className='block sm:flex justify-between px-16 mt-6'>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <MainComp cityy={cityy} setCityy={setCityy} />
      <WeeklyComp cityy={cityy} setCityy={setCityy} />
    </div>
  )
}
