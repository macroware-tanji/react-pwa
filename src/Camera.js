import React,{ Component } from "react"
import './Camera.css'
import FacePositionMask2 from "./FacePositionMask2.svg"

export default class Camera extends Component {
    constructor(props){
        console.log("Camera.constructor")
        super(props);
        this.state = {
             imageLoaded:false,
             x1:0,
             y1:0,
             x2:0,
             y2:0
        }
        this.inputFile = React.createRef()
        this.imgRef = React.createRef()
        this.canvasRef = React.createRef()
        this.imgMaskRef = React.createRef()
        this.ctx = null
        this.onChange = this.onChange.bind(this)
        this.onClickChoosePhoto = this.onClickChoosePhoto.bind(this)

        this.imgPosX = 0
        this.imgPosY = 0
        this.imgZoomRate = 1.0
    }

    zoomAndMove1(){
        this.toucheInfos = {}

        this.canvasRef.current.addEventListener("touchstart",(e)=>{
            e.preventDefault()
            const rect = this.canvasRef.current.getBoundingClientRect()
            const touches = e.changedTouches
            //console.log("Camera.touchstart")
            let x1 = NaN
            let y1 = NaN
            let x2 = NaN
            let y2 = NaN
            let id1=NaN
            let id2=NaN
            if(touches.length>0){
                x1 = touches[0].clientX
		        y1 = touches[0].clientY
                x1 -= rect.left
                y1 -= rect.top
                id1 = touches[0].identifier
            }
            if(touches.length>1){
                x2 = touches[1].clientX
		        y2 = touches[1].clientY
                x2 -= rect.left
                y2 -= rect.top
                id2 = touches[1].identifier
            }
            this.setState({x1:x1,
                y1:y1,x2:x2,
                y2:y2})
            
            const canvasWidth = this.canvasRef.current.width 
            const canvasHeight = this.canvasRef.current.height
            const styleWidth =  320//this.canvasRef.current.style.width
            const styleHeight =  320//this.canvasRef.current.style.height

            console.log(`Camera.touchstart:(${x1},${y1},${id1}),(${x2},${y2},${id2})` )
            this.ctx.clearRect(0,0,this.canvasRef.current.width,this.canvasRef.current.height)
            this.ctx.beginPath()
            this.ctx.arc(x1*canvasWidth/styleWidth,y1*canvasHeight/styleHeight,50,0,2*Math.PI,false)
            this.ctx.fillStyle="rgba(255,0,0,255)"
            this.ctx.fill()    
        })
        this.canvasRef.current.addEventListener("touchend",(e)=>{
            e.preventDefault()
            const rect = this.canvasRef.current.getBoundingClientRect()    
            //console.log("Camera.touchend")
            const touches = e.changedTouches

            let x1 = NaN
            let y1 = NaN
            let x2 = NaN
            let y2 = NaN
            let id1=NaN
            let id2=NaN
            if(touches.length>0){
                x1 = touches[0].clientX
		        y1 = touches[0].clientY
                x1 -= rect.left
                y1 -= rect.top
                id1 = touches[0].identifier
            }
            if(touches.length>1){
                x2 = touches[1].clientX
		        y2 = touches[1].clientY
                x2 -= rect.left
                y2 -= rect.top
                id2 = touches[1].identifier
            }
            this.setState({x1:x1,
                y1:y1,x2:x2,
                y2:y2})

            const canvasWidth = this.canvasRef.current.width 
            const canvasHeight = this.canvasRef.current.height
            const styleWidth =  320//this.canvasRef.current.style.width
            const styleHeight =  320//this.canvasRef.current.style.height

            console.log(`Camera.touchend:(${x1},${y1},${id1}),(${x2},${y2},${id2})` )

            this.ctx.clearRect(0,0,this.canvasRef.current.width,this.canvasRef.current.height)
            this.ctx.beginPath()
            this.ctx.arc(x1*canvasWidth/styleWidth,y1*canvasHeight/styleHeight,50,0,2*Math.PI,false)    
            this.ctx.fillStyle="rgba(255,0,0,255)"
            this.ctx.fill()    

            //console.dir(touches,{depth:null})
        })
        this.canvasRef.current.addEventListener("touchcancel",(e)=>{
            e.preventDefault()
            //console.log("Camera.touchcancel")
            const rect = this.canvasRef.current.getBoundingClientRect()    

            const touches = e.changedTouches
            let x1 = NaN
            let y1 = NaN
            let x2 = NaN
            let y2 = NaN
            let id1=NaN
            let id2=NaN
            if(touches.length>0){
                x1 = touches[0].clientX
		        y1 = touches[0].clientY
                x1 -= rect.left
                y1 -= rect.top
                id1 = touches[0].identifier
            }
            if(touches.length>1){
                x2 = touches[1].clientX
		        y2 = touches[1].clientY
                x2 -= rect.left
                y2 -= rect.top
                id2 = touches[1].identifier
            }
            this.setState({x1:x1,
                y1:y1,x2:x2,
                y2:y2})

            console.log(`Camera.touchcancel:(${x1},${y1},${id1}),(${x2},${y2},${id2})` )

            // const canvasWidth = this.canvasRef.current.width 
            // const canvasHeight = this.canvasRef.current.height
            // const styleWidth =  this.canvasRef.current.style.width
            // const styleHeight =  this.canvasRef.current.style.height

            this.ctx.clearRect(0,0,this.canvasRef.current.width,this.canvasRef.current.height)

            // //console.dir(touches,{depth:null})
        })
        this.canvasRef.current.addEventListener("touchmove",(e)=>{
            e.preventDefault()
            const rect = this.canvasRef.current.getBoundingClientRect()    
            //console.log("Camera.touchmove")
            const touches = e.changedTouches
        
            let x1 = NaN
            let y1 = NaN
            let x2 = NaN
            let y2 = NaN
            let id1=NaN
            let id2=NaN
            if(touches.length>0){
                x1 = touches[0].clientX
		        y1 = touches[0].clientY
                x1 -= rect.left
                y1 -= rect.top
                id1 = touches[0].identifier
            }
            if(touches.length>1){
                x2 = touches[1].clientX
		        y2 = touches[1].clientY
                x2 -= rect.left
                y2 -= rect.top
                id2 = touches[1].identifier
            }
            this.setState({x1:x1,
                y1:y1,x2:x2,
                y2:y2})
            
            //console.dir(touches,{depth:null})
            const canvasWidth = this.canvasRef.current.width 
            const canvasHeight = this.canvasRef.current.height
            const styleWidth =  320//this.canvasRef.current.style.width
            const styleHeight =  320//this.canvasRef.current.style.height

            console.log(`Camera.touchmove:(${x1},${y1},${id1}),(${x2},${y2},${id2})` )

            this.ctx.clearRect(0,0,this.canvasRef.current.width,this.canvasRef.current.height)
            this.ctx.beginPath()
            this.ctx.arc(x1*canvasWidth/styleWidth,y1*canvasHeight/styleHeight,50,0,2*Math.PI,false)
            this.ctx.fillStyle="rgba(255,0,0,255)"
            this.ctx.fill()    

            if( !isNaN(x2) && !isNaN(y2)){
                this.ctx.beginPath()
                this.ctx.arc(x2*canvasWidth/styleWidth,y2*canvasHeight/styleHeight,50,0,2*Math.PI,false)    
                this.ctx.fillStyle="rgba(255,0,0,255)"
                this.ctx.fill()    
            }
        })

    }
    zoomAndMove2(){
        this.toucheInfos = {}

        this.canvasRef.current.addEventListener("touchstart",(e)=>{
            e.preventDefault()
            const rect = this.canvasRef.current.getBoundingClientRect()    
            //console.log("Camera.touchstart")
            const touches = e.changedTouches

            for(let touch of touches){
                let x = touch.clientX
		        let y = touch.clientY
                x -= rect.left
                y -= rect.top
                let id = touch.identifier

                this.toucheInfos[id]={x:x,y:y}
            }
        })
        this.canvasRef.current.addEventListener("touchend",(e)=>{
            e.preventDefault()
            //const rect = this.canvasRef.current.getBoundingClientRect()    
            //console.log("Camera.touchend")
            const touches = e.changedTouches

            for(let touch of touches){
                let id = touch.identifier
                delete this.toucheInfos[id]
            }
        })
        this.canvasRef.current.addEventListener("touchcancel",(e)=>{
            e.preventDefault()
            //console.log("Camera.touchcancel")
            //const rect = this.canvasRef.current.getBoundingClientRect()    

            const touches = e.changedTouches
            for(let touch of touches){
                let id = touch.identifier
                delete this.toucheInfos[id]
            }
        })
        this.canvasRef.current.addEventListener("touchmove",(e)=>{
            e.preventDefault()
            const rect = this.canvasRef.current.getBoundingClientRect()    
            //console.log("Camera.touchmove")

            const canvasWidth = this.canvasRef.current.width 
            const canvasHeight = this.canvasRef.current.height
            const styleWidth =  320//this.canvasRef.current.style.width
            const styleHeight =  320//this.canvasRef.current.style.height

            const touches = e.changedTouches

            if( Object.keys(this.toucheInfos).length === 1){
                let prevX=0
                let prevY=0
                let currX=0
                let currY=0

                // if(Object.keys(this.toucheInfos).length < touches.length){
                //     let exists=true
                //     let ids=[]
                //     for(let touch of touches){
                //         let id = touch.identifier
                //         if(!this.toucheInfos[id]){
                //             console.log(`not exists ${id}`)
                //             exists=false
                //         }
                //         ids.push(id)
                //     }
                //     if(!exists){
                //         console.dir(Object.keys(this.toucheInfos))
                //         console.dir(ids)
                //     }
    
                //     for(let touch of touches){
                //         currX = touch.clientX
                //         currY = touch.clientY
                //         currX -= rect.left
                //         currY -= rect.top
                //         let id = touch.identifier
                //         this.toucheInfos[id]={x:currX,y:currY}
                //     }
                // }
                // else{
                    for(const key of Object.keys(this.toucheInfos)){
                        prevX = this.toucheInfos[key].x
                        prevY = this.toucheInfos[key].y
                    }

                    for(let touch of touches){
                        let id = touch.identifier
                        if(this.toucheInfos[id]){
                            currX = touch.clientX
                            currY = touch.clientY
                            currX -= rect.left
                            currY -= rect.top
                            this.toucheInfos[id]={x:currX,y:currY}
                        }
                    }

                    const dx = (currX-prevX) * canvasWidth/styleWidth
                    const dy = (currY-prevY) * canvasHeight/styleHeight
    
                    console.log(`(dx:${dx},dy:${dy})`)
    
                    this.imgPosX += dx
                    this.imgPosY += dy
    
                    this.ctx.drawImage(this.imgRef.current,
                        0,
                        0,
                        this.imgRef.current.width,
                        this.imgRef.current.height,
                        this.imgPosX,
                        this.imgPosY,
                        this.imgRef.current.width * this.imgZoomRate,
                        this.imgRef.current.height * this.imgZoomRate
                        )
                    this.ctx.drawImage(this.imgMaskRef.current,0,0,this.canvasRef.current.width,this.canvasRef.current.height)
    
                // }
            }
            else if( Object.keys(this.toucheInfos).length === 2){
                let prevX=[]
                let prevY=[]
                for(const key of Object.keys(this.toucheInfos)){
                    prevX.push(this.toucheInfos[key].x)
                    prevY.push(this.toucheInfos[key].y)
                }
                const prevDist = Math.sqrt( Math.pow(prevX[0]-prevX[1],2) + Math.pow(prevY[0]-prevY[1],2))
                let exists=true
                let ids=[]
                for(let touch of touches){
                    let id = touch.identifier
                    if(!this.toucheInfos[id]){
                        console.log(`not exists ${id}`)
                        exists=false
                    }
                    ids.push(id)
                }
                if(!exists){
                    console.dir(Object.keys(this.toucheInfos))
                    console.dir(ids)
                }

                for(let touch of touches){
                    let x = touch.clientX
                    let y = touch.clientY
                    x -= rect.left
                    y -= rect.top
                    let id = touch.identifier
                    this.toucheInfos[id]={x:x,y:y}
                }
                let currX=[]
                let currY=[]
                for(const key of Object.keys(this.toucheInfos)){
                    currX.push(this.toucheInfos[key].x)
                    currY.push(this.toucheInfos[key].y)
                }
                const currDist = Math.sqrt( Math.pow(currX[0]-currX[1],2) + Math.pow(currY[0]-currY[1],2))
                const zoomRate = currDist/prevDist

                const midX = (currX[0] + currX[1])/2
                const midY = (currY[0] + currY[1])/2

                const midXInCanvas = midX * canvasWidth / styleWidth
                const midYInCanvas = midY * canvasHeight / styleHeight

                //const prevWidth = this.imgRef.current.width * this.imgZoomRate
                //const prevHeight = this.imgRef.current.height * this.imgZoomRate

                this.imgZoomRate *= zoomRate

                this.imgPosX = midXInCanvas + (this.imgPosX - midXInCanvas) * zoomRate
                this.imgPosY = midYInCanvas + (this.imgPosY - midYInCanvas) * zoomRate

                //const currWidth = this.imgRef.current.width * this.imgZoomRate
                //const currHeight = this.imgRef.current.height * this.imgZoomRate

                //const dx = (prevWidth-currWidth)/2.0 
                //const dy = (prevHeight-currHeight)/2.0 
                //this.imgPosX += dx
                //this.imgPosY += dy

                this.ctx.drawImage(this.imgRef.current,
                    0,
                    0,
                    this.imgRef.current.width,
                    this.imgRef.current.height,
                    this.imgPosX,
                    this.imgPosY,
                    this.imgRef.current.width * this.imgZoomRate,
                    this.imgRef.current.height * this.imgZoomRate
                    )
                this.ctx.drawImage(this.imgMaskRef.current,0,0,this.canvasRef.current.width,this.canvasRef.current.height)

                console.log(`(rate:${zoomRate} imgPosX:${this.imgPosX} imgPosY:${this.imgPosY} )`)
            }
            else{
                for(let touch of touches){
                    let currX = touch.clientX
                    let currY = touch.clientY
                    currX -= rect.left
                    currY -= rect.top
                    let id = touch.identifier
                    this.toucheInfos[id]={x:currX,y:currY}
                }
            }
        })
    }
    zoomAndMove3(){
        this.toucheInfos = {}

        this.canvasRef.current.addEventListener("touchstart",(e)=>{
            e.preventDefault()
        })
        this.canvasRef.current.addEventListener("touchend",(e)=>{
            e.preventDefault()
            const touches = e.changedTouches
            for(let touch of touches){
                let id = touch.identifier
                delete this.toucheInfos[id]
            }
        })
        this.canvasRef.current.addEventListener("touchcancel",(e)=>{
            e.preventDefault()
            const touches = e.changedTouches
            for(let touch of touches){
                let id = touch.identifier
                delete this.toucheInfos[id]
            }
        })
        this.canvasRef.current.addEventListener("touchmove",(e)=>{
            e.preventDefault()
            const rect = this.canvasRef.current.getBoundingClientRect()    
            //console.log("Camera.touchmove")
            const touches = e.changedTouches

            if( touches.length === 1 && Object.keys(this.toucheInfos).length === 1 ){
                let prevX=0
                let prevY=0
                let currX=0
                let currY=0
                for(const key of Object.keys(this.toucheInfos)){
                    prevX = this.toucheInfos[key].x
                    prevY = this.toucheInfos[key].y
                }
                this.toucheInfos={}
                for(let touch of touches){
                    currX = touch.clientX
                    currY = touch.clientY
                    currX -= rect.left
                    currY -= rect.top
                    let id = touch.identifier
                    this.toucheInfos[id]={x:currX,y:currY}
                }
                const dx = currX-prevX
                const dy = currY-prevY

                console.log(`(dx:${dx},dy:${dy})`)

                this.imgPosX += dx
                this.imgPosY += dy

                this.ctx.drawImage(this.imgRef.current,
                    0,
                    0,
                    this.imgRef.current.width,
                    this.imgRef.current.height,
                    this.imgPosX,
                    this.imgPosY,
                    this.imgRef.current.width * this.imgZoomRate,
                    this.imgRef.current.height * this.imgZoomRate
                    )
                this.ctx.drawImage(this.imgMaskRef.current,0,0,this.canvasRef.current.width,this.canvasRef.current.height)
            }
            else if( touches.length === 2 && Object.keys(this.toucheInfos).length === 2 ){
                let prevX=[]
                let prevY=[]
                for(const key of Object.keys(this.toucheInfos)){
                    prevX.push(this.toucheInfos[key].x)
                    prevY.push(this.toucheInfos[key].y)
                }
                const prevDist = Math.sqrt( Math.pow(prevX[0]-prevX[1],2) + Math.pow(prevY[0]-prevY[1],2))

                this.toucheInfos={}
                for(let touch of touches){
                    let x = touch.clientX
                    let y = touch.clientY
                    x -= rect.left
                    y -= rect.top
                    let id = touch.identifier
                    this.toucheInfos[id]={x:x,y:y}
                }
                let currX=[]
                let currY=[]
                for(const key of Object.keys(this.toucheInfos)){
                    currX.push(this.toucheInfos[key].x)
                    currY.push(this.toucheInfos[key].y)
                }
                const currDist = Math.sqrt( Math.pow(currX[0]-currX[1],2) + Math.pow(currY[0]-currY[1],2))
                const zoomRate = currDist/prevDist
                const prevWidth = this.imgRef.current.width * this.imgZoomRate
                const prevHeight = this.imgRef.current.width * this.imgZoomRate

                this.imgZoomRate *= zoomRate

                const currWidth = this.imgRef.current.width * this.imgZoomRate
                const currHeight = this.imgRef.current.width * this.imgZoomRate

                const dx = (prevWidth/currWidth)/2.0
                const dy = (prevHeight/currHeight)/2.0

                this.imgPosX += dx
                this.imgPosY += dy

                this.ctx.drawImage(this.imgRef.current,
                    0,
                    0,
                    this.imgRef.current.width,
                    this.imgRef.current.height,
                    this.imgPosX,
                    this.imgPosY,
                    this.imgRef.current.width * this.imgZoomRate,
                    this.imgRef.current.height * this.imgZoomRate
                    )
                this.ctx.drawImage(this.imgMaskRef.current,0,0,this.canvasRef.current.width,this.canvasRef.current.height)

                console.log(`(rate:${zoomRate})`)
            }
            else{
                this.toucheInfos={}
                for(let touch of touches){
                    let currX = touch.clientX
                    let currY = touch.clientY
                    currX -= rect.left
                    currY -= rect.top
                    let id = touch.identifier
                    this.toucheInfos[id]={x:currX,y:currY}
                }
            }
        })
    }
    zoomAndMove4(){
        this.toucheInfos = {}

        this.canvasRef.current.addEventListener("touchstart",(e)=>{
            e.preventDefault()
            console.log("touchstart")
            const touches = e.changedTouches
            for(let touch of touches){
                let currX = touch.clientX
                let currY = touch.clientY
                let id = touch.identifier
                this.toucheInfos[id]={x:currX,y:currY}
            }
        })
        this.canvasRef.current.addEventListener("touchend",(e)=>{
            e.preventDefault()
            console.log("touchend")
            const touches = e.changedTouches
            console.dir(touches,{depth:null})
            for(let touch of touches){
                //let currX = touch.clientX
                //let currY = touch.clientY
                let id = touch.identifier
                if(this.toucheInfos[id]){
                    delete this.toucheInfos[id]
                }
                //this.toucheInfos[id]={x:currX,y:currY}
            }
        })
        this.canvasRef.current.addEventListener("touchcancel",(e)=>{
            e.preventDefault()
            console.log("touchcancel")
            const touches = e.changedTouches
            console.dir(touches,{depth:null})
            for(let touch of touches){
                //let currX = touch.clientX
                //let currY = touch.clientY
                let id = touch.identifier
                if(this.toucheInfos[id]){
                    delete this.toucheInfos[id]
                }
                //this.toucheInfos[id]={x:currX,y:currY}
            }
        })
        this.canvasRef.current.addEventListener("touchmove",(e)=>{
            console.log("touchmove")
            e.preventDefault()
            const touches = e.changedTouches
            if(touches.length !== Object.keys(this.toucheInfos).length){
                console.dir(Object.keys(this.toucheInfos))
                console.dir(touches)
            }
        })
    }

    componentDidMount(){
        console.log("Camera.componentDidMount")
        this.canvasRef.current.width=1080
        this.canvasRef.current.height=1080
        this.ctx = this.canvasRef.current.getContext("2d")

        this.zoomAndMove2()
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
                // this.imgRef.current.width=300
                // this.imgRef.current.height=300
                // if(this.imgRef.current.classList.contains("camera--hidden")){
                //     this.imgRef.current.classList.remove("camera--hidden")
                // }
                this.imgRef.current.onload=()=>{
                    console.log(`canvasRef.current.width:${this.canvasRef.current.width}`)
                    console.log(`canvasRef.current.height:${this.canvasRef.current.height}`)
                    console.log(`imgRef.current.width:${this.imgRef.current.width}`)
                    console.log(`imgRef.current.height:${this.imgRef.current.height}`)
                    console.log(`imgMaskRef.current.width:${this.imgMaskRef.current.width}`)
                    console.log(`imgMaskRef.current.height:${this.imgMaskRef.current.height}`)
            
                    const rateW = this.canvasRef.current.width / this.imgRef.current.width
                    const rateH = this.canvasRef.current.height / this.imgRef.current.height
                    const rate = rateW < rateH ? rateW : rateH
    
                    console.log(`rate:${rate}`)
    
                    const dstWidth = this.imgRef.current.width * rate
                    const dstHeight = this.imgRef.current.height * rate
                    console.log(`dstWidth:${dstWidth}`)
                    console.log(`dstHeight:${dstHeight}`)
    
                    const dstPosX = this.canvasRef.current.width/2 - dstWidth/2
                    const dstPosY = this.canvasRef.current.height/2 - dstHeight/2
                    console.log(`dstPosX:${dstPosX}`)
                    console.log(`dstPosY:${dstPosY}`)
    
                    this.ctx.drawImage(this.imgRef.current,
                        0,
                        0,
                        this.imgRef.current.width,
                        this.imgRef.current.height,
                        dstPosX,
                        dstPosY,
                        dstWidth,
                        dstHeight
                        )
                    this.ctx.drawImage(this.imgMaskRef.current,0,0,this.canvasRef.current.width,this.canvasRef.current.height)

                    this.imgPosX = dstPosX
                    this.imgPosY = dstPosY
                    this.imgZoomRate = rate
                    // this.ctx.beginPath()
                    // this.ctx.arc(540,540,100,0,2*Math.PI,true)
                    // this.ctx.fillStyle="rgba(255,0,0,255)"
                    // this.ctx.fill()        

                    this.imgRef.current.onload = ()=>{}
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
                    <input type="file" className="camera--hidden" ref={this.inputFile} onChange={this.onChange} accept="image/png , image/jpeg"/>
                    <button onClick={this.onClickChoosePhoto}>choose photo</button>
                </div>
                <div>
                    <img className="camera--img camera--hidden" alt="img" ref={this.imgRef} />
                </div>
                <div>
                    <canvas className="camera--canvas" ref={this.canvasRef}></canvas>
                    <img src={FacePositionMask2} alt="mask" ref={this.imgMaskRef} className="camera--hidden"/> 
                </div>
            </div>
        )
    }
}    
