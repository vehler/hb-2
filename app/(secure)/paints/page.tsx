import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getPaints } from "@/lib/services/paint.service";
import { Paintbrush, Plus } from "lucide-react";

// Mock user ID until auth is implemented
const MOCK_USER_ID = "1";

export default async function PaintsPage() {
  const paints = await getPaints(MOCK_USER_ID);

  return (
    <div className="w-full space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Paints</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Paint
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {paints.map((paint) => (
          <Card key={paint.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Paintbrush className="h-5 w-5" />
                {paint.room}
              </CardTitle>
              <CardDescription>{paint.brand} - {paint.color}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm">
                  <span className="font-medium">Finish:</span> {paint.finish}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Applied:</span>{" "}
                  {new Date(paint.dateApplied).toLocaleDateString()}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}