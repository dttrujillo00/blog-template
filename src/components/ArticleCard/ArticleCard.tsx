import { Article } from '../../lib/definitions'
import './ArticleCard.css'

export const ArticleCard: React.FC<Article> = ({
  title,
  description,
  author,
  date,
  image_src
}) => {
  return (
    <div className='article-card'>
      <img src={image_src} alt="Foto del artículo" />
        <div className="metadata-article">
            <h3>{title}</h3>
            <p>{description}</p>

            <div className="author-date">
                <small>{author}</small>
                <small>{date}</small>
            </div>
        </div>
    </div>
  )
}
