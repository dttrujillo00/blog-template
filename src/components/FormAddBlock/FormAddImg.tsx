import { useRef, useState } from "react"
import { AddBlockModal } from "../../lib"
import { useDOM } from "../../core/hooks/domProvider";

interface Props {
    setShowAddModal: React.Dispatch<React.SetStateAction<AddBlockModal>>
}

export const FormAddImg = ({ setShowAddModal }: Props) => {

    const [imagedescription, setImageDescription] = useState<string>('');
    const [file, setFile] = useState<File>();

    const inputRef = useRef<HTMLInputElement | null>(null);
    const { addImg } = useDOM();

    const handleImgDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImageDescription(event.currentTarget.value)
    }

    const hideModal = () => {
        setShowAddModal((prev) => ({
            ...prev,
            show: false,
        }))
    }

    const handleUploadClick = () => {
        inputRef.current?.click()
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        if (!event.currentTarget.files) {
            return;
        }

        setFile(event.currentTarget.files[0]);

    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        if (file) {
            console.log(URL.createObjectURL(file))
            addImg(imagedescription, URL.createObjectURL(file));
            hideModal()

        }

    }


    return (
        <div>
            <form onSubmit={handleSubmit} className="form-add-block">
                <h2>Agregar imagen</h2>

                <div className="form-control">
                    <input value={imagedescription} onChange={handleImgDescription} type="text" placeholder="Descrpción" />
                </div>
                <div onClick={handleUploadClick} className="form-control">
                    <button className="submit">
                        {file ? `${file.name}` : 'Elegir imagen'}
                    </button>
                </div>
                <div className="form-control">
                    <input
                        type="file"
                        ref={inputRef}
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
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
