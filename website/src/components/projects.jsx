import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Droplet, Sun, Wind, TreePine, Users, MapPin, ArrowRight, Filter, Sparkles, TrendingUp } from 'lucide-react';
import { useLanguage } from './lunguagecontext';
import { COLORS, GRADIENTS, SHADOWS, RADIUS } from './theme';
import { BsArrowUpCircle } from "react-icons/bs";
import { GiBirchTrees } from "react-icons/gi";
import { FaPeopleRoof } from "react-icons/fa6";
import { GiFallingLeaf } from "react-icons/gi";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { LiaPeopleCarrySolid } from "react-icons/lia";


const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  // Hero background images
  const heroImages = [
    'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920',
    'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1920',
  ];

  // Auto-rotate hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Project data with real images
  const projects = [
    {
      id: 1,
      title: 'Sustainable Forestry Initiative',
      category: 'Reforestation',
      icon: GiBirchTrees,
      location: 'Masvingo Province',
      status: 'Active',
      impact: '50,000 trees planted',
      co2: '15,000',
      beneficiaries: '2,500',
      gradient: GRADIENTS.greenService,
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800',
      description: 'Community-led reforestation project restoring degraded land while creating sustainable livelihoods.',
      featured: true,
    },
    {
      id: 2,
      title: 'Clean Water Access Program',
      category: 'Water',
      icon: Droplet,
      location: 'Matabeleland North',
      status: 'Active',
      impact: '20 boreholes drilled',
      co2: '8,500',
      beneficiaries: '10,000',
      gradient: `linear-gradient(135deg, #60A5FA, #2563EB)`,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
      description: 'Providing clean water access while reducing emissions from water transport.',
    },
    {
      id: 3,
      title: 'Solar Energy for Schools',
      category: 'Renewable Energy',
      icon: Sun,
      location: 'Manicaland Province',
      status: 'Active',
      impact: '30 schools electrified',
      co2: '12,000',
      beneficiaries: '15,000',
      gradient: GRADIENTS.yellowService,
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800',
      description: 'Installing solar systems in rural schools to enable e-learning.',
      featured: true,
    },
    {
      id: 4,
      title: 'Wind Farm Development',
      category: 'Renewable Energy',
      icon: Wind,
      location: 'Midlands Province',
      status: 'Planning',
      impact: '50MW capacity',
      co2: '45,000',
      beneficiaries: '50,000',
      gradient: `linear-gradient(135deg, #22D3EE, #0891B2)`,
      image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800',
      description: 'Large-scale wind energy project to diversify renewable energy mix.',
    },
    {
      id: 5,
      title: 'Regenerative Agriculture',
      category: 'Agriculture',
      icon: GiFallingLeaf,
      location: 'Multiple Districts',
      status: 'Active',
      impact: '5,000 hectares',
      co2: '20,000',
      beneficiaries: '3,000',
      gradient: GRADIENTS.greenService,
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800',
      description: 'Training farmers in carbon-sequestering agricultural practices.',
    },
    {
      id: 6,
      title: 'Community Biogas Systems',
      category: 'Waste Management',
      icon: LiaPeopleCarrySolid,
      location: 'Harare & Bulawayo',
      status: 'Active',
      impact: '100 biogas units',
      co2: '6,000',
      beneficiaries: '500',
      gradient: `linear-gradient(135deg, #C084FC, #9333EA)`,
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800',
      description: 'Converting organic waste to clean cooking fuel.',
    },
  ];

  const categories = ['All', 'Reforestation', 'Water', 'Renewable Energy', 'Agriculture', 'Waste Management'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div style={{ paddingTop: '5rem', background: COLORS.neutral.gray50 }}>
      {/* Hero Section with Background Carousel */}
      <section style={{
        position: 'relative',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        {/* Background Image Carousel */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          {heroImages.map((img, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: currentHeroImage === index ? 1 : 0,
                transition: 'opacity 2s ease-in-out',
              }}
            />
          ))}
        </div>

        {/* Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(135deg, ${COLORS.primary.green900}ee, ${COLORS.primary.green800}dd)`,
          zIndex: 1,
        }} />

        {/* Decorative Elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '300px',
          height: '300px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: RADIUS.full,
          filter: 'blur(60px)',
          zIndex: 1,
        }} />

        {/* Content */}
        <div className="container mx-auto px-4" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              padding: '0.75rem 1.5rem',
              borderRadius: RADIUS.full,
              marginBottom: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}>
              <Sparkles size={18} color={COLORS.neutral.white} />
              <span style={{ color: COLORS.neutral.white, fontWeight: '600', fontSize: '0.875rem' }}>
                IMPACTFUL CLIMATE PROJECTS
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(3rem, 7vw, 5rem)',
              fontWeight: '700',
              color: COLORS.neutral.white,
              marginBottom: '1.5rem',
              lineHeight: '1.1',
            }}>
              Building a Sustainable<br />
              <span style={{
                background: `linear-gradient(to right, ${COLORS.accent.yellow400}, ${COLORS.accent.yellow200})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Zimbabwe
              </span>
            </h1>

            <p style={{
              fontSize: '1.25rem',
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '42rem',
              lineHeight: '1.75',
              marginBottom: '3rem',
            }}>
              Bankable, high-impact climate projects delivering verified outcomes for communities, investors, and the environment.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: COLORS.neutral.white,
                color: COLORS.primary.green600,
                padding: '1.25rem 2.5rem',
                borderRadius: RADIUS.lg,
                fontWeight: '700',
                textDecoration: 'none',
                boxShadow: SHADOWS.xl,
              }}>
                Explore Projects
                <ArrowRight size={20} />
              </a>
              <a href="/contact" style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: 'transparent',
                color: COLORS.neutral.white,
                padding: '1.25rem 2.5rem',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderRadius: RADIUS.lg,
                fontWeight: '700',
                textDecoration: 'none',
                backdropFilter: 'blur(10px)',
              }}>
                Submit Project
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '0.5rem',
          zIndex: 10,
        }}>
          {heroImages.map((_, index) => (
            <div
              key={index}
              style={{
                width: currentHeroImage === index ? '2rem' : '0.5rem',
                height: '0.5rem',
                background: currentHeroImage === index 
                  ? COLORS.neutral.white 
                  : 'rgba(255, 255, 255, 0.4)',
                borderRadius: RADIUS.full,
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      </section>

      {/* Stats Banner */}
      <section style={{
        background: COLORS.neutral.white,
        padding: '3rem 0',
        boxShadow: SHADOWS.lg,
      }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: '50+', label: 'Active Projects', icon: GiBirchTrees },
              { number: '100K+', label: 'People Impacted', icon: LiaPeopleCarrySolid },
              { number: '200K', label: 'tCO2e Reduced', icon: GiFallingLeaf },
              { number: '$10M+', label: 'Investment', icon: HiArrowTrendingUp },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <stat.icon 
                  size={32} 
                  style={{ 
                    color: COLORS.primary.green600, 
                    margin: '0 auto 0.75rem' 
                  }} 
                />
                <h3 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: COLORS.neutral.gray900,
                  marginBottom: '0.5rem',
                }}>
                  {stat.number}
                </h3>
                <p style={{ color: COLORS.neutral.gray600, fontWeight: '500' }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section id="projects" style={{ padding: '3rem 0 2rem', background: COLORS.neutral.gray50 }}>
        <div className="container mx-auto px-4">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
          }}>
            <Filter size={20} style={{ color: COLORS.neutral.gray600 }} />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: RADIUS.full,
                  border: 'none',
                  background: activeFilter === category 
                    ? GRADIENTS.primary 
                    : COLORS.neutral.white,
                  color: activeFilter === category 
                    ? COLORS.neutral.white 
                    : COLORS.neutral.gray700,
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: activeFilter === category ? SHADOWS.lg : SHADOWS.sm,
                }}
                onMouseEnter={(e) => {
                  if (activeFilter !== category) {
                    e.currentTarget.style.boxShadow = SHADOWS.md;
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeFilter !== category) {
                    e.currentTarget.style.boxShadow = SHADOWS.sm;
                  }
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects - Bento Grid */}
      <section style={{ padding: '3rem 0', background: COLORS.neutral.gray50 }}>
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '2rem',
                maxWidth: '1400px',
                margin: '0 auto',
              }}
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        borderRadius: RADIUS.xl,
        overflow: 'hidden',
        boxShadow: isHovered ? SHADOWS['2xl'] : SHADOWS.lg,
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        minHeight: project.featured ? '500px' : '420px',
      }}
    >
      {/* Background Image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${project.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        transition: 'transform 0.5s ease',
      }} />

      {/* Gradient Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `linear-gradient(to top, ${COLORS.neutral.gray900}ee, ${COLORS.neutral.gray900}44)`,
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        height: '100%',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        color: COLORS.neutral.white,
      }}>
        {/* Top Section */}
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1rem',
          }}>
            <span style={{
              padding: '0.5rem 1rem',
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              borderRadius: RADIUS.full,
              fontSize: '0.75rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              {project.category}
            </span>
            <span style={{
              padding: '0.5rem 1rem',
              background: project.status === 'Active' 
                ? 'rgba(34, 197, 94, 0.2)' 
                : 'rgba(251, 191, 36, 0.2)',
              backdropFilter: 'blur(10px)',
              borderRadius: RADIUS.full,
              fontSize: '0.75rem',
              fontWeight: '700',
              border: `1px solid ${project.status === 'Active' ? '#22c55e44' : '#fbbf2444'}`,
            }}>
              {project.status}
            </span>
          </div>

          <div style={{
            width: '4rem',
            height: '4rem',
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(10px)',
            borderRadius: RADIUS.lg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.5rem',
          }}>
            <project.icon size={28} />
          </div>

          <h3 style={{
            fontSize: project.featured ? '2rem' : '1.5rem',
            fontWeight: '700',
            marginBottom: '1rem',
            lineHeight: '1.2',
          }}>
            {project.title}
          </h3>

          <p style={{
            fontSize: '0.875rem',
            opacity: 0.95,
            lineHeight: '1.75',
            marginBottom: '1.5rem',
          }}>
            {project.description}
          </p>
        </div>

        {/* Bottom Section - Stats */}
        <div style={{
          background: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(10px)',
          borderRadius: RADIUS.lg,
          padding: '1.5rem',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p style={{ fontSize: '0.75rem', opacity: 0.7, marginBottom: '0.25rem' }}>
                CO2 Reduced
              </p>
              <p style={{ fontSize: '1.25rem', fontWeight: '700' }}>
                {project.co2}
              </p>
              <p style={{ fontSize: '0.75rem', opacity: 0.7 }}>tCO2e</p>
            </div>
            <div>
              <p style={{ fontSize: '0.75rem', opacity: 0.7, marginBottom: '0.25rem' }}>
                Impact
              </p>
              <p style={{ fontSize: '1.25rem', fontWeight: '700' }}>
                {project.impact.split(' ')[0]}
              </p>
              <p style={{ fontSize: '0.75rem', opacity: 0.7 }}>
                {project.impact.split(' ').slice(1).join(' ')}
              </p>
            </div>
            <div>
              <p style={{ fontSize: '0.75rem', opacity: 0.7, marginBottom: '0.25rem' }}>
                Beneficiaries
              </p>
              <p style={{ fontSize: '1.25rem', fontWeight: '700' }}>
                {project.beneficiaries}
              </p>
              <p style={{ fontSize: '0.75rem', opacity: 0.7 }}>people</p>
            </div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '1rem',
            paddingTop: '1rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={16} />
              <span style={{ fontSize: '0.875rem' }}>{project.location}</span>
            </div>
            <ArrowRight size={20} style={{
              transform: isHovered ? 'translateX(5px)' : 'translateX(0)',
              transition: 'transform 0.3s ease',
            }} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// CTA Section Component
const CTASection = () => {
  return (
    <section style={{
      padding: '6rem 0',
      background: GRADIENTS.ctaGreen,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative Elements */}
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
      <div style={{
        position: 'absolute',
        bottom: '-20%',
        left: '-10%',
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
          className="max-w-4xl mx-auto text-center"
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '700',
            color: COLORS.neutral.white,
            marginBottom: '1.5rem',
            lineHeight: '1.2',
          }}>
            Have a Project Idea?
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '3rem',
            maxWidth: '42rem',
            margin: '0 auto 3rem',
          }}>
            We help transform climate project concepts into bankable, verifiable initiatives that deliver real impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: COLORS.neutral.white,
              color: COLORS.primary.green600,
              padding: '1.25rem 2.5rem',
              borderRadius: RADIUS.lg,
              fontWeight: '700',
              textDecoration: 'none',
              boxShadow: SHADOWS.xl,
            }}>
              Submit Your Project
              <ArrowRight size={20} />
            </a>
            <a href="/what-we-do" style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'transparent',
              color: COLORS.neutral.white,
              padding: '1.25rem 2.5rem',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderRadius: RADIUS.lg,
              fontWeight: '700',
              textDecoration: 'none',
              backdropFilter: 'blur(10px)',
            }}>
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;