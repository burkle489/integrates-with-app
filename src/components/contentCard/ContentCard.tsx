import { ContentCardProps } from "./models"

export const ContentCard: React.FC<ContentCardProps> = ({ classNames, children }) => {
    return (
        <div className='ContentCard'>
            {children}
        </div>
    )
}