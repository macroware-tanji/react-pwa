import React,{ Component } from "react"
import "./TagList.css"
import TagX from "./TagX.svg"


export default class TagList extends Component {
    constructor(props){
        console.log("TagList.constructor")
        super(props);
        this.state = {
            tags:[
                {name:"aaa",params:{}},
                {name:"bbb",param:{}},
                {name:"ccc",param:{}}
            ]
        }
        //this.tags = ["aaa","bbb","ccc"]
        this.onClickX = this.onClickX.bind(this)
    }
    componentDidMount(){
        console.log("TagList.componentDidMount")
    }
    componentWillUnmount(){
        console.log("TagList.componentWillUnmount")
    }
    get(){
        let newTags = this.state.tags.map( tag => ({...tag}))
        return newTags
    }
    add(name,param){
        let newTags = this.state.tags.filter( (tag,index) => { return true })
        newTags.push({name:name,param:param})
        console.log(newTags)
        this.setState({tags:newTags})
    }
    remove(name){
        let newTags = this.state.tags.filter( (tag,index) => { return tag.name !== name })
        console.log(newTags)
        this.setState({tags:newTags})
    }
    removeByIndex(index){
        let newTags = this.state.tags.filter( (tag,i) => {
            console.log(tag,i) 
            return i !== parseInt(index) })
        console.log(newTags)
        this.setState({tags:newTags})
    }
    exists(name){
        return this.state.tags.find(element => element.name === name) !== undefined;
    }
    onClickX(e){
        console.log(e.target.name)
        this.removeByIndex(parseInt(e.target.name))
    }
    render() {
        return (
            <div className="taglist">
                {
                    this.state.tags.map((tag,index)=>
                        (<div className="taglist--tag" key={index}>
                            <span className="taglist--tag__label" >{tag.name}</span>
                            <img className="taglist--tag__xmark" src={TagX} alt="TagX" name={index} onClick={this.onClickX}/> 
                        </div>))
                }
            </div>
        )
    }
}    
