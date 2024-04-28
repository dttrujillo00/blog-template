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
        
     }

  return (
    <div onClick={ handleAdd }>
        <button>
            {children}
        </button>
    </div>
  )
}
