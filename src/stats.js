/**
 * Statistiques de demonstration pour TaskFlow (projet fictif).
 */

export const isOpen = (task) => task.status !== "done";

export function completionRate(tasks) {
  if (tasks.length === 0) return 0;
  return (tasks.filter((t) => t.status === "done").length / tasks.length) * 100;
}

export function workloadByMember(tasks, users) {
  return users
    .map((user) => ({
      name: user.name,
      points: tasks
        .filter((task) => task.assignee === user.id && isOpen(task))
        .reduce((sum, task) => sum + task.points, 0),
    }))
    .sort((a, b) => b.points - a.points);
}

export function overdueTasks(tasks, today = new Date()) {
  return tasks.filter(
    (task) => isOpen(task) && new Date(task.due) < today
  );
}
