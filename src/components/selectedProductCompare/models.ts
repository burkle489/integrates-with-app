import { DropdownItem } from "../formFields/models";

export type SelectedProductCompareProps = {};

export type SelectedProductCompareState = {
    primaryIntegration: string;
    integrationFilter: string;
}

export type SetFieldValueFormik = 
    (field: string, value: any, shouldValidate?: boolean | undefined) => void

    export type UseSelectProduct = (selectedProduct: DropdownItem<string>, textFilter: string) => {
        availableIntegrations: DropdownItem<string>[] | null | undefined;
    }