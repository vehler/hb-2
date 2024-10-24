import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getTasks } from "@/lib/services/task.service";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export default async function TasksPage() {
  const tasks = await getTasks();

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Tasks</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Task
        </Button>
      </div>

      <div className="grid gap-6">
        {tasks.map((task) => (
          <Card key={task.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{task.title}</CardTitle>
                  <CardDescription>
                    Due: {new Date(task.dueDate).toLocaleDateString()}
                  </CardDescription>
                </div>
                <span
                  className={cn(
                    "text-sm px-2 py-1 rounded-full",
                    task.status === "completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  )}
                >
                  {task.status}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{task.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}