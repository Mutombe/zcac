// BlogPost.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin, Copy, Check, BookOpen, TrendingUp } from 'lucide-react';
import { toast } from 'sonner';
import { COLORS, GRADIENTS, SHADOWS, RADIUS } from './theme';

const BlogPost = () => {
  const { id } = useParams();
  const [copied, setCopied] = useState(false);

  // Mock post data - in real app, fetch based on id
  const posts = {
    1: {
      id: 1,
      title: 'Zimbabwe\'s Path to Net Zero: Opportunities and Challenges',
      excerpt: 'Exploring the roadmap for Zimbabwe to achieve net-zero emissions by 2050, including key sectors, policy frameworks, and investment opportunities.',
      author: 'Dr. Keith Phiri',
      authorBio: 'Climate Policy Expert & CACZ Senior Advisor',
      date: 'October 25, 2025',
      category: 'Policy',
      gradient: GRADIENTS.greenService,
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1920',
      views: '2.5K',
      shares: 450,
    },
    // Add more posts as needed
  };

  const post = posts[id] || posts[1]; // Fallback to first post

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = post.title;
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      setCopied(true);
      toast.success('Link copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } else if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  return (
    <div style={{ paddingTop: '5rem', background: COLORS.neutral.gray50 }}>
      {/* Hero Banner with Article Image */}
      <section style={{
        position: 'relative',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
      }}>
        {/* Background Image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${post.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }} />

        {/* Gradient Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(to top, ${COLORS.neutral.gray900}ee 0%, ${COLORS.neutral.gray900}99 50%, ${COLORS.neutral.gray900}66 100%)`,
          zIndex: 1,
        }} />

        {/* Content */}
        <div className="container mx-auto px-4" style={{ position: 'relative', zIndex: 10, paddingBottom: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            {/* Back Link */}
            <Link
              to="/blog"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: COLORS.neutral.white,
                textDecoration: 'none',
                marginBottom: '2rem',
                padding: '0.75rem 1.25rem',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: RADIUS.full,
                fontWeight: '600',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              <ArrowLeft size={20} />
              Back to Blog
            </Link>

            {/* Category Badge */}
            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{
                display: 'inline-block',
                padding: '0.5rem 1.25rem',
                background: post.gradient,
                color: COLORS.neutral.white,
                borderRadius: RADIUS.full,
                fontSize: '0.875rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}>
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: '700',
              color: COLORS.neutral.white,
              marginBottom: '1.5rem',
              lineHeight: '1.1',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            }}>
              {post.title}
            </h1>

            {/* Excerpt */}
            <p style={{
              fontSize: '1.25rem',
              color: 'rgba(255, 255, 255, 0.95)',
              marginBottom: '2rem',
              lineHeight: '1.75',
              maxWidth: '42rem',
            }}>
              {post.excerpt}
            </p>

            {/* Meta Info */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              flexWrap: 'wrap',
              fontSize: '0.875rem',
              color: 'rgba(255, 255, 255, 0.9)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <User size={18} />
                <span>{post.author}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Calendar size={18} />
                <span>{post.date}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Clock size={18} />
                <span>{post.readTime} read</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <TrendingUp size={18} />
                <span>{post.views} views</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Wave */}
        <div style={{
          position: 'absolute',
          bottom: '-2px',
          left: 0,
          right: 0,
          height: '100px',
          background: COLORS.neutral.gray50,
          zIndex: 2,
          clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 100%)',
        }} />
      </section>

      {/* Article Content */}
      <article style={{ padding: '3rem 0' }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  background: COLORS.neutral.white,
                  borderRadius: RADIUS.xl,
                  padding: '3rem',
                  boxShadow: SHADOWS.lg,
                }}
              >
                {/* Author Info */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.5rem',
                  background: COLORS.neutral.gray50,
                  borderRadius: RADIUS.lg,
                  marginBottom: '3rem',
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: RADIUS.full,
                    background: post.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: COLORS.neutral.white,
                    fontSize: '1.5rem',
                    fontWeight: '700',
                  }}>
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '1.125rem',
                      fontWeight: '700',
                      color: COLORS.neutral.gray900,
                      marginBottom: '0.25rem',
                    }}>
                      {post.author}
                    </h3>
                    <p style={{
                      fontSize: '0.875rem',
                      color: COLORS.neutral.gray600,
                    }}>
                      {post.authorBio}
                    </p>
                  </div>
                </div>

                {/* Article Body */}
                <div style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.875',
                  color: COLORS.neutral.gray700,
                }}>
                  <p style={{
                    fontSize: '1.25rem',
                    fontWeight: '500',
                    color: COLORS.neutral.gray900,
                    marginBottom: '2rem',
                    lineHeight: '1.75',
                  }}>
                    Zimbabwe stands at a pivotal moment in its climate journey. With the implementation of SI 48 of 2025 
                    and our commitment to the Paris Agreement, the path to net-zero emissions by 2050 is both ambitious and achievable.
                  </p>

                  <h2 style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: COLORS.neutral.gray900,
                    marginTop: '3rem',
                    marginBottom: '1.5rem',
                  }}>
                    The Current Landscape
                  </h2>
                  <p style={{ marginBottom: '1.5rem' }}>
                    Zimbabwe's greenhouse gas emissions primarily come from agriculture (45%), energy (30%), land use change (15%), 
                    and industrial processes (10%). Understanding this breakdown is crucial for developing targeted interventions 
                    that deliver maximum impact while supporting economic growth.
                  </p>

                  {/* Stats Callout */}
                  <div style={{
                    background: `linear-gradient(135deg, ${COLORS.primary.green50}, ${COLORS.accent.yellow50})`,
                    padding: '2rem',
                    borderRadius: RADIUS.lg,
                    margin: '2rem 0',
                    borderLeft: `4px solid ${COLORS.primary.green600}`,
                  }}>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      color: COLORS.neutral.gray900,
                      marginBottom: '1rem',
                    }}>
                      Key Statistics
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: 'Agriculture', value: '45%' },
                        { label: 'Energy', value: '30%' },
                        { label: 'Land Use', value: '15%' },
                        { label: 'Industry', value: '10%' },
                      ].map((stat, index) => (
                        <div key={index}>
                          <div style={{
                            fontSize: '2rem',
                            fontWeight: '700',
                            color: COLORS.primary.green600,
                          }}>
                            {stat.value}
                          </div>
                          <div style={{
                            fontSize: '0.875rem',
                            color: COLORS.neutral.gray600,
                          }}>
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <h2 style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: COLORS.neutral.gray900,
                    marginTop: '3rem',
                    marginBottom: '1.5rem',
                  }}>
                    Key Opportunities
                  </h2>
                  <p style={{ marginBottom: '1.5rem' }}>
                    Our natural resources provide significant opportunities for carbon sequestration through reforestation, 
                    sustainable agriculture, and ecosystem restoration. Additionally, Zimbabwe's abundant solar and wind resources 
                    offer pathways to clean energy independence.
                  </p>

                  <h2 style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: COLORS.neutral.gray900,
                    marginTop: '3rem',
                    marginBottom: '1.5rem',
                  }}>
                    Challenges and Solutions
                  </h2>
                  <p style={{ marginBottom: '1.5rem' }}>
                    While the challenges are significant—including financing gaps, capacity constraints, and policy implementation—
                    CACZ is working with government, private sector, and communities to develop practical, scalable solutions 
                    that address these barriers systematically.
                  </p>

                  {/* Quote */}
                  <blockquote style={{
                    borderLeft: `4px solid ${COLORS.primary.green600}`,
                    paddingLeft: '2rem',
                    margin: '2rem 0',
                    fontStyle: 'italic',
                    fontSize: '1.25rem',
                    color: COLORS.neutral.gray700,
                  }}>
                    "The transition to net-zero is not just an environmental imperative—it's an economic opportunity 
                    that can drive sustainable development and create thousands of green jobs across Zimbabwe."
                  </blockquote>

                  <h2 style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: COLORS.neutral.gray900,
                    marginTop: '3rem',
                    marginBottom: '1.5rem',
                  }}>
                    The Path Forward
                  </h2>
                  <p style={{ marginBottom: '1.5rem' }}>
                    Success requires coordinated action across all sectors. CACZ provides the technical expertise, 
                    policy guidance, and project development support needed to turn climate commitments into tangible results.
                  </p>

                  {/* CTA Box */}
                  <div style={{
                    background: GRADIENTS.ctaGreen,
                    padding: '2.5rem',
                    borderRadius: RADIUS.xl,
                    marginTop: '3rem',
                    color: COLORS.neutral.white,
                  }}>
                    <h3 style={{
                      fontSize: '1.75rem',
                      fontWeight: '700',
                      marginBottom: '1rem',
                    }}>
                      Take Action Today
                    </h3>
                    <p style={{
                      fontSize: '1.125rem',
                      marginBottom: '2rem',
                      opacity: 0.95,
                    }}>
                      Interested in contributing to Zimbabwe's net-zero journey? Contact CACZ to learn about partnership opportunities, 
                      project development, and capacity building programs.
                    </p>
                    <Link
                      to="/contact"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: COLORS.neutral.white,
                        color: COLORS.primary.green600,
                        padding: '1rem 2rem',
                        borderRadius: RADIUS.lg,
                        fontWeight: '700',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = SHADOWS.xl;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      Get Involved
                      <ArrowLeft size={20} style={{ transform: 'rotate(180deg)' }} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div style={{ position: 'sticky', top: '6rem' }}>
                {/* Share Box */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  style={{
                    background: COLORS.neutral.white,
                    borderRadius: RADIUS.xl,
                    padding: '2rem',
                    boxShadow: SHADOWS.lg,
                    marginBottom: '2rem',
                  }}
                >
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: COLORS.neutral.gray900,
                    marginBottom: '1.5rem',
                  }}>
                    Share This Article
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[
                      { icon: Facebook, label: 'Facebook', color: '#1877F2', platform: 'facebook' },
                      { icon: Twitter, label: 'Twitter', color: '#1DA1F2', platform: 'twitter' },
                      { icon: Linkedin, label: 'LinkedIn', color: '#0A66C2', platform: 'linkedin' },
                      { icon: copied ? Check : Copy, label: copied ? 'Copied!' : 'Copy Link', color: COLORS.neutral.gray700, platform: 'copy' },
                    ].map((social, index) => (
                      <button
                        key={index}
                        onClick={() => handleShare(social.platform)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem',
                          padding: '0.875rem 1.25rem',
                          background: COLORS.neutral.gray50,
                          border: 'none',
                          borderRadius: RADIUS.lg,
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          fontWeight: '600',
                          fontSize: '0.875rem',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = social.color + '15';
                          e.currentTarget.style.transform = 'translateX(5px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = COLORS.neutral.gray50;
                          e.currentTarget.style.transform = 'translateX(0)';
                        }}
                      >
                        <social.icon size={20} style={{ color: social.color }} />
                        <span style={{ color: COLORS.neutral.gray700 }}>{social.label}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* Related Articles */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  style={{
                    background: COLORS.neutral.white,
                    borderRadius: RADIUS.xl,
                    padding: '2rem',
                    boxShadow: SHADOWS.lg,
                  }}
                >
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: COLORS.neutral.gray900,
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}>
                    <BookOpen size={24} style={{ color: COLORS.primary.green600 }} />
                    Related Articles
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[
                      { title: 'Carbon Markets Guide', category: 'Finance' },
                      { title: 'Regenerative Agriculture', category: 'Agriculture' },
                      { title: 'Understanding SI 48', category: 'Legal' },
                    ].map((article, index) => (
                      <Link
                        key={index}
                        to="/blog/2"
                        style={{
                          padding: '1rem',
                          background: COLORS.neutral.gray50,
                          borderRadius: RADIUS.lg,
                          textDecoration: 'none',
                          transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = COLORS.primary.green50;
                          e.currentTarget.style.transform = 'translateX(5px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = COLORS.neutral.gray50;
                          e.currentTarget.style.transform = 'translateX(0)';
                        }}
                      >
                        <div style={{
                          fontSize: '0.75rem',
                          color: COLORS.primary.green600,
                          fontWeight: '600',
                          marginBottom: '0.25rem',
                        }}>
                          {article.category}
                        </div>
                        <div style={{
                          fontSize: '0.875rem',
                          fontWeight: '600',
                          color: COLORS.neutral.gray900,
                        }}>
                          {article.title}
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;