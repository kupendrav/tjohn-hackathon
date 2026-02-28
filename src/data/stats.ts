export interface StatData {
  label: string;
  value: number;
  suffix: string;
}

export const stats: StatData[] = [
  { label: "Active Jobs", value: 12500, suffix: "+" },
  { label: "Companies", value: 3200, suffix: "+" },
  { label: "Candidates", value: 45000, suffix: "+" },
  { label: "Placements", value: 8900, suffix: "+" },
];
