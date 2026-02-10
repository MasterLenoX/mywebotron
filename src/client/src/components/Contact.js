import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const ContactItem = ({ icon, text, label }) => (
  <div className="flex items-center space-x-6 group">
    <div className="w-12 h-12 glass-morphism border border-gaming-neon/20 rounded-none flex items-center justify-center text-gaming-neon shrink-0 group-hover:border-gaming-neon transition-all neon-border">
      {icon}
    </div>
    <div>
      <p className="text-[10px] text-gaming-neon uppercase font-bold tracking-[0.2em] font-tech opacity-60">{label}</p>
      <p className="text-white font-tech uppercase tracking-wide text-sm">{text}</p>
    </div>
  </div>
);

const Contact = () => {
  return (
    <div className="space-y-16">
      <div className="flex items-center space-x-6">
        <div className="w-2 h-10 bg-gaming-neon"></div>
        <h2 className="text-5xl font-bold uppercase tracking-tighter text-white font-tech">Signal <span className="text-gaming-neon font-light">// Channel</span></h2>
        <div className="h-px bg-gaming-neon/20 flex-1"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-10">
          <p className="text-gray-400 text-lg leading-relaxed font-light border-l-2 border-gaming-neon/20 pl-8">
            Established secure communication channel for professional inquiries.
            Initiating contact will result in high-priority processing of your request.
          </p>

          <div className="space-y-8">
            <ContactItem icon={<FaEnvelope size={18} />} label="Data Stream" text="leo.emperado@example.com" />
            <ContactItem icon={<FaPhoneAlt size={16} />} label="Voice Link" text="+63 912 345 6789" />
            <ContactItem icon={<FaMapMarkerAlt size={18} />} label="Base Ops" text="Manila, Philippines" />
          </div>

          <div className="flex space-x-4 pt-6">
            {[
              { icon: <FaGithub size={20} />, link: '#' },
              { icon: <FaLinkedin size={20} />, link: '#' },
              { icon: <FaInstagram size={20} />, link: '#' },
              { icon: <FaFacebook size={20} />, link: '#' }
            ].map((social, i) => (
              <a key={i} href={social.link} className="w-12 h-12 rounded-none border border-gaming-neon/20 flex items-center justify-center text-gray-400 hover:text-gaming-neon hover:border-gaming-neon hover:bg-gaming-neon/5 transition-all">
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <form className="glass-morphism p-10 rounded-none border border-gaming-neon/20 space-y-8 relative scanline">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-gaming-neon uppercase tracking-[0.2em] font-tech">User Name</label>
              <input type="text" className="w-full bg-gaming-obsidian/40 border border-gaming-neon/10 rounded-none px-4 py-4 focus:border-gaming-neon text-white font-tech outline-none transition-all" placeholder="IDENTIFY..." />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-gaming-neon uppercase tracking-[0.2em] font-tech">Comm Link</label>
              <input type="email" className="w-full bg-gaming-obsidian/40 border border-gaming-neon/10 rounded-none px-4 py-4 focus:border-gaming-neon text-white font-tech outline-none transition-all" placeholder="EMAIL@ADDR.SYS" />
            </div>
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-bold text-gaming-neon uppercase tracking-[0.2em] font-tech">Mission Subject</label>
            <input type="text" className="w-full bg-gaming-obsidian/40 border border-gaming-neon/10 rounded-none px-4 py-4 focus:border-gaming-neon text-white font-tech outline-none transition-all" placeholder="ENTRY POINT..." />
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-bold text-gaming-neon uppercase tracking-[0.2em] font-tech">Encrypted Message</label>
            <textarea rows="4" className="w-full bg-gaming-obsidian/40 border border-gaming-neon/10 rounded-none px-4 py-4 focus:border-gaming-neon text-white font-tech outline-none transition-all resize-none" placeholder="TRANSMIT DATA..."></textarea>
          </div>
          <button type="submit" className="w-full py-5 bg-gaming-neon text-black font-tech font-bold uppercase tracking-[0.3em] rounded-none hover:bg-white transition-all neon-border">
            Initiate Transfer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
