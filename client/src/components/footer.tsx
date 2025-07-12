export default function Footer() {
  const services = [
    "Payday Loans",
    "Cash Advances",
    "Personal Loans",
    "Emergency Loans"
  ];

  const company = [
    "About Us",
    "How It Works",
    "FAQ",
    "Contact"
  ];

  const legal = [
    "Privacy Policy",
    "Terms of Service",
     ];



  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <i className="fas fa-dollar-sign text-2xl text-payday-primary mr-2"></i>
              <span className="text-xl font-bold">PayDay Pro</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for fast, reliable payday loans and cash advances.
            </p>
            
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-payday-primary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-payday-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {legal.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-payday-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 PayDay Pro. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
}
