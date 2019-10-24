import React from "react";
class Listgroup extends React.Component {
    handleStrike=e=>
    {
        e.target.style.textDecoration="line-through";
    }
    

    render() {
        console.log(this.props);
        return (
            <div>
                <ul className="list-group" >
                    {
                        this.props.items.map(i => {
                            return (
                                <li key={i.id} className="list-group-item">
                                    <span onClick={this.handleStrike}>{i.title}</span>
                                    <button className= "float-right" onClick={this.props.handleDelete.bind(this,i.id)}>Delete</button>
                                </li>

                            );
                        })
                    }
                </ul>
            </div>);
    }
};
export default Listgroup;