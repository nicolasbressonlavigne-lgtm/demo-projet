/**
 * TaskFlow — point d'entree de la demonstration.
 *
 * Projet fictif : les donnees de data/ sont inventees.
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { workloadByMember, completionRate } from "./stats.js";

const here = dirname(fileURLToPath(import.meta.url));
const load = (name) =>
  JSON.parse(readFileSync(join(here, "..", "data", name), "utf8"));

const tasks = load("tasks.json");
const users = load("users.json");

console.log("=== TaskFlow — demo ===");
console.log(`Taches      : ${tasks.length}`);
console.log(`Membres     : ${users.filter((u) => u.active).length} actifs`);
console.log(`Avancement  : ${completionRate(tasks).toFixed(0)} %`);
console.log("Charge (points ouverts) :");

for (const row of workloadByMember(tasks, users)) {
  console.log(`  - ${row.name.padEnd(16)} ${String(row.points).padStart(3)} pts`);
}
