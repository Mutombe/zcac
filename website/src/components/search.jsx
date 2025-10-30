import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, FileText, Phone, Mail, Leaf, BookOpen, Users, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COLORS, RADIUS, SHADOWS } from './theme';

const SearchModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef(null);

  // Searchable content for CACZ
  const searchableContent = [
    {
      title: 'Home',
      path: '/',
      description: 'Climate Action Center Zimbabwe - Leading climate action and sustainability',
      keywords: ['home', 'main', 'landing', 'start', 'cacz', 'climate action'],
      category: 'Page'
    },
    {
      title: 'About Us',
      path: '/about',
      description: 'Learn about our mission and vision for climate action in Zimbabwe',
      keywords: ['about', 'who we are', 'mission', 'vision', 'team', 'organization'],
      category: 'Page'
    },
    {
      title: 'What We Do',
      path: '/what-we-do',
      description: 'Discover our comprehensive climate solutions and services',
      keywords: ['what we do', 'services', 'solutions', 'offerings', 'programs'],
      category: 'Service'
    },
    {
      title: 'Projects',
      path: '/projects',
      description: 'Explore our climate action projects across Zimbabwe',
      keywords: ['projects', 'initiatives', 'programs', 'portfolio', 'work'],
      category: 'Service'
    },
    {
      title: 'Blog',
      path: '/blog',
      description: 'Latest insights and news on climate action',
      keywords: ['blog', 'news', 'articles', 'updates', 'insights', 'stories'],
      category: 'Page'
    },
    {
      title: 'Resources',
      path: '/resources',
      description: 'Educational resources and climate action materials',
      keywords: ['resources', 'downloads', 'materials', 'tools', 'guides', 'documents'],
      category: 'Resource'
    },
    {
      title: 'FAQs',
      path: '/faqs',
      description: 'Frequently asked questions about climate action',
      keywords: ['faq', 'questions', 'answers', 'help', 'support', 'information'],
      category: 'Page'
    },
    {
      title: 'Contact',
      path: '/contact',
      description: 'Get in touch with Climate Action Center Zimbabwe',
      keywords: ['contact', 'reach', 'location', 'address', 'phone', 'email'],
      category: 'Page'
    },
    {
      title: 'Policy Advisory',
      path: '/what-we-do',
      description: 'Expert guidance on environmental policy and climate legislation',
      keywords: ['policy', 'advisory', 'guidance', 'legislation', 'regulation'],
      category: 'Service'
    },
    {
      title: 'MRV & Verification',
      path: '/what-we-do',
      description: 'Monitoring, reporting, and verification services',
      keywords: ['mrv', 'verification', 'monitoring', 'reporting', 'validation'],
      category: 'Service'
    },
    {
      title: 'Project Incubation',
      path: '/projects',
      description: 'Support for bankable climate projects',
      keywords: ['incubation', 'project development', 'support', 'funding'],
      category: 'Service'
    },
    {
      title: 'Green Skills Academy',
      path: '/what-we-do',
      description: 'Training and certification in climate action',
      keywords: ['training', 'academy', 'skills', 'certification', 'education'],
      category: 'Service'
    },
    {
      title: 'Phone: +263 785 948 128',
      path: 'tel:+263785948128',
      description: 'Call us for inquiries and support',
      keywords: ['phone', 'call', 'telephone', 'contact', 'reach'],
      category: 'Contact',
      isExternal: true
    },
    {
      title: 'Email: info@cacz.co.zw',
      path: 'mailto:info@cacz.co.zw',
      description: 'Send us an email for inquiries',
      keywords: ['email', 'mail', 'message', 'contact', 'write'],
      category: 'Contact',
      isExternal: true
    },
    {
      title: 'Climate Solutions',
      path: '/what-we-do',
      description: 'Comprehensive climate solutions for lasting impact',
      keywords: ['climate', 'solutions', 'sustainability', 'environment'],
      category: 'Service'
    }
  ];

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Handle search
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const timer = setTimeout(() => {
      const query = searchQuery.toLowerCase();
      const results = searchableContent.filter(item => {
        const titleMatch = item.title.toLowerCase().includes(query);
        const descriptionMatch = item.description.toLowerCase().includes(query);
        const keywordsMatch = item.keywords.some(keyword => 
          keyword.toLowerCase().includes(query)
        );
        return titleMatch || descriptionMatch || keywordsMatch;
      });
      setSearchResults(results);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleClose = () => {
    setSearchQuery('');
    setSearchResults([]);
    onClose();
  };

  const handleResultClick = () => {
    handleClose();
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Service':
        return <Leaf className="w-4 h-4" />;
      case 'Resource':
        return <BookOpen className="w-4 h-4" />;
      case 'Contact':
        return <Phone className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Service':
        return `bg-green-50 text-green-700 group-hover:bg-green-100`;
      case 'Resource':
        return `bg-yellow-50 text-yellow-700 group-hover:bg-yellow-100`;
      case 'Contact':
        return `bg-blue-50 text-blue-700 group-hover:bg-blue-100`;
      default:
        return `bg-gray-50 text-gray-700 group-hover:bg-gray-100`;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 "
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 px-4 pt-20"
          >
            <div 
              className="bg-white overflow-hidden"
              style={{
                borderRadius: RADIUS.xl,
                boxShadow: SHADOWS['2xl'],
                border: `2px solid ${COLORS.primary.green200}`,
              }}
            >
              {/* Search Input */}
              <div 
                className="flex items-center gap-3 p-4 border-b"
                style={{
                  background: `linear-gradient(to right, ${COLORS.primary.green50}, ${COLORS.accent.yellow50})`,
                  borderColor: COLORS.primary.green100,
                }}
              >
                <Search 
                  className="w-5 h-5 flex-shrink-0" 
                  style={{ color: COLORS.primary.green600 }}
                />
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for services, resources, or information..."
                  className="flex-1 outline-none text-gray-900 placeholder-gray-500 text-lg bg-transparent"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="p-1 hover:bg-white rounded-full transition-colors"
                  >
                    <X className="w-4 h-4 text-gray-500" />
                  </button>
                )}
                <button
                  onClick={handleClose}
                  className="p-2 rounded-lg transition-colors"
                  style={{
                    background: 'rgba(255, 255, 255, 0.8)',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = COLORS.neutral.white}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)'}
                >
                  <X className="w-5 h-5" style={{ color: COLORS.primary.green600 }} />
                </button>
              </div>

              {/* Search Results */}
              <div className="max-h-[60vh] overflow-y-auto">
                {searchQuery.trim() === '' ? (
                  <div className="p-8 text-center">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{
                        background: `linear-gradient(135deg, ${COLORS.primary.green100}, ${COLORS.accent.yellow100})`,
                      }}
                    >
                      <Leaf className="w-8 h-8" style={{ color: COLORS.primary.green600 }} />
                    </div>
                    <p className="font-semibold mb-2" style={{ color: COLORS.neutral.gray700 }}>
                      Start searching...
                    </p>
                    <p className="text-sm" style={{ color: COLORS.neutral.gray500 }}>
                      Try searching for "climate", "projects", "training", or "resources"
                    </p>
                  </div>
                ) : isSearching ? (
                  <div className="p-8 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      {[0, 0.2, 0.4].map((delay, index) => (
                        <motion.div
                          key={index}
                          animate={{
                            opacity: [0.3, 1, 0.3],
                            scale: [0.8, 1.3, 0.8],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: delay,
                            ease: "easeInOut",
                          }}
                          className="w-2 h-2 rounded-full"
                          style={{
                            background: `linear-gradient(to right, ${COLORS.primary.green500}, ${COLORS.accent.yellow500})`,
                          }}
                        />
                      ))}
                    </div>
                    <p className="text-sm mt-3" style={{ color: COLORS.neutral.gray600 }}>Searching...</p>
                  </div>
                ) : searchResults.length > 0 ? (
                  <div className="py-2">
                    {searchResults.map((result, index) => (
                      result.isExternal ? (
                        <a
                          key={index}
                          href={result.path}
                          onClick={handleResultClick}
                          className="flex items-center gap-4 p-4 transition-colors duration-200 group border-b border-gray-100 last:border-0"
                          style={{
                            background: COLORS.neutral.white,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = `linear-gradient(to right, ${COLORS.primary.green50}, ${COLORS.accent.yellow50})`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = COLORS.neutral.white;
                          }}
                        >
                          <div 
                            className={`p-2.5 rounded-lg transition-colors ${getCategoryColor(result.category)}`}
                          >
                            {getCategoryIcon(result.category)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 
                                className="text-sm font-bold truncate"
                                style={{ color: COLORS.primary.green700 }}
                              >
                                {result.title}
                              </h3>
                              <span 
                                className="px-2 py-0.5 text-xs font-semibold rounded-full flex-shrink-0"
                                style={{
                                  background: COLORS.accent.yellow100,
                                  color: COLORS.primary.green700,
                                }}
                              >
                                {result.category}
                              </span>
                            </div>
                            <p className="text-xs line-clamp-1" style={{ color: COLORS.neutral.gray600 }}>
                              {result.description}
                            </p>
                          </div>
                          <ArrowRight 
                            className="w-4 h-4 flex-shrink-0 transition-colors" 
                            style={{ color: COLORS.neutral.gray400 }}
                          />
                        </a>
                      ) : (
                        <Link
                          key={index}
                          to={result.path}
                          onClick={handleResultClick}
                          className="flex items-center gap-4 p-4 transition-colors duration-200 group border-b border-gray-100 last:border-0"
                          style={{
                            background: COLORS.neutral.white,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = `linear-gradient(to right, ${COLORS.primary.green50}, ${COLORS.accent.yellow50})`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = COLORS.neutral.white;
                          }}
                        >
                          <div 
                            className={`p-2.5 rounded-lg transition-colors ${getCategoryColor(result.category)}`}
                          >
                            {getCategoryIcon(result.category)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 
                                className="text-sm font-bold truncate"
                                style={{ color: COLORS.primary.green700 }}
                              >
                                {result.title}
                              </h3>
                              <span 
                                className="px-2 py-0.5 text-xs font-semibold rounded-full flex-shrink-0"
                                style={{
                                  background: COLORS.accent.yellow100,
                                  color: COLORS.primary.green700,
                                }}
                              >
                                {result.category}
                              </span>
                            </div>
                            <p className="text-xs line-clamp-1" style={{ color: COLORS.neutral.gray600 }}>
                              {result.description}
                            </p>
                          </div>
                          <ArrowRight 
                            className="w-4 h-4 flex-shrink-0 transition-colors group-hover:text-green-600" 
                            style={{ color: COLORS.neutral.gray400 }}
                          />
                        </Link>
                      )
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3"
                      style={{ background: COLORS.neutral.gray100 }}
                    >
                      <Search className="w-8 h-8" style={{ color: COLORS.neutral.gray400 }} />
                    </div>
                    <p className="font-semibold mb-1" style={{ color: COLORS.neutral.gray700 }}>
                      No results found
                    </p>
                    <p className="text-sm" style={{ color: COLORS.neutral.gray500 }}>
                      Try searching with different keywords
                    </p>
                  </div>
                )}
              </div>

              {/* Footer */}
              {searchQuery.trim() === '' && (
                <div 
                  className="border-t px-4 py-3"
                  style={{
                    borderColor: COLORS.primary.green100,
                    background: `linear-gradient(to right, ${COLORS.primary.green50}30, ${COLORS.accent.yellow50}30)`,
                  }}
                >
                  <div className="flex items-center justify-between text-xs" style={{ color: COLORS.neutral.gray600 }}>
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <kbd 
                          className="px-2 py-1 rounded text-xs font-semibold"
                          style={{
                            background: COLORS.neutral.white,
                            border: `2px solid ${COLORS.primary.green200}`,
                            color: COLORS.primary.green700,
                          }}
                        >
                          ↵
                        </kbd>
                        to select
                      </span>
                      <span className="flex items-center gap-1">
                        <kbd 
                          className="px-2 py-1 rounded text-xs font-semibold"
                          style={{
                            background: COLORS.neutral.white,
                            border: `2px solid ${COLORS.primary.green200}`,
                            color: COLORS.primary.green700,
                          }}
                        >
                          ESC
                        </kbd>
                        to close
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;