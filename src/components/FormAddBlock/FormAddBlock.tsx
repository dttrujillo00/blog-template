import { AddBlockModal, } from '../../lib/definitions';
import { FormAddHeader } from './FormAddHeader';
import { FormAddImg } from './FormAddImg';
import { FormAddLink } from './FormAddLink';
import { FormAddParagraph } from './FormAddParagraph';


interface Props {
    showAddModal: AddBlockModal;
    setShowAddModal: React.Dispatch<React.SetStateAction<AddBlockModal>>
}

export const FormAddBlock = ({ showAddModal, setShowAddModal }: Props) => {

    const { show, type } = showAddModal;

    if (show) {
        return (
            <div>
                <div className="screen-cover">
                    {
                        type === 'p' && (
                            <FormAddParagraph setShowAddModal={setShowAddModal} />
                        )
                    }

                    {
                        type === 'h' && (
                            <FormAddHeader setShowAddModal={setShowAddModal} />
                        )
                    }

                    {
                        type === 'a' && (
                            <FormAddLink setShowAddModal={setShowAddModal} />
                        )
                    }

                    {
                        type === 'img' && (
                            <FormAddImg setShowAddModal={setShowAddModal} />
                        )
                    }
                </div>
            </div>
        )

    }

}
