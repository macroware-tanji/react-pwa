import React,{ Component } from "react"
import "./SWUpdateDialog.css"

export default class SWUpdateDialog extends Component {
    constructor(props){
        console.log("SWUpdateDialog.constructor")
        super(props);
        this.state = {
            show: this.props.registration.waiting!==null
        }
        this.onHundleUpdate = this.onHundleUpdate.bind(this)
    }
    componentDidMount(){
        console.log("SWUpdateDialog.componentDidMount")
    }
    componentWillUnmount(){
        console.log("SWUpdateDialog.componentWillUnmount")
    }
    onHundleUpdate(e){
        this.props.registration.waiting?.postMessage({ type: 'SKIP_WAITING' });
        this.setState({show: false});
        window.location.reload();
    }
    render() {
        return this.state.show ? (
            <div className="swupdatedialog--background">
                <div className="swupdatedialog--dialog">
                    <div className="swupdatedialog--dialog__message">
                        新しいバージョンがリリースされました。🎉
                    </div>
                    <div className="swupdatedialog--dialog__button-area">
                        <button  className="swupdatedialog--dialog__button" onClick={this.onHundleUpdate}>アップデート</button>
                    </div>
                </div>
            </div>        
            )
            :
            (
            <></>
            )
    }
}    
