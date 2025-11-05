import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const COLORS = {
  primary: {
    green50: '#f0fdf4',
    green500: '#22c55e',
    green600: '#16a34a',
    green700: '#15803d',
  },
  secondary: {
    yellow500: '#eab308',
  },
  neutral: {
    white: '#ffffff',
    gray50: '#f9fafb',
    gray600: '#4b5563',
    gray700: '#374151',
    gray900: '#111827',
  },
};

const GRADIENTS = {
  primary: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)',
  greenService: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)',
  yellowService: 'linear-gradient(135deg, #eab308 0%, #fbbf24 100%)',
};

const RADIUS = {
  lg: '0.5rem',
  xl: '0.75rem',
  full: '9999px',
};

const SHADOWS = {
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
};

const LeadershipSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedLeader, setSelectedLeader] = useState(null);

  const leadership = {
    founders: [
      { 
        name: 'Anglistone T Sibanda', 
        role: 'Founder & CEO', 
        initial: 'AS',
        image: '/seminar1.jpeg',
        bio: 'Anglistone is a visionary leader with over 15 years of experience in environmental policy and sustainable development. He has led numerous climate initiatives across Zimbabwe and Southern Africa.',
        expertise: ['Climate Policy', 'Sustainable Development', 'Strategic Leadership'],
        education: 'MBA, Environmental Management'
      },
      { 
        name: 'Lovemore Makota', 
        role: 'Co-Founder & COO', 
        initial: 'LM',
        image: '/lovemore.jpeg',
        bio: 'Lovemore brings extensive operational expertise and has successfully managed large-scale environmental projects. His focus on community engagement has transformed local climate action.',
        expertise: ['Operations Management', 'Community Engagement', 'Project Delivery'],
        education: 'MSc, Environmental Science'
      },
      { 
        name: 'Advocate Nsikelelo Mafa-Moyo', 
        role: 'Co-Founder & Corporate Counsel', 
        initial: 'NM',
        image: '/nsikelo.jpeg',
        bio: 'Nsikelelo is a distinguished legal expert specializing in environmental law and corporate governance. She ensures legal compliance and advocates for progressive climate policies.',
        expertise: ['Environmental Law', 'Corporate Governance', 'Policy Advocacy'],
        education: 'LLB, Environmental Law'
      },
    ],
    board: [
      { 
        name: 'Professor Norman Nyazema', 
        role: 'Chairman', 
        initial: 'NN',
        image: '/profile.jpeg',
        bio: 'Professor Nyazema is a renowned academic and researcher with decades of experience in environmental sciences. He provides strategic oversight and academic rigor to the organization.',
        expertise: ['Environmental Research', 'Strategic Planning', 'Academic Leadership'],
        education: 'PhD, Environmental Sciences'
      },
      { 
        name: 'Mrs Veronica Gundu Jakarasi', 
        role: 'Vice Chairman', 
        initial: 'VG',
        image: '/profile.jpeg',
        bio: 'Veronica has extensive experience in community development and women empowerment in environmental conservation. She champions inclusive climate action across all communities.',
        expertise: ['Community Development', 'Gender Inclusion', 'Conservation'],
        education: 'MA, Development Studies'
      },
      { 
        name: 'Mr Darlington Ndava Chiwara', 
        role: 'Treasurer', 
        initial: 'DC',
        image: '/profile.jpeg',
        bio: 'Darlington is a certified accountant with expertise in financial management for non-profit organizations. He ensures fiscal responsibility and sustainable funding strategies.',
        expertise: ['Financial Management', 'Non-Profit Finance', 'Sustainability Planning'],
        education: 'CPA, Finance'
      },
      { 
        name: 'Dr Prosper Mutswiri', 
        role: 'Board Member', 
        initial: 'PM',
        image: '/profile.jpeg',
        bio: 'Dr Mutswiri is a climate scientist focusing on adaptation strategies for vulnerable communities. His research informs evidence-based policy recommendations.',
        expertise: ['Climate Science', 'Adaptation Strategies', 'Research'],
        education: 'PhD, Climate Science'
      },
      { 
        name: 'Mr Sheperd Chikowore', 
        role: 'Board Member', 
        initial: 'SC',
        image: '/profile.jpeg',
        bio: 'Sheperd has a strong background in renewable energy and green technology implementation. He drives innovation in sustainable solutions.',
        expertise: ['Renewable Energy', 'Green Technology', 'Innovation'],
        education: 'MSc, Renewable Energy'
      },
      { 
        name: 'Dr Moreangels Mbizah', 
        role: 'Board Member', 
        initial: 'MM',
        image: '/profile.jpeg',
        bio: 'Dr Mbizah is a wildlife conservation expert and advocate for biodiversity protection. She integrates conservation into climate action strategies.',
        expertise: ['Wildlife Conservation', 'Biodiversity', 'Ecosystem Management'],
        education: 'PhD, Conservation Biology'
      },
    ],
  };

  return (
    <section ref={ref} style={{
      padding: '6rem 0',
      background: `linear-gradient(to bottom, ${COLORS.neutral.white}, ${COLORS.neutral.gray50})`,
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
            Our <span style={{
              background: GRADIENTS.primary,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Leadership</span>
          </h2>
          <p style={{
            color: COLORS.neutral.gray600,
            fontSize: '1.125rem',
          }}>
            Experienced leaders driving climate action across Zimbabwe
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Founders */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
          >
            <h3 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              marginBottom: '2rem',
              color: COLORS.neutral.gray900,
            }}>
              Founders
            </h3>
            <div className="space-y-4">
              {leadership.founders.map((person, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  onClick={() => setSelectedLeader(person)}
                  style={{
                    background: COLORS.neutral.white,
                    borderRadius: RADIUS.lg,
                    padding: '1.5rem',
                    boxShadow: SHADOWS.md,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{
                    width: '4rem',
                    height: '4rem',
                    borderRadius: RADIUS.full,
                    overflow: 'hidden',
                    flexShrink: 0,
                    border: `3px solid ${COLORS.primary.green500}`,
                  }}>
                    <img 
                      src={person.image} 
                      alt={person.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                  <div>
                    <h4 style={{
                      fontWeight: '700',
                      fontSize: '1.125rem',
                      color: COLORS.primary.green600,
                      marginBottom: '0.25rem',
                    }}>
                      {person.name}
                    </h4>
                    <p style={{
                      color: COLORS.neutral.gray600,
                      fontSize: '0.875rem',
                    }}>
                      {person.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Board */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
          >
            <h3 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              marginBottom: '2rem',
              color: COLORS.neutral.gray900,
            }}>
              Governance Board
            </h3>
            <div className="space-y-4">
              {leadership.board.map((person, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  onClick={() => setSelectedLeader(person)}
                  style={{
                    background: COLORS.neutral.white,
                    borderRadius: RADIUS.lg,
                    padding: '1.5rem',
                    boxShadow: SHADOWS.md,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{
                    width: '4rem',
                    height: '4rem',
                    borderRadius: RADIUS.full,
                    overflow: 'hidden',
                    flexShrink: 0,
                    border: `3px solid ${COLORS.secondary.yellow500}`,
                  }}>
                    <img 
                      src={person.image} 
                      alt={person.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                  <div>
                    <h4 style={{
                      fontWeight: '700',
                      fontSize: '1.125rem',
                      color: COLORS.primary.green600,
                      marginBottom: '0.25rem',
                    }}>
                      {person.name}
                    </h4>
                    <p style={{
                      color: COLORS.neutral.gray600,
                      fontSize: '0.875rem',
                    }}>
                      {person.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedLeader && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLeader(null)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000,
                padding: '1rem',
              }}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  background: COLORS.neutral.white,
                  borderRadius: RADIUS.xl,
                  maxWidth: '600px',
                  width: '100%',
                  maxHeight: '90vh',
                  overflow: 'auto',
                  boxShadow: SHADOWS.xl,
                }}
              >
                {/* Header with Image */}
                <div style={{
                  background: GRADIENTS.primary,
                  padding: '2rem',
                  borderRadius: `${RADIUS.xl} ${RADIUS.xl} 0 0`,
                  textAlign: 'center',
                  position: 'relative',
                }}>
                  <button
                    onClick={() => setSelectedLeader(null)}
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: 'rgba(255, 255, 255, 0.2)',
                      border: 'none',
                      borderRadius: RADIUS.full,
                      width: '2.5rem',
                      height: '2.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: COLORS.neutral.white,
                      fontSize: '1.5rem',
                      transition: 'background 0.3s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
                  >
                    ×
                  </button>
                  <div style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: RADIUS.full,
                    overflow: 'hidden',
                    margin: '0 auto 1rem',
                    border: `4px solid ${COLORS.neutral.white}`,
                    boxShadow: SHADOWS.lg,
                  }}>
                    <img 
                      src={selectedLeader.image} 
                      alt={selectedLeader.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                  <h3 style={{
                    fontSize: '1.75rem',
                    fontWeight: '700',
                    color: COLORS.neutral.white,
                    marginBottom: '0.5rem',
                  }}>
                    {selectedLeader.name}
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    color: COLORS.neutral.white,
                    opacity: 0.9,
                  }}>
                    {selectedLeader.role}
                  </p>
                </div>

                {/* Content */}
                <div style={{ padding: '2rem' }}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{
                      fontSize: '1.125rem',
                      fontWeight: '700',
                      color: COLORS.primary.green600,
                      marginBottom: '0.75rem',
                    }}>
                      About
                    </h4>
                    <p style={{
                      color: COLORS.neutral.gray700,
                      lineHeight: '1.6',
                    }}>
                      {selectedLeader.bio}
                    </p>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{
                      fontSize: '1.125rem',
                      fontWeight: '700',
                      color: COLORS.primary.green600,
                      marginBottom: '0.75rem',
                    }}>
                      Areas of Expertise
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {selectedLeader.expertise.map((skill, index) => (
                        <span
                          key={index}
                          style={{
                            background: COLORS.primary.green50,
                            color: COLORS.primary.green700,
                            padding: '0.5rem 1rem',
                            borderRadius: RADIUS.full,
                            fontSize: '0.875rem',
                            fontWeight: '500',
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 style={{
                      fontSize: '1.125rem',
                      fontWeight: '700',
                      color: COLORS.primary.green600,
                      marginBottom: '0.75rem',
                    }}>
                      Education
                    </h4>
                    <p style={{
                      color: COLORS.neutral.gray700,
                      fontWeight: '500',
                    }}>
                      {selectedLeader.education}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default LeadershipSection;