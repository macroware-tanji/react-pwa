import React,{ Component } from "react"

export default class Page1 extends Component {
    constructor(props){
        console.log("Page1.constructor")
        super(props);
        // this.state = {
        //      state:0
        // }
    }
    componentDidMount(){
        console.log("Page1.componentDidMount")
    }
    componentWillUnmount(){
        console.log("Page1.componentWillUnmount")
    }
    render() {
        return (
            <div>
                <h1>Page1</h1>
            </div>
        )
    }
}    
