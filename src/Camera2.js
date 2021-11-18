import React,{ Component } from "react"
import './Camera2.css'
import FacePositionMask2 from "./FacePositionMask2.svg"

export default class Camera2 extends Component {
    constructor(props){
        console.log("Camera2.constructor")
        super(props);
        this.state = {
             takeButtonEnable:false,
             retakeButtonEnable:false,
             startCameraButtonEnable:false,
        }
        this.videoRef = React.createRef()
        this.canvasRef = React.createRef()
        this.imgMaskRef = React.createRef()
        this.onClickTake = this.onClickTake.bind(this)
        this.onClickRetake = this.onClickRetake.bind(this)
        this.onClickStartCamera = this.onClickStartCamera.bind(this)
        this.ctx=null
    }
    startCamera(){
        const mediaDevices = navigator.mediaDevices || ((navigator.mozGetUserMedia || navigator.webkitGetUserMedia) ? {
            getUserMedia: function(c) {
              return new Promise(function(y, n) {
                (navigator.mozGetUserMedia ||
                 navigator.webkitGetUserMedia).call(navigator, c, y, n);
              });
            }
         } : null);
         
        if(mediaDevices){
            mediaDevices.getUserMedia({
                audio:false,
                //video:true
                video:{
                    width:1080,
                    height:1080,
                    facingMode: "user"
                }
            }).then((stream)=>{
                console.log("then")
                console.dir(stream,{depth:null})
                this.videoRef.current.onerror = (e)=>{
                    alert(e)
                    this.videoRef.current.onerror=()=>{}
                }
                this.videoRef.current.srcObject = stream
                //this.videoRef.current.play()
                this.setState({
                    takeButtonEnable:true,
                    retakeButtonEnable:false,
                    startCameraButtonEnable:false
                })
            }).catch((error)=>{
                console.log(error)
                console.dir(error)
                this.setState({
                    takeButtonEnable:false,
                    retakeButtonEnable:false,
                    startCameraButtonEnable:true
                })
                alert(error)
            })
        }
        else{
            console.log("getUserMedia() not supported.");

            alert("getUserMedia() not supported.")
        }
    }
    componentDidMount(){
        console.log("Camera2.componentDidMount")

        this.canvasRef.current.width=1080
        this.canvasRef.current.height=1080
        this.ctx = this.canvasRef.current.getContext("2d")

        this.videoRef.current.addEventListener("loadedmetadata",(e)=>{
            console.log("loadedmetadata")
            //this.videoRef.current.play()
        })
        this.videoRef.current.addEventListener("loadeddata",(e)=>{
            console.log("loadeddata")
            //this.videoRef.current.play()
        })
        this.startCamera()
    }
    componentWillUnmount(){
        console.log("Camera2.componentWillUnmount")
        try{
            this.videoRef.current.pause()
        }
        catch(error){

        }
    }
    onClickTake(e){
        this.videoRef.current.pause()
        console.log(`this.imgMaskRef.current.width:${this.imgMaskRef.current.width}`)
        console.log(`this.imgMaskRef.current.height:${this.imgMaskRef.current.height}`)
        this.ctx.drawImage(this.videoRef.current,0,0,this.canvasRef.current.width,this.canvasRef.current.height)
        this.ctx.drawImage(this.imgMaskRef.current,0,0,this.canvasRef.current.width,this.canvasRef.current.height)
        if(!this.videoRef.current.classList.contains("camera2--hidden")){
            this.videoRef.current.classList.add("camera2--hidden")
        }
        if(this.canvasRef.current.classList.contains("camera2--hidden")){
            this.canvasRef.current.classList.remove("camera2--hidden")
        }
        this.setState({
            takeButtonEnable:false,
            retakeButtonEnable:true,
        })
    }
    onClickRetake(e){
        if(this.videoRef.current.classList.contains("camera2--hidden")){
            this.videoRef.current.classList.remove("camera2--hidden")
        }
        if(!this.canvasRef.current.classList.contains("camera2--hidden")){
            this.canvasRef.current.classList.add("camera2--hidden")
        }
        this.videoRef.current.play()
        this.setState({
            takeButtonEnable:true,
            retakeButtonEnable:false,
        })
    }
    onClickStartCamera(e){
        this.startCamera()
    }
    render() {
        return (
            <div>
                <h1>Camera2</h1>
                <div>
                    <video className="camera2--video" ref={this.videoRef} autoPlay={true} playsInline={true} muted={true}></video>
                </div>
                <div>
                    <canvas className="camera2--canvas camera2--hidden" ref={this.canvasRef}></canvas>
                    <img src={FacePositionMask2} alt="mask" ref={this.imgMaskRef} className="camera2--hidden"/> 
                </div>
                <div>
                    <button onClick={this.onClickTake} disabled={!this.state.takeButtonEnable}>シャッター</button>
                    <button onClick={this.onClickRetake} disabled={!this.state.retakeButtonEnable}>撮り直し</button>
                    <button onClick={this.onClickStartCamera} disabled={!this.state.startCameraButtonEnable}>カメラリスタート</button>
                </div>
            </div>
        )
    }
}    
