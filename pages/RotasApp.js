import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import Home from './Home';
import CadastrarDiario from './CadastrarDiario';
import AlterarDiario from './AlterarDiario';

const Stack = createStackNavigator();



export default function RotasApp(){
    return(
      //  <NavigationContainer>
<Stack.Navigator>
    <Stack.Screen name ="Home" component={Home} options={{ headerShown: false }}/>
    <Stack.Screen name ="CadastrarDiario" component={CadastrarDiario} options={{ headerShown: true }}/>
    <Stack.Screen name ="AlterarDiario" component={AlterarDiario} options={{ headerShown: false }}/>
</Stack.Navigator>
//</NavigationContainer>
    );
}
