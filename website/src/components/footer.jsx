import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";
import { useLanguage } from "./lunguagecontext";
import { FaXTwitter } from "react-icons/fa6";
import { COLORS, GRADIENTS, SHADOWS, RADIUS } from "./theme";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Styles
  const footerStyle = {
    background: COLORS.neutral.gray900,
    color: COLORS.neutral.white,
    position: "relative",
    overflow: "hidden",
  };

  const decorativeLayerStyle = {
    position: "absolute",
    inset: 0,
    opacity: 0.05,
  };

  const backToTopButtonStyle = {
    position: "absolute",
    right: "2rem",
    top: "-1.5rem",
    background: COLORS.primary.green,
    color: COLORS.neutral.white,
    padding: "1rem",
    borderRadius: RADIUS.full,
    boxShadow: SHADOWS.lg,
    transition: "all 0.3s ease",
    border: "none",
    cursor: "pointer",
    zIndex: 10,
  };

  const backToTopHoverStyle = {
    background: COLORS.primary.greenDark,
    transform: "scale(1.1)",
  };

  const containerStyle = {
    padding: "4rem 1rem",
    position: "relative",
    zIndex: 10,
  };

  const logoCircleStyle = {
    width: "6rem",
    height: "6rem",
    borderRadius: RADIUS.full,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const logoTextStyle = {
    fontSize: "1.25rem",
    fontWeight: "700",
  };

  const logoSubtextStyle = {
    fontSize: "0.75rem",
    color: COLORS.neutral.gray400,
  };

  const descriptionStyle = {
    color: COLORS.neutral.gray400,
    fontSize: "0.875rem",
    lineHeight: "1.75",
  };

  const socialLinkStyle = {
    width: "2.5rem",
    height: "2.5rem",
    background: COLORS.neutral.gray800,
    borderRadius: RADIUS.lg,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background 0.3s ease",
    textDecoration: "none",
    color: COLORS.neutral.white,
  };

  const socialLinkHoverStyle = {
    background: COLORS.primary.green,
  };

  const sectionTitleStyle = {
    fontSize: "1.125rem",
    fontWeight: "700",
    marginBottom: "1rem",
  };

  const linkStyle = {
    color: COLORS.neutral.gray400,
    fontSize: "0.875rem",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    transition: "color 0.3s ease",
  };

  const linkHoverStyle = {
    color: COLORS.primary.green,
  };

  const linkUnderlineStyle = {
    width: 0,
    height: "1px",
    background: COLORS.primary.green,
    transition: "width 0.3s ease",
    marginRight: "0.5rem",
  };

  const linkUnderlineHoverStyle = {
    width: "1rem",
  };

  const contactItemStyle = {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.75rem",
    fontSize: "0.875rem",
    color: COLORS.neutral.gray400,
  };

  const contactLinkStyle = {
    color: COLORS.neutral.gray400,
    textDecoration: "none",
    transition: "color 0.3s ease",
  };

  const contactLinkHoverStyle = {
    color: COLORS.primary.green,
  };

  const bottomBarStyle = {
    marginTop: "3rem",
    paddingTop: "2rem",
    borderTop: `1px solid ${COLORS.neutral.gray800}`,
  };

  const copyrightStyle = {
    fontSize: "0.875rem",
    color: COLORS.neutral.gray400,
  };

  const footerLinks = {
    quickLinks: [
      { name: t("nav.home"), path: "/" },
      { name: t("nav.about"), path: "/about" },
      { name: t("nav.whatWeDo"), path: "/what-we-do" },
      { name: t("nav.projects"), path: "/projects" },
    ],
    programs: [
      { name: "Green Skills Academy", path: "/resources" },
      { name: "Youth Innovation", path: "/projects" },
      { name: "MRV Registry", path: "/resources" },
      { name: "Climate Summit", path: "/blog" },
    ],
  };

  const socialLinks = [
    {
      icon: Facebook,
      url: "https://facebook.com/ZimClimateAction",
      label: "Facebook",
    },
    {
      icon: FaXTwitter,
      url: "https://twitter.com/ZimClimateAction",
      label: "Twitter",
    },
    {
      icon: Linkedin,
      url: "https://linkedin.com/company/cacz",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      url: "https://instagram.com/ZimClimateAction",
      label: "Instagram",
    },
  ];

  return (
    <footer style={footerStyle}>
      {/* Decorative Elements */}
      <div style={decorativeLayerStyle}>
        <div className="leaf-pattern h-full"></div>
      </div>

      <div className="container mx-auto" style={containerStyle}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div style={logoCircleStyle}>
                <img
                  src="/logo.png"
                  alt="CACZ Logo"
                  style={{
                    width: "3rem",
                    height: "3rem",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div>
                <div style={logoTextStyle}>CACZ</div>
                <div style={logoSubtextStyle}>Climate Action Council</div>
              </div>
            </div>
            <p style={descriptionStyle}>
              The brain that designs standards, the voice that convenes, and the
              hands that deliver — ensuring Zimbabwe leads Africa in climate
              action.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  style={socialLinkStyle}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background =
                      socialLinkHoverStyle.background)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = COLORS.neutral.gray800)
                  }
                  aria-label={social.label}
                >
                  <social.icon
                    style={{ width: "1.25rem", height: "1.25rem" }}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={sectionTitleStyle}>Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    style={linkStyle}
                    className="group"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = linkHoverStyle.color;
                      const underline =
                        e.currentTarget.querySelector(".link-underline");
                      if (underline)
                        underline.style.width = linkUnderlineHoverStyle.width;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = COLORS.neutral.gray400;
                      const underline =
                        e.currentTarget.querySelector(".link-underline");
                      if (underline) underline.style.width = "0";
                    }}
                  >
                    <span
                      className="link-underline"
                      style={linkUnderlineStyle}
                    ></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 style={sectionTitleStyle}>Programs</h3>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    style={linkStyle}
                    className="group"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = linkHoverStyle.color;
                      const underline =
                        e.currentTarget.querySelector(".link-underline");
                      if (underline)
                        underline.style.width = linkUnderlineHoverStyle.width;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = COLORS.neutral.gray400;
                      const underline =
                        e.currentTarget.querySelector(".link-underline");
                      if (underline) underline.style.width = "0";
                    }}
                  >
                    <span
                      className="link-underline"
                      style={linkUnderlineStyle}
                    ></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={sectionTitleStyle}>Contact</h3>
            <ul className="space-y-4">
              <li style={contactItemStyle}>
                <Mail
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                    color: COLORS.primary.green,
                    flexShrink: 0,
                    marginTop: "0.125rem",
                  }}
                />
                <a
                  href="mailto:info@cacz.org.zw"
                  style={contactLinkStyle}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = contactLinkHoverStyle.color)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = COLORS.neutral.gray400)
                  }
                >
                  info@cacz.org.zw
                </a>
              </li>
              <li style={contactItemStyle}>
                <Phone
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                    color: COLORS.primary.green,
                    flexShrink: 0,
                    marginTop: "0.125rem",
                  }}
                />
                <span>+263 71 302 0467</span>
              </li>
              <li style={contactItemStyle}>
                <Phone
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                    color: COLORS.primary.green,
                    flexShrink: 0,
                    marginTop: "0.125rem",
                  }}
                />
                <span>+263 78 475 2721</span>
              </li>
              <li style={contactItemStyle}>
                <MapPin
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                    color: COLORS.primary.green,
                    flexShrink: 0,
                    marginTop: "0.125rem",
                  }}
                />
                <span>19 Fort Street, Bulawayo</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={bottomBarStyle}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p style={copyrightStyle}>
              © {currentYear} Climate Action Council of Zimbabwe. All rights
              reserved.
            </p>
            <br />
            <p style={copyrightStyle}>
              Developed By{" "}
              <a
                href="https://bitstudio.co.zw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong style={{ textDecoration: "underline" }}>
                  Bit Studio Limited
                </strong>
              </a>
            </p>
            <div className="flex space-x-6">
              <Link
                to="/privacy"
                style={copyrightStyle}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = COLORS.primary.green)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = COLORS.neutral.gray400)
                }
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                style={copyrightStyle}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = COLORS.primary.green)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = COLORS.neutral.gray400)
                }
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
