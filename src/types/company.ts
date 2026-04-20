export interface Company {
  id: string;
  name: string;
  logo?: string;
  currency?: string;
  status?: string;
  created_at?: string;
  description?: string;
}

export interface CompanyListResponse {
  data: Company[];
  meta?: {
    current_page: number;
    last_page: number;
    total: number;
  };
}
