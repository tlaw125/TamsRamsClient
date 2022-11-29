import React from "react";
import { Link } from 'react-router-dom'
import { SelectPicker } from 'rsuite';
import "./index.css";

function StatePicker(props) {
  const states = [
    {
      "label": "Alabama",
      "value": "AL"
    },
    {
      "label": "Arizona",
      "value": "AZ"
    },
    {
      "label": "Arkansas",
      "value": "AR"
    },
    {
      "label": "California",
      "value": "CA"
    },
    {
      "label": "Colorado",
      "value": "CO"
    },
    {
      "label": "Connecticut",
      "value": "CT"
    },
    {
      "label": "Delaware",
      "value": "DE"
    },
    {
      "label": "Florida",
      "value": "FL"
    },
    {
      "label": "Georgia",
      "value": "GA"
    },
    // {
    //   "label": "Hawaii",
    //   "value": "HI"
    // },
    {
      "label": "Idaho",
      "value": "ID"
    },
    {
      "label": "Illinois",
      "value": "IL"
    },
    {
      "label": "Indiana",
      "value": "IN"
    },
    {
      "label": "Iowa",
      "value": "IA"
    },
    {
      "label": "Kansas",
      "value": "KS"
    },
    {
      "label": "Kentucky",
      "value": "KY"
    },
    {
      "label": "Louisiana",
      "value": "LA"
    },
    {
      "label": "Maine",
      "value": "ME"
    },
    {
      "label": "Maryland",
      "value": "MD"
    },
    {
      "label": "Massachusetts",
      "value": "MA"
    },
    {
      "label": "Michigan",
      "value": "MI"
    },
    {
      "label": "Minnesota",
      "value": "MN"
    },
    {
      "label": "Mississippi",
      "value": "MS"
    },
    {
      "label": "Missouri",
      "value": "MO"
    },
    {
      "label": "Montana",
      "value": "MT"
    },
    {
      "label": "Nebraska",
      "value": "NE"
    },
    {
      "label": "Nevada",
      "value": "NV"
    },
    {
      "label": "New Hampshire",
      "value": "NH"
    },
    {
      "label": "New Jersey",
      "value": "NJ"
    },
    {
      "label": "New Mexico",
      "value": "NM"
    },
    {
      "label": "New York",
      "value": "NY"
    },
    {
      "label": "North Carolina",
      "value": "NC"
    },
    {
      "label": "North Dakota",
      "value": "ND"
    },
    {
      "label": "Ohio",
      "value": "OH"
    },
    {
      "label": "Oklahoma",
      "value": "OK"
    },
    {
      "label": "Oregon",
      "value": "OR"
    },
    {
      "label": "Pennsylvania",
      "value": "PA"
    },
    {
      "label": "Rhode Island",
      "value": "RI"
    },
    {
      "label": "South Carolina",
      "value": "SC"
    },
    {
      "label": "South Dakota",
      "value": "SD"
    },
    {
      "label": "Tennessee",
      "value": "TN"
    },
    {
      "label": "Texas",
      "value": "TX"
    },
    {
      "label": "Utah",
      "value": "UT"
    },
    {
      "label": "Vermont",
      "value": "VT"
    },
    {
      "label": "Virginia",
      "value": "VA"
    },
    {
      "label": "Washington",
      "value": "WA"
    },
    {
      "label": "Washington D.C.",
      "value": "DC"
    },
    {
      "label": "West Virginia",
      "value": "WV"
    },
    {
      "label": "Wisconsin",
      "value": "WI"
    },
    {
      "label": "Wyoming",
      "value": "WY"
    }
  ];

  // const defaultValue = (props.defaultValue ? props.defaultValue : "State/Region");
  // console.log("props.dv: " + props.defaultValue);
  // console.log("dv: " + defaultValue);

  const [curState, setCurState] = React.useState(props.defaultValue ? props.defaultValue : "default");

  const handleInputChange = e => {
    // console.log(e.target.value);
    setCurState(e.target.value);
  }
  
  let opts = [];

  opts.push((states.map((state) => {
    // console.log("label:" + state.label + " val: " + state.value);
    return (
      <option key={state.label} value={state.value} className="state-option">
            {state.label}
          </option>)
  })));

  const StatePickerInstance = () => {
    return (
        <select name="state" value={curState} onChange={e => handleInputChange(e)} className={(curState == "default" ? "default-state-select" : "state-select")}>
            <option value={curState} disabled hidden className="state-option">{(curState == "default" ? "State/Region" : curState)}</option>
            {opts}
        </select>

        // <SelectPicker valueKey="value" name="state" labelKey="label" data={states}

    );
  };

  return (
    <StatePickerInstance />
  );
}

export default StatePicker;