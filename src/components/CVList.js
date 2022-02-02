import React, {Component} from 'react';
import {getCVS} from "../api/apiCalls";
import CvListItem from "./CVListItem";


class CvList extends Component {

    state = {
        page: {
            content: [],
            size: 10,
            number: 0
        }
    };

    componentDidMount() {
        this.loadCvs();
    }

    onClickNext = () => {
        const nextPage = this.state.page.number + 1;
        this.loadCvs(nextPage);
    }
    onClickPrevious = () => {
        const previousPage = this.state.page.number - 1;
        this.loadCvs(previousPage);
    }

    loadCvs = page => {
        getCVS(page).then(response => {
            this.setState({
                page: response.data
            });
        });
    }

    render() {
        const {content: cvs, last, first} = this.state.page;
        return (
            <div className="card">
                <h3 className="card-header text-center">All Resumes</h3>
                <div className="row text-center fw-bold">
                    <div className="col-sm-1">ID</div>
                    <div className="col-sm-2">NAME</div>
                    <div className="col-sm-3">LASTNAME</div>
                    <div className="col-sm-4">EMAIL</div>
                    <div className="col-sm-2">PHONE</div>
                </div>
                <div className="list-group-flush justify-content-between">
                    {cvs.map(cv => (
                        <CvListItem key={cv.name} cv={cv}/>
                    ))}
                </div>
                <div>
                    {first === false &&
                    (<button className="btn btn-sm btn-light " onClick={this.onClickPrevious}>previous</button>)}
                    {last === false &&
                    (<button className="btn btn-sm btn-light " onClick={this.onClickNext}>next</button>)}
                </div>
            </div>
        );
    }
}

export default CvList;