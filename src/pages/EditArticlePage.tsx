
import { GoGear } from 'react-icons/go'
import './EditArticlePage.css'
import { useEffect, useRef, useState } from 'react';
import { AddBlockbutton, Box, FormAddBlock } from '../components'
import { blockElements } from '../data/blockElements'
import { AddBlockModal } from '../lib/definitions'
import { FaArrowRight } from 'react-icons/fa'
import { getArticleById } from '../core/services';
import { useAuth } from '../auth';
import { useParams } from 'react-router-dom';

export const EditArticlePage = () => {

  const [article, setArticle] = useState<any | null>(null)
  const [showControl, setShowControl] = useState<boolean>(false);
  const [showAddModal, setShowAddModal] = useState<AddBlockModal>({
    show: false,
    type: ''
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const authContext = useAuth()
  const { articleTitle } = useParams()

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

      <FormAddBlock contentRef={contentRef} showAddModal={showAddModal} setShowAddModal={setShowAddModal} />

      <div className="content">
        <Box className="header bg-main-color position-sticky">
          <button className='submit'>
            Guardar
          </button>
          <GoGear onClick={showHidePanel} size={26} />
        </Box>
        <div ref={contentRef} className="article-body">
          {
            article && <h1>{article.title}</h1>
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
            <li>
              Encabezados
              <ul>
                {
                  blockElements.map((element) => {
                    if (element.type.startsWith('h')) {
                      return (
                        <li key={element.type}>
                          <AddBlockbutton type={element.type} setShowAddModal={setShowAddModal} setShowControl={setShowControl} >
                            {element.text}
                          </AddBlockbutton>
                        </li>
                      )
                    }
                  })
                }
              </ul>
            </li>
            {
              blockElements.map((element) => {
                if (!element.type.startsWith('h')) {
                  return (
                    <li key={element.type}>
                      <AddBlockbutton type={element.type} setShowAddModal={setShowAddModal} setShowControl={setShowControl} >
                        {element.text}
                      </AddBlockbutton>
                    </li>
                  )
                }
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}
