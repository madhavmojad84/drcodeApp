import React from 'react';
import AllInfo from './AllInfo';
import decoder from 'jwt-decode'

class MiddleWare extends React.Component{
  constructor(){
    super()
    if(localStorage.getItem('token')){
      const decode =decoder(localStorage.getItem('token'))
      console.log(decode)
      if(!decode.email){
        window.location.href='/login'
      }
    }
    if(!localStorage.getItem('token')){
      window.location.href='/login'
    }
  }
    render(){

        return (
          <>
          {this.timer}
          <AllInfo/>
          </>
        );
    }
}
export default MiddleWare