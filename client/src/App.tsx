import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import AppRouter from './routers/AppRouter';
import { persistor, store } from './store';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <div className="app-container">
                    <AppRouter />
                </div>
            </PersistGate>
        </Provider>
    );
};

export default App;
