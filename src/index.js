import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
//import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer)

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
  


//registerServiceWorker();

