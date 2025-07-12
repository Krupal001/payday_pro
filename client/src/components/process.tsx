export default function Process() {
  const steps = [
    {
      number: "1",
      title: "Apply Online",
      description: "Fill out our quick and secure online application form. It takes less than 5 minutes to complete."
    },
    {
      number: "2",
      title: "Get Approved",
      description: "Receive instant approval decision. Our advanced system processes applications in real-time."
    },
    {
      number: "3",
      title: "Receive Funds",
      description: "Money is deposited directly into your bank account within 24 hours of approval."
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
      {/* Background pattern for better visual appeal */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            How It Works
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Getting a payday loan has never been easier. Follow these simple steps to get the cash you need.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              {/* Step number circle with enhanced styling */}
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-white drop-shadow-md">{step.number}</span>
              </div>
              
              {/* Content with better contrast */}
              <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-md">
                {step.title}
              </h3>
              <p className="text-white/95 text-lg leading-relaxed max-w-sm mx-auto">
                {step.description}
              </p>
              
              {/* Decorative line between steps */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-yellow-400/50 to-transparent transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold py-4 px-8 rounded-full text-lg hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
}
