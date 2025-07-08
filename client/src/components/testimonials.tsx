export default function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      text: "PayDay Pro saved me when I had an unexpected car repair. The application was so easy, and I had the money in my account the next day. Highly recommend!",
      author: "Sarah Martinez",
      role: "Teacher",
      initials: "SM",
      bgColor: "bg-payday-primary"
    },
    {
      rating: 5,
      text: "I was worried about my credit score, but PayDay Pro didn't even check it. The process was transparent, and there were no hidden fees. Excellent service!",
      author: "Michael Johnson",
      role: "Construction Worker",
      initials: "MJ",
      bgColor: "bg-payday-secondary"
    },
    {
      rating: 5,
      text: "The customer service team was incredibly helpful when I had questions about my loan. They walked me through everything step by step. Great company!",
      author: "Emily Davis",
      role: "Retail Manager",
      initials: "ED",
      bgColor: "bg-payday-accent"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-payday-neutral max-w-2xl mx-auto">
            Don't just take our word for it. Here's what thousands of satisfied customers have to say about PayDay Pro.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-payday-accent">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <span className="ml-2 text-sm text-payday-neutral">5.0</span>
              </div>
              <p className="text-payday-neutral mb-6">{testimonial.text}</p>
              <div className="flex items-center">
                <div className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center`}>
                  <span className="text-white font-semibold">{testimonial.initials}</span>
                </div>
                <div className="ml-4">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-payday-neutral">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
