import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/home/Home';
import Quiz from './pages/quiz/Quiz';
import Result from './pages/result/Result';

import DefaultLayout from './layouts/default';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        </Route>

        <Route path="/quiz">
          <DefaultLayout>
            <Quiz />
          </DefaultLayout>
        </Route>

        <Route path="/result">
          <DefaultLayout>
            <Result />
          </DefaultLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}