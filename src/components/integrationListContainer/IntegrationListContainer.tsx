import React from 'react';
import { IntegrationListContainerProps } from './models';

export const IntegrationListContainer:React.FC<IntegrationListContainerProps> = ({children}) => {
return (
    <div className='IntegrationListContainer'>
        {children}
    </div>
)
}