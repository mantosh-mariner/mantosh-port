import React from 'react'

export const Testimonials = () => {
  return (
    <section className="testimonial section">
    <h2 className="section__title">Testimonials</h2>
    <span className="section__subtitle">What people say</span>

    <div className="testimonial__container container">
      <div className="testimonial__content">
        <p className="testimonial__text">
          "The services provided were outstanding. I was impressed by the level of professionalism."
        </p>
        <h3 className="testimonial__author">John Doe</h3>
        <span className="testimonial__role">Software Engineer</span>
      </div>

      <div className="testimonial__content">
        <p className="testimonial__text">
          "Excellent work! Highly recommended for anyone looking for quality and reliability."
        </p>
        <h3 className="testimonial__author">Jane Smith</h3>
        <span className="testimonial__role">Product Manager</span>
      </div>

      <div className="testimonial__content">
        <p className="testimonial__text">
          "A truly outstanding experience. Delivered beyond expectations!"
        </p>
        <h3 className="testimonial__author">Mark Wilson</h3>
        <span className="testimonial__role">CEO, Tech Solutions</span>
      </div>
    </div>
  </section>
  )
}
