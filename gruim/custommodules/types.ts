export type OptionalType<T> = T | undefined;

export type ProductType = {
  id: string;
  productName: string;
  productDescription: string;
  productLine: string;
  productScale: string;
  productVendor: string;
  buyPrice: number;
  msrp: number;
  quantityInStock: number;
  productlinesId: string;
}