import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Code2,
  Smartphone,
  Brain,
  Cloud,
  Database,
  Shield,
  Zap,
  Palette,
  ChevronRight,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Custom web applications built with modern frameworks like React, Angular, and Vue.js. We create responsive, scalable, and maintainable solutions.",
      features: ["Single Page Applications", "Progressive Web Apps", "E-commerce Platforms", "Content Management Systems"],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android. Deliver seamless experiences on every device.",
      features: ["iOS Development", "Android Development", "React Native Apps", "Flutter Applications"],
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description:
        "Intelligent systems powered by cutting-edge AI and ML algorithms. Automate processes and gain valuable insights.",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Recommendation Systems"],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and migration services. Deploy and manage applications on AWS, Azure, and Google Cloud.",
      features: ["Cloud Migration", "DevOps & CI/CD", "Serverless Architecture", "Container Orchestration"],
    },
    {
      icon: Database,
      title: "Data Engineering",
      description:
        "Build robust data pipelines and warehouses. Transform raw data into actionable business intelligence.",
      features: ["ETL Pipelines", "Data Warehousing", "Real-time Analytics", "Big Data Processing"],
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Protect your business with comprehensive security solutions. Identify vulnerabilities and implement best practices.",
      features: ["Security Audits", "Penetration Testing", "Compliance Management", "Threat Detection"],
    },
    {
      icon: Zap,
      title: "API Development",
      description:
        "Design and develop robust RESTful and GraphQL APIs. Enable seamless integration between systems.",
      features: ["REST APIs", "GraphQL", "API Documentation", "Third-party Integrations"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Create beautiful, intuitive interfaces that users love. Research-driven design that converts.",
      features: ["User Research", "Wireframing & Prototyping", "Design Systems", "Usability Testing"],
    },
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
                Our <span className="bg-gradient-hero bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Comprehensive technology solutions designed to drive your business forward. From
                concept to deployment, we've got you covered.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24">
          <div className="container px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group transition-all hover:shadow-medium hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-hero text-primary-foreground shadow-soft group-hover:shadow-glow transition-all">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-gradient-subtle py-16 md:py-24">
          <div className="container px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Our Process
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                A proven methodology that ensures project success
              </p>
            </div>

            <div className="mx-auto max-w-4xl">
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    step: "01",
                    title: "Discovery & Planning",
                    description: "We understand your goals, challenges, and requirements through detailed consultation.",
                  },
                  {
                    step: "02",
                    title: "Design & Architecture",
                    description: "Create technical architecture and user-centered designs that align with your vision.",
                  },
                  {
                    step: "03",
                    title: "Development & Testing",
                    description: "Agile development with continuous testing to ensure quality at every stage.",
                  },
                  {
                    step: "04",
                    title: "Deployment & Support",
                    description: "Seamless deployment with ongoing maintenance and support for long-term success.",
                  },
                ].map((item, index) => (
                  <Card key={index} className="transition-all hover:shadow-soft">
                    <CardContent className="p-6">
                      <div className="mb-3 text-3xl font-bold text-primary">{item.step}</div>
                      <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-hero py-16 md:py-24">
          <div className="container px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/90">
              Let's discuss how our services can help you achieve your business goals
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
