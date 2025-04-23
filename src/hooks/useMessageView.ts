import { message } from 'antd';

interface IMessageViewType {
    messageType: 'success' | 'error' | 'warning';
    content: string;
}

export const useMessageView = ({ messageType, content }: IMessageViewType) => {
    const [messageView, messageContext] = message.useMessage();

    const openMessageView = () => {
        messageView.open({
            type: messageType,
            content: content
        })
    }

    return { openMessageView, messageContext };
};