import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";

import Header from "@/components/global/header/Header";
import Footer from "@/components/global/footer/Footer";
import Homepage from "@/pages/Homepage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import ProjectsPage from "@/pages/ProjectsPage";
import ServicePage from "@/pages/ServicePage";
import ServiceItemPage from "@/pages/ServiceItemPage";
import PageNotFound from "@/components/sections/CommonSections/PageNotFound";
import ScrollToTop from "@/components/global/ScrollToTop";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/services/:slug" element={<ServiceItemPage />} />
        </Routes>
      </main>

      <ScrollToTop />

      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
