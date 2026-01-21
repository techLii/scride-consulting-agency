"use client";

import { useState, useEffect } from "react";
import { Section, Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Info } from "lucide-react";
import { cn } from "@/lib/utils";

const galleryItems = [
  {
    title: "Strategic Advisory Session",
    description: "Our team conducting a high-level strategic analysis with government stakeholders to optimize public service delivery.",
    image: "/images/2.jpeg?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Program Management Workshop",
    description: "Coaching and mentorship session focused on improving organizational care and support for sustainable outcomes.",
    image: "/images/3.jpeg?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Sustainable Development Initiative",
    description: "Engaging with local communities to implement eco-friendly systems that balance business growth with environmental care.",
    image: "/images/4.jpeg?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Digital Transformation Leadership",
    description: "Modernizing client structures through innovative digital support towards determined excellence in operations.",
    image: "/images/5.jpeg?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Digital Transformation Leadership",
    description: "Modernizing client structures through innovative digital support towards determined excellence in operations.",
    image: "/images/6.jpeg?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Digital Transformation Leadership",
    description: "Modernizing client structures through innovative digital support towards determined excellence in operations.",
    image: "/images/7.jpeg?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function GalleryPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? galleryItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === galleryItems.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  return (
    <main className="flex flex-col min-h-screen">
      {/* Gallery Hero */}
      <Section className="py-20 bg-gradient-to-b from-white to-accent/30 dark:from-black dark:to-accent/10">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              Our <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A visual journey through our projects, community impact, 
              and the strategic excellence we bring to every partnership.
            </p>
          </div>
        </Container>
      </Section>

      {/* Carousel Section */}
      <Section className="py-10 md:py-20 bg-white dark:bg-black">
        <Container>
          <div className="relative group max-w-5xl mx-auto">
            {/* Main Carousel Image */}
            <div className="relative h-[400px] md:h-[600px] w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-border/50">
              {galleryItems.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                    index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                  )}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full transition-transform duration-[10000ms] ease-linear scale-110 motion-safe:group-hover:scale-100"
                  />
                  {/* Overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  
                  {/* Content Over Image */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white transform transition-transform duration-700 translate-y-0 opacity-100">
                    <div className="flex items-center gap-2 text-primary font-bold mb-3 uppercase tracking-widest text-sm">
                      <div className="h-1 w-8 bg-primary rounded-full" />
                      Showcase Project 0{index + 1}
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                      {item.title}
                    </h2>
                    <p className="text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-primary text-white backdrop-blur-md transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-primary text-white backdrop-blur-md transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Thumbnail Navigation / Dots */}
            <div className="flex justify-center gap-4 mt-8">
              {galleryItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "h-3 transition-all duration-500 rounded-full",
                    index === currentIndex 
                      ? "w-12 bg-primary" 
                      : "w-3 bg-primary/20 hover:bg-primary/40"
                  )}
                />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Additional Content Section */}
      <Section className="py-20 bg-accent/30 dark:bg-accent/10">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm">
                <Info className="h-4 w-4" />
                Our Commitment to Excellence
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Documenting our impact, step by step.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every image in our gallery represents a milestone in our journey 
                to transform organizations and communities. We believe that visual 
                evidence of success inspires further innovation and determined excellence.
              </p>
              <ul className="space-y-4">
                {[
                  "15+ years of strategic advisory experience",
                  "Impact-driven program management",
                  "Sustainable solutions for a better future",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-semibold text-foreground">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-800">
                <img 
                  src="/images/9.jpeg?auto=format&fit=crop&w=800&q=80" 
                  alt="Team collaboration"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-primary rounded-2xl flex items-center justify-center shadow-xl animate-bounce">
                <div className="text-center text-white">
                  <span className="block text-3xl font-bold">100%</span>
                  <span className="text-[10px] font-bold uppercase tracking-tighter">Commitment</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
