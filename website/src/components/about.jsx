import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FileText,
  CheckCircle,
  Rocket,
  TrendingUp,
  Users,
  GraduationCap,
  Recycle,
  UsersRound,
  Shield,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "./lunguagecontext";
import { BsArrowUpCircle } from "react-icons/bs";
import { COLORS, GRADIENTS, SHADOWS, RADIUS } from "./theme";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { FaPeopleRoof } from "react-icons/fa6";
import { VscCheckAll } from "react-icons/vsc";
import { SlRocket } from "react-icons/sl";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { TiGroupOutline } from "react-icons/ti";
import { GiGraduateCap } from "react-icons/gi";
import { MdOutlineRecycling } from "react-icons/md";
import { GiPodiumThird } from "react-icons/gi";
import { GiHiking } from "react-icons/gi";
import { GrSecure } from "react-icons/gr";
import { SlGraph } from "react-icons/sl";
import { GiSmart } from "react-icons/gi";
import { CgCodeClimate } from "react-icons/cg";
import { GiStripedSun } from "react-icons/gi";
import { PiBrain } from "react-icons/pi";



const WhatWeDo = () => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Background images for hero carousel
  const heroImages = [
    '/14.jpg'
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Hero Section Styles
  const heroSectionStyle = {
    position: "relative",
    minHeight: "70vh",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
  };

  const carouselContainerStyle = {
    position: "absolute",
    inset: 0,
    zIndex: 0,
  };

  const carouselImageStyle = (index) => ({
    position: "absolute",
    inset: 0,
    backgroundImage: `url(${heroImages[index]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: currentImageIndex === index ? 1 : 0,
    transition: "opacity 2s ease-in-out",
  });

  const overlayStyle = {
    position: "absolute",
    inset: 0,
    background: `linear-gradient(135deg, 
      ${COLORS.primary.green900}ee 0%, 
      ${COLORS.primary.green800}dd 50%, 
      ${COLORS.primary.green900}ee 100%)`,
    zIndex: 1,
  };

  const headingStyle = {
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
    fontWeight: "700",
    marginBottom: "1.5rem",
    color: COLORS.neutral.white,
    lineHeight: "1.1",
  };

  const subtitleStyle = {
    fontSize: "1.25rem",
    color: "rgba(255, 255, 255, 0.9)",
    lineHeight: "1.75",
    maxWidth: "42rem",
  };

  const badgeStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    background: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(10px)",
    color: COLORS.neutral.white,
    padding: "0.75rem 1.5rem",
    borderRadius: RADIUS.full,
    fontSize: "0.875rem",
    fontWeight: "600",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    marginBottom: "2rem",
  };

  return (
    <div style={{ minHeight: "100vh", paddingTop: "5rem" }}>
      {/* Hero Section with Background Image */}
      <section style={heroSectionStyle}>
        {/* Image Carousel */}
        <div style={carouselContainerStyle}>
          {heroImages.map((image, index) => (
            <div key={index} style={carouselImageStyle(index)} />
          ))}
        </div>

        {/* Overlay */}
        <div style={overlayStyle} />

        {/* Content */}
        <div
          className="container mx-auto px-4"
          style={{ position: "relative", zIndex: 10 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div style={badgeStyle}>
              <Sparkles size={18} />
              <span>Comprehensive Climate Solutions</span>
            </div>
            <h1 style={headingStyle}>What We Do</h1>
            <p style={subtitleStyle}>
              From policy advisory to project delivery, we provide end-to-end
              climate action support for investors, developers, communities, and
              policymakers.
            </p>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "10px",
            background: `linear-gradient(to top, ${COLORS.neutral.white}, transparent)`,
            zIndex: 2,
          }}
        />
      </section>

      {/* Services Section - Bento Grid with Images */}
      <ServicesSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Programs Section - Card Grid */}
      <ProgramsSection />

      {/* Process Section */}
      <ProcessSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

const ServicesSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const sectionStyle = {
    padding: "6rem 0",
    background: COLORS.neutral.white,
  };

  const sectionTitleStyle = {
    fontSize: "clamp(2rem, 5vw, 3rem)",
    fontWeight: "700",
    marginBottom: "1rem",
    textAlign: "center",
  };

  const gradientTextStyle = {
    background: GRADIENTS.primary,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  const services = [
    {
      icon: HiOutlineDocumentChartBar,
      title: "Policy Advisory & Advocacy",
      description:
        "Draft policy monographs, environmental sustainability guidance, and compliance pathways.",
      gradient: GRADIENTS.greenService,
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600",
      span: "col-span-2 row-span-2",
    },
    {
      icon: VscCheckAll,
      title: "MRV & Verification",
      description:
        "ESG report validation and third-party verification services.",
      gradient: GRADIENTS.yellowService,
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600",
      span: "col-span-1 row-span-1",
    },
    {
      icon: SlRocket,
      title: "Project Incubation",
      description: "Bankable project dossiers and blended finance structuring.",
      gradient: GRADIENTS.redService,
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600",
      span: "col-span-1 row-span-1",
    },
    {
      icon: HiArrowTrendingUp,
      title: "Green Investors Advisory",
      description: "Pipeline due diligence and co-investment platforms.",
      gradient: GRADIENTS.standardGreenService,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
      span: "col-span-2 row-span-1",
    },
    {
      icon: TiGroupOutline,
      title: "Youth & Women Innovation",
      description:
        "Cohort mentorship and market access for inclusive enterprises.",
      gradient: GRADIENTS.greenService,
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600",
      span: "col-span-1 row-span-1",
    },
    {
      icon: GiGraduateCap,
      title: "Green Skills Academy",
      description:
        "Certified training in MRV, climate finance, and sustainability.",
      gradient: GRADIENTS.yellowService,
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600",
      span: "col-span-1 row-span-2",
    },
    {
      icon: MdOutlineRecycling,
      title: "Circular Economy",
      description: "Waste-to-value and renewable energy initiatives.",
      gradient: GRADIENTS.redService,
      image:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600",
      span: "col-span-1 row-span-1",
    },
    {
      icon: GiPodiumThird,
      title: "Convening & Knowledge",
      description: "Annual Zimbabwe Climate Summit and technical workshops.",
      gradient: GRADIENTS.greenService,
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600",
      span: "col-span-1 row-span-1",
    },
    {
      icon: GrSecure,
      title: "Integrity & Grievance",
      description: "Independent oversight and accessible grievance channels.",
      gradient: GRADIENTS.standardGreenService,
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600",
      span: "col-span-1 row-span-1",
    },
  ];

  return (
    <section ref={ref} style={sectionStyle}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 style={sectionTitleStyle}>
            Our <span style={gradientTextStyle}>Core Services</span>
          </h2>
          <p style={{ color: COLORS.neutral.gray600, fontSize: "1.125rem" }}>
            Comprehensive solutions driving climate action across Zimbabwe
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div
          className="bento-services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridAutoRows: "250px",
            gap: "1.5rem",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={service.span}
              style={{
                position: "relative",
                borderRadius: RADIUS.xl,
                overflow: "hidden",
                cursor: "pointer",
                boxShadow: SHADOWS.lg,
              }}
            >
              {/* Background Image */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.3,
                }}
              />

              {/* Gradient Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: service.gradient,
                  opacity: 0.95,
                }}
              />

              {/* Content */}
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  padding: "2rem",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  color: COLORS.neutral.white,
                }}
              >
                <div>
                  <div
                    style={{
                      width: "3rem",
                      height: "3rem",
                      background: "rgba(255, 255, 255, 0.2)",
                      borderRadius: RADIUS.lg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <service.icon size={24} />
                  </div>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "700",
                      marginBottom: "0.5rem",
                      lineHeight: "1.3",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      opacity: 0.9,
                      lineHeight: "1.6",
                    }}
                  >
                    {service.description}
                  </p>
                </div>
                <ArrowRight
                  size={20}
                  style={{ alignSelf: "flex-end", opacity: 0.7 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Responsive Styles */}
        <style>{`
          @media (max-width: 1024px) {
            .bento-services-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
            .bento-services-grid > div {
              grid-column: span 1 !important;
              grid-row: span 1 !important;
            }
          }
          @media (max-width: 640px) {
            .bento-services-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const stats = [
    {
      number: "50+",
      label: "Climate Projects",
      description: "Developed and verified",
      gradient: GRADIENTS.greenService,
    },
    {
      number: "$10M+",
      label: "Investment Mobilized",
      description: "For climate action",
      gradient: GRADIENTS.yellowService,
    },
    {
      number: "100K+",
      label: "People Impacted",
      description: "Across communities",
      gradient: GRADIENTS.redService,
    },
    {
      number: "5,000+",
      label: "Jobs Created",
      description: "Green economy opportunities",
      gradient: GRADIENTS.standardGreenService,
    },
  ];

  return (
    <section
      ref={ref}
      style={{
        padding: "6rem 0",
        background: `linear-gradient(135deg, ${COLORS.primary.green50} 0%, ${COLORS.neutral.white} 100%)`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              style={{
                background: COLORS.neutral.white,
                borderRadius: RADIUS.xl,
                padding: "2.5rem 2rem",
                boxShadow: SHADOWS.xl,
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Gradient Background */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: stat.gradient,
                }}
              />

              <h3
                style={{
                  fontSize: "3rem",
                  fontWeight: "700",
                  background: stat.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginBottom: "0.5rem",
                }}
              >
                {stat.number}
              </h3>
              <p
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "600",
                  color: COLORS.neutral.gray900,
                  marginBottom: "0.25rem",
                }}
              >
                {stat.label}
              </p>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: COLORS.neutral.gray600,
                }}
              >
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProgramsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const programs = [
    {
      emoji: GiGraduateCap,
      title: "CACZ Green Skills Academy",
      description:
        "Accredited training and certification for climate professionals.",
      color: COLORS.primary.green600,
      bgColor: COLORS.primary.green50,
    },
    {
      emoji: GiHiking,
      title: "Youth Carbon Innovation",
      description: "Incubating the next generation of climate entrepreneurs.",
      color: COLORS.accent.yellow600,
      bgColor: COLORS.accent.yellow50,
    },
    {
      emoji: SlGraph,
      title: "National MRV Registry",
      description:
        "Transparent digital platform for verified climate projects.",
      color: COLORS.primary.green600,
      bgColor: COLORS.primary.green50,
    },
    {
      emoji: GiStripedSun,
      title: "Zimbabwe Climate Summit",
      description: "Annual convening for policy and implementation alignment.",
      color: COLORS.accent.red500,
      bgColor: COLORS.accent.red50,
    },
    {
      emoji: GiPodiumThird,
      title: "SADC Leadership Summit",
      description: "Regional coordination for climate action across Africa.",
      color: COLORS.accent.yellow600,
      bgColor: COLORS.accent.yellow50,
    },
    {
      emoji: PiBrain,
      title: "CBAM Readiness Program",
      description: "Preparing export sector for carbon border adjustments.",
      color: COLORS.primary.green600,
      bgColor: COLORS.primary.green50,
    },
  ];

  return (
    <section
      ref={ref}
      style={{
        padding: "6rem 0",
        background: COLORS.neutral.gray900,
        color: COLORS.neutral.white,
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: "700",
              marginBottom: "1rem",
            }}
          >
            Flagship Programs
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: COLORS.neutral.gray300,
            }}
          >
            Signature initiatives driving transformative climate action
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              style={{
                background: COLORS.neutral.gray800,
                borderRadius: RADIUS.xl,
                padding: "2rem",
                boxShadow: SHADOWS.xl,
                border: `1px solid ${COLORS.neutral.gray700}`,
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{
                  width: "4rem",
                  height: "4rem",
                  background: program.bgColor,
                  borderRadius: RADIUS.lg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2rem",
                  marginBottom: "1.5rem",
                }}
              >
                <program.emoji size={32} color={program.color} />
              </div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  marginBottom: "0.75rem",
                  color: COLORS.neutral.white,
                }}
              >
                {program.title}
              </h3>
              <p
                style={{
                  color: COLORS.neutral.gray300,
                  fontSize: "0.875rem",
                  lineHeight: "1.75",
                }}
              >
                {program.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const steps = [
    {
      number: "01",
      title: "Consultation",
      description:
        "We start by understanding your climate goals and challenges.",
    },
    {
      number: "02",
      title: "Strategy",
      description: "Develop tailored solutions aligned with your objectives.",
    },
    {
      number: "03",
      title: "Implementation",
      description:
        "Execute projects with rigorous standards and community engagement.",
    },
    {
      number: "04",
      title: "Verification",
      description: "Independent MRV and continuous monitoring for integrity.",
    },
  ];

  return (
    <section
      ref={ref}
      style={{
        padding: "6rem 0",
        background: COLORS.neutral.white,
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: "700",
              marginBottom: "1rem",
              color: COLORS.neutral.gray900,
            }}
          >
            How We{" "}
            <span
              style={{
                background: GRADIENTS.primary,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Work
            </span>
          </h2>
          <p style={{ color: COLORS.neutral.gray600, fontSize: "1.125rem" }}>
            Our proven approach to delivering climate impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              style={{
                position: "relative",
                textAlign: "center",
              }}
            >
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    top: "3rem",
                    left: "50%",
                    width: "100%",
                    height: "2px",
                    background: `linear-gradient(to right, ${COLORS.primary.green500}, ${COLORS.primary.green300})`,
                    zIndex: 0,
                  }}
                  className="hidden md:block"
                />
              )}

              {/* Step Number */}
              <div
                style={{
                  width: "6rem",
                  height: "6rem",
                  margin: "0 auto 1.5rem",
                  background: GRADIENTS.greenService,
                  borderRadius: RADIUS.full,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2rem",
                  fontWeight: "700",
                  color: COLORS.neutral.white,
                  boxShadow: SHADOWS.xl,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {step.number}
              </div>

              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  marginBottom: "0.75rem",
                  color: COLORS.neutral.gray900,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  color: COLORS.neutral.gray600,
                  fontSize: "0.875rem",
                  lineHeight: "1.75",
                }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section
      style={{
        padding: "6rem 0",
        background: GRADIENTS.ctaGreen,
        color: COLORS.neutral.white,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Elements */}
      <div
        style={{
          position: "absolute",
          top: "-50%",
          right: "-10%",
          width: "40rem",
          height: "40rem",
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: RADIUS.full,
          filter: "blur(60px)",
        }}
      />

      <div
        className="container mx-auto px-4"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: "700",
                marginBottom: "1.5rem",
              }}
            >
              Ready to Take Climate Action?
            </h2>
            <p
              style={{
                fontSize: "1.25rem",
                marginBottom: "3rem",
                opacity: 0.95,
              }}
            >
              Partner with us to develop, verify, and scale your climate
              projects with integrity and impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  background: COLORS.neutral.white,
                  color: COLORS.primary.green600,
                  fontWeight: "700",
                  padding: "1.25rem 2.5rem",
                  borderRadius: RADIUS.lg,
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  boxShadow: SHADOWS.xl,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                Get Started Today
                <ArrowRight size={20} />
              </a>
              <a
                href="/resources"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "transparent",
                  border: `2px solid ${COLORS.neutral.white}`,
                  color: COLORS.neutral.white,
                  fontWeight: "700",
                  padding: "1.25rem 2.5rem",
                  borderRadius: RADIUS.lg,
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = COLORS.neutral.white;
                  e.currentTarget.style.color = COLORS.primary.green600;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = COLORS.neutral.white;
                }}
              >
                View Resources
              </a>
            </div>
          </motion.div>
        </div>
      </div>
            <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-green-600 to-primary-dark text-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition z-40"
      >
        <BsArrowUpCircle size={28} />
      </motion.button>
    </section>
  );
};

export default WhatWeDo;
