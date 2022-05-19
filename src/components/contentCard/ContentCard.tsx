import classnames from "classnames"
import { ContentCardProps } from "./models"

export const ContentCard: React.FC<ContentCardProps> = ({ classNames, children }) => {
    const classes= classnames('ContentCard', classNames)

    return (
        <div className={classes}>
            {children}
        </div>
    )
}