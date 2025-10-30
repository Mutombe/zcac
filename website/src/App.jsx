import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { LanguageProvider } from "./components/lunguagecontext";
// Layout
import Navbar from "./components/nav";
import Footer from "./components/footer";
import About from "./components/whatwedo";
import Gallery from "./components/gallery";
import Events from "./components/events";
// Pages
import Home from "./components/home";
import WhatWeDo from "./components/about";
import Projects from "./components/projects";
import Blog from "./components/blog";
import BlogPost from "./components/blogpost";
import Resources from "./components/resources";
import FAQs from "./components/faq";
import Contact from "./components/contact";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App min-h-screen flex flex-col gellix-font">
          <style jsx>{`
            @font-face {
              font-family: "Gravesend Sans";
              src: url("./fonts/fonnts.com-Gravesend_Sans_Light.otf")
                format("opentype");
              font-weight: 300;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: "Gravesend Sans";
              src: url("./fonts/fonnts.com-Gravesend_Sans_Medium.otf")
                format("opentype");
              font-weight: 500;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: "Gravesend Sans";
              src: url("./fonts/fonnts.com-Gravesend_Sans_Bold.otf")
                format("opentype");
              font-weight: 700;
              font-style: normal;
              font-display: swap;
            }

            /* Century Gothic Font Face */
            @font-face {
              font-family: "Century Gothic Custom";
              src: url("./fonts/weezerfont.ttf") format("truetype");
              font-weight: normal;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: "Gellix";
              src: url("./fonts/Gellix-Light.ttf") format("truetype");
              font-weight: normal;
              font-style: normal;
              font-display: swap;
            }
            @font-face {
              font-family: "Gellix";
              src: url("./fonts/Gellix-Regular.ttf") format("truetype");
              font-weight: normal;
              font-style: normal;
              font-display: swap;
            }

            /* Font utility classes */
            .gravesend-sans {
              font-family: "Gravesend Sans", "Inter", "Segoe UI", Tahoma, Geneva,
                Verdana, sans-serif;
            }

            .roboto-font {
              font-family: "Roboto", "Inter", "Segoe UI", Tahoma, Geneva,
                Verdana, sans-serif;
            }

            .gellix-font {
              font-family: "Gellix", "Inter", "Segoe UI", Tahoma, Geneva,
                Verdana, sans-serif;
            }

            body {
              overflow-x: hidden;
            }

            /* Smooth scrolling */
            html {
              scroll-behavior: smooth;
            }
          `}</style>
          <Navbar />
          <main className="flex-grow">
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/what-we-do" element={<WhatWeDo />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/events" element={<Events />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <Toaster position="top-right" richColors />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
