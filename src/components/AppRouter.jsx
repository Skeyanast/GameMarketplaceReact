import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import { privateRoutes, publicRoutes } from '../router/routes';
import { AuthContext } from '../context';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if (isLoading) {
        return <Loader />
    }

    return ( 
        isAuth
            ?
            <div>
                <Routes>
                    {privateRoutes.map(route =>
                        <Route
                            exact={route.exact}
                            element={route.element}
                            path={route.path}
                            key={route.path}
                        />
                    )}
                </Routes>
            </div>
            :
            <div>
                <Routes>
                    {publicRoutes.map(route =>
                        <Route
                            exact={route.exact}
                            element={route.element}
                            path={route.path}
                            key={route.path}
                        />
                    )}
                </Routes>
            </div>
        
    );
}

export default AppRouter;