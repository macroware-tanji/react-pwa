import React,{ Component } from "react"

export default class About extends Component {
    constructor(props){
        console.log("About.constructor")
        super(props);
        // this.state = {
        //      state:0
        // }
    }
    componentDidMount(){
        console.log("About.componentDidMount")
    }
    componentWillUnmount(){
        console.log("About.componentWillUnmount")
    }
    render() {
        return (
            <div>
                <h1>About</h1>
            </div>
        )
    }
}    
