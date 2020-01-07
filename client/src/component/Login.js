import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Axios from 'axios';
import  decoder from 'jwt-decode'

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

class Login extends React.Component{
    constructor(){
        super()
        this.state={
              
          email:'',
          password:'',
          err:{}

        }
        
    }
    submitHandler=(event)=>{
      event.preventDefault()
      var  info={email:this.state.email, password:this.state.password}
      Axios.post('http://localhost:8080/login',info)
      .then(data=>{
        console.log('working')
        if(data.data){
          localStorage.setItem('token', data.data)
        }
        
    if(localStorage.getItem('token')){
      const decode =decoder(localStorage.getItem('token'))
      console.log(decode)
      if(decode.email){
        window.location.href='/'
      }
    }
        window.location.href='/admin'
        // const gettoken =localStorage.getItem('token')
        // if( gettoken){
        //   const decoded=decoder(gettoken)
        //   console.log(decoded)
        // }
        // console.log(data.data)
      })
      .catch(err=>{
        if(err.response.data){
          this.setState({err:err.response.data})
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
                              <h3>Login Here</h3>
                            </div>

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
                            {this.state.err.massage?
                            <p className="text-danger">
                              {this.state.err.massage}
                            </p>:''
                            }
                            

                            <button className="btn btn-secondary  mt-2 mb-2  "  type="submit"> Login</button>

                      </div>
                    </form>
                  </CardContent>
                </Card>
            </div>
        );
    }
}
export default Login