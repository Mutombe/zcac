// Resources.jsx - Improved Mobile Responsive Version
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  BookOpen,
  Video,
  Download,
  ExternalLink,
  Play,
  Search,
  Filter,
  Sparkles,
  TrendingUp,
  Award,
} from "lucide-react";
import { COLORS, GRADIENTS, SHADOWS, RADIUS } from "./theme";
import { BsArrowUpCircle } from "react-icons/bs";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { GiVideoCamera } from "react-icons/gi";
import { GrCloudDownload } from "react-icons/gr";
import { FiPlayCircle } from "react-icons/fi";
import { LiaAwardSolid } from "react-icons/lia";
import { GiBookmarklet } from "react-icons/gi";



const Resources = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      title: "Policy Documents",
      icon: HiOutlineDocumentChartBar,
      gradient: GRADIENTS.greenService,
      color: COLORS.primary.green600,
      resources: [
        {
          name: "SI 48 of 2025 - Climate Change Regulations",
          type: "PDF",
          size: "2.4 MB",
          downloads: "1.2K",
        },
        { name: "Zimbabwe NDCs 2025", type: "PDF", size: "1.8 MB", downloads: "890" },
        { name: "National Adaptation Plan", type: "PDF", size: "3.2 MB", downloads: "2.1K" },
        { name: "Climate Change Management Bill", type: "PDF", size: "1.5 MB", downloads: "756" },
      ],
    },
    {
      title: "Technical Guides",
      icon: GiBookmarklet,
      gradient: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
      color: "#3B82F6",
      resources: [
        { name: "MRV Handbook for Practitioners", type: "PDF", size: "4.1 MB", downloads: "1.5K" },
        { name: "Project Development Guide", type: "PDF", size: "2.8 MB", downloads: "980" },
        { name: "FPIC Implementation Manual", type: "PDF", size: "2.2 MB", downloads: "650" },
        { name: "Carbon Finance for Communities", type: "PDF", size: "3.5 MB", downloads: "1.8K" },
      ],
    },
    {
      title: "Training Materials",
      icon: GiVideoCamera,
      gradient: "linear-gradient(135deg, #A855F7, #7C3AED)",
      color: "#A855F7",
      resources: [
        {
          name: "Green Skills Academy Curriculum",
          type: "ZIP",
          size: "15.6 MB",
          downloads: "456",
        },
        {
          name: "Climate Finance Webinar Series",
          type: "Video",
          size: "Online",
          downloads: "3.2K",
        },
        { name: "MRV Training Modules", type: "PDF", size: "8.4 MB", downloads: "890" },
        { name: "Community Engagement Toolkit", type: "PDF", size: "2.9 MB", downloads: "1.1K" },
      ],
    },
    {
      title: "Research & Reports",
      icon: LiaAwardSolid,
      gradient: GRADIENTS.yellowService,
      color: "#F59E0B",
      resources: [
        {
          name: "Zimbabwe Climate Action Report 2025",
          type: "PDF",
          size: "5.2 MB",
          downloads: "2.5K",
        },
        {
          name: "Carbon Market Opportunities Study",
          type: "PDF",
          size: "3.8 MB",
          downloads: "1.7K",
        },
        { name: "Impact Assessment Methodology", type: "PDF", size: "2.1 MB", downloads: "920" },
        { name: "Annual Impact Report 2024", type: "PDF", size: "4.5 MB", downloads: "3.1K" },
      ],
    },
  ];

const videos = [
  {
    title: "Understanding Carbon Markets in Africa",
    url: "https://www.youtube.com/embed/m5ych9oDtk0",
    duration: "12:45",
    views: "15K",
  },
  {
    title: "Climate Finance: Opportunities for Communities",
    url: "https://www.youtube.com/embed/_Y9vM4e9XaM",
    duration: "18:30",
    views: "22K",
  },
  {
    title: "MRV Systems Explained",
    url: "https://www.youtube.com/embed/vrpk0jGIuqI",
    duration: "15:20",
    views: "18K",
  },
  {
    title: "Regenerative Agriculture in Zimbabwe",
    url: "https://www.youtube.com/embed/jPjScq7eVXQ",
    duration: "20:15",
    views: "28K",
  },
];

  const externalLinks = [
    { 
      name: "UNFCCC", 
      url: "https://unfccc.int",
      description: "United Nations Framework Convention on Climate Change",
      logo_url: "/uncc-logo.jpg",
    },
    { 
      name: "African Development Bank", 
      url: "https://afdb.org",
      description: "Supporting Africa's development",
      logo_url: "/download.png",
    },
    { 
      name: "Global Green Growth Institute", 
      url: "https://gggi.org",
      description: "Green growth solutions worldwide",
      logo_url: "/gcci.png",
    },
    {
      name: "Climate Investment Funds",
      url: "https://climateinvestmentfunds.org",
      description: "Financing climate action",
      logo_url: "/cif.jpeg",
    },
  ];

  const filterCategories = ['All', 'Policy Documents', 'Technical Guides', 'Training Materials', 'Research & Reports'];

  const filteredCategories = activeCategory === 'All' 
    ? categories 
    : categories.filter(cat => cat.title === activeCategory);

  return (
    <div style={{ paddingTop: "6.5rem", background: COLORS.neutral.gray50 }}>
      {/* Hero Section with Background Image */}
      <section style={{
        position: 'relative',
        padding: '3rem 0',
        overflow: 'hidden',
      }}
      className="sm:py-20 md:py-24"
      >
        {/* Background Image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/33.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }} />

        {/* Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(135deg, ${COLORS.primary.green900}ee, ${COLORS.primary.green800}dd)`,
          zIndex: 1,
        }} />

        {/* Content */}
        <div className="container mx-auto px-4" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              padding: '0.5rem 1rem',
              borderRadius: RADIUS.full,
              marginBottom: '1.5rem',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
            className="sm:py-3 sm:px-6"
            >
              <Sparkles size={16} style={{ color: COLORS.accent.yellow400 }} className="sm:w-5 sm:h-5" />
              <span style={{ color: COLORS.neutral.white, fontWeight: '600', fontSize: '0.75rem' }} className="sm:text-sm">
                KNOWLEDGE HUB
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2rem, 8vw, 4.5rem)',
              fontWeight: '700',
              color: COLORS.neutral.white,
              marginBottom: '1rem',
              lineHeight: '1.1',
            }}
            className="sm:mb-6"
            >
              Resource Library
            </h1>

            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              color: 'rgba(255, 255, 255, 0.95)',
              marginBottom: '2rem',
              maxWidth: '42rem',
              margin: '0 auto 2rem',
              padding: '0 1rem',
            }}
            className="sm:mb-12"
            >
              Access our comprehensive library of policy documents, technical guides, training materials, and research reports
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {[
                { number: '250+', label: 'Resources', icon: HiOutlineDocumentChartBar },
                { number: '50K+', label: 'Downloads', icon: HiArrowTrendingUp },
                { number: '100+', label: 'Videos', icon: GiVideoCamera },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    padding: '1.25rem 1rem',
                    borderRadius: RADIUS.lg,
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                  className="sm:p-6"
                >
                  <stat.icon size={20} style={{ color: COLORS.accent.yellow400, margin: '0 auto 0.5rem' }} className="sm:w-6 sm:h-6" />
                  <h3 style={{
                    fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                    fontWeight: '700',
                    color: COLORS.neutral.white,
                    marginBottom: '0.25rem',
                  }}>
                    {stat.number}
                  </h3>
                  <p style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: 'rgba(255, 255, 255, 0.8)' }}>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <section style={{ padding: '1.5rem 0', background: COLORS.neutral.white }} className="sm:py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4 items-stretch">
            {/* Search */}
            <div style={{ position: 'relative', width: '100%' }}>
              <Search 
                size={18} 
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: COLORS.neutral.gray400,
                }}
                className="sm:w-5 sm:h-5"
              />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem 0.75rem 2.75rem',
                  borderRadius: RADIUS.lg,
                  border: `2px solid ${COLORS.neutral.gray200}`,
                  fontSize: '0.875rem',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                }}
                className="sm:py-4 sm:text-base"
                onFocus={(e) => {
                  e.target.style.borderColor = COLORS.primary.green500;
                  e.target.style.boxShadow = `0 0 0 3px ${COLORS.primary.green100}`;
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = COLORS.neutral.gray200;
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            {/* Filter Buttons */}
            <div style={{
              display: 'flex',
              gap: '0.5rem',
              overflowX: 'auto',
              paddingBottom: '0.5rem',
            }}
            className="hide-scrollbar"
            >
              {filterCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  style={{
                    padding: '0.625rem 1rem',
                    borderRadius: RADIUS.full,
                    border: 'none',
                    background: activeCategory === category 
                      ? GRADIENTS.primary 
                      : COLORS.neutral.gray100,
                    color: activeCategory === category 
                      ? COLORS.neutral.white 
                      : COLORS.neutral.gray700,
                    fontWeight: '600',
                    fontSize: '0.75rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    whiteSpace: 'nowrap',
                    boxShadow: activeCategory === category ? SHADOWS.md : 'none',
                  }}
                  className="sm:text-sm sm:py-3 sm:px-5"
                  onMouseEnter={(e) => {
                    if (activeCategory !== category) {
                      e.currentTarget.style.background = COLORS.neutral.gray200;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeCategory !== category) {
                      e.currentTarget.style.background = COLORS.neutral.gray100;
                    }
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Resources Section */}
      <section style={{ padding: '3rem 0', background: COLORS.neutral.gray50 }} className="sm:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: '2rem', textAlign: 'center' }}
            className="sm:mb-12"
          >
            <h2 style={{
              fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
              fontWeight: '700',
              color: COLORS.neutral.gray900,
              marginBottom: '0.75rem',
            }}
            className="sm:mb-4"
            >
              Video Library
            </h2>
            <p style={{
              fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)',
              color: COLORS.neutral.gray600,
            }}>
              Watch expert insights and training materials on climate action
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{
                  background: COLORS.neutral.white,
                  borderRadius: RADIUS.xl,
                  overflow: 'hidden',
                  boxShadow: SHADOWS.lg,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = SHADOWS['2xl'];
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = SHADOWS.lg;
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Video Embed */}
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                  <iframe
                    src={video.url}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </div>

                {/* Video Info */}
                <div style={{ padding: '1rem' }} className="sm:p-6">
                  <h3 style={{
                    fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)',
                    fontWeight: '700',
                    color: COLORS.neutral.gray900,
                    marginBottom: '0.5rem',
                  }}
                  className="sm:mb-3"
                  >
                    {video.title}
                  </h3>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    fontSize: '0.75rem',
                    color: COLORS.neutral.gray600,
                  }}
                  className="sm:text-sm sm:gap-4"
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <FiPlayCircle size={14} />
                      <span>{video.duration}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <HiArrowTrendingUp size={14} />
                      <span>{video.views} views</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories - Bento Grid */}
      <section style={{ padding: '3rem 0', background: COLORS.neutral.white }} className="sm:py-16">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6"
            >
              {filteredCategories.map((category, i) => (
                <ResourceCategoryCard key={i} category={category} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* External Links - Cards */}
      <section style={{
        padding: '3rem 0',
        background: `linear-gradient(135deg, ${COLORS.neutral.gray50}, ${COLORS.primary.green50})`,
      }}
      className="sm:py-16"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: '2rem', textAlign: 'center' }}
            className="sm:mb-12"
          >
            <h2 style={{
              fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
              fontWeight: '700',
              color: COLORS.neutral.gray900,
              marginBottom: '0.75rem',
            }}
            className="sm:mb-4"
            >
              Useful Links
            </h2>
            <p style={{
              fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)',
              color: COLORS.neutral.gray600,
            }}>
              Partner organizations and climate resources
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {externalLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  display: 'block',
                  background: COLORS.neutral.white,
                  borderRadius: RADIUS.xl,
                  padding: '1.5rem',
                  textAlign: 'center',
                  textDecoration: 'none',
                  boxShadow: SHADOWS.md,
                  transition: 'all 0.3s ease',
                  border: `2px solid ${COLORS.neutral.gray100}`,
                }}
                className="sm:p-8"
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = SHADOWS.xl;
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = COLORS.primary.green500;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = SHADOWS.md;
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = COLORS.neutral.gray100;
                }}
              >
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: '0.75rem',
                }}
                className="sm:mb-4"
                >
                  <img 
                    src={link.logo_url} 
                    alt={link.name} 
                    style={{ width: '64px', height: '64px', objectFit: 'contain', margin: '0 auto' }} 
                    className="sm:w-20 sm:h-20"
                  />
                </div>
                <h3 style={{
                  fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)',
                  fontWeight: '700',
                  color: COLORS.neutral.gray900,
                  marginBottom: '0.375rem',
                }}
                className="sm:mb-2"
                >
                  {link.name}
                </h3>
                <p style={{
                  fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                  color: COLORS.neutral.gray600,
                  marginBottom: '0.75rem',
                }}
                className="sm:mb-4"
                >
                  {link.description}
                </p>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: COLORS.primary.green600,
                  fontWeight: '600',
                  fontSize: '0.75rem',
                }}
                className="sm:text-sm"
                >
                  Visit Site
                  <ExternalLink size={12} className="sm:w-4 sm:h-4" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section style={{
        padding: '3rem 0',
        background: GRADIENTS.ctaGreen,
        position: 'relative',
        overflow: 'hidden',
      }}
      className="sm:py-20"
      >
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: RADIUS.full,
          filter: 'blur(80px)',
        }} />

        <div className="container mx-auto px-4" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 style={{
              fontSize: 'clamp(1.5rem, 6vw, 3rem)',
              fontWeight: '700',
              color: COLORS.neutral.white,
              marginBottom: '1rem',
            }}
            className="sm:mb-6"
            >
              Stay Updated on New Resources
            </h2>
            <p style={{
              fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '2rem',
            }}
            className="sm:mb-10"
            >
              Subscribe to our newsletter for the latest resources, updates, and opportunities
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              maxWidth: '500px',
              margin: '0 auto',
            }}
            className="sm:flex-row sm:gap-4"
            >
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  padding: '0.875rem 1.25rem',
                  borderRadius: RADIUS.lg,
                  border: 'none',
                  fontSize: '0.875rem',
                  outline: 'none',
                }}
                className="sm:text-base sm:py-4"
              />
              <button style={{
                padding: '0.875rem 1.75rem',
                background: COLORS.neutral.white,
                color: COLORS.primary.green600,
                border: 'none',
                borderRadius: RADIUS.lg,
                fontWeight: '700',
                fontSize: '0.875rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.3s ease',
              }}
              className="sm:text-base sm:py-4 sm:px-8"
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-12 h-12 sm:w-14 sm:h-14 sm:bottom-8 sm:right-8 bg-gradient-to-r from-green-600 to-primary-dark text-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition z-40"
      >
        <BsArrowUpCircle size={24} className="sm:w-7 sm:h-7" />
      </motion.button>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

// Resource Category Card Component
const ResourceCategoryCard = ({ category, index }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      style={{
        background: COLORS.neutral.white,
        borderRadius: RADIUS.xl,
        padding: '1.5rem',
        boxShadow: SHADOWS.lg,
        border: `2px solid ${COLORS.neutral.gray100}`,
      }}
      className="sm:p-8"
    >
      {/* Header */}
      <div style={{ marginBottom: '1.5rem' }} className="sm:mb-8">
        <div style={{
          width: '3rem',
          height: '3rem',
          borderRadius: RADIUS.lg,
          background: category.gradient,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '0.75rem',
        }}
        className="sm:w-16 sm:h-16 sm:mb-4"
        >
          <category.icon size={24} style={{ color: COLORS.neutral.white }} className="sm:w-7 sm:h-7" />
        </div>
        <h3 style={{
          fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
          fontWeight: '700',
          color: COLORS.neutral.gray900,
        }}>
          {category.title}
        </h3>
      </div>

      {/* Resources List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }} className="sm:gap-3">
        {category.resources.map((resource, j) => (
          <div
            key={j}
            onMouseEnter={() => setHoveredItem(j)}
            onMouseLeave={() => setHoveredItem(null)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.875rem',
              background: hoveredItem === j ? COLORS.neutral.gray50 : COLORS.neutral.gray50,
              borderRadius: RADIUS.lg,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: hoveredItem === j ? 'translateX(5px)' : 'translateX(0)',
              border: `2px solid ${hoveredItem === j ? category.color : 'transparent'}`,
            }}
            className="sm:p-4"
          >
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{
                fontWeight: '600',
                fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                color: hoveredItem === j ? category.color : COLORS.neutral.gray900,
                marginBottom: '0.25rem',
                transition: 'color 0.3s ease',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
              className="sm:whitespace-normal"
              >
                {resource.name}
              </p>
              <p style={{
                fontSize: 'clamp(0.6875rem, 1.75vw, 0.875rem)',
                color: COLORS.neutral.gray600,
              }}>
                {resource.type} • {resource.size} • {resource.downloads} downloads
              </p>
            </div>
            <GrCloudDownload 
              size={18} 
              style={{ 
                color: hoveredItem === j ? category.color : COLORS.neutral.gray400,
                transition: 'all 0.3s ease',
                transform: hoveredItem === j ? 'scale(1.2)' : 'scale(1)',
                flexShrink: 0,
                marginLeft: '0.5rem',
              }} 
              className="sm:w-5 sm:h-5"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Resources;