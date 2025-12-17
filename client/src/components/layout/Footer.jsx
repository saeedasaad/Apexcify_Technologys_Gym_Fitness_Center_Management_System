import React from "react";
import FooterCard from "../common/FooterCard";
import logo from "../../assets/logo.svg";

export default function Footer() {
  const quickLinks = ["Facilities", "Services", "Trainers", "Class Schedule"];
  const membershipLinks = ["Pricing Plans", "Testimonials", "FAQ", "Contact Us"];

  return (
    <footer className="bg-[#334244] text-white py-16">
      <div className="w-[90%] md:w-[85%] max-w-8xl mx-auto">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* About */}
          <FooterCard>
            <img src={logo} alt="FitZone Logo" className="w-28 mb-4" />
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Transform your body and mind with world-class facilities and expert guidance.
            </p>

            <div className="flex gap-3">
              {[
                "ri-facebook-fill",
                "ri-twitter-line",
                "ri-instagram-line",
                "ri-linkedin-fill",
              ].map((icon, i) => (
                <div
                  key={i}
                  className="bg-[#2fa8b35f] w-8 h-8 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition"
                >
                  <i className={icon}></i>
                </div>
              ))}
            </div>
          </FooterCard>

          {/* Quick Links */}
          <FooterCard title="Quick Links">
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-300 hover:text-[var(--primary)]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </FooterCard>

          {/* Membership */}
          <FooterCard title="Membership">
            <ul className="space-y-2 text-sm">
              {membershipLinks.map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-300 hover:text-[var(--primary)]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </FooterCard>

          {/* Newsletter */}
          <FooterCard title="Subscribe to Our Newsletter">
            <p className="text-xs text-gray-300 mb-4">
              Get fitness tips, class schedules, and exclusive member offers delivered to your inbox.
            </p>

            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-3 py-2 rounded-md border border-gray-400 bg-[var(--background-soft)] text-sm focus:outline-none focus:border-[var(--primary)]"
              />
              <button
                type="submit"
                className="px-3 py-2 border border-[var(--primary)] text-[var(--primary)] rounded-md text-xs font-medium hover:bg-[var(--primary)] hover:text-white transition"
              >
                Subscribe
              </button>
            </form>
          </FooterCard>
        </div>

        <hr className="border-t border-gray-600 mb-6" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <p>© 2025 FitZone. All rights reserved.</p>

          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Service", "Website Builder"].map((link, i) => (
              <a
                key={i}
                href="#"
                className="hover:text-[var(--primary)]"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
