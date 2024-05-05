import { useState } from "react"
import { AddBlockModal } from "../../lib"
import { useDOM } from "../../core/hooks/domProvider";

interface Props {
    setShowAddModal: React.Dispatch<React.SetStateAction<AddBlockModal>>;
}

export const FormAddHeader = ({ setShowAddModal }: Props) => {

    const [headerText, setHeaderText] = useState<string>('');
    const { addHeader } = useDOM();

    const handleTextarea = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHeaderText(event.currentTarget.value)
    }

    const hideModal = () => {
        setShowAddModal((prev) => ({
            ...prev,
            show: false,
        }))
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        addHeader(headerText);
        hideModal()

    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="form-add-block">
                <h2>Agregar encabezado</h2>

                <div className="form-control">
                    <input value={headerText} onChange={handleTextarea} placeholder="Encabezado" autoFocus required />
                </div>

                <div className="form-action justify-end">
                    <button onClick={hideModal}>
                        Cancelar
                    </button>
                    <button type='submit' className='submit'>
                        Agregar
                    </button>
                </div>
            </form>
        </div>
    )
}
