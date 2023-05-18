import React from "react";
import './Form.css'
import { toast } from 'react-toastify';

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
        }
        this.change = (e) =>{
            this.setState({
                name: e.target.value
            })
        }
        this.add = () =>{
            if(!this.state.name){
                toast.warning("Error :(")
                return;
            }
            this.props.addJod({
                id: Math.floor(Math.random() * 1000),
                name: this.state.name
            })
            toast.success("Success :)")
            this.setState({
                name: ""
            })
        }
    }
    render(){
        return(
            <form action="" method="">
                <fieldset>
                    <input type="text" value={this.state.name} placeholder="Name" onChange={(e) => this.change(e)}/>
                    <input type="button" value="Add" onClick={() => this.add()}/>
                </fieldset>
            </form>
        )
    }
}

export default Form;