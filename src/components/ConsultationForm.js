import React, { useState } from 'react';
import './ConsultationForm.css';
import axios from 'axios';

const ConsultationForm = () => {
  const [formVisible, setFormVisible] = useState(true);
  const [thankYouVisible, setThankYouVisible] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const allFieldsFilled = Array.from(form.elements)
      .filter(element => element.tagName === 'INPUT')
      .every(input => input.value.trim() !== '');

    if (!allFieldsFilled) {
      alert('Please fill all fields before submitting.');
      return;
    }

    const formData = {
      name: form.name.value,
      position: form.position.value,
      company: form.company.value,
      email: form.email.value,
      phone: form.phone.value
    };

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
          <h1>Please fill the form and our experts will contact you as soon as possible.</h1>
        </div>
        <img src="/images/minimal2.png" alt="Minimal Future" />
      </div>
      <div className="form-wrapper">
        {formVisible ? (
          <form onSubmit={handleFormSubmit} className={formVisible ? '' : 'hidden'}>
            <h2>Consultation Form</h2>
            <div className="form-group">
              <label htmlFor="name">Full Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="position">Position:</label>
              <input type="text" id="position" name="position" required />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company:</label>
              <input type="text" id="company" name="company" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input type="tel" id="phone" name="phone" required />
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