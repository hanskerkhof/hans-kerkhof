export interface ResumeConfigSection {
  sectionId: string;
  hidden: boolean;
}

export interface ResumeConfig {
  title: string;
  sections: ResumeConfigSection[];
}
