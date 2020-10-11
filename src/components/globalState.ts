import { createContext } from "react";

export const FilterContext = createContext({
  search: "funny",
  limit: 15,
  rating: "g",
  language: "en",
});
