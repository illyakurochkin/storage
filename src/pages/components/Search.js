import React, {Component} from 'react';
import {Icon, Input} from 'semantic-ui-react';

class Search extends Component {
  render() {
    const {query, onChange} = this.props;
    
    return (
      <Input icon placeholder='Search...'>
        <input value={query} onChange={e => onChange(e.target.value)}/>
        <Icon name='search'/>
      </Input>
    );
  }
}

export default Search;
