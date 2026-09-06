export interface VolunteerItem {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
}

export const volunteerExperiences: VolunteerItem[] = [
  {
    id: 1,
    title: "Learning Technology Laboratory Assistant",
    organization: "Faculty of Computer Science UB",
    period: "August 2026 – Present",
    description: "Supported faculty-led research in learning technology by working alongside lecturers on research activities, data collection, analysis, and project development. This experience strengthened my research, analytical, and collaboration skills in an academic environment.",
  },
  {
    id: 2,
    title: "Database Practicum Assistant",
    organization: "Faculty of Computer Science UB",
    period: "August 2026 – Present",
    description: "As a Database Practicum Assistant, I guided weekly laboratory sessions on database fundamentals, including ERD, EERD, SQL, relational modeling, and normalization. This experience strengthened my technical knowledge, communication skills, and ability to support students in applying database concepts through practical implementation.",
  },
];
