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
    <section id="about" className="py-20 bg-gradient-to-r from-payday-primary to-payday-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Getting a payday loan has never been easier. Follow these simple steps to get the cash you need.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-payday-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
              <p className="text-green-100">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
