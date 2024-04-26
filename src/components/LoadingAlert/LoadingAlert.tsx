import './LoadingAlert.css'

interface LoadingAlertProps {
    content: string;
}

export const LoadingAlert = ({ content }: LoadingAlertProps) => {

    if (content.length > 0) {
        return (
            <div className='loading-alert'>
                <div className="loading-spinner">
                </div>
                <p>{content}</p>
            </div>
        )
    }
}
