import { AddBlockModal, } from '../../lib/definitions';
import { FormAddHeader } from './FormAddHeader';
import { FormAddImg } from './FormAddImg';
import { FormAddLink } from './FormAddLink';
import { FormAddParagraph } from './FormAddParagraph';


interface Props {
    contentRef: React.RefObject<HTMLDivElement>,
    showAddModal: AddBlockModal;
    setShowAddModal: React.Dispatch<React.SetStateAction<AddBlockModal>>
}

export const FormAddBlock = ({ contentRef, showAddModal, setShowAddModal }: Props) => {

    const { show, type } = showAddModal;

    if (show) {
        return (
            <div>
                <div className="screen-cover">
                    {
                        type === 'p' && (
                            <FormAddParagraph contentRef={contentRef} setShowAddModal={setShowAddModal} />
                        )
                    }

                    {
                        type.startsWith('h') && (
                            <FormAddHeader contentRef={contentRef} setShowAddModal={setShowAddModal} type={type} />
                        )
                    }

                    {
                        type === 'a' && (
                            <FormAddLink contentRef={contentRef} setShowAddModal={setShowAddModal} />
                        )
                    }

                    {
                        type === 'img' && (
                            <FormAddImg contentRef={contentRef} setShowAddModal={setShowAddModal} />
                        )
                    }
                </div>
            </div>
        )

    }

}
