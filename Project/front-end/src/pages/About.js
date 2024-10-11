import React from 'react'
import '../About.css'; 

const About = () => {

  return (

    <div >

<div className="about-header">
  <h1 className='ab'>
    About Us
    <img src="aboutusicon.png" className="logo-about" alt="About Us Icon"/>
  </h1>
</div>

<div className="OurMission">
  
    <div className="text1">
      <h2 className='ok'>Our Mission</h2>
      <p className='p'>
        At DOC, we are on a mission to simplify and enhance the way you find healthcare professionals in your area. Our goal is to empower individuals to make informed decisions about their health by providing a user-friendly platform that connects you with the right doctors. 
      </p>
      <p className='p'>In addition to helping you find the right healthcare professionals, DOC is dedicated to fostering a community of care, where support and guidance are readily available. We aim to be your trusted ally in health, offering the latest insights, health tips, and wellness resources, ensuring you have all the necessary tools to navigate your healthcare journey successfully.
      </p>
    </div>
    <div className="imagee">
      <img src="ourmission.png" alt="ourmission" />
    </div>

</div>



<div className="who-we-are">

<div className="text2">
  <h2 className='ok'>Who We Are</h2>

  <p>DOC is more than a healthcare provider directory. We're a team of dedicated professionals, including healthcare experts, technologists,
     and customer service specialists, committed to enhancing healthcare accessibility and transparency. Our platform merges innovative technology
      with deep healthcare insights, aiming to streamline the experience for patients and providers alike. At DOC, we're not just a directory; we're 
      a partner in fostering a more efficient, transparent, and patient-focused healthcare landscape.</p>
</div>

<div className="image1">
  <img src="whoweare.png" alt="Who we are" />
</div>

</div>

<h2 className="ok1" style={{textAlign: "center"}}>What Sets Us Apart</h2>

<div className="values">

<div className="box">

<img src="AIicon.png" className="small-icon" alt="AI icon" />

<strong className='AI'>Advanced AI Technology:</strong>

<p>Our AI matches you with healthcare professionals tailored to your needs by considering specialty, reviews, proximity, and more.</p>

</div>

  <div className="box">
  <img src="UserC.png" className="small-icon1" alt="UC icon" />
    <strong className='UC'>User-Centric Design:</strong>  
    <p>Our simple, seamless platform allows you to focus on your health.</p>

  </div>

</div>

<h2 className="ok2" style={{textAlign: "center"}}>Our Values</h2>

<div className="values">

  <div className="box">
  <img src="Access.png" className="small-icon2" alt="Access Icon" />
    <strong className='Ac'>Accessibility:</strong> 
    <p>We believe everyone deserves access to quality healthcare. Our platform breaks down barriers and connects you with providers.</p>

  </div>

  <div className="box">
  <img src="Trans.png" className="small-icon3" alt="Trans Icon" />
    <strong className='TS'>Transparency:</strong>
    <p>We provide comprehensive information about each doctor so you can make informed decisions.</p>
  
  </div>

  <div className="box">
  <img src="Comu.png" className="small-icon4" alt="Com Icon" />
    <strong className='CF'>Community Focus:</strong> 
    <p>DOC fosters a sense of connection and support among users.</p>

  </div>

</div>
<div className='get' style={{display: "flex"}}>

  <div>
    <h2 className='ok'>Get In Touch</h2>

    <p className='p'>
    We love hearing from our users! If you have any questions, feedback, or just want to say hello, don't hesitate to contact us! 
    Thank you for choosing DOC for your healthcare needs. We're here to make your journey to better health a smoother and more informed one.

    </p>

  </div>

  <img src="Getintouch.png" className="getimage" alt="get icon"/>

</div>

    </div>

  )

}

export default About