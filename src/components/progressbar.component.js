import React, { Component } from 'react';
import LinearProgress from 'material-ui/LinearProgress';

export default class Progressbar extends Component {

    render() {
        return(
            <LinearProgress mode="determinate" value={this.props.percent} />
        )
    }
}
