import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getHouses } from "@/lib/services/house.service";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function HousesPage() {
  const houses = await getHouses();

  return (
    <div className="w-full space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Houses</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add House
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {houses.map((house) => (
          <Link key={house.id} href={`/houses/${house.id}`}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{house.name}</CardTitle>
                <CardDescription>{house.address}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Added on {new Date(house.createdAt).toLocaleDateString()}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}