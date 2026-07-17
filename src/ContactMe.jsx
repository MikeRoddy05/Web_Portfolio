import { useState } from 'react';
import './css/contact-me.css';

function ContactMe({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus('Sending your message...');

    try {
      const response = await fetch('https://formsubmit.co/ajax/meroddy05@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email,
          _subject: formData.title || 'Portfolio Contact',
          message: `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        }).toString()
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setStatus('Thanks for reaching out! Your message has been sent successfully.');
      setFormData({
        name: '',
        email: '',
        title: '',
        message: ''
      });
    } catch (error) {
      console.error(error);
      setStatus('Something went wrong while sending your message. Please try again later.');
    }
  };

  return (
    <div className='contact-modal-overlay' onClick={onClose}>
      <div className='contact-modal' onClick={(e) => e.stopPropagation()}>
        <div className='contact-modal-header'>
          <h2>Contact Me</h2>
          <button type='button' className='contact-close' onClick={onClose} aria-label='Close contact form'>×</button>
        </div>

        <form className='contact-form' onSubmit={handleSubmit}>
          <label>
            Your Name
            <input type='text' name='name' className='contact-input' required value={formData.name} onChange={handleChange} />
          </label>

          <label>
            Your Email
            <input type='email' name='email' className='contact-input' required value={formData.email} onChange={handleChange} />
          </label>

          <label>
            Title
            <input type='text' name='title' className='contact-input' required value={formData.title} onChange={handleChange} />
          </label>

          <label>
            Message
            <textarea name='message' className='contact-textarea' required value={formData.message} onChange={handleChange} />
          </label>

          <button type='submit' className='contact-submit'>Send Message</button>
        </form>

        {status && <p className='contact-status'>{status}</p>}
      </div>
    </div>
  );
}

export default ContactMe;