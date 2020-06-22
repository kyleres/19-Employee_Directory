import React, { Component } from "react";
import ResultList from "./ResultList";
import API from "../utils/API";

class EmployeesContainer extends Component {
    state = {
        results: []
    };

    componentDidMount() {
        this.searchEmployees();
    };

    searchEmployees = () => {
        API.search()
            .then(res => {
                console.log(res.data.results);
                let list = res.data.results;
                this.setState({
                    results: list
                });
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <ResultList results={ this.state.results } />
            </div>
        )
    }
};

export default EmployeesContainer;