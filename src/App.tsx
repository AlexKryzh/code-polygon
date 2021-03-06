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
import DesignPatternsPrototype from './DesignPatterns/DesignPatternsPrototype';
import DesignPatternsDecorator from './DesignPatterns/DesignPatternsDecorator';
import DesignPatternsIterator from './DesignPatterns/DesignPatternsIterator';
import DesignPatternsMemento from './DesignPatterns/DesignPatternsMemento';
import DesignPatternsStrategy from './DesignPatterns/DesignPatternsStrategy';
import DesignPatternsCommand from './DesignPatterns/DesignPatternsCommand';
import ReactHooksUseContext from './ReactHooks/ReactHooksUseContext';
import ReactHooksUseRef from './ReactHooks/ReactHooksUseRef';
import ReactHooksUseCallback from './ReactHooks/ReactHooksUseCallback';
import ReactHooksUseDebugValue from './ReactHooks/ReactHooksUseDebugValue';
import ReactHooksUseEffect from './ReactHooks/ReactHooksUseEffect';
import ReactHooksUseImperativeHandle from './ReactHooks/ReactHooksUseImperativeHandle';
import ReactHooksUseLayoutEffect from './ReactHooks/ReactHooksUseLayoutEffect';
import ReactHooksUseMemo from './ReactHooks/ReactHooksUseMemo';
import ReactHooksUseReducer from './ReactHooks/ReactHooksUseReducer';
import ReactHooksUseState from './ReactHooks/ReactHooksUseState';
import LibrariesBigJs from './Libraries/LibrariesBigJs';
import LibrariesDeepEqual from './Libraries/LibrariesDeepEqual';
import LibrariesImmutableJs from './Libraries/LibrariesImmutableJs';
import TypescriptEnums from './Typescript/TypescriptEnums';
import TypescriptDeclare from './Typescript/TypescriptDeclare';
import TypescriptGenerics from './Typescript/TypescriptGenerics';
import TypescriptTuple from './Typescript/TypescriptTuple';
import TypescriptIntersection from './Typescript/TypescriptIntersection';
import TypescriptUnion from './Typescript/TypescriptUnion';
import TypescriptIterator from './Typescript/TypescriptIterator';
import TypescriptGenerators from './Typescript/TypescriptGenerators';
import TypescriptAsynchronousGenerators from './Typescript/TypescriptAsynchronousGenerators';
import TypescriptCallable from './Typescript/TypescriptCallable';
import TypescriptIn from './Typescript/TypescriptIn';
import TypescriptNull from './Typescript/TypescriptNull';
import TypescriptBarrel from './Typescript/TypescriptBarrel';
import TypescriptHoisting from './Typescript/TypescriptHoisting';
import TypescriptLiterals from './Typescript/TypescriptLiterals';
import TypescriptReadOnly from './Typescript/TypescriptReadOnly';
import TypescriptIndexSignature from './Typescript/TypescriptIndexSignature';
import TypescriptPartial from './Typescript/TypescriptPartial';
import TypescriptRequired from './Typescript/TypescriptRequired';
import TypescriptRecord from './Typescript/TypescriptRecord';
import TypescriptPick from './Typescript/TypescriptPick';
import TypescriptOmit from './Typescript/TypescriptOmit';
import TypescriptExclude from './Typescript/TypescriptExclude';
import TypescriptExtract from './Typescript/TypescriptExtract';
import TypescriptNonNullable from './Typescript/TypescriptNonNullable';
import TypescriptParameters from './Typescript/TypescriptParameters';
import TypescriptConstructorParameters from './Typescript/TypescriptConstructorParameters';
import TypescriptReturnType from './Typescript/TypescriptReturnType';
import TypescriptInstanceType from './Typescript/TypescriptInstanceType';
import TypescriptThisParameterType from './Typescript/TypescriptThisParameterType';
import TypescriptOmitThisParameter from './Typescript/TypescriptOmitThisParameter';
import TypescriptThisType from './Typescript/TypescriptThisType';
import TypescriptTypeVSInterface from './Typescript/TypescriptTypeVSInterface';
import FunctionalProgrammingHigherOrderFunctions from './FunctionalProgramming/FunctionalProgrammingHigherOrderFunctions';
import FunctionalProgrammingLaziness from './FunctionalProgramming/FunctionalProgrammingLaziness';
import FunctionalProgrammingFunctionOverloading from './FunctionalProgramming/FunctionalProgrammingFunctionOverloading';
import FunctionalProgrammingPartialApplication from './FunctionalProgramming/FunctionalProgrammingPartialApplication';
import FunctionalProgrammingCurrying from './FunctionalProgramming/FunctionalProgrammingCurrying';
import FunctionalProgrammingPipes from './FunctionalProgramming/FunctionalProgrammingPipes';
import FunctionalProgrammingComposition from './FunctionalProgramming/FunctionalProgrammingComposition';
import FunctionalProgrammingLenses from './FunctionalProgramming/FunctionalProgrammingLenses';
import FunctionalProgrammingPrisms from './FunctionalProgramming/FunctionalProgrammingPrisms';
import RxJsObservable from './RxJs/RxJsObservable';
import RxJsOperators from './RxJs/RxJsOperators';
import WebWorkersBroadcastChannelApi from './WebWorkers/WebWorkersBroadcastChannelApi';
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
                            <Route exact path='/design-patterns-prototype'>
                                <DesignPatternsPrototype />
                            </Route>
                            <Route exact path='/design-patterns-observer'>
                                <DesignPatternsObserver />
                            </Route>
                            <Route exact path='/design-patterns-decorator'>
                                <DesignPatternsDecorator />
                            </Route>
                            <Route exact path='/design-patterns-iterator'>
                                <DesignPatternsIterator />
                            </Route>
                            <Route exact path='/design-patterns-memento'>
                                <DesignPatternsMemento />
                            </Route>
                            <Route exact path='/design-patterns-strategy'>
                                <DesignPatternsStrategy />
                            </Route>
                            <Route exact path='/design-patterns-command'>
                                <DesignPatternsCommand />
                            </Route>
                            <Route exact path='/react-hooks-usecontext'>
                                <ReactHooksUseContext />
                            </Route>
                            <Route exact path='/react-hooks-useref'>
                                <ReactHooksUseRef />
                            </Route>
                            <Route exact path='/react-hooks-usecallback'>
                                <ReactHooksUseCallback />
                            </Route>
                            <Route exact path='/react-hooks-usedebugvalue'>
                                <ReactHooksUseDebugValue />
                            </Route>
                            <Route exact path='/react-hooks-useeffect'>
                                <ReactHooksUseEffect />
                            </Route>
                            <Route exact path='/react-hooks-useimperativehandle'>
                                <ReactHooksUseImperativeHandle />
                            </Route>
                            <Route exact path='/react-hooks-uselayouteffect'>
                                <ReactHooksUseLayoutEffect />
                            </Route>
                            <Route exact path='/react-hooks-usememo'>
                                <ReactHooksUseMemo />
                            </Route>
                            <Route exact path='/react-hooks-usereducer'>
                                <ReactHooksUseReducer />
                            </Route>
                            <Route exact path='/react-hooks-useState'>
                                <ReactHooksUseState />
                            </Route>
                            <Route exact path='/libraries-bigjs'>
                                <LibrariesBigJs />
                            </Route>
                            <Route exact path='/libraries-deep-equal'>
                                <LibrariesDeepEqual />
                            </Route>
                            <Route exact path='/libraries-immutablejs'>
                                <LibrariesImmutableJs />
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
                            <Route exact path='/typescript-union'>
                                <TypescriptUnion />
                            </Route>
                            <Route exact path='/typescript-intersection'>
                                <TypescriptIntersection />
                            </Route>
                            <Route exact path='/typescript-partial'>
                                <TypescriptPartial />
                            </Route>
                            <Route exact path='/typescript-required'>
                                <TypescriptRequired />
                            </Route>
                            <Route exact path='/typescript-record'>
                                <TypescriptRecord />
                            </Route>
                            <Route exact path='/typescript-pick'>
                                <TypescriptPick />
                            </Route>
                            <Route exact path='/typescript-omit'>
                                <TypescriptOmit />
                            </Route>
                            <Route exact path='/typescript-exclude'>
                                <TypescriptExclude />
                            </Route>
                            <Route exact path='/typescript-extract'>
                                <TypescriptExtract />
                            </Route>
                            <Route exact path='/typescript-nonnullable'>
                                <TypescriptNonNullable />
                            </Route>
                            <Route exact path='/typescript-parameters'>
                                <TypescriptParameters />
                            </Route>
                            <Route exact path='/typescript-constructorparameters'>
                                <TypescriptConstructorParameters />
                            </Route>
                            <Route exact path='/typescript-returntype'>
                                <TypescriptReturnType />
                            </Route>
                            <Route exact path='/typescript-instancetype'>
                                <TypescriptInstanceType />
                            </Route>
                            <Route exact path='/typescript-thisparametertype'>
                                <TypescriptThisParameterType />
                            </Route>
                            <Route exact path='/typescript-omitthisparameter'>
                                <TypescriptOmitThisParameter />
                            </Route>
                            <Route exact path='/typescript-thistype'>
                                <TypescriptThisType />
                            </Route>
                            <Route exact path='/typescript-iterator'>
                                <TypescriptIterator />
                            </Route> 
                            <Route exact path='/typescript-generators'>
                                <TypescriptGenerators />
                            </Route> 
                            <Route exact path='/typescript-asynchronous-generators'>
                                <TypescriptAsynchronousGenerators />
                            </Route>
                            <Route exact path='/typescript-callable'>
                                <TypescriptCallable />
                            </Route>   
                            <Route exact path='/typescript-tuple'>
                                <TypescriptTuple />
                            </Route>  
                            <Route exact path='/typescript-type-vs-interface'>
                                <TypescriptTypeVSInterface />
                            </Route>
                            <Route exact path='/typescript-in'>
                                <TypescriptIn />
                            </Route> 
                            <Route exact path='/typescript-hoisting'>
                                <TypescriptHoisting />
                            </Route> 
                            <Route exact path='/typescript-barrel'>
                                <TypescriptBarrel />
                            </Route> 
                            <Route exact path='/typescript-null'>
                                <TypescriptNull />
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
                            <Route exact path='/functional-programming-higher-order-functions'>
                                <FunctionalProgrammingHigherOrderFunctions />
                            </Route>  
                            <Route exact path='/functional-programming-laziness'>
                                <FunctionalProgrammingLaziness />
                            </Route>
                            <Route exact path='/functional-programming-function-Overloading'>
                                <FunctionalProgrammingFunctionOverloading />
                            </Route>
                            <Route exact path='/functional-programming-composition'>
                                <FunctionalProgrammingComposition />
                            </Route>
                            <Route exact path='/functional-programming-lenses'>
                                <FunctionalProgrammingLenses />
                            </Route>
                            <Route exact path='/functional-programming-prisms'>
                                <FunctionalProgrammingPrisms />
                            </Route>
                            <Route exact path='/functional-programming-partial-application'>
                                <FunctionalProgrammingPartialApplication />
                            </Route>
                            <Route exact path='/functional-programming-currying'>
                                <FunctionalProgrammingCurrying />
                            </Route>
                            <Route exact path='/functional-programming-pipes'>
                                <FunctionalProgrammingPipes />
                            </Route>
                            <Route exact path='/rxjs-observable'>
                                <RxJsObservable />
                            </Route>
                            <Route exact path='/rxjs-operators'>
                                <RxJsOperators />
                            </Route>
                            <Route exact path='/webworkers-broadcast-channel-api'>
                                <WebWorkersBroadcastChannelApi />
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
