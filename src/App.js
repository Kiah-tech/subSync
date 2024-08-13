import React, { useState } from 'react';
import './App.css';
import { Circle } from 'react-awesome-shapes/dist/shapes/circle';
import { Donut } from 'react-awesome-shapes/dist/shapes/donut';
import { Diamond } from 'react-awesome-shapes/dist/shapes/diamond';
import { CircleGrid } from 'react-awesome-shapes/dist/shapes/circlegrid';
import { SquareDonut } from 'react-awesome-shapes/dist/shapes/squareDonut';
import { TextField } from '@mui/material';

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
      <div className="shapes-container">
        <Circle
          color="linear-gradient(135deg, #a5b4fc, #6366f1)"
          size={['150px', '150px', '180px', '300px']}
          zIndex={-1} 
          position="absolute"
          top="-25px"
          left="-20px"
        />
        <Diamond
          color="linear-gradient(135deg, #93c5fd, #3b82f6)"
          size="50px"
          zIndex={-1} 
          right="55px"
        />
        <CircleGrid
          color="#10b981"
          size="110px"
          zIndex={-1} 
          left="100px"
          bottom="160px"
        />
        <Circle
          color="linear-gradient(135deg, #a5b4fc, #6366f1)"
          size={['200px', '200px', '22px', '500px']}
          zIndex={-1} 
          right="-150px"
          bottom="0"
        />

        <SquareDonut
            size="170px"
            zIndex={2}
            color="#ef4444"
            bottom="-100px"
            left="10px"
        />
        <Circle
          color="#ff9a8a"
          size={['200px', '200px', '22px', '50px']}
          zIndex={2}
        />
        <Donut
          color="#f43f5e"
          size="150px"
          width={['40px', '40px', '60px', '60px']}
          zIndex={-1} 
          right="100px"
          top="110px"
        />
      </div>

      <header className="header">
        <h1>Introducing SubSync: Your Ultimate Subscription Tracker</h1>
        <p>Take Control of Your Subscriptions with Ease</p>
        <p>Never Miss a Renewal Again – Your Subscription Manager is Coming Soon!</p>
        <p>Tired of AutoPay Surprises? Say Goodbye with SubSync!</p>
      </header>

      <section className="cta">
        <h2>Join the SubSync Waitlist Today!</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            id="name"
            label="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            id="email"
            label="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Join Waitlist</button>
        </form>
        {message && <p>{message}</p>}
      </section>

      <div className="intro">
        <h2>Why SubSync?</h2>
        <div className="intro-box">
          <p>In today's digital age, managing multiple subscriptions and expenses has become a complex task. From entertainment platforms like Netflix and Spotify to essential tools like Adobe Creative Cloud, keeping track of them all is challenging. SubSync simplifies this for you by providing a comprehensive solution that not only manages your subscriptions but also tracks your financial expenses.</p>
        </div>
        <h2>Personal Story</h2>
        <div className="intro-box">
          <p>A few months ago, my bank account was unexpectedly debited ₹1500 for an Amazon Prime auto-payment, disrupting my budget. This experience highlighted the need for better financial oversight, leading me to develop SubSync. Our solution offers enhanced clarity and control over finances, preventing such surprises and helping users manage their expenses effectively.</p>
        </div>
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
