
import { GoGear } from 'react-icons/go'
import './EditArticlePage.css'
import { useEffect, useState } from 'react';
import { AddBlockbutton, Box, FormAddBlock } from '../components'
import { blockElements } from '../data/blockElements'
import { AddBlockModal } from '../lib/definitions'
import { FaArrowRight } from 'react-icons/fa'
import { getArticleById } from '../core/services';
import { useAuth } from '../auth';
import { useParams } from 'react-router-dom';
import { BlockContent } from '../components/BlockContent/BlockContent';
import { useDOM } from '../core/hooks/domProvider';

export const EditArticlePage = () => {

  const [article, setArticle] = useState<any | null>(null)
  const [showControl, setShowControl] = useState<boolean>(false);
  const [showAddModal, setShowAddModal] = useState<AddBlockModal>({
    show: false,
    type: ''
  });


  const authContext = useAuth()
  const { articleTitle } = useParams()
  const domContext = useDOM();

  const { myDOM } = domContext;

  useEffect(() => {

    if (authContext.session && articleTitle) {

      getArticleById(articleTitle, authContext.session?.user.id)
        .then(({ data, error }) => {
          if (data && data.length > 0) {
            setArticle(data[0])
          }

          if (error) {
            console.log(error)
          }
        })
    }

  }, [])



  const showHidePanel = () => {
    setShowControl(!showControl)
  }

  return (
    <div className="edit-article-page">
      {/* <LoadingAlert content={alertContent} /> */}

      <FormAddBlock showAddModal={showAddModal} setShowAddModal={setShowAddModal} />

      <div className="content">
        <Box className="header bg-main-color position-sticky">
          <button className='submit'>
            Guardar
          </button>
          <GoGear onClick={showHidePanel} size={26} />
        </Box>
        <div className="article-body">
          {
            article && <h1>{article.title}</h1>
          }
          {
            myDOM.map((element, index) => (
              <BlockContent key={index}>
                {element}
              </BlockContent>
            ))
          }
        </div>
      </div>

      <div className={showControl ? 'control show' : 'control'}>
        <Box>
          <FaArrowRight onClick={showHidePanel} size={26} />
        </Box>
        <div className="control-panel">
          <h3>Panel de control</h3>
          <ul>
            {
              blockElements.map((element) => {
                return (
                  <li key={element.type}>
                    <AddBlockbutton type={element.type} setShowAddModal={setShowAddModal} setShowControl={setShowControl} >
                      {element.text}
                    </AddBlockbutton>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}
