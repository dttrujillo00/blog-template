import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { uploadFile } from '../../core/Supabase/uploadFile';
import { useAuth } from '../../auth';
import { createNewArticle } from '../../core/Supabase/createArticle';

interface FormAddArticleProps {
    showAddModal: boolean;
    setShowAddModal: React.Dispatch<React.SetStateAction<boolean>>
    setAlertContent: React.Dispatch<React.SetStateAction<string>>
    initialLoad: () => void;
}

export const FormAddArticle = ({ showAddModal, setShowAddModal, setAlertContent, initialLoad }: FormAddArticleProps) => {

    const navigate = useNavigate()
    const [file, setFile] = useState<File>();
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const authContext = useAuth();
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleAddArticle = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setAlertContent("Creando artículo")

        if (authContext.session) {
            setAlertContent("Creando articulo");
            // navigate('/edit-article/1')
            console.log(title)
            console.log(description)
            console.log(file)

            let Articledata = {
                title,
                description,
                user_id: authContext.session.user.id,
                author: authContext.session.user.user_metadata.username,
                main_image_path: `${authContext.session.user.id}/main_images/${title}`
            }

            await createNewArticle({ ...Articledata })
            
            
            setAlertContent("");
            
            if(file){
                setAlertContent("Subiendo imagen")
                await uploadFile(file, authContext.session.user.id, title)
                setAlertContent("");
                setShowAddModal(false)
                initialLoad()
            }
        }

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

    const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const handleDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.currentTarget.value)
    }

    if (showAddModal) {
        return (
            <div className='screen-cover'>
                <form onSubmit={handleAddArticle} className='zoom-in'>
                    <h2>Agregar nuevo artículo</h2>

                    <div className="form-control">
                        <input value={title} onChange={handleTitle} type="text" placeholder='Título' autoFocus required />
                    </div>

                    <div className="form-control">
                        <textarea value={description} onChange={handleDescription} cols={30} rows={3} placeholder='Descripción' required></textarea>
                    </div>

                    <div onClick={handleUploadClick} className="form-control">
                        <button type='button' className="submit">
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
                        <button onClick={() => setShowAddModal(false)}>
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
}
