import React,{ Component } from "react"

export default class Others extends Component {
    constructor(props){
        console.log("Others.constructor")
        super(props);
        // this.state = {
        //      state:0
        // }
        console.log(this.props.params)
    }
    componentDidMount(){
        console.log("Others.componentDidMount")
    }
    componentWillUnmount(){
        console.log("Others.componentWillUnmount")
    }
    render() {
        return (
            <div>
                <h1>Others</h1>
            </div>
        )
    }
}    
