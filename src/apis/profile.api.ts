import http from "@/utils/http";

interface BaseType {
  image: string;
  url: string;
  title: string;
  subtitle: string;
  description: string[];
  techs: string[];
}

interface Company {
  time: string;
  company: string;
  role: string;
  description: string;
  domains: string;
  job: string[];
  techs: string[];
  url?: undefined;
}

interface Project extends BaseType {
  role: string[];
  achievements: string[];
}

interface Side extends BaseType {
  features: string[];
  repo: string;
}

export interface Record {
  name: string;
  role: string;
  skills: string;
  bio: string;
  companies: Company[];
  projects: Project[];
  sides: Side[];
}

interface GetProfile {
  record: Record;
  metadata?: {
    id: string;
    private: boolean;
    createdAt: string;
    collectionId: string;
    name: string;
  };
}

const getProfile = () => {
  return http.get<GetProfile>(import.meta.env.VITE_JSONBIN_ID);
};

export default getProfile;
