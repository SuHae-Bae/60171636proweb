import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDust } from '../actions/index';

//dust를 넣어야함. city넣으면 계속안뜸
class DustList extends Component {

  renderArea(dust) {
    console.log(dust)
    return (
      <tr key={dust.data.idx}>
        <td>{dust.data.city.name}</td>
        <td>{dust.data.time.s}></td>
        <td>{dust.data.aqi}</td>
      </tr>
    );
  };

  handleError() {
    if (this.props.error) {
      return (
        <div className="alert alert-danger" role="alert">
          {this.props.error.message}
        </div>
      );
    }
  }


//더블클릭은 render에서 tr에 줘야함
  render() {
    return (
      <div className='dust-list' >
        { this.handleError() }
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>City</th>
              <th>Time</th>
              <th>AQI(Air Quality Index)</th>
            </tr>
          </thead>
          <tbody>
            {this.props.dust.map(this.renderArea)}
            {console.log(this.props.dust)}
          </tbody>
        </table>
      </div>
    );
  }
}

//데이터를 dust로 받아옴
function mapStateToProps(state) {
  return { 
    dust: state.dust.data,  
    error: state.dust.error
  };
}

export default connect(mapStateToProps)(DustList);