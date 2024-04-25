import './ArticleCard.css'

export const ArticleCard = () => {
  return (
    <div className='article-card'>
        <div className="metadata-article">
            <h3>Titulo articulo</h3>
            <p>Descripcion articulo</p>

            <div className="author-date">
                <small>Autor</small>
                <small>dd/mm/aaa</small>
            </div>
        </div>
    </div>
  )
}
