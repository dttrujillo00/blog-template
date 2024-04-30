

export type Article = {
    article_id: number;
    title: string;
    description: string;
    author: string;
    date: string;
    image_src: string
}

export type AddBlockElement = {
    type: string,
    text: string;
}

export type AddBlockModal = {
    show: boolean;
    type: string;
}

export type ArticlesCollection = Article[];

export type AddBlockElementCollection = AddBlockElement[];

const addHeader = (contentRef: React.RefObject<HTMLDivElement>, content: string, type: string) => { 
    if (contentRef.current) {
      let header = document.createElement(type)
      header.innerText = content;
      contentRef.current.appendChild(header)
      updateUI(contentRef.current.childNodes)
    }
   }

  const addParagraph = (contentRef: React.RefObject<HTMLDivElement>, content: string) => {
    if (contentRef.current) {
      let paragraph = document.createElement('p')
      paragraph.innerText = content;
      contentRef.current.appendChild(paragraph)
      updateUI(contentRef.current.childNodes)
    }
  }

  const addLink = (contentRef: React.RefObject<HTMLDivElement>, content: string, href: string) => {
    if (contentRef.current) {
      let link = document.createElement('a')
      link.innerText = content;
      link.href = href;
      link.target ='_blank'
      contentRef.current.appendChild(link)
      updateUI(contentRef.current.childNodes)
    }
  }

  const addImage = (contentRef: React.RefObject<HTMLDivElement>, description: string, src: string) => { 
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
      updateUI(contentRef.current.childNodes)
    }
   }

   const updateUI = (childNodes: NodeListOf<ChildNode>) => { 
    console.log(childNodes)
    }

   export const AddContentToDOM = {
    addHeader,
    addParagraph,
    addImage,
    addLink
   }
