import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import deepOrange from '@material-ui/core/colors/deepOrange';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import LessonList from './LessonList';

import LessonDetails from './LessonDetails';

import Footer from '../../components/Footer';

import './app.css';

const theme = createMuiTheme({
  palette: {
    primary: { main: deepPurple[700] },
    secondary: deepOrange,
  },
});


class App extends PureComponent {
  render() {
    const { appInfo } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <AppBar position="static" className="header">
          <Toolbar variant="dense">
            <Typography variant="title" color="inherit" className="header-title">600 ESSENTIAL WORDS</Typography>
          </Toolbar>
        </AppBar>
        <div className="block-body-content">
          <Switch>
            <Route exact path="/" component={() => <LessonList lessons={appInfo.lessons ? appInfo.lessons : []} />} />
            {
              appInfo.lessons.map((lesson) => (
                <Route key={lesson.id} path={lesson.routerURL} component={() => <LessonDetails key={lesson.id} lesson={lesson} />} />
              ))
            }
          </Switch>
        </div>
        <Footer />
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  appInfo: state.appInfo,
});

// const mapDispatchToProp = (dispatch) => ({

// });

export default withRouter(connect(mapStateToProps, null)(App));
