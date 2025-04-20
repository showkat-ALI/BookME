import React from "react";
import Image from "next/image";

export default function VisaDetailsPage() {
  return (
    <div className="bg-white text-[#333] font-sans">
      {/* Hero Section */}
      <div className="w-full h-[300px] relative">
        {/* <Image
          src="/shartrip-visa-details.png"
          alt="Thailand Visa Header"
          fill
          className="object-cover"
        /> */}
      </div>

      {/* Main Content */}
      <div className="max-w-[1280px] mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Content */}
        <div className="lg:col-span-9">
          <h2 className="text-sm text-gray-600 font-medium">Tourist Visa Only</h2>
          <h1 className="text-2xl font-bold mb-2">Tourist Visa Only</h1>
          <div className="flex items-center text-sm text-gray-500 space-x-4 mb-6">
            <span>Visa Required</span>
            <span>Currency THB</span>
            <span>Local Time GMT+7</span>
          </div>

          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Required Documents for E visa (Thailand)
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-md font-semibold text-gray-700 mb-2">Job Holder:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                  <li>07 Months Valid Passport With Old Passport (if have)</li>
                  <li>
                    Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 45 mm)
                  </li>
                  <li>Visiting card</li>
                  <li>No objection certificate (NOC)</li>
                  <li>Marriage certificate copy (if spouse name not mentioned in the passport)</li>
                  <li>Employee id card copy (One photo copy)</li>
                  <li>
                    Salary bank statement (Last 06 months) and bank solvency certificate or salary certificate or payslip
                  </li>
                  <li>Personal bank solvency certificate</li>
                  <li>
                    Personal bank statement of last 06 months and minimum balance BDT 70,000 for each applicant.
                  </li>
                  <li>
                    Proof of Residence (Present): A copy of National ID Card and Latest Utility Bill such as electricity, telephone, gas or water bill (not more than 3 months old) copy.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-md font-semibold text-gray-700 mb-2">Businessman:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                  <li>07 Months Valid Passport With Old Passport (if have)</li>
                  <li>
                    Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 45 mm)
                  </li>
                  <li>Personal or Company bank statement for the last 06 months.</li>
                  <li>Renewed trade license copy with notary public (English translated)</li>
                  <li>Visiting card</li>
                  <li>Marriage certificate copy (if spouse name not mentioned in the passport)</li>
                  <li>Memorandum for limited company form page XII (One photo copy)</li>
                  <li>Company letter head pad</li>
                  <li>Personal or company bank solvency certificate</li>
                  <li>
                    Proof of Residence (Present): A copy of National ID Card and Latest Utility Bill such as electricity, telephone, gas or water bill (not more than 3 months old) copy.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-orange-50 border border-orange-200 p-4 rounded-md">
            <h3 className="text-sm font-semibold text-orange-800 mb-2">Looking for Expert Visa Guidance?</h3>
            <p className="text-xs text-orange-700 mb-3">
              Don’t know where to begin? Share your details, and our experienced visa consultants will assist you every step.
            </p>
            <button className="bg-orange-500 text-white text-sm px-4 py-2 rounded hover:bg-orange-600 w-full mb-2">
              REQUEST NOW
            </button>
            <p className="text-sm text-orange-800 font-medium">📞 +880 9678167617</p>
          </div>

          <div className="bg-white border rounded shadow-sm p-4 text-sm">
            <h4 className="font-semibold mb-1">E visa (Thailand) Type:E-Visa</h4>
            <p>Validity: 90 Days</p>
            <p>Max Stay: 30 Days</p>
            <p>BDT 6,000/person</p>
            <p className="text-orange-500 text-xs mt-2">
              ⚠️ Please contact Visa department for Document processing.
            </p>
            <button className="mt-4 w-full bg-blue-600 text-white text-sm py-2 rounded hover:bg-blue-700">
              SELECT OFFER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
