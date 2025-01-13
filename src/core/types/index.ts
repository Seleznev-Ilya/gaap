import React from "react";
import { SerializedStyles } from "@emotion/react";

export type Styles =
  | { [index: string]: string }
  | string
  | SerializedStyles
  | SerializedStyles[]
  | Styles[]
  | undefined;

export type ChildrenType = React.ReactNode | ChildrenType[] | string | null;

export type StyledProps = {
  styles?: Styles;
};
