import React, {useState} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ShiftTimings from '../ShiftTiming/ShiftTime';
import JobInfoForm from '../Jobinfo/component';
import CandidateType from '../CandidateType/components';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#635ee7',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const Styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
    
  },
  demo2: {
    backgroundColor: '#2e1534',
  },
}));

function Task2() {
  const classes = Styles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <div className={classes.root}>
      <h1 style={{color: '#336EFF'}}>CREATE A JOB POST</h1>
      <p>Complete the following steps to create an effective job post</p>
      <hr/>
      <div className={classes.demo1}>
        <AntTabs value={value} aria-label="ant example">
                <AntTab href="/task2/jobinfoform" label="Job Information"/>
                <AntTab href="/task2/candidatetype" label="Candidate Type"/>
                <AntTab href="/task2/shifttimings" label="Shift Timings" />
          </AntTabs>
        <div>
        {/* <CandidateType></CandidateType> */}
          {/* <JobInfoForm ></JobInfoForm> */}
          </div>
        <Typography className={classes.padding} />
      </div>
      <Router>
      <Route path="/task2/jobinfoform" component={JobInfoForm}/>
        <Route path="/task2/candidatetype" component={CandidateType}/>
        <Route path="/task2/shifttimings" component={ShiftTimings}/>
      </Router>
    </div>
  );
}

export default (Task2);
