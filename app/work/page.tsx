import { Section, Container } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Our Work | SCRIDE Consulting",
  description: "Explore our portfolio of successful projects and client transformations across Kenya and beyond.",
};

export default function WorkPage() {
  const projects = [
    {
      title: "Evidence Action Training Program",
      slug: "evidence-action",
      client: "Evidence Action",
      year: "2024",
      description: "Coaching and mentorship program that addressed professional development needs and enhanced organizational outcomes.",
      image: "/images/9.jpeg?auto=format&fit=crop&w=800&q=80",
      category: "Training & Mentorship"
    },
    {
      title: "Human Resource Restructuring",
      slug: "teens-for-christ",
      client: "Teens For Christ",
      year: "2021",
      description: "HR management restructuring, staffing realignment, and HRM policy development for increased efficiency.",
      image: "/images/teens.png?auto=format&fit=crop&w=800&q=80",
      category: "HR Restructuring"
    },
    {
      title: "Strategic Planning & Assessment",
      slug: "echoes-of-mercy",
      client: "Echoes Of Mercy",
      year: "2021",
      description: "Program assessment, SWOT Analysis, and strategic plan development for achievement of organizational goals.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      category: "Strategy & Assessment"
    },
    {
      title: "Staff Counselling Services",
      slug: "shafin-consulting",
      client: "Shafin Consulting",
      year: "2020",
      description: "Specialized counselling services to improve staff morale and work efficiency for targeted beneficiaries.",
      image: "/images/4.jpeg?auto=format&fit=crop&w=800&q=80",
      category: "Staff Support"
    },
  ];

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Section className="py-20 bg-gradient-to-b from-white to-accent/30 dark:from-black dark:to-accent/10">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              Our <span className="text-primary">Recent Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our portfolio of successful projects and client transformations. 
              Click on a project to view detailed case studies.
            </p>
          </div>
        </Container>
      </Section>

      {/* Projects Grid */}
      <Section className="py-20 bg-white dark:bg-black">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <Link key={project.slug} href={`/work/${project.slug}`} className="flex flex-col">
                <Card className="overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl group flex flex-col h-full cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                        {project.category}
                      </div>
                    </div>
                  </div>
                  <CardHeader className="space-y-4 flex-grow">
                    <div className="flex justify-between items-start gap-4">
                      <CardTitle className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                    </div>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground font-medium">
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-primary" />
                        {project.client}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        {project.year}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    <div className="pt-4 flex items-center justify-between text-primary font-bold text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5" />
                        View Case Study
                      </div>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Call to Action */}
      <Section className="py-20 bg-accent/30 dark:bg-accent/10">
        <Container className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ready to become our next success story?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contact us today to discuss how we can support your organization's mission
            and drive sustainable growth through our specialized advisory services.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-4 text-lg font-bold text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Get In Touch
          </Link>
        </Container>
      </Section>
    </main>
  );
}
