import { useState } from "react"
import { AddBlockModal } from "../../lib"
import { useDOM } from "../../core/hooks/domProvider";

interface Props {
    setShowAddModal: React.Dispatch<React.SetStateAction<AddBlockModal>>
}

export const FormAddParagraph = ({ setShowAddModal }: Props) => {

    const [paragraphText, setParagraphText] = useState<string>('');
    const { addParagraph } = useDOM();

    const handleTextarea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setParagraphText(event.currentTarget.value)
    }

    const hideModal = () => {
        setShowAddModal((prev) => ({
            ...prev,
            show: false,
        }))
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        addParagraph(paragraphText);
        hideModal()

    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="form-add-block">
                <h2>Agregar párrafo</h2>

                <div className="form-control">
                    <textarea value={paragraphText} onChange={handleTextarea} cols={30} rows={10} placeholder="Texto" autoFocus required></textarea>
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
