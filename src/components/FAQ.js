import React, { useState, useRef, useEffect } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: 'How do I join a club through Mosaic?',
      answer: 'To join a club, log in to your Mosaic account and browse the available clubs. Select the club you’re interested in, and click the "Join" button. You may need to fill out a form or attend a meeting, depending on the club’s requirements.',
      isOpen: false,
    },
    {
      question: 'How can I create a new club?',
      answer: 'To create a new club, go to the "Create Club" section in your dashboard. Fill out the necessary details including the club’s name, description, and any other required information. Once submitted, your club will be reviewed and approved by our team before going live.',
      isOpen: false,
    },
    {
      question: 'Can I manage multiple clubs from one account?',
      answer: 'Yes, you can manage multiple clubs from a single account. Simply navigate to your dashboard where you can switch between clubs and manage their activities, events, and member information.',
      isOpen: false,
    },
    {
      question: 'What features are available for club leaders?',
      answer: 'Club leaders have access to various features including event management, member engagement analytics, project collaboration tools, and customizable club pages. These tools help in efficiently running your club and engaging with members effectively.',
      isOpen: false,
    },
    {
      question: 'Are there any options for virtual events?',
      answer: 'Yes, Mosaic supports virtual events. You can schedule and host virtual meetings or live streams directly through the platform. This feature allows you to reach more members and facilitate participation even if they cannot attend in person.',
      isOpen: false,
    },
    // Add more FAQs as needed
  ]);

  const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.isOpen = !faq.isOpen;
        } else {
          faq.isOpen = false;
        }
        return faq;
      })
    );
  };

  const answerRefs = useRef([]);

  useEffect(() => {
    faqs.forEach((faq, index) => {
      if (faq.isOpen) {
        answerRefs.current[index].style.height = `${answerRefs.current[index].scrollHeight}px`;
      } else {
        answerRefs.current[index].style.height = '0px';
      }
    });
  }, [faqs]);

  return (
    <div className="faq-wrapper">
      <div className="faq-section">
        <h2>Common Queries</h2>
        {faqs.map((faq, index) => (
          <div key={index} className={`faq ${faq.isOpen ? 'open' : ''}`}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span className="icon">{faq.isOpen ? '-' : '+'}</span>
              {faq.question}
            </div>
            <div className="faq-answer" ref={el => (answerRefs.current[index] = el)}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
