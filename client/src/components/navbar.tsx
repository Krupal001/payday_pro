import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <i className="fas fa-dollar-sign text-2xl text-payday-primary mr-2"></i>
              <span className="text-xl font-bold text-gray-900">PayDay Pro</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-900 hover:text-payday-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-900 hover:text-payday-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-900 hover:text-payday-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-payday-primary hover:bg-green-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
            >
              Apply Now
            </Button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-payday-primary"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <button 
              onClick={() => scrollToSection('home')}
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-payday-primary"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-payday-primary"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-payday-primary"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block px-3 py-2 text-base font-medium text-white bg-payday-primary hover:bg-green-600 rounded-md"
            >
              Apply Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
