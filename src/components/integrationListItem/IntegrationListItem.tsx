import { useState } from "react"
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs'
import { IoMdCheckmark, IoMdClose } from 'react-icons/io'
import { PRODUCTS } from "../../dummyData"
import { IntegrationListItemProps } from "./models"

export const IntegrationListItem: React.FC<IntegrationListItemProps> = ({ name, iconPath, value, productUrl }) => {
    const [hasMoreDetails, setHasMoreDetails] = useState<boolean>(false);
    const PRODUCT = PRODUCTS.find(p => p.value === value);

    return (
        <div className='IntegrationListItem'>
            <div className='IntegrationListItemHeader'>
                <img src={iconPath} alt='wordpress icon' />
                <p>{name}</p>
                <div />
            </div>
            <div className='IntegrationDescription'>
                <p>{PRODUCT?.description}</p>
            </div>
            {hasMoreDetails &&
                <div className='IntegrationListItemContent'>
                    <p className='Header'>Integrations</p>
                    <ul>
                        <li><IoMdCheckmark />Primary integration</li>
                        <li><IoMdClose />Third-party integration</li>
                    </ul>
                    <a href={productUrl}>{`Visit ${name}`}</a>
                </div>
            }

        </div>
    )
}