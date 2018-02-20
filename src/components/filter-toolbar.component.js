import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';

export default class FilterToolbar extends Component {

    componentWillMount() {
        this.getFilterValue(this.props.location);
    }

    putFilter = () => {
        this.props.saveFilter(this.textField.input.value);
        if (this.textField.input.value)
            this.props.history.push(`${this.textField.input.value}`);
        else this.props.history.push(' ');
    }

    toggleCheckbox = () => {
        this.props.toggleFilter();
    }

    resetTextField = () => {
        this.props.saveFilter('');
        this.props.history.push(' ');
        this.textField.input.value = '';
    }

    getFilterValue = location => {
        if (location.search) {
            const paramStrings = location.search.slice(1).split('&');
            for (const paramString of paramStrings) {
                const param = paramString.split('=');
                if (param[0] === 'filter') this.props.saveFilter(param[1]);
            }
        }
    }

    render() {
        return(
            <section className='filterToolBar'>
                <div>
                    <Checkbox
                        label='Show done'
                        checked={this.props.filter.active}
                        onCheck={this.toggleCheckbox}
                    />
                </div>
                <TextField
                    ref={(input) => {this.textField = input }}
                    hintText='Enter a filter'
                    floatingLabelText='Search'
                    value={this.props.filter.title}
                    onChange={this.putFilter}
                />
                <i className="material-icons close" onClick={this.resetTextField}>close</i>
            </section>
        )
    }
}