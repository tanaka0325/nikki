import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import DailyList from './components/DialyList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene
          key="login"
          component={LoginForm}
          title="please login"
        />
      </Scene>

      <Scene key="main">
        <Scene
          key="dailyList"
          component={DailyList}
          title="Daily List"
          initial
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
