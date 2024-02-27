import './App.css'
import logo from '../src/assets/logo.png'
import getAward from '../src/assets/2.png'
import award from '../src/assets/1.png'
import pump from '../src/assets/3.png'
import { MdLocalPhone } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function App() {
  

  return (
   <div className='bg-gradient-to-tr from-yellow-100 via-yellow-200 to-yellow-300'>
     <div >
     <div className=' flex flex-col items-center bg-gradient-to-r '>
      {/* header  */}
      <img src={logo} alt="" className=' w-96 '/>

      {/* Award  */}
  <div className='flex flex-col md:flex-row items-center'>
    <div><img src={award} className=' w-60 md:w-auto
 ' alt="" /></div>
    <div>
    <div>  <p className='font-bold'> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.
</p>
<ul className=' list-disc mb-2 font-medium'>
  <li>    C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
</li>
<li>    C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. 
</li>
</ul>
<img src={getAward} alt="" className=' w-86 md:w-auto
 '/></div>
<p className=' m-4 font-semibold'>	Government of India has awarded the <span className='font-bold'>
&quot; National Energy Conservation Award 2018 &quot;</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
</p>
    </div>
  </div>

    {/* 2nd Pump realted part  */}

      <div className='text-center font-semibold'>
        <p className='my-2'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. 
</p>
<img src={pump} alt="" />
<p className='my-4'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors 
</p>
      </div>
      <div className="border-t-2 border-red-500 w-full"></div>

      <div className='my-4 text-center font-medium '>
        <p>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
</p>
<p>CHEMICALS & PROCESS <span className='text-red-500'>| </span>
 POWER <span className='text-red-500'>| </span>
  WATER & WASTE WATER <span className='text-red-500'>| </span>
   OILS & GAS <span className='text-red-500'>|</span>
    PHARMA SUGARS & DISTILLERIES <span className='text-red-500'>| </span>
     PAPER & PULP <span className='text-red-500'>| </span>
      MARINE & DEFENCE <span className='text-red-500'>| </span> METAL & MINING <span className='text-red-500'>| </span>
      FOOD & BEVERAGE <span className='text-red-500'>| </span>
       PETROCHEMICAL & REFINERIES <span className='text-red-500'>|</span>
        SOLAR <span className='text-red-500'>| </span>
         BUILDING <span className='text-red-500'>| </span>
          HVAC <span className='text-red-500'>| </span>
           FIRE FIGHTING <span className='text-red-500'>| </span>
           AGRICULTURE & RESIDENTIAL</p>
      </div>
     </div>
     </div>

     {/* Fotter  */}

     <div className='flex flex-col md:flex-row items-center justify-around bg-red-600 text-white py-8 text-xl'>
      <p className='flex items-center'> <MdLocalPhone className='m-2 '/>
Toll free <span className='ms-2 font-semibold'>1800 200 1234</span></p>
      <p className='flex items-center'> <FaFacebook className='m-2' />
 www.facebook.com/cripump</p>
      <p className='flex items-center'> <FaGlobe className='m-2'/>
 www.crigroups.com</p>
     </div>
   </div>
  )
}

export default App
