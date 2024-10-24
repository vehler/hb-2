import { House } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home } from "lucide-react";

interface HouseHeaderProps {
  house: House;
}

export function HouseHeader({ house }: HouseHeaderProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <Home className="h-8 w-8 text-muted-foreground" />
        <div>
          <CardTitle>{house.name}</CardTitle>
          <p className="text-sm text-muted-foreground">{house.address}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-sm">
          <p>Owner: {house.owner}</p>
          <p>Last updated: {new Date(house.updatedAt).toLocaleDateString()}</p>
        </div>
      </CardContent>
    </Card>
  );
}