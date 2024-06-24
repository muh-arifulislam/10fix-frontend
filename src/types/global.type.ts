export type TBlog = {
  _id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  createdAt: string;
};

export type TMeta = {
  total: number;
  page: number;
  limit: number;
};

export type TServerResponse<T> = {
  success: boolean;
  message: string;
  meta?: TMeta;
  data: null | undefined | T;
};
