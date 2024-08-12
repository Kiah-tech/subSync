import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Logic to handle form submission
    setMessage(`Thank you, ${name}! You've been added to the waitlist.`);
    setName('');
    setEmail('');
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Introducing SubSync: Your Ultimate Subscription tracker</h1>
        <p>Take Control of Your Subscriptions with Ease</p>
        <p>Never Miss a Renewal Again – Your Subscription Manager is Coming Soon!</p>
        <p>Tired of AutoPay Surprises? Say Goodbye with SubSync!</p>
      </header>

      <section className="cta">
        <h2>Join the SubSync Waitlist Today!</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Join Waitlist</button>
        </form>
        {message && <p>{message}</p>}
      </section>

      <div className='intro'>
        <h2>Why is SubSync?</h2>
        <p>In today's digital age, managing multiple subscriptions and expenses has become a complex task. From entertainment platforms like Netflix and Spotify to essential tools like Adobe Creative Cloud, keeping track of them all is challenging. SubSync simplifies this for you by providing a comprehensive solution that not only manages your subscriptions but also tracks your financial expenses.</p>
        <h2>Personal Story</h2>
        <p>A few months ago, my bank account was unexpectedly debited ₹1500 for an Amazon Prime auto-payment, disrupting my budget. This experience highlighted the need for better financial oversight, leading me to develop [App Name]. Our solution offers enhanced clarity and control over finances, preventing such surprises and helping users manage their expenses effectively.</p>
      </div>

      <section className="features">
        <h2>Key Features</h2>
        <ul>
          <li>All-in-One Dashboard: Monitor all your subscriptions at a glance.</li>
          <li>AI-Powered Insights: Receive personalized recommendations and alerts.</li>
          <li>Smart Alerts: Stay informed about renewals and price changes.</li>
          <li>Expense Tracking: Manage your budget with ease.</li>
          <li>Secure and Private: Your data is protected with advanced security measures.</li>
        </ul>
      </section>


      <p className='privacy'>Your privacy matters to us. We promise to keep your information secure and only use it to provide you with updates about SubSync.</p>



    </div>
  );
}

export default App;
