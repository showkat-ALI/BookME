'use client';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [departure, setDeparture] = useState('Thailand');
  const [destination, setDestination] = useState('Bangladesh');
  const [travelers, setTravelers] = useState(1);
  const [isEditing, setIsEditing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const counterRef = useRef(null);
  const dropdownRef = useRef(null);

  const countryData = [
    { name: 'Thailand', code: 'TH' },
    { name: 'Bangladesh', code: 'BD' },
    { name: 'India', code: 'IN' },
    { name: 'Malaysia', code: 'MY' },
    { name: 'Singapore', code: 'SG' },
    { name: 'Dubai', code: 'AE' }
  ];

  // Handle click outside for both dropdown and counter
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (counterRef.current && !counterRef.current.contains(event.target)) {
        setIsEditing(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchData = {
      departure,
      destination,
      travelers
    };
    console.log('Search data:', searchData);
  };

  const currentCountryCode = countryData.find(country => country.name === departure)?.code || '';

  const incrementTravelers = () => {
    setTravelers(prev => Math.min(prev + 1, 10));
  };

  const decrementTravelers = () => {
    setTravelers(prev => Math.max(prev - 1, 1));
  };

return (
    <div className="min-h-screen">
        {/* Background image section */}
        <div 
            className="h-[60vh] w-full bg-cover bg-center relative"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')"
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
                <h1 className="text-4xl font-bold mb-4">Welcome to Book Me</h1>
                <p className="text-xl">Find Flights, Hotels, Visa & Holidays</p>
            </div>
        </div>

        {/* Search form */}
        <div className="">
            <main className="container mx-auto px-4 flex flex-col items-center">
                <form onSubmit={handleSearch} className="relative -mt-20 w-full bg-white max-w-4xl px-[10px] py-[5px] rounded-lg shadow-md overflow-visible">
                    <div className="flex justify-between">
                        {/* Departure */}
                        <div className='flex'>

                        <div 
  className="border border-gray-200 px-3 py-2 rounded-lg relative"
  ref={dropdownRef}
>
  <div 
    className="flex items-center cursor-pointer"
    onClick={() => setIsOpen(!isOpen)}
  >
    <span className="text-xs text-gray-500 font-bold mr-1">{currentCountryCode}</span>
    <div className="w-full text-sm font-medium">
      {departure}
    </div>
    {/* Add dropdown indicator */}
    <svg 
      className={`w-4 h-4 ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`}
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </div>

  {isOpen && (
    <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-60 overflow-y-auto w-full min-w-[200px]">
      {countryData.map((country) => (
        <div
          key={country.code}
          className={`px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center ${
            departure === country.name ? 'bg-blue-50' : ''
          }`}
          onClick={(e) => {
            e.stopPropagation();
            setDeparture(country.name);
            setIsOpen(false);
          }}
        >
          <span className="text-xs text-gray-500 font-bold mr-2 w-6">{country.code}</span>
          <span className="text-sm flex-1">{country.name}</span>
        </div>
      ))}
    </div>
  )}
  
  <select
    className="hidden"
    value={departure}
    onChange={(e) => setDeparture(e.target.value)}
  >
    {countryData.map((country) => (
      <option key={country.code} value={country.name}>{country.name}</option>
    ))}
  </select>
</div>
                       
                        {/* Travelers */}
                        <div className="px-3 ml-[10px] py-2 rounded-lg border border-gray-200" ref={counterRef}>
                            <div className="text-xs text-gray-500 mb-1">Traveller</div>
                            <div 
                                className="flex items-center relative cursor-pointer"
                                onClick={() => setIsEditing(true)}
                            >
                                <div 
                                    className={`transition-all duration-300 ${isEditing ? 'opacity-0 scale-95 absolute' : 'opacity-100 scale-100'}`}
                                >
                                    <span className="text-sm font-bold mr-2">{travelers}</span>
                                    <span className="text-sm">Bangladesh</span>
                                </div>
                                <div 
                                    className={`flex items-center transition-all duration-300 ${isEditing ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute'}`}
                                >
                                    <button 
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            decrementTravelers();
                                        }}
                                        className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors"
                                        disabled={travelers <= 1}
                                    >
                                        -
                                    </button>
                                    <span className="text-sm font-bold mx-2 w-6 text-center">{travelers}</span>
                                    <button 
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            incrementTravelers();
                                        }}
                                        className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors"
                                        disabled={travelers >= 10}
                                    >
                                        +
                                    </button>
                                    <span className="text-sm ml-2">Bangladesh</span>
                                </div>
                            </div>
                        </div>

                        </div>

                        {/* Search Icon */}
                        <div className="px-3 py-2 rounded-lg bg-blue-500 flex items-center justify-center cursor-pointer">
                            <button type="submit" className="text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 19a8 8 0 100-16 8 8 0 000 16zm4.293-4.293l5.414 5.414" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    </div>
);
}