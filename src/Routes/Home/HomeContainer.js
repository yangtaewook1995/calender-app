import React from "react";
import HomePresenter from "./HomePresenter";
import {
  getTodayDate,
  getTodayMonth,
  getTodayYear,
  getFirstDay,
  getLastDate,
} from "../../calcDate";

class HomeContainer extends React.Component {
  state = {
    nowDate: null,
    nowMonth: null,
    nowYear: null,
    lastDate: null,
    firstDay: null,
  };

  getDate = (year, month) => {
    return getLastDate(year, month);
  };

  componentDidMount() {
    const nowDate = getTodayDate();
    const nowMonth = getTodayMonth();
    const nowYear = getTodayYear();
    const lastDate = getLastDate(nowYear, nowMonth);
    const firstDay = getFirstDay(nowYear, nowMonth);

    this.setState({
      nowDate,
      nowMonth,
      nowYear,
      lastDate,
      firstDay,
    });
  }

  render() {
    return (
      <HomePresenter
        year={this.state.nowYear}
        month={this.state.nowMonth}
        date={this.state.nowDate}
        lastDate={this.state.lastDate}
        firstDay={this.state.firstDay}
        getLastDate={this.getDate}
        getFirstDay={this.getFirstDay}
      ></HomePresenter>
    );
  }
}

export default HomeContainer;
