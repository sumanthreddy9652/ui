import React, { Component } from 'react';

class ButtonGroup extends Component{
    render() {
       return(
          <button-group-component>
          <button-component
            rci-disabled="false"
            rci-name="Left"
            rci-class="btn btn-primary btn-sm"
          ></button-component>
          <button-component
            rci-disabled="false"
            rci-name="Middle"
            rci-class="btn btn-primary btn-sm"
          ></button-component>
          <button-component
            rci-disabled="false"
            rci-name="Right"
            rci-class="btn btn-primary btn-sm"
          ></button-component>
        </button-group-component>
       );
    }
}

export default ButtonGroup;