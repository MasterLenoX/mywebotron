import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const ContactItem = ({ icon, text, label, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="flex items-center space-x-6 group"
  >
    <div className="w-12 h-12 bg-gaming-obsidian/60 border border-gaming-neon/20 flex items-center justify-center text-gaming-neon shrink-0 group-hover:border-gaming-neon transition-all relative">
      <div className="absolute inset-0 bg-gaming-neon/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      {icon}
      <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-gaming-neon/40 group-hover:border-gaming-neon"></div>
      <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-gaming-neon/40 group-hover:border-gaming-neon"></div>
    </div>
    <div>
      <p className="text-[9px] text-gaming-neon/60 uppercase font-black tracking-[0.2em] font-mono">{label}</p>
      <p className="text-white font-tech uppercase tracking-widest text-sm font-bold group-hover:text-gaming-neon transition-colors">{text}</p>
    </div>
  </motion.div>
);

const Contact = () => {
  return (
    <div className="space-y-16 py-12">
      <div className="flex items-center space-x-4">
        <div className="flex flex-col space-y-1">
          <div className="w-1 h-1 bg-gaming-neon"></div>
          <div className="w-1 h-8 bg-gaming-neon/50"></div>
          <div className="w-1 h-1 bg-gaming-neon"></div>
        </div>
        <div>
          <h2 className="text-4xl font-black uppercase tracking-tighter text-white font-tech">SECURE_CHANNEL</h2>
          <p className="text-[10px] text-gaming-neon font-mono tracking-[0.5em] opacity-50 uppercase">Sub-Routine: Signal_Initiation</p>
        </div>
        <div className="h-px bg-gradient-to-r from-gaming-neon/50 to-transparent flex-1"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <p className="text-gray-400 text-lg leading-relaxed font-light border-l-2 border-gaming-neon/30 pl-8 bg-gaming-neon/5 py-6 italic font-mono">
            "Established secure communication link for professional inquiries.
            Initiating contact will result in high-priority processing of your request.
            Data encryption active."
          </p>

          <div className="space-y-8">
            <ContactItem icon={<FaEnvelope size={18} />} label="Data Stream" text="leo.emperado@gmail.com" index={0} />
            <ContactItem icon={<FaPhoneAlt size={16} />} label="Voice Link" text="+63 945 848 1070" index={1} />
            <ContactItem icon={<FaMapMarkerAlt size={18} />} label="Base Ops" text="San Pedro, Laguna, Philippines" index={2} />
          </div>

          <div className="flex space-x-4 pt-6">
            {[
              { icon: <FaGithub size={20} />, link: '#' },
              { icon: <FaLinkedin size={20} />, link: '#' },
              { icon: <FaInstagram size={20} />, link: '#' },
              { icon: <FaFacebook size={20} />, link: '#' }
            ].map((social, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 243, 255, 0.1)" }}
                href={social.link}
                className="w-12 h-12 border border-gaming-neon/20 flex items-center justify-center text-gray-400 hover:text-gaming-neon hover:border-gaming-neon transition-all relative overflow-hidden group"
              >
                {social.icon}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gaming-neon/40"></div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="hud-panel p-10 space-y-8 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-[10px] font-black text-gaming-neon/60 uppercase tracking-[0.2em] font-mono">User Identify</label>
              <input type="text" className="w-full bg-gaming-neon/5 border border-gaming-neon/10 rounded-none px-4 py-4 focus:border-gaming-neon/50 text-white font-tech outline-none transition-all placeholder:text-white/10" placeholder="NAME//" />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black text-gaming-neon/60 uppercase tracking-[0.2em] font-mono">Comm Link</label>
              <input type="email" className="w-full bg-gaming-neon/5 border border-gaming-neon/10 rounded-none px-4 py-4 focus:border-gaming-neon/50 text-white font-tech outline-none transition-all placeholder:text-white/10" placeholder="EMAIL//" />
            </div>
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-black text-gaming-neon/60 uppercase tracking-[0.2em] font-mono">Mission Subject</label>
            <input type="text" className="w-full bg-gaming-neon/5 border border-gaming-neon/10 rounded-none px-4 py-4 focus:border-gaming-neon/50 text-white font-tech outline-none transition-all placeholder:text-white/10" placeholder="PURPOSE//" />
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-black text-gaming-neon/60 uppercase tracking-[0.2em] font-mono">Encrypted Message</label>
            <textarea rows="4" className="w-full bg-gaming-neon/5 border border-gaming-neon/10 rounded-none px-4 py-4 focus:border-gaming-neon/50 text-white font-tech outline-none transition-all resize-none placeholder:text-white/10" placeholder="TRANSMIT_DATA//"></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0, 243, 255, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-5 bg-gaming-neon text-black font-tech font-black uppercase tracking-[0.4em] rounded-none transition-all relative overflow-hidden group"
          >
            <span className="relative z-10">Initiate Transfer</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </motion.button>

          <div className="absolute bottom-2 left-10 right-10 flex justify-between opacity-10 grayscale pointer-events-none">
            <span className="text-[6px] font-mono">ENCRYPTION: AES-256</span>
            <span className="text-[6px] font-mono">LINK_SECURE</span>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
