import React from 'react';
import { Meteor } from 'meteor/meteor';
import { styles } from './hello.mss';

export class App extends React.Component {
    render() {
        return (
          <h1 className={styles.hello}>React Example!</h1>
        )
    }
}