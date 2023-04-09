import React from 'react'
import { FaMap,FaPhoneAlt,FaEnvelope,FaFacebookSquare,FaTwitterSquare,FaYoutube,FaInstagram } from 'react-icons/fa';



export const Footer = () => {
  return (
    <>
      <section className='footer mt-5'>
      <div className='container-xxl'>
      <div className='row'>
      <div className='col col-12 col-md-3 box-wrapper'>
      <h1 className='heading'>প্রবাস টেলিকম</h1>
      <p className='pt-4'>স্ক্র্যাচ কার্ড হল একটি অনলাইন ভিত্তিক ইন্টারন্যাশনাল মানি ট্র্যান্সফার অ্যাপ। আমাদের এই অ্যাপ এর মাধ্যমে আপনি নিমিষে পৃথিবীর যে-কোন প্রান্তে টাকা পাঠানো বা উত্তলন করতে পারবেন।</p>
      <div className='social-icons'>
      <h2><FaFacebookSquare/></h2>
      <h2><FaTwitterSquare/></h2>
      <h2><FaInstagram/></h2>
      <h2><FaYoutube/></h2>

      </div>

      </div>
      <div className='col col-12 col-md-3 box-wrapper'>
      <h1 className='heading'>আমাদের সেবা সমূহ</h1>
      <div className='pt-5 body'>
      <h3>ইন্টারন্যাশনাল মানি ট্র্যান্সফার</h3>
      <h3>সেন্ড মানি ফ্রি</h3>
      <h3>ক্যাশইন ফ্রি</h3>
      <h3>এডমানি ফ্রি</h3>
      </div>

      </div>
      <div className='col col-12 col-md-3 box-wrapper'>
      <h1 className='heading'>গুরুত্বপূর্ণ লিঙ্ক</h1>
      <div className='pt-5 body'>
      
      <h3>আমাদের সম্পর্কে</h3>
      <h3>আমাদের সম্পর্কে</h3>
      <h3>সাপোর্টের জন্য যোগাযোগ করুন</h3>
      </div>

      </div>
      <div className='col col-12 col-md-3 box-wrapper'>
      <h1 className='heading'>আমাদের ঠিকানা</h1>
      <div className='pt-5 body'>
      
      <div className='flexify'><h3><FaMap/></h3><h3>অফিস: চিটাগাং, বাংলাদেশ</h3></div>
      <div className='flexify'><h3><FaPhoneAlt/></h3><h3>+880 1602-072132</h3></div>
      <div className='flexify'><h3><FaEnvelope/></h3><h3>admin@probashiserviceagency.xyz</h3></div>
      </div>

      </div>

      </div>
      <div className='row'>
      <div className='footer-bottom'>
      <p>কপিরাইট © ২০২3 । সকল কিছুর স্বত্বাধিকার প্রবাস টেলিকম</p>
      <p>ট্রামস অ্যান্ড কন্ডিশন
প্রাইভেসি অ্যান্ড পলিসি</p>

      </div>
      </div>

      </div>
      

      </section>
     
    </>
  )
}
