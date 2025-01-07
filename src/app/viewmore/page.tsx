import Navbar from "@/components/Navbar";
import Dash from "@/components/Dash";
export default function ViewMorePage() {
    return (
      <div className="container mx-auto p-6">
        <Navbar />
        
        <h2  className="text-2xl sm:text-4xl font-bold text-center ">
                    Delicious <span className="text-accent">Food</span></h2>
  
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-700 text-center max-w-2xl mx-auto">
            At Delicious Food, we pride ourselves on offering delicious and high-quality [Cuisine Type]. Whether you're here for a quick bite or a special celebration, we ensure every dish is crafted with love and the finest ingredients.
          </p>
        </section>
  
        
        <section className="mb-8">
          <div className="relative">
            <img 
              src="/about.webp" 
              alt="Restaurant or Food"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center rounded-lg">
              <h3 className="text-white text-3xl font-semibold ">Welcome to Delicious Food</h3>
            </div>
          </div>
        </section>
  
        
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Come Visit Us!</h2>
          <p className="text-gray-700 mb-4">
            You can find us at [Restaurant Address]. We look forward to serving you with the finest [Cuisine Type] dishes in town!
          </p>
        </section>
        <div className="w-fit mx-auto">
          <Dash />
        </div>
      </div>
    );
  }
  