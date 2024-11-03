export default function Home(){
  return(
    <div className="bg-[#252B42] min-h-screen">
      {/* navbar */}
      <nav className="w-full py-6 flex justify-between items-center px-12">
        <div className="text-white font-bold text-xl font-
           montserrat">BrandName</div>
        <div className="text-white flex space-x-8">
          <a  href="#"className="hover:text-gray-300">Home</a>
          <a  href="#"className="hover:text-gray-300">Product</a>
          <a  href="#"className="hover:text-gray-300">Pricing</a>
          <a  href="#"className="hover:text-gray-300">Content</a>
        </div>
        <div className="flex items-center space-x-4">
           <a href="#"className="text-white">Login</a>
          <button className="bg-[#23A6F0] text-white py-2 px-4 rounded hover:bg-blue-600">JoinUs</button>
        </div>
      </nav>


      {/* page content */}
      <div className="text-ceter mt-16 flex mr-5 justify-center">
     <h5 className="text-[#23A6F0] leading-6 tracking-wide text-size-16-px mb-4">Welcome</h5></div> 

     <div className="text-ceter mt-16 flex flex-col text-center mr-5 justify-center">
        <div><h1 className="text-white text-5xl font-bold font-
 [montserrat] mb-5">Selling on the</h1><br/></div>
        <div><h1 className="text-white text-6xl leading-10 tracking-normal font-
  [montserrat] font-bold mb-5">internet like a pro</h1><br/></div>
      <div><p className="text-gray-300 text-xl font-normal leading-7 tracking-wide  mb-10">We know how large objects will act,but things on a<br/>small scale just do not act that way</p></div>
      {/* buttons */}
        <div className="flex justify-center space-x-4">
          <button className="bg-[#23A6F0] text-white border border-[#23A6F0] font-bold py-4 px-10 rounded-md hover:bg-[#23A6F0] ">Get Quote Now</button>
          <button className="text-[#23A6F0] border border-[#23A6F0] py-4 px-10  font-bold rounded-md hover:bg-[#23A6F0] hover:text">Learn More</button>
        </div>
      </div> 

      {/* cards */}
      <div className="flex justify-center space-x-8 mt-20">
{/* firstcard */}
<div className="bg-white drop-shadow-lg shadow-black py-8 px-12 w-80 h-72">
  <div className="bg-[#FFDCD1] mb-4 w-16 h-16 py-6 px-5 rounded-md"></div>
  <h5 className="text-gray-800 font-bold text-xl leading-6 tracking-normal font-montserrat mb-2">training courses</h5>
  <button className=" border-[#E74040] mb-5 border-2 w-12 h-1"></button>
  <p className="text-[#737373] font-normal leading-5 tracking-normal font-montserrat text-sm font-siz">The gradual accumulation of information about atomic and small-scale behaviour...</p>

</div>
{/* secondcard */}
<div className="bg-white drop-shadow-lg shadow-black py-8 px-12 w-80 h-72">
  <div className="bg-[#B9EAA8] mb-4 w-16 h-16 py-6 px-5 rounded-md"></div>
  <h5 className="text-gray-800 font-bold text-xl leading-6 tracking-normal font-montserrat mb-2">2,769 online courses</h5>
  <button className=" border-[#E74040]  mb-5 border-2 w-12 h-1"></button>
  <p className="text-[#737373] font-normal leading-5 tracking-normal text-sm  font-montserrat font-siz">The gradual accumulation of information about atomic and small-scale behaviour...</p>

</div>
{/* thirdcard */}
<div className="bg-[#23A6F0] drop-shadow-lg shadow-black py-8 px-12 w-80 h-72">
  <div className="bg-white  mb-4 w-16 h-16 py-6 px-5 rounded-md"></div>
  <h5 className="text-gray-800 font-bold text-xl font-mo leading-6 tracking-normal font-montserrat mb-2">training courses</h5>
  <button className=" border-white mb-5  border-2 w-12 h-1"></button>
  <p className="text-white font-normal leading-5 tracking-normal text-sm font-montserrat font-siz">The gradual accumulation of information about atomic and small-scale behaviour...</p>

</div>

</div>

      </div>



      

    

  )
}