import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Axios from 'axios'
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

class ProductRegister extends React.Component{
    constructor(){
        super()
        this.state={
              
          name:'',
          email:'',
          productID:'',
          err:{}

        }
        
    }
    submitHandler=(event)=>{
      event.preventDefault()
      var info={name:this.state.name, email:this.state.email, productID:this.state.productID}
      console.log(info)
      console.log(this.state)
      Axios.post('/registerProduct', info)
      .then(res=>{
        console.log(res.data)
        window.location.href="/success"
      })
      .catch(err=>{
        console.log(err)
        
        this.setState({err:err.response.data})
        console.log(this.state.err)
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
                <Card className={classes.card} className="col-md-4 offset-md-4 mt-5 ">
                  <CardContent>                      
                    <form onSubmit={this.submitHandler}>
                      <div className="">
                            <div className="pb-3 pt-3">
                              <h3>Product Register Here</h3>
                            </div>

                            <label htmlFor= 'name' > Your  Name</label>
                            <input onChange={this.changeHandler} type='text' placeholder="Enter name" id="name" name="name" className={ this.state.err.name? "form-control is-invalid":"form-control"}/>
                            
                            {this.state.err.name?
                            <span className="text-danger">
                              {this.state.err.name}
                            </span>:''
                            }
                            
                            <label htmlFor= 'email' className="d-block" > Your Email</label> 
                            <input onChange={this.changeHandler} type='email' placeholder="Enter email" id="email" name="email" className={ this.state.err.email? "form-control is-invalid":"form-control"}/>
                             
                            {this.state.err.name?
                            <span className="text-danger">
                              {this.state.err.email}
                            </span>:''
                            }

                            <label htmlFor= 'ID' className="d-block" > Your Product ID</label> 
                            <input onChange={this.changeHandler} type='ID' name='productID' placeholder="Enter Product ID" id="ID" name="productID" className={ this.state.err.productID? "form-control is-invalid":"form-control"}/>
                             
                            {this.state.err.name?
                            <p className="text-danger">
                              {this.state.err.productID}
                            </p>:''
                            }
                            <button className="btn btn-secondary btn justify   mt-4 mb-2  "  type="submit">  Register</button>

                      </div>
                    </form>
                  </CardContent>
                </Card>
            </div>
        );
    }
}
export default ProductRegister