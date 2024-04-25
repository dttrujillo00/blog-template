import { AddArticleBtn, AuthStatus, Box, Logo } from "../components"
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
          <Box className="flex-50">
            <AddArticleBtn />
          </Box>
          <Box className="flex-50">
            <AddArticleBtn />
          </Box>
          <Box className="flex-50">
            <AddArticleBtn />
          </Box>
          <Box className="flex-50">
            <AddArticleBtn />
          </Box>
          <Box className="flex-50">
            <AddArticleBtn />
          </Box>
          <Box className="flex-50">
            <AddArticleBtn />
          </Box>
        </div>
      </Box>

    </div>
  )

}
