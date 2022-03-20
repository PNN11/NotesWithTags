import React, { ChangeEvent } from "react";

import Input from "components/Input";
import { FilterNotesProps } from "./FilterNotes.types";
import "./FilterNotes.styles.scss";

const FilterNotes: React.FC<FilterNotesProps> = ({
  filterValues,
  onChangeFilterValues,
}) => {
  const handleFilterByTag = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeFilterValues("tags", e.target.value);
  };

  return (
    <section className="filter-wrapper">
      <Input
        type="text"
        id="filterByTags"
        name="filterByTags"
        placeholder="Filter by tags"
        value={filterValues.tags}
        onChange={handleFilterByTag}
      />
    </section>
  );
};

export default FilterNotes;
