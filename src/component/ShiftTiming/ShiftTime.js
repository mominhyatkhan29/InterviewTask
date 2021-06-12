import React, { Component } from 'react';
import {TextField, withStyles, Button, Grid} from '@material-ui/core';

import {styles} from './styles';
import { findAllByDisplayValue } from '@testing-library/dom';


class ShiftTime extends Component {
    constructor(props){
        super(props);
        this.state = {
          date: "",
          sunFrom: "",
          sunTo: "",
          monFrom: "",
          monTo: "",
          tuesFrom: "",
          tuesTo: "",
          wedFrom: "",
          wedTo: "",
          thursFrom: "",
          thursTo: "",
          friFrom: "",
          friTo: "",
          satTo: "",
          satFrom:"",
          satActive: false,
          tuesActive: false,
          wedActive: false,
          thursActive: false,
          friActive: false,
          satActive: false,
          sunActive: false,
          counter: 0,
        }
    }
    

    mHandler = () => {
        const {monActive,counter} = this.state
        this.setState({ monActive: !monActive},
            ()=>{
                if (this.state.monActive === true){
                   this.setState({
                   counter: this.state.counter + 1
                 },()=>{console.log(`final counter check${this.state.counter}`)})
                }
                else if(this.state.monActive === false){
                    this.setState({
                        counter: this.state.counter - 1    
                    },()=>{console.log(`final counter check${this.state.counter}`)});
                }
                console.log(`final DAY check${this.state.monActive}`)
                
            }
        )
}
                  
    tuesHandler = () => {
        const {tuesActive,counter} = this.state
        this.setState({ tuesActive: !tuesActive},
            ()=>{
                if (this.state.tuesActive === true){
                   this.setState({
                   counter: this.state.counter + 1
                 },()=>{console.log(`final counter check${this.state.counter}`)})
                }
                else if(this.state.tuesActive === false){
                    this.setState({
                        counter: this.state.counter - 1    
                    },()=>{console.log(`final counter check${this.state.counter}`)});
                }
                console.log(`final DAY check${this.state.tuesActive}`)
                
            }
        )     
    }
    wedHandler = () => {
        const {wedActive,counter} = this.state
        this.setState({ wedActive: !wedActive},
            ()=>{
                if (this.state.wedActive === true){
                   this.setState({
                   counter: this.state.counter + 1
                 },()=>{console.log(`final counter check${this.state.counter}`)})
                }
                else if(this.state.wedActive === false){
                    this.setState({
                        counter: this.state.counter - 1    
                    },()=>{console.log(`final counter check${this.state.counter}`)});
                }
                console.log(`final DAY check${this.state.wedActive}`)
                
            }
        )
    }
    thursHandler = () => {
        const {thursActive,counter} = this.state
        this.setState({ thursActive: !thursActive},
            ()=>{
                if (this.state.thursActive === true){
                   this.setState({
                   counter: this.state.counter + 1
                 },()=>{console.log(`final counter check${this.state.counter}`)})
                }
                else if(this.state.thursActive === false){
                    this.setState({
                        counter: this.state.counter - 1    
                    },()=>{console.log(`final counter check${this.state.counter}`)});
                }
                console.log(`final DAY check${this.state.thursActive}`)
                
            }
        )
    }
    friHandler = () => {
        const {friActive,counter} = this.state
        this.setState({ friActive: !friActive},
            ()=>{
                if (this.state.friActive === true){
                   this.setState({
                   counter: this.state.counter + 1
                 },()=>{console.log(`final counter check${this.state.counter}`)})
                }
                else if(this.state.friActive === false){
                    this.setState({
                        counter: this.state.counter - 1    
                    },()=>{console.log(`final counter check${this.state.counter}`)});
                }
                console.log(`final DAY check${this.state.friActive}`)
                
            }
        )
    }
    satHandler = () => {
        const {satActive,counter} = this.state
        this.setState({ satActive: !satActive},
            ()=>{
                if (this.state.satActive === true){
                   this.setState({
                   counter: this.state.counter + 1
                 },()=>{console.log(`final counter check${this.state.counter}`)})
                }
                else if(this.state.satActive === false){
                    this.setState({
                        counter: this.state.counter - 1    
                    },()=>{console.log(`final counter check${this.state.counter}`)});
                }
                console.log(`final DAY check${this.state.satActive}`)
                
            }
        )
    }
    sunHandler = () => {
        const {sunActive,counter} = this.state
        this.setState({ sunActive: !sunActive},
            ()=>{
                if (this.state.sunActive === true){
                   this.setState({
                   counter: this.state.counter + 1
                 },()=>{console.log(`final counter check${this.state.counter}`)})
                }
                else if(this.state.sunActive === false){
                    this.setState({
                        counter: this.state.counter - 1    
                    },()=>{console.log(`final counter check${this.state.counter}`)});
                }
                console.log(`final DAY check${this.state.sunActive}`)
                
            }
        )
    }

    nextHandler = () => {
        if(this.state.counter < 2){
            alert("SELECT ATTLEAST 2 DAYS")
        }
    }

    TimeHandler=(e)=>{
        const day = e.target.name
        this.setState({
            [e.target.name] : e.target.value
        })   
    }

    err = () => {
        if(this.state.sunFromTime === this.state.sunToTime){
            alert('CANNOT SELECT SAME TIME')
        }
    }

  handleDateChange = (date) => {
    this.setState({
        date: date,
    })
  };

  submitHandler = () =>{
      console.log(this.state.counter)
      if (this.state.counter>=2){
          alert('successfully')
      }
      else{
          alert('FORM NOT SUBMITTED')
      }
  }

  render(){
    const {classes,selectedDate,DateFnsUtils} = this.props;
    return (
        <form onSubmit={this.submitHandler} className={classes.root} noValidate autoComplete="off">
          <div className={classes.daysButton}>
            <Button
                size="small"
                className={this.state.sunActive ? `${classes.active}` : null}
                color="default"
                variant="contained"
                disabled={this.state.disabled}
                onClick={()=> this.sunHandler()}
            >S</Button>
            <Button
                className={this.state.monActive ? `${classes.active}` : null}
                size="small"
                variant="contained"
                style={{width: '5%'}}
                onClick={()=> this.mHandler()}
            >M</Button>
            <Button
                size="small"
                className={this.state.tuesActive ? `${classes.active}` : null}
                color="default"
                variant="contained"
                style={{width: '5%'}}
                onClick={()=> this.tuesHandler()}
            >T</Button>
            <Button
                size="small"
                className={this.state.wedActive ? `${classes.active}` : null}
                color="default"
                variant="contained"
                style={{width: '5%'}}
                onClick={()=> this.wedHandler()}
            >W</Button>
            <Button
                size="small"
                className={this.state.thursActive ? `${classes.active}` : null}
                color="default"
                variant="contained"
                style={{width: '5%'}}
                onClick={()=> this.thursHandler()}
            >T</Button>
            <Button
                size="small"
                className={this.state.friActive ? `${classes.active}` : null}
                color="default"
                variant="contained"
                style={{width: '5%'}}
                onClick={()=> this.friHandler()}
            >F</Button>
            <Button
                size="small"
                className={this.state.satActive ? `${classes.active}` : null}
                color="default"
                variant="contained"
                style={{width: '5%'}}
                onClick={()=> this.satHandler()}
            >S</Button>
          </div>
          <div>
              <Grid container>
                  <Grid item xs={6}>
                  <div>
                <Button
                    size="small"
                    className={this.state.sunActive ? `${classes.active}` : null}
                    color="default"
                    variant="contained"
                    style={{width: '20%'}}>Sunday
                </Button>
                
                <TextField
                    required
                    name="sunFrom"
                    disabled={!this.state.sunActive}
                    id="date"
                    style={{width: '30%'}}
                    label="from"
                    type="time"
                    defaultValue="0:00:00"
                    className={this.state.sunActive ? null : null}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    variant="outlined"
                    onChange={(value)=>{this.TimeHandler(value)}}
                /> to
                <TextField
                    required
                    name="sunTo"
                    disabled={!this.state.sunActive}
                    id="date"
                    style={{width: '30%'}}
                    label="to"
                    type="time"
                    defaultValue=""
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    variant="outlined"
                    onChange={(value)=>{this.TimeHandler(value)}}
                    onBlur={this.err}
                />  
              </div>
              <div>
                <Button
                    size="small"
                    className={this.state.tuesActive ? `${classes.active}` : null}
                    color="default"
                    variant="contained"
                    style={{width: '20%'}}>Tuesday
                </Button>
                
                <TextField
                    required
                    name="tuesFrom"
                    disabled={!this.state.tuesActive}
                    id="date"
                    style={{width: '30%'}}
                    label="from"
                    type="time"
                    defaultValue=""
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    onChange={(value)=>{this.TimeHandler(value)}}
                    variant="outlined"
                /> to
                <TextField
                    required
                    name="tuesTo"
                    disabled={!this.state.tuesActive}
                    id="date"
                    style={{width: '30%'}}
                    label="to"
                    type="time"
                    defaultValue=""
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    onChange={(value)=>{this.TimeHandler(value)}}
                    variant="outlined"
                />  
              </div>
              <div>
                <Button
                    size="small"
                    className={this.state.thursActive ? `${classes.active}` : null}
                    color="default"
                    variant="contained"
                    style={{width: '20%'}}>Thursday
                </Button>
                
                <TextField
                    required
                    name="thursFrom"
                    disabled={!this.state.thursActive}
                    id="date"
                    style={{width: '30%'}}
                    label="from"
                    type="time"
                    defaultValue=""
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    onChange={(value)=>{this.TimeHandler(value)}}
                    variant="outlined"
                /> to
                <TextField
                    required
                    name="thursTo"
                    disabled={!this.state.thursActive}
                    id="date"
                    style={{width: '30%'}}
                    label="to"
                    type="time"
                    defaultValue=""
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    onChange={(value)=>{this.TimeHandler(value)}}
                    variant="outlined"
                />  
              </div>
              <div>
                <Button
                    size="small"
                    className={this.state.satActive ? `${classes.active}` : null}
                    color="default"
                    variant="contained"
                    style={{width: '20%'}}>Saturday
                </Button>
                
                <TextField
                    required
                    name="satFrom"
                    disabled={!this.state.satActive}
                    id="date"
                    style={{width: '30%'}}
                    label="from"
                    type="time"
                    defaultValue=""
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    onChange={(value)=>{this.TimeHandler(value)}}
                    variant="outlined"
                /> to
                <TextField
                    required
                    name="satTo"
                    disabled={!this.state.satActive}
                    id="date"
                    style={{width: '30%'}}
                    label="to"
                    type="time"
                    defaultValue=""
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    onChange={(value)=>{this.TimeHandler(value)}}
                    variant="outlined"
                />  
              </div>
                  </Grid>
                  <Grid item xs={6}>
                  <div>
                <Button
                    size="small"
                    className={this.state.monActive ? `${classes.active}` : null}
                    color="default"
                    variant="contained"
                    style={{width: '20%'}}>Monday
                </Button>
                
                <TextField
                    required
                    name="monFrom"
                    disabled={!this.state.monActive}
                    id="date"
                    style={{width: '30%'}}
                    label="from"
                    type="time"
                    defaultValue=""
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    onChange={(value)=>{this.TimeHandler(value)}}
                    variant="outlined"
                /> to
                <TextField
                    required
                    name="monTo"
                    disabled={!this.state.monActive}
                    id="date"
                    style={{width: '30%'}}
                    label="to"
                    type="time"
                    defaultValue=""
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    onChange={(value)=>{this.TimeHandler(value)}}
                    variant="outlined"
                />  
              </div>
              <div>
                <Button
                    size="small"
                    className={this.state.wedActive ? `${classes.active}` : null}
                    color="default"
                    variant="contained"
                    style={{width: '20%'}}>Wednesday
                </Button>
                
                <TextField
                    required
                    name="wedFrom"
                    disabled={!this.state.wedActive}
                    id="date"
                    style={{width: '30%'}}
                    label="from"
                    type="time"
                    defaultValue=""
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    onChange={(value)=>{this.TimeHandler(value)}}
                    variant="outlined"
                /> to
                <TextField
                    required
                    name="monTo"
                    disabled={!this.state.wedActive}
                    id="date"
                    style={{width: '30%'}}
                    label="to"
                    type="time"
                    defaultValue=""
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    onChange={(value)=>{this.TimeHandler(value)}}
                    variant="outlined"
                />  
              </div>
              <div>
                <Button
                    size="small"
                    className={this.state.friActive ? `${classes.active}` : null}
                    color="default"
                    variant="contained"
                    style={{width: '20%'}}>Friday
                </Button>
                
                <TextField
                    required
                    name="friFrom"
                    disabled={!this.state.friActive}
                    id="date"
                    style={{width: '30%'}}
                    label="from"
                    type="time"
                    defaultValue=""
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    onChange={(value)=>{this.TimeHandler(value)}}
                    variant="outlined"
                /> to
                <TextField
                    required
                    name="friTo"
                    disabled={!this.state.friActive}
                    id="date"
                    style={{width: '30%'}}
                    label="to"
                    type="time"
                    defaultValue=""
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    onChange={(value)=>{this.TimeHandler(value)}}
                    variant="outlined"
                />  
              </div>
            </Grid>
        </Grid>
              
          </div>
          <div className={classes.buttongroup}>
                <Button
                    href="./candidatetype" 
                    size="large"
                    className={classes.margin}
                    color="default"
                    variant="contained"
                    style={{width: '20%', height: '20%'}}>
                  Previous
                </Button>
                
                <Button
                    size="large"
                    className={classes.margin}
                    color="primary"
                    variant="contained"
                    type="submit"
                    onClick={this.nextHandler}
                    style={{width: '20%', height: '20%'}}>
                    Next
                </Button>   
            </div>
        </form>
      );
    

  }
    }  
  

export default withStyles(styles) (ShiftTime);
