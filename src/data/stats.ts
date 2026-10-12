export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}

export const keyAchievements: StatItem[] = [
  {
    id: "awards",
    value: 16,
    suffix: "",
    label: "Competition Awards",
  },
  {
    id: "org-awards",
    value: 2,
    suffix: "",
    label: "Organizational Awards",
  },
  {
    id: "gpa",
    value: 3.93,
    suffix: "/4.0",
    label: "Cumulative GPA",
    decimals: 2,
  },
  {
    id: "projects",
    value: 16,
    suffix: "+",
    label: "Projects & Product Dev",
  },
];
