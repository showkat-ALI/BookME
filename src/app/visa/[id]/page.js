"use client";

import { useEffect, useState } from "react";
import getVisaDetails from "@/services/visa/getVisaDeatails";
import getContactNumber from "@/services/tour/getContactNumber";
import VisaInfoSubmitForm from "@/app/components/visa/visaInfoSubmitForm";
import { TbCurrentLocation } from "react-icons/tb";
import { IoTime } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { use } from "react";
import { ToastContainer } from "react-toastify";
export default function VisaDetailsPage({ params }) {
  const { id } = use(params);

  const [visaDetails, setVisaDetails] = useState(null);
  const [contactNumber, setContactNumber] = useState(null);
  const [showForm, setShowForm] = useState(false);


  useEffect(() => {
    async function fetchData() {
      const [details, contact] = await Promise.all([
        getVisaDetails(id),
        getContactNumber()
      ]);
      setVisaDetails(details);
      setContactNumber(contact);
    }

    fetchData();
  }, [id]);

  if (!visaDetails) return <div className="p-4">Loading...</div>;

  return (
    <div className="bg-[#FAFAFA] text-[#333] font-sans">
      {/* Hero Image */}
      <div className="w-full h-[600px] relative">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_URL}/storage/${visaDetails?.main_img}`}
          alt={visaDetails?.property_name}
          fill
          className="object-fill"
          priority
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 xl:col-span-9">
          {/* Title and Summary */}
          <h2 className="text-xs text-gray-600 font-medium">{visaDetails?.property_name}</h2>
          <h1 className="text-xl font-bold mt-1">{visaDetails?.property_name}</h1>

          <div className="flex flex-wrap items-center text-[20px] text-gray-500 gap-2 mt-3">
            {visaDetails?.property_summaries?.map((details,index) => (
              <div key={details?.id||index} className="flex items-center">
                <span className="mr-2">
                  {details?.id === 420 ? <TbCurrentLocation className="w-5 h-5" /> : null}
                  {details?.id === 421 ? <IoTime className="w-5 h-5" /> : null}
                </span>
                <span className="font-semibold">{details?.value}</span>
              </div>
            ))}
          </div>

          {/* Facilities */}
          <div className="bg-white border rounded-lg p-4 mt-6 shadow-sm">
            {visaDetails?.facilities?.map((facility,index) => (
              <div key={facility?.id||index} className="mb-6">
                <h3 className="text-lg font-semibold mb-3">{facility?.facilty_name}</h3>
                <div
                  className="prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: facility?.value }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 xl:col-span-3 space-y-6">
          {/* Contact Card */}
          <div className="bg-[#ffeedb] border p-5 rounded-lg">
            <h3 className="text-xl font-semibold text-black mb-2">Looking for Expert Visa Guidance?</h3>
            <p className="text-base text-black mb-4">Don&apos;t know where to begin? Share your details, and our consultants will assist you.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <button className="bg-[#d66f00] text-white px-[12px] py-2 rounded hover:bg-[#D46B08]">
                <Link
                  href={`https://wa.me/${contactNumber?.Phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] font-bold"
                >
                  REQUEST NOW
                </Link>
              </button>
              <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`tel:${contactNumber?.Phone}`}
                    className=""
                  >
              <div className="text-[#d66f00] font-medium flex items-center">
                <FaPhone className="mr-2 w-4 h-4" />
                {contactNumber?.Phone?.slice(3)}
              </div>
              </Link>
            </div>
          </div>

          {/* Unit Cards */}
          {visaDetails?.property_uinit?.map((unit,index) => (
            <div key={unit?.id||index} className="bg-white border rounded shadow-sm p-4">
              <h1 className="font-medium text-lg mb-1">
                {unit?.unit_name}
                <span className="ml-2 text-gray-600">Type: {unit?.unit_name}</span>
              </h1>
              <div className="text-sm space-y-1 my-2">
                <div className="flex mb-4">
                  <div className="flex-1">
                    <div className="text-sm text-gray-500 mb-1">Validity</div>
                    <div className="text-base font-bold">90 Days</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500 mb-1">Max Stay</div>
                    <div className="text-base font-bold">30 Days</div>
                  </div>
                </div>
                <p className="text-lg font-semibold">BDT {unit?.price[0]?.price} <span className="text-xs font-thin">/person</span></p>
              </div>
              <p className="text-orange-500 text-xs mt-2">
                ⚠️ Please contact Visa department for Document processing.
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="mt-3 w-full font-bold bg-blue-600 text-white text-sm py-2 rounded hover:bg-blue-700"
              >
                SELECT OFFER
              </button>
            </div>
          ))}

<ToastContainer/>
          {/* Modal */}
          {showForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Visa Application Form</h3>
                    <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-gray-700">
                      ✕
                    </button>
                  </div>
                  <VisaInfoSubmitForm property_name={visaDetails?.property_name} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
