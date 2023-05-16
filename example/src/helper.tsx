import { Task } from "../../dist/types/public-types";

export function initTasks() {
  const currentDate = new Date();
  const tasks: Task[] = [
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      name: "Some Project",
      id: "ProjectSample",
      progress: 25,
      type: "project",
      hideChildren: false,
      displayOrder: 1,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        2,
        12,
        28
      ),
      name: "Idea",
      id: "Task 0",
      progress: 45,
      type: "task",
      project: "ProjectSample",
      displayOrder: 2,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
      name: "Research",
      id: "Task 1",
      progress: 25,
      dependencies: ["Task 0"],
      type: "task",
      project: "ProjectSample",
      displayOrder: 3,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
      name: "Discussion with team",
      id: "Task 2",
      progress: 10,
      dependencies: ["Task 1"],
      type: "task",
      project: "ProjectSample",
      displayOrder: 4,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9, 0, 0),
      name: "Developing",
      id: "Task 3",
      progress: 2,
      dependencies: ["Task 2"],
      type: "task",
      project: "ProjectSample",
      displayOrder: 5,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
      name: "Review",
      id: "Task 4",
      type: "task",
      progress: 70,
      dependencies: ["Task 2"],
      project: "ProjectSample",
      displayOrder: 6,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      name: "Release",
      id: "Task 6",
      progress: currentDate.getMonth(),
      type: "milestone",
      dependencies: ["Task 4"],
      project: "ProjectSample",
      displayOrder: 7,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 19),
      name: "Party Time",
      id: "Task 9",
      progress: 0,
      isDisabled: true,
      type: "task",
    },
  ];
  return tasks;
}

export function initSiteTasks() {
  const NewTasks: Task[] = [
    {
      start: new Date("2023-11-01T13:50:59.000Z"),
      end: new Date("2023-11-01T13:50:59.000Z"),
      id: "TOR001 LandControl",
      project: "TOR001",
      type: "milestone",
      progress: 0,
      displayOrder: 5,
      styles: {
        backgroundColor: "#A4D65E",
      },
      name: "Steeles",
    },
    {
      start: new Date("2023-06-30T13:50:20.000Z"),
      end: new Date("2023-06-30T13:50:20.000Z"),
      id: "TOR001 TotalMWCostDate",
      project: "TOR001",
      type: "milestone",
      progress: 0,
      displayOrder: 6,
      styles: {
        backgroundColor: "#63B1BC",
      },
      name: "Steeles",
    },
    {
      start: new Date("2023-11-01T13:50:54.000Z"),
      end: new Date("2023-11-01T13:50:54.000Z"),
      id: "TOR001 YMRDate",
      project: "TOR001",
      type: "milestone",
      progress: 0,
      displayOrder: 7,
      styles: {
        backgroundColor: "#FA4616",
      },
      name: "Steeles",
    },
    {
      start: new Date("2023-04-28T08:22:47.000Z"),
      end: new Date("2023-04-28T08:22:47.000Z"),
      id: "BKK001 LandControl",
      project: "BKK001",
      type: "milestone",
      progress: 0,
      displayOrder: 13,
      styles: {
        backgroundColor: "#A4D65E",
      },
      name: "Bhakasa",
    },
    {
      start: new Date("2024-01-01T09:22:18.000Z"),
      end: new Date("2024-01-01T09:22:18.000Z"),
      id: "BKK001 TotalMWCostDate",
      project: "BKK001",
      type: "milestone",
      progress: 0,
      displayOrder: 14,
      styles: {
        backgroundColor: "#63B1BC",
      },
      name: "Bhakasa",
    },
    {
      start: new Date("2023-04-28T08:22:44.000Z"),
      end: new Date("2023-04-28T08:22:44.000Z"),
      id: "BKK001 YMRDate",
      project: "BKK001",
      type: "milestone",
      progress: 0,
      displayOrder: 15,
      styles: {
        backgroundColor: "#FA4616",
      },
      name: "Bhakasa",
    },
    {
      start: new Date("2023-12-01T08:49:19.000Z"),
      end: new Date("2023-12-01T08:49:19.000Z"),
      id: "STK YMRDate",
      project: "STK",
      type: "milestone",
      progress: 0,
      displayOrder: 17,
      styles: {
        backgroundColor: "#FA4616",
      },
      name: "OCKELBO",
    },
    {
      start: new Date("2023-06-15T15:38:49.000Z"),
      end: new Date("2023-06-15T15:38:49.000Z"),
      id: "TOK LandControl",
      project: "TOK",
      type: "milestone",
      progress: 0,
      displayOrder: 19,
      styles: {
        backgroundColor: "#A4D65E",
      },
      name: "MTC",
    },
    {
      start: new Date("2030-05-30T15:35:10.000Z"),
      end: new Date("2030-05-30T15:35:10.000Z"),
      id: "TOK TotalMWCostDate",
      project: "TOK",
      type: "milestone",
      progress: 0,
      displayOrder: 20,
      styles: {
        backgroundColor: "#63B1BC",
      },
      name: "MTC",
    },
    {
      start: new Date("2023-05-15T15:39:20.000Z"),
      end: new Date("2023-05-15T15:39:20.000Z"),
      id: "TOK YMRDate",
      project: "TOK",
      type: "milestone",
      progress: 0,
      displayOrder: 21,
      styles: {
        backgroundColor: "#FA4616",
      },

      name: "MTC",
    },
    {
      start: new Date("2025-04-01T13:47:37.000Z"),
      end: new Date("2025-04-01T13:47:37.000Z"),
      id: "LON TotalMWCostDate",
      project: "LON",
      type: "milestone",
      progress: 0,
      displayOrder: 23,
      styles: {
        backgroundColor: "#63B1BC",
      },
 
      name: "GSK",
    },
    {
      start: new Date("2024-05-01T13:47:53.000Z"),
      end: new Date("2024-05-01T13:47:53.000Z"),
      id: "LON YMRDate",
      project: "LON",
      type: "milestone",
      progress: 0,
      displayOrder: 24,
      styles: {
        backgroundColor: "#FA4616",
      },
    
      name: "GSK",
    },
    {
      start: new Date("2024-04-10T07:48:48.000Z"),
      end: new Date("2024-04-10T07:48:48.000Z"),
      id: "TOK1 TotalMWCostDate",
      project: "TOK1",
      type: "milestone",
      progress: 0,
      displayOrder: 26,
      styles: {
        backgroundColor: "#63B1BC",
      },
      
      name: "Edagawa",
    },
    {
      start: new Date("2023-12-26T08:49:12.000Z"),
      end: new Date("2023-12-26T08:49:12.000Z"),
      id: "TOK1 YMRDate",
      project: "TOK1",
      type: "milestone",
      progress: 0,
      displayOrder: 27,
      styles: {
        backgroundColor: "#FA4616",
      },
    
      name: "Edagawa",
    },
    {
      start: new Date("2023-05-15T15:35:19.000Z"),
      end: new Date("2023-05-15T15:35:19.000Z"),
      id: "VGA1 TotalMWCostDate",
      project: "VGA1",
      type: "milestone",
      progress: 0,
      displayOrder: 30,
      styles: {
        backgroundColor: "#63B1BC",
      },
    
      name: "Allegro North",
    },
    {
      start: new Date("2024-01-01T17:00:52.000Z"),
      end: new Date("2024-01-01T17:00:52.000Z"),
      id: "VGA4 TotalMWCostDate",
      project: "VGA4",
      type: "milestone",
      progress: 0,
      displayOrder: 32,
      styles: {
        backgroundColor: "#63B1BC",
      },
    
      name: "Hunter's Trust",
    },
  ];
  return NewTasks;
}

export function getStartEndDateForProject(tasks: Task[], projectId: string) {
  const projectTasks = tasks.filter(t => t.project === projectId);
  let start = projectTasks[0].start;
  let end = projectTasks[0].end;

  for (let i = 0; i < projectTasks.length; i++) {
    const task = projectTasks[i];
    if (start.getTime() > task.start.getTime()) {
      start = task.start;
    }
    if (end.getTime() < task.end.getTime()) {
      end = task.end;
    }
  }
  return [start, end];
}
