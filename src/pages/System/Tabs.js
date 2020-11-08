import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Faq from './FAQ'
import GiveFeedback from './GiveFeedback'
import GeneralSettings from './GeneralSettings'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Ratings from './Ratings';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
        <div className="tabs">
            <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab label="Give Feedback" {...a11yProps(0)} />
                <Tab label="Settings" {...a11yProps(1)} />
                <Tab label="Help and Support" {...a11yProps(2)} />
                <Tab label="Display Preference" {...a11yProps(3)} />
            </Tabs>
        </div>
        <div className="w-100 tab-panel-set h-100">
            <TabPanel className="tab-panel" value={value} index={0}>
                <GiveFeedback></GiveFeedback>
            </TabPanel>
            <TabPanel className="tab-panel" value={value} index={1}>
                <GeneralSettings></GeneralSettings>
            </TabPanel>
            <TabPanel className="tab-panel" value={value} index={2}>
                <h1>FAQ (How it works)</h1>
                <Faq></Faq>
            </TabPanel>
            <TabPanel className="tab-panel" value={value} index={3}>
                <h1>Please Rate Us</h1>
                <Ratings></Ratings>
            </TabPanel>
        </div>
    </div>
  );
}
