import { Section, Container } from "@/components/ui/section";
import { CheckCircle2, Target, Users, Shield, Rocket } from "lucide-react";

export const metadata = {
  title: "About Us | SCRIDE Consulting",
  description: "Learn about SCRIDE, our mission, values, and expert team.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero / Intro Section */}
      <Section className="py-20 bg-gradient-to-b from-white to-accent/30 dark:from-black dark:to-accent/10">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              About Us
            </h1>
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-primary italic">
                SCRIDE: Step by Step, Current Recurring Innovative Support Towards Determined Excellence.
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We are your excellent support. Our agency is an advisor to government, private, and non-governmental organizations on strategic analysis, program management, and sustainable development.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 pt-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-primary" /> Professionalism</span>
              <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-primary" /> Dignity</span>
              <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-primary" /> Integrity</span>
              <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-primary" /> Patient Support</span>
              <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-primary" /> Teamwork</span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Philosophy Section */}
      <Section className="py-20 bg-white dark:bg-black">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Philosophy
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We offer excellent support to organizations and businesses for increased outcome attainment. 
                This is cognisant that attainment of excellence is a process hence we provide step-by-step current 
                recurring innovative support towards determined excellence in Kenya and beyond.
              </p>
              <div className="p-6 bg-primary/5 border-l-4 border-primary rounded-r-xl">
                <p className="text-foreground font-medium italic">
                  &quot;We transform and standardize the organizations’ operations for increased outcome attainment.&quot;
                </p>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/10">
              <img
                src="/images/9.jpeg?auto=format&fit=crop&w=800&q=80"
                alt="Strategy Meeting"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Mission Section */}
      <Section className="py-20 bg-zinc-900 text-white">
        <Container className="text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <Target className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-5xl font-bold">Our Mission</h2>
            <p className="text-xl md:text-2xl font-light leading-relaxed italic opacity-90">
              &quot;To develop long-lasting relationships with organizations for strategic comprehension, 
              provision of innovative and up-to-date advice and support, in utilization and 
              implementation of standardized operations for improved outcome attainment.&quot;
            </p>
          </div>
        </Container>
      </Section>

      {/* Leadership Section */}
      <Section className="py-20 bg-white dark:bg-black">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">Our Leadership</h2>
            <p className="text-muted-foreground mt-4 text-lg">Guided by expertise and dedication</p>
          </div>
          <div className="grid md:grid-cols-1 max-w-5xl mx-auto gap-12">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start bg-accent/30 dark:bg-accent/10 p-8 rounded-3xl border border-border">
              <div className="w-64 h-64 relative flex-shrink-0 rounded-2xl overflow-hidden shadow-xl border-2 border-primary">
                <img
                  src="/images/rachael-onyango.jpg?auto=format&fit=crop&w=500&q=80"
                  alt="Rachael Onyango"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-3xl font-bold text-foreground">Rachael Onyango</h3>
                  <p className="text-primary font-bold text-lg uppercase tracking-wider">Managing Partner</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Rachel Onyango is a result-driven driven meticulous Lean Six Sigma expert with over 15 years 
                  of experience in Strategic, Corporate, and Executive Leadership, organizational development, 
                  program Management, Monitoring Evaluation, and Research, Human Resources Management, 
                  Strategic partnership, and Fundraising.
                </p>
                <div className="flex gap-4 pt-2">
                  <div className="flex items-center gap-2 text-sm text-foreground font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> Lean Six Sigma Expert
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> 15+ Years Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Focus Areas Section */}
      <Section className="py-20 bg-accent/30 dark:bg-accent/10 border-t border-border">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Commitment</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                SCRIDE Consultancy Agency is the leader in research and analysis for organizational care, 
                support, and development. We are keen to serve our clients with diligence to support 
                their systems and structures to a better future where they are fluid to handle the 
                complex and dynamic needs of their clients.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Strategy and Analysis",
                  icon: Target,
                  desc: "Committed to market insights and risk mitigation."
                },
                {
                  title: "Program Management",
                  icon: Rocket,
                  desc: "Building fluid systems for complex stakeholder needs."
                },
                {
                  title: "Sustainable Development",
                  icon: Users,
                  desc: "Creating solutions that benefit communities and ecosystems."
                }
              ].map((area) => (
                <div key={area.title} className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-border flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <area.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground">{area.title}</h4>
                  <p className="text-sm text-muted-foreground">{area.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
