import React,{ Component } from "react"

export default class Home extends Component {
    constructor(props){
        console.log("Home.constructor")
        super(props);
        // this.state = {
        //      state:0
        // }
    }
    componentDidMount(){
        console.log("Home.componentDidMount")
    }
    componentWillUnmount(){
        console.log("Home.componentWillUnmount")
    }
    render() {
        return (
            <div>
                <h1>Home</h1>
            </div>
        )
    }
}    
