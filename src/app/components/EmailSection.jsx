'use client';
import React, { useState } from "react";
import emailjs from '@emailjs/browser'; // Оновлена бібліотека

const EmailSection = () => {
  const [toSend, setToSend] = useState({ from_email: '', from_subject: '', from_message: '' });
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false); // Додаємо лоадер

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EmailJS_Service,
        process.env.NEXT_PUBLIC_EmailJS_Template,
        {
          from_email: toSend.from_email,
          from_subject: toSend.from_subject,
          from_message: toSend.from_message,
        },
        process.env.NEXT_PUBLIC_EmailJS_PublicKey
      );

      setIsSent(true);
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Failed to send email. Check your EmailJS dashboard or console.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    // ... твій JSX ...
    <button
      type="submit"
      disabled={loading} // Блокуємо кнопку під час відправки
      className="blueGradientButton hover:bg-primary-600 text-white font-medium py-2 px-5 rounded-lg w-full disabled:opacity-50"
    >
      {loading ? "Sending..." : "Send Message"}
    </button>
  );
};