import React from "react";
export class Title extends React.Component
 {
    state = { input: "" };
    handleChange = event =>
     {
        //console.log(event.target.value )
        this.setState(
            { 
                input: event.target.value 
            }
        )
    }
    handleSubmit=event=>
    {
        this.props.addItem(this.state.input)
        this.setState({input:""})
    }
    render() 
    {
        return (<div>
            <input type="text" className="form-control" onChange={this.handleChange}  value={this.state.input}></input>
            <button className="btn btn-block btn-danger" onClick={this.handleSubmit}>ADD TODO</button>
        </div>);
    }
};
