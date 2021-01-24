import {Route, Redirect} from 'react-router-dom';
import {useAuth} from './authContext';

function PrivateRoute({children, ...rest}) {
    const auth = useAuth();
    return <Route {...rest} render={({location}) => {
        if(auth.user == null) return <p>Check authorization access...</p>
        return auth.user ? children : <Redirect to={{
            pathname: '/signin',
            state: { from: location }
        }} />
    }} />
}

export default PrivateRoute;