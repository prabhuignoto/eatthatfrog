import React, {Fragment, Component} from 'react';
import PropType from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

class DashboardItem extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            redirect: false,
        };
        this.handleClick= this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            redirect: true,
        })
    }

    render() {
        return (<div className="dashboard-item-container" onClick={this.handleClick}>
                    {this.state.redirect ? <Redirect to={this.props.path}></Redirect>: null}
                    <div className="dashboard-item">
                        <i className={`dboard-item-icon-${this.props.name}`}></i>
                        <span className="dboard-item-label">
                            {this.props.label}
                        </span>
                    </div>
                </div>);
    }
}

DashboardItem.propType = {
    name: PropType.string.isRequired,
    label: PropType.string.isRequired,
}

export default DashboardItem;