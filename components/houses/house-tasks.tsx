import { Task } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Circle, Clock } from "lucide-react";

interface HouseTasksProps {
  tasks: Task[];
  houseId: string;
}

export function HouseTasks({ tasks }: HouseTasksProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-start gap-4">
              {task.status === 'completed' && <CheckCircle className="h-5 w-5 text-green-500" />}
              {task.status === 'in-progress' && <Clock className="h-5 w-5 text-yellow-500" />}
              {task.status === 'pending' && <Circle className="h-5 w-5 text-gray-500" />}
              <div>
                <h4 className="font-medium">{task.title}</h4>
                <p className="text-sm text-muted-foreground">{task.description}</p>
                <p className="text-sm text-muted-foreground">
                  Due: {new Date(task.dueDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}