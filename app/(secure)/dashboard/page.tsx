import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getHouses } from "@/lib/services/house.service";
import { getTasks } from "@/lib/services/task.service";
import { getDocuments } from "@/lib/services/document.service";
import { getPaints } from "@/lib/services/paint.service";
import { Home, ClipboardList, FileText, Paintbrush } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default async function DashboardPage() {
  const [houses, tasks, documents, paints] = await Promise.all([
    getHouses(),
    getTasks(),
    getDocuments(),
    getPaints(),
  ]);

  const stats = [
    {
      title: "Houses",
      value: houses.length,
      icon: <Home className="h-6 w-6" />,
      href: "/houses",
    },
    {
      title: "Tasks",
      value: tasks.length,
      icon: <ClipboardList className="h-6 w-6" />,
      href: "/tasks",
    },
    {
      title: "Documents",
      value: documents.length,
      icon: <FileText className="h-6 w-6" />,
      href: "/documents",
    },
    {
      title: "Paints",
      value: paints.length,
      icon: <Paintbrush className="h-6 w-6" />,
      href: "/paints",
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Link key={stat.title} href={stat.href}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tasks.slice(0, 5).map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="font-medium">{task.title}</p>
                    <p className="text-sm text-muted-foreground">
                      Due: {new Date(task.dueDate).toLocaleDateString()}
                    </p>
                  </div>
                  <span
                    className={cn(
                      "text-sm",
                      task.status === "completed"
                        ? "text-green-500"
                        : "text-yellow-500"
                    )}
                  >
                    {task.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {documents.slice(0, 5).map((doc) => (
                <div
                  key={doc.id}
                  className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="font-medium">{doc.title}</p>
                    <p className="text-sm text-muted-foreground">
                      Type: {doc.type}
                    </p>
                  </div>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}