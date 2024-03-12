import React from 'react';
import {Routes, Route} from 'react-router-dom';

import { privateRoutes, publicRoutes } from '../router/routes';

const AppRouter = () => {
    const isAuth = false;
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
                        />
                    )}
                </Routes>
            </div>
        
    );
}

export default AppRouter;