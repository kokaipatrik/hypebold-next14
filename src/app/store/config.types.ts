interface Base {
  name: string;
  url: string;
}

export interface Brand extends Base {
  description: string;
}

export interface Category extends Base {}

export interface Condition extends Base {}

type CurrencyCode = 'Ft' | '€' | '$';

export interface Currency extends Base {
  currency: CurrencyCode;
}

export interface Delivery extends Base {
  description: string;
}

interface DetailedSize {
  eu: string;
  us: string;
  uk: string;
}

type SingleSize = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'One Size';

export interface Size {
  size: DetailedSize | SingleSize;
  categoryUrl: string;
}

export type Config = {
  brands: Array<Brand>;
  categories: Array<Category>;
  conditions: Array<Condition>;
  currencies: Array<Currency>;
  deliveries: Array<Delivery>;
  sizes: Array<Size>;
};
