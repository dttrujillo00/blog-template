import { AddBlockModal } from '../../lib/definitions';
import './AddBlockbutton.css'

interface Props {
    children?: React.ReactNode;
    setShowControl: React.Dispatch<React.SetStateAction<boolean>>
    // addBlock: (content: string, atribute: string) => void;
    setShowAddModal: React.Dispatch<React.SetStateAction<AddBlockModal>>
    type: string

}

export const AddBlockbutton = ({ children, type, setShowAddModal, setShowControl }: Props) => {

    const handleAdd = () => {

        setShowControl(false);
        setShowAddModal({
            show: true,
            type,
        })
        
        // switch (type) {
        //     case 'p':
        //         addBlock('Licenciada en Derecho por la Universidad de La Habana, actualmente me he redirigido al nuevo sector empresarial que crece en Cuba, especialmente en temas económicos y mercantiles. Soy abogada especializada en Mipyme o TCP y actores económicos en general que te ofrece asesoría jurídica para concretar tus objetivos empresariales. Me caracterizan la seriedad en los compromisos que asumo y la búsqueda constante de nuevos retos', '')
        //         break;
        //     case 'img':
        //         addBlock('Image description', '/images/habana-background.jpg')
        //     break;

        //     case 'a':
        //         addBlock('Enlace', '#')
        //     break;
        
        //     default:
        //         addBlock('Header content', type)
        //         break;
        // }
     }

  return (
    <div onClick={ handleAdd }>
        <button>
            {children}
        </button>
    </div>
  )
}
