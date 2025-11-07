import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Users } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description:
        "To deliver innovative software solutions that empower businesses to thrive in the digital age through cutting-edge technology and AI-driven automation.",
    },
    {
      icon: Eye,
      title: "Vision",
      description:
        "To be the global leader in technology innovation, setting new standards for excellence and transforming industries through intelligent solutions.",
    },
    {
      icon: Heart,
      title: "Values",
      description:
        "We believe in integrity, innovation, collaboration, and excellence. Our commitment to these values drives everything we do.",
    },
  ];

  const team = [
    {
      name: "Dr. Rajesh Kumar",
      role: "CEO & Founder",
      bio: "20+ years of experience in enterprise software and AI innovation",
    },
    {
      name: "Priya Sharma",
      role: "CTO",
      bio: "Expert in cloud architecture and scalable system design",
    },
    {
      name: "Amit Patel",
      role: "Head of AI",
      bio: "Leading researcher in machine learning and automation",
    },
    {
      name: "Sneha Reddy",
      role: "VP of Engineering",
      bio: "Passionate about building high-performing technical teams",
    },
  ];

  const milestones = [
    { year: "2015", event: "Mastersolis Infotech founded" },
    { year: "2017", event: "Launched first AI-powered platform" },
    { year: "2019", event: "Expanded to 50+ enterprise clients" },
    { year: "2021", event: "Achieved ISO 27001 certification" },
    { year: "2023", event: "Reached 200+ successful project deliveries" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-subtle py-16 md:py-24">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                About <span className="bg-gradient-hero bg-clip-text text-transparent">Mastersolis</span>
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                We are a team of passionate technologists dedicated to building the future of
                enterprise software through innovation, expertise, and relentless commitment to
                excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16 md:py-24">
          <div className="container px-4">
            <div className="grid gap-8 md:grid-cols-3">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="group transition-all hover:shadow-medium hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-hero text-primary-foreground shadow-soft group-hover:shadow-glow transition-all">
                      <value.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-gradient-subtle py-16 md:py-24">
          <div className="container px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Meet Our Team
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Industry experts and innovators driving our mission forward
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {team.map((member, index) => (
                <Card key={index} className="transition-all hover:shadow-soft">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-hero text-2xl font-bold text-primary-foreground shadow-soft">
                      {member.name.charAt(0)}
                    </div>
                    <h3 className="mb-1 text-lg font-semibold">{member.name}</h3>
                    <p className="mb-2 text-sm font-medium text-primary">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="py-16 md:py-24">
          <div className="container px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Our Journey
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Key milestones in our growth and evolution
              </p>
            </div>

            <div className="mx-auto max-w-3xl">
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className="group flex gap-4 rounded-lg border border-border p-4 transition-all hover:border-primary hover:shadow-soft"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-hero text-sm font-bold text-primary-foreground shadow-soft group-hover:shadow-glow transition-all">
                      {milestone.year}
                    </div>
                    <div className="flex items-center">
                      <p className="text-foreground">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gradient-hero py-16 md:py-24">
          <div className="container px-4">
            <div className="grid gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary-foreground">200+</div>
                <div className="text-sm text-primary-foreground/80">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary-foreground">50+</div>
                <div className="text-sm text-primary-foreground/80">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary-foreground">100+</div>
                <div className="text-sm text-primary-foreground/80">Team Members</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary-foreground">98%</div>
                <div className="text-sm text-primary-foreground/80">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
