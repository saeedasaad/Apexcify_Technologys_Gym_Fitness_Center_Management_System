import React from "react";
import Heading from "../ul/Heading";
import FAQCard from "../common/FAQCard";
import Button from "../ul/Button";

export default function FAQSection() {
  const faqs = [
    {
      question: "What are your operating hours?",
      answer:
        "We're open 24/7, 365 days a year! Staffed hours are Mon-Fri 5am-11pm, Sat-Sun 6am-10pm. Outside these hours, members have 24/7 access with their membership card.",
    },
    {
      question: "Do you offer a free trial?",
      answer:
        "Yes! All membership plans include a 7-day free trial. No credit card required. You can access all facilities and attend group classes during your trial period.",
    },
    {
      question: "Can I freeze my membership?",
      answer:
        "Absolutely! You can freeze your membership for up to 3 months per year. There's a small administrative fee of $10/month during the freeze period. Just give us 7 days notice.",
    },
    {
      question: "What should I bring to my first visit?",
      answer:
        "Bring workout clothes, athletic shoes, a water bottle, and a towel. We provide lockers (bring your own lock), and Elite members receive complimentary towel service.",
    },
  ];

  return (
    <section id="FAQ" className="bg-white py-20">
      <div className="w-[90%] md:w-[85%] mx-auto">
        <Heading level="h2">
          Frequently <span className="text-[var(--primary)]">Asked Questions</span>
        </Heading>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Everything you need to know about FitZone membership
        </p>

        {/* FAQ Container */}
        <div className="faq-container max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQCard key={index} {...faq} />
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-10">
          <p className="mb-4 text-gray-700">Still have questions?</p>
          <Button variant="primary">Contact Us</Button>
        </div>
      </div>
    </section>
  );
}