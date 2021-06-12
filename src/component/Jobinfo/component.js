import React, { Component } from 'react';
import {TextField, withStyles, Button} from '@material-ui/core';
import {styles} from './styles';
import {Link} from "react-router-dom";

class JobInfoForm extends Component {
  constructor(props){
      super(props);
      this.state = {
        lookFor: "",
        experience: "",
        education: "",
        skills: "",
        des: "",
        submitted: false,
      }
      
  }

  lookFieldHandler = (e) => {
      this.setState({
          lookFor : e.target.value,
      })  
  }
  experienceHandler = (e) => {
      this.setState({
          experience: e.target.value
      })
  }
    educationHandler = (e) => {
        this.setState({
            education: e.target.value
        })
    }
    skillsHandler = (e) => {
        this.setState({
            skills: e.target.value
        })
    }
    desHandler = (e) => {
        this.setState({
            des: e.target.value
        })
    }

    handleSubmit = () => {
        this.setState({ submitted: true }, () => {
            setTimeout(() => this.setState({ submitted: false }), 5000);
        });
    }

  render(){
      const {classes, submitted} = this.props
    return (
      
        <form className={classes.root} Validate autoComplete="off" onSubmit={this.handleSubmit}>
          <div>
              <div>
                <TextField
                required
                style={{width: '50%'}}
                id="outlined-required"
                placeholder="Enter value"
                label="Looking For"
                variant="outlined"
                onChange={value=>{this.lookFieldHandler(value)}}
                />
                <TextField
                required
                style={{width: '50%'}}
                id="outlined-required"
                label="Experience"
                placeholder="Enter value"
                variant="outlined"
                onChange={value=>{this.experienceHandler(value)}}
                />
                <TextField
                required
                style={{width: '30%'}}
                id="outlined-required"
                label="Eductaion"
                placeholder="Enter value"
                variant="outlined"
                onChange={value=>{this.educationHandler(value)}}
                />
                </div>
                <TextField
                required
                style={{width: '100%'}}
                id="outlined-required"
                label="Skills"
                placeholder="Enter value"
                variant="outlined"
                onChange={value=>{this.educationHandler(value)}}
                />
                <br></br>
                <TextField
                required
                style={{width: '100%', height: '60%'}}
                id="outlined-required"
                label="Description"
                placeholder="Details if any"
                variant="outlined"
                onChange={value=>{this.desHandler(value)}}
                /> 
            </div>
            <div className={classes.buttongroup}>
                <Button 
                    size="large"
                    className={classes.margin}
                    color="default"
                    variant="contained"
                    style={{width: '20%', height: '20%'}}>
                  Previous
                </Button>
                
                <Button
                    href="./CandidateType" 
                    size="large"
                    className={classes.margin}
                    color="primary"
                    variant="contained"
                    type="submit"
                    disabled={this.submitted}
                    style={{width: '20%', height: '20%'}}>
                    Next
                </Button>   
            </div>
        </form>
      );
    }

  }
    

 

export default withStyles(styles) (JobInfoForm);
