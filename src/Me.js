import React,{ Component } from "react"

export default class Me extends Component {
    constructor(props){
        console.log("Me.constructor")
        super(props);
        // this.state = {
        //      state:0
        // }
    }
    componentDidMount(){
        console.log("Me.componentDidMount")
    }
    componentWillUnmount(){
        console.log("Me.componentWillUnmount")
    }
    render() {
        return (
            <div>
                <h1>Me</h1>
            </div>
        )
    }
}    
