import './App.css';
import './vistas/Home/Home';
import AppRouter from './router/AppRouter';
import { ContextoDeLogin } from './contexts/ContextoDeLogin';

export const authInitialState = () => {
  return {isAuthenticated: false, user: null};
};

export const authTypes = {
  login: "login[auth]",
  logout: "logout[auth]"
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case authTypes.login:
      return {...state, isAuthenticated: true, user: action.payload,}
      break;
    case authTypes.logout:
      return {...state, isAuthenticated: false, user: null,}
      break;
    default:
      return state;
      break;
  }
}

function App() {

  const [state, setState] = useState({});
  const [state, dispatch] = useReducer(authReducer, {}, authInitialState);

  dispatch({
    type: 'login',
    payload: user,
  });

  return (
    <>
      <ContextoDeLogin.Provider
       value={{estaLogeado: false, userId: null, username: ""}}>
        <AppRouter />
      </ContextoDeLogin.Provider>
    </>
  );
}

export default App;
