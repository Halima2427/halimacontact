import React from 'react';
import Axios from 'axios';
const ContactList = ({ List,setList}) => {

    console.log(List);
    const handleDelete=(e)=>
    {
        Axios.delete("http://localhost:3000/delcontact/"+e).then(success=>
        {
           alert("successfully deleted Id num:"+e);
           setList(List.filter(i=>i._id!==e));

        // / fetch();
           
        })
    }

    

    return (

        <div>
            
                    <table class="table">
                        <thead class="table-dark">
                            <tr>
                                <th  scope="col">Name</th>
                                <th  scope="col">Ph_Num</th>
                                <th  scope="col">Email</th>
                                <th  scope="col">Click</th>
                            </tr>

                        </thead>
                        <tbody class= "table-secondary">
                        {
                        List.map((i) => {
                            return (<tr key={i._id}>  
                                <td>{i.Name}</td>
                                <td>{i.Phone}</td>
                                <td>{i.Email}</td>
                                <button onClick={handleDelete.bind(this,i._id)}>Delete</button>
                                </tr>
                                )
                        })
                    }
                        </tbody>
                    </table>
               
        </div>


    )

    

}

export default ContactList;