import { IoAdd } from "react-icons/io5"
import './AddArticleBtn.css'

interface AddArticleBtnProps {
    className?: string;
}


export const AddArticleBtn = ({ className }: AddArticleBtnProps) => {
    return (
        <button className={`btn-add-article ${className}`}>
            <IoAdd size={24} />
        </button>
    )
}
