import React from 'react';
import CompanyOverView from './CompanyOverView';
import Choice from "../Components/Bestchoice";
import OnSpotRentalsForm from './Booking';
import Getintouch from "../Components/Getintouch";
import Footer from "../Components/Footer";

function ElectricFleet() {
    return (
       <div>
        <br /> 
        <br />
         <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Our Services, <span className="text-[#e74c3c]">One Need</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              At Choudhary Tours & Travels Pvt. Ltd. (CTTPPL), we have been a trusted name in the industry for over 35 years, offering comprehensive nationwide services in tours, cabs, and fleet management. Whether you're looking for safe and reliable corporate transportation, customizable tour packages, or efficient fleet solutions, our vast experience and cutting-edge technology ensure smooth and hassle-free journeys. With a fleet strength of 4,000+ vehicles, we provide top-notch service tailored to meet the unique needs of businesses and individuals alike.
            </p>
         </div>

         
         <div className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
           
         

        
         

         <Choice/>
               </div>  

         <OnSpotRentalsForm/>
         <br />
         <br />
         <br />
         <br />

         <div className="w-full bg-[#0d2c3b] flex items-center justify-center px-4 py-16">
  <div className="max-w-4xl text-center">
    <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
      Electric <span className="text-red-500">
Fleet Services</span>
    </h1>
    <h2 className="text-lg sm:text-2xl font-bold text-[#f1c40f] mb-6">
      Driving Sustainability, Thinking Green.
    </h2>
    <p className="text-gray-200 max-w-2xl mx-auto">
      CTTPL’s Electric Fleet Services bring eco-friendly transportation solutions to your doorstep. With zero-emission vehicles, we prioritize sustainability without compromising on efficiency or reliability. Our advanced electric fleet is ideal for businesses aiming to reduce their carbon footprint while ensuring smooth and safe commutes. Together, let’s pave the way for a greener future.
    </p>
  </div>
  {/* Zero Emission Section */}
<div className="w-full bg-[#0d2c3b] py-16 px-6 lg:px-20">
  <div className="max-w-6xl mx-auto text-center text-white">
    <h2 className="text-2xl sm:text-3xl font-bold mb-4">
      ZERO EMISSION <span className="text-[#e74c3c]">@ CTTPL</span>
    </h2>
    <p className="text-gray-300 max-w-4xl mx-auto mb-6">
      As the world combats climate change and seeks harmony with the environment, 
      India is striving for sustainable and advanced mobility solutions. Businesses 
      play a pivotal role in driving this transition, especially in adopting sustainable 
      employee transportation. By embracing EVs, businesses and fleet operators can act 
      as catalysts for change, benefiting commercially while leveraging policy incentives 
      and optimizing vehicle usage for a cost-effective shift.
    </p>
    <p className="text-gray-300 max-w-4xl mx-auto mb-12">
      CTTPL is proud to be among the early adopters of the Government of India’s initiative 
      to incorporate electric fleets. Our EVs are equipped with advanced safety features, 
      while cutting-edge charging substations ensure the quickest and most efficient 
      recharging solutions.
    </p>
  </div>

  {/* Cards */}
  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

    {/* Box 1 */}
    <div className="bg-white rounded-2xl shadow-md p-6 text-center">
      <div className="text-4xl mb-4 text-[#0d2c3b]">🌱</div>
      <h3 className="font-semibold text-lg text-[#0d2c3b] mb-2">
        Eco-Friendly Transportation
      </h3>
      <p className="text-gray-600 text-sm">
        CTTPL’s electric fleet contributes to a greener environment by significantly 
        reducing carbon emissions, supporting India’s move towards sustainability.
      </p>
    </div>

    {/* Box 2 */}
    <div className="bg-white rounded-2xl shadow-md p-6 text-center">
      <div className="text-4xl mb-4 text-[#0d2c3b]">🛡️</div>
      <h3 className="font-semibold text-lg text-[#0d2c3b] mb-2">
        Advanced Vehicle Safety
      </h3>
      <p className="text-gray-600 text-sm">
        Each electric vehicle is equipped with state-of-the-art safety and security 
        features, ensuring reliable and secure transportation for all passengers.
      </p>
    </div>

    {/* Box 3 */}
    <div className="bg-white rounded-2xl shadow-md p-6 text-center">
      <div className="text-4xl mb-4 text-[#0d2c3b]">⚡</div>
      <h3 className="font-semibold text-lg text-[#0d2c3b] mb-2">
        Fast and Efficient Charging
      </h3>
      <p className="text-gray-600 text-sm">
        Our innovative charging substations enable quick and efficient vehicle 
        recharging, minimizing downtime and maximizing fleet availability.
      </p>
    </div>

    {/* Box 4 */}
    <div className="bg-white rounded-2xl shadow-md p-6 text-center">
      <div className="text-4xl mb-4 text-[#0d2c3b]">💰</div>
      <h3 className="font-semibold text-lg text-[#0d2c3b] mb-2">
        Cost-Effective Solutions
      </h3>
      <p className="text-gray-600 text-sm">
        With lower operational costs and government incentives, our electric fleet 
        offers businesses an economical way to adopt sustainability.
      </p>
    </div>

    {/* Box 5 */}
    <div className="bg-white rounded-2xl shadow-md p-6 text-center">
      <div className="text-4xl mb-4 text-[#0d2c3b]">💡</div>
      <h3 className="font-semibold text-lg text-[#0d2c3b] mb-2">
        Commitment to Innovation
      </h3>
      <p className="text-gray-600 text-sm">
        As early adopters of EV technology, CTTPL stays ahead with cutting-edge 
        solutions that blend sustainability with performance.
      </p>
    </div>

    {/* Box 6 */}
    <div className="bg-white rounded-2xl shadow-md p-6 text-center">
      <div className="text-4xl mb-4 text-[#0d2c3b]">🏛️</div>
      <h3 className="font-semibold text-lg text-[#0d2c3b] mb-2">
        Government Initiative
      </h3>
      <p className="text-gray-600 text-sm">
        CTTPL aligns with the Indian Government’s vision of sustainable mobility 
        by integrating electric fleets into our operations.
      </p>
    </div>

  </div>
</div>

  </div>
         <Getintouch />
         <Footer/>
       </div>
    );
}

export default ElectricFleet;
