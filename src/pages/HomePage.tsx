import { Session } from "@supabase/supabase-js";
import { useAuth } from "../auth";
import { ArticleCard, AuthStatus, Box, FormAddArticle, LoadingAlert, Logo } from "../components"
// import { articles } from "../data/articles"
import { ArticlesCollection } from "../lib/definitions";
import './HomePage.css'
import { IoAdd } from "react-icons/io5";
import { useState, useEffect } from 'react';
import { loadArticles } from "../core/services/loadArticles";

// let articlesData: ArticlesCollection = articles;
let session: Session | null;

export const HomePage = () => {

  const authContext = useAuth();
  const [articlesData, setArticlesData] = useState<ArticlesCollection>([])
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [alertContent, setAlertContent] = useState<string>("")

  useEffect(() => {

    initialLoad()
    
    
  }, [])
  
  
  session = authContext.session;
  
  const initialLoad = () => { 
    setAlertContent("Cargando articulos");
    loadArticles()
    .then( ({ data, error }) => {

      // Si hay error mostrar en consola
      if (error) {
        console.log(error);
        return
      }

      console.log(data)
      setAlertContent("");
      setArticlesData(data as ArticlesCollection)

    } )

   }

  const handleAddArticle = () => {
    setShowAddModal(true)
  }

  return (
    <div>
      <Box className="bg-main-color">
        <header className="header">
          <Logo />

          <AuthStatus />
        </header>
      </Box>

      <Box>
        <div className="articles-container">
          <Box className="flex-100 height-article-card">
            <button onClick={handleAddArticle} className='btn-add-article'>
              <IoAdd size={24} />
            </button>
            <FormAddArticle showAddModal={showAddModal} setShowAddModal={setShowAddModal} setAlertContent={setAlertContent} initialLoad={initialLoad} />
          </Box>
          <h2>Úlitmas publicaciones</h2>
          {
            articlesData.length === 0 && (
              <p>No hay articulos ahora</p>
            )
          }
          {
            articlesData.map((article) => (
              <Box key={article.article_id} className="flex-100 height-article-card">
                <ArticleCard {...article} author={session?.user.user_metadata.username} />
              </Box>
            ))
          }
        </div>
      </Box>

      <LoadingAlert content={alertContent} />

    </div>
  )

}