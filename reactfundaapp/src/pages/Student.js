import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Student extends Component{
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>Student Data
                  <Link to={'add-student'} className="btn btn-primary btn-sm float-end">Add</Link>
                </h4>
              </div>
              <div className="card-body">

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Student;
