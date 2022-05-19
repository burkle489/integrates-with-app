import { Form, Formik, FormikProps } from 'formik';
import React, { useEffect, useId, useState } from 'react';
import { PRODUCTS } from '../../dummyData';
import { ContentCard } from '../contentCard/ContentCard';
import { Divider } from '../divider/Divider';
import { DropdownFormField } from '../formFields/DropdownFormField';
import { DropdownItem } from '../formFields/models';
import { TextFormField } from '../formFields/TextFormField';
import { IntegrationListContainer } from '../integrationListContainer/IntegrationListContainer';
import { IntegrationListItem } from '../integrationListItem/IntegrationListItem';
import { SelectedProductCompareProps, SelectedProductCompareState, SetFieldValueFormik } from './models';
import { useSelectProduct } from './useSelectProduct';

export const SelectedProductCompare: React.FC<SelectedProductCompareProps> = () => {
    const [selectedProduct, setSelectedProduct] = useState<DropdownItem<string> | null>(null);
    const [textFilter, setTextFilter] = useState<string>('');

    const { availableIntegrations } = useSelectProduct(selectedProduct, textFilter);
    const id = useId();

    const handleSelectProduct = (setFieldValue: SetFieldValueFormik) => (e: DropdownItem<string>) => {
        const value = e;
        setFieldValue('primaryIntegration', value)
        setSelectedProduct(value)
    }

    const handleFilter = (setFieldValue: SetFieldValueFormik) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setFieldValue('integrationFilter', value)
        setTextFilter(value)
    }

    useEffect(() => {console.log({selectedProduct})},[selectedProduct])

    return (
        <ContentCard classNames='PageCard'>
            <div className='SelectedProductCompare'>
                <Formik onSubmit={() => { }} initialValues={{ primaryIntegration: '', integrationFilter: '' }} >
                    {(formikProps: FormikProps<SelectedProductCompareState>) => (
                        <Form>
                            <DropdownFormField
                                name='primaryIntegration'
                                label='Select a product to find available product integrations'
                                options={PRODUCTS.map((product) => ({ value: product.value, label: product.label }))}
                                onChange={handleSelectProduct(formikProps.setFieldValue)}
                            />
                            {availableIntegrations &&
                                <>
                                    <Divider />
                                    <TextFormField label='' placeholder='Filter by a specific product' onChange={handleFilter(formikProps.setFieldValue)} name='integrationFilter' />
                                    <IntegrationListContainer>
                                        {availableIntegrations.map((item: DropdownItem<string>, index: number) => (
                                            <IntegrationListItem key={'integrationListItem' + id + index} name={item.label} value={item.value} productUrl='' />
                                        ))}
                                    </IntegrationListContainer>
                                </>
                            }
                        </Form>
                    )}
                </Formik>
            </div>
        </ContentCard>
    )
}

