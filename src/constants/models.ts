import { DropdownItem } from "../components/formFields/models";

export type Product = {
    name: string;
    value:string;
    label:string;
    icon:string;
    description: string;
    integrations: DropdownItem<string>[];
}