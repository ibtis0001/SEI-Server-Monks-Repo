import React, { Component } from 'react';

class Current_Users extends Component {
  constructor(props){
    super(props);
    this.state={
      pass_data:[]
    }
  };




  render() {

    const {active_users} = this.props
    return (
      <>
      <table>
      <ul>
      {
        active_users.map(x=>{
          return (<li> Name :   {x.fname}  Email:    {x.email}  Id : {x._id}</li>)

        })
      }






      </ul>
      </table>

      </>
    );
  }

}

export default Current_Users;
