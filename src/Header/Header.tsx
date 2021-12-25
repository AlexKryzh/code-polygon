import './Header.scss';
import IconButton from 'carbon-react/lib/components/icon-button';
import Icon from 'carbon-react/lib/components/icon';
import { useHistory } from 'react-router-dom';

function Header() {
    const history = useHistory();

    return (
    <header className="header">
        <IconButton aria-label="icon-button" onAction={() => { history.push('/'); }}>
            <Icon type="home" />
        </IconButton> 
    </header>
  );
}

export default Header;
