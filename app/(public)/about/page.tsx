import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Users, Zap } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container py-16">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">About HomeBoards</h1>
        <p className="text-xl text-muted-foreground">
          HomeBoards is your comprehensive home management solution, designed to make property maintenance and organization effortless.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <Card className="p-6">
          <Shield className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Secure</h3>
          <p className="text-muted-foreground">
            Your data is protected with enterprise-grade security measures.
          </p>
        </Card>
        <Card className="p-6">
          <Zap className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Efficient</h3>
          <p className="text-muted-foreground">
            Streamlined workflows to save you time and reduce stress.
          </p>
        </Card>
        <Card className="p-6">
          <Users className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Collaborative</h3>
          <p className="text-muted-foreground">
            Share access with family members and service providers.
          </p>
        </Card>
      </div>

      <div className="text-center">
        <Button asChild size="lg">
          <Link href="/register">Get Started Today</Link>
        </Button>
      </div>
    </div>
  );
}