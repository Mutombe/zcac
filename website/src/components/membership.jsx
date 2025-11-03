import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Users,
  TrendingUp,
  Shield,
  Award,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Target,
  Heart,
  Briefcase,
  Building2,
  GraduationCap,
  UserPlus,
  Mail,
  Phone,
  ExternalLink,
} from 'lucide-react';
import { useLanguage } from './lunguagecontext';
import { COLORS, GRADIENTS, SHADOWS, RADIUS } from './theme';
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaPeopleRoof } from "react-icons/fa6";
import { SlGraph } from "react-icons/sl";
import { GiBrain } from "react-icons/gi";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { GiFallingLeaf } from "react-icons/gi";

const Membership = () => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Background images for hero
  const heroImages = [
    '/28.jpg',
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

  const handleAction = (action) => {
    if (action === "call") {
      window.location.href = "tel:+263785948128";
    } else if (action === "email") {
      window.location.href = "mailto:membership@cacz.co.zw";
    } else if (action === "whatsapp") {
      window.location.href =
        "https://wa.me/263785948128?text=Hello%20Climate%20Action%20Center,%20I%20would%20like%20to%20inquire%20about%20membership.";
    }
  };

  return (
    <div style={{ minHeight: '100vh', paddingTop: '5rem' }}>
      {/* Hero Section */}
      <HeroSection 
        heroImages={heroImages}
        currentImageIndex={currentImageIndex}
      />

      {/* Why Join Section */}
      <WhyJoinSection />

      {/* Who Should Join Section */}
      <WhoShouldJoinSection />

      {/* Membership Tiers */}
      <TiersSection />

      {/* Core Benefits */}
      <BenefitsSection />

      {/* How Membership Drives Value */}
      <ValueSection />

      {/* Next Steps */}
      <NextStepsSection />

      {/* CTA Section */}
      <CTASection />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <button
          className="group bg-gradient-to-r from-green-400 via-green-600 to-primary-dark hover:bg-green-300 text-white p-3 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
          onClick={() => handleAction("whatsapp")}
        >
          <IoLogoWhatsapp className="w-6 h-6 group-hover:rotate-12 transition-transform text-white" />
        </button>
        <button
          className="group bg-gradient-to-r from-green-400 via-green-600 to-primary-dark hover:bg-green-700 text-white p-3 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
          onClick={() => handleAction("call")}
        >
          <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </button>
        <button
          className="group bg-gradient-to-r from-green-400 via-green-600 to-primary-dark hover:bg-blue-700 text-white p-3 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
          onClick={() => handleAction("email")}
        >
          <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </button>
      </div>
    </div>
  );
};

const HeroSection = ({ heroImages, currentImageIndex }) => {
  return (
    <section style={{
      position: 'relative',
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
    }}>
      {/* Image Carousel */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
      }}>
        {heroImages.map((image, index) => (
          <div 
            key={index}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: currentImageIndex === index ? 1 : 0,
              transition: 'opacity 2s ease-in-out',
            }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `linear-gradient(135deg, ${COLORS.primary.green900}ee 0%, ${COLORS.primary.green800}dd 100%)`,
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
            <Sparkles size={18} style={{ color: COLORS.neutral.white }} />
            <span style={{ 
              color: COLORS.neutral.white, 
              fontWeight: '600', 
              fontSize: '0.875rem' 
            }}>
              JOIN THE MOVEMENT
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: '700',
            color: COLORS.neutral.white,
            marginBottom: '1.5rem',
            lineHeight: '1.1',
          }}>
            Become a<br />
            <span style={{
              background: `linear-gradient(to right, ${COLORS.accent.yellow400}, ${COLORS.accent.yellow200})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              CACZ Member
            </span>
          </h1>

          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(255, 255, 255, 0.95)',
            maxWidth: '42rem',
            lineHeight: '1.75',
            marginBottom: '3rem',
          }}>
            Join Zimbabwe's premier climate action network — connecting investors, innovators, and communities to transform climate commitments into verified impact.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="https://forms.gle/zDL1j3vEAyW5pYfL8" style={{
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
              Apply for Membership
              <ArrowRight size={20} />
            </a>
            <a href="#benefits" style={{
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
              View Benefits
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const WhyJoinSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} style={{
      padding: '6rem 0',
      background: COLORS.neutral.white,
    }}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
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
              WHY JOIN CACZ
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: '700',
              marginBottom: '1.5rem',
              color: COLORS.neutral.gray900,
              lineHeight: '1.2',
            }}>
              Be Part of the National Convenor
            </h2>
            <p style={{
              color: COLORS.neutral.gray700,
              lineHeight: '1.8',
              fontSize: '1.05rem',
              marginBottom: '2rem',
            }}>
              Membership connects you to pipeline projects, policy influence, investor networks and technical capacity — all backed by our MRV, escrow and integrity safeguards.
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              {[
                'Priority access to bankable climate projects',
                'Direct influence on policy and regulatory frameworks',
                'Investor-grade due diligence and derisking support',
                'Verified credibility and market-leading MRV standards',
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                  }}
                >
                  <CheckCircle 
                    size={20} 
                    style={{ 
                      color: COLORS.primary.green600,
                      flexShrink: 0,
                      marginTop: '0.25rem',
                    }} 
                  />
                  <p style={{ 
                    color: COLORS.neutral.gray700,
                    fontSize: '0.95rem',
                  }}>
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            style={{
              position: 'relative',
            }}
          >
            <div style={{
              background: GRADIENTS.greenService,
              borderRadius: RADIUS.xl,
              padding: '3rem',
              boxShadow: SHADOWS['2xl'],
            }}>
              <div className="space-y-6">
                {[
                  { icon: Target, label: 'Strategic Focus', value: 'Pipeline Access' },
                  { icon: Shield, label: 'Risk Mitigation', value: 'MRV & Escrow' },
                  { icon: Users, label: 'Network', value: 'Investors & Partners' },
                  { icon: Award, label: 'Credibility', value: 'CACZ Endorsement' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: RADIUS.lg,
                      padding: '1.5rem',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                    }}>
                      <div style={{
                        width: '3rem',
                        height: '3rem',
                        background: 'rgba(255, 255, 255, 0.25)',
                        borderRadius: RADIUS.lg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        <item.icon size={24} style={{ color: COLORS.neutral.white }} />
                      </div>
                      <div>
                        <p style={{
                          fontSize: '0.75rem',
                          color: 'rgba(255, 255, 255, 0.8)',
                          marginBottom: '0.25rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}>
                          {item.label}
                        </p>
                        <p style={{
                          fontSize: '1.125rem',
                          fontWeight: '700',
                          color: COLORS.neutral.white,
                        }}>
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const WhoShouldJoinSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const audiences = [
    { icon: TrendingUp, label: 'Green Investors', desc: 'Commercial banks & DFIs' },
    { icon: Briefcase, label: 'Project Developers', desc: 'Climate project innovators' },
    { icon: Building2, label: 'Corporates', desc: 'ESG & off-takers' },
    { icon: Shield, label: 'Service Providers', desc: 'MRV, ESG & technical' },
    { icon: Users, label: 'NGOs & CBOs', desc: 'Community organizations' },
    { icon: Heart, label: 'Youth & Women', desc: 'Networks & advocates' },
    { icon: GraduationCap, label: 'Academia', desc: 'Research institutions' },
    { icon: Building2, label: 'Local Government', desc: 'Municipal partners' },
  ];

  return (
    <section ref={ref} style={{
      padding: '6rem 0',
      background: COLORS.neutral.gray50,
    }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '700',
            marginBottom: '1rem',
            color: COLORS.neutral.gray900,
          }}>
            Who Should <span style={{
              background: GRADIENTS.primary,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Join</span>
          </h2>
          <p style={{
            color: COLORS.neutral.gray600,
            fontSize: '1.125rem',
            maxWidth: '42rem',
            margin: '0 auto',
          }}>
            CACZ membership is open to all climate action stakeholders
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.05 }}
              style={{
                background: COLORS.neutral.white,
                borderRadius: RADIUS.lg,
                padding: '2rem 1.5rem',
                textAlign: 'center',
                boxShadow: SHADOWS.md,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
            >
              <div style={{
                width: '3.5rem',
                height: '3.5rem',
                background: GRADIENTS.greenService,
                borderRadius: RADIUS.lg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
              }}>
                <audience.icon size={24} style={{ color: COLORS.neutral.white }} />
              </div>
              <h3 style={{
                fontSize: '1rem',
                fontWeight: '700',
                color: COLORS.neutral.gray900,
                marginBottom: '0.5rem',
              }}>
                {audience.label}
              </h3>
              <p style={{
                fontSize: '0.875rem',
                color: COLORS.neutral.gray600,
              }}>
                {audience.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TiersSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const tiers = [
    {
      name: 'Strategic Partner',
      tier: 'Tier A',
      icon: Award,
      description: 'For anchor investors, major corporates, and institutional donors',
      gradient: GRADIENTS.greenService,
      features: [
        'Governance advisory role',
        'Priority co-funding opportunities',
        'Bespoke portfolio reviews',
        'Executive-level engagement',
        'Policy influence at highest level',
      ],
      highlight: true,
    },
    {
      name: 'Operational Member',
      tier: 'Tier B',
      icon: Briefcase,
      description: 'For project developers, service providers, and midsize private sector',
      gradient: GRADIENTS.yellowService,
      features: [
        'Dedicated incubation support',
        'Discounted MRV services',
        'Project lab placements',
        'Investor matchmaking priority',
        'Technical capacity building',
      ],
    },
    {
      name: 'Affiliate Member',
      tier: 'Tier C',
      icon: Users,
      description: 'For NGOs, CBOs, academia, youth and women`s groups',
      gradient: GRADIENTS.redService,
      features: [
        'Capacity grants access',
        'Community partnership facilitation',
        'Youth and women cohorts',
        'Training and certification',
        'Networking opportunities',
      ],
    },
  ];

  return (
    <section id="tiers" ref={ref} style={{
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
            Membership <span style={{
              background: GRADIENTS.primary,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Tiers</span>
          </h2>
          <p style={{
            color: COLORS.neutral.gray600,
            fontSize: '1.125rem',
          }}>
            Choose the tier that best fits your organization
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -12, scale: tier.highlight ? 1.05 : 1.02 }}
              style={{
                background: COLORS.neutral.white,
                borderRadius: RADIUS.xl,
                overflow: 'hidden',
                boxShadow: tier.highlight ? SHADOWS['2xl'] : SHADOWS.lg,
                border: tier.highlight ? `3px solid ${COLORS.primary.green500}` : `1px solid ${COLORS.neutral.gray200}`,
                transition: 'all 0.3s ease',
                position: 'relative',
              }}
            >
              {tier.highlight && (
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: GRADIENTS.primary,
                  color: COLORS.neutral.white,
                  padding: '0.5rem 1rem',
                  borderRadius: RADIUS.full,
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  zIndex: 1,
                }}>
                  Popular
                </div>
              )}

              {/* Header with gradient */}
              <div style={{
                background: tier.gradient,
                padding: '3rem 2rem 2rem',
                textAlign: 'center',
                color: COLORS.neutral.white,
              }}>
                <div style={{
                  width: '5rem',
                  height: '5rem',
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: RADIUS.full,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                }}>
                  <tier.icon size={32} />
                </div>
                <h3 style={{
                  fontSize: '1.75rem',
                  fontWeight: '700',
                  marginBottom: '0.5rem',
                }}>
                  {tier.name}
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  opacity: 0.95,
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}>
                  {tier.tier}
                </p>
              </div>

              {/* Content */}
              <div style={{ padding: '2rem' }}>
                <p style={{
                  color: COLORS.neutral.gray700,
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  marginBottom: '2rem',
                  textAlign: 'center',
                }}>
                  {tier.description}
                </p>

                <div className="space-y-3">
                  {tier.features.map((feature, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                      }}
                    >
                      <CheckCircle 
                        size={18} 
                        style={{ 
                          color: COLORS.primary.green600,
                          flexShrink: 0,
                          marginTop: '0.125rem',
                        }} 
                      />
                      <p style={{
                        fontSize: '0.875rem',
                        color: COLORS.neutral.gray700,
                      }}>
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BenefitsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const benefits = [
    {
      icon: Target,
      title: 'Priority Pipeline Access',
      description: 'Early visibility and priority shortlisting for CACZ-incubated projects and investment opportunities.',
    },
    {
      icon: Shield,
      title: 'Investor-Grade Due Diligence',
      description: 'Access to project pre-verification, MRV readiness assessments, ESG validation and blended finance structuring.',
    },
    {
      icon: Users,
      title: 'Policy Influence & Engagement',
      description: 'Seats in consultative working groups; direct inputs to policy briefs and SI 48 operational guidance.',
    },
    {
      icon: GraduationCap,
      title: 'Capacity Building',
      description: 'Discounted places in Green Skills Academy, technical workshops and certification programmes.',
    },
    {
      icon: Award,
      title: 'Verified Credibility',
      description: 'Use of CACZ endorsement on qualifying projects; inclusion in public MRV registry and investor reports.',
    },
    {
      icon: TrendingUp,
      title: 'Market & Investor Matchmaking',
      description: 'Curated introductions to green investors, off-takers and co-financing partners.',
    },
    {
      icon: Shield,
      title: 'Escrow & Benefit-Sharing',
      description: 'Guidance and access to escrow mechanisms and enforceable community benefit templates.',
    },
    {
      icon: Sparkles,
      title: 'Convening & Visibility',
      description: 'Invitations to Annual Zimbabwe Climate Summit, symposia and member-only networking events.',
    },
  ];

  return (
    <section id="benefits" ref={ref} style={{
      padding: '6rem 0',
      background: COLORS.neutral.gray50,
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
            Core <span style={{
              background: GRADIENTS.primary,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Benefits</span>
          </h2>
          <p style={{
            color: COLORS.neutral.gray600,
            fontSize: '1.125rem',
          }}>
            Available across all tiers with tiered access and priority
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              style={{
                background: COLORS.neutral.white,
                borderRadius: RADIUS.lg,
                padding: '2rem',
                boxShadow: SHADOWS.md,
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{
                width: '3.5rem',
                height: '3.5rem',
                background: `${COLORS.primary.green600}15`,
                borderRadius: RADIUS.lg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
              }}>
                <benefit.icon size={24} style={{ color: COLORS.primary.green600 }} />
              </div>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '700',
                color: COLORS.neutral.gray900,
                marginBottom: '0.75rem',
              }}>
                {benefit.title}
              </h3>
              <p style={{
                fontSize: '0.875rem',
                color: COLORS.neutral.gray600,
                lineHeight: '1.75',
              }}>
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ValueSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const valueProps = [
    {
      icon: FaPeopleGroup,
      title: 'Reduces Risk',
      description: 'Shorter investor due diligence timelines and lower reputational risk',
    },
    {
      icon: GiTakeMyMoney,
      title: 'Accelerates Bankability',
      description: 'Faster project development and access to blended finance',
    },
    {
      icon: FaPeopleRoof,
      title: 'Amplifies Influence',
      description: 'Shape predictable market rules through policy engagement',
    },
    {
      icon: SlGraph,
      title: 'Secures Returns',
      description: 'Community consent and verified benefit flows protect long-term value',
    },
    {
      icon: GiBrain,
      title: 'Builds Capacity',
      description: 'Access to trained talent and technical expertise',
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
            How Membership Drives Value
          </h2>
          <p style={{
            color: COLORS.neutral.gray300,
            fontSize: '1.125rem',
          }}>
            Tangible benefits for your organization
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              style={{
                background: COLORS.neutral.gray800,
                borderRadius: RADIUS.xl,
                padding: '2.5rem',
                border: `1px solid ${COLORS.neutral.gray700}`,
              }}
            >
              <div style={{
                width: '4rem',
                height: '4rem',
                background: `${COLORS.primary.green600}20`,
                borderRadius: RADIUS.lg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
              }}>
                <prop.icon size={28} style={{ color: COLORS.primary.green400 }} />
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                marginBottom: '0.75rem',
              }}>
                {prop.title}
              </h3>
              <p style={{
                color: COLORS.neutral.gray300,
                fontSize: '0.95rem',
                lineHeight: '1.75',
              }}>
                {prop.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const NextStepsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const steps = [
    {
      number: '01',
      title: 'Choose Your Tier',
      description: 'Select the membership tier that best aligns with your organization`s goals and capacity.',
      icon: UserPlus,
    },
    {
      number: '02',
      title: 'Complete Application',
      description: 'Fill out the membership form and submit your organization profile and project pipeline (if applicable).',
      icon: CheckCircle,
    },
    {
      number: '03',
      title: 'Schedule Onboarding',
      description: 'Book an onboarding call with the CACZ Secretariat to align priorities and begin your journey.',
      icon: Users,
    },
  ];

  return (
    <section id="registration" ref={ref} style={{
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
            Simple <span style={{
              background: GRADIENTS.primary,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Next Steps</span>
          </h2>
          <p style={{
            color: COLORS.neutral.gray600,
            fontSize: '1.125rem',
          }}>
            Getting started is easy
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              style={{
                position: 'relative',
                textAlign: 'center',
              }}
            >
              {/* Connecting Line (except for last item) */}
              {index < steps.length - 1 && (
                <div style={{
                  position: 'absolute',
                  top: '3rem',
                  left: '50%',
                  width: '100%',
                  height: '2px',
                  background: COLORS.neutral.gray200,
                  zIndex: 0,
                }}
                className="hidden md:block"
                />
              )}

              {/* Step Content */}
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  width: '6rem',
                  height: '6rem',
                  background: GRADIENTS.greenService,
                  borderRadius: RADIUS.full,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  boxShadow: SHADOWS.xl,
                }}>
                  <step.icon size={32} style={{ color: COLORS.neutral.white }} />
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  fontWeight: '700',
                  color: COLORS.primary.green600,
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}>
                  Step {step.number}
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: COLORS.neutral.gray900,
                  marginBottom: '0.75rem',
                }}>
                  {step.title}
                </h3>
                <p style={{
                  color: COLORS.neutral.gray600,
                  fontSize: '0.95rem',
                  lineHeight: '1.75',
                }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Registration CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <a 
            href="https://forms.gle/zDL1j3vEAyW5pYfL8"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: GRADIENTS.primary,
              color: COLORS.neutral.white,
              padding: '1.5rem 3rem',
              borderRadius: RADIUS.lg,
              fontWeight: '700',
              fontSize: '1.125rem',
              textDecoration: 'none',
              boxShadow: SHADOWS.xl,
            }}
          >
            Apply for Membership
            <ExternalLink size={20} />
          </a>
          <p style={{
            marginTop: '1.5rem',
            color: COLORS.neutral.gray600,
            fontSize: '0.875rem',
          }}>
            Or contact us at{' '}
            <a 
              href="mailto:membership@cacz.co.zw"
              style={{
                color: COLORS.primary.green600,
                fontWeight: '600',
                textDecoration: 'none',
              }}
            >
              membership@cacz.co.zw
            </a>
            {' '}or call{' '}
            <a 
              href="tel:+263785948128"
              style={{
                color: COLORS.primary.green600,
                fontWeight: '600',
                textDecoration: 'none',
              }}
            >
              +263 785 948 128
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section style={{
      padding: '6rem 0',
      position: 'relative',
      backgroundImage: 'url(/17.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    }}>
      {/* Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `linear-gradient(135deg, ${COLORS.primary.green900}ee, ${COLORS.primary.green800}dd)`,
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
            Make Climate Finance Work<br />for People and Nature
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(255, 255, 255, 0.95)',
            marginBottom: '3rem',
            maxWidth: '42rem',
            margin: '0 auto 3rem',
            lineHeight: '1.75',
          }}>
            Join the network turning Zimbabwe's climate ambition into bankable projects, verified outcomes, and shared community prosperity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
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
              }}
            >
              Become a Member
              <ExternalLink size={20} />
            </a>
            <a href="/projects" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'transparent',
              color: COLORS.neutral.white,
              padding: '1.25rem 2.5rem',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderRadius: RADIUS.lg,
              fontWeight: '700',
              textDecoration: 'none',
              backdropFilter: 'blur(10px)',
            }}>
              Submit a Project
              <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Membership;