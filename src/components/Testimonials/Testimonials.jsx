import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Godknows Aresho",
      role: "Software Developer",
      quote:
        "This tool has completely transformed how we showcase our products. The background removal is so accurate and fast—it’s like having a professional editor at my fingertips!",
    },
    {
      name: "Farirai Masocha",
      role: "Software Developer",
      quote:
        "I’ve saved so much time using this system. It delivers studio-quality background removal in seconds. A must-have for any professional photographer!",
    },
    {
      name: "Stalone Chabvuta",
      role: "Networking Specialist",
      quote:
        "Creating ad campaigns has never been easier. The clean and precise background removal makes our visuals pop, which has boosted engagement rates significantly.",
    },
  ];

  return (
    <div className="testimonials-container">
        <div className="section__header center mt-7">
            <h2 className="primary__title text-center text-2xl md:text-3xl lg:text-4xl mt-0 font-semibold">
            What Clients Say.
            </h2>
            <p style={{ color: '#b8b8b8' }}>
                Customer feedback is vital in helping us to
                get it right.
            </p>
        </div>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <p className="quote">“{testimonial.quote}”</p>
            <h4 className="name">{testimonial.name}</h4>
            <p className="role">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
