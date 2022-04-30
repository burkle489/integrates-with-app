import { IntegrationListItemProps } from "./models"

export const IntegrationListItem:React.FC<IntegrationListItemProps> = ({name}) => {
    return (
<div className='IntegrationListItem'><p>{name}</p></div>
    )
}