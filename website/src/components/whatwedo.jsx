import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  TrendingUp,
  Shield,
  Handshake,
  Sparkles,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { useLanguage } from './lunguagecontext';
import { COLORS, GRADIENTS, SHADOWS, RADIUS } from './theme';
import { BsArrowUpCircle } from "react-icons/bs";
import { GiEnergyArrow } from "react-icons/gi";
import { IoWalkOutline } from "react-icons/io5";
import { LiaAwardSolid } from "react-icons/lia";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { GiMiddleArrow } from "react-icons/gi";
import { VscCheckAll } from "react-icons/vsc";
import { SiFsecure } from "react-icons/si";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { PiHandshakeLight } from "react-icons/pi";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaPeopleRoof } from "react-icons/fa6";
import { SlGraph } from "react-icons/sl";
import { GiBrain } from "react-icons/gi";
import LeadershipSection from './leadership';


const About = () => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Background images for hero
  const heroImages = [
    '/32.jpg',
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const heroSectionStyle = {
    position: 'relative',
    minHeight: '75vh',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
  };

  const carouselContainerStyle = {
    position: 'absolute',
    inset: 0,
    zIndex: 0,
  };

  const carouselImageStyle = (index) => ({
    position: 'absolute',
    inset: 0,
    backgroundImage: `url(${heroImages[index]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: currentImageIndex === index ? 1 : 0,
    transition: 'opacity 2s ease-in-out',
  });

  const overlayStyle = {
    position: 'absolute',
    inset: 0,
    background: `linear-gradient(135deg, 
      ${COLORS.primary.green900}ee 0%, 
      ${COLORS.primary.green800}dd 40%, 
      ${COLORS.primary.green700}cc 100%)`,
    zIndex: 1,
  };

  const badgeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(10px)',
    color: COLORS.neutral.white,
    padding: '0.75rem 1.5rem',
    borderRadius: RADIUS.full,
    fontSize: '0.875rem',
    fontWeight: '600',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    marginBottom: '2rem',
  };

  const headingStyle = {
    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
    fontWeight: '700',
    marginBottom: '1.5rem',
    color: COLORS.neutral.white,
    lineHeight: '1.1',
  };

  const subtitleStyle = {
    fontSize: '1.5rem',
    color: 'rgba(255, 255, 255, 0.95)',
    lineHeight: '1.75',
    maxWidth: '42rem',
  };

  return (
    <div style={{ minHeight: '100vh', paddingTop: '5rem' }}>
      {/* Hero Section with Background Image */}
      <section style={heroSectionStyle}>
        {/* Image Carousel */}
        <div style={carouselContainerStyle}>
          {heroImages.map((image, index) => (
            <div 
              key={index}
              style={carouselImageStyle(index)}
            />
          ))}
        </div>

        {/* Overlay */}
        <div style={overlayStyle} />

        {/* Content */}
        <div className="container mx-auto px-4" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div style={badgeStyle}>
              <Sparkles size={18} />
              <span>Zimbabwe's Climate Action Leader</span>
            </div>
            <h1 style={headingStyle}>
              About CACZ
            </h1>
            <p style={subtitleStyle}>
              Zimbabwe's Multi-Stakeholder Apex Body for Climate Action — bridging ambition with impact.
            </p>
          </motion.div>
        </div>

        {/* Decorative fade */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '10px',
          background: `linear-gradient(to top, ${COLORS.neutral.white}, transparent)`,
          zIndex: 2,
        }} />
      </section>

      {/* Introduction - Split Design with Image */}
      <IntroSection />

      {/* Vision & Promise - Glassmorphism Cards */}
      <VisionPromiseSection />

      {/* Stats Banner */}
      <StatsBanner />

      {/* Strategic Objectives - Bento Grid */}
      <ObjectivesSection />

      {/* Principles - Icon Cards */}
      <PrinciplesSection />

      {/* Leadership - Modern Cards */}
      <LeadershipSection />

      {/* Alignment - Full Width Image with Overlay */}
      <AlignmentSection />
    </div>
  );
};

const IntroSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const sectionStyle = {
    padding: '6rem 0',
    background: COLORS.neutral.white,
  };

  return (
    <section ref={ref} style={sectionStyle}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
          >
            <span style={{
              display: 'inline-block',
              color: COLORS.primary.green600,
              fontWeight: '600',
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '1rem',
            }}>
              WHO WE ARE
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: '700',
              marginBottom: '1.5rem',
              color: COLORS.neutral.gray900,
              lineHeight: '1.2',
            }}>
              Bridging Climate <span style={{
                background: GRADIENTS.primary,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Ambition</span> with Local Impact
            </h2>
            <div className="space-y-4" style={{ 
              color: COLORS.neutral.gray700,
              lineHeight: '1.8',
              fontSize: '1rem',
            }}>
              <p>
                Zimbabwe stands at a crossroads: intensifying climate shocks threaten livelihoods, ecosystems and growth, while the world moves to mitigate shocks and adapt to climate phenomena, creating unprecedented opportunities to mobilize finance for mitigation, adaptation and sustainable development aided by technology creating green jobs for a resilient future.
              </p>
              <p>
                The Zimbabwe Climate Action Council (CACZ) is the country's multi-stakeholder apex body created to bridge the gap between national ambition and local impact. We design sector self-regulation standards, we are the convening voice of private sector players, ESG experts, government, investors and communities; we engineer, mentor and deliver bankable high impact projects with verified co-benefits.
              </p>
              <p>
                Working with the Ministry of Environment, Climate and Wildlife, ZiCMA and partners, CACZ translates SI 48 of 2025, the NDCs and the National Adaptation Plan into measurable impact: resilience, jobs and nature-positive outcomes — with communities front and centre, anchoring NDS2 toward Vision 2030.
              </p>
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="relative"
          >
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem',
            }}>
              {/* Large Image */}
              <div style={{
                gridColumn: 'span 2',
                height: '300px',
                borderRadius: RADIUS.xl,
                overflow: 'hidden',
                position: 'relative',
                boxShadow: SHADOWS.xl,
              }}>
                <img 
                  src="/28.jpg"
                  alt="Climate Action"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: `linear-gradient(to top, ${COLORS.primary.green900}aa 0%, transparent 60%)`,
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '2rem',
                }}>
                  <span style={{
                    color: COLORS.neutral.white,
                    fontSize: '1.25rem',
                    fontWeight: '700',
                  }}>
                    Community-Centered Action
                  </span>
                </div>
              </div>

              {/* Small Images */}
              {[
                { icon: GiEnergyArrow, label: 'Strategic Focus', color: COLORS.primary.green600 },
                { icon: IoWalkOutline, label: 'Community-Led', color: COLORS.accent.yellow600 },
                { icon: LiaAwardSolid, label: 'High Standards', color: COLORS.primary.green600 },
                { icon: HiArrowTrendingUp, label: 'Impact-Driven', color: COLORS.accent.red500 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    background: COLORS.neutral.white,
                    borderRadius: RADIUS.lg,
                    padding: '1.5rem',
                    boxShadow: SHADOWS.lg,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    background: `${item.color}15`,
                    borderRadius: RADIUS.lg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '0.75rem',
                  }}>
                    <item.icon size={24} style={{ color: item.color }} />
                  </div>
                  <span style={{
                    fontWeight: '600',
                    color: COLORS.neutral.gray900,
                    fontSize: '0.875rem',
                  }}>
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const VisionPromiseSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} style={{
      padding: '6rem 0',
      position: 'relative',
      backgroundImage: 'url(https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1920)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    }}>
      {/* Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `linear-gradient(135deg, ${COLORS.primary.green900}ee 0%, ${COLORS.primary.green800}dd 100%)`,
      }} />

      <div className="container mx-auto px-4" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              borderRadius: RADIUS.xl,
              padding: '3rem',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: SHADOWS['2xl'],
            }}
          >
            <div style={{
              width: '4rem',
              height: '4rem',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: RADIUS.lg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
            }}>
              <GiMiddleArrow size={32} style={{ color: COLORS.neutral.white }} />
            </div>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              marginBottom: '1rem',
              color: COLORS.neutral.white,
            }}>
              Our Vision
            </h2>
            <p style={{
              color: 'rgba(255, 255, 255, 0.95)',
              lineHeight: '1.8',
              fontSize: '1.05rem',
            }}>
              A resilient and low-carbon Zimbabwe where communities thrive through equitable, high-integrity climate action and carbon market participation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              borderRadius: RADIUS.xl,
              padding: '3rem',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: SHADOWS['2xl'],
            }}
          >
            <div style={{
              width: '4rem',
              height: '4rem',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: RADIUS.lg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
            }}>
              <VscCheckAll size={32} style={{ color: COLORS.neutral.white }} />
            </div>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              marginBottom: '1rem',
              color: COLORS.neutral.white,
            }}>
              Our Promise
            </h2>
            <p style={{
              color: 'rgba(255, 255, 255, 0.95)',
              lineHeight: '1.8',
              fontSize: '1.05rem',
            }}>
              We convert climate commitments into tangible, investable and verifiable outcomes that protect communities, build resilience, restore nature and unlock sustainable growth. Every project supported by CACZ must meet high impact standards, community consent, enforceable benefit-sharing and investor-grade verification.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StatsBanner = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const stats = [
    { label: 'Years Experience', value: '10+' },
    { label: 'Active Projects', value: '50+' },
    { label: 'Communities Served', value: '100K+' },
    { label: 'Investment Mobilized', value: '$10M+' },
  ];

  return (
    <section ref={ref} style={{
      padding: '4rem 0',
      background: COLORS.neutral.gray50,
    }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              style={{ textAlign: 'center' }}
            >
              <h3 style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '700',
                background: GRADIENTS.primary,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '0.5rem',
              }}>
                {stat.value}
              </h3>
              <p style={{
                color: COLORS.neutral.gray600,
                fontWeight: '600',
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ObjectivesSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const objectives = [
    {
      icon: GiMiddleArrow,
      title: 'Catalyse & Scale Projects',
      description: 'Community-centred, bankable climate projects that deliver verified impact.',
      gradient: GRADIENTS.greenService,
      span: 'col-span-2 row-span-1',
    },
    {
      icon: HiArrowTrendingUp,
      title: 'Mobilise Green Finance',
      description: 'De-risk public and private investments in climate action.',
      gradient: GRADIENTS.yellowService,
      span: 'col-span-1 row-span-1',
    },
    {
      icon: SiFsecure,
      title: 'Establish MRV Standards',
      description: 'Investor-grade monitoring, reporting and verification.',
      gradient: GRADIENTS.redService,
      span: 'col-span-1 row-span-1',
    },
    {
      icon: LiaPeopleCarrySolid,
      title: 'Build Human Capital',
      description: 'Durable capacity building and grassroots innovation.',
      gradient: GRADIENTS.standardGreenService,
      span: 'col-span-1 row-span-1',
    },
    {
      icon: PiHandshakeLight,
      title: 'Convene Stakeholders',
      description: 'Advise government and partners for Net Zero agenda.',
      gradient: GRADIENTS.greenService,
      span: 'col-span-1 row-span-1',
    },
    {
      icon: LiaAwardSolid,
      title: 'Translate ESG',
      description: 'Turn ESG into practical, measurable climate impact.',
      gradient: GRADIENTS.yellowService,
      span: 'col-span-2 row-span-1',
    },
  ];

  return (
    <section ref={ref} style={{
      padding: '6rem 0',
      background: COLORS.neutral.white,
    }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '700',
            marginBottom: '1rem',
            color: COLORS.neutral.gray900,
          }}>
            Strategic <span style={{
              background: GRADIENTS.primary,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Objectives</span>
          </h2>
          <p style={{
            color: COLORS.neutral.gray600,
            fontSize: '1.125rem',
          }}>
            Our roadmap for transformative climate action
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div 
          className="objectives-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridAutoRows: '200px',
            gap: '1.5rem',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={objective.span}
              style={{
                background: objective.gradient,
                borderRadius: RADIUS.xl,
                padding: '2rem',
                color: COLORS.neutral.white,
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: SHADOWS.lg,
                transition: 'all 0.3s ease',
              }}
            >
              <div>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: RADIUS.lg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                }}>
                  <objective.icon size={24} />
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  marginBottom: '0.5rem',
                }}>
                  {objective.title}
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  opacity: 0.95,
                  lineHeight: '1.6',
                }}>
                  {objective.description}
                </p>
              </div>
              <ArrowRight size={20} style={{ alignSelf: 'flex-end', opacity: 0.7 }} />
            </motion.div>
          ))}
        </div>

        <style>{`
          @media (max-width: 1024px) {
            .objectives-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
            .objectives-grid > div {
              grid-column: span 1 !important;
            }
          }
          @media (max-width: 640px) {
            .objectives-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

const PrinciplesSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const principles = [
    {
      title: 'Community-First',
      description: 'FPIC and legally enforceable benefit-sharing are required for all projects.',
      icon: FaPeopleGroup,
      color: COLORS.primary.green600,
    },
    {
      title: 'Investor-Grade Integrity',
      description: 'Rigorous MRV, accredited verification and escrow mechanisms reduce risk.',
      icon: GiTakeMyMoney,
      color: COLORS.accent.yellow600,
    },
    {
      title: 'Partnership & Subsidiarity',
      description: 'Close collaboration with ZiCMA, ministries and traditional leadership.',
      icon: FaPeopleRoof,
      color: COLORS.primary.green600,
    },
    {
      title: 'Market-Smart',
      description: 'Design bankable deals and blended finance vehicles that meet investor expectations.',
      icon: SlGraph,
      color: COLORS.accent.red500,
    },
    {
      title: 'Learning & Accountability',
      description: 'MEL, independent evaluation and public reporting underpin continual improvement.',
      icon: GiBrain,
      color: COLORS.primary.green600,
    },
  ];

  return (
    <section ref={ref} style={{
      padding: '6rem 0',
      background: COLORS.neutral.gray900,
      color: COLORS.neutral.white,
    }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '700',
            marginBottom: '1rem',
          }}>
            Our Principles
          </h2>
          <p style={{
            color: COLORS.neutral.gray300,
            fontSize: '1.125rem',
          }}>
            The values that guide everything we do
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              style={{
                background: COLORS.neutral.gray800,
                borderRadius: RADIUS.xl,
                padding: '2rem',
                border: `1px solid ${COLORS.neutral.gray700}`,
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{
                width: '4rem',
                height: '4rem',
                background: `${principle.color}20`,
                borderRadius: RADIUS.lg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                marginBottom: '1.5rem',
              }}>
                <principle.icon size={24} />
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                marginBottom: '0.75rem',
                color: COLORS.neutral.white,
              }}>
                {principle.title}
              </h3>
              <p style={{
                color: COLORS.neutral.gray300,
                fontSize: '0.875rem',
                lineHeight: '1.75',
              }}>
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


const AlignmentSection = () => {
  return (
    <section style={{
      position: 'relative',
      padding: '6rem 0',
      backgroundImage: 'url(https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=1920)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    }}>
      {/* Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `linear-gradient(to right, ${COLORS.primary.green900}ee, ${COLORS.primary.green800}ee)`,
      }} />

      <div className="container mx-auto px-4" style={{ position: 'relative', zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
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
              <CheckCircle size={18} style={{ color: COLORS.neutral.white }} />
              <span style={{
                color: COLORS.neutral.white,
                fontWeight: '600',
                fontSize: '0.875rem',
              }}>
                ALIGNED FOR IMPACT
              </span>
            </div>

            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '700',
              marginBottom: '2rem',
              color: COLORS.neutral.white,
            }}>
              National & Regional Alignment
            </h2>
            
            <div className="space-y-6" style={{
              color: 'rgba(255, 255, 255, 0.95)',
              fontSize: '1.125rem',
              lineHeight: '1.8',
            }}>
              <p>
                CACZ explicitly aligns with <strong>SI 48 of 2025</strong> and the <strong>Climate Change Management Bill</strong> — providing operational pathways for compliance and sector self-regulation.
              </p>
              <p>
                We anchor <strong>NDS2</strong>, building robust inclusive circular and green economies, championing rural green industry and unlocking climate finance pathways toward <strong>Vision 2030</strong>.
              </p>
              <p>
                Supporting <strong>SDG, Africa Agenda 2063 and SADC priorities</strong> — amplifying Zimbabwe's leadership in sustainable development.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;