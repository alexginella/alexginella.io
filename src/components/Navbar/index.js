import React from 'react'
import {AppBar, Tabs, Tab} from '@material-ui/core'
import { red } from '@material-ui/core/colors';

class Navbar extends React.Component {
  render() {
    return (
      <AppBar title="My App">
        <Tabs>
          <Tab label="Resume" />
          <Tab label="About Me" />
          <Tab label="Memes" />
          <Tab label="Cool Stuff" />
        </Tabs>
      </AppBar>
    )
  }
}

export default Navbar;
//React.render(<Navbar />, document.body)