import React from "react";
import { Navbar } from "./Navbar";
import { Title } from "./Title";
import Listgroup from "./Listgroup"; 
import axios from "axios";

class App extends React.Component
{
  state={
    list:[
    "Writing Quran",
    "Reciting Quran"
  ]
};

componentDidMount()
{
  axios.get("http://localhost:8080/data").then(result=>{
    this.setState({
      list:result.data
    });
  }).catch(function (error){
    console.log(error);
  })
}

addItem=value=>{
  axios.post("http://localhost:8080/data",{title:value}).then(result=>{
      //console.log("new item",value);
  this.setState({
    list:[...this.state.list,result.data]

  });

  });
};

handleDelete=value=>
{
  axios.delete("http://localhost:8080/data/"+value).then(result=>{
  //console.log("Delete item",value);
  this.setState({
    list:this.state.list.filter(i=>i.value!==value)
  });
});
};



  render(){
  return(
    <div>
    <Navbar />
    <Title addItem={this.addItem}/>
    <Listgroup items={this.state.list} handleDelete={this.handleDelete}  handleStrike={this.handleStrike} />
    </div>
   );}
};

export default App;