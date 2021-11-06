import React,{ Component } from "react"
import { Link } from 'react-router-dom'

export default class NotFound extends Component {
    constructor(props){
        console.log("NotFound.constructor")
        super(props);
        // this.state = {
        //      state:0
        // }
    }
    componentDidMount(){
        console.log("NotFound.componentDidMount")
    }
    componentWillUnmount(){
        console.log("NotFound.componentWillUnmount")
    }
    render() {
        return (
            <div>
                <h1>NotFound</h1>
                <p>
                    <Link to="/">Go to the home page</Link>
                </p>
            </div>
        )
    }
}    
