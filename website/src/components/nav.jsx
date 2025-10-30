import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './lunguagecontext';
import { Menu, X, Globe, ChevronDown, Search } from 'lucide-react';
import { COLORS, GRADIENTS, SHADOWS, RADIUS } from './theme';
import { GiWireframeGlobe } from "react-icons/gi";
import SearchModal from './search';
import { CiMenuFries } from "react-icons/ci";
import { CiMenuKebab } from "react-icons/ci";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { t, language, changeLanguage, languages } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Styles
  const navStyle = {
    position: 'fixed',
    width: '100%',
    zIndex: 50,
    transition: 'all 0.3s ease',
    background: isScrolled ? COLORS.neutral.white : COLORS.neutral.white,
    backdropFilter: isScrolled ? 'none' : 'blur(8px)',
    boxShadow: isScrolled ? SHADOWS.lg : 'none',
    padding: isScrolled ? '0.5rem 0' : '1rem 0',
  };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    cursor: 'pointer',
  };

  const logoCircleStyle = {
    width: '90px',
    height: '90px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.3s ease',
  };

  const logoTextStyle = {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: COLORS.neutral.gray900,
  };

  const logoSubtextStyle = {
    fontSize: '0.75rem',
    color: COLORS.neutral.gray600,
  };

  const navLinkStyle = (isActive) => ({
    padding: '0.5rem 1rem',
    borderRadius: RADIUS.sm,
    fontWeight: '500',
    transition: 'all 0.2s ease',
    textDecoration: 'none',
    background: isActive ? COLORS.primary.green100 : 'transparent',
    color: isActive ? COLORS.primary.green700 : COLORS.neutral.gray700,
  });

  const navLinkHoverStyle = {
    background: COLORS.neutral.gray100,
  };

  const dropdownButtonStyle = (isActive) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    padding: '0.5rem 1rem',
    borderRadius: RADIUS.sm,
    background: isActive ? COLORS.primary.green100 : 'transparent',
    color: isActive ? COLORS.primary.green700 : COLORS.neutral.gray700,
    border: 'none',
    cursor: 'pointer',
    fontWeight: '500',
    transition: 'all 0.2s ease',
  });

  const langButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 0.75rem',
    borderRadius: RADIUS.lg,
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  };

  const langButtonHoverStyle = {
    background: COLORS.neutral.gray100,
  };

  const searchButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.5rem',
    borderRadius: RADIUS.lg,
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const searchButtonHoverStyle = {
    background: COLORS.primary.green100,
  };

  const langDropdownStyle = {
    position: 'absolute',
    right: 0,
    marginTop: '0.5rem',
    width: '10rem',
    background: COLORS.neutral.white,
    borderRadius: RADIUS.lg,
    boxShadow: SHADOWS.xl,
    border: `1px solid ${COLORS.neutral.gray200}`,
    overflow: 'hidden',
    zIndex: 100,
  };

  const mediaDropdownStyle = {
    position: 'absolute',
    top: '100%',
    left: 0,
    marginTop: '0.5rem',
    width: '10rem',
    background: COLORS.neutral.white,
    borderRadius: RADIUS.lg,
    boxShadow: SHADOWS.xl,
    border: `1px solid ${COLORS.neutral.gray200}`,
    overflow: 'hidden',
    zIndex: 100,
  };

  const langOptionStyle = (isSelected) => ({
    width: '100%',
    padding: '0.5rem 1rem',
    textAlign: 'left',
    fontSize: '0.875rem',
    background: isSelected ? COLORS.primary.green100 : 'transparent',
    color: isSelected ? COLORS.primary.green700 : COLORS.neutral.gray700,
    fontWeight: isSelected ? '600' : '400',
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  });

  const dropdownLinkStyle = (isActive) => ({
    display: 'block',
    width: '100%',
    padding: '0.5rem 1rem',
    textAlign: 'left',
    fontSize: '0.875rem',
    background: isActive ? COLORS.primary.green100 : 'transparent',
    color: isActive ? COLORS.primary.green700 : COLORS.neutral.gray700,
    fontWeight: isActive ? '600' : '400',
    textDecoration: 'none',
    transition: 'background 0.3s ease',
  });

  const langOptionHoverStyle = {
    background: COLORS.primary.green50,
  };

  const menuButtonStyle = {
    padding: '0.5rem',
    borderRadius: RADIUS.lg,
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const menuButtonHoverStyle = {
    background: COLORS.neutral.gray100,
  };

  const mobileMenuStyle = {
    overflow: 'hidden',
  };

  const mobileMenuContainerStyle = {
    paddingTop: '1rem',
    paddingBottom: '1rem',
  };

  const mobileLinkStyle = (isActive) => ({
    display: 'block',
    padding: '0.75rem 1rem',
    borderRadius: RADIUS.lg,
    fontWeight: '500',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    background: isActive ? COLORS.primary.green100 : 'transparent',
    color: isActive ? COLORS.primary.green700 : COLORS.neutral.gray700,
    marginBottom: '0.5rem',
  });

  const mobileLinkHoverStyle = {
    background: COLORS.neutral.gray100,
  };

  const mobileDropdownHeaderStyle = {
    display: 'block',
    padding: '0.75rem 1rem',
    fontWeight: '600',
    fontSize: '0.875rem',
    color: COLORS.neutral.gray900,
    marginTop: '0.5rem',
    marginBottom: '0.25rem',
  };

  const mobileSubLinkStyle = (isActive) => ({
    display: 'block',
    padding: '0.5rem 1rem 0.5rem 2rem',
    borderRadius: RADIUS.lg,
    fontWeight: '400',
    fontSize: '0.875rem',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    background: isActive ? COLORS.primary.green100 : 'transparent',
    color: isActive ? COLORS.primary.green700 : COLORS.neutral.gray700,
    marginBottom: '0.25rem',
  });

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/what-we-do', label: t('nav.whatWeDo') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/blog', label: t('nav.blog') },
    { path: '/faqs', label: t('nav.faqs') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const mediaLinks = [
    { path: '/resources', label: t('nav.resources') || 'Resources' },
    { path: '/gallery', label: t('nav.gallery') || 'Gallery' },
    { path: '/events', label: t('nav.events') || 'Events' },
  ];

  const isActive = (path) => location.pathname === path;
  const isMediaActive = () => mediaLinks.some(link => location.pathname === link.path);

  return (
    <>
      {/* Search Modal */}
      <SearchModal isOpen={showSearch} onClose={() => setShowSearch(false)} />

      <nav style={navStyle}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" style={logoContainerStyle} className="group">
              <div 
                style={logoCircleStyle}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <img 
                  src="/logo.png" 
                  alt="CACZ Logo" 
                  className="w-13 h-13 object-contain"
                />
              </div>
              <div className="">
                <h1 style={logoTextStyle}>CACZ</h1>
                <p style={logoSubtextStyle}>Climate Action</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  style={navLinkStyle(isActive(link.path))}
                  onMouseEnter={(e) => {
                    if (!isActive(link.path)) {
                      e.currentTarget.style.background = navLinkHoverStyle.background;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(link.path)) {
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  {link.label}
                </Link>
              ))}

              {/* Media Dropdown */}
              <div style={{ position: 'relative' }}>
                <button
                  onClick={() => setMediaOpen(!mediaOpen)}
                  style={dropdownButtonStyle(isMediaActive())}
                  onMouseEnter={(e) => {
                    if (!isMediaActive()) {
                      e.currentTarget.style.background = navLinkHoverStyle.background;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isMediaActive()) {
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  {t('nav.media') || 'Media'}
                  <ChevronDown 
                    size={16} 
                    style={{ 
                      transition: 'transform 0.3s ease',
                      transform: mediaOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }} 
                  />
                </button>

                <AnimatePresence>
                  {mediaOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      style={mediaDropdownStyle}
                    >
                      {mediaLinks.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          onClick={() => setMediaOpen(false)}
                          style={dropdownLinkStyle(isActive(link.path))}
                          onMouseEnter={(e) => {
                            if (!isActive(link.path)) {
                              e.currentTarget.style.background = langOptionHoverStyle.background;
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!isActive(link.path)) {
                              e.currentTarget.style.background = 'transparent';
                            }
                          }}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Search, Language Selector & Mobile Menu */}
            <div className="flex items-center space-x-2">
              {/* Language Dropdown */}
              <div style={{ position: 'relative' }}>
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  style={langButtonStyle}
                  onMouseEnter={(e) => e.currentTarget.style.background = langButtonHoverStyle.background}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  <GiWireframeGlobe size={20} style={{ color: COLORS.primary.green600 }} />
                  <span className="hidden sm:inline" style={{ fontSize: '0.875rem', fontWeight: '500' }}>
                    {language.toUpperCase()}
                  </span>
                  <ChevronDown 
                    size={16} 
                    style={{ 
                      transition: 'transform 0.3s ease',
                      transform: langOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }} 
                  />
                </button>

                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      style={langDropdownStyle}
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            changeLanguage(lang.code);
                            setLangOpen(false);
                          }}
                          style={langOptionStyle(language === lang.code)}
                          onMouseEnter={(e) => {
                            if (language !== lang.code) {
                              e.currentTarget.style.background = langOptionHoverStyle.background;
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (language !== lang.code) {
                              e.currentTarget.style.background = 'transparent';
                            }
                          }}
                        >
                          {lang.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Search Button - Shows on all screen sizes */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowSearch(true)}
                style={searchButtonStyle}
                onMouseEnter={(e) => e.currentTarget.style.background = searchButtonHoverStyle.background}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                aria-label="Search"
              >
                <Search size={20} style={{ color: COLORS.primary.green600 }} />
              </motion.button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden"
                style={menuButtonStyle}
                onMouseEnter={(e) => e.currentTarget.style.background = menuButtonHoverStyle.background}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                {isOpen ? <X size={24} className='lg:hidden'/> : <CiMenuKebab size={24} className='lg:hidden'/>}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden"
                style={mobileMenuStyle}
              >
                <div style={mobileMenuContainerStyle}>
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      style={mobileLinkStyle(isActive(link.path))}
                      onMouseEnter={(e) => {
                        if (!isActive(link.path)) {
                          e.currentTarget.style.background = mobileLinkHoverStyle.background;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive(link.path)) {
                          e.currentTarget.style.background = 'transparent';
                        }
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}

                  {/* Mobile Media Section */}
                  <div style={mobileDropdownHeaderStyle}>
                    {t('nav.media') || 'Media'}
                  </div>
                  {mediaLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      style={mobileSubLinkStyle(isActive(link.path))}
                      onMouseEnter={(e) => {
                        if (!isActive(link.path)) {
                          e.currentTarget.style.background = mobileLinkHoverStyle.background;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive(link.path)) {
                          e.currentTarget.style.background = 'transparent';
                        }
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
};

export default Navbar;