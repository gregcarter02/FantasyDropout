import React, { Component } from "react";
import { Route } from "react-router-dom";
import ForecastContainer from "./components/forecast/ForecastContainer";
import PlayerRankingsContainer from "./components/playerRankings/PlayerRankingContainer";
import { Home } from "./components/Home";
import { Layout } from "./components/shared/Layout";

export default class App extends Component {
  // static displayName = App.name;

  public render() {
    return (
      <Layout>
        <Route exact={true} path="/" component={Home} />
        <Route path="/forecast" component={ForecastContainer} />
        <Route path="/playerRankings" component={PlayerRankingsContainer} />
      </Layout>
    );
  }
}



