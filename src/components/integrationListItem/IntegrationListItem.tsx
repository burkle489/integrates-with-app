import { useState } from "react"
import { IntegrationListItemProps } from "./models"
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs'

export const IntegrationListItem: React.FC<IntegrationListItemProps> = ({ name, productUrl }) => {
    const [hasMoreDetails, setHasMoreDetails] = useState<boolean>(false);

    const handleMenuBtn = () => {
        return hasMoreDetails ? <BsArrowUpCircle size={25} color='#ff9e00' /> : <BsArrowDownCircle size={25} color='#ff9e00' />
    }
    return (
        <div className='IntegrationListItem'>
            <div className='IntegrationListItemHeader'>
                <div />
                <p>{name}</p>
                <div className='MenuBtn' onClick={() => { setHasMoreDetails(prev => !prev) }}>{handleMenuBtn()}</div>
            </div>
            {hasMoreDetails &&
                <div className='IntegrationListItemContent'>
                    <a href={productUrl}>{`Visit ${name}`}</a>
                </div>
            }

        </div>
    )
}