import { Document } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

interface HouseDocumentsProps {
  documents: Document[];
  houseId: string;
}

export function HouseDocuments({ documents }: HouseDocumentsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Documents</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {documents.map((document) => (
            <div key={document.id} className="flex items-start gap-4">
              <FileText className="h-5 w-5 text-muted-foreground" />
              <div>
                <h4 className="font-medium">{document.title}</h4>
                <p className="text-sm text-muted-foreground">
                  Type: {document.type.toUpperCase()}
                </p>
                <p className="text-sm text-muted-foreground">
                  Added: {new Date(document.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}