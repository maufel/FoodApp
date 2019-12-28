import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createDrawerNavigator} from 'react-navigation-drawer';
import HomeScreen from '../screens/Home/HomeScreen';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import RecipeScreen from '../screens/Recipe/RecipeScreen';
import RecipesListScreen from '../screens/RecipesList/RecipesListScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import IngredientScreen from '../screens/Ingredient/IngredientScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import IngredientsDetailsScreen from '../screens/IngredientsDetails/IngredientsDetailsScreen';

const DrawerStack = createDrawerNavigator(
    {
      Home: HomeScreen,
      Categories: CategoriesScreen,
      Recipe: RecipeScreen,
      RecipesList: RecipesListScreen,
      Ingredient: IngredientScreen,
      Search: SearchScreen,
      IngredientsDetails: IngredientsDetailsScreen
    },
    {
      initialRouteName: 'Home',
      // headerMode: 'float',
      defaulfNavigationOptions: ({ navigation }) => ({
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
          alignSelf: 'center',
          flex: 1,
          //fontFamily: 'FallingSkyCond'
        }
      })
    }
);

export default AppContainer = createAppContainer(DrawerStack);

console.disableYellowBox = true;