import { Form, Formik, FormikHelpers, FormikProps } from 'formik';
import React, { useEffect, useId, useState } from 'react';
import { ChangeMe } from '../../App';
import { PRODUCTS } from '../../dummyData';
import { ContentCard } from '../contentCard/ContentCard';
import { Divider } from '../divider/Divider';
import { DropdownFormField } from '../formFields/DropdownFormField';
import { TextFormField } from '../formFields/TextFormField';
import { IntegrationListContainer } from '../integrationListContainer/IntegrationListContainer';
import { IntegrationListItem } from '../integrationListItem/IntegrationListItem';
import { SelectedProductCompareProps } from './models';
import { useSelectProduct } from './useSelectProduct';

export const SelectedProductCompare: React.FC<SelectedProductCompareProps> = () => {
    const [selectedProduct, setSelectedProduct] = useState<ChangeMe>(null);
    const [textFilter, setTextFilter] = useState<ChangeMe>('');

    const { availableIntegrations } = useSelectProduct(selectedProduct, textFilter);
    const id = useId();

    const handleSelectProduct = (setFieldValue: ChangeMe) => (e: ChangeMe) => {
        const value = e;
        setFieldValue('primaryIntegration', value)
        setSelectedProduct(value)
    }

    const handleFilter = (setFieldValue: ChangeMe) => (e: ChangeMe) => {
        const value = e.target.value;
        setFieldValue('integrationFilter', value)
        setTextFilter(value)
    }

    return (
        <ContentCard>
            <div className='SelectedProductCompare'>
                <Formik onSubmit={() => { }} initialValues={{ primaryIntegration: '', integrationFilter: '' }} >
                    {(formikProps: FormikProps<ChangeMe>) => (
                        <Form>
                            <DropdownFormField
                                name='primaryIntegration'
                                label='Select a product to find available product integrations'
                                options={PRODUCTS.map((product: ChangeMe) => ({ value: product.value, label: product.label }))}
                                onChange={handleSelectProduct(formikProps.setFieldValue)}
                            />
                            {availableIntegrations &&
                                <>
                                    <Divider />
                                    <TextFormField label='' placeholder='Filter by a specific product' onChange={handleFilter(formikProps.setFieldValue)} name='integrationFilter' />
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
        </ContentCard>
    )
}

