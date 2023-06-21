export type TPaginationBasicPayload = {
  skip: number;
  limit: number;
};

export type TPaginationResponse<T> = {
  data: T;
  total: number;
};
