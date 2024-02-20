import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-full h-full flex flex-col gap-y-3 p-2 bg-red-300'>
      <Link to="/">
        <a href="">Главная</a>
      </Link>
      <Link to="/search">
        <a href="">Поиск</a>
      </Link>
      <Link to="/library">
        <a href="">Библиотека</a>
      </Link>
    </div>
  )
}

export default Sidebar