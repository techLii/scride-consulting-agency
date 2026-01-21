import { Section, Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Briefcase } from "lucide-react";
import Link from "next/link";
import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content", "work", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return notFound();
  }

  const content = fs.readFileSync(filePath, "utf8");

  // Simple mapping for hero metadata as we don't have frontmatter parser installed yet
  const projectsMeta: Record<string, { client: string; year: string; industry: string }> = {
    "evidence-action": { client: "Evidence Action", year: "2024", industry: "Non-Profit" },
    "teens-for-christ": { client: "Teens For Christ", year: "2021", industry: "Religious Org" },
    "echoes-of-mercy": { client: "Echoes Of Mercy", year: "2021", industry: "Non-Profit" },
    "shafin-consulting": { client: "Shafin Consulting", year: "2020", industry: "Consultancy" },
  };

  const meta = projectsMeta[slug] || { client: "Client", year: "Year", industry: "General" };

  return (
    <main className="flex flex-col min-h-screen">
      {/* Header / Back Link */}
      <Section className="py-8 bg-white dark:bg-black border-b border-border">
        <Container>
          <Link 
            href="/work" 
            className="inline-flex items-center text-primary font-bold hover:underline group mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Our Work
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <p className="text-primary font-bold uppercase tracking-widest text-sm">{meta.industry}</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                {slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
              </h1>
            </div>
            <div className="flex gap-6 text-muted-foreground font-medium">
              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary/60" />
                {meta.client}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary/60" />
                {meta.year}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Markdown Content */}
      <Section className="py-16 bg-white dark:bg-black min-h-[50vh]">
        <Container className="max-w-3xl">
          <article className="prose prose-emerald dark:prose-invert lg:prose-xl max-w-none">
            <ReactMarkdown
              components={{
                h1: ({ children }) => <h1 className="text-3xl font-bold text-primary mt-8 mb-4 border-b pb-2">{children}</h1>,
                h2: ({ children }) => <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">{children}</h2>,
                h3: ({ children }) => <h3 className="text-xl font-bold text-foreground mt-6 mb-2">{children}</h3>,
                p: ({ children }) => <p className="text-muted-foreground leading-relaxed mb-6 whitespace-pre-wrap">{children}</p>,
                ul: ({ children }) => <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">{children}</ul>,
                li: ({ children }) => <li>{children}</li>,
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-primary pl-6 italic my-8 text-primary/80 text-lg bg-primary/5 p-6 rounded-r-xl">
                    {children}
                  </blockquote>
                ),
                strong: ({ children }) => <strong className="font-bold text-foreground">{children}</strong>,
              }}
            >
              {content}
            </ReactMarkdown>
          </article>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="py-20 bg-primary text-primary-foreground border-t border-primary/20">
        <Container className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Interested in similar results?</h2>
          <p className="text-lg opacity-90 max-w-xl mx-auto italic">
            "Developing long-lasting relationships with organizations by providing innovative and up-to-date advice and support."
          </p>
          <div className="pt-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-zinc-100 rounded-full px-10 font-bold">
                Let's Discuss Your Project
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </main>
  );
}
