import {
  BrowserRouter,
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import Header from './Header/Header';
import NotFound from './NotFound/NotFound';
import Home from './Home/Home';
import DesignPatternsSingleton from './DesignPatterns/DesignPatternsSingleton';
import DesignPatternsAdapter from './DesignPatterns/DesignPatternsAdapter';
import Loading from './Loading/Loading';
import Messages from './Messages/Messages';
import Footer from './Footer/Footer';
import './App.scss';
import AppWrapper from 'carbon-react/lib/components/app-wrapper';
import CarbonProvider from 'carbon-react/lib/components/carbon-provider';
import aegeanTheme from 'carbon-react/lib/style/themes/aegean';
import 'carbon-react/lib/style/utils';
import GlobalStyle from 'carbon-react/lib/style/global-style';

function App() {
    return ( 
        <CarbonProvider theme={aegeanTheme}>
            <BrowserRouter>
                <GlobalStyle />
                    <div className="app d-flex flex-column">
                    <AppWrapper>
                        <Header />
                        <Switch>
                            <Route exact path='/'>
                                <Home />
                            </Route>
                            <Route exact path='/design-patterns-singleton'>
                                <DesignPatternsSingleton />
                            </Route>
                            <Route exact path='/design-patterns-adapter'>
                                <DesignPatternsAdapter />
                            </Route>
                            <Route path='/404' component={NotFound} />
                            <Redirect from='*' to='/404' />
                        </Switch>
                        <Footer />
                    </AppWrapper>
                    <Loading />
                    <Messages />
                </div>
            </BrowserRouter>
        </CarbonProvider>
        
    );
}

export default App;
