import React from 'react'
import Mouse from '../components/Mouse'
import Navigation from '../components/Navigation'
import Logo from "../components/Logo";
import ContactForm from '../components/ContactForm';
import SocialMedia from "../components/SocialMedia";
import Buttons from "../components/Buttons";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { motion } from 'framer-motion'

const Contact = () => {
  //framer-motion
  const pageTrans = {
    in : {
      opacity: 1,
      x: 0
    },
    out: {
      opacity: 0,
      x: 200
    }
  }
  return (
    <main>
      <Mouse />
      <motion.div className="contact"
         initial="out" exit="out" 
         animate="in" variants={pageTrans}
         transition={{duration: 0.5}}
      >
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>Address</h4>
              <p>Pittsburgh, PA 15222</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>Phone</h4>
              <CopyToClipboard text="4124121234" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Phone number copied!")}
                >
                  412-412-1234
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>Email</h4>
              <CopyToClipboard text="aaotmane@gmail.com" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Email copied!")}
                >
                  aaotmane@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialMedia />
          <div className="credits">
            <p>Otmane Aatik</p>
          </div>
        </div>
        <Buttons left={"/project4"} />
      </motion.div>
    </main>
  );
}

export default Contact