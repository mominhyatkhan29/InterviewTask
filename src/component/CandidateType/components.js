import React, { Component } from 'react';
import {TextField, withStyles, Button} from '@material-ui/core';
import {styles} from './styles';



class CandidateType extends Component {
    constructor(props){
        super(props);
        this.state = {
          HourlyRate: "",
          exsd: "",
          careerLevel: "",
          gender: "",
          eqspecs: ""
        }
    }
    HourlyRateHandler = (e) => {
            this.setState({
                HourlyRate : e.target.value,
            })   
    }
    err = () => {
        if(this.state.HourlyRate < 10){
            alert("HOURLY RATE can not be less than 10")
        } 
    }

    exsdHandler = (e) => {
      this.setState({
          exsd: e.target.value
      })
  }
    careerLevelHandler = (e) => {
      this.setState({
          careerLevel: e.target.value
      })
  }
    genderHandler = (e) => {
      this.setState({
          gender: e.target.value
      })
  }
    eqspecsHandler = (e) => {
      this.setState({
          eqspecs: e.target.value
      })
  }

  render(){
    const {classes} = this.props;
    return (
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField
              required
              style={{width: '40%'}}
              type="number"
              id="outlined-required"
              placeholder="Enter value"
              label="Hourly Rate"
              variant="outlined"
              onChange={value => {this.HourlyRateHandler(value)}}
              onBlur={this.err}
            />
            <TextField
                required
                id="date"
                style={{width: '40%'}}
                label="Expected Start Date"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
                variant="outlined"
                onChange={value=>{this.exsdHandler(value)}}
            />
            <TextField
              required
              style={{width: '40%'}}
              id="outlined-required"
              label="Career Level"
              placeholder="Enter value"
              variant="outlined"
              onChange={value=>{this.careerLevelHandler(value)}}
            />
            
            <TextField
              required
              style={{width: '40%'}}
              id="outlined-required"
              label="Gender"
              placeholder="Enter value"
              variant="outlined"
              onChange={value=>{this.genderHandler(value)}}
            />
            <br></br>
            <TextField
              required
              style={{width: '85%', height: '60%'}}
              id="outlined-required"
              label="Equipment specification"
              placeholder="Enter Text"
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
              onChange={value=>{this.eqspecsHandler(value)}}
            /> 
          </div>
          <div className={classes.buttongroup}>
                <Button
                    href="./jobinfoform" 
                    size="large"
                    className={classes.margin}
                    color="default"
                    variant="contained"
                    style={{width: '20%', height: '20%'}}>
                  Previous
                </Button>
                
                <Button
                    href="./ShiftTimings" 
                    size="large"
                    className={classes.margin}
                    color="primary"
                    variant="contained"
                    type="submit"
                    style={{width: '20%', height: '20%'}}>
                    Next
                </Button>   
            </div>
        </form>
      );
    

  }
    }  
  

export default withStyles(styles) (CandidateType);
