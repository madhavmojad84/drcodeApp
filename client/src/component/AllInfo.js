import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import NoData from './NoData';
import decoder from 'jwt-decode'
import { Button } from '@material-ui/core';

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
  },  table: {
    minWidth: 650,
  },
});



class AllInfo extends React.Component{
    componentDidMount(){
        Axios.get('/all')
        .then(info=>{

            this.setState({AllInfo:info.data})
        })
        .catch(err=>{
            console.log(err)
        })
        
    if(localStorage.getItem('token')){
      const decode =decoder(localStorage.getItem('token'))
      console.log(decode)
    }
    }
    constructor(){
        super()
        this.state={
            AllInfo:[],
              
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
              {this.state.AllInfo.length==0?
              <NoData/>:

              
                <div className={classes.card} className="col-md-8 offset-md-2 mt-5 pb-5">
                   

                    <TableContainer component={Paper} className="pl-5 ml-5 pr-5 mr-5 pt-2 pb-5">
                    <div className="d-flex">
                      
                      <h2 className="d-block mt-2 ml-3 ">All Buyer</h2>
                      </div>
                    <Table className={classes.table} aria-label="simple table">
                      
                        <TableHead>
                        <TableRow>
                            <TableCell>Sl  </TableCell>
                            <TableCell >Name</TableCell>
                            <TableCell >Email</TableCell>
                            <TableCell >Product ID</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {this.state.AllInfo.map((info, index) => (
                            <TableRow key={index} >
                                <TableCell >{index+1}</TableCell>
                                <TableCell >{info.name}</TableCell>
                                <TableCell >{info.email}</TableCell>
                                <TableCell >{info.productID}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
                  
                </div>
    }
            </div>
        );
    }
}
export default AllInfo