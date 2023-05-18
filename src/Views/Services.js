import React from "react"
import axios from "axios";
class Services extends React.Component{
    constructor(){
        super();
        this.state = {
            lisAxios: []
        }
    }
    async componentDidMount(){
        let res = await axios.get("https://reqres.in/api/users?page=2");
        this.setState({
            lisAxios : res && res.data && res.data.data ? res.data.data : []
        })
    }
    render(){
        return(
            <div className="center" style={{width: "100%", textAlign: "center"}}>
                <div className="title"><h3>In Tên Người Có Trong item ra ngoài</h3></div>
                <div className="Name">
                    {this.state.lisAxios.map((item, index) =>{
                        return(
                            <p key={item.id}>{index + 1} {item.first_name} {item.last_name}</p>
                        )
                    })}
                </div>
            </div>
        )
    }
}
 export default Services;