import {
  BrowserRouter,
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import Header from './Header/Header';
import NotFound from './NotFound/NotFound';
import Home from './Home/Home';
import Loading from './Loading/Loading';
import Messages from './Messages/Messages';
import Footer from './Footer/Footer';
import './App.scss';
import { ThemeProvider } from 'styled-components';
import mintTheme from 'carbon-react/lib/style/themes/mint';
import 'carbon-react/lib/style/utils';
import AppWrapper from 'carbon-react/lib/components/app-wrapper';
import GlobalStyle from 'carbon-react/lib/style/global-style';

function App() {
    return ( 
        <ThemeProvider theme={mintTheme}>
            <AppWrapper>
                <BrowserRouter>
                    <GlobalStyle />
                    <div className="app d-flex flex-column">
                        <Header />
                        <Switch>
                            <Route exact path='/'>
                                <Home />
                            </Route>
                            <Route path='/404' component={NotFound} />
                            <Redirect from='*' to='/404' />
                        </Switch>
                        <Footer />
                        <Loading />
                        <Messages />
                    </div>
                </BrowserRouter>
            </AppWrapper>
        </ThemeProvider>
        
    );
}

export default App;
