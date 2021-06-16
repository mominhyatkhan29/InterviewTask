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
          eqspecs: "",
          check1: true,
          check2: true,
          check3: true,
        }
    }
    HourlyRateHandler = (e) => {
            this.setState({
                HourlyRate : e.target.value,
            })   
    }

    exsdHandler = (e) => {
      this.setState({
          exsd: e.target.value
      })
  }
    careerLevelHandler = (e) => {
      this.setState({
          careerLevel: e.target.value,
          // check2: true
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

  submitHandler = (e) => {
    if(this.state.HourlyRate < 10  || this.state.HourlyRate ==""){
      e.preventDefault();
      this.setState({
        check1 : false
      })
      alert("less than 10 not allowed")
  }
  if(this.state.careerLevel == "") {
    e.preventDefault();
    this.setState({
      check2 : false
    })
  }
  if(this.state.gender == "") {
    e.preventDefault();
    this.setState({
      check3 : false
    })
  }
  
  }

  

  render(){
    const {classes} = this.props;
    return (
        <form onSubmit={(e)=>{this.goHandler(e)}} className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField
              required
              className={this.state.check1 ? "": `${classes.err}`}
              style={{width: '40%'}}
              type="number"
              id="outlined-required"
              placeholder="Enter value"
              label="Hourly Rate"
              variant="outlined"
              onChange={value => {this.HourlyRateHandler(value)}}
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
              className={this.state.check2 ? "": `${classes.err}`}
              style={{width: '40%'}}
              id="outlined-required"
              label="Career Level"
              placeholder="Enter value"
              variant="outlined"
              onChange={value=>{this.careerLevelHandler(value)}}
            />
            
            <TextField
              required
              className={this.state.check3 ? "": `${classes.err}`}
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
                    onClick={e=>{this.submitHandler(e)}}
                    style={{width: '20%', height: '20%'}}>
                    Next
                </Button>   
            </div>
        </form>
      );
    

  }
    }  
  

export default withStyles(styles) (CandidateType);
