import { useAppStore } from 'store';
import Loader from 'carbon-react/lib/components/loader';
import './Loading.scss';

function Loading() {
    const [appState] = useAppStore();

    return (
        <aside className={`loading ${appState.isLoading ? 'is-active' : ''}`}>
            <div className="loading__animation">
                <Loader />
            </div>
        </aside>
    );
}

export default Loading;
