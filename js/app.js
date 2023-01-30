import App from './components/App';
import AppHomeRoute from './routes/AppHomeRoute';
require("babel-polyfill");

React.render(
  <Relay.RootContainer
    Component={App}
    route={new AppHomeRoute()}
  />,
  document.getElementById('root')
);
