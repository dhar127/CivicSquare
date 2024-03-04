import React, { useState } from 'react';
import './Contacts.css';

function Contacts() {
  const [listContacts] = useState([
    {
      title: 'whatsapp.png',
      value: 'https://wa.me/7305841274?text=Hello Dharani!!' // Add WhatsApp contact number
    },
    {
      title: 'gmail.png',
      value: 'dharaniponnivalavan@gmail.com'
    },
    {
      title: 'instagram.png',
      value: 'https://www.instagram.com/d_p12.7/'
    },
    {
      title: 'linkedin.png',
      value: 'https://www.linkedin.com/in/dharani-p-57327b259/' // Add your LinkedIn profile link
    },
    {
      title: 'github.png',
      value: 'https://github.com/dhar127' // Add your GitHub profile link
    }
  ]);

  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can perform any action with the email address, such as sending it to a backend server or storing it locally.
    console.log('Email submitted:', email);
    // Clear the input field after submission
    setEmail('');
  };

  return (
    <section className='contacts'>
      <div className="title">
        Contact me 
      </div>
      <div className="des">
        {/* Description or additional content can go here */}
      </div>
      <div className="list">
        {listContacts.map((value, key) => (
          <div className='item' key={key}>
            <a href={value.value}><img src={value.title} width="50px" height="50px" alt={value.title} /></a>
            {value.title === 'Phone Number' || value.title === 'WhatsApp' || value.title === 'Instagram' ? (
              <div>{value.value}</div>
            ) : (null)}
          </div>
        ))}
      
        {/* Add the email registration form */}
        <form onSubmit={handleSubmit}>
          <input type="email" value={email} onChange={handleEmailChange} placeholder="Enter your email" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contacts;
