import { supabase } from '../../core/Supabase/supabaseClient'
import { Article } from '../../lib/definitions'
import './ArticleCard.css'
import { useEffect, useState } from 'react';

export const ArticleCard: React.FC<Article> = ({
  user_id,
  title,
  description,
  author,
  created_at,
  main_image_path
}) => {

  const [srcImage, setSrcImage] = useState<string>("")
  let created = new Date().getDate() - new Date(created_at).getDate()

  useEffect(() => {
    createURL()
  
  }, [])

  const createURL = async() => { 
    const { data, error } = await supabase.storage.from('article_images').createSignedUrl(main_image_path, 3600)
    console.log(data, error)
    if (data?.signedUrl) {
      setSrcImage(data.signedUrl)
    }
   }
  

  // https://mzyesocfxknxvnsvfldg.supabase.co/storage/v1/object/sign/article_images/a2c236e4-c285-4ee1-8387-96d02f15e412/main_images/Articulo%201?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhcnRpY2xlX2ltYWdlcy9hMmMyMzZlNC1jMjg1LTRlZTEtODM4Ny05NmQwMmYxNWU0MTIvbWFpbl9pbWFnZXMvQXJ0aWN1bG8gMSIsImlhdCI6MTcxNDQ5OTM0MSwiZXhwIjoxNzE1MTA0MTQxfQ.HxD8fI07XuaDa5CtJkFyK6dFxILFET4JcZAs7LXfhT8&t=2024-04-30T17%3A49%3A01.608Z


  return (
    <div className='article-card'>
      <img src={srcImage} alt={`Imagen de presentación de ${title}`} />
      <div className="metadata-article">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="author-date">
          <small>{author}</small>
          <small>Hace {created} días</small>
        </div>
      </div>
    </div>
  )
}
