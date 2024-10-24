import { Paint } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Paintbrush } from "lucide-react";

interface HousePaintsProps {
  paints: Paint[];
  houseId: string;
}

export function HousePaints({ paints }: HousePaintsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Paint History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {paints.map((paint) => (
            <div key={paint.id} className="flex items-start gap-4">
              <Paintbrush className="h-5 w-5 text-muted-foreground" />
              <div>
                <h4 className="font-medium">{paint.room}</h4>
                <p className="text-sm text-muted-foreground">
                  {paint.brand} - {paint.color} ({paint.finish})
                </p>
                <p className="text-sm text-muted-foreground">
                  Applied: {new Date(paint.dateApplied).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}