
import { GoGear } from 'react-icons/go'
import './EditArticlePage.css'
import { useRef, useState } from 'react';
import { AddBlockbutton, Box, FormAddBlock } from '../components'
import { blockElements } from '../data/blockElements'
import { AddBlockModal } from '../lib/definitions'
import { FaArrowRight } from 'react-icons/fa'

export const EditArticlePage = () => {

  const [showControl, setShowControl] = useState<boolean>(false);
  const [showAddModal, setShowAddModal] = useState<AddBlockModal>({
    show: false,
    type: ''
  });
  // const [alertContent, setAlertContent] = useState<string>("")
  const contentRef = useRef<HTMLDivElement>(null);
  

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
          <h1>Título del artículo</h1>
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
               blockElements.map( (element) => {
                if (!element.type.startsWith('h')) {
                  return (
                    <li key={element.type}>
                      <AddBlockbutton type={element.type} setShowAddModal={setShowAddModal} setShowControl={setShowControl} >
                        { element.text }
                      </AddBlockbutton>
                    </li>
                  )
                }
              } )
            }
          </ul>
        </div>
      </div>
    </div>
  )
}
