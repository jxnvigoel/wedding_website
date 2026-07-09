import React, { useState } from 'react';
import { Menu, X, MapPin, Calendar, Mail, Phone, Star, CheckCircle, Car, Palette, Camera, ArrowRight, CameraIcon, Music, Map, ChevronLeft, ChevronRight } from 'lucide-react';
import { 
  galleryHighlights, portfolioWorks, decorItems, 
  extraServices, menuGallery, palacesVenues 
} from './data';
import { Rating } from './components/Rating';
import logoAbout from './assets/logo-about.png';
import gateImage from './assets/gate.jpg';
const SectionHeader = ({ title, eyebrow, light = false }) => (
  <div className="text-center mb-16 animate-fade-up relative">
    {eyebrow && <p className="uppercase tracking-[0.2em] text-[var(--color-gold)] font-semibold text-sm mb-3 drop-shadow-sm">{eyebrow}</p>}
    <h2 className={`text-4xl md:text-5xl font-bold ${light ? 'text-gradient-gold drop-shadow-md' : 'text-[var(--color-maroon)]'}`}>
      {title}
    </h2>
    <div className="flex justify-center items-center mt-6 gap-4">
      <svg width="50" height="15" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,15 C30,15 40,0 50,15 C60,30 70,15 100,15" stroke="var(--color-gold)" strokeWidth="1.5" />
      </svg>
      <div className="w-2.5 h-2.5 rotate-45 border border-[var(--color-gold)] bg-[var(--color-emerald)]"></div>
      <svg width="50" height="15" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100,15 C70,15 60,0 50,15 C40,30 30,15 0,15" stroke="var(--color-gold)" strokeWidth="1.5" />
      </svg>
    </div>
  </div>
);

const GateIntro = () => {
  const [show, setShow] = useState(() => !sessionStorage.getItem('introPlayed'));
  const [opening, setOpening] = useState(false);

  React.useEffect(() => {
    if (!show) return;
    const timer1 = setTimeout(() => setOpening(true), 800);
    const timer2 = setTimeout(() => {
      sessionStorage.setItem('introPlayed', 'true');
      setShow(false);
    }, 4800); 
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-transparent pointer-events-none perspective-[2000px]">
      
      {/* Container simulating arch frame */}
      <div className="absolute inset-x-0 bottom-0 h-full flex w-full">
        
        {/* Left Panel */}
        <div 
          className="w-1/2 h-full origin-left bg-black relative overflow-hidden transition-all duration-[4000ms] ease-in-out"
          style={{ transform: opening ? 'rotateY(-95deg)' : 'rotateY(0)' }}
        >
          <img src={gateImage} className="absolute top-0 left-0 w-[200%] h-full object-cover max-w-none" alt="Left Gate" />
          <div className="absolute top-0 right-0 h-full w-4 bg-gradient-to-l from-black/20 to-transparent"></div>
        </div>

        {/* Right Panel */}
        <div 
          className="w-1/2 h-full origin-right bg-black relative overflow-hidden transition-all duration-[4000ms] ease-in-out"
          style={{ transform: opening ? 'rotateY(95deg)' : 'rotateY(0)' }}
        >
          <img src={gateImage} className="absolute top-0 right-0 w-[200%] h-full object-cover max-w-none" alt="Right Gate" />
          <div className="absolute top-0 left-0 h-full w-4 bg-gradient-to-r from-black/20 to-transparent"></div>
        </div>

        {/* Glowing Reveal Effect */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[120%] bg-[#FFB6C1] transition-all ease-out duration-[2500ms] shadow-[0_0_120px_50px_rgba(255,182,193,0.8)] z-[-1] ${opening ? 'opacity-0 w-[40vw]' : 'opacity-100 w-1.5'}`}></div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ['Portfolio', 'Decor', 'Services', 'Menu', 'Venues', 'About', 'Contact'];

  const scrollTo = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-[var(--color-espresso)]/95 backdrop-blur shadow-xl border-b border-[var(--color-gold)]/20 transition-all">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <h1 className="text-2xl md:text-3xl text-[var(--color-gold)] font-serif font-bold tracking-wide">
              KESHAV
            </h1>
            <span className="text-[var(--color-cream)] text-sm ml-2 hidden md:block uppercase tracking-widest font-light mt-1">CATERERS & DECORATORS</span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            {links.map(link => (
              <button key={link} onClick={() => scrollTo(link)} className="text-[var(--color-cream)] hover:text-[var(--color-gold)] text-sm uppercase tracking-wider font-medium transition-colors">
                {link}
              </button>
            ))}
            <a href="https://wa.me/917206881600" target="_blank" rel="noreferrer" className="inline-block bg-[var(--color-gold)] text-[var(--color-espresso)] px-6 py-2 rounded-md uppercase tracking-wider text-sm font-semibold hover:bg-yellow-400 transition-colors ornamental-border glow-hover text-center">
              Enquire Now
            </a>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[var(--color-gold)]">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[var(--color-espresso)] absolute w-full left-0 border-b border-[var(--color-gold)] pb-6 px-6">
          <div className="flex flex-col space-y-4 pt-4">
            {links.map(link => (
              <button key={link} onClick={() => scrollTo(link)} className="text-[var(--color-cream)] text-left hover:text-[var(--color-gold)] uppercase tracking-widest font-medium text-sm">
                {link}
              </button>
            ))}
            <a href="https://wa.me/917206881600" target="_blank" rel="noreferrer" className="block text-center bg-[var(--color-gold)] text-[var(--color-espresso)] mx-auto w-full py-3 mt-4 rounded-md uppercase tracking-wider text-sm font-semibold ornamental-border glow-hover hover:bg-yellow-400 transition-colors">
              Enquire Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80" 
        alt="Royal Indian Wedding" 
        className="w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-espresso)]/80 via-transparent to-[var(--color-espresso)]/90"></div>
    </div>
    
    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-up">
      <p className="uppercase tracking-[0.3em] text-[var(--color-gold)] mb-6 font-semibold shadow-sm">Crafting Timeless Wedding Experience </p>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-gradient-gold leading-tight mb-8">
        Where Your Royal<br />Tale Begins
      </h1>
      <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10">
        <button onClick={() => document.getElementById('decor')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[var(--color-gold)] text-[var(--color-espresso)] px-8 py-4 rounded font-bold uppercase tracking-widest hover:bg-yellow-400 transition-colors glow-hover">
          View Our Work
        </button>
        <a href="https://wa.me/917206881600" target="_blank" rel="noreferrer" className="inline-block text-center bg-[var(--color-emerald)] border-2 border-[var(--color-gold)] text-[var(--color-gold)] px-8 py-4 rounded font-bold uppercase tracking-widest hover:bg-[#135A46] transition-colors glow-hover shadow-lg">
          Book Consultation
        </a>
      </div>
    </div>
  </section>
);

const Highlights = () => {
  // Ensure we have enough items for a seamless scroll on large screens
  // We want at least 10 items in the base array before duplicating
  const baseArray = galleryHighlights.length > 0 
    ? Array(Math.max(1, Math.ceil(10 / galleryHighlights.length))).fill(galleryHighlights).flat()
    : [];

  return (
    <div className="bg-[var(--color-espresso)] bg-royal-texture py-8 overflow-hidden border-t items-center border-[var(--color-gold)]/30">
      <div className="flex gap-4 animate-[scroll_40s_linear_infinite] w-max px-4">
        {[...baseArray, ...baseArray].map((img, i) => (
          <div key={i} className="w-64 h-40 md:w-80 md:h-56 flex-shrink-0 ornamental-border p-1 rounded-sm overflow-hidden">
            <img src={img} alt="Highlight" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Wedding', 'Reception', 'Mehendi', 'Sangeet'];
  
  const filteredWorks = filter === 'All' ? portfolioWorks : portfolioWorks.filter(w => w.eventType === filter);

  return (
    <section id="portfolio" className="section-padding bg-[var(--color-cream)]">
      <SectionHeader eyebrow="Our Masterpieces" title="Previous Works" />
      
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {filters.map(f => (
          <button 
            key={f}
            onClick={() => setFilter(f)}
            className={`px-6 py-2 rounded-full border transition-all font-medium tracking-wide ${filter === f ? 'bg-[var(--color-maroon)] text-[var(--color-cream)] border-[var(--color-maroon)]' : 'border-[var(--color-muted-gold)] text-[var(--color-espresso)] hover:border-[var(--color-maroon)]'}`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {filteredWorks.map((work) => (
          <div key={work.id} className="group cursor-pointer flex flex-col bg-[var(--color-cream)] rounded-lg overflow-hidden shadow-xl border border-[var(--color-gold)]/30 transform hover:-translate-y-2 transition-all duration-300 glow-hover hover:border-[var(--color-emerald)]">
            <div className="relative h-72 overflow-hidden">
              <img src={work.image} alt={work.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-4 right-4 bg-[var(--color-espresso)]/90 backdrop-blur text-[var(--color-gold)] px-3 py-1 rounded text-xs uppercase tracking-widest font-semibold border border-[var(--color-emerald)]">
                {work.eventType}
              </div>
            </div>
            <div className="p-8 flex-grow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-serif font-bold text-[var(--color-maroon)]">{work.title}</h3>
                <div className="flex items-center text-sm text-[var(--color-emerald)] font-medium gap-1"><MapPin size={16}/> {work.city}</div>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <Rating value={work.rating} />
                <span className="text-sm font-medium text-[var(--color-muted-gold)]">({work.reviews} reviews)</span>
              </div>
              <p className="text-[var(--color-text-dark)] mb-6 line-clamp-2 leading-relaxed">{work.description}</p>
              
              <button className="text-[var(--color-maroon)] font-bold uppercase tracking-wider text-sm flex items-center group-hover:text-[var(--color-gold)] transition-colors">
                View Details <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const DecorGrid = () => (
  <section id="decor" className="section-padding bg-[var(--color-espresso)] bg-royal-texture text-[var(--color-text-light)] relative">
    <SectionHeader eyebrow="Curated Collections" title="Available Decor" light />
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
      {decorItems.map((item) => (
        <div key={item.id} className="relative group p-2 ornamental-border bg-[var(--color-espresso)]">
          <div className="overflow-hidden h-64 mb-4 relative">
             <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
             <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-espresso)] via-transparent to-transparent opacity-80"></div>
          </div>
          <div className="p-4 text-center">
            <h3 className="text-xl font-serif text-[var(--color-gold)] mb-2">{item.name}</h3>
            <p className="text-sm text-[var(--color-muted-gold)] mb-4">{item.description}</p>
            <p className="text-[var(--color-cream)] font-bold text-sm tracking-wider uppercase">Starts ₹{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const iconMap = {
  "Music": Music,
  "Camera": Camera,
  "Palette": Palette,
  "Car": Car
};

const Services = () => (
  <section id="services" className="section-padding bg-[var(--color-maroon)] bg-royal-texture text-[var(--color-text-light)] relative overflow-hidden">
    {/* Decorative background mandala hint */}
    <div className="absolute top-0 right-0 opacity-10 w-96 h-96 border-[40px] rounded-full border-[var(--color-gold)] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
    <div className="absolute bottom-0 left-0 opacity-10 w-72 h-72 border-[30px] rounded-full border-[var(--color-gold)] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
    
    <div className="relative z-10">
      <SectionHeader eyebrow="Enhance The Experience" title="Extra Services" light />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {extraServices.map(service => {
          const Icon = iconMap[service.icon] || CheckCircle;
          return (
            <div key={service.id} className="bg-[var(--color-espresso)]/60 p-8 rounded-xl border border-[var(--color-gold)]/20 hover:border-[var(--color-emerald)] transition-all text-center group glow-hover">
              <div className="w-16 h-16 mx-auto bg-[var(--color-gold)]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[var(--color-emerald)] transition-colors border border-transparent group-hover:border-[var(--color-gold)]">
                <Icon className="text-[var(--color-gold)] transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold text-[var(--color-cream)] mb-3 group-hover:text-gradient-gold">{service.title}</h3>
              <p className="text-[var(--color-text-light)] text-sm leading-relaxed">{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const MenuSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(-1);
  const [touchStart, setTouchStart] = useState(null);
  
  const nextLB = (e) => { e.stopPropagation(); setPhotoIndex(p => p < menuGallery.length - 1 ? p + 1 : 0); };
  const prevLB = (e) => { e.stopPropagation(); setPhotoIndex(p => p > 0 ? p - 1 : menuGallery.length - 1); };

  const nextViewer = () => setActiveIndex(p => p < menuGallery.length - 1 ? p + 1 : 0);
  const prevViewer = () => setActiveIndex(p => p > 0 ? p - 1 : menuGallery.length - 1);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };
  
  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    
    if (diff > 50) {
      nextViewer();
    } else if (diff < -50) {
      prevViewer();
    }
    setTouchStart(null);
  };

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (photoIndex !== -1) {
        if (e.key === 'Escape') setPhotoIndex(-1);
        if (e.key === 'ArrowRight') nextLB(e);
        if (e.key === 'ArrowLeft') prevLB(e);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <section id="menu" className="section-padding bg-[var(--color-cream)] relative">
      <SectionHeader eyebrow="A Culinary Journey" title="Catering Exquisiteness" />
      
      <div className="max-w-5xl mx-auto bg-[var(--color-espresso)] bg-royal-texture rounded-2xl p-6 md:p-12 shadow-2xl border border-[var(--color-gold)]/20 animate-fade-up">
        
        {/* Main Viewer Area */}
        <div className="relative flex items-center justify-center gap-4 md:gap-12 mb-8">
          
          <button onClick={prevViewer} className="text-[var(--color-gold)] hover:text-[#FFD966] transition-colors p-2 rounded-full border border-transparent hover:border-[var(--color-gold)]/50 hidden md:block">
            <ChevronLeft size={40} />
          </button>

          {/* Book Frame (Container) - Zoom action on click */}
          <div 
             className="relative w-full max-w-[260px] md:max-w-[320px] aspect-[3/4] cursor-pointer group rounded-lg my-6 mx-auto"
             style={{ perspective: '1200px' }}
             onClick={() => setPhotoIndex(activeIndex)}
             onTouchStart={handleTouchStart}
             onTouchEnd={handleTouchEnd}
          >
             {/* The gilded frame */}
             <div className="absolute -inset-4 md:-inset-6 bg-[var(--color-maroon)] rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.9)] border-[6px] border-[var(--color-gold)] z-0 flex items-center justify-center pointer-events-none">
                 <div className="absolute inset-1 border border-[#FFD966] rounded-lg opacity-70"></div>
             </div>

             {/* Inner Viewer constraints */}
             <div className="absolute inset-0 z-10 overflow-hidden rounded bg-white shadow-[inset_0_0_20px_rgba(0,0,0,0.2)]">
               {menuGallery.map((img, idx) => (
                 <img 
                   key={idx} 
                   src={img} 
                   alt={`Menu Page ${idx + 1}`} 
                   className="absolute inset-0 w-full h-full object-cover transition-all duration-[600ms] ease-in-out group-hover:scale-105"
                   style={{
                     opacity: idx === activeIndex ? 1 : 0,
                     transform: idx === activeIndex 
                       ? 'rotateY(0deg) translateX(0) scale(1)' 
                       : idx < activeIndex 
                         ? 'rotateY(-25deg) translateX(-100px) scale(0.9)'
                         : 'rotateY(25deg) translateX(100px) scale(0.9)',
                     pointerEvents: idx === activeIndex ? 'auto' : 'none'
                   }}
                 />
               ))}
             </div>
             
             {/* Hover Zoom Hint */}
             <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="bg-[var(--color-espresso)]/80 p-4 rounded-full text-[#FFD966] shadow-[0_0_15px_rgba(255,217,102,0.5)]">
                   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round">
                     <circle cx="11" cy="11" r="8"></circle>
                     <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                     <line x1="11" y1="8" x2="11" y2="14"></line>
                     <line x1="8" y1="11" x2="14" y2="11"></line>
                   </svg>
                </div>
             </div>
          </div>

          <button onClick={nextViewer} className="text-[var(--color-gold)] hover:text-[#FFD966] transition-colors p-2 rounded-full border border-transparent hover:border-[var(--color-gold)]/50 hidden md:block">
            <ChevronRight size={40} />
          </button>
        </div>

        {/* Mobile Arrows */}
        <div className="flex justify-between md:hidden mb-6 px-4">
           <button onClick={prevViewer} className="text-[var(--color-gold)] flex items-center uppercase text-xs tracking-widest font-bold border border-[var(--color-gold)]/30 px-4 py-2 rounded hover:bg-[var(--color-gold)] hover:text-[var(--color-espresso)] transition">
             <ChevronLeft size={16} className="mr-1"/> Prev
           </button>
           <button onClick={nextViewer} className="text-[var(--color-gold)] flex items-center uppercase text-xs tracking-widest font-bold border border-[var(--color-gold)]/30 px-4 py-2 rounded hover:bg-[var(--color-gold)] hover:text-[var(--color-espresso)] transition">
             Next <ChevronRight size={16} className="ml-1"/>
           </button>
        </div>

        {/* Thumbnails Row */}
        <div className="flex overflow-x-auto gap-4 py-4 px-2 scrollbar-thin scrollbar-thumb-[var(--color-gold)] scrollbar-track-transparent items-center">
           {menuGallery.map((img, idx) => (
             <button
               key={idx}
               onClick={() => setActiveIndex(idx)}
               className={`relative flex-shrink-0 transition-all duration-300 rounded overflow-hidden shadow-lg 
                 ${idx === activeIndex 
                    ? 'w-24 h-32 border-2 border-[#FFD966] shadow-[0_0_15px_rgba(255,217,102,0.6)] brightness-110 transform -translate-y-2' 
                    : 'w-20 h-28 border border-[var(--color-gold)]/40 brightness-50 hover:brightness-100'}
               `}
             >
               <img src={img} className="w-full h-full object-cover" alt={`Thumb ${idx+1}`} />
             </button>
           ))}
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      {photoIndex >= 0 && (
        <div 
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#150A06]/95 backdrop-blur-sm p-4 md:p-12 animate-fade-up"
          onClick={() => setPhotoIndex(-1)}
        >
          <button 
            className="absolute top-6 right-6 text-[var(--color-gold)] hover:text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); setPhotoIndex(-1); }}
          >
            <X size={40} />
          </button>
          
          <button 
            className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 text-[var(--color-gold)] hover:text-[#FFD966] transition-colors"
            onClick={prevLB}
          >
            <ChevronLeft size={48} />
          </button>
          
          <img 
            src={menuGallery[photoIndex]} 
            alt={`Menu Content ${photoIndex + 1}`} 
            className="max-w-full max-h-full object-contain rounded border border-[#FFD966] shadow-[0_0_30px_rgba(255,217,102,0.2)]"
            onClick={(e) => e.stopPropagation()}
          />
          
          <button 
            className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-[var(--color-gold)] hover:text-[#FFD966] transition-colors"
            onClick={nextLB}
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </section>
  );
};

const Venues = () => (
  <section id="venues" className="section-padding bg-[var(--color-espresso)] bg-royal-texture text-[var(--color-text-light)]">
    <SectionHeader eyebrow="Majestic Settings" title="Our Exclusive Palaces" light />
    
    <div className="max-w-7xl mx-auto space-y-24">
      {palacesVenues.map((venue, idx) => (
        <div key={venue.id} className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
          <div className="w-full lg:w-1/2 space-y-6">
            <h3 className="text-4xl font-serif text-[var(--color-gold)]">{venue.name}</h3>
            <div className="flex flex-wrap gap-4 text-sm font-medium tracking-widest text-[var(--color-muted-gold)] uppercase">
              <span className="flex items-center gap-1"><MapPin size={16}/> {venue.city}</span>
              <span>|</span>
              <span>{venue.capacity}</span>
              <span>|</span>
              <span>{venue.space}</span>
            </div>
            <p className="text-lg leading-relaxed text-gray-300 font-light">{venue.description}</p>

          </div>
          
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute -inset-4 border border-[var(--color-gold)]/40 -z-10 group-hover:-inset-2 group-hover:bg-[var(--color-gold)]/5 transition-all duration-300"></div>
            <img src={venue.images[0]} alt={venue.name} className="w-full h-96 object-cover shadow-2xl" />
          </div>
        </div>
      ))}
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 bg-[var(--color-cream)] overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
      <div className="w-full md:w-1/2 relative">
        <div className="relative z-10 ornamental-border p-2 bg-[var(--color-espresso)] rounded-xl flex items-center justify-center aspect-square">
          <img src={logoAbout} alt="Keshav Caterer & Decorators" className="w-[80%] h-auto object-contain" />
        </div>
        <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[var(--color-maroon)] rounded-full -z-0"></div>
        <div className="absolute -top-8 -left-8 w-32 h-32 border-4 border-[var(--color-gold)] rounded-full -z-0 opacity-50"></div>
      </div>
      
      <div className="w-full md:w-1/2 space-y-8">
        <div>
          <p className="uppercase tracking-[0.2em] text-[var(--color-maroon)] font-bold text-sm mb-3">Our Legacy</p>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[var(--color-espresso)] leading-tight">
            Crafting Unforgettable Experiences Under One Roof
          </h2>
        </div>
        
        <p className="text-gray-700 text-lg leading-relaxed">
          For over two decades, KESHAV CATERERS & DECORATORS has been synonymous with grandeur, elegance, and culinary perfection. We weave dreams into reality by bringing the finest decor aesthetics and mouth-watering feasts tailored for you.
        </p>
        
        <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[var(--color-gold)]/30">
          <div className="text-center">
            <div className="text-4xl font-serif text-[var(--color-gold)] font-bold mb-2">500+</div>
            <div className="text-xs uppercase tracking-widest text-[var(--color-espresso)] font-semibold">Weddings</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-serif text-[var(--color-gold)] font-bold mb-2">50+</div>
            <div className="text-xs uppercase tracking-widest text-[var(--color-espresso)] font-semibold">Cities</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-serif text-[var(--color-gold)] font-bold mb-2">15+</div>
            <div className="text-xs uppercase tracking-widest text-[var(--color-espresso)] font-semibold">Years</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="section-padding bg-[var(--color-maroon)] bg-royal-texture text-center text-[var(--color-text-light)]">
    <div className="max-w-4xl mx-auto">
      <Star className="w-16 h-16 mx-auto text-[var(--color-gold)] fill-[var(--color-gold)] mb-6 opacity-80" />
      <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 capitalize italic text-gradient-gold">
        "Keshav turned our wedding into a majestic festival. The decor was breathtaking, and the food was celestial."
      </h2>
      <p className="text-xl text-[var(--color-muted-gold)]">— Ananya & Vikram, Udaipur</p>
      
      <div className="mt-12 flex items-center justify-center gap-4 flex-col text-sm uppercase tracking-widest font-medium">
        <Rating value={4.8} />
        <span>4.8/5 Average from 300+ Reviews</span>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="section-padding bg-[var(--color-cream)] relative">
    <SectionHeader eyebrow="Let's Plan Your Day" title="Connect With Us" />
    
    <div className="max-w-4xl mx-auto text-center mb-16 space-y-4 px-4">
       <h3 className="text-3xl md:text-5xl font-serif text-[var(--color-maroon)] font-bold">Let's Start Planning Your Dream Wedding</h3>
       <p className="text-lg text-gray-600 font-medium">Reach out anytime — we respond within 24 hours.</p>
    </div>

    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start px-4">
      {/* Office Info Block (Left Column) */}
      <div className="w-full lg:w-1/3 space-y-8 bg-white p-8 md:p-10 rounded-xl shadow-lg border border-[var(--color-gold)]/30">
        <h4 className="text-2xl font-serif text-[var(--color-espresso)] font-bold mb-6 border-b border-[var(--color-gold)]/40 pb-4">Our Details</h4>
        <div className="space-y-8">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-[var(--color-emerald)]/10 flex items-center justify-center rounded-full border border-[var(--color-emerald)]/30 flex-shrink-0"><Phone className="text-[var(--color-maroon)]" size={24} /></div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Phone</p>
              <p className="text-lg font-medium text-[var(--color-espresso)]">+91 7206881600</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-[var(--color-emerald)]/10 flex items-center justify-center rounded-full border border-[var(--color-emerald)]/30 flex-shrink-0"><Mail className="text-[var(--color-maroon)]" size={24} /></div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Email</p>
              <p className="text-lg font-medium text-[var(--color-espresso)]">anshulgoel1981@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-[var(--color-gold)]/20 flex items-center justify-center rounded-full flex-shrink-0"><MapPin className="text-[var(--color-maroon)]" size={24} /></div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Head Office</p>
              <p className="text-base font-medium text-[var(--color-espresso)] leading-tight">Plot No 3 Cooperative House Building Society, opposite Upal Mall, Jagadhri</p>
            </div>
          </div>
          
          {/* Socials Placeholder */}
          <div className="pt-8 border-t border-[var(--color-gold)]/30 flex justify-center gap-6 text-[var(--color-espresso)]">
             <a href="https://www.instagram.com/keshav_caterersynr?igsh=bmVwZHFvNHFuZWhk" target="_blank" rel="noreferrer" className="bg-[var(--color-gold)]/20 w-12 h-12 flex items-center justify-center rounded-full hover:bg-[var(--color-maroon)] hover:text-white transition shadow-sm border border-[var(--color-gold)]/50">
               <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
             </a>
             <a href="https://www.facebook.com/people/Keshav-Caterers-Decorators/pfbid0mPYvbKqV6cZYWrMdyBraN36LKVhgXg8aLmszqDCyXkmneQu12TXnYUkNzm6tsAbml/?rdid=vZeXYUC0jI5w8VrW&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1994iNufoM%2F%3Fref%3D1" target="_blank" rel="noreferrer" className="bg-[var(--color-gold)]/20 w-12 h-12 flex items-center justify-center rounded-full hover:bg-[var(--color-maroon)] hover:text-white transition shadow-sm border border-[var(--color-gold)]/50">
               <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
             </a>
          </div>
        </div>
      </div>
      
      {/* Right Column: CTA Cards & Map */}
      <div className="w-full lg:w-2/3 space-y-10">
         
         {/* 3 Prominent Action Cards */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="tel:+917206881600" className="flex flex-col items-center text-center p-8 bg-white border border-[var(--color-gold)]/40 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition group">
                <div className="w-16 h-16 rounded-full bg-[var(--color-cream)] border border-[var(--color-gold)]/50 flex items-center justify-center mb-4 group-hover:bg-[var(--color-gold)]/10 transition">
                   <Phone size={28} className="text-[var(--color-maroon)]" />
                </div>
                <h4 className="text-xl font-bold font-serif text-[var(--color-espresso)] mb-1">Call Now</h4>
                <p className="text-sm text-gray-500 font-medium">Tap to call us</p>
            </a>

            <a href="https://wa.me/917206881600" target="_blank" rel="noreferrer" className="flex flex-col items-center text-center p-8 bg-[var(--color-espresso)] border-2 border-[var(--color-gold)] rounded-xl shadow-xl hover:-translate-y-2 transition transform lg:scale-105 group relative overflow-hidden glow-hover">
                <div className="absolute inset-0 bg-royal-texture opacity-30 pointer-events-none"></div>
                <div className="w-20 h-20 rounded-full bg-[var(--color-maroon)] border border-[var(--color-gold)] flex items-center justify-center mb-4 group-hover:scale-110 transition relative z-10 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-gold)]"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </div>
                <h4 className="text-2xl font-bold font-serif text-[var(--color-gold)] mb-1 relative z-10">WhatsApp Us</h4>
                <p className="text-sm text-[var(--color-cream)]/90 font-medium relative z-10">Instant responses</p>
            </a>

            <a href="mailto:anshulgoel1981@gmail.com" className="flex flex-col items-center text-center p-8 bg-white border border-[var(--color-gold)]/40 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition group">
                <div className="w-16 h-16 rounded-full bg-[var(--color-cream)] border border-[var(--color-gold)]/50 flex items-center justify-center mb-4 group-hover:bg-[var(--color-gold)]/10 transition">
                   <Mail size={28} className="text-[var(--color-maroon)]" />
                </div>
                <h4 className="text-xl font-bold font-serif text-[var(--color-espresso)] mb-1">Email Us</h4>
                <p className="text-sm text-gray-500 font-medium">Send us details</p>
            </a>
         </div>

         {/* Map Placeholder */}
         <div className="w-full h-80 bg-white rounded-xl overflow-hidden border border-[var(--color-gold)]/40 shadow-lg">
           <div className="w-full h-full flex flex-col items-center justify-center text-gray-500 bg-[var(--color-cream)] relative group">
             <div className="absolute inset-0 bg-royal-texture opacity-5"></div>
             <Map size={56} className="mb-4 opacity-30 text-[var(--color-maroon)]" />
             <p className="uppercase tracking-widest text-sm font-semibold text-[var(--color-maroon)]">Google Maps Embed</p>
             <p className="text-xs text-gray-400 mt-2 font-medium">Interactive map will load here</p>
           </div>
         </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[var(--color-espresso)] bg-royal-texture text-[var(--color-text-light)] border-t border-[var(--color-gold)]/30 relative">
    <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      <div className="space-y-6">
        <h2 className="text-3xl text-[var(--color-gold)] font-serif font-bold tracking-wide">KESHAV</h2>
        <p className="text-[var(--color-muted-gold)] text-sm leading-relaxed pr-6">
          Pioneers in luxury weddings, blending authentic tradition with impeccable hospitality across India's most breathtaking destinations.
        </p>
        <div className="flex gap-4">
          <a href="https://www.instagram.com/keshav_caterersynr?igsh=bmVwZHFvNHFuZWhk" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-[var(--color-gold)] flex items-center justify-center hover:bg-[var(--color-gold)] hover:text-[var(--color-espresso)] transition-colors text-[var(--color-gold)] font-bold text-xs">
            IG
          </a>
          <a href="https://www.facebook.com/people/Keshav-Caterers-Decorators/pfbid0mPYvbKqV6cZYWrMdyBraN36LKVhgXg8aLmszqDCyXkmneQu12TXnYUkNzm6tsAbml/?rdid=vZeXYUC0jI5w8VrW&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1994iNufoM%2F%3Fref%3D1" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-[var(--color-gold)] flex items-center justify-center hover:bg-[var(--color-gold)] hover:text-[var(--color-espresso)] transition-colors text-[var(--color-gold)] font-bold text-xs">
            FB
          </a>
        </div>
      </div>
      
      <div>
        <h4 className="text-lg font-serif text-[var(--color-gold)] mb-6 font-bold uppercase tracking-widest">Quick Links</h4>
        <ul className="space-y-3 text-sm tracking-wider font-light text-gray-300">
          <li><a href="#portfolio" className="hover:text-[var(--color-cream)]">Portfolio</a></li>
          <li><a href="#decor" className="hover:text-[var(--color-cream)]">Decor Rentals</a></li>
          <li><a href="#menu" className="hover:text-[var(--color-cream)]">Catering Menu</a></li>
          <li><a href="#venues" className="hover:text-[var(--color-cream)]">Our Palaces</a></li>
        </ul>
      </div>
      
      <div>
        <h4 className="text-lg font-serif text-[var(--color-gold)] mb-6 font-bold uppercase tracking-widest">Services</h4>
        <ul className="space-y-3 text-sm tracking-wider font-light text-gray-300">
          <li>Wedding Planning</li>
          <li>Theme Decor</li>
          <li>Live Food Counters</li>
          <li>Artist Management</li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-serif text-[var(--color-gold)] mb-6 font-bold uppercase tracking-widest">Newsletter</h4>
        <p className="text-sm text-gray-300 mb-4 font-light">Get inspiration for your big day.</p>
        <div className="flex border border-[var(--color-gold)]/50 rounded overflow-hidden">
          <input type="email" placeholder="Your Email" className="bg-[var(--color-espresso)] px-4 py-2 w-full focus:outline-none text-sm text-[var(--color-cream)]" />
          <button className="bg-[var(--color-gold)] text-[var(--color-espresso)] px-4 py-2 font-bold uppercase text-xs tracking-wider">Join</button>
        </div>
      </div>
    </div>
    
    <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500 font-light tracking-widest">
      &copy; {new Date().getFullYear()} KESHAV CATERERS & DECORATORS. All rights reserved.
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <GateIntro />
      <Navbar />
      <Hero />
      <Highlights />
      <Portfolio />
      <DecorGrid />
      <Services />
      <MenuSection />
      <Venues />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
