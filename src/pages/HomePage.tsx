import { AddArticleBtn, ArticleCard, AuthStatus, Box, Logo } from "../components"
import './HomePage.css'

export const HomePage = () => {

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
            <AddArticleBtn />
          </Box>
          <h2>Úlitmas publicaciones</h2>
          <Box className="flex-100 height-article-card">
            <ArticleCard />
          </Box>
          <Box className="flex-100 height-article-card">
            <ArticleCard />
          </Box>
          <Box className="flex-100 height-article-card">
            <ArticleCard />
          </Box>
          <Box className="flex-100 height-article-card">
            <ArticleCard />
          </Box>
          <Box className="flex-100 height-article-card">
            <ArticleCard />
          </Box>
        </div>
      </Box>

    </div>
  )

}
