import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
// import { Link, withRouter } from 'react-router-dom'
import { withRouter } from "react-router-dom";
import { logout }  from '../../functionAuth/functionAuth'

class NaveBar extends Component {
  state = { activeItem: 'home' }
  handleItemClick = ((e, { name }) => {
    this.setState({ activeItem: name })
    // extra
    if (name === "home"){
      this.props.history.push(`/`)
    }else{
      this.props.history.push(`/${name}`)
    }
    })

    logout =()=>{
console.log("anas")
localStorage.removeItem('usertoken')
this.props.history.push('/')
    }
  render() {
    console.log(this.props.isAuth)
    const { activeItem } = this.state
    return (
      <Menu secondary>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='login'
          active={activeItem === 'login'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='register'
          active={activeItem === 'register'}
          onClick={this.handleItemClick}
        />
        {(this.props.isAuth) ? (<Menu.Item
          name='reg'
          active={activeItem === 'reg'}
          onClick={this.handleItemClick}
        />) : null }
                
        
        <Menu.Menu position='right'>
          <Menu.Item>
            
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.logout}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}
export default withRouter(NaveBar)