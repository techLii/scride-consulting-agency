import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section, Container } from "@/components/ui/section";
import { ArrowRight, BarChart, Globe, Zap, CheckCircle2, MessageSquare, HelpCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default async function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Section className="relative py-24 md:py-40 overflow-hidden flex items-center min-h-[80vh]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/9.jpeg"
            alt="Consulting Background"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-primary/40 dark:from-black/90 dark:via-black/70 dark:to-primary/30" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl backdrop-blur-md bg-white/10 dark:bg-black/20 p-8 md:p-12 rounded-3xl border border-white/20 shadow-2xl">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white !leading-[1.1]">
                We Are <span className="text-primary drop-shadow-sm">SCRIDE</span>
              </h1>
              <p className="text-xl md:text-3xl font-bold text-primary/90 max-w-3xl italic drop-shadow-md">
                Step by Step, Current Recurring Innovative Support Towards Determined Excellence.
              </p>
              <p className="text-lg md:text-xl text-zinc-100 max-w-2xl leading-relaxed">
                Advisory services to government, private, and non-governmental organizations on strategic analysis, program management, and sustainable development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact">
                  <Button size="lg" className="rounded-full px-10 text-lg font-bold shadow-xl transition-transform hover:scale-105">
                    Contact us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full px-10 text-lg font-bold bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm transition-transform hover:scale-105"
                  >
                    Our Story
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* What We Do Section */}
      <Section className="py-20 bg-white dark:bg-black">
        <Container>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              What we do
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              We are an advisory firm providing comprehensive services to government, private, and non-governmental organizations. 
              We partner with our clients to navigate complex challenges, offering data-driven insights and innovative solutions that drive growth and efficiency.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Strategy and Analysis",
                icon: BarChart,
                desc: "We are committed to conducting comprehensive market analyses to identify opportunities and mitigate risks, ensuring sustained growth and competitive advantage.",
              },
              {
                title: "Program Management",
                icon: Zap,
                desc: "SCRIDE Consultancy Agency is the leader in research and analysis for organizational care, support, and development. We serve our clients with diligence to support their systems and structures to a better future.",
              },
              {
                title: "Sustainable Development",
                icon: Globe,
                desc: "We engage with our stakeholders to develop sustainable solutions that not only benefit our business but also contribute positively to the communities and ecosystems in which we operate.",
              },
            ].map((service) => (
              <Card
                key={service.title}
                className="border-2 hover:border-primary transition-all hover:shadow-lg group"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section className="py-20 bg-accent/30 dark:bg-accent/10">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Hear from our customers
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Bishop Moses Omondi",
                role: "President, Teens for Christ",
                content: "SCRIDE Consulting Agency provided exceptional support in restructuring our Human Resource management at Teens for Christ. Their expertise led to a significant increase in our work efficiency. We highly recommend SCRIDE for their professionalism and strategic insight.",
              },
              {
                name: "Joel Ouma",
                role: "Area Manager, Evidence Action",
                content: "SCRIDE Consulting Agency delivered timely coaching and mentorship to our staff at Evidence Action. Their support addressed our professional development needs and significantly enhanced our organizational outcomes. I highly recommend SCRIDE for their dedication and expertise.",
              },
              {
                name: "Sharon Omondi",
                role: "Director, Shaffin Consultancy",
                content: "SCRIDE Consulting Agency provided outstanding counseling services to our staff at Shaffin Consultancy. Their support resulted in increased work efficiency and improved staff morale. We highly recommend SCRIDE for their professionalism and effectiveness.",
              },
              {
                name: "Bishop Moses Odhiambo",
                role: "President, Echoes of Mercy",
                content: "SCRIDE Consulting Agency gave us a clear roadmap through program assessment, SCORE Board and SWOT Analysis, and strategic planning. Their support led to increased funding and better donor retention. Highly recommended!",
              }
            ].map((t) => (
              <Card key={t.name} className="border-none shadow-md bg-white dark:bg-zinc-900/50">
                <CardContent className="pt-8">
                  <MessageSquare className="h-8 w-8 text-primary/40 mb-4" />
                  <p className="text-foreground italic mb-6 leading-relaxed">
                    &quot;{t.content}&quot;
                  </p>
                  <div>
                    <p className="font-bold text-primary">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQs Section */}
      <Section className="py-20 bg-white dark:bg-black">
        <Container className="max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground flex items-center justify-center gap-3">
              <HelpCircle className="h-8 w-8 text-primary" />
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-semibold">Who is SCRIDE?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We offer excellent support to organizations and businesses for increased outcome attainment. Attainment of excellence is a process hence we provide step-by-step current recurring innovative support towards determined excellence in Kenya and beyond.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-semibold">What sectors have SCRIDE worked with?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                This agency is an advisor to government, private, and non-governmental organizations on strategic analysis, program management, and sustainable development.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-semibold">What is the approach of SCRIDE towards a project?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We recognize the varied client needs, the consulting services are divided into three major areas which include: strategy and analysis, Program Management, and Sustainability Development. Every team remains committed to the client's needs and can provide support with a focused approach to developing needed systems.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-semibold">What does SCRIDE do?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We offer excellent support to organizations and businesses for increased outcome attainment. We provide step-by-step current recurring innovative support towards determined excellence.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-semibold">What is the working mantra of SCRIDE?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Developing long-lasting relationships with organizations by providing innovative and up-to-date advice and support, facilitating the implementation of standardized operations for improved outcomes.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Container>
      </Section>

      {/* Mantra Section (New) */}
      <Section className="py-16 bg-primary text-primary-foreground">
        <Container className="text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h3 className="text-lg font-bold uppercase tracking-widest text-primary-foreground/80">Our Working Mantra</h3>
            <p className="text-xl md:text-2xl font-medium leading-relaxed italic">
              &quot;Developing long-lasting relationships with organizations by providing innovative and up-to-date advice and support, facilitating the implementation of standardized operations for improved outcomes.&quot;
            </p>
          </div>
        </Container>
      </Section>

      {/* Final CTA Section */}
      <Section className="py-20 bg-zinc-900 text-white">
        <Container className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Partner for Excellence?
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Contact SCRIDE today to discuss how our innovative support can drive your mission forward.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 mt-4 h-14 text-lg"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </Container>
      </Section>
    </main>
  );
}
