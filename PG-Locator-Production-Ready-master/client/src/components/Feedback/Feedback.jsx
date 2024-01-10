import React from 'react';

const Feedback = () => {
  const containerStyle = {
    backgroundColor: '#f2f2f2',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const topStyle = {
    textAlign: 'center',
    marginBottom: '2rem',
  };

  const testimonialStyle = {
    display: 'flex',
    flexDirection: 'row',
  };

  const testimonialBoxStyle = {
    backgroundColor: '#fff',
    padding: '1.5rem',
    borderRadius: '0.375rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    margin: '0.5rem',
    textAlign: 'center',
  };

  const quoteStyle = {
    fontSize: '3rem',
    color: '#4299e1',
    marginBottom: '1rem',
  };

  const contentStyle = {
    color: '#4a5568',
    fontSize: '1.125rem',
    marginBottom: '1rem',
  };

  const authorStyle = {
    color: '#718096',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <div style={{ margin: 'auto', padding: '2rem' }}>
        <div style={topStyle}>
          <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#4299e1' }}>
            WHAT OUR CUSTOMERS SAY ABOUT US
          </h1>
        </div>
        <div style={testimonialStyle}>
          <div style={testimonialBoxStyle}>
            <h1 style={quoteStyle}>"</h1>
            <p style={contentStyle}>
              The property photos and descriptions on the website are realistic and accurate, giving
              me a true sense of each home before even scheduling a visit. It saved me time by
              ensuring I only visited properties that matched my expectations.
            </p>
            <p style={authorStyle}>~Mr. Anubhav Roy</p>
          </div>
          <div style={testimonialBoxStyle}>
            <h1 style={quoteStyle}>"</h1>
            <p style={contentStyle}>
              I had an excellent experience using this PG locator website. The platform boasts an
              extensive range of property listings, making it easy to find the perfect home that
              suits my needs and preferences.
            </p>
            <p style={authorStyle}>~Mr. Jatin Patil</p>
          </div>
          <div style={testimonialBoxStyle}>
            <h1 style={quoteStyle}>"</h1>
            <p style={contentStyle}>
              What sets this PG locator website apart is its transparency. Rental terms, fees, and any
              additional costs are clearly presented, providing a level of trust and transparency that
              is crucial in the rental process.
            </p>
            <p style={authorStyle}>~Ms. Tista Sen</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
