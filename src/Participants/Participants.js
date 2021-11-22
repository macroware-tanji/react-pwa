import React,{ Component } from "react"
import "./Participants.css"
import Search from "./Search.svg"
import ArrowUp from "./ArrowUp.svg"
import ArrowDown from "./ArrowDown.svg"
import TagList from "./TagList"
import CheckBox from "./CheckBox"
import SearchResult from './list.json';
import sleep from "./sleep"

export default class Participants extends Component {
    constructor(props){
        console.log("Participants.constructor")
        super(props);
        // this.state = {
        //      state:0
        // }
        this.state = {
            state:0,
            expanded:false,
            checkAll:false,
            checkeds:[],
            update: new Date()
        }
        this.onClickArrowUp = this.onClickArrowUp.bind(this)
        this.onClickArrowDown = this.onClickArrowDown.bind(this)
        this.onClickSearch = this.onClickSearch.bind(this)
        this.onChangeCheckBox = this.onChangeCheckBox.bind(this)
        this.onChangeCheckBoxAll = this.onChangeCheckBoxAll.bind(this)
        
        this.onRemove = this.onRemove.bind(this)
        this.tagList = React.createRef()
        this.checkBoxRef0 = React.createRef()
        this.checkBoxRefs = []

        this.searchResult = [];//SearchResult
        // let checkeds=[]
        // this.searchResult.forEach((item,index)=>{
        //     checkeds.push(false)
        // })
        // this.state.checkeds = checkeds

        this.findInTags = (tag,item2)=>{
            console.log(tag,item2)
            return tag.param.name === item2.name && tag.param.company === item2.company
        }
    }

    get(){
        return this.tagList.current.get()
    }

    add(name,param){
        this.tagList.current.add(name,param)
    }

    componentDidMount(){
        console.log("Participants.componentDidMount")
        const tagsStr = sessionStorage.getItem("participants")
        const tags = JSON.parse(tagsStr)
        if(tags){
            this.tagList.current.clear()
           for(const tag of tags){
            this.tagList.current.add(tag.name,tag.param)
           }
        }
    }
    componentWillUnmount(){
        console.log("Participants.componentWillUnmount")
    }
    componentDidUpdate(){
        console.log("Participants.componentDidUpdate")
        const tags = this.tagList.current.get()
        console.log(tags)
        sessionStorage.setItem("participants",JSON.stringify(tags))
    }
    onClickArrowUp(e){
        this.setState({expanded:false})
    }
    onClickArrowDown(e){
        console.log("About.onClickArrowDown")
        let checkeds = []
        this.searchResult.forEach((item,searchItemIndex)=>{
            const index = this.tagList.current.findIndexEx(item,this.findInTags)
            checkeds.push( index >= 0 ? true:false)
        })
        this.setState({expanded:true, checkeds:checkeds})
    }
    onClickSearch(e){
        console.log("onClickSearch",e)
        sleep(200,{}).then((res)=>{
            this.searchResult = SearchResult
            let checkeds=[]
            this.checkBoxRefs=[]
            this.searchResult.forEach((item,searchIndex)=>{
                const index = this.tagList.current.findIndexEx(item,this.findInTags)
                checkeds.push( index >= 0 ? true:false)
                this.checkBoxRefs.push( React.createRef() )
            })
            this.setState({checkeds:checkeds})
        })
    }
    onChangeCheckBoxAll(checked, name, param){
        if(checked){
            let checkeds = [...this.state.checkeds]
            this.searchResult.forEach((seacrhItem,searchIndex)=>{
                const index = this.tagList.current.findIndexEx(seacrhItem,this.findInTags)
                if( index < 0 ){
                    this.tagList.current.add(seacrhItem.name,seacrhItem)
                }
                checkeds[searchIndex] = true
                this.checkBoxRefs[searchIndex].current.checked = true
            })
            this.setState({checkeds:checkeds})
        }
        else{
            let checkeds = [...this.state.checkeds]
            this.searchResult.forEach((seacrhItem,searchIndex)=>{
                const index = this.tagList.current.findIndexEx(seacrhItem,this.findInTags)
                if( index >= 0 ){
                    this.tagList.current.removeByIndex(index)
                }
                checkeds[searchIndex] = false
                this.checkBoxRefs[searchIndex].current.checked = false
            })
            this.setState({checkeds:checkeds})
        }
    }
    onChangeCheckBox(checked, name, param){
        console.log("onChangeCheckBox",checked, name, param)
        const seacrhItem = this.searchResult[param]
        let checkeds = [...this.state.checkeds]
        checkeds[param] = checked
        //param.checked = checked
        const index = this.tagList.current.findIndexEx(seacrhItem,this.findInTags)
        if(checked){
            if( index < 0 ){
                this.tagList.current.add(seacrhItem.name,seacrhItem)
            }
        }
        else{
            if( index >= 0 ){
                this.tagList.current.removeByIndex(index)
            }
        }
        this.setState({checkeds:checkeds})
    }

    onRemove(name,param){
        console.log("onRemove",name, param)
        let checkeds = [...this.state.checkeds]
        this.searchResult.forEach((item,index)=>{
            if(item.name === param.name && item.company === param.company){
                checkeds[index] = false
                if(this.checkBoxRefs[index].current){
                    this.checkBoxRefs[index].current.checked = false
                }
            }
        })
        this.setState({checkeds:checkeds})
    }
    render() {
        return (
            <div className="participants">
                <div className="participants-list">
                    <div className="participants-list--label">
                        参加者
                    </div>
                    <div className="participants-list--list">
                        <TagList ref={this.tagList} onRemove={this.onRemove}/>
                    </div>
                    <div className="participants-list--button">
                        {
                            this.state.expanded ?
                            (
                                <img className="participants-list--button_arrow" src={ArrowUp} alt="ArrowUp" onClick={this.onClickArrowUp}/>
                            )
                            :
                            (
                                <img className="participants-list--button_arrow" src={ArrowDown} alt="ArrowDown" onClick={this.onClickArrowDown} />
                            )
                        }
                    </div>
                </div>
                {
                    this.state.expanded && 
                    (
                    <div className="participants-search">
                        <div className="participants-search__input-wrapper">
                            <input className="participants-search__input" type="search" placeholder={"検索"}/>
                            <img className="participants-search__input-img" src={Search} alt="Search" onClick={this.onClickSearch} />
                        </div>
                        {
                            this.searchResult.length > 0 &&

                            <div className="participants-search--result">
                            {
                                <div className="participants-search--result-item" key={0}>
                                <CheckBox txt = {"全員選択"}
                                    param = {-1}
                                    checked={this.state.checkAll} 
                                    onChange={this.onChangeCheckBoxAll} 
                                    ref={this.checkBoxRef0}/>
                                </div>
                            }
                            {
                                this.searchResult.map((item,index)=>(
                                    <div className="participants-search--result-item" key={index+1}>
                                        <CheckBox txt={item.name +" | "+ item.company} 
                                            param={index} 
                                            checked={this.state.checkeds[index]} 
                                            onChange={this.onChangeCheckBox} 
                                            ref={this.checkBoxRefs[index]}/>
                                    </div>
                                ))
                            }
                        </div>
                        }
                    </div>
                    )
                }
            </div>
        )
    }
}    
