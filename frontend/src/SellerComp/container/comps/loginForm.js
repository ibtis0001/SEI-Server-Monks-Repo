import React, { Component } from 'react';

class Log_ing extends Component {

  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state={
      data:[],
      logemail:[]
    }
  }

componentDidMount() {
  fetch('http://localhost:3455/posts/admin/adc')
  .then(res => res.json())
  .then(data => {
    this.setState({
      data:data,
      islogedin:''
    })
  })
}
onSubmit(e) {
        e.preventDefault();
        var email = this.email;
        var PassWord = this.PassWord

        fetch(`http://localhost:3455/posts/admin/adc/${email.value}`)
        .then(res => res.json())
        .then(data => this.setState({
          logemail:data
        }))
        this.state.logemail.filter(x=>{
          if (x.pass == this.PassWord.value){

            (async () => {
            const rawResponse = await fetch(`http://localhost:3455/posts/admin/update/${x.email}`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              body: JSON.stringify({islogedin:true})
            });
            const content = await rawResponse.json();

            console.log(content);
          })();
          }


            else{
                console.log(`Password dose not match: ${x.email}` )}


        })


    }




  render() {
    const {data , islogedin} = this.state
    return (
      <>
      <h1>{islogedin}</h1>
      <form className="form-horizontal">
      <div>Email : <input type="text" className="form-control" ref={(c) => this.email = c} name="title" /></div>
      <div>password : <input type="password" className="form-control" ref={(c) => this.PassWord = c} name="title" /></div>


      </form>
      <button type="button" onClick={this.onSubmit} className="btn">Login</button>


      </>
    );
  }

}

export default Log_ing;
