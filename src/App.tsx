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
import DesignPatternsObserver from './DesignPatterns/DesignPatternsObserver';
import DesignPatternsFacade from './DesignPatterns/DesignPatternsFacade';
import ReactHooksUseContext from './ReactHooks/ReactHooksUseContext';
import ReactHooksUseRef from './ReactHooks/ReactHooksUseRef';
import LibrariesBigJs from './Libraries/LibrariesBigJs';
import TypescriptEnums from './Typescript/TypescriptEnums';
import TypescriptDeclare from './Typescript/TypescriptDeclare';
import TypescriptGenerics from './Typescript/TypescriptGenerics';
import TypescriptTuple from './Typescript/TypescriptTuple';
import TypescriptIntersection from './Typescript/TypescriptIntersection';
import TypescriptIterator from './Typescript/TypescriptIterator';
import TypescriptCallable from './Typescript/TypescriptCallable';
import TypescriptIn from './Typescript/TypescriptIn';
import TypescriptLiterals from './Typescript/TypescriptLiterals';
import TypescriptReadOnly from './Typescript/TypescriptReadOnly';
import TypescriptIndexSignature from './Typescript/TypescriptIndexSignature';
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
                            <Route exact path='/design-patterns-facade'>
                                <DesignPatternsFacade />
                            </Route>
                            <Route exact path='/design-patterns-observer'>
                                <DesignPatternsObserver />
                            </Route>
                            <Route exact path='/react-hooks-usecontext'>
                                <ReactHooksUseContext />
                            </Route>
                            <Route exact path='/react-hooks-useref'>
                                <ReactHooksUseRef />
                            </Route>
                            <Route exact path='/libraries-bigjs'>
                                <LibrariesBigJs />
                            </Route>
                            <Route exact path='/typescript-enums'>
                                <TypescriptEnums />
                            </Route>
                            <Route exact path='/typescript-declare'>
                                <TypescriptDeclare />
                            </Route>
                            <Route exact path='/typescript-generics'>
                                <TypescriptGenerics />
                            </Route>
                            <Route exact path='/typescript-intersection'>
                                <TypescriptIntersection />
                            </Route>
                            <Route exact path='/typescript-iterator'>
                                <TypescriptIterator />
                            </Route>  
                            <Route exact path='/typescript-callable'>
                                <TypescriptCallable />
                            </Route>   
                            <Route exact path='/typescript-tuple'>
                                <TypescriptTuple />
                            </Route>  
                            <Route exact path='/typescript-in'>
                                <TypescriptIn />
                            </Route>   
                            <Route exact path='/typescript-literals'>
                                <TypescriptLiterals />
                            </Route>
                            <Route exact path='/typescript-readonly'>
                                <TypescriptReadOnly />
                            </Route>     
                            <Route exact path='/typescript-index-signature'>
                                <TypescriptIndexSignature />
                            </Route>    
                                  
                            <Route path='/404'>
                                <NotFound />
                            </Route>
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
