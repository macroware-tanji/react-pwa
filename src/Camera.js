import React,{ Component } from "react"
import './Camera.css'

export default class Camera extends Component {
    constructor(props){
        console.log("Camera.constructor")
        super(props);
        this.state = {
             imageLoaded:false
        }
        this.inputFile = React.createRef()
        this.imgRef = React.createRef()
        this.onChange = this.onChange.bind(this)
        this.onClickChoosePhoto = this.onClickChoosePhoto.bind(this)
    }
    componentDidMount(){
        console.log("Camera.componentDidMount")
    }
    componentWillUnmount(){
        console.log("Camera.componentWillUnmount")
    }
    onChange(e){
        console.log("onChange")
        console.dir(e,{depth:null})
        if(e.target.files.length){
            const file = e.target.files[0]
            const fr = new FileReader()
            fr.addEventListener("load",(e)=>{
                const url = fr.result
                //alert(url)
                this.imgRef.current.src = url
                this.imgRef.current.width=300
                this.imgRef.current.height=300
                if(this.imgRef.current.classList.contains("camera--hidden")){
                    this.imgRef.current.classList.remove("camera--hidden")
                }
            })
            fr.readAsDataURL(file)
        }
    }
    onClickChoosePhoto(e){
        this.inputFile.current.click()
    }
    render() {
        return (
            <div>
                <h1>Camera</h1>
                <div>
                    <input type="file" className="camera--hidden" ref={this.inputFile} onChange={this.onChange}/>
                    <button onClick={this.onClickChoosePhoto}>choose photo</button>
                </div>
                <div>
                    <img className="camera--img camera--hidden" alt="img" ref={this.imgRef} />
                </div>
            </div>
        )
    }
}    
