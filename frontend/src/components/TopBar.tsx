import { IoMailOutline, IoCallOutline, IoLogoWhatsapp, IoLogoInstagram, IoLogoFacebook } from 'react-icons/io5';
import { motion } from 'framer-motion';

export default function TopBar() {
    return (
        <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="hidden lg:block border-b border-white/15 bg-transparent py-2 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-10 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2.5 text-white hover:text-[#22BDDD] transition-colors cursor-pointer group">
                        <IoCallOutline size={14} className="text-[#22BDDD] group-hover:scale-110 transition-transform" />
                        <span className="text-[10px] font-black uppercase tracking-[0.15em]">+51 987 654 321</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-white hover:text-[#22BDDD] transition-colors cursor-pointer group">
                        <IoMailOutline size={14} className="text-[#22BDDD] group-hover:scale-110 transition-transform" />
                        <span className="text-[10px] font-black uppercase tracking-[0.15em]">ventas@decorforma.com</span>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-4 border-r border-white/10 pr-6">
                        <a href="#" className="text-white hover:text-[#22BDDD] transition-all hover:scale-120">
                            <IoLogoInstagram size={15} />
                        </a>
                        <a href="#" className="text-white hover:text-[#22BDDD] transition-all hover:scale-120">
                            <IoLogoFacebook size={15} />
                        </a>
                        <a href="#" className="text-white hover:text-[#22BDDD] transition-all hover:scale-120">
                            <IoLogoWhatsapp size={15} />
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1A8FBB] animate-pulse" />
                        <span className="text-[9px] text-white font-black uppercase tracking-[0.2em]">
                            Showroom Lima
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
