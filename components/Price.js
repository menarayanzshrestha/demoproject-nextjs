import React from "react";
class Price extends React.Component {
    state = {
      currency: 'USD'
    }
  
    render() {

        const {bpi} = this.props;
  
      return (
        <div>
          <ul className="list-group">
            <li className="list-group-item">
                Bitcoin rate for {bpi && bpi[this.state.currency].description} : 
            <span className="badge badge-primary"> { bpi && bpi[this.state.currency].code}</span> 
            <strong> {bpi && bpi[this.state.currency].rate}</strong>
          </li>
          </ul>
          <br/>
          <select onChange={e => this.setState({currency: e.target.value})} className="form-control">
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
      );
    }
  }
  
  export default Price;