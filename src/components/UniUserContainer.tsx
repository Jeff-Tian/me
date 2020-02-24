import { Provider } from "@tarojs/redux";
import configStore from '../store/uni-user';

const store = configStore()

const UniUserContainer = ({ children }) => <Provider store={store}>{children}</Provider>

export default UniUserContainer;