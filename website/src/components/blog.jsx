// Blog.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  User,
  ArrowRight,
  Tag,
  Clock,
  TrendingUp,
  BookOpen,
  Sparkles,
  Search,
} from "lucide-react";
import { COLORS, GRADIENTS, SHADOWS, RADIUS } from "./theme";
import { GiSpellBook } from "react-icons/gi";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { FaUsersViewfinder } from "react-icons/fa6";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const posts = [
    {
      id: 1,
      title: "Zimbabwe's Path to Net Zero: Opportunities and Challenges",
      excerpt:
        "Exploring the roadmap for Zimbabwe to achieve net-zero emissions by 2050, including key sectors, policy frameworks, and investment opportunities.",
      author: "Dr. Keith Phiri",
      date: "October 25, 2025",
      category: "Policy",
      gradient: GRADIENTS.greenService,
      readTime: "8 min",
      image:
        "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800",
      featured: true,
      views: "2.5K",
    },
    {
      id: 2,
      title: "Carbon Markets: A Guide for African Communities",
      excerpt:
        "Understanding how carbon markets work and how communities can participate while ensuring fair benefit-sharing.",
      author: "Mr. Lovemore Makota",
      date: "October 20, 2025",
      category: "Finance",
      gradient: `linear-gradient(135deg, #60A5FA, #2563EB)`,
      readTime: "6 min",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
      views: "1.8K",
    },
    {
      id: 3,
      title:
        "Regenerative Agriculture: Feeding Zimbabwe While Healing the Land",
      excerpt:
        "How regenerative agricultural practices can increase yields, sequester carbon, and build resilience.",
      author: "Dr. Prosper Mutswiri",
      date: "October 15, 2025",
      category: "Agriculture",
      gradient: GRADIENTS.yellowService,
      readTime: "10 min",
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800",
      featured: true,
      views: "3.2K",
    },
    {
      id: 4,
      title: "The Role of Youth in Climate Action",
      excerpt:
        "Young Zimbabweans are leading the charge in climate innovation. Discover success stories from our Youth Innovation Incubator.",
      author: "Tinashe Ndongwe",
      date: "October 10, 2025",
      category: "Innovation",
      gradient: `linear-gradient(135deg, #C084FC, #9333EA)`,
      readTime: "7 min",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
      views: "1.5K",
    },
    {
      id: 5,
      title: "Understanding SI 48: What It Means for Business",
      excerpt:
        "A comprehensive breakdown of SI 48 of 2025 and its implications for businesses operating in Zimbabwe.",
      author: "Advocate Nsikelelo Mafa-Moyo",
      date: "October 5, 2025",
      category: "Legal",
      gradient: GRADIENTS.redService,
      readTime: "12 min",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800",
      views: "2.1K",
    },
    {
      id: 6,
      title: "Clean Energy for Rural Development",
      excerpt:
        "How renewable energy is transforming rural communities, creating jobs and improving quality of life.",
      author: "Mr. Anglistone Sibanda",
      date: "September 30, 2025",
      category: "Energy",
      gradient: `linear-gradient(135deg, #22D3EE, #0891B2)`,
      readTime: "9 min",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800",
      views: "1.9K",
    },
  ];

  const categories = [
    "All",
    "Policy",
    "Finance",
    "Agriculture",
    "Innovation",
    "Legal",
    "Energy",
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost =
    filteredPosts.find((p) => p.featured) || filteredPosts[0];
  const regularPosts = filteredPosts.filter((p) => p.id !== featuredPost?.id);

  return (
    <div
      style={{
        paddingTop: "5rem",
        background: COLORS.neutral.gray50,
        minHeight: "100vh",
      }}
    >
      {/* Hero Section with Stats */}
      <section
        style={{
          padding: "4rem 0 3rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Image Layer */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url("/21.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.65,
          }}
        />

        {/* Gradient Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(135deg, ${COLORS.primary.green50}, ${COLORS.neutral.white})`,
            opacity: 0.65,
          }}
        />

        {/* Content Layer */}
        <div
          className="container mx-auto px-4"
          style={{ position: "relative", zIndex: 1 }}
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
                background: COLORS.primary.green100,
                color: COLORS.primary.green700,
                padding: "0.5rem 1.25rem",
                borderRadius: RADIUS.full,
                fontSize: "0.875rem",
                fontWeight: "600",
                marginBottom: "1.5rem",
              }}
            >
              <Sparkles size={16} />
              <span>CLIMATE INSIGHTS & KNOWLEDGE</span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                fontWeight: "700",
                marginBottom: "1.5rem",
                background: GRADIENTS.primary,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: "1.1",
                paddingBottom: "0.25rem",
              }}
            >
              Climate Insights
            </h1>

            <p
              style={{
                fontSize: "1.25rem",
                color: COLORS.neutral.gray600,
                marginBottom: "2rem",
                maxWidth: "42rem",
                margin: "0 auto 2rem",
              }}
            >
              Expert perspectives, research, and stories from Zimbabwe's climate
              action frontline
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
              {[
                { number: "150+", label: "Articles", icon: GiSpellBook },
                { number: "50K+", label: "Readers", icon: HiArrowTrendingUp },
                { number: "25+", label: "Contributors", icon: FaUsersViewfinder },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  style={{
                    background: COLORS.neutral.white,
                    padding: "1.5rem 1rem",
                    borderRadius: RADIUS.lg,
                    boxShadow: SHADOWS.md,
                  }}
                >
                  <stat.icon
                    size={24}
                    style={{
                      color: COLORS.primary.green600,
                      margin: "0 auto 0.5rem",
                    }}
                  />
                  <h3
                    style={{
                      fontSize: "2rem",
                      fontWeight: "700",
                      color: COLORS.neutral.gray900,
                      marginBottom: "0.25rem",
                    }}
                  >
                    {stat.number}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: COLORS.neutral.gray600,
                    }}
                  >
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Search Bar */}
            <div
              style={{
                maxWidth: "600px",
                margin: "0 auto",
                position: "relative",
              }}
            >
              <Search
                size={20}
                style={{
                  position: "absolute",
                  left: "1.5rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: COLORS.neutral.gray400,
                }}
              />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "1rem 1rem 1rem 3.5rem",
                  borderRadius: RADIUS.full,
                  border: `2px solid ${COLORS.neutral.gray200}`,
                  fontSize: "1rem",
                  outline: "none",
                  transition: "all 0.3s ease",
                }}
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
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section
        style={{
          padding: "2rem 0",
          background: COLORS.neutral.white,
          borderBottom: `1px solid ${COLORS.neutral.gray200}`,
        }}
      >
        <div className="container mx-auto px-4">
          <div
            style={{
              display: "flex",
              gap: "1rem",
              overflowX: "auto",
              justifyContent: "center",
              paddingBottom: "0.5rem",
            }}
            className="hide-scrollbar"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                style={{
                  padding: "0.75rem 1.5rem",
                  borderRadius: RADIUS.full,
                  border: "none",
                  background:
                    activeCategory === category
                      ? GRADIENTS.primary
                      : COLORS.neutral.gray100,
                  color:
                    activeCategory === category
                      ? COLORS.neutral.white
                      : COLORS.neutral.gray700,
                  fontWeight: "600",
                  fontSize: "0.875rem",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  whiteSpace: "nowrap",
                  boxShadow: activeCategory === category ? SHADOWS.md : "none",
                }}
                onMouseEnter={(e) => {
                  if (activeCategory !== category) {
                    e.currentTarget.style.background = COLORS.neutral.gray200;
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== category) {
                    e.currentTarget.style.background = COLORS.neutral.gray100;
                  }
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section
          style={{ padding: "3rem 0 2rem", background: COLORS.neutral.gray50 }}
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                position: "relative",
                borderRadius: RADIUS.xl,
                overflow: "hidden",
                minHeight: "400px",
                height: "clamp(400px, 50vh, 600px)",
                cursor: "pointer",
              }}
            >
              {/* Background Image */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${featuredPost.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "transform 0.5s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />

              {/* Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(to top, ${COLORS.neutral.gray900}ee, ${COLORS.neutral.gray900}66)`,
                }}
              />

              {/* Content */}
              <div
                style={{
                  position: "relative",
                  height: "100%",
                  padding: "clamp(1.5rem, 5vw, 3rem)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  color: COLORS.neutral.white,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "1rem",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      padding: "0.5rem 1rem",
                      background: "rgba(255, 255, 255, 0.2)",
                      backdropFilter: "blur(10px)",
                      borderRadius: RADIUS.full,
                      fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                      fontWeight: "700",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Featured
                  </span>
                  <span
                    style={{
                      padding: "0.5rem 1rem",
                      background: featuredPost.gradient,
                      borderRadius: RADIUS.full,
                      fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                      fontWeight: "700",
                    }}
                  >
                    {featuredPost.category}
                  </span>
                </div>

                <h2
                  style={{
                    fontSize: "clamp(1.5rem, 5vw, 3rem)",
                    fontWeight: "700",
                    marginBottom: "0.75rem",
                    lineHeight: "1.2",
                  }}
                >
                  {featuredPost.title}
                </h2>

                <p
                  style={{
                    fontSize: "clamp(0.9rem, 2.5vw, 1.125rem)",
                    opacity: 0.95,
                    marginBottom: "1.5rem",
                    lineHeight: "1.6",
                    display: "-webkit-box",
                    WebkitLineClamp: "3",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {featuredPost.excerpt}
                </p>

                {/* Meta Information - Responsive Grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
                    gap: "0.75rem 1rem",
                    fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <User size={16} />
                    <span
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {featuredPost.author}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <Calendar size={16} />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <Clock size={16} />
                    <span>{featuredPost.readTime} read</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <HiArrowTrendingUp size={16} />
                    <span>{featuredPost.views} views</span>
                  </div>
                </div>

                <Link
                  to={`/blog/${featuredPost.id}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    background: COLORS.neutral.white,
                    color: COLORS.primary.green600,
                    padding:
                      "clamp(0.75rem, 2vw, 1rem) clamp(1.25rem, 4vw, 2rem)",
                    borderRadius: RADIUS.lg,
                    fontWeight: "700",
                    fontSize: "clamp(0.875rem, 2vw, 1rem)",
                    textDecoration: "none",
                    width: "fit-content",
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
                  Read Full Article
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid - Bento Style */}
      <section style={{ padding: "3rem 0", background: COLORS.neutral.gray50 }}>
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
                gap: "2rem",
              }}
            >
              {regularPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section
        style={{
          padding: "5rem 0",
          background: GRADIENTS.ctaGreen,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative Elements */}
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
        />

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
              Stay Updated on Climate Action
            </h2>
            <p
              style={{
                fontSize: "1.125rem",
                color: "rgba(255, 255, 255, 0.9)",
                marginBottom: "2.5rem",
              }}
            >
              Get the latest insights, research, and stories delivered to your
              inbox monthly
            </p>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                maxWidth: "500px",
                margin: "0 auto",
              }}
              className="flex-col sm:flex-row"
            >
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  padding: "1rem 1.5rem",
                  borderRadius: RADIUS.lg,
                  border: "none",
                  fontSize: "1rem",
                  outline: "none",
                }}
              />
              <button
                style={{
                  padding: "1rem 2rem",
                  background: COLORS.neutral.white,
                  color: COLORS.primary.green600,
                  border: "none",
                  borderRadius: RADIUS.lg,
                  fontWeight: "700",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

// Blog Card Component
const BlogCard = ({ post, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/blog/${post.id}`} style={{ textDecoration: "none" }}>
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          background: COLORS.neutral.white,
          borderRadius: RADIUS.xl,
          overflow: "hidden",
          boxShadow: isHovered ? SHADOWS["2xl"] : SHADOWS.md,
          transition: "all 0.3s ease",
          transform: isHovered ? "translateY(-8px)" : "translateY(0)",
          cursor: "pointer",
        }}
      >
        {/* Image */}
        <div
          style={{
            position: "relative",
            height: "240px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${post.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: isHovered ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.5s ease",
            }}
          />

          {/* Gradient Overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(to top, ${COLORS.neutral.gray900}99, transparent)`,
            }}
          />

          {/* Category Badge */}
          <div
            style={{
              position: "absolute",
              top: "1rem",
              left: "1rem",
              padding: "0.5rem 1rem",
              background: post.gradient,
              color: COLORS.neutral.white,
              borderRadius: RADIUS.full,
              fontSize: "0.75rem",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            {post.category}
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "1.5rem" }}>
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: "700",
              color: COLORS.neutral.gray900,
              marginBottom: "0.75rem",
              lineHeight: "1.3",
            }}
          >
            {post.title}
          </h3>

          <p
            style={{
              color: COLORS.neutral.gray600,
              fontSize: "0.875rem",
              lineHeight: "1.75",
              marginBottom: "1.5rem",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {post.excerpt}
          </p>

          {/* Meta Info */}
          <div
            style={{
              paddingTop: "1.5rem",
              borderTop: `1px solid ${COLORS.neutral.gray200}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: "0.75rem",
              color: COLORS.neutral.gray600,
            }}
          >
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <User size={14} />
              <span>{post.author.split(" ")[0]}</span>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <Clock size={14} />
              <span>{post.readTime}</span>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <HiArrowTrendingUp size={14} />
              <span>{post.views}</span>
            </div>
          </div>

          {/* Read More Link */}
          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: COLORS.primary.green600,
              fontWeight: "600",
              fontSize: "0.875rem",
            }}
          >
            Read More
            <ArrowRight
              size={16}
              style={{
                transform: isHovered ? "translateX(5px)" : "translateX(0)",
                transition: "transform 0.3s ease",
              }}
            />
          </div>
        </div>
      </motion.article>
    </Link>
  );
};

export default Blog;
