import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import user from "../images/user.svg";
import cart from "../images/cart.svg";
import menu from "../images/menu.svg";
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export const Header = () => {
  return (
   <>
   <FloatingWhatsApp phoneNumber='+8801310616733' accountName='প্রবাস টেলিকম' chatMessage="আসসালামু আলাইকুম,
   কিভাবে সাহায্য করতে পারি ?" />

    <nav class="header-bottom navbar fixed-top navbar-expand-lg navbar-light">
  <div class="container-xxl">
    <a class="navbar-brand" href="#">প্রবাস টেলিকম</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">হোম</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">আমাদের সম্পর্কে</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">ফিচার সমূহ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">মূল্য তালিকা</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">অ্যাপটি ডাউনলোড করুন</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    
   </>
  )
}
