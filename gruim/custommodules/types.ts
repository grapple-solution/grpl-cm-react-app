export type OptionalType<T> = T | undefined;
export type NullableType<T> = T | null;

export type ProductType = {
  productCode: string;
  productName: string;
  productDescription: string;
  productLine: string;
  productScale: string;
  productVendor: string;
  buyPrice: number;
  msrp: number;
  quantityInStock: number;
}

export type ProductLineType = {
  productLine: string;
  textDescription: string;
  htmlDescription: NullableType<string>;
  image: NullableType<string>;
}