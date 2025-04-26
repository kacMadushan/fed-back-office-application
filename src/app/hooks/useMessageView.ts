import { message } from 'antd';

type TMessageViewType = {
    messageType: 'success' | 'error' | 'warning';
    content: string;
}

export const useMessageView = ({ messageType, content }: TMessageViewType) => {
    const [messageView, messageContext] = message.useMessage();

    const openMessageView = () => {
        messageView.open({
            type: messageType,
            content: content
        })
    }

    return { openMessageView, messageContext };
};