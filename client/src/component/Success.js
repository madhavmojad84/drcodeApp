import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

class Success extends React.Component{
    constructor(){
        super()
        this.state={
              
          email:'',
          password:''

        }
        
    }
    submitHandler=(event)=>{
      event.preventDefault()
      console.log(this.state)
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
                      <h1>Submit Success</h1>
                  </CardContent>
                </Card>
            </div>
        );
    }
}
export default Success