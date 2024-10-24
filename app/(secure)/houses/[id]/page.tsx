import { getHouseById } from "@/lib/services/house.service";
import { getTasksByHouseId } from "@/lib/services/task.service";
import { getPaintsByHouseId } from "@/lib/services/paint.service";
import { getDocumentsByHouseId } from "@/lib/services/document.service";
import { HouseHeader } from "@/components/houses/house-header";
import { HouseTasks } from "@/components/houses/house-tasks";
import { HousePaints } from "@/components/houses/house-paints";
import { HouseDocuments } from "@/components/houses/house-documents";
import { notFound } from "next/navigation";

export const revalidate = 'no-store';


// Mock user ID until auth is implemented
const MOCK_USER_ID = "1";

interface HouseDetailPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams({ params }: HouseDetailPageProps) {
  
  const data = await getHouseById(MOCK_USER_ID, params.id); 

  return {
    id: data?.id, 
  };
}

export default async function HouseDetailPage({ params }: HouseDetailPageProps) {
  const house = await getHouseById(params.id, MOCK_USER_ID);
  
  if (!house) {
    notFound();
  }

  const [tasks, paints, documents] = await Promise.all([
    getTasksByHouseId(params.id, MOCK_USER_ID),
    getPaintsByHouseId(params.id, MOCK_USER_ID),
    getDocumentsByHouseId(params.id, MOCK_USER_ID),
  ]);

  return (
    <div className="w-full space-y-8">
      <HouseHeader house={house} />
      
      <div className="grid gap-8 md:grid-cols-2">
        <HouseTasks tasks={tasks} houseId={params.id} />
        <HousePaints paints={paints} houseId={params.id} />
      </div>
      
      <HouseDocuments documents={documents} houseId={params.id} />
    </div>
  );
}