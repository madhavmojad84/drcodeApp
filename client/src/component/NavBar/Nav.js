import React from 'react'
import {Link} from 'react-router-dom'
import decoder from 'jwt-decode'



class Nav extends React.Component{
    componentDidMount(){
        if(localStorage.getItem('token')){
        const decode =decoder(localStorage.getItem('token'))
        this.setState({tokenInfo:decode})        
        }

    }
    constructor(){
        super()
        this.state={
            tokenInfo:{}
        }
        this.logOut=this.logOut.bind(this)
    }

logOut(){
    localStorage.removeItem('token')
    window.location.href='/'
}

    render(){
        return(
            <div>    
                {this.state.tokenInfo.email?

                    <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to='/' className="nav-link" href="#">Home <span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/promotional' className="nav-link" href="#">Promotional</Link>
                        </li> 
                        <li className="nav-item">
                            <Link to='' onClick={this.logOut} className="nav-link" >Log Out</Link>
                        </li>
                    
                        <li className="nav-item">
                            <Link to='/admin' className="nav-link" >All Buyer</Link>
                        </li>
                    
                        <li className="nav-item">
                            <Link to='/register' className="nav-link" >Create New Admin</Link>
                        </li>
                    
                        </ul>
                    </div>
                    </nav>
                    </div>
                    :""
                }
          </div>
        )
    }
}


export default Nav