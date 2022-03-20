import { ChangeEvent } from "react";

export interface InputProps {
  type: string;
  label?: string;
  id: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
