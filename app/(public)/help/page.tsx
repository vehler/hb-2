import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "What is HomeBoards?",
    answer: "HomeBoards is a comprehensive home management platform that helps you track tasks, store documents, and manage paint details for your properties.",
  },
  {
    question: "How do I get started?",
    answer: "Simply click the 'Get Started' button, create an account, and add your first property. You can then start adding tasks, documents, and paint details.",
  },
  {
    question: "Can I share access with others?",
    answer: "Yes! You can invite family members or service providers to collaborate on your properties with different levels of access.",
  },
  {
    question: "Is my data secure?",
    answer: "We use industry-standard encryption and security measures to protect your data. Your information is safe with us.",
  },
  {
    question: "What types of documents can I store?",
    answer: "You can store any type of document related to your home, including warranties, insurance policies, receipts, and maintenance records.",
  },
];

export default function HelpPage() {
  return (
    <div className="container py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Help Center</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Find answers to common questions or contact our support team.
          </p>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search help articles..."
              className="w-full pl-10 pr-4 py-2 rounded-md border bg-background"
            />
          </div>
        </div>

        <Card className="mb-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Can't find what you're looking for?
          </p>
          <Button asChild>
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}