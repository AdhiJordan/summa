import React, {Component} from 'react';

export default class List extends Component{
  constructor(props){
    super(props);
    this.state = {
      subject: "Angular Js"
    };
  }


  getBackToHome(){
    this.props.history.push('/home');
  }
 

  render(){
    console.log("@@@@", this.props)
    return(
      <div className="container">
        This is List Component
        <h1>{this.props.details}</h1>

        <h1>New design</h1>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-2 col-lg-2">empty</div>
            <div className="col-sm-12 col-md-8 col-lg-8">
              <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                       <form>
                         1 st form details
                       </form>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <form>
                         2 nd form details
                       </form>
                    </div>
                    <button onClick={this.getBackToHome.bind(this)}>
                    BackToHome
                    </button>
              </div>
            </div>
            <div className="col-sm-12 col-md-2 col-lg-2">empty</div>
          </div>
        </div>
      </div>
    );
  }
}
