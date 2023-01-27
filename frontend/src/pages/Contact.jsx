import React, { useState } from 'react';
import Nav from '../components/Nav';

import { AiFillPhone } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillMail } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

import albi from '../assets/albi.jpg'
import cathedrale from '../assets/cathedrale.jpg'
import jardin from '../assets/jardin.jpg'


function Contact() {
    return(
        <>
            <Nav />
            <main className="contact">
                <div className="contact__msg container d-flex align-items-center">
                    <aside className="contact__dot">
                        <img src={albi} alt="photo du Tarn, au centre de la ville d'Albi" className="contact__dot--img" />
                        <div className="contact__dot--column d-flex align-items-center justify-content-around">
                            <img src={cathedrale} alt="photo de la cathédrale sainte cécile, au centre de la ville d'Albi" className="contact__dot--img2" />
                            <img src={jardin} alt="photo des jardins du palais de la Berbie, au centre de la ville d'Albi" className="contact__dot--img3" />
                        </div>
                    </aside>
                    <aside className="contact__info">
                        <h3 className="contact__info--title">Contact</h3>
                        <ul>
                            <li>
                                <AiFillPhone className="contact__icon"/> 07 69 34 64 24
                            </li>
                            <li>
                                <AiFillLinkedin className="contact__icon"/> <a href="https://www.linkedin.com/in/mathieu-baugard-b2b377258/">Mon profil LinkedIn</a>
                            </li>
                            <li>
                                < AiFillMail className="contact__icon"/> mathieu.baugard.dev@gmail.com
                            </li>
                            <li>
                                < AiFillGithub className="contact__icon"/> <a href="https://github.com/cofefefe?tab=repositories">Mon profil Github</a>
                            </li>
                        </ul>
                    </aside>
                </div>
            </main>
        </>
    )
    
}

export default Contact;