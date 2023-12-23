import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { NaviBar } from './components/main/Navibar';
import { Home } from './components/main/Home';
import { ListPoet } from './components/searchPoet/ListPoet';
import { Authors } from './components/authors/Authors';
import { Yakub } from './components/yakub/Yakub'
import { Yanka } from './components/yanka/Yanka'
import { Nil } from './components/nil/Nil'
import { Korotky } from './components/korotky/Korotky'
import { Maks } from './components/maks/Maks'
import { Anton } from './components/authors/Anton'

function App() {
  return (
    <BrowserRouter basename="/readbel">
      <NaviBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/listpoet" component={ListPoet} />
        <Route path="/about" component={Authors} />
        <Route path="/anton" component={Anton} />
        <Route path="/yakub" component={Yakub} />
        <Route path="/yanka" component={Yanka} />
        <Route path="/nil" component={Nil} />
        <Route path="/korotky" component={Korotky} />
        <Route path="/maks" component={Maks} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
