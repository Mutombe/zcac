import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "./lunguagecontext";
import {
  Leaf,
  Target,
  Users,
  TrendingUp,
  BookOpen,
  Lightbulb,
  Award,
  ArrowRight,
  Mail,
  Phone,
  CheckCircle,
  Globe2,
} from "lucide-react";
import { COLORS, GRADIENTS, SHADOWS, RADIUS } from "./theme";
import { GiFallingLeaf } from "react-icons/gi";
import { GiLightningBow } from "react-icons/gi";
import { FaPeopleRoof } from "react-icons/fa6";
import { RiUserCommunityLine } from "react-icons/ri";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { IoBulbOutline } from "react-icons/io5";
import { GiArrowCluster } from "react-icons/gi";
import { GiMiddleArrow } from "react-icons/gi";
import { MdOutlinePlaylistAddCheckCircle } from "react-icons/md";
import { GiWorld } from "react-icons/gi";
import { GiWireframeGlobe } from "react-icons/gi";
import { GiBookshelf } from "react-icons/gi";
import { GiBookmarklet } from "react-icons/gi";
import { LiaAwardSolid } from "react-icons/lia";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { IoLogoWhatsapp } from "react-icons/io";
import { VscCheckAll } from "react-icons/vsc";
import { TbSettingsCheck } from "react-icons/tb";



const CountUp = ({ end, duration = 2000, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <span ref={countRef}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};
const Home = () => {
  const { t } = useLanguage();

  // Carousel state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Add your image URLs here - replace with your actual image paths
  const heroImages = [
    "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1920",
    "/2.jpg",
    "/5.jpg",
    "/17.jpg",
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Styles
  const heroSectionStyle = {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    paddingTop: "4rem",
  };

  // Carousel background container
  const carouselContainerStyle = {
    position: "absolute",
    inset: 0,
    zIndex: 0,
    opacity: 1,
  };

  // Individual image style
  const carouselImageStyle = (index) => ({
    position: "absolute",
    inset: 0,
    backgroundImage: `url(${heroImages[index]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: currentImageIndex === index ? 1 : 0,
    transition: "opacity 2s ease-in-out",
  });

  // Overlay to blend with images
  const overlayStyle = {
    position: "absolute",
    inset: 0,
    background: `linear-gradient(135deg, 
      ${COLORS.primary.green900}dd 0%, 
      ${COLORS.primary.green800}cc 50%, 
      ${COLORS.accent.yellow600}dd 100%)`,
    zIndex: 1,
    mixBlendMode: "multiply",
    opacity: 1.7,
  };

  const animatedBgStyle = {
    position: "absolute",
    inset: 0,
    opacity: 0.3,
    zIndex: 2,
  };

  const floatingCircle1Style = {
    position: "absolute",
    top: "5rem",
    left: "2.5rem",
    width: "18rem",
    height: "18rem",
    background: COLORS.primary.green500,
    borderRadius: RADIUS.full,
    filter: "blur(3rem)",
  };

  const floatingCircle2Style = {
    position: "absolute",
    bottom: "5rem",
    right: "2.5rem",
    width: "24rem",
    height: "24rem",
    background: COLORS.accent.yellow500,
    borderRadius: RADIUS.full,
    filter: "blur(3rem)",
  };

  const badgeStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    background: COLORS.green[100],
    color: COLORS.green[700],
    padding: "0.5rem 1rem",
    borderRadius: RADIUS.lg,
    fontSize: "0.875rem",
    fontWeight: "600",
  };

  const headingGradientStyle = {
      fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
    fontWeight: '700',
    background: COLORS.primary.green400,
    WebkitBackgroundClip: "text",
    paddingBottom: "0.25rem",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  const subtitleStyle = {
    fontSize: "1.25rem",
    color: COLORS.neutral.gray200,
    lineHeight: "1.75",
  };

  const primaryButtonStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: GRADIENTS.primary,
    color: COLORS.neutral.white,
    padding: "1rem 2rem",
    borderRadius: RADIUS.lg,
    fontWeight: "700",
    textDecoration: "none",
    transition: "all 0.3s ease",
    boxShadow: SHADOWS.lg,
  };

  const outlineButtonStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: COLORS.neutral.white,
    color: COLORS.primary.green600,
    padding: "1rem 2rem",
    border: `2px solid ${COLORS.primary.green500}`,
    borderRadius: RADIUS.lg,
    fontWeight: "700",
    textDecoration: "none",
    transition: "all 0.3s ease",
  };

  const heroCircleContainerStyle = {
    position: "relative",
    width: "100%",
    height: "24rem",
  };

  const centerCircleStyle = {
    position: "absolute",
    width: "60%",
    height: "60%",
    background: GRADIENTS.greenService,
    borderRadius: RADIUS.full,
    boxShadow: SHADOWS["2xl"],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const statCardBgGreen = {
    background: `linear-gradient(to bottom right, ${COLORS.primary.green100}, ${COLORS.primary.green200})`,
  };

  const statCardBgYellow = {
    background: `linear-gradient(to bottom right, ${COLORS.accent.yellow100}, ${COLORS.accent.yellow200})`,
  };

  const statCardBgRed = {
    background: `linear-gradient(to bottom right, ${COLORS.accent.red100}, ${COLORS.accent.red200})`,
  };

  const cardStyle = {
    background: COLORS.neutral.white,
    borderRadius: RADIUS.xl,
    padding: "2rem",
    boxShadow: SHADOWS.lg,
    transition: "all 0.3s ease",
  };

  const greenCardStyle = {
    ...cardStyle,
    background: GRADIENTS.greenCard,
    border: `2px solid ${COLORS.primary.green100}`,
  };

  const yellowCardStyle = {
    ...cardStyle,
    background: GRADIENTS.yellowCard,
    border: `2px solid ${COLORS.accent.yellow100}`,
  };

  const serviceCardStyle = {
    ...cardStyle,
    cursor: "pointer",
  };

  const sectionTitleStyle = {
    fontSize: "clamp(2rem, 5vw, 3rem)",
    fontWeight: "700",
    color: COLORS.neutral.gray900,
    marginBottom: "1rem",
    textAlign: "center",
  };

  const sectionSubtitleStyle = {
    fontSize: "1.125rem",
    color: COLORS.neutral.gray600,
    maxWidth: "48rem",
    margin: "0 auto",
    textAlign: "center",
  };

  const darkSectionStyle = {
    padding: "5rem 0",
    background: COLORS.neutral.gray900,
    color: COLORS.neutral.white,
  };

  const featureCardStyle = {
    display: "flex",
    alignItems: "flex-start",
    gap: "1rem",
    padding: "1.5rem",
    background: COLORS.neutral.gray800,
    borderRadius: RADIUS.lg,
    transition: "background 0.3s ease",
  };

  const ctaSectionStyle = {
    padding: "5rem 0",
    background: GRADIENTS.ctaGreen,
    color: COLORS.neutral.white,
  };

  const ctaButtonWhiteStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: COLORS.neutral.white,
    color: COLORS.primary.green600,
    fontWeight: "700",
    padding: "1rem 2rem",
    borderRadius: RADIUS.lg,
    textDecoration: "none",
    transition: "all 0.3s ease",
    boxShadow: SHADOWS.lg,
  };

  const ctaButtonOutlineStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    border: `2px solid ${COLORS.neutral.white}`,
    color: COLORS.neutral.white,
    fontWeight: "700",
    padding: "1rem 2rem",
    borderRadius: RADIUS.lg,
    textDecoration: "none",
    transition: "all 0.3s ease",
  };

  const stats = [
    {
      icon: GiArrowCluster,
      label: t("home.stats.projects"),
      value: "50+",
      numericValue: 50,
      suffix: "+",
      colorType: "green",
    },
    {
      icon: FaPeopleRoof,
      label: t("home.stats.communities"),
      value: "100K+",
      numericValue: 100,
      suffix: "K+",
      colorType: "yellow",
    },
    {
      icon: HiMiniArrowTrendingUp,
      label: t("home.stats.investment"),
      value: "$10M+",
      numericValue: 10,
      suffix: "M+",
      prefix: "$",
      colorType: "red",
    },
    {
      icon: IoBulbOutline,
      label: t("home.stats.jobs"),
      value: "5,000+",
      numericValue: 5000,
      suffix: "+",
      colorType: "green",
    },
  ];

    const handleAction = (action) => {
    if (action === "call") {
      window.location.href = "tel:+263785948128";
    } else if (action === "email") {
      window.location.href = "mailto:info@cacz.co.zw";
    } else if (action === "whatsapp") {
      window.location.href =
        "https://wa.me/263785948128?text=Hello%20Climate%20Action%20Center,%20I%20would%20like%20to%20inquire%20about%20your%20services.";
    }
  };
  const services = [
    {
      icon: BookOpen,
      title: "Policy Advisory",
      description:
        "Expert guidance on environmental policy and climate legislation",
      gradient: GRADIENTS.greenService,
    },
    {
      icon: Award,
      title: "MRV & Verification",
      description: "Rigorous monitoring, reporting, and verification services",
      gradient: GRADIENTS.yellowService,
    },
    {
      icon: Users,
      title: "Project Incubation",
      description:
        "Support for bankable climate projects from concept to execution",
      gradient: GRADIENTS.redService,
    },
    {
      icon: GiWorld,
      title: "Green Skills Academy",
      description:
        "Training and certification in climate action and sustainability",
      gradient: GRADIENTS.standardGreenService,
    },
  ];

  const features = [
    "Community-First Approach with FPIC",
    "Investor-Grade Integrity & MRV",
    "Partnership with Government & Regulators",
    "Market-Smart Finance Solutions",
    "Continuous Learning & Accountability",
    "Transparent Digital Registry",
  ];

  const getStatCardBg = (colorType) => {
    switch (colorType) {
      case "green":
        return statCardBgGreen;
      case "yellow":
        return statCardBgYellow;
      case "red":
        return statCardBgRed;
      default:
        return statCardBgGreen;
    }
  };

  const getStatIconColor = (colorType) => {
    switch (colorType) {
      case "green":
        return COLORS.primary.green600;
      case "yellow":
        return COLORS.accent.yellow600;
      case "red":
        return COLORS.accent.red500;
      default:
        return COLORS.primary.green600;
    }
  };

  return (
    <div style={{ paddingTop: "5rem" }}>
      {/* Hero Section */}
      <section style={heroSectionStyle}>
        {/* Image Carousel - Base Layer */}
        <div style={carouselContainerStyle}>
          {heroImages.map((image, index) => (
            <div key={index} style={carouselImageStyle(index)} />
          ))}
        </div>

        {/* Color Overlay - Blends with images */}
        <div style={overlayStyle} />

        {/* Animated Background Elements */}
        <div style={animatedBgStyle}>
          <div className="animate-float" style={floatingCircle1Style} />
          <div className="animate-float" style={floatingCircle2Style} />
        </div>

        <div
          className="container mx-auto px-4"
          style={{ position: "relative", zIndex: 10 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div style={badgeStyle}>
                <GiFallingLeaf size={18} />
                <span>Leading Climate Action in Zimbabwe</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight ">
                <span style={headingGradientStyle}>{t("home.hero.title")}</span>
              </h1>

              <p style={subtitleStyle} className="text-gray-200">
                {t("home.hero.subtitle")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" style={primaryButtonStyle}>
                  {t("home.hero.cta1")}
                  <ArrowRight className="inline ml-2" size={20} />
                </Link>
                <Link to="/about" style={outlineButtonStyle}>
                  {t("home.hero.cta2")}
                </Link>
              </div>
            </motion.div>

            {/* Hero Image/Animation */}
<motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div style={{ ...heroCircleContainerStyle, height: "500px" }}>
                {/* Animated Circle Elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      borderRadius: RADIUS.full,
                      border: `4px solid ${COLORS.primary.green200}`,
                    }}
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      position: "absolute",
                      width: "80%",
                      height: "80%",
                      borderRadius: RADIUS.full,
                      border: `4px solid ${COLORS.accent.yellow200}`,
                    }}
                  />
                  
                  {/* Glassy Green Background Container */}
                  <div style={{
                    ...centerCircleStyle,
                    background: `linear-gradient(135deg, 
                      rgba(34, 197, 94, 0.3) 0%, 
                      rgba(22, 163, 74, 0.4) 50%, 
                      rgba(21, 128, 61, 0.3) 100%)`,
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: `2px solid rgba(34, 197, 94, 0.3)`,
                    boxShadow: `
                      0 8px 32px rgba(34, 197, 94, 0.3),
                      inset 0 1px 0 rgba(255, 255, 255, 0.2),
                      inset 0 -1px 0 rgba(0, 0, 0, 0.1),
                      0 0 80px rgba(34, 197, 94, 0.2)
                    `,
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    {/* Shimmer/Water Effect */}
                    <motion.div
                      animate={{
                        background: [
                          'linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
                          'linear-gradient(225deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: RADIUS.full,
                      }}
                    />
                    
                    {/* Floating Particles Effect */}
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      style={{
                        position: 'absolute',
                        top: '20%',
                        left: '30%',
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.4)',
                        filter: 'blur(2px)',
                      }}
                    />
                    <motion.div
                      animate={{
                        y: [0, -15, 0],
                        opacity: [0.4, 0.7, 0.4],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                      style={{
                        position: 'absolute',
                        top: '60%',
                        right: '25%',
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.5)',
                        filter: 'blur(2px)',
                      }}
                    />
                    <motion.div
                      animate={{
                        y: [0, -12, 0],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 4.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                      }}
                      style={{
                        position: 'absolute',
                        bottom: '30%',
                        left: '20%',
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.3)',
                        filter: 'blur(3px)',
                      }}
                    />
                    
                    {/* Inner Glow */}
                    <div style={{
                      position: 'absolute',
                      inset: '10%',
                      borderRadius: RADIUS.full,
                      background: 'radial-gradient(circle, rgba(34, 197, 94, 0.2) 0%, transparent 70%)',
                    }} />
                    
                    {/* Leaf Icon */}
                    <GiFallingLeaf
                      size={100}
                      style={{ 
                        color: COLORS.neutral.white,
                        position: 'relative',
                        zIndex: 10,
                        filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
                      }}
                      className="animate-pulse-slow"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "0.5rem",
            zIndex: 10,
          }}
        >
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              style={{
                width: currentImageIndex === index ? "2rem" : "0.5rem",
                height: "0.5rem",
                borderRadius: RADIUS.full,
                background:
                  currentImageIndex === index
                    ? COLORS.neutral.white
                    : "rgba(255, 255, 255, 0.5)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section with Count-Up Animation */}
      <section style={{ padding: "5rem 0", background: COLORS.neutral.white }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "4rem",
                    height: "4rem",
                    borderRadius: RADIUS.full,
                    marginBottom: "1rem",
                    ...getStatCardBg(stat.colorType),
                  }}
                >
                  <stat.icon
                    style={{ color: getStatIconColor(stat.colorType) }}
                    size={32}
                  />
                </div>
                <h3
                  style={{
                    fontSize: "2.25rem",
                    fontWeight: "700",
                    color: COLORS.neutral.gray900,
                    marginBottom: "0.5rem",
                  }}
                >
                  <CountUp
                    end={stat.numericValue}
                    duration={2000}
                    suffix={stat.suffix || ""}
                    prefix={stat.prefix || ""}
                  />
                </h3>
                <p style={{ color: COLORS.neutral.gray600 }}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Promise */}
      <section style={{ padding: "5rem 0", background: GRADIENTS.grayToWhite }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={greenCardStyle}
            >
              <GiMiddleArrow
                style={{ color: COLORS.primary.green600, marginBottom: "1rem" }}
                size={48}
              />
              <h2
                style={{
                  fontSize: "1.875rem",
                  fontWeight: "700",
                  color: COLORS.neutral.gray900,
                  marginBottom: "1rem",
                }}
              >
                {t("home.vision.title")}
              </h2>
              <p style={{ color: COLORS.neutral.gray700, lineHeight: "1.75" }}>
                {t("home.vision.text")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={yellowCardStyle}
            >
              <VscCheckAll
                style={{ color: COLORS.accent.yellow600, marginBottom: "1rem" }}
                size={48}
              />
              <h2
                style={{
                  fontSize: "1.875rem",
                  fontWeight: "700",
                  color: COLORS.neutral.gray900,
                  marginBottom: "1rem",
                }}
              >
                {t("home.promise.title")}
              </h2>
              <p style={{ color: COLORS.neutral.gray700, lineHeight: "1.75" }}>
                {t("home.promise.text")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Bento Design with Background Images */}
      <section style={{ padding: "5rem 0", background: COLORS.neutral.white }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 style={sectionTitleStyle}>Core Services</h2>
            <p style={sectionSubtitleStyle}>
              Comprehensive climate solutions for lasting impact
            </p>
          </motion.div>

          {/* Bento Grid Layout */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridTemplateRows: "repeat(2, 300px)",
              gap: "1.5rem",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
            className="bento-grid"
          >
            {/* Policy Advisory - Large Card (Spans 2 columns, 2 rows) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              style={{
                ...cardStyle,
                gridColumn: "span 2",
                gridRow: "span 2",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Background Image */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "url(/10.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  zIndex: 0,
                }}
              />

              {/* Gradient Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(135deg, ${COLORS.primary.green900}dd, ${COLORS.primary.green700}ee)`,
                  zIndex: 1,
                }}
              />

              {/* Content */}
              <div style={{ position: "relative", zIndex: 2 }}>
                <span
                  style={{
                    display: "inline-block",
                    padding: "0.5rem 1rem",
                    background: "rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(10px)",
                    borderRadius: RADIUS.full,
                    fontSize: "0.75rem",
                    fontWeight: "600",
                    color: COLORS.neutral.white,
                    marginBottom: "1.5rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  ADVISORY
                </span>
                <h3
                  style={{
                    fontSize: "2rem",
                    fontWeight: "700",
                    color: COLORS.neutral.white,
                    marginBottom: "1rem",
                    lineHeight: "1.2",
                  }}
                >
                  Policy Advisory
                </h3>
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.95)",
                    fontSize: "1rem",
                    lineHeight: "1.75",
                    marginBottom: "2rem",
                  }}
                >
                  Expert guidance on environmental policy and climate
                  legislation
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                < GiBookmarklet
                  style={{ color: "rgba(255, 255, 255, 0.4)" }}
                  size={64}
                />
                <ArrowRight style={{ color: COLORS.neutral.white }} size={24} />
              </div>
            </motion.div>

            {/* MRV & Verification - Medium Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              style={{
                ...cardStyle,
                gridColumn: "span 1",
                gridRow: "span 1",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Background Image */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "url(/14.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  zIndex: 0,
                }}
              />

              {/* Gradient Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(135deg, ${COLORS.accent.yellow600}dd, ${COLORS.accent.yellow400}ee)`,
                  zIndex: 1,
                }}
              />

              {/* Content */}
              <div style={{ position: "relative", zIndex: 2 }}>
                <div
                  style={{
                    width: "3rem",
                    height: "3rem",
                    borderRadius: RADIUS.lg,
                    background: "rgba(255, 255, 255, 0.25)",
                    backdropFilter: "blur(10px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <LiaAwardSolid
                    style={{ color: COLORS.neutral.white }}
                    size={24}
                  />
                </div>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "700",
                    color: COLORS.neutral.white,
                    marginBottom: "0.5rem",
                  }}
                >
                  MRV & Verification
                </h3>
              </div>
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.95)",
                  fontSize: "0.875rem",
                  lineHeight: "1.5",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Rigorous monitoring, reporting, and verification services
              </p>
            </motion.div>

            {/* Project Incubation - Medium Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              style={{
                ...cardStyle,
                gridColumn: "span 1",
                gridRow: "span 1",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Background Image */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "url(18.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  zIndex: 0,
                }}
              />

              {/* Gradient Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(135deg, ${COLORS.accent.red700}dd, ${COLORS.accent.red500}ee)`,
                  zIndex: 1,
                }}
              />

              {/* Content */}
              <div style={{ position: "relative", zIndex: 2 }}>
                <div
                  style={{
                    width: "3rem",
                    height: "3rem",
                    borderRadius: RADIUS.lg,
                    background: "rgba(255, 255, 255, 0.25)",
                    backdropFilter: "blur(10px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <LiaPeopleCarrySolid
                    style={{ color: COLORS.neutral.white }}
                    size={24}
                  />
                </div>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "700",
                    color: COLORS.neutral.white,
                    marginBottom: "0.5rem",
                  }}
                >
                  Project Incubation
                </h3>
              </div>
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.95)",
                  fontSize: "0.875rem",
                  lineHeight: "1.5",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Support for bankable climate projects from concept to execution
              </p>
            </motion.div>

            {/* Green Skills Academy - Large Horizontal Card (Spans 2 columns) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -10, scale: 1.02 }}
              style={{
                ...cardStyle,
                gridColumn: "span 2",
                gridRow: "span 1",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "2rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Background Image */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: "url(/23.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  zIndex: 0,
                }}
              />

              {/* Gradient Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(135deg, ${COLORS.primary.green800}dd, ${COLORS.primary.green600}ee)`,
                  zIndex: 1,
                }}
              />

              {/* Content */}
              <div style={{ flex: 1, position: "relative", zIndex: 2 }}>
                <span
                  style={{
                    display: "inline-block",
                    padding: "0.5rem 1rem",
                    background: "rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(10px)",
                    borderRadius: RADIUS.full,
                    fontSize: "0.75rem",
                    fontWeight: "600",
                    color: COLORS.neutral.white,
                    marginBottom: "1rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  TRAINING
                </span>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    color: COLORS.neutral.white,
                    marginBottom: "0.75rem",
                  }}
                >
                  Green Skills Academy
                </h3>
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.95)",
                    fontSize: "0.875rem",
                    lineHeight: "1.75",
                  }}
                >
                  Training and certification in climate action and
                  sustainability
                </p>
              </div>
              <GiWorld
                style={{
                  color: "rgba(255, 255, 255, 0.3)",
                  position: "relative",
                  zIndex: 2,
                }}
                size={80}
              />
            </motion.div>
          </div>

          {/* Responsive Styles for Mobile */}
          <style>{`
      @media (max-width: 1024px) {
        .bento-grid {
          grid-template-columns: repeat(2, 1fr) !important;
          grid-template-rows: auto !important;
        }
        .bento-grid > div {
          grid-column: span 1 !important;
          grid-row: span 1 !important;
          min-height: 250px;
        }
        .bento-grid > div:first-child {
          grid-column: span 2 !important;
        }
        .bento-grid > div:last-child {
          grid-column: span 2 !important;
        }
      }
      @media (max-width: 640px) {
        .bento-grid {
          grid-template-columns: 1fr !important;
        }
        .bento-grid > div {
          grid-column: span 1 !important;
          min-height: 200px;
        }
      }
    `}</style>
        </div>
      </section>

            {/* Floating Action Elements */}
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

      {/* Features Section */}
      <section style={darkSectionStyle}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              style={{
                fontSize: "2.25rem",
                fontWeight: "700",
                marginBottom: "1rem",
              }}
            >
              Our Principles
            </h2>
            <p style={{ fontSize: "1.25rem", color: COLORS.neutral.gray300 }}>
              Delivering climate action with integrity and impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={featureCardStyle}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = COLORS.neutral.gray750)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = COLORS.neutral.gray800)
                }
              >
                <TbSettingsCheck
                  style={{
                    color: COLORS.primary.green400,
                    flexShrink: 0,
                    marginTop: "0.25rem",
                  }}
                  size={24}
                />
                <p style={{ color: COLORS.neutral.gray200 }}>{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={ctaSectionStyle}>
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 style={{ fontSize: "2.25rem", fontWeight: "700" }}>
              Ready to Make an Impact?
            </h2>
            <p style={{ fontSize: "1.25rem", color: COLORS.primary.green100 }}>
              Join us in building a resilient, sustainable Zimbabwe through
              inclusive climate action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" style={ctaButtonWhiteStyle}>
                Get Involved Today
              </Link>
              <Link to="/projects" style={ctaButtonOutlineStyle}>
                Explore Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
