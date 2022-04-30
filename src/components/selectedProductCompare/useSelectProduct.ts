import React, {useEffect,useState} from 'react';
import { ChangeMe } from '../../App';
import { PRODUCTS } from '../../dummyData';

export const useSelectProduct:ChangeMe = (selectedProduct:ChangeMe, textFilter: string) => {
    const [availableIntegrations, setAvailableIntegrations] = useState<ChangeMe>(null);
    useEffect(() => {
        let availableIntegrations = null;
        if(selectedProduct) {
            availableIntegrations = PRODUCTS.find(product => selectedProduct.value === product.value)?.integrations;
        if(textFilter && textFilter.length > 0) {
            availableIntegrations = availableIntegrations?.filter(integration => integration.value.toLowerCase().startsWith(textFilter.toLowerCase()))
        }
        }
        setAvailableIntegrations(availableIntegrations)
    },[selectedProduct,textFilter])
    return {availableIntegrations};
}