
import { GoGear } from 'react-icons/go'
import './EditArticlePage.css'
import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'

export const EditArticlePage = () => {

  const [showControl, setShowControl] = useState<boolean>(true)

  const showHidePanel = () => {
    setShowControl(!showControl)
  }

  return (
    <div className="edit-article-page">
      <div className="content">
        <div className="gear-icon">
          <GoGear onClick={showHidePanel} size={26} />
        </div>
        <div className="article-body">
          Content
        </div>
      </div>

      <div className={showControl ? 'control show' : 'control'}>
        <div className="close-icon">
          <IoMdClose onClick={showHidePanel} size={26} />
        </div>
        <div className="control-panel">
          <h3>Panel de control</h3>
          <ul>
            <li>
              Encabezado
              <ul>
                <li>h1</li>
                <li>h2</li>
                <li>h3</li>
                <li>h4</li>
                <li>h5</li>
                <li>h6</li>
              </ul>
            </li>
            <li>
              Párrafo
            </li>
            <li>
              Imagen
            </li>
            <li>
              Enlace
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
