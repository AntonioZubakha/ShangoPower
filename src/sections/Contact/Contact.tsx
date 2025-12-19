import React, { useState, useEffect, useRef } from 'react';
import { FormData } from '../../types';
import Button from '../../components/Button/Button';
import './Contact.css';
import contactImage from '../../assets/images/minimal2.png';
import { observeElements } from '../../utils/scrollAnimations';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    position: '',
    company: '',
    email: '',
    phone: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[\d\s+()-]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === 'checkbox' ? (e.target as HTMLInputElement).checked : false;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.position?.trim()) {
      newErrors.position = 'Position is required';
    }

    if (!formData.company?.trim()) {
      newErrors.company = 'Company is required';
    }

    if (!formData.consent) {
      newErrors.consent = true;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    if (sectionRef.current) {
      cleanup = observeElements('.contact-section .section-animate', {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px',
      });
    }

    return () => {
      cleanup?.();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Reset form
      setFormData({
        name: '',
        position: '',
        company: '',
        email: '',
        phone: '',
        consent: false,
      });

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="contact-section">
      <div className="contact-container">
        <div className="contact-info section-animate">
          <div className="info-content">
            <span className="info-badge">Dedicated energy desk</span>
            <h1>Fill the form and our experts will contact you as soon as possible.</h1>
            <p className="info-lead">
              We triage your request, prepare the right specialists, and outline the
              next steps before the first call.
            </p>
            <ul className="info-list">
              <li>Tailored roadmap with budget and timeline ranges</li>
              <li>Verified suppliers, permitting guidance, and risk flags</li>
              <li>ROI and payback checkpoints to keep decisions clear</li>
            </ul>
            <div className="info-meta">
              <span className="meta-dot" />
              <span>First response within 1 business day</span>
            </div>
            <div className="contact-visual">
              <img
                src={contactImage}
                alt="Minimal Future"
                className="contact-image"
              />
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper section-animate">
          {isSubmitted ? (
            <div className="thank-you-message">
              <h2>Thank You!</h2>
              <p>Your message has been sent successfully.</p>
              <p>We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <h2 className="form-title">Consultation form</h2>
              <div className="form-group">
                <div className="input-wrapper">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`floating-input ${errors.name ? 'error' : ''} ${formData.name ? 'has-value' : ''}`}
                    placeholder=" "
                  />
                  <label htmlFor="name" className="floating-label">
                    Full Name <span className="required">*</span>
                  </label>
                </div>
                {errors.name && (
                  <span className="error-message">{errors.name}</span>
                )}
              </div>

              <div className="form-group">
                <div className="input-wrapper">
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position || ''}
                    onChange={handleChange}
                    className={`floating-input ${errors.position ? 'error' : ''} ${formData.position ? 'has-value' : ''}`}
                    placeholder=" "
                  />
                  <label htmlFor="position" className="floating-label">
                    Position <span className="required">*</span>
                  </label>
                </div>
                {errors.position && (
                  <span className="error-message">{errors.position}</span>
                )}
              </div>

              <div className="form-group">
                <div className="input-wrapper">
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company || ''}
                    onChange={handleChange}
                    className={`floating-input ${errors.company ? 'error' : ''} ${formData.company ? 'has-value' : ''}`}
                    placeholder=" "
                  />
                  <label htmlFor="company" className="floating-label">
                    Company <span className="required">*</span>
                  </label>
                </div>
                {errors.company && (
                  <span className="error-message">{errors.company}</span>
                )}
              </div>

              <div className="form-group">
                <div className="input-wrapper">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`floating-input ${errors.email ? 'error' : ''} ${formData.email ? 'has-value' : ''}`}
                    placeholder=" "
                  />
                  <label htmlFor="email" className="floating-label">
                    Email <span className="required">*</span>
                  </label>
                </div>
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>

              <div className="form-group">
                <div className="input-wrapper">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`floating-input ${errors.phone ? 'error' : ''} ${formData.phone ? 'has-value' : ''}`}
                    placeholder=" "
                  />
                  <label htmlFor="phone" className="floating-label">
                    Phone <span className="required">*</span>
                  </label>
                </div>
                {errors.phone && (
                  <span className="error-message">{errors.phone}</span>
                )}
              </div>

              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className={errors.consent ? 'error' : ''}
                  />
                  <span>
                    By submitting the form, you agree to the processing of personal data.{' '}
                    <span className="required">*</span>
                  </span>
                </label>
                {errors.consent && (
                  <span className="error-message">
                    You must agree to continue
                  </span>
                )}
              </div>

              <div className="form-footer">
                <div className="form-hint">
                  Secure & confidential — our team replies within 1 business day.
                </div>
                <Button
                  type="submit"
                  size="large"
                  className="submit-button btn-on-light"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;

