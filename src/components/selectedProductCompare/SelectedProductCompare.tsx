import { Form, Formik, FormikHelpers, FormikProps } from 'formik';
import React, { useEffect, useId, useState } from 'react';
import { ChangeMe } from '../../App';
import { PRODUCTS } from '../../dummyData';
import { DropdownFormField } from '../formFields/DropdownFormField';
import { TextFormField } from '../formFields/TextFormField';
import { IntegrationListContainer } from '../integrationListContainer/IntegrationListContainer';
import { IntegrationListItem } from '../integrationListItem/IntegrationListItem';
import { SelectedProductCompareProps } from './models';
import { useSelectProduct } from './useSelectProduct';

export const SelectedProductCompare:React.FC<SelectedProductCompareProps> = () => {
const [ selectedProduct, setSelectedProduct ] = useState<ChangeMe>(null);
const [textFilter, setTextFilter] = useState<ChangeMe>('');

const { availableIntegrations } = useSelectProduct(selectedProduct, textFilter);
const id = useId();

useEffect(() => {console.log(availableIntegrations)},[availableIntegrations])
const handleSelectProduct = (setFieldValue: ChangeMe) => (e:ChangeMe) => {
    const value = e;
    setFieldValue('primaryIntegration',value)    
    setSelectedProduct(value)
}

const handleFilter = (setFieldValue:ChangeMe) => (e:ChangeMe) => {
    const value = e.target.value;
    console.log({value})
    setFieldValue('integrationFilter',value)
    setTextFilter(value)
}

return (
    <div>
        <Formik onSubmit={() => {}} initialValues={{primaryIntegration:'',integrationFilter: ''}} >
            {(formikProps: FormikProps<ChangeMe>) => (
                <Form>
                    <DropdownFormField 
                        name='primaryIntegration'
                        options={PRODUCTS.map((product: ChangeMe) => ({value: product.value, label:product.label}))}
                        onChange={handleSelectProduct(formikProps.setFieldValue)} 
                    />
                    {availableIntegrations &&
                        <>
                            <TextFormField onChange={handleFilter(formikProps.setFieldValue)} name='integrationFilter' label='' />
                            <IntegrationListContainer>
                            {availableIntegrations.map((item: ChangeMe, index: number) => (
                                <IntegrationListItem key={'integrationListItem' + id + index} name={item.label} value={item.value} />
                            ))}
                            </IntegrationListContainer>
                        </>
                    }
                </Form>
            )}
        </Formik>
    </div>
)
}
