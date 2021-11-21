import React,{ Component } from "react"
import "./TagList.css"
import TagX from "./TagX.svg"


export default class TagList extends Component {
    constructor(props){
        console.log("TagList.constructor")
        super(props);
        this.state = {
            tags:[],
            update: new Date()
        }
        this.tags=[]
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
        let newTags = this.tags.map( tag => ({...tag}))
        return newTags
    }
    add(name,param){
        this.tags.push({name:name,param:param})
        console.log(this.tags)
        this.setState({tags:this.tags})
    }
    clear(){
        this.tags=[]
        this.setState({tags:this.tags})
    }
    remove(name){
        let removed = null
        // let newTags = this.state.tags.filter( 
        //     (tag,index) => {
        //         if(tag.name !== name){
        //             return true
        //         }
        //         else{
        //             removed = tag
        //         } 
        //         return tag.name !== name 
        //     })
        let newTags = []
        this.tags.reduce( 
            (prev,curr) => {
                if(curr.name !== name){
                    prev.push(curr)
                }
                else{
                    removed = curr
                }
                return prev 
             },newTags)

        if(removed){
            this.tags = newTags
            console.log(removed)
            console.log(newTags)
            this.setState({tags:this.tags})
            if(this.props.onRemove){
                this.props.onRemove(removed.name, removed.param)
            }
        }    
    }
    removeByIndex(index){
        if(0<= index && index < this.tags.length){
            let removed = this.tags[index]

            let newTags = this.tags.filter( (tag,i) => {
                console.log(tag,i) 
                return i !== parseInt(index) })
            console.log(newTags)
            this.tags = newTags
            if(removed){
                console.log(removed)
                console.log(newTags)
                this.setState({tags:this.tags})
                if(this.props.onRemove){
                    this.props.onRemove(removed.name, removed.param)
                }
            }    
        }
    }
    find(name){
        return this.tags.find(element => element.name === name)
    }
    findIndex(name){
        return this.tags.findIndex(element => element.name === name)
    }
    findEx(item, compare){
        return this.tags.find(element => compare(element,item))
    }
    findIndexEx(item, compare){
        return this.tags.findIndex(element => compare(element,item))
    }
    onClickX(e){
        console.log(e.target.name)
        this.removeByIndex(parseInt(e.target.name))
    }
    render() {
        return (
            <div className="taglist">
                {
                    this.tags.map((tag,index)=>
                        (<div className="taglist--tag" key={index}>
                            <span className="taglist--tag__label" >{tag.name}</span>
                            <img className="taglist--tag__xmark" src={TagX} alt="TagX" name={index} onClick={this.onClickX}/> 
                        </div>))
                }
            </div>
        )
    }
}    
