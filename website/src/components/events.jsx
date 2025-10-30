import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  ArrowRight, 
  Sparkles, 
  Filter,
  Grid,
  List,
  CheckCircle,
  AlertCircle,
  Star,
} from "lucide-react";
import { toast } from "sonner";
import { BsArrowUpCircle } from "react-icons/bs";
import { COLORS, GRADIENTS, SHADOWS, RADIUS } from "./theme";

const Events = () => {
  const [view, setView] = useState("upcoming");
  const [layout, setLayout] = useState("grid"); // grid or list
  const [selectedCategory, setSelectedCategory] = useState("all");
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

  const events = [
    {
      id: 1,
      title: "Community Tree Planting Drive",
      date: "2024-11-15",
      time: "09:00 AM",
      location: "Harare Botanical Gardens",
      attendees: 150,
      capacity: 200,
      category: "conservation",
      status: "upcoming",
      featured: true,
      description:
        "Join us for a massive tree planting initiative. We aim to plant 1,000 trees in one day!",
      image:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800",
    },
    {
      id: 2,
      title: "Climate Action Youth Summit",
      date: "2024-11-20",
      time: "10:00 AM",
      location: "National Sports Stadium",
      attendees: 500,
      capacity: 600,
      category: "education",
      status: "upcoming",
      featured: true,
      description:
        "Empowering young leaders to drive climate action in their communities.",
      image:
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800",
    },
    {
      id: 3,
      title: "Sustainable Farming Workshop",
      date: "2024-11-25",
      time: "08:00 AM",
      location: "Mashonaland Agricultural Center",
      attendees: 75,
      capacity: 100,
      category: "agriculture",
      status: "upcoming",
      featured: false,
      description:
        "Learn climate-smart agricultural practices from expert farmers.",
      image:
        "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800",
    },
    {
      id: 4,
      title: "Solar Energy Installation Training",
      date: "2024-10-28",
      time: "09:00 AM",
      location: "Technical Institute, Bulawayo",
      attendees: 40,
      capacity: 40,
      category: "energy",
      status: "past",
      featured: false,
      description:
        "Hands-on training for solar panel installation and maintenance.",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800",
    },
    {
      id: 5,
      title: "Water Conservation Seminar",
      date: "2024-10-20",
      time: "02:00 PM",
      location: "Civic Center, Harare",
      attendees: 200,
      capacity: 250,
      category: "water",
      status: "past",
      featured: false,
      description:
        "Expert talks on water scarcity and conservation strategies.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
    },
    {
      id: 6,
      title: "Green Business Forum",
      date: "2024-12-05",
      time: "01:00 PM",
      location: "Meikles Hotel, Harare",
      attendees: 120,
      capacity: 150,
      category: "business",
      status: "upcoming",
      featured: false,
      description:
        "Networking and learning opportunities for green entrepreneurs.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
    },
  ];

  const categories = [
    { id: "all", name: "All", color: COLORS.neutral.gray500 },
    { id: "conservation", name: "Conservation", color: COLORS.primary.green600 },
    { id: "education", name: "Education", color: COLORS.accent.yellow600 },
    { id: "agriculture", name: "Agriculture", color: "#10B981" },
    { id: "energy", name: "Energy", color: "#3B82F6" },
    { id: "water", name: "Water", color: "#06B6D4" },
    { id: "business", name: "Business", color: "#8B5CF6" },
  ];

  const filteredEvents = events
    .filter((event) => event.status === view)
    .filter((event) => selectedCategory === "all" || event.category === selectedCategory);

  const handleRegister = (eventTitle) => {
    toast.success(`Successfully registered for ${eventTitle}!`);
  };

  const getAvailabilityColor = (attendees, capacity) => {
    const percentage = (attendees / capacity) * 100;
    if (percentage >= 90) return COLORS.accent.red500;
    if (percentage >= 70) return COLORS.accent.yellow500;
    return COLORS.primary.green500;
  };

  return (
    <div style={{ minHeight: "100vh", paddingTop: "5rem", background: COLORS.neutral.gray50 }}>
      {/* Enhanced Hero Section */}
      <section style={{
        position: 'relative',
        padding: isMobile ? '4rem 0' : '6rem 0',
        overflow: 'hidden',
        background: `linear-gradient(135deg, ${COLORS.primary.green900}, ${COLORS.primary.green700}, ${COLORS.accent.yellow600})`,
      }}>
        {/* Animated Background Pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.1,
          backgroundImage: `radial-gradient(circle at 20px 20px, ${COLORS.neutral.white} 2px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />

        {/* Floating Particles */}
        {!isMobile && (
          <div style={{ position: 'absolute', inset: 0 }}>
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -40, 0],
                  opacity: [0.2, 0.5, 0.2],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                style={{
                  position: 'absolute',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${10 + Math.random() * 20}px`,
                  height: `${10 + Math.random() * 20}px`,
                  borderRadius: RADIUS.full,
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
            {/* Badge */}
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
                EVENTS & WORKSHOPS
              </span>
            </motion.div>

            {/* Heading */}
            <h1 style={{
              fontSize: isMobile ? '2rem' : 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: '700',
              color: COLORS.neutral.white,
              marginBottom: isMobile ? '1rem' : '1.5rem',
              lineHeight: '1.1',
            }}>
              Join the <br />
              <span style={{
                background: `linear-gradient(to right, ${COLORS.accent.yellow400}, ${COLORS.accent.yellow200})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Climate Action
              </span>
            </h1>

            <p style={{
              fontSize: isMobile ? '1rem' : '1.25rem',
              color: 'rgba(255, 255, 255, 0.95)',
              marginBottom: isMobile ? '2rem' : '3rem',
            }}>
              Join us in creating positive environmental change through community events
            </p>

            {/* Quick Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
              gap: isMobile ? '0.75rem' : '1rem',
              maxWidth: '56rem',
              margin: '0 auto',
            }}>
              {[
                { label: 'Total Events', value: events.length, icon: Calendar },
                { label: 'Upcoming', value: events.filter(e => e.status === 'upcoming').length, icon: Clock },
                { label: 'Attendees', value: '1000+', icon: Users },
                { label: 'Featured', value: events.filter(e => e.featured).length, icon: Star },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    padding: isMobile ? '1rem' : '1.5rem',
                    borderRadius: RADIUS.lg,
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <stat.icon size={isMobile ? 20 : 24} style={{ 
                    color: COLORS.accent.yellow400, 
                    margin: '0 auto 0.5rem' 
                  }} />
                  <h3 style={{
                    fontSize: isMobile ? '1.25rem' : '1.75rem',
                    fontWeight: '700',
                    color: COLORS.neutral.white,
                    marginBottom: '0.25rem',
                  }}>
                    {stat.value}
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

      {/* Filters and View Controls - Sticky */}
      <section style={{
        padding: isMobile ? '1rem 0' : '1.5rem 0',
        background: COLORS.neutral.white,
        position: 'sticky',
        top: '5rem',
        zIndex: 40,
        boxShadow: SHADOWS.lg,
      }}>
        <div className="container mx-auto px-4">
          {/* View Toggle */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: isMobile ? '1rem' : '1.5rem',
            flexWrap: 'wrap',
            gap: '1rem',
          }}>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setView("upcoming")}
                style={{
                  padding: isMobile ? '0.625rem 1.25rem' : '0.75rem 1.5rem',
                  borderRadius: RADIUS.full,
                  fontWeight: '600',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  transition: 'all 0.3s ease',
                  border: 'none',
                  cursor: 'pointer',
                  background: view === "upcoming" ? GRADIENTS.primary : COLORS.neutral.gray100,
                  color: view === "upcoming" ? COLORS.neutral.white : COLORS.neutral.gray700,
                  boxShadow: view === "upcoming" ? SHADOWS.lg : 'none',
                }}
              >
                Upcoming
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setView("past")}
                style={{
                  padding: isMobile ? '0.625rem 1.25rem' : '0.75rem 1.5rem',
                  borderRadius: RADIUS.full,
                  fontWeight: '600',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  transition: 'all 0.3s ease',
                  border: 'none',
                  cursor: 'pointer',
                  background: view === "past" ? GRADIENTS.primary : COLORS.neutral.gray100,
                  color: view === "past" ? COLORS.neutral.white : COLORS.neutral.gray700,
                  boxShadow: view === "past" ? SHADOWS.lg : 'none',
                }}
              >
                Past Events
              </motion.button>
            </div>

            {/* Layout Toggle - Desktop only */}
            {!isMobile && (
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={() => setLayout("grid")}
                  style={{
                    padding: '0.75rem',
                    borderRadius: RADIUS.lg,
                    border: 'none',
                    cursor: 'pointer',
                    background: layout === "grid" ? COLORS.primary.green100 : COLORS.neutral.gray100,
                    color: layout === "grid" ? COLORS.primary.green600 : COLORS.neutral.gray600,
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setLayout("list")}
                  style={{
                    padding: '0.75rem',
                    borderRadius: RADIUS.lg,
                    border: 'none',
                    cursor: 'pointer',
                    background: layout === "list" ? COLORS.primary.green100 : COLORS.neutral.gray100,
                    color: layout === "list" ? COLORS.primary.green600 : COLORS.neutral.gray600,
                    transition: 'all 0.3s ease',
                  }}
                >
                  <List size={20} />
                </button>
              </div>
            )}
          </div>

          {/* Category Filters */}
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            overflowX: 'auto',
            paddingBottom: '0.5rem',
          }}
          className="hide-scrollbar"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: isMobile ? '0.5rem 1rem' : '0.625rem 1.25rem',
                  borderRadius: RADIUS.full,
                  border: `2px solid ${selectedCategory === cat.id ? cat.color : 'transparent'}`,
                  background: selectedCategory === cat.id 
                    ? `${cat.color}15` 
                    : COLORS.neutral.gray100,
                  color: selectedCategory === cat.id ? cat.color : COLORS.neutral.gray700,
                  fontWeight: '600',
                  fontSize: isMobile ? '0.75rem' : '0.875rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                {cat.name}
                {selectedCategory === cat.id && (
                  <CheckCircle size={14} />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Display */}
      <section style={{ 
        padding: isMobile ? '2rem 0' : '4rem 0', 
        background: COLORS.neutral.gray50 
      }}>
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            {filteredEvents.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  textAlign: 'center',
                  padding: '4rem 2rem',
                  background: COLORS.neutral.white,
                  borderRadius: RADIUS.xl,
                  boxShadow: SHADOWS.lg,
                }}
              >
                <AlertCircle 
                  size={48} 
                  style={{ 
                    color: COLORS.neutral.gray400,
                    margin: '0 auto 1rem',
                  }} 
                />
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: COLORS.neutral.gray700,
                  marginBottom: '0.5rem',
                }}>
                  No Events Found
                </h3>
                <p style={{ color: COLORS.neutral.gray500 }}>
                  Try adjusting your filters
                </p>
              </motion.div>
            ) : (
              <motion.div
                key={`${layout}-${selectedCategory}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 
                    layout === "list" || isMobile
                      ? '1fr' 
                      : 'repeat(auto-fill, minmax(350px, 1fr))',
                  gap: isMobile ? '1.5rem' : '2rem',
                }}
              >
                {filteredEvents.map((event, idx) => (
                  layout === "list" || isMobile ? (
                    <EventListCard 
                      key={event.id}
                      event={event}
                      index={idx}
                      onRegister={handleRegister}
                      getAvailabilityColor={getAvailabilityColor}
                      isMobile={isMobile}
                    />
                  ) : (
                    <EventGridCard 
                      key={event.id}
                      event={event}
                      index={idx}
                      onRegister={handleRegister}
                      getAvailabilityColor={getAvailabilityColor}
                    />
                  )
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: isMobile ? '3rem 0' : '5rem 0',
        background: GRADIENTS.ctaGreen,
        position: 'relative',
        overflow: 'hidden',
      }}>
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
            style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto' }}
          >
            <h2 style={{
              fontSize: isMobile ? '1.75rem' : 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '700',
              color: COLORS.neutral.white,
              marginBottom: '1.5rem',
            }}>
              Want to Organize an Event?
            </h2>
            <p style={{
              fontSize: isMobile ? '1rem' : '1.125rem',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '2.5rem',
            }}>
              Partner with us to host climate action events in your community
            </p>
            <motion.button
              whileHover={{ scale: isMobile ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: isMobile ? '0.875rem 2rem' : '1rem 2.5rem',
                background: COLORS.neutral.white,
                color: COLORS.primary.green600,
                border: 'none',
                borderRadius: RADIUS.full,
                fontWeight: '700',
                fontSize: isMobile ? '1rem' : '1.125rem',
                cursor: 'pointer',
                boxShadow: SHADOWS.xl,
              }}
            >
              Contact Us
              <ArrowRight size={isMobile ? 18 : 20} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Scroll to Top */}
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
      `}</style>
    </div>
  );
};

// Event Grid Card Component
const EventGridCard = ({ event, index, onRegister, getAvailabilityColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        background: COLORS.neutral.white,
        borderRadius: RADIUS.xl,
        overflow: 'hidden',
        boxShadow: isHovered ? SHADOWS['2xl'] : SHADOWS.lg,
        transition: 'all 0.3s ease',
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
        <motion.img
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.5 }}
          src={event.image}
          alt={event.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        
        {/* Badges */}
        <div style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          right: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {event.featured && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                padding: '0.375rem 0.75rem',
                background: 'rgba(251, 191, 36, 0.95)',
                backdropFilter: 'blur(10px)',
                borderRadius: RADIUS.full,
                fontSize: '0.75rem',
                fontWeight: '700',
                color: COLORS.neutral.gray900,
              }}>
                <Star size={12} />
                Featured
              </div>
            )}
            <div style={{
              padding: '0.375rem 0.75rem',
              background: event.status === 'upcoming' 
                ? 'rgba(34, 197, 94, 0.95)' 
                : 'rgba(156, 163, 175, 0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: RADIUS.full,
              fontSize: '0.75rem',
              fontWeight: '700',
              color: COLORS.neutral.white,
              textTransform: 'capitalize',
            }}>
              {event.status}
            </div>
          </div>
        </div>

        {/* Gradient Overlay */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '50%',
          background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
        }} />
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem' }}>
        <div style={{
          display: 'inline-block',
          padding: '0.25rem 0.75rem',
          background: `${categories.find(c => c.id === event.category)?.color}20`,
          color: categories.find(c => c.id === event.category)?.color,
          borderRadius: RADIUS.full,
          fontSize: '0.75rem',
          fontWeight: '700',
          textTransform: 'uppercase',
          marginBottom: '1rem',
        }}>
          {event.category}
        </div>

        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: '700',
          color: COLORS.neutral.gray900,
          marginBottom: '0.75rem',
          lineHeight: '1.3',
        }}>
          {event.title}
        </h3>

        <p style={{
          fontSize: '0.875rem',
          color: COLORS.neutral.gray600,
          marginBottom: '1rem',
          lineHeight: '1.5',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {event.description}
        </p>

        {/* Event Details */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '0.75rem',
          marginBottom: '1.5rem',
          padding: '1rem',
          background: COLORS.neutral.gray50,
          borderRadius: RADIUS.lg,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Calendar size={16} style={{ color: COLORS.primary.green600 }} />
            <span style={{ fontSize: '0.75rem', color: COLORS.neutral.gray700 }}>
              {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Clock size={16} style={{ color: COLORS.primary.green600 }} />
            <span style={{ fontSize: '0.75rem', color: COLORS.neutral.gray700 }}>
              {event.time}
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', gridColumn: '1 / -1' }}>
            <MapPin size={16} style={{ color: COLORS.primary.green600 }} />
            <span style={{ 
              fontSize: '0.75rem', 
              color: COLORS.neutral.gray700,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}>
              {event.location}
            </span>
          </div>
        </div>

        {/* Availability Bar */}
        {event.status === 'upcoming' && (
          <div style={{ marginBottom: '1rem' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '0.5rem',
            }}>
              <span style={{ fontSize: '0.75rem', color: COLORS.neutral.gray600 }}>
                Seats Available
              </span>
              <span style={{ 
                fontSize: '0.75rem', 
                fontWeight: '600',
                color: getAvailabilityColor(event.attendees, event.capacity),
              }}>
                {event.capacity - event.attendees} / {event.capacity}
              </span>
            </div>
            <div style={{
              height: '6px',
              background: COLORS.neutral.gray200,
              borderRadius: RADIUS.full,
              overflow: 'hidden',
            }}>
              <div style={{
                height: '100%',
                width: `${(event.attendees / event.capacity) * 100}%`,
                background: getAvailabilityColor(event.attendees, event.capacity),
                borderRadius: RADIUS.full,
                transition: 'width 0.3s ease',
              }} />
            </div>
          </div>
        )}

        {/* Register Button */}
        {event.status === 'upcoming' && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onRegister(event.title)}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.875rem',
              background: GRADIENTS.primary,
              color: COLORS.neutral.white,
              border: 'none',
              borderRadius: RADIUS.lg,
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            Register Now
            <ArrowRight size={18} />
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

// Event List Card Component
const EventListCard = ({ event, index, onRegister, getAvailabilityColor, isMobile }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={!isMobile ? { x: 10 } : {}}
      style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '300px 1fr',
        gap: isMobile ? '0' : '2rem',
        background: COLORS.neutral.white,
        borderRadius: RADIUS.xl,
        overflow: 'hidden',
        boxShadow: SHADOWS.lg,
        transition: 'all 0.3s ease',
      }}
    >
      {/* Image */}
      <div style={{ 
        position: 'relative', 
        height: isMobile ? '200px' : '100%',
        minHeight: isMobile ? '200px' : '300px',
      }}>
        <img
          src={event.image}
          alt={event.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        
        {/* Badges Overlay */}
        <div style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          display: 'flex',
          gap: '0.5rem',
          flexWrap: 'wrap',
        }}>
          {event.featured && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              padding: '0.375rem 0.75rem',
              background: 'rgba(251, 191, 36, 0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: RADIUS.full,
              fontSize: '0.75rem',
              fontWeight: '700',
              color: COLORS.neutral.gray900,
            }}>
              <Star size={12} />
              Featured
            </div>
          )}
          <div style={{
            padding: '0.375rem 0.75rem',
            background: event.status === 'upcoming' 
              ? 'rgba(34, 197, 94, 0.95)' 
              : 'rgba(156, 163, 175, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: RADIUS.full,
            fontSize: '0.75rem',
            fontWeight: '700',
            color: COLORS.neutral.white,
            textTransform: 'capitalize',
          }}>
            {event.status}
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ 
        padding: isMobile ? '1.5rem' : '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <div>
          <div style={{
            display: 'inline-block',
            padding: '0.375rem 1rem',
            background: `${categories.find(c => c.id === event.category)?.color}20`,
            color: categories.find(c => c.id === event.category)?.color,
            borderRadius: RADIUS.full,
            fontSize: '0.875rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>
            {event.category}
          </div>

          <h3 style={{
            fontSize: isMobile ? '1.5rem' : '2rem',
            fontWeight: '700',
            color: COLORS.neutral.gray900,
            marginBottom: '1rem',
            lineHeight: '1.2',
          }}>
            {event.title}
          </h3>

          <p style={{
            fontSize: isMobile ? '0.875rem' : '1rem',
            color: COLORS.neutral.gray600,
            marginBottom: '1.5rem',
            lineHeight: '1.6',
          }}>
            {event.description}
          </p>

          {/* Event Details Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: '1rem',
            marginBottom: '1.5rem',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1rem',
              background: COLORS.neutral.gray50,
              borderRadius: RADIUS.lg,
            }}>
              <div style={{
                width: '2.5rem',
                height: '2.5rem',
                background: COLORS.primary.green100,
                borderRadius: RADIUS.lg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Calendar size={18} style={{ color: COLORS.primary.green600 }} />
              </div>
              <div>
                <p style={{ 
                  fontSize: '0.75rem', 
                  color: COLORS.neutral.gray500,
                  marginBottom: '0.125rem',
                }}>
                  Date
                </p>
                <p style={{ 
                  fontSize: '0.875rem', 
                  fontWeight: '600',
                  color: COLORS.neutral.gray900,
                }}>
                  {new Date(event.date).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1rem',
              background: COLORS.neutral.gray50,
              borderRadius: RADIUS.lg,
            }}>
              <div style={{
                width: '2.5rem',
                height: '2.5rem',
                background: COLORS.primary.green100,
                borderRadius: RADIUS.lg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Clock size={18} style={{ color: COLORS.primary.green600 }} />
              </div>
              <div>
                <p style={{ 
                  fontSize: '0.75rem', 
                  color: COLORS.neutral.gray500,
                  marginBottom: '0.125rem',
                }}>
                  Time
                </p>
                <p style={{ 
                  fontSize: '0.875rem', 
                  fontWeight: '600',
                  color: COLORS.neutral.gray900,
                }}>
                  {event.time}
                </p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1rem',
              background: COLORS.neutral.gray50,
              borderRadius: RADIUS.lg,
              gridColumn: isMobile ? '1' : 'span 2',
            }}>
              <div style={{
                width: '2.5rem',
                height: '2.5rem',
                background: COLORS.primary.green100,
                borderRadius: RADIUS.lg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <MapPin size={18} style={{ color: COLORS.primary.green600 }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ 
                  fontSize: '0.75rem', 
                  color: COLORS.neutral.gray500,
                  marginBottom: '0.125rem',
                }}>
                  Location
                </p>
                <p style={{ 
                  fontSize: '0.875rem', 
                  fontWeight: '600',
                  color: COLORS.neutral.gray900,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}>
                  {event.location}
                </p>
              </div>
            </div>
          </div>

          {/* Availability */}
          {event.status === 'upcoming' && (
            <div style={{
              padding: '1rem',
              background: COLORS.neutral.gray50,
              borderRadius: RADIUS.lg,
              marginBottom: '1.5rem',
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '0.5rem',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Users size={18} style={{ color: COLORS.primary.green600 }} />
                  <span style={{ 
                    fontSize: '0.875rem', 
                    fontWeight: '600',
                    color: COLORS.neutral.gray700,
                  }}>
                    Availability
                  </span>
                </div>
                <span style={{ 
                  fontSize: '0.875rem', 
                  fontWeight: '700',
                  color: getAvailabilityColor(event.attendees, event.capacity),
                }}>
                  {event.capacity - event.attendees} seats left
                </span>
              </div>
              <div style={{
                height: '8px',
                background: COLORS.neutral.gray200,
                borderRadius: RADIUS.full,
                overflow: 'hidden',
              }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(event.attendees / event.capacity) * 100}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  style={{
                    height: '100%',
                    background: getAvailabilityColor(event.attendees, event.capacity),
                    borderRadius: RADIUS.full,
                  }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Register Button */}
        {event.status === 'upcoming' && (
          <motion.button
            whileHover={{ scale: isMobile ? 1 : 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onRegister(event.title)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '1rem 2rem',
              background: GRADIENTS.primary,
              color: COLORS.neutral.white,
              border: 'none',
              borderRadius: RADIUS.lg,
              fontWeight: '700',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            Register Now
            <ArrowRight size={20} />
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

// Category colors mapping
const categories = [
  { id: "all", name: "All", color: COLORS.neutral.gray500 },
  { id: "conservation", name: "Conservation", color: COLORS.primary.green600 },
  { id: "education", name: "Education", color: COLORS.accent.yellow600 },
  { id: "agriculture", name: "Agriculture", color: "#10B981" },
  { id: "energy", name: "Energy", color: "#3B82F6" },
  { id: "water", name: "Water", color: "#06B6D4" },
  { id: "business", name: "Business", color: "#8B5CF6" },
];

export default Events;