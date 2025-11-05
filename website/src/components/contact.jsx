// Contact.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Clock,
  MessageSquare,
  CheckCircle,
  FileText ,
  Users,
  Briefcase,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import { FaXTwitter } from "react-icons/fa6";
import { BsArrowUpCircle } from "react-icons/bs";
import { COLORS, GRADIENTS, SHADOWS, RADIUS } from "./theme";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [mapLoaded, setMapLoaded] = useState(false);

  // Load Leaflet CSS and JS
  useEffect(() => {
    // Add Leaflet CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(link);

    // Add Leaflet JS
    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.async = true;
    script.onload = () => {
      setMapLoaded(true);
      initMap();
    };
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  const initMap = () => {
    if (typeof window !== "undefined" && window.L) {
      // Harare coordinates
      const map = window.L.map("map").setView([-20.160641, 28.582354,16.1], 13);

      window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(map);

      // Custom marker icon
      const customIcon = window.L.icon({
        iconUrl:
          "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });

      // Add marker
      window.L.marker([-20.160641, 28.582354,16.1], { icon: customIcon })
        .addTo(map)
        .bindPopup("<b>CACZ Headquarters</b><br>Bulawayo, Zimbabwe")
        .openPopup();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "info@cacz.org.zw",
      link: "mailto:info@cacz.org.zw",
      gradient: GRADIENTS.greenService,
      color: COLORS.primary.green600,
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+263 ...",
      link: "tel:+263 71 302 0467",
      gradient: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
      color: "#3B82F6",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "19 Fort Street,  Bulawayo",
      link: null,
      gradient: "linear-gradient(135deg, #F59E0B, #D97706)",
      color: "#F59E0B",
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      href: "https://facebook.com",
      color: "#1877F2",
      gradient: "linear-gradient(135deg, #1877F2, #0C63D4)",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://linkedin.com",
      color: "#0A66C2",
      gradient: "linear-gradient(135deg, #0A66C2, #004182)",
    },
    {
      icon: Instagram,
      name: "Instagram",
      href: "https://instagram.com",
      color: "#E4405F",
      gradient: "linear-gradient(135deg, #E4405F, #833AB4)",
    },
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 5:00 PM", available: true },
    { day: "Saturday", hours: "9:00 AM - 1:00 PM", available: true },
    { day: "Sunday", hours: "Closed", available: false },
  ];

  const reasons = [
    { icon: MessageSquare, text: "Investment Inquiries" },
    { icon: FileText, text: "Project Submissions" },
    { icon: Users, text: "Partnership Opportunities" },
    { icon: Briefcase, text: "Career Applications" },
  ];

  return (
    <div style={{ paddingTop: "5rem", background: COLORS.neutral.gray50 }}>
      {/* Hero Section with Background Image */}
      <section
        style={{
          position: "relative",
          padding: "6rem 0",
          overflow: "hidden",
        }}
      >
        {/* Background Image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url(/25.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />

        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(135deg, ${COLORS.primary.green900}ee, ${COLORS.primary.green700}dd)`,
            zIndex: 1,
          }}
        />

        {/* Decorative Elements */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "5%",
            width: "400px",
            height: "400px",
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: RADIUS.full,
            filter: "blur(100px)",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div
          className="container mx-auto px-4"
          style={{ position: "relative", zIndex: 10 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(10px)",
                padding: "0.75rem 1.5rem",
                borderRadius: RADIUS.full,
                marginBottom: "2rem",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <Sparkles size={18} style={{ color: COLORS.accent.yellow400 }} />
              <span
                style={{
                  color: COLORS.neutral.white,
                  fontWeight: "600",
                  fontSize: "0.875rem",
                }}
              >
                WE'RE HERE TO HELP
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: "700",
                color: COLORS.neutral.white,
                marginBottom: "1.5rem",
                lineHeight: "1.1",
              }}
            >
              Get in Touch
            </h1>

            <p
              style={{
                fontSize: "1.25rem",
                color: "rgba(255, 255, 255, 0.95)",
                marginBottom: "3rem",
                maxWidth: "42rem",
                margin: "0 auto",
              }}
            >
              Whether you're looking to invest, submit a project, join our team,
              or partner with us, we'd love to hear from you
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      {/* Quick Contact Cards */}
      <section style={{ padding: "4rem 0", background: COLORS.neutral.white }}>
        <div className="container mx-auto px-4">
          <div
            className="grid md:grid-cols-3 gap-6 -mt-24"
            style={{ position: "relative", zIndex: 10 }}
          >
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  borderRadius: RADIUS.xl,
                  padding: "2rem",
                  boxShadow: SHADOWS.xl,
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  border: `2px solid rgba(255, 255, 255, 0.3)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = SHADOWS["2xl"];
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.85)';
                  e.currentTarget.style.border = `2px solid ${info.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = SHADOWS.xl;
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.7)';
                  e.currentTarget.style.border = '2px solid rgba(255, 255, 255, 0.3)';
                }}
              >
                <div
                  style={{
                    width: "4rem",
                    height: "4rem",
                    background: info.gradient,
                    borderRadius: RADIUS.full,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem",
                    boxShadow: `0 8px 16px ${info.color}40`,
                  }}
                >
                  <info.icon
                    size={24}
                    style={{ color: COLORS.neutral.white }}
                  />
                </div>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "700",
                    color: COLORS.neutral.gray900,
                    marginBottom: "0.75rem",
                  }}
                >
                  {info.title}
                </h3>
                {info.link ? (
                  
                    <a href={info.link}
                    style={{
                      color: info.color,
                      textDecoration: "none",
                      fontWeight: "600",
                      transition: "opacity 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.opacity = "0.7")
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    {info.details}
                  </a>
                ) : (
                  <p
                    style={{ color: COLORS.neutral.gray600, fontWeight: "600" }}
                  >
                    {info.details}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section style={{ padding: "4rem 0", background: COLORS.neutral.gray50 }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Form - Takes 3 columns */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{
                  background: COLORS.neutral.white,
                  borderRadius: RADIUS.xl,
                  padding: "3rem",
                  boxShadow: SHADOWS.lg,
                }}
              >
                <h2
                  style={{
                    fontSize: "2rem",
                    fontWeight: "700",
                    color: COLORS.neutral.gray900,
                    marginBottom: "1rem",
                  }}
                >
                  Send Us a Message
                </h2>
                <p
                  style={{
                    color: COLORS.neutral.gray600,
                    marginBottom: "2rem",
                  }}
                >
                  Fill out the form below and we'll get back to you as soon as
                  possible
                </p>

                <form
                  onSubmit={handleSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "600",
                        color: COLORS.neutral.gray700,
                        marginBottom: "0.5rem",
                      }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      style={{
                        width: "100%",
                        padding: "0.875rem 1rem",
                        border: `2px solid ${COLORS.neutral.gray200}`,
                        borderRadius: RADIUS.lg,
                        fontSize: "1rem",
                        outline: "none",
                        transition: "all 0.3s ease",
                      }}
                      placeholder="John Doe"
                      onFocus={(e) => {
                        e.target.style.borderColor = COLORS.primary.green500;
                        e.target.style.boxShadow = `0 0 0 3px ${COLORS.primary.green100}`;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = COLORS.neutral.gray200;
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "600",
                        color: COLORS.neutral.gray700,
                        marginBottom: "0.5rem",
                      }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      style={{
                        width: "100%",
                        padding: "0.875rem 1rem",
                        border: `2px solid ${COLORS.neutral.gray200}`,
                        borderRadius: RADIUS.lg,
                        fontSize: "1rem",
                        outline: "none",
                        transition: "all 0.3s ease",
                      }}
                      placeholder="john@example.com"
                      onFocus={(e) => {
                        e.target.style.borderColor = COLORS.primary.green500;
                        e.target.style.boxShadow = `0 0 0 3px ${COLORS.primary.green100}`;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = COLORS.neutral.gray200;
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "600",
                        color: COLORS.neutral.gray700,
                        marginBottom: "0.5rem",
                      }}
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      style={{
                        width: "100%",
                        padding: "0.875rem 1rem",
                        border: `2px solid ${COLORS.neutral.gray200}`,
                        borderRadius: RADIUS.lg,
                        fontSize: "1rem",
                        outline: "none",
                        transition: "all 0.3s ease",
                      }}
                      placeholder="What is this regarding?"
                      onFocus={(e) => {
                        e.target.style.borderColor = COLORS.primary.green500;
                        e.target.style.boxShadow = `0 0 0 3px ${COLORS.primary.green100}`;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = COLORS.neutral.gray200;
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "600",
                        color: COLORS.neutral.gray700,
                        marginBottom: "0.5rem",
                      }}
                    >
                      Message *
                    </label>
                    <textarea
                      required
                      rows="6"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      style={{
                        width: "100%",
                        padding: "0.875rem 1rem",
                        border: `2px solid ${COLORS.neutral.gray200}`,
                        borderRadius: RADIUS.lg,
                        fontSize: "1rem",
                        outline: "none",
                        transition: "all 0.3s ease",
                        resize: "vertical",
                      }}
                      placeholder="Tell us more about your inquiry..."
                      onFocus={(e) => {
                        e.target.style.borderColor = COLORS.primary.green500;
                        e.target.style.boxShadow = `0 0 0 3px ${COLORS.primary.green100}`;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = COLORS.neutral.gray200;
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                      padding: "1rem 2rem",
                      background: GRADIENTS.primary,
                      color: COLORS.neutral.white,
                      border: "none",
                      borderRadius: RADIUS.lg,
                      fontSize: "1rem",
                      fontWeight: "700",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = SHADOWS.xl;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <span>Send Message</span>
                    <Send size={18} />
                  </button>
                </form>
              </motion.div>
            </div>

            {/* Sidebar - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              {/* Office Hours */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{
                  background: COLORS.neutral.white,
                  borderRadius: RADIUS.xl,
                  padding: "2rem",
                  boxShadow: SHADOWS.lg,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      width: "3rem",
                      height: "3rem",
                      background: GRADIENTS.primary,
                      borderRadius: RADIUS.lg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Clock size={20} style={{ color: COLORS.neutral.white }} />
                  </div>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "700",
                      color: COLORS.neutral.gray900,
                    }}
                  >
                    Office Hours
                  </h3>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  {officeHours.map((schedule, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "1rem",
                        background: schedule.available
                          ? COLORS.primary.green50
                          : COLORS.neutral.gray50,
                        borderRadius: RADIUS.lg,
                        border: `2px solid ${
                          schedule.available
                            ? COLORS.primary.green200
                            : COLORS.neutral.gray200
                        }`,
                      }}
                    >
                      <span
                        style={{
                          fontWeight: "600",
                          color: COLORS.neutral.gray900,
                        }}
                      >
                        {schedule.day}
                      </span>
                      <span
                        style={{
                          color: schedule.available
                            ? COLORS.primary.green600
                            : COLORS.neutral.gray600,
                          fontWeight: "600",
                        }}
                      >
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Reasons to Contact */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                style={{
                  background: `linear-gradient(135deg, ${COLORS.primary.green50}, ${COLORS.accent.yellow50})`,
                  borderRadius: RADIUS.xl,
                  padding: "2rem",
                  border: `2px solid ${COLORS.primary.green200}`,
                }}
              >
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "700",
                    color: COLORS.neutral.gray900,
                    marginBottom: "1.5rem",
                  }}
                >
                  What can we help with?
                </h3>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  {reasons.map((reason, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        padding: "0.75rem",
                        background: COLORS.neutral.white,
                        borderRadius: RADIUS.lg,
                      }}
                    >
                      <CheckCircle
                        size={20}
                        style={{ color: COLORS.primary.green600 }}
                      />
                      <span
                        style={{
                          color: COLORS.neutral.gray700,
                          fontWeight: "500",
                        }}
                      >
                        {reason.text}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                style={{
                  background: COLORS.neutral.white,
                  borderRadius: RADIUS.xl,
                  padding: "2rem",
                  boxShadow: SHADOWS.lg,
                }}
              >
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "700",
                    color: COLORS.neutral.gray900,
                    marginBottom: "1.5rem",
                  }}
                >
                  Follow Us
                </h3>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                  }}
                >
                  {socialLinks.map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "1.25rem",
                        background: COLORS.neutral.gray50,
                        borderRadius: RADIUS.lg,
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                        border: `2px solid ${COLORS.neutral.gray100}`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = social.color + "15";
                        e.currentTarget.style.borderColor = social.color;
                        e.currentTarget.style.transform = "translateY(-3px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background =
                          COLORS.neutral.gray50;
                        e.currentTarget.style.borderColor =
                          COLORS.neutral.gray100;
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <div
                        style={{
                          width: "3rem",
                          height: "3rem",
                          background: social.gradient,
                          borderRadius: RADIUS.full,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <social.icon
                          size={20}
                          style={{ color: COLORS.neutral.white }}
                        />
                      </div>
                      <span
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: "600",
                          color: COLORS.neutral.gray700,
                        }}
                      >
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section with Leaflet */}
      <section style={{ padding: "4rem 0", background: COLORS.neutral.white }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: "2rem", textAlign: "center" }}
          >
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 2.5rem)",
                fontWeight: "700",
                color: COLORS.neutral.gray900,
                marginBottom: "1rem",
              }}
            >
              Visit Our Office
            </h2>
            <p
              style={{
                fontSize: "1.125rem",
                color: COLORS.neutral.gray600,
              }}
            >
              CACZ Headquarters, Bulawayo, Zimbabwe
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              borderRadius: RADIUS.xl,
              overflow: "hidden",
              boxShadow: SHADOWS.xl,
              height: "500px",
              border: `4px solid ${COLORS.neutral.gray100}`,
            }}
          >
            <div id="map" style={{ width: "100%", height: "100%" }} />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          padding: "5rem 0",
          background: GRADIENTS.ctaGreen,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: "500px",
            height: "500px",
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: RADIUS.full,
            filter: "blur(80px)",
          }}
        >
          <div
            className="container mx-auto px-4"
            style={{ position: "relative", zIndex: 1 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2
                style={{
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  fontWeight: "700",
                  color: COLORS.neutral.white,
                  marginBottom: "1.5rem",
                }}
              >
                Prefer to Talk Directly?
              </h2>
              <p
                style={{
                  fontSize: "1.125rem",
                  color: "rgba(255, 255, 255, 0.9)",
                  marginBottom: "2.5rem",
                }}
              >
                Schedule a call with our team to discuss your climate action
                initiatives
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "center",
                }}
                className="flex-col sm:flex-row"
              >
                <a
                  href="tel:+263"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "1rem 2rem",
                    background: COLORS.neutral.white,
                    color: COLORS.primary.green600,
                    border: "none",
                    borderRadius: RADIUS.lg,
                    fontWeight: "700",
                    textDecoration: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <Phone size={20} />
                  Call Us Now
                </a>

                <a
                  href="mailto:info@cacz.org.zw"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "1rem 2rem",
                    background: "transparent",
                    color: COLORS.neutral.white,
                    border: "2px solid rgba(255, 255, 255, 0.3)",
                    borderRadius: RADIUS.lg,
                    fontWeight: "700",
                    textDecoration: "none",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.borderColor =
                      "rgba(255, 255, 255, 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor =
                      "rgba(255, 255, 255, 0.3)";
                  }}
                >
                  <Mail size={20} />
                  Email Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default Contact;
