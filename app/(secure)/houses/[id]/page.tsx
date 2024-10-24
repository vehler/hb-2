import { getHouseById, getHouses } from "@/lib/services/house.service";
import { getTasksByHouseId } from "@/lib/services/task.service";
import { getPaintsByHouseId } from "@/lib/services/paint.service";
import { getDocumentsByHouseId } from "@/lib/services/document.service";
import { HouseHeader } from "@/components/houses/house-header";
import { HouseTasks } from "@/components/houses/house-tasks";
import { HousePaints } from "@/components/houses/house-paints";
import { HouseDocuments } from "@/components/houses/house-documents";
import { notFound } from "next/navigation";

interface HouseDetailPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const houses = await getHouses();
  return houses.map((house) => ({
    id: house.id,
  }));
}

export default async function HouseDetailPage({ params }: HouseDetailPageProps) {
  const house = await getHouseById(params.id);
  
  if (!house) {
    notFound();
  }

  const [tasks, paints, documents] = await Promise.all([
    getTasksByHouseId(params.id),
    getPaintsByHouseId(params.id),
    getDocumentsByHouseId(params.id),
  ]);

  return (
    <div className="space-y-8">
      <HouseHeader house={house} />
      
      <div className="grid gap-8 md:grid-cols-2">
        <HouseTasks tasks={tasks} houseId={params.id} />
        <HousePaints paints={paints} houseId={params.id} />
      </div>
      
      <HouseDocuments documents={documents} houseId={params.id} />
    </div>
  );
}