import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const ContactItem = ({ icon, text, label }) => (
  <div className="flex items-center space-x-4">
    <div className="w-10 h-10 bg-portfolio-blue rounded-lg flex items-center justify-center text-portfolio-tech shrink-0">
      {icon}
    </div>
    <div>
      <p className="text-xs text-gray-500 uppercase font-bold">{label}</p>
      <p className="text-white">{text}</p>
    </div>
  </div>
);

const Contact = () => {
  return (
    <div className="space-y-12">
      <div className="flex items-center space-x-4">
        <h2 className="text-4xl font-bold border-b-4 border-portfolio-tech pb-2">Get In Touch</h2>
        <div className="h-px bg-gray-800 flex-1"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <p className="text-gray-400 text-lg leading-relaxed">
            I'm currently looking for new opportunities. My inbox is always open!
            Whether you have a question or just want to say hi, I'll try my best to get back to you.
          </p>

          <div className="space-y-6">
            <ContactItem icon={<FaEnvelope size={20} />} label="Email" text="leo.emperado@example.com" />
            <ContactItem icon={<FaPhoneAlt size={18} />} label="Phone" text="+63 912 345 6789" />
            <ContactItem icon={<FaMapMarkerAlt size={20} />} label="Location" text="Manila, Philippines" />
          </div>

          <div className="flex space-x-4 pt-4">
            {[
              { icon: <FaGithub size={24} />, link: '#' },
              { icon: <FaLinkedin size={24} />, link: '#' },
              { icon: <FaInstagram size={24} />, link: '#' },
              { icon: <FaFacebook size={24} />, link: '#' }
            ].map((social, i) => (
              <a key={i} href={social.link} className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-portfolio-tech hover:border-portfolio-tech transition-all">
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <form className="bg-portfolio-navy p-8 rounded-xl border border-portfolio-blue space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400 uppercase">Name</label>
              <input type="text" className="w-full bg-portfolio-blue border border-gray-800 rounded px-4 py-3 focus:border-portfolio-tech outline-none transition-all" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400 uppercase">Email</label>
              <input type="email" className="w-full bg-portfolio-blue border border-gray-800 rounded px-4 py-3 focus:border-portfolio-tech outline-none transition-all" placeholder="john@example.com" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-400 uppercase">Subject</label>
            <input type="text" className="w-full bg-portfolio-blue border border-gray-800 rounded px-4 py-3 focus:border-portfolio-tech outline-none transition-all" placeholder="Hello!" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-400 uppercase">Message</label>
            <textarea rows="4" className="w-full bg-portfolio-blue border border-gray-800 rounded px-4 py-3 focus:border-portfolio-tech outline-none transition-all resize-none" placeholder="Your message here..."></textarea>
          </div>
          <button type="submit" className="w-full py-4 bg-portfolio-tech text-black font-bold rounded hover:bg-opacity-80 transition-all">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
