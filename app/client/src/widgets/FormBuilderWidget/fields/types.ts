import { ControllerRenderProps } from "react-hook-form";
import { SchemaItem } from "../constants";

export type BaseFieldComponentProps<TProps = any> = {
  name: ControllerRenderProps["name"];
  hideLabel?: boolean;
  schemaItem: SchemaItem<TProps>;
};