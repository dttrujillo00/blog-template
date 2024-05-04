import { FaPencil, FaTrash } from 'react-icons/fa6';
import { supabase } from '../../core/Supabase/supabaseClient'
import { Article } from '../../lib/definitions'
import './ArticleCard.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ArticleCard: React.FC<Article> = ({
  title,
  description,
  author,
  created_at,
  main_image_path
}) => {

  const [srcImage, setSrcImage] = useState<string>("");
  const [dateOfPublic, setDateOfPublic] = useState<string>("")
  const navigate = useNavigate();

  useEffect(() => {

    setDateOfPublic(getCreatedAt(created_at))
    createURL()

  }, [])

  const createURL = async () => {
    const { data } = await supabase.storage.from('article_images').createSignedUrl(main_image_path, 3600)
    if (data?.signedUrl) {
      setSrcImage(data.signedUrl)
    }
  }

  const getCreatedAt = (created_at: string): string => {

    let today: Date = new Date()
    let createdDate: Date = new Date(created_at)
    let createdAt: string = "";

    if (today.getFullYear() > createdDate.getFullYear()) {

      (today.getFullYear() - createdDate.getFullYear() > 1) ?
        createdAt = `Publicado hace ${today.getFullYear() - createdDate.getFullYear()} años`
        :
        createdAt = 'Publicado el año pasado'

    } else if (today.getMonth() > createdDate.getMonth()) {

      (today.getMonth() - createdDate.getMonth() > 1) ?
        createdAt = `Publicado hace ${today.getFullYear() - createdDate.getFullYear()} meses`
        :
        createdAt = 'Publicado el mes pasado'

    } else if (today.getDate() > createdDate.getDate()) {

      (today.getDate() - createdDate.getDate() > 1) ?
        createdAt = `Publicado hace ${today.getFullYear() - createdDate.getFullYear()} días`
        :
        createdAt = 'Publicado ayer'

    } else {

      return "Publicado hoy";

    }

    return createdAt
  }

  const editAction = () => { 
    navigate(`/edit-article/${title}`)
   }

   const deleteAction = () => { 
    console.log('Show alert before delete')
    }

  return (
    <div className='article-card'>
      <img src={srcImage} alt={`Imagen de presentación de ${title}`} />
      <div className="actions">
        <button onClick={editAction} className='submit'>
          <FaPencil size={15} />
        </button>
        <button onClick={deleteAction} className='delete'>
          <FaTrash size={15} />
        </button>
      </div>
      <div className="metadata-article">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="author-date">
          <small>{author}</small>
          <small>{dateOfPublic}</small>
        </div>
      </div>
    </div>
  )
}
