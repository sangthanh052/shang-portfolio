import axios, { AxiosInstance } from "axios";

class Http {
  instance: AxiosInstance;
  private apiKey: string;
  private baseUrl: string;
  constructor() {
    this.apiKey = atob(import.meta.env.VITE_JSONBIN_KEY);
    this.baseUrl = import.meta.env.VITE_JSONBIN_BASE_URL;

    this.instance = axios.create({
      baseURL: this.baseUrl,
      timeout: 10000,
      headers: {
        "X-Master-Key": this.apiKey,
      },
    });
  }
}

const http = new Http().instance;
export default http;
