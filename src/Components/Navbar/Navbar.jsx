import React from 'react'
import './Navbar.css'
import { Hero } from '../Hero/Hero'
// import logo from '../Assets/logo.png'
export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="navbar bg-base-300 w-full">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
      </div>
      <div className="mx-2 flex-1 px-2">Navbar Title</div>
      <div className="hidden flex-none lg:block">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
          <li onClick={() => {setMenu("shop")}}><link to ='/'><a><i class="fa-solid fa-house"></i> Home</a></link></li>
          <li onClick={() => {setMenu("mens")}}><link to ='/mens'><a><i class="fa-solid fa-person"></i>Man</a></link></li>
          <li onClick={() => {setMenu("womans")}}><link to ='/womans'><a><i class="fa-solid fa-person-dress"></i>Woman</a></link></li>
          <li onClick={() => {setMenu("kids")}}><link to ='/kids'><a><i class="fa-solid fa-baby"></i>Baby</a></link></li>
          <li><link to ='/login'><a><i class="fa-solid fa-cart-arrow-down"></i>Cart</a></link></li>
        </ul>
      </div>
    </div>
    {/* Page content here */}

    <Hero/>
    
    {/* Page content here */}
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 min-h-full w-80 p-4">
      {/* Sidebar content here */}
          <li><a><i class="fa-solid fa-house"></i> Home</a></li>
          <li><a><i class="fa-solid fa-person"></i>Man</a></li>
          <li><a><i class="fa-solid fa-person-dress"></i>Woman</a></li>
          <li><a><i class="fa-solid fa-baby"></i>Baby</a></li>
          <li><a><i class="fa-solid fa-cart-arrow-down"></i>Cart</a></li>
    </ul>
  </div>
</div>
    </div>
  )
}
export default Navbar