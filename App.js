import { Provider } from 'react-redux';
import { store } from './redux/store';

import { NavigationContainer } from '@react-navigation/native';
import Main from './screens/MainComponent';

export default function App() {
    return (
        <NavigationContainer>
            <Provider store={store}>
                <Main />
            </Provider>
        </NavigationContainer>
    );
}
