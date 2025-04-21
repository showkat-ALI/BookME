import getAllCountry from '@/services/visa/getAllCountry';
import VisaSearchForm from '../components/visa/visaSearchForm';

export default async function Home() {
  

  let countryData = [];

  try {
    const result = await getAllCountry();
    console.log(result);
    countryData = result; // Set countryData here
  } catch (error) {
    console.error("Failed to fetch footer policy:", error);
  }

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
          <VisaSearchForm 
          
            countryData={countryData} 
          />
        </main>
      </div>
    </div>
  );
}