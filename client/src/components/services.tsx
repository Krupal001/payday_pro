export default function Services() {
  const paydayFeatures = [
    "$100 - $1,000 loan amounts",
    "Same-day approval and funding",
    "No credit check required",
    "Flexible repayment terms"
  ];

  const cashAdvanceFeatures = [
    "Instant online application",
    "No collateral required",
    "Direct deposit available",
    "Simple repayment process"
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Financial Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of financial solutions designed to meet your immediate cash needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
              alt="Money management and budgeting" 
              className="rounded-2xl shadow-lg w-full h-auto" 
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Payday Loans</h3>
            <p className="text-gray-600 mb-6">
              Quick cash advances to help bridge the gap between paychecks. Get up to $1,000 deposited directly into your account within 24 hours.
            </p>
            <ul className="space-y-3">
              {paydayFeatures.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-6">Cash Advances</h3>
            <p className="text-gray-600 mb-6">
              Emergency cash when you need it most. Our cash advance service provides immediate financial relief for unexpected expenses.
            </p>
            <ul className="space-y-3">
              {cashAdvanceFeatures.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <i className="fas fa-check-circle text-blue-500 mr-3"></i>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
              alt="Emergency financial assistance and cash solutions" 
              className="rounded-2xl shadow-lg w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
