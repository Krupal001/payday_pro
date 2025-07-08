export default function Features() {
  const features = [
    {
      icon: "fas fa-bolt",
      title: "Lightning Fast",
      description: "Get approved in minutes, not hours. Our streamlined process ensures you get the cash you need when you need it.",
      bgColor: "bg-payday-primary"
    },
    {
      icon: "fas fa-lock",
      title: "Secure & Safe",
      description: "Bank-level security protects your personal information. All transactions are encrypted and fully secure.",
      bgColor: "bg-payday-secondary"
    },
    {
      icon: "fas fa-percentage",
      title: "Competitive Rates",
      description: "Fair and transparent pricing with no hidden fees. Know exactly what you'll pay before you commit.",
      bgColor: "bg-payday-accent"
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Mobile Friendly",
      description: "Apply from anywhere using your smartphone or tablet. Our mobile-optimized platform works on any device.",
      bgColor: "bg-green-500"
    },
    {
      icon: "fas fa-headset",
      title: "24/7 Support",
      description: "Our customer support team is available around the clock to help you with any questions or concerns.",
      bgColor: "bg-purple-500"
    },
    {
      icon: "fas fa-user-check",
      title: "Bad Credit OK",
      description: "Your credit score won't stop you from getting the help you need. We work with all credit types.",
      bgColor: "bg-red-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose PayDay Pro?
          </h2>
          <p className="text-xl text-payday-neutral max-w-2xl mx-auto">
            We make getting a payday loan simple, fast, and secure. Join thousands of satisfied customers who trust us with their financial needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mb-6`}>
                <i className={`${feature.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-payday-neutral">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
