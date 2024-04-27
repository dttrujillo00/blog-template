
import { GoGear } from 'react-icons/go'
import './EditArticlePage.css'
import { useRef, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { AddBlockbutton } from '../components'
import { blockElements } from '../data/blockElements'

export const EditArticlePage = () => {

  const [showControl, setShowControl] = useState<boolean>(true);
  const contentRef = useRef<HTMLDivElement>(null);

  const addHeader = (content: string, type: string) => { 
    if (contentRef.current) {
      let header = document.createElement(type)
      header.innerText = content;
      contentRef.current.appendChild(header)
      console.log(contentRef.current.childNodes)
    }
   }

  const addParagraph = (content: string) => {
    if (contentRef.current) {
      let paragraph = document.createElement('p')
      paragraph.innerText = content;
      contentRef.current.appendChild(paragraph)
      console.log(contentRef.current.childNodes)
    }
  }

  const addlink = (content: string, href: string) => {
    if (contentRef.current) {
      let link = document.createElement('a')
      link.innerText = content;
      link.href = href;
      contentRef.current.appendChild(link)
      console.log(contentRef.current.childNodes)
    }
  }

  const addImage = (description: string, src: string) => { 
    if (contentRef.current) {
      let image = document.createElement('img')
      let figure = document.createElement('figure')
      let figcaption = document.createElement('figcaption')

      image.src = src;
      figcaption.textContent = description
      
      figure.classList.add('image-article')
      figure.appendChild(image)
      figure.appendChild(figcaption)
      contentRef.current.appendChild(figure)
      console.log(contentRef.current.childNodes)
    }
   }

  const showHidePanel = () => {
    setShowControl(!showControl)
  }

  return (
    <div className="edit-article-page">

      <div className="content">
        <div className="gear-icon">
          <GoGear onClick={showHidePanel} size={26} />
        </div>
        <div ref={contentRef} className="article-body">
          <h1>Título del articulo</h1>
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
              Encabezados
              <ul>
                {
                  blockElements.map((element) => {
                    if (element.type.startsWith('h')) {
                      return (
                        <li key={element.type}>
                          <AddBlockbutton addBlock={addHeader} type={element.type}>
                            {element.text}
                          </AddBlockbutton>
                        </li>
                      )
                    }
                  })
                }
              </ul>
            </li>
            <li>
              <AddBlockbutton addBlock={addParagraph} type='p'>
                Párrafo
              </AddBlockbutton>
            </li>
            <li>
              <AddBlockbutton addBlock={addImage} type='img'>
                Imagen
              </AddBlockbutton>
            </li>
            <li>
              <AddBlockbutton addBlock={addlink} type='a'>
                Enlace
              </AddBlockbutton>
            </li>
            {/* {
               blockElements.map( (element) => {
                if (!element.type.startsWith('h')) {
                  return (
                    <li key={element.type}>
                      <AddBlockbutton type={element.type}>
                        { element.text }
                      </AddBlockbutton>
                    </li>
                  )
                }
              } )
            } */}
          </ul>
        </div>
      </div>
    </div>
  )
}
