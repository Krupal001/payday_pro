import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-green-500 to-blue-500 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Fast Cash When You Need It Most
            </h1>
            <p className="text-xl mb-8 text-green-100">
              Get approved for payday loans in minutes. No lengthy paperwork, no waiting. Just quick, reliable financial solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full text-lg font-semibold">
                <i className="fas fa-rocket mr-2"></i>
                Apply in 2 Minutes
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-500 px-8 py-4 rounded-full text-lg font-semibold">
                Learn More
              </button>
            </div>
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="flex items-center">
                <i className="fas fa-check-circle text-yellow-400 text-xl mr-2"></i>
                <span>Instant Approval</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-shield-alt text-yellow-400 text-xl mr-2"></i>
                <span>100% Secure</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-clock text-yellow-400 text-xl mr-2"></i>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
              alt="Professional financial consultation" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
