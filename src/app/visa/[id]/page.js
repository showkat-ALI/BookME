import getVisaDetails from "@/services/visa/getVisaDeatails";
import Image from "next/image";
import { TbCurrentLocation } from "react-icons/tb";
import { IoTime } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import getContactNumber from "@/services/tour/getContactNumber";

export default async function VisaDetailsPage({params}) {
  const { id } = params;
  const visaDetails = await getVisaDetails(id);
  const contactNumber = await getContactNumber();

  return (
    <div className="bg-white text-[#333] font-sans">
      {/* Hero Section - Made responsive with aspect ratio */}
      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] relative">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_URL}/storage/${visaDetails?.main_img}`}
          alt={`${visaDetails?.property_name} Header`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Main Content - Responsive grid and spacing */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-6 md:py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
        {/* Left Content - Full width on mobile, 9 cols on desktop */}
        <div className="lg:col-span-8 xl:col-span-9">
          {/* Header section with responsive typography */}
          <div className="mb-4 md:mb-6">
            <h2 className="text-xs sm:text-sm text-gray-600 font-medium">
              {visaDetails?.property_name}
            </h2>
            <h1 className="text-xl sm:text-2xl font-bold mt-1">
              {visaDetails?.property_name}
            </h1>
            
            {/* Summary details - Stack on mobile, row on larger screens */}
            <div className="flex flex-wrap items-center text-xs sm:text-sm text-gray-500 gap-2 sm:gap-4 mt-3">
              {visaDetails?.property_summaries?.map((details) => (
                <div key={details?.id} className="flex items-center">
                  <span className="mr-2">
                    {details?.id === 420 ? (
                      <TbCurrentLocation className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900"/>
                    ) : details?.id === 421 ? (
                      <IoTime className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900"/>
                    ) : null}
                  </span>
                  <span>{details?.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Facilities section */}
          <div className="bg-white border rounded-lg p-4 sm:p-6 shadow-sm">
            {visaDetails?.facilities?.map((facility) => (
              <div key={facility?.id} className="mb-6 last:mb-0">
                <h3 className="text-base sm:text-lg font-semibold mb-3 text-gray-800">
                  {facility?.facilty_name}
                </h3>
                <div 
                  className="prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: facility?.value }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar - Full width on mobile, 4 cols on desktop */}
        <div className="lg:col-span-4 xl:col-span-3 space-y-4 sm:space-y-6">
          {/* Contact card with responsive layout */}
          <div className="bg-[#ffeedb] border border-[#FFE8CC] p-4 sm:p-5 rounded-lg">
            <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 sm:mb-3">
              Looking for Expert Visa Guidance?
            </h3>
            <p className="text-sm sm:text-base text-black mb-3 sm:mb-4 leading-relaxed">
              Don&apos;t know where to begin? Share your details, and our experienced visa consultants will assist you on every step.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <button className="bg-[#d66f00] text-white text-sm font-semibold px-[12px] py-2 rounded hover:bg-[#D46B08] transition-colors">
                REQUEST NOW
              </button>
              <div className="text-sm text-[#d66f00] font-medium flex items-center justify-center sm:justify-start">
                <FaPhone className="mr-2 w-4 h-4"/>
                {contactNumber?.Phone?.slice(3)}
              </div>
            </div>
          </div>

          {/* Unit cards */}
          {visaDetails?.property_uinit?.map((unit) => (
            <div key={unit?.id} className="bg-white border rounded shadow-sm p-4">
              <h1 className="font-medium text-base sm:text-lg mb-1">
                <span>{unit?.unit_name}</span>
                <span className="ml-2  text-gray-600">Type: {unit?.unit_name}</span>
              </h1>
              <div className="text-sm space-y-1 my-2">
                <p>Validity: 90 Days</p>  
                <p>Max Stay: 30 Days</p>
                <p>BDT {unit?.price[0]?.price}/person</p>
              </div>
              <p className="text-orange-500 mt-2">
                ⚠️ Please contact Visa department for Document processing.
              </p>
              <button className="mt-3 w-full bg-blue-600 text-white text-sm py-2 rounded hover:bg-blue-700">
                SELECT OFFER
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}