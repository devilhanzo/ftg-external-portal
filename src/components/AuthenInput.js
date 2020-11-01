/*
 * @Author: puck.solo 
 * @Date: 2017-10-07 22:49:10 
 * @Last Modified by: puck.solo
 * @Last Modified time: 2020-11-02 00:34:58
 */

import React from 'react';

export class AuthenInput extends React.Component {
    render() {
      return (
          <input className={this.props.className}
            type={this.props.type}
            id={this.props.id}
            name={this.props.name}
            value={this.props.value}
            onChange={this.props.onChange}
            spellCheck="false"
            required
            autoComplete="false"
            placeholder={this.props.placeholder}
          />);
    }
  }
