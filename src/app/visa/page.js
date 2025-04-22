import getAllCountry from '@/services/visa/getAllCountry';
import getAllVisa from '@/services/visa/getAllVisa';
import VisaSearchForm from '../components/visa/visaSearchForm';
import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import getContactNumber from '@/services/tour/getContactNumber';
import { TbCurrentLocation } from 'react-icons/tb';
import { IoTime } from 'react-icons/io5';

export default async function Home() {
  let countryData = [];
  let visaData = [];
  let contactNumber = [];
  try {
    const countryResult = await getAllCountry();
    const visaResult = await getAllVisa();
    const contactnumber = await getContactNumber();

    countryData = countryResult;
    visaData = visaResult;
    contactNumber = contactnumber;
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }

  return (
    <div className="min-h-screen font-sans">
      {/* Background image section */}
      <div 
        className="h-[60vh] w-full bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to Book Me</h1>
          <p className="text-lg md:text-xl">Find Flights, Hotels, Visa & Holidays</p>
        </div>
      </div>

      {/* Search form */}
      <div className="bg-white py-8 shadow-md">
        <main className="container mx-auto px-4 flex flex-col items-center">
          <VisaSearchForm countryData={countryData} />
        </main>
      </div>

      {/* Visa Countries Grid */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Popular Visa Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visaData.map((country, ind) => (
            <div
              key={ind}
              className="relative bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}/storage/${country?.image}`}
                  alt={country?.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              {/* Content Container */}
              <div className="p-4">
                <h2 className="font-bold text-lg text-blue-900 mb-2">
                  {country?.name}
                </h2>

                {country?.properties?.map((property, idx) => (
                  <div className="mb-3" key={idx}>
                    <div>
                      <p className="text-gray-700 font-semibold text-sm md:text-base">
                        {property?.property_summaries[0]?.value}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-2">
                      <p className="flex items-center">
                        <TbCurrentLocation className="w-4 h-4 mr-1" />
                        <span className="text-gray-700 font-semibold text-sm md:text-base">
                          {property?.property_summaries[1]?.value}
                        </span>
                      </p>
                      <p className="flex items-center">
                        <IoTime className="w-4 h-4 mr-1" />
                        <span className="text-gray-700 font-semibold text-sm md:text-base">
                          {property?.property_summaries[2]?.value}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}

                <p className="text-lg font-semibold mt-2">
                  <span className="text-sky-500">BDT {country?.properties[0]?.property_uinit[0]?.price[0]?.price}</span>
                  <span className="text-xs font-thin ml-1">/person</span>
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`tel:${contactNumber?.Phone}`}
                    className="flex-1 min-w-[100px]"
                  >
                    <div className="flex border border-blue-950 justify-center rounded-full text-black text-center text-sm items-center px-3 py-2 hover:bg-blue-50 transition-colors">
                      Call Now
                    </div>
                  </Link>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://wa.me/${contactNumber?.Phone}`}
                    className="flex-1 min-w-[120px]"
                  >
                    <div className="flex border border-blue-950 justify-center rounded-full text-black text-sm gap-2 items-center px-3 py-2 hover:bg-blue-50 transition-colors">
                      <FaWhatsapp className="text-base text-green-500" />
                      Book Now
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}