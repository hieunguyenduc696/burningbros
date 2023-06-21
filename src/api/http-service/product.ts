import { HttpService } from "./http-service";
import { REST_API_PRODUCT } from "../urls";
import { TGetProductQueryParams, TGetProductResponse } from "types";
import qs from "query-string";

export const getProduct = async (
  payload: TGetProductQueryParams
): Promise<TGetProductResponse> => {
  const route = `${REST_API_PRODUCT.GET_PRODUCT.uri}?q=${
    payload.keyword
  }&${qs.stringify(payload, {
    skipEmptyString: true,
  })}`;

  return await HttpService.get<TGetProductResponse>(route);
};
