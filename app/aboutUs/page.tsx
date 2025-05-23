import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/animations/animated-section";
import { AnimatedText } from "@/components/animations/animated-text";
import { AnimatedButton } from "@/components/ui/animated-button";
import { SlideInSection } from "@/components/animations/slide-in-section";
import { FadeInView } from "@/components/animations/fade-in-view";
import { AnimatedHeading } from "@/components/animations/animated-heading";

export const metadata: Metadata = {
  title: "About Us | TechDith Limited",
  description:
    "Learn about TechDith Limited, a dynamic and innovative technology company based in Lagos, Nigeria.",
};

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg?t=st=1743854254~exp=1743857854~hmac=37359df9e9ab41078b1d8b24260c7f39ba61bbfec4a80fb591509de258a38e79&w=1380"
            alt="TECHDITH Technology Solutions"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <AnimatedText
            text="About TechDith Limited"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          />
          <AnimatedSection variant="fadeInUp" delay={0.3}>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              A dynamic and innovative technology company at the forefront of
              the digital revolution in Nigeria
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Learn more about us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <AnimatedSection variant="fadeInRight">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 relative">
                  <span className="inline-block pb-2 border-b-4 border-secondary">
                    Learn more about us
                  </span>
                </h2>
              </AnimatedSection>
              <AnimatedSection variant="fadeInRight" delay={0.2}>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We envision a future where technology is seamlessly integrated
                  into every aspect of our lives and business in Nigeria and
                  Africa by extension. We are committed to delivering
                  exceptional service that bridges the gap between cutting-edge
                  technology and real-world business needs.
                </p>
              </AnimatedSection>
            </div>

            <AnimatedSection
              variant="fadeInLeft"
              delay={0.2}
              className="md:w-1/2 rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="https://img.freepik.com/free-photo/person-working-html-computer_23-2150038846.jpg?t=st=1743854967~exp=1743858567~hmac=fcaf1c53dbfe442615b8fa9bbce9756d6f9ae9424c1ec7c5f83a53c554e2f056&w=996"
                alt="TECHDITH Office"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Goals */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedHeading className="text-3xl font-bold mb-12 text-center text-gray-800">
            Our Goals
          </AnimatedHeading>

          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Image Section */}
            <div className="md:w-1/2">
              <div className="relative w-full h-72 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://img.freepik.com/free-photo/multinational-company-workers-meet-plan-project-focused-growth_482257-114515.jpg?t=st=1743855449~exp=1743859049~hmac=33529b7beb46113a7b761f66bed213f961f8358175fd750b23927c21b98d725d&w=1380"
                  alt="TECHDITH Vision"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="md:w-1/2">
              <AnimatedSection variant="fadeInRight">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  To deliver scalable, reliable, and innovative IT solutions
                  that:
                </p>
              </AnimatedSection>

              <ul className="list-disc list-inside text-gray-700 space-y-4 mb-6">
                <li>
                  <AnimatedSection variant="fadeInRight" delay={0.1}>
                    Streamline operations for SMEs and government agencies
                  </AnimatedSection>
                </li>
                <li>
                  <AnimatedSection variant="fadeInRight" delay={0.2}>
                    Enhance consumer experiences through tech
                  </AnimatedSection>
                </li>
                <li>
                  <AnimatedSection variant="fadeInRight" delay={0.3}>
                    Create a bridge between emerging technologies and the local
                    market
                  </AnimatedSection>
                </li>
                <li>
                  <AnimatedSection variant="fadeInRight" delay={0.4}>
                    Foster economic growth and sustainability through digital
                    empowerment
                  </AnimatedSection>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedHeading className="text-3xl font-bold mb-12 text-center text-gray-800">
            Our Vision
          </AnimatedHeading>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://img.freepik.com/free-photo/multinational-company-workers-meet-plan-project-focused-growth_482257-114515.jpg?t=st=1743855449~exp=1743859049~hmac=33529b7beb46113a7b761f66bed213f961f8358175fd750b23927c21b98d725d&w=1380"
                  alt="TECHDITH Vision"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <AnimatedSection variant="fadeInRight">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We envision a future where technology is seamlessly integrated
                  into every aspect of life and business in Nigeria. We are
                  committed to playing a leading role in shaping this future by
                  delivering innovative, reliable, and impactful technology
                  solutions that make a real difference.
                </p>
              </AnimatedSection>
              <AnimatedSection variant="fadeInRight" delay={0.2}>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  TECHDITH LIMITED is more than just a technology company; we
                  are a catalyst for change. We are committed to driving digital
                  transformation in Nigeria and helping businesses and
                  industries thrive in the digital age.
                </p>
              </AnimatedSection>
              <AnimatedSection variant="fadeInRight" delay={0.4}>
                <p className="text-gray-700 leading-relaxed">
                  Our vision extends beyond providing services – we aim to be a
                  strategic partner in our clients' success, contributing to the
                  technological advancement and economic growth of Nigeria
                  through innovation and excellence.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values: CITIE */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedHeading className="text-3xl font-bold mb-12 text-center">
            Our Values: CITIE
          </AnimatedHeading>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <SlideInSection direction="left" delay={0.1}>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform transition-transform hover:scale-105">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">C</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">
                  Customer Focus
                </h3>
                <p className="text-white/80 text-center">
                  We are committed to providing our clients with the highest
                  level of service, understanding their unique needs, and
                  exceeding their expectations.
                </p>
              </div>
            </SlideInSection>

            <SlideInSection direction="up" delay={0.2}>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform transition-transform hover:scale-105">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">I</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">
                  Integrity
                </h3>
                <p className="text-white/80 text-center">
                  We conduct our business with honesty, transparency, and
                  ethical standards that build trust with our clients, partners,
                  and team members.
                </p>
              </div>
            </SlideInSection>

            <SlideInSection direction="up" delay={0.3}>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform transition-transform hover:scale-105">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">T</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">
                  Teamwork
                </h3>
                <p className="text-white/80 text-center">
                  We believe that collaboration is key to success. We foster a
                  culture of cooperation, respect, and shared responsibility.
                </p>
              </div>
            </SlideInSection>

            <SlideInSection direction="up" delay={0.4}>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform transition-transform hover:scale-105">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">I</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">
                  Innovation
                </h3>
                <p className="text-white/80 text-center">
                  We are passionate about pushing the boundaries of what is
                  possible with technology, constantly seeking new ideas and
                  creative solutions.
                </p>
              </div>
            </SlideInSection>

            <SlideInSection direction="right" delay={0.5}>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform transition-transform hover:scale-105">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">E</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">
                  Excellence
                </h3>
                <p className="text-white/80 text-center">
                  We strive for excellence in everything we do, maintaining high
                  standards of quality and continuously improving our processes
                  and services.
                </p>
              </div>
            </SlideInSection>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedHeading className="text-3xl font-bold mb-12 text-center text-gray-800">
            Company Overview
          </AnimatedHeading>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 order-2 md:order-1">
              <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
                <div className="grid grid-cols-1 gap-6">
                  <AnimatedSection variant="fadeInRight" delay={0.1}>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">
                          Company Name
                        </h3>
                        <p className="text-lg font-semibold">
                          TECHDITH LIMITED
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection variant="fadeInRight" delay={0.2}>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">
                          Registration Date
                        </h3>
                        <p className="text-lg font-semibold">July 2024</p>
                      </div>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection variant="fadeInRight" delay={0.3}>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">
                          Registered Office
                        </h3>
                        <p className="text-lg font-semibold">
                          68, Adebayo Ajayi Avenue, Egan, Lagos
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection variant="fadeInRight" delay={0.4}>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">
                          Email Address
                        </h3>
                        <p className="text-lg font-semibold">
                          info@techdith.com
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </div>

            <AnimatedSection
              variant="fadeInLeft"
              delay={0.2}
              className="md:w-1/2 order-1 md:order-2"
            >
              <Image
                src="https://img.freepik.com/free-photo/industrial-designers-working-3d-model_23-2149370123.jpg?t=st=1743856305~exp=1743859905~hmac=1e3bbe8a687d8d12c6d963f7afbf4aed73005c543452c78e28e8bdab0b04183e&w=996"
                alt="TECHDITH Headquarters"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedHeading className="text-3xl font-bold mb-12 text-center text-gray-800">
            Our Team
          </AnimatedHeading>

          <div className="mb-12">
            <p className="text-gray-700 text-center max-w-3xl mx-auto">
              Our team consists of dedicated professionals with diverse
              expertise and a shared commitment to excellence. Together, we work
              to deliver innovative technology solutions that drive our clients'
              success.
            </p>
          </div>

          {/* Leadership */}
          <h3 className="text-2xl font-bold mb-8 text-gray-800">Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <SlideInSection direction="left" delay={0.1}>
              <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-transform hover:scale-105">
                <div className="h-80 relative">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Segun Oladiti"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-1">Segun Oladiti</h3>
                  <p className="text-primary font-medium mb-4">
                    Chief Executive Officer
                  </p>
                  <div className="space-y-2 text-gray-600 mb-6">
                    <p>
                      <span className="font-medium text-gray-800">Phone:</span>{" "}
                      07061622366, 08182681345
                    </p>
                    <p>
                      <span className="font-medium text-gray-800">Email:</span>{" "}
                      oluwasegunoladiti@gmail.com
                    </p>
                    <p>
                      <span className="font-medium text-gray-800">
                        Date of Birth:
                      </span>{" "}
                      November 2, 1993
                    </p>
                    <p>
                      <span className="font-medium text-gray-800">
                        State of Origin:
                      </span>{" "}
                      State of Osun
                    </p>
                  </div>
                  <div className="border-t pt-6">
                    <h4 className="font-semibold text-gray-800 mb-3">
                      Biography
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Segun Oladiti is the visionary founder and CEO of TECHDITH
                      LIMITED. With over 10 years of experience in technology
                      and business management, Segun has led numerous successful
                      projects across various sectors. His expertise in software
                      development and strategic planning has been instrumental
                      in establishing TECHDITH as a leading technology company
                      in Nigeria.
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-3">
                      Segun holds a degree in Computer Science and is passionate
                      about leveraging technology to solve real-world problems.
                      Under his leadership, TECHDITH continues to innovate and
                      deliver exceptional value to clients.
                    </p>
                  </div>
                </div>
              </div>
            </SlideInSection>

            <SlideInSection direction="right" delay={0.2}>
              <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-transform hover:scale-105">
                <div className="h-80 relative">
                  <Image
                    src="https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg?t=st=1743857797~exp=1743861397~hmac=4b2f6691b6fe3b7ad9d40eeec61d02e0cd0f2ee92e86fe6683e46b33e8e0183b&w=826"
                    alt="Ife Thona Akoniyon"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-1">
                    Ife Thona Akoniyon
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    Executive Director
                  </p>
                  <div className="space-y-2 text-gray-600 mb-6">
                    <p>
                      <span className="font-medium text-gray-800">Phone:</span>{" "}
                      08106688512
                    </p>
                    <p>
                      <span className="font-medium text-gray-800">Email:</span>{" "}
                      ifenikanakoniyon@gmail.com
                    </p>
                    <p>
                      <span className="font-medium text-gray-800">
                        Date of Birth:
                      </span>{" "}
                      September 18, 1997
                    </p>
                    <p>
                      <span className="font-medium text-gray-800">
                        State of Origin:
                      </span>{" "}
                      Ogun State
                    </p>
                  </div>
                  <div className="border-t pt-6">
                    <h4 className="font-semibold text-gray-800 mb-3">
                      Biography
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Ife Thona Akoniyon serves as the Executive Director at
                      TECHDITH LIMITED, bringing valuable expertise in business
                      development and project management. With a background in
                      both technology and business administration, Ife plays a
                      crucial role in aligning the company's technological
                      capabilities with market needs and client requirements.
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-3">
                      Ife is particularly focused on expanding TECHDITH's
                      presence in emerging sectors and has been instrumental in
                      developing the company's agricultural technology
                      initiatives. Her strategic vision and operational
                      excellence continue to drive the company's growth and
                      success.
                    </p>
                  </div>
                </div>
              </div>
            </SlideInSection>
          </div>

          {/* Technical Team */}
          <h3 className="text-2xl font-bold mb-8 text-gray-800">
            Technical Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SlideInSection direction="left" delay={0.1}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 relative">
                  <Image
                    src="https://img.freepik.com/free-photo/business-man-banner-concept-with-copy-space_23-2149601461.jpg?t=st=1743857970~exp=1743861570~hmac=da5dd50e91fd3f3e1386df0d0a92a6608b86b516679ed542bc6350df90a120e0&w=1380"
                    alt="Technical Team Member"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Adebayo Johnson</h3>
                  <p className="text-primary font-medium mb-4">
                    Lead Software Developer
                  </p>
                  <p className="text-gray-600 mb-4">
                    Adebayo leads our software development team, bringing 8+
                    years of experience in full-stack development. He
                    specializes in web and mobile application development, with
                    expertise in React, Node.js, and cloud infrastructure.
                  </p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-gray-400 hover:text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </SlideInSection>

            <SlideInSection direction="up" delay={0.2}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 relative">
                  <Image
                    src="https://img.freepik.com/free-photo/businesswoman-posing-outdoors_23-2149405879.jpg?t=st=1743858014~exp=1743861614~hmac=a9f30bf09528cecc711878f4b1cc58f06b106b32b023dff7cddc4fd4dfb869c8&w=740"
                    alt="Technical Team Member"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Chioma Nwosu</h3>
                  <p className="text-primary font-medium mb-4">
                    UX/UI Designer
                  </p>
                  <p className="text-gray-600 mb-4">
                    Chioma is our talented UX/UI designer with a passion for
                    creating intuitive and engaging user experiences. She
                    combines aesthetic design with user-centered principles to
                    create interfaces that are both beautiful and functional.
                  </p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-gray-400 hover:text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </SlideInSection>

            <SlideInSection direction="right" delay={0.3}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 relative">
                  <Image
                    src="https://img.freepik.com/free-photo/portrait-attractive-dark-skinned-student-wearing-checkered-shirt-with-confident-joyful-expression-standing-chalkboard-wall_273609-5907.jpg?t=st=1743858079~exp=1743861679~hmac=84ed3f22a7ebaef7e069e4a17e3aed074d7f57b68c26d770f1ec63f6642c1e0f&w=996"
                    alt="Technical Team Member"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Emmanuel Okonkwo</h3>
                  <p className="text-primary font-medium mb-4">
                    Data Scientist
                  </p>
                  <p className="text-gray-600 mb-4">
                    Emmanuel specializes in data analytics and machine learning,
                    helping our clients extract valuable insights from their
                    data. His expertise in AI and predictive modeling
                    contributes to our innovative technology solutions.
                  </p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-gray-400 hover:text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </SlideInSection>
          </div>

          {/* Business Team */}
          <h3 className="text-2xl font-bold mb-8 mt-16 text-gray-800">
            Business Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SlideInSection direction="left" delay={0.1}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 relative">
                  <Image
                    src="https://img.freepik.com/free-photo/portrait-confident-dark-skinned-woman-enterpreneur-with-serious-look-wears-round-glasses-red-blouse-going-meet-with-partners-from-abroad-prepares-presenting-company-isolated-white_273609-3653.jpg?t=st=1743858146~exp=1743861746~hmac=40608c809f8334976c7df8471b71d02def4b3d70064459993d18b7a30181cea7&w=996"
                    alt="Business Team Member"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Folake Adeyemi</h3>
                  <p className="text-primary font-medium mb-4">
                    Business Development Manager
                  </p>
                  <p className="text-gray-600 mb-4">
                    Folake leads our business development efforts, identifying
                    new opportunities and building strategic partnerships. Her
                    deep understanding of the Nigerian market helps us tailor
                    our solutions to meet local needs.
                  </p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-gray-400 hover:text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </SlideInSection>

            <SlideInSection direction="up" delay={0.2}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 relative">
                  <Image
                    src="https://img.freepik.com/free-photo/serious-trendy-guy-posing-indoors_74855-3105.jpg?t=st=1743858204~exp=1743861804~hmac=81d3212777fcdcc59fb600c35e443cde72f76551a183731542769f00da3d675d&w=996"
                    alt="Business Team Member"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Oluwaseun Adeleke</h3>
                  <p className="text-primary font-medium mb-4">
                    Project Manager
                  </p>
                  <p className="text-gray-600 mb-4">
                    Oluwaseun oversees our project delivery, ensuring that we
                    meet client requirements on time and within budget. His
                    methodical approach and attention to detail ensure the
                    successful implementation of our solutions.
                  </p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-gray-400 hover:text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </SlideInSection>

            <SlideInSection direction="right" delay={0.3}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 relative">
                  <Image
                    src="https://img.freepik.com/free-photo/portrait-modern-man-caffe_23-2148956928.jpg?t=st=1743858325~exp=1743861925~hmac=52c25b99f452592c9b4164cc5ec5401deb3c493675cb2de212fbbe88ac90be8e&w=740"
                    alt="Business Team Member"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Tunde Bakare</h3>
                  <p className="text-primary font-medium mb-4">
                    Marketing Specialist
                  </p>
                  <p className="text-gray-600 mb-4">
                    Tunde manages our marketing initiatives, helping us
                    communicate our value proposition to potential clients. His
                    creative approach and digital marketing expertise enhance
                    our brand presence in the market.
                  </p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-gray-400 hover:text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </SlideInSection>
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-700 mb-6">
              Interested in joining our team? We're always looking for talented
              individuals who share our passion for technology and innovation.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-lg"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedHeading className="text-3xl font-bold mb-12 text-center text-gray-800">
            Our Objectives
          </AnimatedHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SlideInSection direction="left" delay={0.1}>
              <div className="relative bg-white rounded-lg shadow-lg p-8 border-t-4 border-secondary">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 mt-6 text-center">
                  Enhancing Efficiency
                </h3>
                <p className="text-gray-600 text-center">
                  We develop technological solutions to streamline processes,
                  automate tasks, and optimize resource utilization.
                </p>
              </div>
            </SlideInSection>

            <SlideInSection direction="up" delay={0.2}>
              <div className="relative bg-white rounded-lg shadow-lg p-8 border-t-4 border-secondary">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 mt-6 text-center">
                  Improving User Experience
                </h3>
                <p className="text-gray-600 text-center">
                  Our team designs intuitive interfaces and user-friendly
                  applications that provide seamless integration and
                  accessibility across different platforms.
                </p>
              </div>
            </SlideInSection>

            <SlideInSection direction="right" delay={0.3}>
              <div className="relative bg-white rounded-lg shadow-lg p-8 border-t-4 border-secondary">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 mt-6 text-center">
                  Driving Innovation
                </h3>
                <p className="text-gray-600 text-center">
                  We invest in research and development to explore emerging
                  technologies, stay ahead of market trends, and foster a
                  culture of creativity and experimentation.
                </p>
              </div>
            </SlideInSection>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedHeading className="text-3xl font-bold mb-12 text-center text-gray-800">
            Our Services
          </AnimatedHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SlideInSection direction="left" delay={0.1}>
              <div className="flex bg-white rounded-lg shadow-lg overflow-hidden hover:bg-primary/5 transition-colors">
                <div className="w-1/3 relative">
                  <Image
                    src="https://img.freepik.com/free-photo/computer-program-coding-screen_53876-138060.jpg?uid=R75576832&ga=GA1.1.106458567.1743797612&semt=ais_hybrid&w=740"
                    alt="Computer Programming"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-2/3 p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    Computer Programming and Consultancy
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700">
                    We provide tailored software development and IT consulting
                    services to meet the unique needs of our clients.
                  </p>
                </div>
              </div>
            </SlideInSection>

            <SlideInSection direction="right" delay={0.2}>
              <div className="flex bg-white rounded-lg shadow-lg overflow-hidden hover:bg-primary/5 transition-colors">
                <div className="w-1/3 relative">
                  <Image
                    src="https://img.freepik.com/free-photo/cloud-storage-banner-background_53876-108506.jpg?t=st=1743858640~exp=1743862240~hmac=9e6d9e3a8c50e88a5e2060ed0a11d698251f444ceea4f1c10aae2992978fbb03&w=996"
                    alt="IT Infrastructure"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-2/3 p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    IT Infrastructure Development
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700">
                    Our expertise includes establishing and managing computer
                    centers, manufacturing or processing software packages, and
                    handling hardware materials.
                  </p>
                </div>
              </div>
            </SlideInSection>

            <SlideInSection direction="left" delay={0.3}>
              <div className="flex bg-white rounded-lg shadow-lg overflow-hidden hover:bg-primary/5 transition-colors">
                <div className="w-1/3 relative">
                  <Image
                    src="https://img.freepik.com/free-photo/scientist-working-laboratory_23-2148880441.jpg"
                    alt="Research and Development"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-2/3 p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    Research and Development
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700">
                    We undertake R&D initiatives for technological updates in
                    various areas, ensuring our solutions remain cutting-edge.
                  </p>
                </div>
              </div>
            </SlideInSection>

            <SlideInSection direction="right" delay={0.4}>
              <div className="flex bg-white rounded-lg shadow-lg overflow-hidden hover:bg-primary/5 transition-colors">
                <div className="w-1/3 relative">
                  <Image
                    src="https://img.freepik.com/free-photo/young-woman-teaching-english-online_23-2149019714.jpg"
                    alt="Training and Development"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-2/3 p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    Training and Development
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700">
                    We offer training courses, tests, and examinations in
                    management and computer technology, encompassing both
                    hardware and software aspects.
                  </p>
                </div>
              </div>
            </SlideInSection>
          </div>
        </div>
      </section>

      {/* Projects Undertaken */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedHeading className="text-3xl font-bold mb-12 text-center text-gray-800">
            Projects Undertaken
          </AnimatedHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <SlideInSection direction="left" delay={0.1}>
              <div className="group relative overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=500&width=800"
                    alt="Agricultural Investment"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="p-6 relative">
                  <h3 className="text-xl font-semibold mb-3">
                    Agricultural Investment
                  </h3>
                  <p className="text-gray-600">
                    Partnered with a farm subsidiary to plant 500 tubers of yam
                    for a one-year planting season, achieving a notable
                    turnover.
                  </p>
                </div>
              </div>
            </SlideInSection>

            <SlideInSection direction="right" delay={0.2}>
              <div className="group relative overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=500&width=800"
                    alt="Black Soldier Fly Farming"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="p-6 relative">
                  <h3 className="text-xl font-semibold mb-3">
                    Black Soldier Fly (BSF) Farming Research
                  </h3>
                  <p className="text-gray-600">
                    Collaborated with a BSF farmer to undertake a farming
                    project, observing culturing and mating patterns for
                    sustainable agricultural practices.
                  </p>
                </div>
              </div>
            </SlideInSection>
          </div>
        </div>
      </section>

      {/* Future Initiatives */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedHeading className="text-3xl font-bold mb-12 text-center text-gray-800">
            Future Initiatives
          </AnimatedHeading>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <SlideInSection direction="left" delay={0.1} className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Future Initiatives"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </SlideInSection>

            <div className="md:w-1/2 space-y-8">
              <SlideInSection direction="right" delay={0.2}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">
                      Government Partnerships
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    We aim to collaborate with government parastatals to provide
                    IT gadgets and products, fostering innovation and
                    technological advancement in public sectors.
                  </p>
                </div>
              </SlideInSection>

              <SlideInSection direction="right" delay={0.3}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">
                      SAAS Product Development – LARDSHARE
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Currently in its pre-iteration phase, LARDSHARE is a
                    hard-skill sharing platform-based software that connects
                    service providers and users. It features geospatial
                    capabilities, robust back-end machine learning, and
                    forefront artificial intelligence. We are actively seeking
                    funding to bring this innovative product to market.
                  </p>
                </div>
              </SlideInSection>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <AnimatedHeading className="text-3xl font-bold mb-8">
            Conclusion
          </AnimatedHeading>
          <p className="text-lg max-w-3xl mx-auto mb-6">
            TECHDITH LIMITED is committed to delivering exceptional
            technological solutions that enhance efficiency, improve user
            experiences, and drive innovation across various sectors. Our
            diverse range of services and forward-looking projects position us
            as a dynamic player in the technology industry.
          </p>
          <p className="text-lg max-w-3xl mx-auto">
            We welcome the opportunity to collaborate with stakeholders who
            share our vision for a technologically advanced future.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedHeading className="text-3xl font-bold mb-12 text-center text-gray-800">
            Contact Us
          </AnimatedHeading>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <SlideInSection direction="left" delay={0.1} className="md:w-1/2">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=800&width=800"
                  alt="TECHDITH Office Location"
                  fill
                  className="object-cover"
                />
              </div>
            </SlideInSection>

            <div className="md:w-1/2">
              <SlideInSection direction="right" delay={0.2}>
                <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Address</h3>
                        <p className="text-gray-600">
                          68, Adebayo Ajayi Avenue, Egan, Lagos
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Email</h3>
                        <p className="text-gray-600">techlard4@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 10h18M3 6h18M3 14h18M3 18h18"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Phone</h3>
                        <p className="text-gray-600">+234 706 162 2366</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SlideInSection>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
