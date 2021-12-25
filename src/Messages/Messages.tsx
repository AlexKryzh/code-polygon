import { useAppStore } from 'store';
import { IMessage } from 'shared';
import { useTranslation } from 'react-i18next';
import Message from 'carbon-react/lib/components/message';
import './Messages.scss';

function Loading() {
    const [appState] = useAppStore();
    const { t } = useTranslation();

    return (
        <aside className="messages">
        { appState.messages.length > 0 && <ul className="p-0 m-0">
                { appState.messages.map((message: IMessage) => {
                    return <Message 
                        key={message.id}
                        variant={message.type}>
                    {t(message.text)}
                  </Message>
                })}
            </ul>
        }
        </aside>
    );
}

export default Loading;
