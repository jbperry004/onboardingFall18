import React from "react";
import { Input } from "./styles";

const SearchTodos = ({ searchText, handleSearch }) => (
  <Input
    value={searchText}
    placeholder="Search Todos"
    onChange={handleSearch}
  />
);

export default SearchTodos;
