import { useEffect, useState } from 'react';
import { PRODUCTS } from '../../dummyData';
import { DropdownItem } from '../formFields/models';

export const useSelectProduct = (selectedProduct:any, textFilter: string) => {
    const [availableIntegrations, setAvailableIntegrations] = useState<DropdownItem<string>[] | null | undefined>(null);

    useEffect(() => {
        let availableIntegrations = null;
        if(selectedProduct) {
            availableIntegrations = PRODUCTS.find(product => selectedProduct.value === product.value)?.integrations;
        if(textFilter && textFilter.length > 0) {
            availableIntegrations = availableIntegrations?.filter(integration => integration.value.toLowerCase().startsWith(textFilter.toLowerCase()))
        }
        }
        setAvailableIntegrations(availableIntegrations);
    },[selectedProduct,textFilter])
    return {availableIntegrations};
}