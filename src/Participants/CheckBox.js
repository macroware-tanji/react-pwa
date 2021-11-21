import React,{ Component } from "react"
import CheckOn from "./CheckOn.svg"
import CheckOff from "./CheckOff.svg"
import "./CheckBox.css"

export default class CheckBox extends Component {
    constructor(props){
        super(props);
        console.log("CheckBox.constructor", props)
        this.state = {
            checked:this.props.checked ? this.props.checked:false
        }
        this.onChange=this.onChange.bind(this)
        this.onClickOn=this.onClickOn.bind(this)
        this.onClickOff=this.onClickOff.bind(this)
        console.log(this.props.txt)
    }
    componentDidMount(){
        console.log("CheckBox.componentDidMount")
    }
    componentWillUnmount(){
        console.log("CheckBox.componentWillUnmount")
    }
    onChange(e){
        this.setState({checked:e.target.checked})
        console.log("onChange")
    }
    onClickOn(e){
        this.setState({checked:false})
        console.log("onClickOn")
        if(this.props.onChange){
            this.props.onChange(false, this.props.txt, this.props.param)
        }
    }
    onClickOff(e){
        this.setState({checked:true})
        console.log("onClickOff")
        if(this.props.onChange){
            this.props.onChange(true, this.props.txt,this.props.param)
        }
    }
    get checked(){
        return this.state.checked
    }
    set checked(newValue){
        return this.setState({checked:newValue})
    }
    render() {
        console.log("CheckBox.render")
        return (
        <span className="checkbox">
            {
                /*
            <input type="checkbox" name="checkbox" onChange={this.onChange}>
            </input>
                */
            }
            {   this.state.checked ? 
                (
                    <img className="checkbox--checkmark" src={CheckOn} alt="CheckOn" ref={this.imgCheckOnRef} onClick={this.onClickOn}/> 
                ) : 
                (
                    <img className="checkbox--checkmark" src={CheckOff} alt="CheckOff" ref={this.imgCheckOffRef} onClick={this.onClickOff}/> 
                )
            }
            <span className="checkbox--label">{this.props.txt}</span>    
        </span>
)
    }
}    
