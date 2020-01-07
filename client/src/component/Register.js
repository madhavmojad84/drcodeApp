import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Axios from 'axios';

const classes = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

class Register extends React.Component{
    constructor(){
        super()
        this.state={
              
          email:'',
          password:'',
          name:'',
          err:{}

        }
        
    }
    submitHandler=(event)=>{
      event.preventDefault()
      
      Axios.post('http://localhost:8080/register',this.state)
      .then(data=>{
        window.location.href="/success"
      })
      .catch(err=>{
        if(err.response.data){
          this.setState({
            err:err.response.data
          })
        }
      })
    }
    changeHandler=(event)=>{
      this.setState({
        [event.target.name]:event.target.value
      })
    }
     
    render(){

        return (
            <div classes="row ">

                <Card className={classes.card} className="col-md-6 offset-md-3 mt-5 pb-5">

                  <CardContent>                      
                    <form onSubmit={this.submitHandler}>
                      
                      <div className="col-md-8 offset-md-2">

                            <div className="pb-3">
                              <h3>Register Here</h3>
                            </div>
                            <label htmlFor= 'name' > Enter your name</label>
                            <input onChange={this.changeHandler} type='text'  className={ this.state.err.name? "form-control is-invalid":"form-control"} placeholder="Enter name" id="name" name="name" className="form-control"/>


                            {this.state.err.name?
                            <span className="text-danger">
                              {this.state.err.name}
                            </span>:''
                            }
                            

                            <label htmlFor= 'email' className="d-block" > Enter your email</label> 
                            <input onChange={this.changeHandler} className={ this.state.err.email? "form-control is-invalid":"form-control"} type='email' placeholder="Enter email" id="email" name="email" className="form-control"/>


                            {this.state.err.email?
                            <span className="text-danger">
                              {this.state.err.email}
                            </span>:''
                            }
                            
                            <label htmlFor= 'email' className="d-block" > Enter your password</label> 
                            <input onChange={this.changeHandler}  className={ this.state.err.password? "form-control is-invalid":"form-control"} type='password' placeholder="Enter Password" id="password" name="password" className="form-control"/>
                            
                            {this.state.err.password?
                            <p className="text-danger">
                              {this.state.err.password}
                            </p>:''
                            }
                            

                            <button className="btn btn-secondary  mt-2 mb-2  "  type="submit"> Register</button>

                      </div>
                    </form>
                  </CardContent>
                </Card>
            </div>
        );
    }
}
export default Register