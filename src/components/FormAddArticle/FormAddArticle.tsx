import { useNavigate } from 'react-router-dom';
import './FormAddArticle.css'

interface FormAddArticleProps {
    showAddModal: boolean;
    setShowAddModal: React.Dispatch<React.SetStateAction<boolean>>
    setAlertContent: React.Dispatch<React.SetStateAction<string>>
}

export const FormAddArticle = ({ showAddModal, setShowAddModal, setAlertContent }: FormAddArticleProps) => {

    const navigate = useNavigate()
    
    const handleAddArticle = (event: React.FormEvent<HTMLFormElement>) => { 
        event.preventDefault()
        setAlertContent("Creando artículo")
        
        setTimeout(() => {
            setAlertContent("");
            navigate('/edit-article/1')
        }, 2000);
     }

    if (showAddModal) {
        return (
            <div className='screen-cover'>
                <form onSubmit={handleAddArticle} className='form-add-article'>
                    <h3>Agregar nuevo artículo</h3>
    
                    <div className="form-control">
                        <input type="text" placeholder='Título' autoFocus required />
                    </div>
    
                    <div className="form-control">
                        <textarea cols={30} rows={3} placeholder='Descripción' required></textarea>
                    </div>
    
                    <div className="form-actions">
                        <button onClick={ () => setShowAddModal(false) }>
                            Cancelar
                        </button>
                        <button type='submit'>
                            Agregar
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
