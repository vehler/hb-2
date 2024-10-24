import { House } from "@/lib/services/house.service";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, MapPin, User } from "lucide-react";

interface HouseDetailsProps {
  house: House;
}

export function HouseDetails({ house }: HouseDetailsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Home className="h-5 w-5" />
          {house.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span>{house.address}</span>
        </div>
        <div className="flex items-center gap-2">
          <User className="h-4 w-4 text-muted-foreground" />
          <span>Owner: {house.owner}</span>
        </div>
      </CardContent>
    </Card>
  );
}