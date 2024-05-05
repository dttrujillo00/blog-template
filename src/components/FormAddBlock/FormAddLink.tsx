import { useState } from "react"
import { AddBlockModal } from "../../lib"
import { useDOM } from "../../core/hooks/domProvider";

interface Props {
    setShowAddModal: React.Dispatch<React.SetStateAction<AddBlockModal>>
}

export const FormAddLink = ({ setShowAddModal }: Props) => {

    const [linkText, setLinkText] = useState<string>('');
    const [linkHref, setLinkHref] = useState<string>('');
    const { addLink } = useDOM();

    const handleLinkText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLinkText(event.currentTarget.value)
    }

    const handleLinkHref = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLinkHref(event.currentTarget.value)
    }

    const hideModal = () => {
        setShowAddModal((prev) => ({
            ...prev,
            show: false,
        }))
    }


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        addLink(linkText, linkHref);
        hideModal()

    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="form-add-block">
                <h2>Agregar enlace</h2>

                <div className="form-control">
                    <input value={linkText} onChange={handleLinkText} type="text" placeholder="Texto" required />
                </div>
                <div className="form-control">
                    <input value={linkHref} onChange={handleLinkHref} type="text" placeholder="URL" autoFocus required />
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
