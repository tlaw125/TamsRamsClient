import React from "react";
import { Pagination } from 'rsuite';
import "./index.css";

class Pages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey
    });
  }

  render() {
    return (
      <div className="pagination">
        <Pagination
          prev
          last
          next
          first
          size="sm"
          pages={3}
          activePage={this.state.activePage}
          onSelect={this.handleSelect}
        />
        </div>
    );
  }
}

export default Pages;