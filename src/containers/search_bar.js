import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDust } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false, 
      error: '',
      term: ''
    };
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.state)
    this.props.fetchDust(this.state.term);
    this.setState({term: ''});
  }
  render() {
    const clsName = (this.props.loading) ? 
      'btn btn-primary loading' : 'btn btn-primary';
    return (
      <form className='search-bar' onSubmit={event => this.onSubmit(event)}>
        <div className='input-group mb-3'>
          <input 
            onChange={event => this.setState({term: event.target.value})}
            type='text' className='form-control' placeholder='City' 
            value={this.state.term}
          />
          <div className='input-group-append'>
            <button className={clsName} type='button'>
              <i className='fa fa-spinner fa-spin' />
              <span>Search</span>
            </button>
          </div>
        </div>
      </form>
    );
  }
}


function mapStateToProps(state) {
  return { loading: state.dust.loading, error: state.dust.error };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchDust }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);