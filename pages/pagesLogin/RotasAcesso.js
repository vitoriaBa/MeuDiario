import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Login from './Login';
import Cadastrar from './Cadastrar';
import Home from '../pagesApp/Home';

const Stack = createStackNavigator();



export default function Rotas(){
    return(
        <NavigationContainer>
<Stack.Navigator>
    <Stack.Screen name ="Login" component={Login} options={{ headerShown: false }}/>
    <Stack.Screen name ="Cadastrar" component={Cadastrar} options={{ headerShown: true }}/>
    <Stack.Screen name ="Home" component={Home} options={{ headerShown: false }}/>
</Stack.Navigator>
</NavigationContainer>
    );
}
