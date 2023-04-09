import React from 'react'
import internetday from "../images/internet-day.png";
import { FaBeer,FaCcMastercard,FaMoneyBillAlt,FaLockOpen,FaSearchDollar } from 'react-icons/fa';
import { About } from './About';
import { Features } from './Features';
import { Pricing } from './Pricing';
import CountUp from 'react-countup';

export const Home = () => {
  return (
    <>
   
    <section className='home'>
    <div className='container-xxl banner'>
    <div class="row">
    <div class="col-12 col-md-6 left">
    <p className='mt-5 mt-md-0'>অল্প খরচে, টাকা পাঠান</p>
<h1>আনলিমিটেড স্ক্রাচকার্ড</h1>
<p>আমাদের অ্যাপ ব্যাবহার করে মানি ট্র্যান্সফার করুন খুব সহজে।মাত্র কয়েক সেকেন্ডে টাকা পাঠান যেকোন জায়গায় বসে।</p> 
    </div>
    <div class="col-12 col-md-6 right">
    <img src={internetday} alt="Girl in a jacket" width="500" height="600"></img>
    
    
      
    </div>
   
  </div>
   
    

    </div>
    </section>


    <section className='statistics'>
    <div className='container-xxl counter'>
    <div className='row counter'>
    <div className='col col-12 col-md-3 box-wrapper'>
<div className='box'>
<h1>
<CountUp end={2500} duration={2}/>
</h1>
<p>আমাদের হ্যাপি ক্লাইন্টগন</p>
</div>

    </div>
    <div className='col col-12 col-md-3 box-wrapper'>
   <div className='box'>
   <h1><CountUp end={6500} duration={2}/></h1>
<p>অ্যাপ ডাউনলোড করুন</p>

   </div>
    </div>
    <div className='col col-12 col-md-3 box-wrapper'>
   <div className='box'>
   <h1><CountUp end={2350} duration={2}/></h1>
<p>আমাদের রেটিং</p>
   </div>

    </div>
    <div className='col col-12 col-md-3 box-wrapper'>
   <div className='box'>
   <h1>
   <CountUp end={2500} duration={2}/>
</h1>
<p>পুরষ্কার</p>
   </div>

    </div>


    </div>

    </div>

    <div>
      
    </div>

    <div className='feature py-5'>
    <div className='container-xxl'>
    <div className='row'>
    <div className='heading'>
    <p>আমাদের অ্যাপ এর বিশেষ কিছু দিক</p>
    <h1>আসুন দেখেনি</h1>
    </div>

    </div>

    <div className='row py-5'>
    <div className='col col-12 col-md-3 box-wrapper'>
<div className='box'>
<h2><FaCcMastercard/></h2>
<h1>
সেন্ড মানি
</h1>
<p>পৃথিবীর যেকোন জায়গায় থেকে টাকা সেন্ড করতে পারবেন।</p>
</div>

    </div>
    <div className='col col-12 col-md-3 box-wrapper'>
<div className='box'>
<h2><FaSearchDollar/></h2>
<h1>
ক্যাশইন
</h1>
<p>ফ্রি ক্যাশইন করতে পারবেন, পৃথিবীর যেকোন জায়গা থেকে।</p>
</div>

    </div>
    <div className='col col-12 col-md-3 box-wrapper'>
<div className='box'>
<h2><FaLockOpen/></h2>
<h1>
খুব সহজ
</h1>
<p>আমাদের এই অ্যাপটি আপনি খুব সহজে ব্যাবহার করতে পারবেন।</p>
</div>

    </div>
    <div className='col col-12 col-md-3 box-wrapper'>
<div className='box'>
<h2><FaMoneyBillAlt/></h2>
<h1>
অ্যাড মানি
</h1>
<p>বিকাশ, রকেট, নগদ থেকে খুব সহজে অ্যাড মানি করতে পারবেন।</p>
</div>

    </div>


    </div>

    </div>

    </div>

    </section>
    <About/>
    <Features/>
    <Pricing/>

    


    </>
  )
}


