import React from "react";
import './Profile.css'

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            arr: this.props.name
        }
        this.delete = (jod) => {
            this.props.deleteJod(jod)
        }
    }
    render(){
        let addJod = this.props.arr;
        return(
            <>
                {addJod.map((item, index) => {
                    return(
                        <div className="profile" key={item.id}>
                            <p>{item.name}</p>
                            {/* <input value={item.name}/> */}
                            <button className="edit" onClick={() => this.edit()}>Edit</button>
                            <button className="delete" onClick={() => this.delete(item)}>Delete</button>
                        </div>
                    )
                })}
            </>
        )
    }
}

export default Profile;