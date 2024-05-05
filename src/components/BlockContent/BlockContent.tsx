import ReactMarkdown from 'react-markdown';

interface Props {
    children: string,
}

export const BlockContent = ({ children }: Props) => {
  return (
    <ReactMarkdown>
        { children }
    </ReactMarkdown>
  )
}
