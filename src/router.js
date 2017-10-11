import React from 'react';
import {IndexRoute,Switch,Redirect, Router, Route } from 'dva/router';
import Login from './routes/Login';

import CusCenters from  './routes/cus_centers';
import CusCentersContent from  './components/cuscenters_content';

import Doctors from  './routes/doctors';
import Test4 from './components/doctors/test4';
import Test2 from  './components/doctors/test2';

import Base2 from './base2.js'


function RouterConfig({ history }) {
  return (
    <Router history={history}>

 
      <Route path="/" component={Base2}>
      {/* 典型的 react-router 2.X写法 */}
		            <IndexRoute component={CusCenters}/>  


              <Route path="/cus_centers" component={CusCenters} >
                    <IndexRoute component={CusCentersContent}/> 
                    <Route path="/cus_centers/cuscenters_content" component={CusCentersContent} />>
                </Route>

                <Route path="/doctors" component={Doctors} >
                      <IndexRoute component={Test2}/>
                      <Route path="/doctors/test2" component={Test2} />
                      <Route path="/test4" component={Test4} />
                </Route>
		  </Route>

  
     
      
    
    </Router>
  );
}

export default RouterConfig;

// import React from 'react'
// import PropTypes from 'prop-types'
// import { Router } from 'dva/router'
// import Login from './routes/Login'
// import Main from './routes/Main'
//
// const registerModel = (app, model) => {
//   if (!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
//     app.model(model)
//   }
// }
//
// const Routers = function ({ history, app }) {
//   const routes = [
//     {
//       path: '/',
//       component: Login,
//       getIndexRoute(location, callback) {
//         require.ensure([], function (require) {
//           callback(null, require('./routes/Login'))
//         })
//       },
//       // getIndexRoute (nextState, cb) {
//       //   require.ensure([], require => {
//       //     registerModel(app, require('./models/app'))
//       //     cb(null, { component: require('./routes/Login') })
//       //   })
//       // },
//       // getChildRoutes(location, callback) {
//       //    require.ensure([], function (require) {
//       //      callback(null, [
//       //        require('./routes/Main')
//       //      ])
//       //    })
//       //  },
//       // getComponent(nextState, cb) {
//       //   require.ensure([], (require) => {
//       //     cb(null, require('components/Main'))
//       //   }, 'Main')
//       // },
//       // childRoutes: [
//       //   require('./routes/Main')
//       // ]
//       childRoutes: [
//         {
//           getComponent (nextState, cb) {
//             require.ensure([], require => {
//               registerModel(app, require('./models/main'))
//               cb(null, require('./routes/Main'))
//             },'main')
//           }}
//         ],
//     },
//   ]
//
//   return <Router history={history} routes={routes} />
// }
//
// Routers.propTypes = {
//   history: PropTypes.object,
//   app: PropTypes.object,
// }
//
// export default Routers
