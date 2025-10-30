import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Download, Camera, Image as ImageIcon, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { COLORS, GRADIENTS, SHADOWS, RADIUS } from "./theme";
import { BsArrowUpCircle } from "react-icons/bs";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("all");
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200",
      category: "conservation",
      title: "Forest Conservation",
      description: "Protecting indigenous forests in Zimbabwe",
      size: "large",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200",
      category: "agriculture",
      title: "Sustainable Farming",
      description: "Training farmers in eco-friendly practices",
      size: "medium",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200",
      category: "energy",
      title: "Solar Energy",
      description: "Installing solar panels in rural communities",
      size: "small",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200",
      category: "water",
      title: "Water Conservation",
      description: "Building water harvesting systems",
      size: "medium",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200",
      category: "education",
      title: "Youth Programs",
      description: "Educating the next generation",
      size: "large",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200",
      category: "conservation",
      title: "Tree Planting",
      description: "Community tree planting initiatives",
      size: "small",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200",
      category: "agriculture",
      title: "Organic Farming",
      description: "Promoting chemical-free agriculture",
      size: "medium",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200",
      category: "energy",
      title: "Wind Energy",
      description: "Exploring renewable energy solutions",
      size: "large",
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200",
      category: "conservation",
      title: "Ecosystem Protection",
      description: "Preserving biodiversity",
      size: "small",
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200",
      category: "water",
      title: "River Restoration",
      description: "Cleaning and protecting water bodies",
      size: "medium",
    },
    {
      id: 11,
      url: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1200",
      category: "conservation",
      title: "Wildlife Protection",
      description: "Safeguarding endangered species",
      size: "large",
    },
    {
      id: 12,
      url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200",
      category: "education",
      title: "Community Workshops",
      description: "Building climate awareness",
      size: "small",
    },
  ];

  const categories = [
    { id: "all", name: "All", fullName: "All Photos", icon: ImageIcon },
    { id: "conservation", name: "Conservation", fullName: "Conservation", icon: Camera },
    { id: "agriculture", name: "Agriculture", fullName: "Agriculture", icon: Sparkles },
    { id: "energy", name: "Energy", fullName: "Energy", icon: ZoomIn },
    { id: "water", name: "Water", fullName: "Water", icon: Camera },
    { id: "education", name: "Education", fullName: "Education", icon: ImageIcon },
  ];

  const filteredImages =
    filter === "all" ? images : images.filter((img) => img.category === filter);

  // Navigation for lightbox
  const handleNextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const handlePrevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;
      if (e.key === 'ArrowRight') handleNextImage();
      if (e.key === 'ArrowLeft') handlePrevImage();
      if (e.key === 'Escape') setSelectedImage(null);
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage]);

  // Touch swipe for mobile
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      handleNextImage();
    }
    if (isRightSwipe) {
      handlePrevImage();
    }
  };

  return (
    <div style={{ minHeight: "100vh", paddingTop: "5rem", background: COLORS.neutral.gray50 }}>
      {/* Hero Section - Mobile Optimized */}
      <section style={{
        position: 'relative',
        padding: '6rem 0',
        overflow: 'hidden',
        background: `url('/36.jpg') no-repeat center/cover`,
      }}>

        {/* Color overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)', 
          backdropFilter: 'blur(10px)',

        }}/>
        {/* Animated Background - Fewer particles on mobile */}
        {!isMobile && (
          <div style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.1,
          }}>
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                style={{
                  position: 'absolute',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: COLORS.neutral.white,
                }}
              />
            ))}
          </div>
        )}

        <div className="container mx-auto px-4" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                padding: isMobile ? '0.5rem 1rem' : '0.75rem 1.5rem',
                borderRadius: RADIUS.full,
                marginBottom: isMobile ? '1rem' : '2rem',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}>
              <Sparkles size={isMobile ? 16 : 18} style={{ color: COLORS.accent.yellow400 }} />
              <span style={{ 
                color: COLORS.neutral.white, 
                fontWeight: '600', 
                fontSize: isMobile ? '0.75rem' : '0.875rem' 
              }}>
                PHOTO GALLERY
              </span>
            </motion.div>

            <h1 style={{
              fontSize: isMobile ? '2rem' : 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: '700',
              color: COLORS.neutral.white,
              marginBottom: isMobile ? '1rem' : '1.5rem',
              lineHeight: '1.1',
            }}>
              Climate Action <br />
              <span style={{
                background: `linear-gradient(to right, ${COLORS.accent.yellow400}, ${COLORS.accent.yellow200})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                In Pictures
              </span>
            </h1>

            <p style={{
              fontSize: isMobile ? '1rem' : '1.25rem',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: isMobile ? '2rem' : '3rem',
              padding: isMobile ? '0 1rem' : '0',
            }}>
              Moments from our climate action journey across Zimbabwe
            </p>

            {/* Stats - Stack on mobile */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
              gap: isMobile ? '0.75rem' : '1.5rem',
              maxWidth: isMobile ? '100%' : '42rem',
              margin: '0 auto',
            }}>
              {[
                { number: filteredImages.length, label: 'Photos' },
                { number: categories.length - 1, label: 'Categories' },
                { number: '500+', label: 'Stories' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    padding: isMobile ? '1rem' : '1.5rem 1rem',
                    borderRadius: RADIUS.lg,
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <h3 style={{
                    fontSize: isMobile ? '1.5rem' : '2rem',
                    fontWeight: '700',
                    color: COLORS.neutral.white,
                    marginBottom: '0.25rem',
                  }}>
                    {stat.number}
                  </h3>
                  <p style={{ 
                    fontSize: isMobile ? '0.75rem' : '0.875rem', 
                    color: 'rgba(255, 255, 255, 0.8)' 
                  }}>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters - Horizontal Scroll on Mobile */}
      <section style={{
        padding: isMobile ? '1rem 0' : '2rem 0',
        background: COLORS.neutral.white,
        position: 'sticky',
        top: '5rem',
        zIndex: 40,
        boxShadow: SHADOWS.md,
      }}>
        <div className="container mx-auto" style={{ padding: isMobile ? '0 0.5rem' : '0 1rem' }}>
          <div style={{
            display: 'flex',
            gap: isMobile ? '0.5rem' : '0.75rem',
            overflowX: 'auto',
            paddingBottom: '0.5rem',
            scrollBehavior: 'smooth',
          }}
          className="hide-scrollbar"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(cat.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: isMobile ? '0.625rem 1rem' : '0.875rem 1.5rem',
                  borderRadius: RADIUS.full,
                  border: 'none',
                  background: filter === cat.id 
                    ? GRADIENTS.primary 
                    : COLORS.neutral.gray100,
                  color: filter === cat.id 
                    ? COLORS.neutral.white 
                    : COLORS.neutral.gray700,
                  fontWeight: '600',
                  fontSize: isMobile ? '0.75rem' : '0.875rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap',
                  boxShadow: filter === cat.id ? SHADOWS.md : 'none',
                  flexShrink: 0,
                }}
              >
                <cat.icon size={isMobile ? 14 : 18} />
                {isMobile ? cat.name : cat.fullName}
                {filter === cat.id && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.3)',
                      padding: '0.125rem 0.5rem',
                      borderRadius: RADIUS.full,
                      fontSize: '0.75rem',
                    }}
                  >
                    {filteredImages.length}
                  </motion.span>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid - Responsive */}
      <section style={{ 
        padding: isMobile ? '2rem 0' : '4rem 0', 
        background: COLORS.neutral.gray50 
      }}>
        <div className="container mx-auto" style={{ padding: isMobile ? '0 0.75rem' : '0 1rem' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile 
                  ? '1fr' 
                  : 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: isMobile ? '1rem' : '1.5rem',
              }}
            >
              {filteredImages.map((image, idx) => (
                <GalleryCard
                  key={image.id}
                  image={image}
                  index={idx}
                  onClick={() => setSelectedImage(image)}
                  isMobile={isMobile}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Enhanced Lightbox - Mobile Optimized */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              background: 'rgba(0, 0, 0, 0.95)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: isMobile ? '1rem' : '2rem',
              backdropFilter: 'blur(10px)',
            }}
          >
            {/* Close Button - Mobile Friendly */}
            <motion.button
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              style={{
                position: 'absolute',
                top: isMobile ? '1rem' : '2rem',
                right: isMobile ? '1rem' : '2rem',
                width: isMobile ? '2.5rem' : '3rem',
                height: isMobile ? '2.5rem' : '3rem',
                background: COLORS.neutral.white,
                borderRadius: RADIUS.full,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'none',
                cursor: 'pointer',
                boxShadow: SHADOWS.xl,
                zIndex: 1000,
              }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={isMobile ? 20 : 24} style={{ color: COLORS.neutral.gray900 }} />
            </motion.button>

            {/* Navigation Buttons - Hide on Mobile (use swipe instead) */}
            {!isMobile && (
              <>
                <motion.button
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevImage();
                  }}
                  style={{
                    position: 'absolute',
                    left: '2rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '3rem',
                    height: '3rem',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: RADIUS.full,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: SHADOWS.xl,
                    zIndex: 1000,
                  }}
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft size={24} style={{ color: COLORS.neutral.gray900 }} />
                </motion.button>

                <motion.button
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextImage();
                  }}
                  style={{
                    position: 'absolute',
                    right: '2rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '3rem',
                    height: '3rem',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: RADIUS.full,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: SHADOWS.xl,
                    zIndex: 1000,
                  }}
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight size={24} style={{ color: COLORS.neutral.gray900 }} />
                </motion.button>
              </>
            )}

            {/* Swipe Indicator for Mobile */}
            {isMobile && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  position: 'absolute',
                  bottom: '6rem',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'rgba(255, 255, 255, 0.9)',
                  padding: '0.5rem 1rem',
                  borderRadius: RADIUS.full,
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: COLORS.neutral.gray700,
                  zIndex: 1000,
                  pointerEvents: 'none',
                }}
              >
                ← Swipe to navigate →
              </motion.div>
            )}

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                maxWidth: '100%',
                maxHeight: '100%',
                width: '100%',
              }}
            >
              <div style={{
                position: 'relative',
                borderRadius: RADIUS.xl,
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              }}>
                <motion.img
                  key={selectedImage.id}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: isMobile ? '60vh' : '70vh',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />

                {/* Image Info Overlay - Mobile Optimized */}
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.95), transparent)',
                    padding: isMobile ? '1.5rem 1rem' : '2rem',
                    color: COLORS.neutral.white,
                  }}
                >
                  <div style={{
                    display: 'inline-block',
                    padding: isMobile ? '0.25rem 0.75rem' : '0.5rem 1rem',
                    background: 'rgba(34, 197, 94, 0.9)',
                    borderRadius: RADIUS.full,
                    fontSize: isMobile ? '0.625rem' : '0.75rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    marginBottom: isMobile ? '0.5rem' : '1rem',
                  }}>
                    {selectedImage.category}
                  </div>
                  <h2 style={{
                    fontSize: isMobile ? '1.25rem' : '2rem',
                    fontWeight: '700',
                    marginBottom: '0.5rem',
                    lineHeight: '1.2',
                  }}>
                    {selectedImage.title}
                  </h2>
                  <p style={{
                    fontSize: isMobile ? '0.875rem' : '1.125rem',
                    opacity: 0.9,
                    marginBottom: isMobile ? '0.75rem' : '1rem',
                    lineHeight: '1.5',
                  }}>
                    {selectedImage.description}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      // Add download logic here
                    }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: isMobile ? '0.625rem 1.25rem' : '0.75rem 1.5rem',
                      background: COLORS.neutral.white,
                      color: COLORS.primary.green600,
                      border: 'none',
                      borderRadius: RADIUS.lg,
                      fontWeight: '700',
                      fontSize: isMobile ? '0.875rem' : '1rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = SHADOWS.xl;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = 'none';
                      }
                    }}
                  >
                    <Download size={isMobile ? 16 : 18} />
                    Download
                  </button>
                </motion.div>
              </div>

              {/* Image Counter */}
              <div style={{
                marginTop: '1rem',
                textAlign: 'center',
                color: COLORS.neutral.white,
                fontSize: isMobile ? '0.75rem' : '0.875rem',
                fontWeight: '600',
              }}>
                {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} / {filteredImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to Top - Mobile Friendly */}
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: isMobile ? 1 : 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          position: 'fixed',
          bottom: isMobile ? '1.5rem' : '2rem',
          right: isMobile ? '1.5rem' : '2rem',
          width: isMobile ? '2.75rem' : '3rem',
          height: isMobile ? '2.75rem' : '3rem',
          background: GRADIENTS.primary,
          color: COLORS.neutral.white,
          borderRadius: RADIUS.full,
          boxShadow: SHADOWS.xl,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          cursor: 'pointer',
          zIndex: 40,
        }}
      >
        <BsArrowUpCircle size={isMobile ? 24 : 28} />
      </motion.button>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        /* Mobile-specific styles */
        @media (max-width: 768px) {
          body {
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
    </div>
  );
};

// Gallery Card Component - Mobile Optimized
const GalleryCard = ({ image, index, onClick, isMobile }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ 
        delay: isMobile ? 0 : index * 0.05,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={!isMobile ? { y: -10 } : {}}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      style={{
        position: 'relative',
        cursor: 'pointer',
        overflow: 'hidden',
        borderRadius: RADIUS.xl,
        boxShadow: isHovered ? SHADOWS['2xl'] : SHADOWS.lg,
        transition: 'all 0.3s ease',
        aspectRatio: isMobile ? '1' : 'auto',
        minHeight: isMobile ? '280px' : '350px',
      }}
    >
      {/* Image */}
      <motion.img
        src={image.url}
        alt={image.title}
        animate={{
          scale: isHovered && !isMobile ? 1.1 : 1,
        }}
        transition={{ duration: 0.5 }}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      {/* Gradient Overlay - Always visible on mobile */}
      <motion.div
        animate={{
          opacity: isMobile ? 1 : (isHovered ? 1 : 0),
        }}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 70%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: isMobile ? '1rem' : '1.5rem',
        }}
      >
        <motion.div
          initial={isMobile ? {} : { y: 20, opacity: 0 }}
          animate={{ 
            y: isMobile ? 0 : (isHovered ? 0 : 20),
            opacity: isMobile ? 1 : (isHovered ? 1 : 0),
          }}
          transition={{ delay: isMobile ? 0 : 0.1 }}
        >
          <div style={{
            display: 'inline-block',
            padding: isMobile ? '0.25rem 0.625rem' : '0.25rem 0.75rem',
            background: GRADIENTS.primary,
            borderRadius: RADIUS.full,
            fontSize: isMobile ? '0.625rem' : '0.75rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            color: COLORS.neutral.white,
            marginBottom: isMobile ? '0.5rem' : '0.75rem',
          }}>
            {image.category}
          </div>
          <h3 style={{
            fontSize: isMobile ? '1rem' : '1.25rem',
            fontWeight: '700',
            color: COLORS.neutral.white,
            marginBottom: '0.25rem',
            lineHeight: '1.2',
          }}>
            {image.title}
          </h3>
          <p style={{
            fontSize: isMobile ? '0.75rem' : '0.875rem',
            color: 'rgba(255, 255, 255, 0.9)',
            lineHeight: '1.4',
          }}>
            {image.description}
          </p>
        </motion.div>
      </motion.div>

      {/* Zoom Icon - Desktop only */}
      {!isMobile && (
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8,
          }}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            width: '2.5rem',
            height: '2.5rem',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            borderRadius: RADIUS.full,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: SHADOWS.lg,
          }}
        >
          <ZoomIn size={18} style={{ color: COLORS.primary.green600 }} />
        </motion.div>
      )}

      {/* Glowing Border Effect - Desktop only */}
      {!isMobile && (
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: RADIUS.xl,
            boxShadow: `inset 0 0 0 2px ${COLORS.primary.green400}`,
            pointerEvents: 'none',
          }}
        />
      )}
    </motion.div>
  );
};

export default Gallery;