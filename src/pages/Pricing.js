import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';
import service1 from "../images/service-taker (1).jpg"
import service2 from "../images/service-taker (1).png"
import service3 from "../images/service-taker (1).webp"
import service4 from "../images/service-taker (2).jpg"
import service5 from "../images/service-taker (2).png"
import service6 from "../images/service-taker (3).jpg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export const Pricing = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };
  return (
    <>
        <section className='pricing'>
        <div className='container-xxl'>
        <div className='row mb-3'>
        <h1 className='heading'>প্রাইসিং প্ল্যান</h1>

        </div>
        <div className='row'>
        <div className='col col-12 col-md-4 box-wrapper'>
        <div className='box'>
<h1 className='card-title'>
৫ পিছ স্ক্র্যাচ কার্ড
</h1>

<h1 className='price'>৳২৮০০</h1>
<p className='validity'>Monthly</p>

<ul className='my-5'>
<li><h2><FaCheckCircle/></h2>১৫০০ মিনিট ইন্টারন্যাশনাল টকটাইম</li>
        <li><h2><FaCheckCircle/></h2>আনলিমিটেড ইন্টারনেট</li>
        <li><h2><FaCheckCircle/></h2>মেয়াদ ৩০ দিন</li>
      
</ul>
<button type="button" class="btn btn-success my-btn">Buy Now</button>
</div>

        </div>
        <div className='col col-12 col-md-4 box-wrapper'>
        <div className='box'>
<h1 className='card-title'>
১০ পিছ স্ক্র্যাচ কার্ড
</h1>

<h1 className='price'>৳৫১০০</h1>
<p className='validity'>Monthly</p>

<ul className='my-5'>
<li><h2><FaCheckCircle/></h2>২৫০০ মিনিট ইন্টারন্যাশনাল টকটাইম</li>
        <li><h2><FaCheckCircle/></h2>আনলিমিটেড ইন্টারনেট</li>
        <li><h2><FaCheckCircle/></h2>মেয়াদ ৩০ দিন</li>
      
</ul>
<button type="button" class="btn btn-success my-btn">Buy Now</button>
</div>

        </div>
        <div className='col col-12 col-md-4 box-wrapper'>
        <div className='box'>
<h1 className='card-title'>
২০ পিছ স্ক্র্যাচ কার্ড
</h1>

<h1 className='price'>৳৮৭০০</h1>
<p className='validity'>Monthly</p>

<ul className='my-5'>
<li><h2><FaCheckCircle/></h2>৫০০০ মিনিট ইন্টারন্যাশনাল টকটাইম</li>
        <li><h2><FaCheckCircle/></h2>আনলিমিটেড ইন্টারনেট</li>
        <li><h2><FaCheckCircle/></h2>মেয়াদ ৩০ দিন</li>
      
</ul>
<button type="button" class="btn btn-success my-btn">Buy Now</button>
</div>
        </div>

        </div>

        </div>

        </section>
        <section className='service-taker my-5'>
        <div className='container-xxl'>
        <div className='row'>
        <h1 className='heading mb-5'>আমাদের থেকে সেবা গ্রহণ কারি প্রতিষ্ঠান</h1>

        </div>
        <Carousel responsive={responsive}  showDots={true} autoPlay={true}
  autoPlaySpeed={1000} infinite={true}>
  <div><img src={service1} className='slide'/></div>
  <div><img src={service2} className='slide'/></div>
  <div><img src={service3} className='slide'/></div>
  <div><img src={service4} className='slide'/></div>
  <div><img src={service5} className='slide'/></div>
  <div><img src={service6} className='slide'/></div>
</Carousel>;

        </div>


        </section>
    </>
  )
}
