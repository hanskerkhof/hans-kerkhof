export interface ResumeLocation {
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
}

export interface ResumeProfile {
  network: string;
  username: string;
  url: string;
}

export interface ResumeDownload {
  name: string;
  type: string;
  date: string;
  path: string;
  size: number;
  language: string;
  id: string;
}

export interface ResumeBasics {
  name: string;
  label: string;
  picture: string;
  email: string;
  phone: string;
  website: string;
  summary: string;
  location: ResumeLocation;
  profiles: ResumeProfile[];
  firstName?: string;
  middleName?: string;
  lastName?: string;
  downloads?: ResumeDownload[];
}

export interface ResumeWork {
  company: string;
  position: string;
  website: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
  galleries?: string[];
}

export interface ResumeEducation {
  institution: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  courses: string[];
}

export interface ResumeVolunteer {
  organization: string;
  position: string;
  website: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
}

export interface ResumeSkill {
  name: string;
  level: string;
  keywords: string[];
  displayLogos?: boolean;
  imageBaseUrl?: string;
}

export interface ResumeInterest {
  name: string;
  keywords: string[];
}

export interface ResumeLanguage {
  language: string;
  fluency: string;
}

export interface ResumeAward {
  title: string;
  date: string;
  awarder: string;
  summary: string;
}

export interface ResumePublication {
  name: string;
  publisher: string;
  releaseDate: string;
  website: string;
  summary: string;
}

export interface ResumeReference {
  name: string;
  reference: string;
}

export interface ResumeMeta {
  title?: string;
  sections: ResumeMetaSection[];
}

export interface ResumeMetaSection {
  sectionId: string;
  hidden: boolean;
}

export interface Resume {
  meta?: ResumeMeta;
  basics: ResumeBasics;
  work: ResumeWork[];
  education: ResumeEducation[];
  volunteer: ResumeVolunteer[];
  skills: ResumeSkill[];
  interests: ResumeInterest[];
  languages: ResumeLanguage[];
  awards: ResumeAward[];
  publications: ResumePublication[];
  references: ResumeReference[];
}
