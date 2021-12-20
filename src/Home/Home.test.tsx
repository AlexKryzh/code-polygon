import { render } from '@testing-library/react';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';

describe('Home Component', () => {

    test('has .home class', () => {
        const { container } = render(<BrowserRouter><Home /></BrowserRouter>);
        expect(container.getElementsByClassName('home')[0]).toBeInTheDocument();
    });
});