import React, { useState } from 'react';
import './ConsultationForm.css';
import axios from 'axios';

const ConsultationForm = () => {
  const [formVisible, setFormVisible] = useState(true);
  const [thankYouVisible, setThankYouVisible] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    // Validate form fields
    const errors = {};
    const formData = {};
    const requiredFields = ['name', 'position', 'company', 'email', 'phone'];

    requiredFields.forEach(field => {
      if (!form[field].value.trim()) {
        errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email.value)) {
      errors.email = 'Please enter a valid email address.';
    }

    const phonePattern = /^\+?[0-9]{7,15}$/;
    if (!phonePattern.test(form.phone.value)) {
      errors.phone = 'Please enter a valid phone number.';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // If all validations pass, proceed to submit
    formData.name = form.name.value;
    formData.position = form.position.value;
    formData.company = form.company.value;
    formData.email = form.email.value;
    formData.phone = form.phone.value;

    const botToken = process.env.REACT_APP_BOT_TOKEN;
    const chatId = process.env.REACT_APP_CHAT_ID;

    try {
      const response = await axios.post(`https://api.telegram.org/${botToken}/sendMessage`, {
        chat_id: chatId,
        text: `New consultation request:\nName: ${formData.name}\nPosition: ${formData.position}\nCompany: ${formData.company}\nEmail: ${formData.email}\nPhone: ${formData.phone}`
      });

      if (response.status === 200) {
        setFormVisible(false);
        setThankYouVisible(true);
      } else {
        console.error('Response status:', response.status);
        alert('An error occurred while submitting your request. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting consultation request:', error);
      alert('An error occurred while submitting your request. Please try again later.');
    }
  };

  return (
    <div className="form-container" id="consultation">
      <div className="info-block">
        <div className="info-text">
          <h1>Fill the form and our experts will contact you as soon as possible.</h1>
        </div>
        <img src="./images/minimal2.png" alt="Minimal Future" className="scaled-image" />
      </div>
      <div className="form-wrapper">
        {formVisible ? (
          <form onSubmit={handleFormSubmit} className={formVisible ? '' : 'hidden'}>
            <h2>Consultation form</h2>
            <div className="form-group">
              <label htmlFor="name">Full Name:</label>
              <input type="text" id="name" name="name" required />
              {formErrors.name && <span className="error-message">{formErrors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="position">Position:</label>
              <input type="text" id="position" name="position" required />
              {formErrors.position && <span className="error-message">{formErrors.position}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="company">Company:</label>
              <input type="text" id="company" name="company" required />
              {formErrors.company && <span className="error-message">{formErrors.company}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
              {formErrors.email && <span className="error-message">{formErrors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input type="tel" id="phone" name="phone" required />
              {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
            </div>
            <div className="consent-text">
              <p>By submitting the form, you agree to the processing of personal data.</p>
            </div>
            <button type="submit">Submit</button>
          </form>
        ) : null}
        {thankYouVisible ? (
          <div className="thank-you-slide visible">
            <h2>Thank You!</h2>
            <p>Our experts will contact you soon.</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ConsultationForm;