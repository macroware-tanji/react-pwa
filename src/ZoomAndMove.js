import React,{ Component } from "react"

export default class ZoomAndMove extends Component {
    constructor(props){
        console.log("ZoomAndMove.constructor")
        super(props);
        // this.state = {
        //      state:0
        // }
    }
    componentDidMount(){
        console.log("ZoomAndMove.componentDidMount")
    }
    componentWillUnmount(){
        console.log("ZoomAndMove.componentWillUnmount")
    }
    render() {
        return (
            <div>
                <h1>Home</h1>
            </div>
        )
    }
}    
