import axios from "axios";
import type { Company, CompanyListResponse } from "@/types/company";

const API_BASE = "https://api-d.auraliflow.com/v1";

const api = axios.create({
  baseURL: API_BASE,
  headers: { "Content-Type": "application/json" },
});

export async function fetchCompanies(params?: {
  page?: number;
  search?: string;
}): Promise<CompanyListResponse> {
  const { data } = await api.get("/companies", { params });
  return data;
}

export async function fetchCompanyById(id: string): Promise<Company> {
  const { data } = await api.get(`/companies/${id}`);
  return data.data ?? data;
}
