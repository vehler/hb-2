import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Home, ClipboardList, FileText, Paintbrush } from "lucide-react";
import Link from "next/link";
import { getFeatures } from "@/lib/services/feature.service";
import { Feature } from "@/lib/types";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
}

const iconMap = {
  Home: <Home className="h-8 w-8" />,
  ClipboardList: <ClipboardList className="h-8 w-8" />,
  FileText: <FileText className="h-8 w-8" />,
  Paintbrush: <Paintbrush className="h-8 w-8" />
};

export default async function HomePage() {
  const features = await getFeatures();

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            HomeBoards
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your all-in-one solution for home management. Track tasks, store important documents, and manage paint details with ease.
          </p>
          <div className="mt-8 space-x-4">
            <Button asChild size="lg">
              <Link href="/register">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={iconMap[feature.icon as keyof typeof iconMap]}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
}