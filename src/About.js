import React,{ Component } from "react"
import "./About.css"
import Participants from "./Participants/Participants"


export default class About extends Component {
    constructor(props){
        console.log("About.constructor")
        super(props);
        this.state = {
            state:0,
        }
        this.participantsRef = React.createRef()
    }
    componentDidMount(){
        console.log("About.componentDidMount")
        // const tagsStr = sessionStorage.getItem("participants")
        // const tags = JSON.parse(tagsStr)
        // if(tags){
        //    for(const tag of tags){
        //     this.participantsRef.current.add(tag.name,tag.param)
        //    }
        // }

    }
    componentWillUnmount(){
        console.log("About.componentWillUnmount")
        //const tags = this.participantsRef.current.get()
        //sessionStorage.setItem("participants",JSON.stringify(tags))
    }
    
    componentDidUpdate(){
        console.log("About.componentDidUpdate")
        //const tags = this.participantsRef.current.get()
        //sessionStorage.setItem("participants",JSON.stringify(tags))
    }
    render() {
        return (
            <div className="about">
                <Participants ref={this.participantsRef}/>
            </div>
        )
    }
}    
