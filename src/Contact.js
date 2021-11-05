import React,{ Component } from "react"

export default class Contact extends Component {
    constructor(props){
        console.log("Contact.constructor")
        super(props);
        // this.state = {
        //      state:0
        // }
    }
    componentDidMount(){
        console.log("Contact.componentDidMount")
    }
    componentWillUnmount(){
        console.log("Contact.componentWillUnmount")
    }
    render() {
        return (
            <div>
                <h1>Contact</h1>
            </div>
        )
    }
}    
