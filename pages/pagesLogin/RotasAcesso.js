import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pagesApp/Home';
import Login from './Login';
import Cadastrar from './Cadastrar';

const Stack = createStackNavigator();



export default function Rotas(){
    return(
<Stack.Navigator>
    <Stack.Screen name ="Login" component={Login} options={{ headerShown: false }}/>
    <Stack.Screen name ="Cadastrar" component={Cadastrar} options={{ headerShown: true }}/>
    <Stack.Screen name ="Home" component={Home} options={{ headerShown: false }}/>
</Stack.Navigator>
    );
}
