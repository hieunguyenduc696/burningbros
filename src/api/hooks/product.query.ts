import { REST_API_PRODUCT } from "../urls";
import { getProduct } from "../http-service";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { TGetProductQueryParams, TProduct } from "types";

export function useGetProducts(payload: TGetProductQueryParams) {
  return useInfiniteQuery(
    [...Object.values(REST_API_PRODUCT.GET_PRODUCT), payload],
    ({ pageParam = 0 }) => getProduct({ ...payload, skip: pageParam }),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.products.length === 20 ? lastPage.skip + 20 : undefined;
      },
      select: (data): InfiniteData<TProduct> => {
        return {
          pages: data.pages.reduce(
            (prev, value) => [...prev, ...value.products],
            [] as TProduct[]
          ),
          pageParams: data.pageParams,
        };
      },
    }
  );
}
