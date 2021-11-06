import React,{ Component } from "react"
import { useParams  } from 'react-router-dom'
//import { withRouter } from 'react-router';

class OthersClass extends Component {
    constructor(props){
        console.log("Others.constructor")
        super(props);
        // this.state = {
        //      state:0
        // }
        //console.log(this.props.params)
        const {id} = this.props.params
        this.is=id
        console.log(id)
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
                <h1>Others {this.is}</h1>
            </div>
        )
    }
}
export default function Others(){
    const params = useParams()
    return (
        <OthersClass params={params}/>
    )
}
