import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            count2: 2,
            userInfo: {
                name: "Dummy",
                location: "Default"
            }
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/Swati2021")
        const json = await data.json();
        this.setState({
            userInfo: json
        })
        console.log("user data",json)
    }

    render(){
        const {contact} = this.props;
        const { count, count2 } = this.state;
        const {name, location, avatar_url} = this.state.userInfo

        return(
            <div className="user-card">
                {/* <button
                    onClick={() => {
                        this.setState({
                            count: this.state.count + 1,
                        })
                    }}
                >Increase count</button>
                <h2>Count: {count}</h2> */}
                <img src={avatar_url}></img>
                <h1>Name: {name}</h1>
                <h2>Location: {location}</h2>
                <h2>Contact: {contact}</h2>
            </div>
        )
    }
}

export default UserClass;