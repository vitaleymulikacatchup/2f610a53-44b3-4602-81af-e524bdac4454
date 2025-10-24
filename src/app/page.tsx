"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Award, Briefcase, DollarSign, MessageCircle, Phone, Star, TrendingUp } from "lucide-react";

export default function HomePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="PurpleRealty"
          button={{
            text: "Contact Us",
            href: "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Find Your Dream Property"
          description="Discover exceptional homes and investment opportunities with our expert real estate services"
          tag="Premium Properties"
          buttons={[
            {
              text: "Browse Properties",
              href: "product"
            },
            {
              text: "Learn More",
              href: "about"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/18341129/pexels-photo-18341129.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        />
      </div>
      
      <div id="about" data-section="about">
        <TextSplitAbout
          title="Your Trusted Real Estate Partner"
          description={[
            "We specialize in connecting buyers with their perfect properties and helping sellers achieve the best possible outcomes.",
            "With years of experience in the local market, our team provides expert guidance throughout every step of your real estate journey."
          ]}
          buttons={[
            {
              text: "View Properties",
              href: "product"
            }
          ]}
          showBorder={true}
        />
      </div>
      
      <div id="product" data-section="product">
        <ProductCardOne
          title="Featured Properties"
          description="Explore our carefully selected collection of premium properties"
          tag="Available Now"
          tagIcon={Star}
          products={[
            {
              id: "1",
              name: "Luxury Villa Estate",
              price: "$1,250,000",
              imageSrc: "https://images.pexels.com/photos/34378030/pexels-photo-34378030.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "Modern City Penthouse",
              price: "$875,000",
              imageSrc: "https://images.pexels.com/photos/34378029/pexels-photo-34378029.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "Contemporary Family Home",
              price: "$650,000",
              imageSrc: "https://images.pexels.com/photos/34365485/pexels-photo-34365485.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              name: "Downtown Luxury Apartment",
              price: "$425,000",
              imageSrc: "https://images.pexels.com/photos/8572163/pexels-photo-8572163.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>
      
      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Our Services"
          description="Professional real estate services tailored to your needs"
          tag="Services"
          tagIcon={Briefcase}
          plans={[
            {
              id: "buyer",
              badge: "For Buyers",
              badgeIcon: DollarSign,
              price: "Free Consultation",
              subtitle: "Complete buyer representation services",
              buttons: [
                {
                  text: "Get Started",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "about"
                }
              ],
              features: [
                "Property search assistance",
                "Market analysis reports",
                "Negotiation support",
                "Closing coordination"
              ]
            },
            {
              id: "seller",
              badge: "For Sellers",
              badgeIcon: DollarSign,
              price: "Competitive Commission",
              subtitle: "Full-service selling experience",
              buttons: [
                {
                  text: "List Property",
                  href: "contact"
                },
                {
                  text: "Get Valuation",
                  href: "contact"
                }
              ],
              features: [
                "Professional photography",
                "Marketing campaigns",
                "Open house coordination",
                "Expert pricing strategy"
              ]
            },
            {
              id: "investment",
              badge: "Investment",
              badgeIcon: TrendingUp,
              price: "Custom Packages",
              subtitle: "Investment property guidance",
              buttons: [
                {
                  text: "Explore Options",
                  href: "contact"
                },
                {
                  text: "Schedule Call",
                  href: "contact"
                }
              ],
              features: [
                "ROI analysis",
                "Market research",
                "Portfolio management",
                "Tax optimization advice"
              ]
            }
          ]}
        />
      </div>
      
      <div id="metric" data-section="metric">
        <MetricCardTwo
          title="Our Track Record"
          description="Proven results that speak for our expertise and commitment"
          tag="Results"
          tagIcon={Award}
          metrics={[
            {
              id: "1",
              value: "500+",
              description: "Properties Sold"
            },
            {
              id: "2",
              value: "98%",
              description: "Client Satisfaction"
            },
            {
              id: "3",
              value: "$50M+",
              description: "Total Sales Volume"
            },
            {
              id: "4",
              value: "15+",
              description: "Years Experience"
            }
          ]}
        />
      </div>
      
      <div id="testimonial" data-section="testimonial">
        <TestimonialCardThree
          title="What Our Clients Say"
          description="Real experiences from satisfied property buyers and sellers"
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              handle: "@sarah_j",
              testimonial: "The team made buying our first home an absolute breeze. Their expertise and patience throughout the process was incredible.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "Michael Chen",
              handle: "@mchen_realtor",
              testimonial: "Sold our property in just two weeks at asking price. The marketing strategy and professional service exceeded all expectations.",
              imageSrc: "https://images.pexels.com/photos/3778610/pexels-photo-3778610.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              handle: "@emily_homes",
              testimonial: "As first-time investors, we needed guidance we could trust. The market insights and support were invaluable.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              name: "David Thompson",
              handle: "@dthompson",
              testimonial: "Professional, knowledgeable, and always available. They truly care about getting the best outcome for their clients.",
              imageSrc: "https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "5",
              name: "Lisa Park",
              handle: "@lisa_properties",
              testimonial: "The negotiation skills saved us thousands on our dream home purchase. Highly recommend their services to anyone.",
              imageSrc: "https://images.pexels.com/photos/7578857/pexels-photo-7578857.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Common Questions"
          sideDescription="Everything you need to know about our real estate services"
          faqs={[
            {
              id: "1",
              title: "How do you determine property values?",
              content: "We conduct comprehensive market analysis using recent sales data, current market conditions, and property-specific factors to provide accurate valuations."
            },
            {
              id: "2",
              title: "What's included in your selling service?",
              content: "Our full-service approach includes professional photography, marketing campaigns, listing management, showing coordination, and expert negotiation support."
            },
            {
              id: "3",
              title: "How long does it typically take to sell?",
              content: "Market conditions vary, but our average time on market is 30-45 days. We'll provide a realistic timeline based on your specific property and local market."
            },
            {
              id: "4",
              title: "Do you help with financing options?",
              content: "Yes, we work with trusted mortgage professionals and can connect you with competitive financing options suited to your situation."
            },
            {
              id: "5",
              title: "What areas do you serve?",
              content: "We specialize in the greater metropolitan area and surrounding suburbs. Contact us to confirm coverage for your specific location."
            }
          ]}
          textPosition="left"
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          tagIcon={Phone}
          title="Ready to Find Your Perfect Property?"
          description="Contact us today for a free consultation and let us help you achieve your real estate goals."
          inputPlaceholder="Enter your email"
          buttonText="Contact Us"
          termsText="By submitting, you agree to receive communications about our services and market updates."
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "Buy Properties",
                  href: "product"
                },
                {
                  label: "Sell Properties",
                  href: "pricing"
                },
                {
                  label: "Investment Advice",
                  href: "pricing"
                },
                {
                  label: "Market Analysis",
                  href: "about"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Team",
                  href: "about"
                },
                {
                  label: "Success Stories",
                  href: "testimonial"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            },
            {
              title: "Resources",
              items: [
                {
                  label: "FAQ",
                  href: "faq"
                },
                {
                  label: "Market Reports",
                  href: "about"
                },
                {
                  label: "Buying Guide",
                  href: "faq"
                },
                {
                  label: "Selling Tips",
                  href: "faq"
                }
              ]
            }
          ]}
          copyrightText="© 2025 PurpleRealty. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}