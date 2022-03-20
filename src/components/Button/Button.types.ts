import { SyntheticEvent } from "react";

export interface ButtonProps {
  type: "button" | "submit" | "reset";
  primary?: boolean;
  onClick?: (e: SyntheticEvent) => void;
}
