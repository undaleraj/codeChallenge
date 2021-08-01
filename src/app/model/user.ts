export interface User {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: userData[];
  support:supportData;
}

export interface userData {
  id:number;
  email:string;
  first_name:string;
  last_name:string;
  avatar:string;
}

export interface supportData{
  url:string;
  text:string;
}
