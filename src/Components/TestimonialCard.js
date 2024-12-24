import React from 'react';
import './TestimonialCard.css';
import Pearson from "../images/Pearson.jpg";
import ForwardBackward from "../images/forward_Backward.png";

const TestimonialCard = () => {
  const testimonials = [
    {
      id: 1,
      text: "It was a tough time when they started operations, considering restrictions and new entries, new customers, and high expectations of deliveries. It was the big challenge to start. But, the team of AAJ enterprises has been focused on their duties since the 1st day.",
      name: "Jaspreet Singh",
      position: "Senior Manager",
      companyLogo: "https://www.medica.de/vis-content/event-medcom2024.MEDICA/exh-medcom2024.3018597/MEDICA-2024-Tynor-Orthotics-Pvt.-Ltd.-Image-medcom2024.3018597-XHxrTlAJTh2aSS29BZA2NQ-image.png", // Replace with actual logo URL
    },
    {
      id: 2,
      text: "AAJ and their employees were very attentive to our needs even during times of minimal notice. For protection of our sales during the lockdown, we set up parallel shipping operations with AAJ and agapeduco.log. In future, we won’t hesitate to avail services of AAJ if required.",
      name: "Glenn Ciprani",
      position: "VP Operations",
      companyLogo: Pearson, // Replace with actual logo URL
    },
    {
      id: 3,
      text: "“We have processed more than 1 million units from AAJ warehouse in Feb 2022, we just started operations from AAJ in Nov 2021 and this was 4th month of our operations. What makes it even more satisfying is the budgeted outward units for Feb 2022 was close to 800,000 and our TAT achievement was 97.34% against budgeted 95 %, this too in a calendar month with 3 less working days.”",
      name: "Mentors  Team",
      position: "Mentors Eduserv Education Services",
      companyLogo: "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/a70f602ab75ca0ab3f7a4f517a63fa7a", // Replace with actual logo URL
    },
  ];

  return (
    <>
    <div className="testimonials-wrapper">
    <div className = "Haleema" style = {{display : 'flex'}}>
    <h2 className="testimonials-heading">Client Testimonials</h2>
    <img className="forward" style = {{marginLeft : 800}} src = {ForwardBackward} alt = "Error Occured"/>
    </div>
    
      <div className="testimonials-carousel">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="testimonial-author">
              <div className="author-info">
                <h4 className="author-name">{testimonial.name}</h4>
                <p className="author-position">{testimonial.position}</p>
              </div>
              <img
                src={testimonial.companyLogo}
                alt={"My name is khan"}
                className="company-logo"
              />
            </div>
          </div>
        ))}
      </div>
    </div>

    </>
    
  );
};

export default TestimonialCard;