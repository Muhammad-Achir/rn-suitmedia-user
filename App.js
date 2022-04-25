import { StyleSheet } from 'react-native';

import storeState from './redux/store'
import { Provider } from 'react-redux';
import Navigations from './components/Navigations';

export default function App() {

  return (
    <Provider store={storeState}>
      <Navigations />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
