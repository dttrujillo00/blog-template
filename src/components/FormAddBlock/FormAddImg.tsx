import { useState } from "react"
import { AddBlockModal, AddContentToDOM } from "../../lib/definitions"

interface Props {
    contentRef: React.RefObject<HTMLDivElement>,
    setShowAddModal: React.Dispatch<React.SetStateAction<AddBlockModal>>
}

export const FormAddImg = ({ contentRef, setShowAddModal }: Props) => {

    const [imagedescription, setImageDescription] = useState<string>('');
    const { addImage } = AddContentToDOM;

    const handleImgDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImageDescription(event.currentTarget.value)
    }

    const hideModal = () => {
        setShowAddModal((prev) => ({
            ...prev,
            show: false,
        }))
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        addImage(contentRef, imagedescription, '/images/habana-background.jpg');
        hideModal()

    }


    return (
        <div>
            <form onSubmit={handleSubmit} className="form-add-block">
                <h2>Agregar imagen</h2>

                <div className="form-control">
                    <input value={imagedescription} onChange={handleImgDescription} type="text" placeholder="Descrpción" required />
                </div>
                <div className="form-control">
                    <input type="file" accept="image/*" />
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
