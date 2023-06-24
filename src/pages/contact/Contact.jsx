import React from 'react';
//import { useRef } from 'react';
//import emailjs from '@emailjs/browser';


import {
    FaEnvelopeOpen,
    FaPhoneSquareAlt,
     FaInstagram,
     FaLinkedin,
     FaGithub,
     FaWhatsapp
} from 'react-icons/fa';

import {FiSend} from 'react-icons/fi';

import "./contact.css"


const Contact = () => {
    // const form = useRef();

    // const sendEmail = (e) => {
    //     e.preventDefault();
    
    //     emailjs.sendForm('service_771tv4t', 'template_jqeklfp', form.current, '8Ngx9zS_97QjI2ILR')
    //       .then((result) => {
    //           console.log(result.text);
    //       }, (error) => {
    //           console.log(error.text);
    //       }
    //       );
    //       e.target.reset()
    //   };

    return (
        <section className='contact section'>
            <h2 className='section__title'>
                Get In <span>Touch</span>
            </h2>


            <div className='contact__container container grid'>
                <div className='contact__data'>
                    <h3 className='contact__title'>Don't be Shy</h3>

                    <p className='contact__description'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>

                    <div className='contact__info'>
                        <div className='info__item'>
                            <FaEnvelopeOpen className='info__icon' />

                            <div>
                                <span className='info__title'>Mail me</span>
                                <h4 className='info__desc'>227ggupta@gmail.com</h4>
                            </div>
                        </div>

                        <div className='info__item'>
                            <FaPhoneSquareAlt className='info__icon' />

                            <div>
                                <span className='info__title'>Call me</span>
                                <h4 className='info__desc'>7891478561</h4>
                            </div>
                        </div>
                    </div>

                    <div className='contact__socials'>

                    <a href='https://instagram.com/ggaurav_22?igshid=MzNlNGNkZWQ4Mg==' target="_blank" rel="noopener noreferrer"
                         className='contact__social-link'>
                            <FaInstagram />
                        </a>

                        <a href='https://api.whatsapp.com/send?phone=7891478561'  target="_blank" rel="noopener noreferrer" 
                         className='contact__social-link'>
                            <FaWhatsapp />
                        </a>

                        <a href='https://www.linkedin.com/in/gaurav-gupta-4789a6202' target="_blank" rel="noopener noreferrer"
                        className='contact__social-link'>
                            <FaLinkedin />
                        </a>

                        <a href='https://github.com/2207ggaurav' target="_blank" rel="noopener noreferrer"
                        className='contact__social-link'>
                            <FaGithub />
                        </a>

                        
                    </div>
                </div>


                {/* <form ref={form} onSubmit={sendEmail} */}
                <form 
                className='contact__form'>
                  <div className='form__input-group'>
                    <div className='form__input-div'>
                        <input
                        type='text'
                        placeholder='Your Name'
                        name='user_name' 
                        className='form__control'
                        />
                    </div>

                    <div className='form__input-div'>
                        <input
                        type='email'
                        placeholder='Your Email'
                        name='user_email'
                        className='form__control'
                        />
                    </div>

                    <div className='form__input-div'>
                        <input
                        type='text'
                        placeholder='Your Subject'
                        name='subject'
                        className='form__control'
                        />
                    </div>

                    

                   
                  </div>

                  <div className='form__input-div'>
                       <textarea name='message'
                       placeholder='Your Message'
                       className='form__control textarea'>
                       </textarea>
                    </div>

                    <button  type='submit' className='button'>
                        Send Message
                        <span className='button__icon contact__button-icon'>
                            <FiSend />
                        </span>
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;