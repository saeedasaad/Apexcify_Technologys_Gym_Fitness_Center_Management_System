import React from "react";
import Heading from "../ul/Heading";
import Button from "../ul/Button";
import ContactInfoCard from "../common/ContactInfoCard";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="w-[90%] md:w-[85%] mx-auto">
        {/* Heading */}
        <Heading level="h2">
          Get In <span className="text-[var(--primary)]">Touch</span>
        </Heading>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Ready to start your fitness journey? Contact us today or subscribe to our newsletter
        </p>

        {/* Wrapper */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Form */}
          <div className="flex-1 bg-[var(--background-soft)] p-8 rounded-xl shadow-md">
            <h3 className="text-[var(--primary)] font-semibold text-xl mb-6">Send Us a Message</h3>
            <form className="space-y-5">
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-2 font-medium">Your Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  required
                  className="p-3 rounded-md border border-gray-300 bg-[var(--background-muted)] focus:outline-none focus:border-[var(--primary)]"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="mb-2 font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  required
                  className="p-3 rounded-md border border-gray-300 bg-[var(--background-muted)] focus:outline-none focus:border-[var(--primary)]"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="mb-2 font-medium">
                  Message <span id="charCount">(0/500)</span>
                </label>
                <textarea
                  id="message"
                  maxLength="500"
                  placeholder="Tell us about your fitness goals..."
                  className="p-3 rounded-md border border-gray-300 bg-[var(--background-muted)] focus:outline-none focus:border-[var(--primary)] h-32 resize-none"
                ></textarea>
              </div>

              <Button variant="primary" type="submit">Send Message</Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex-1 bg-[var(--background-soft)] p-8 rounded-xl shadow-md pt-20">
            <h3 className="text-[var(--primary)] font-semibold text-xl mb-6">Visit Us</h3>

            <div className="space-y-6">
              <ContactInfoCard icon="ri-map-pin-line" title="Address">
                123 Fitness Street, Downtown District, New York, NY 10001
              </ContactInfoCard>

              <ContactInfoCard icon="ri-phone-line" title="Phones">
                (555) 123-4567
              </ContactInfoCard>

              <ContactInfoCard icon="ri-mail-line" title="Email">
                info@fitzone.com
              </ContactInfoCard>

              <ContactInfoCard icon="ri-time-line" title="Hours">
                24/7 Access <br /> Staffed: Mon-Fri 5am-11pm, Sat-Sun 6am-10pm
              </ContactInfoCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}