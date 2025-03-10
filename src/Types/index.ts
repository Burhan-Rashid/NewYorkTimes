interface NyTimesArticle {
  abstract: string;
  adx_keywords: string;
  asset_id: number;
  byline: string;
  column: string | null;
  des_facet: string[];
  eta_id: number;
  geo_facet: string[];
  id: number;
  nytdsection: string;
  org_facet: string[];
  per_facet: string[];
  published_date: string;
  section: string;
  source: string;
  subsection: string;
  title: string;
  type: string;
  updated: string;
  uri: string;
  url: string;
}

interface NyTimesApiResponse {
  status: string;
  copyright: string;
  num_results: number;
  results: Array<{
    id: number;
    title: string;
    published_date: string;
    url: string;
  }>;
}

export type { NyTimesArticle, NyTimesApiResponse };
