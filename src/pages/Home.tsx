import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Smartphone, Brain, Cloud, ChevronRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and best practices.",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile solutions for iOS and Android.",
    },
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Intelligent systems powered by machine learning and automation.",
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and deployment solutions.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      content: "Mastersolis transformed our digital presence with their innovative solutions.",
    },
    {
      name: "Michael Chen",
      role: "CTO, DataFlow Systems",
      content: "Their expertise in AI integration helped us achieve remarkable efficiency gains.",
    },
    {
      name: "Emily Rodriguez",
      role: "Director, CloudNext",
      content: "Professional, reliable, and always exceeding our expectations.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
          </div>

          <div className="container relative z-10 px-4 py-24 md:py-32">
            <div className="max-w-3xl space-y-8">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Innovation Meets
                <span className="block bg-gradient-hero bg-clip-text text-transparent">
                  Excellence
                </span>
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Empowering businesses with cutting-edge software solutions, AI-driven automation,
                and cloud-native architectures.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Get Started <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/services">View Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-gradient-subtle py-16 md:py-24">
          <div className="container px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Our Services
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Comprehensive technology solutions tailored to your business needs
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group transition-all hover:shadow-medium hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-hero text-primary-foreground shadow-soft group-hover:shadow-glow transition-all">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="default" size="lg" asChild>
                <Link to="/services">
                  View All Services <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                What Our Clients Say
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Trusted by industry leaders worldwide
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="transition-all hover:shadow-soft">
                  <CardContent className="p-6">
                    <p className="mb-4 text-sm italic text-muted-foreground">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-hero py-16 md:py-24">
          <div className="container px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/90">
              Let's discuss how we can help you achieve your technology goals
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
