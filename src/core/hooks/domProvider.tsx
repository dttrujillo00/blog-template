import { createContext, ReactNode, useContext, useState } from "react"


interface Props {
    children?: ReactNode,
}

interface contextType {
    myDOM: string[],
    addParagraph: (content: string) => void,
    addHeader: (content: string) => void,
    addLink: (content: string, href: string) => void,
    addImg: (description: string, src: string) => void,
}

let initialContext = {
    myDOM: [],
    addParagraph: (content: string) => {},
    addHeader: (content: string) => {},
    addLink: (content: string, href: string) => {},
    addImg: (description: string, src: string) => {},
}

const DomContext = createContext<contextType>(initialContext)

export const DomProvider = ({ children }: Props) => {

    const [myDOM, setMyDOM] = useState<string[]>(initialContext.myDOM)

    const addParagraph = (content: string) => {
        setMyDOM( (prev) => (
            [
                ...prev,
                `${content}`
            ]
         ) )
    }

    const addHeader = (content: string) => {
        setMyDOM( (prev) => (
            [
                ...prev,
                `## ${content}`
            ]
         ) )
    }

    const addLink = (content: string, href: string) => {
        setMyDOM( (prev) => (
            [
                ...prev,
                `[${content}](${href})`
            ]
         ) )
    }
    
    const addImg = (description: string, src: string) => {
        setMyDOM( (prev) => (
            [
                ...prev,
                `![${description}](${src})`
            ]
         ) )
    }

  return (
    <DomContext.Provider value={{ myDOM, addParagraph, addHeader, addLink, addImg }}>{ children }</DomContext.Provider>
  )
}

export const useDOM = () => {
    return useContext(DomContext)
}