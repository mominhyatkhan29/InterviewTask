import React, { Component } from 'react';
import {TextField, withStyles, Button} from '@material-ui/core';
import {styles} from './styles';
import {Link} from "react-router-dom";
import axios from 'axios';

class Task3 extends Component {
  constructor(props){
      super(props);
      this.state = {
          id: '',
        name: '',
        username: '',
        email: '',
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        lat: '',
        long: '',
        phone: "",
        website: "",
        cname: "",
        catchPhrase: "",
        bs: ""
      }
    }
      
  
  namehandleChange = event => {
    this.setState({ name: event.target.value });
  }
  idhandleChange = event => {
    this.setState({ id: event.target.value });
  }
  usernamehandleChange = event => {
    this.setState({ username: event.target.value });
  }
  emailhandleChange = event => {
    this.setState({ email: event.target.value });
  }
  streethandleChange = event => {
    this.setState({
        street : event.target.value,
     })
  };
  suithandleChange = event => {
      
    this.setState({ 
              suite: event.target.value 
        });
    }
  cityhandleChange = event => {
    this.setState({ 
            city: event.target.value 
        });
    }
  zipcodehandleChange = event => {
    this.setState({ 
            zipcode: event.target.value
        });

    }
  lathandleChange = event => {
    this.setState({ 
                lat: event.target.value 
        });

    }
  longhandleChange = event => {
    this.setState({ 
                long: event.target.value    
        });
    }

    phonehandleChange = event => {
        this.setState({ 
                    phone: event.target.value    
            });
        }

        websitehandleChange = event => {
            this.setState({ 
                        website: event.target.value    
                });
            }
            companynamehandleChange = event => {
                this.setState({ 
                            cname: event.target.value    
                    });
                }
                catchphrasehandleChange = event => {
                    this.setState({ 
                                catchPhrase: event.target.value    
                        });
                    }
                    bshandleChange = event => {
                        this.setState({ 
                                    bs: event.target.value    
                            });
                        }


        handleSubmit = event => {
            console.log(this.state)
            event.preventDefault();
            let data = {
            
                name:this.state.name,
                username: this.state.username,
                email: this.state.email,
                address: {
                  street: this.state.street,
                  suite: this.state.suite,
                  city: this.state.city,
                  zipcode: this.state.zipcode,
                  geo: {
                    lat: this.state.lat,
                    lng: this.state.long,
            },
        },
                phone: this.state.phone,
                website: this.state.website,
                company: {
                cname: this.state.cname,
                catchPhrase: this.state.catchPhrase,
                bs: this.state.bs,
        }
    }

            axios.post(`https://jsonplaceholder.typicode.com/users`, {data} )
            .then(res => {
                console.log(res);
                console.log("Successfully Inserted");
            }).catch(error => {
                console.log("NOT RESPONDING!!!")
            })
        }

  componentDidMount() {


    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        console.log(persons)
      }).catch()
    
  }
  
  render(){
      const {classes} = this.props
    return (
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
            <h1>Enter Data to post it on given API.</h1>
        <form onSubmit={this.handleSubmit} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
            <label>
             Person Name:
             <input type="text" name="name" onChange={this.namehandleChange} />
            </label>
            <label>
            User Name:
             <input type="text" name="username" onChange={this.usernamehandleChange} />
            </label>
            <label>
            email:
             <input type="email" name="email" onChange={this.emailhandleChange} />
            </label>
            address:
            <label>
                Street: <input type="text" name="email" onChange={this.streethandleChange} />
            </label>
            <label>
                Suit: <input type="text" name="email" onChange={this.suithandleChange} />
            </label>
            <label>
                City: <input type="text" name="email" onChange={this.cityhandleChange} />
            </label>
            <label>
                Zipcode: <input type="number" name="email" onChange={this.zipcodehandleChange} />
            </label>
             Geo:
             <label>
                lat: <input type="text" name="email" onChange={this.lathandleChange} />
            </label>
            <label>
                long: <input type="text" name="email" onChange={this.longhandleChange} />
            </label>
            <label>
                phone: <input type="number" name="phone" onChange={this.phonehandleChange} />
            </label>
            <label>
                website: <input type="text" name="website" onChange={this.websitehandleChange} />
            </label>
            <label>
                company:
                name: <input type="text" name="cname" onChange={this.companynamehandleChange} />
            </label>
            <label>
                catch phrase: <input type="text" name="catch phrase" onChange={this.catchphrasehandleChange} />
            </label>
            <label>
                bs: <input type="text" name="bs" onChange={this.bshandleChange} />
            </label>
             <button style={{width: '30%'}} type="submit">Add</button>
        </form>
        </div>
      );
    }

}
    

 

export default withStyles(styles) (Task3);
