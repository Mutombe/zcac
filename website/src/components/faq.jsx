import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import { useLanguage } from "./lunguagecontext";
import { COLORS, GRADIENTS, SHADOWS, RADIUS } from "./theme";
import { BsArrowUpCircle } from "react-icons/bs";

const FAQs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  // Styles
  const heroSectionStyle = {
    padding: "5rem 0",
    background: `linear-gradient(to bottom right, ${COLORS.primary.green}10, ${COLORS.neutral.white}, ${COLORS.accent.yellow}10)`,
  };

  const headingStyle = {
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
    fontWeight: "700",
    marginBottom: "1.5rem",
    textAlign: "center",
  };

  const gradientTextStyle = {
    background: GRADIENTS.primary,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  const subtitleStyle = {
    fontSize: "1.25rem",
    color: COLORS.neutral.gray600,
    marginBottom: "2rem",
    textAlign: "center",
  };

  const searchContainerStyle = {
    maxWidth: "28rem",
    margin: "0 auto",
    position: "relative",
  };

  const searchIconStyle = {
    position: "absolute",
    left: "1rem",
    top: "50%",
    transform: "translateY(-50%)",
    color: COLORS.neutral.gray400,
    width: "1.25rem",
    height: "1.25rem",
  };

  const searchInputStyle = {
    width: "100%",
    paddingLeft: "3rem",
    paddingRight: "1rem",
    paddingTop: "0.75rem",
    paddingBottom: "0.75rem",
    borderRadius: RADIUS.lg,
    border: `1px solid ${COLORS.neutral.gray300}`,
    outline: "none",
    transition: "all 0.3s ease",
  };

  const faqsSectionStyle = {
    padding: "5rem 0",
    background: COLORS.neutral.white,
  };

  const categoryTitleStyle = {
    fontSize: "1.5rem",
    fontWeight: "700",
    marginBottom: "1.5rem",
    color: COLORS.neutral.gray900,
  };

  const faqItemStyle = {
    background: COLORS.neutral.gray50,
    borderRadius: RADIUS.xl,
    overflow: "hidden",
    border: `1px solid ${COLORS.neutral.gray200}`,
  };

  const faqButtonStyle = {
    width: "100%",
    padding: "1rem 1.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "left",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    transition: "background 0.3s ease",
  };

  const faqButtonHoverStyle = {
    background: COLORS.neutral.gray100,
  };

  const faqQuestionStyle = {
    fontWeight: "600",
    color: COLORS.neutral.gray900,
    paddingRight: "1rem",
  };

  const chevronStyle = (isOpen) => ({
    width: "1.25rem",
    height: "1.25rem",
    color: COLORS.primary.green,
    flexShrink: 0,
    transition: "transform 0.3s ease",
    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
  });

  const faqAnswerStyle = {
    padding: "0 1.5rem 1rem 1.5rem",
    color: COLORS.neutral.gray600,
    lineHeight: "1.75",
  };

  const noResultsStyle = {
    textAlign: "center",
    padding: "3rem 0",
    color: COLORS.neutral.gray500,
    fontSize: "1.125rem",
  };

  const ctaSectionStyle = {
    padding: "5rem 0",
    background: GRADIENTS.darkGreenToGreen,
    color: COLORS.neutral.white,
  };

  const ctaTitleStyle = {
    fontSize: "clamp(1.875rem, 4vw, 2.25rem)",
    fontWeight: "700",
    marginBottom: "1.5rem",
    textAlign: "center",
  };

  const ctaTextStyle = {
    fontSize: "1.125rem",
    color: "rgba(255, 255, 255, 0.9)",
    marginBottom: "2rem",
    textAlign: "center",
  };

  const ctaButtonStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: COLORS.neutral.white,
    color: COLORS.primary.green,
    fontWeight: "600",
    padding: "1rem 2rem",
    borderRadius: RADIUS.lg,
    textDecoration: "none",
    transition: "all 0.3s ease",
  };

  const ctaButtonHoverStyle = {
    background: COLORS.neutral.gray100,
    transform: "scale(1.05)",
  };

  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What is CACZ?",
          answer:
            "The Zimbabwe Climate Action Council (CACZ) is Zimbabwe's multi-stakeholder apex body for climate action. We bridge the gap between national climate ambitions and local impact by designing standards, convening stakeholders, and delivering bankable high-impact projects with verified co-benefits.",
        },
        {
          question: "Who can join CACZ?",
          answer:
            "CACZ has three membership tiers: Strategic Partners (anchor investors and institutional partners), Operational Members (developers, service providers, private sector companies), and Affiliate Members (NGOs, CBOs, academia, youth and women networks). Each tier has different benefits and engagement pathways.",
        },
        {
          question: "How is CACZ funded?",
          answer:
            "CACZ is funded through membership fees, project incubation fees, verification services, training programs, and grants from development partners. We also receive support from strategic partners and governments agencies.",
        },
      ],
    },
    {
      category: "Projects",
      questions: [
        {
          question: "How do I submit a project for incubation?",
          answer:
            "Projects can be submitted through our online portal or by contacting our Project Incubation team. We require a concept note outlining the project scope, expected impact, community engagement plan, and financing needs. Our team will review submissions and provide feedback within 30 days.",
        },
        {
          question: 'What makes a project "bankable"?',
          answer:
            "A bankable project has clear impact metrics, investor-grade MRV systems, enforceable benefit-sharing mechanisms, community consent, appropriate risk mitigation strategies, and realistic financial projections. CACZ helps developers structure projects to meet these criteria.",
        },
        {
          question: "How long does project verification take?",
          answer:
            "Initial verification typically takes 60-90 days, depending on project complexity. This includes baseline assessment, methodology review, stakeholder consultation, field visits, and third-party verification. Annual monitoring and verification follows a similar timeline.",
        },
      ],
    },
    {
      category: "Finance",
      questions: [
        {
          question: "How does CACZ help mobilize climate finance?",
          answer:
            "We help by: creating bankable project dossiers, structuring blended finance solutions, conducting due diligence for investors, providing risk mitigation mechanisms, managing escrowed benefit-sharing, and connecting projects with our network of investors and DFIs.",
        },
        {
          question: "What is benefit-sharing?",
          answer:
            "Benefit-sharing ensures that communities receive direct financial and non-financial benefits from climate projects in their areas. CACZ requires legally enforceable benefit-sharing agreements with transparent mechanisms for fund management and community oversight.",
        },
        {
          question: "Can international investors participate?",
          answer:
            "Yes! CACZ actively works with international investors, DFIs, and carbon market buyers. We provide investor-grade due diligence, risk assessment, and verification services to ensure investments meet international standards while delivering local benefits.",
        },
      ],
    },
    {
      category: "Standards & Verification",
      questions: [
        {
          question: "What is MRV?",
          answer:
            "MRV stands for Monitoring, Reporting, and Verification. It's a systematic approach to track project outcomes, report results transparently, and verify claims through independent third parties. CACZ's MRV systems meet international standards and provide investor-grade assurance.",
        },
        {
          question: "Who conducts third-party verification?",
          answer:
            "CACZ works with accredited international verification bodies and maintains a registry of approved verifiers. All verifications follow ISO standards and internationally recognized methodologies to ensure credibility and market acceptance.",
        },
        {
          question: "How does CACZ ensure integrity?",
          answer:
            "Through: rigorous MRV protocols, independent third-party verification, transparent public registries, whistleblower protections, accessible grievance mechanisms, regular audits, and alignment with international best practices like the ICVCM Core Carbon Principles.",
        },
      ],
    },
    {
      category: "Training & Capacity",
      questions: [
        {
          question: "What is the Green Skills Academy?",
          answer:
            "The CACZ Green Skills Academy offers accredited training in climate finance, MRV, clean energy, circular economy, and project management. Courses range from short technical modules to comprehensive certification programs for practitioners and community managers.",
        },
        {
          question: "How can youth get involved?",
          answer:
            "The Youth Carbon Innovation Incubator provides cohort mentorship, seed grants, technical support, and market access for young climate entrepreneurs. We also offer internships, fellowship programs, and youth leadership opportunities within CACZ initiatives.",
        },
        {
          question: "Are training programs accredited?",
          answer:
            "Yes, our Green Skills Academy courses are accredited by relevant professional bodies and align with international standards. Graduates receive recognized certifications that enhance employment prospects in the growing green economy.",
        },
      ],
    },
  ];

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((category) => category.questions.length > 0);

  return (
    <div style={{ minHeight: "100vh", paddingTop: "5rem" }}>
      {/* Hero */}
      <section style={heroSectionStyle}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 style={headingStyle}>
              Frequently Asked <span style={gradientTextStyle}>Questions</span>
            </h1>
            <p style={subtitleStyle}>
              Everything you need to know about and climate action in Zimbabwe
            </p>

            {/* Search */}
            <div style={searchContainerStyle}>
              <Search style={searchIconStyle} />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={searchInputStyle}
                onFocus={(e) => {
                  e.target.style.borderColor = COLORS.primary.green;
                  e.target.style.boxShadow = `0 0 0 3px ${COLORS.primary.green}20`;
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = COLORS.neutral.gray300;
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section style={faqsSectionStyle}>
        <div className="container mx-auto px-4 max-w-4xl">
          {filteredFaqs.map((category, categoryIndex) => (
            <div key={categoryIndex} style={{ marginBottom: "3rem" }}>
              <h2 style={categoryTitleStyle}>{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const index = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openIndex === index;

                  return (
                    <motion.div
                      key={questionIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      style={faqItemStyle}
                    >
                      <button
                        onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                        style={faqButtonStyle}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.background =
                            faqButtonHoverStyle.background)
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.background = "transparent")
                        }
                      >
                        <span style={faqQuestionStyle}>{faq.question}</span>
                        <ChevronDown style={chevronStyle(isOpen)} />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div style={faqAnswerStyle}>{faq.answer}</div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}

          {filteredFaqs.length === 0 && (
            <div style={noResultsStyle}>
              <p>No questions found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={ctaSectionStyle}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 style={ctaTitleStyle}>Still Have Questions?</h2>
            <p style={ctaTextStyle}>
              Our team is here to help. Get in touch with us for personalized
              answers.
            </p>
            <a
              href="/contact"
              style={ctaButtonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  ctaButtonHoverStyle.background;
                e.currentTarget.style.transform = ctaButtonHoverStyle.transform;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = COLORS.neutral.white;
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              Contact Us
            </a>
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

export default FAQs;
