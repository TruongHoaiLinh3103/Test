import React from "react";
import Form from "./Form/Form";
import Profile from "./Profile/Profile";
import './Mycomponents.css'
import Color from "../Views/HOC/Color";
class Mycomponents extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            arr: [
                {id: 1,name: "Trương Hoài Linh"},
                {id: 2,name: "Nguyễn Thị Kiều Thu"}
            ]
        }
        this.addJod = (jod) => {
            let add = this.state.arr;
            add.push(jod);
            this.setState({
                arr: add
            })
        }
        this.deleteJod = (jod) => {
            let deleteJod = this.state.arr;
            deleteJod = deleteJod.filter(item => item.id !== jod.id)
            this.setState({
                arr: deleteJod
            })
        }
    }
    render(){
        return(
            <>
                <p>Simp To Do App</p>
                <div className="Container">
                    <div className="Form">
                        <Form addJod={this.addJod}/>
                    </div>
                    <div className="Profile">
                        <Profile arr={this.state.arr} deleteJod={this.deleteJod}/>
                    </div>
                </div>
            </>
        )
    }
}

export default Color(Mycomponents);