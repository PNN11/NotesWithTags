export interface FilterValues {
  tags: string;
}

export interface FilterNotesProps {
  filterValues: FilterValues;
  onChangeFilterValues: (name: string, value: string) => void;
}
