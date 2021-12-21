import './Header.scss';
import IconButton from 'carbon-react/lib/components/icon-button';
import Icon from 'carbon-react/lib/components/icon';

function Header() {
    return (
    <header className="header">
      <IconButton aria-label="icon-button" onAction={() => {}}>
      <Icon type="home" />
    </IconButton> 
    Code Polygon
    </header>
  );
}

export default Header;
