export type ValueOf<T> = T[keyof T];
export type Nullable<T> = T | null;

export interface Variables {
  slug: string;
  preview: boolean;
}
