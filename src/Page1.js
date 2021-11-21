import React,{ Component } from "react"
import DatePicker from "react-datepicker";
import "./Page1.css"
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import ja from 'date-fns/locale/ja';
import "react-datepicker/dist/react-datepicker.css";

//import CheckOn from "./CheckOn.svg"
//import CheckOff from "./CheckOff.svg"
import "./CheckOnOff.css"
//import TagX from "./TagX.svg"
//import Search from "./Search.svg"
//import ArrowUp from "./ArrowUp.svg"
//import ArrowDown from "./ArrowDown.svg"
//import Background from "./Background.svg"
//import SplashBK from "./SplashBK.svg"
//import CheckBox from "./CheckBox"
//import TagList from "./TagList"

import "./date-time.css"

registerLocale('ja', ja)

export default class Page1 extends Component {
    constructor(props){
        console.log("Page1.constructor")
        super(props);
        this.state = {
            startDate: new Date()
        }
        this.handleChange = (date) => {
            this.setState({
              startDate: date
            });
            console.log(`date:${date}`)
          }
        this.imgCheckOnRef = React.createRef() 
        this.imgCheckOffRef = React.createRef() 
        this.imgTagXRef = React.createRef() 
        this.imgSearchRef = React.createRef() 

        this.onChangeCheckBox = this.onChangeCheckBox.bind(this)
    }
    componentDidMount(){
        console.log("Page1.componentDidMount")
    }
    componentWillUnmount(){
        console.log("Page1.componentWillUnmount")
    }
    onChangeCheckBox(checked, param){
        console.log(checked,param)
    }
    render() {
        // const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
        //     <button className="date-time--input" onClick={onClick} ref={ref}>
        //     {value}
        //   </button>
        //   ));
          const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
            <input type="text" readOnly={true} className="date-time--input" onClick={onClick} ref={ref} value={value}/>
          ))
        return (
            <div className="page1">
                <h1>DatePicker</h1>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    showTimeSelect
                    locale="ja"
                    dateFormat="yyyy/MM/dd(E)HH:mm"
                    className="date-time--input"
                    customInput={<ExampleCustomInput />}
                />
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    showTimeSelect
                    locale="ja"
                    dateFormat="yyyy/MM/dd(E)HH:mm"
                    className="date-time--input"
                />
                <DatePicker
                    renderCustomHeader={({
                        date,
                        changeYear,
                        changeMonth,
                        decreaseMonth,
                        increaseMonth,
                        prevMonthButtonDisabled,
                        nextMonthButtonDisabled,
                    }) => (
                        <div
                            style={{
                                margin: 10,
                                display: "flex",
                                justifyContent: "space-around",
                            }}
                            >
                            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled} style={{border: "none",outline: "none",backgroundColor: "transparent", cursor:"pointer"}} >
                                <div>{"<"}</div>
                            </button>
                            <div>{date.getFullYear() + " 年 " + (date.getMonth() + 1) + " 月"}</div>
                            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled} style={{border: "none",outline: "none",backgroundColor: "transparent", cursor:"pointer"}}>
                                {">"}
                            </button>
                        </div>
                    )}
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    showTimeSelect
                    locale="ja"
                    dateFormat="yyyy/MM/dd(E)HH:mm"
                    className="date-time--input"
                />
                <pre>
{`
React Datepicker

The package can be installed via NPM:

npm install react-datepicker --save

Or by using Yarn:

yarn add react-datepicker
`}
                </pre>
                {
                    /*
                <TagList/>
                <CheckBox txt={"チェックボックス"} param={{a:1, b:2, c:3}} onChange={this.onChangeCheckBox}/>
                <img src={CheckOff} alt="CheckOff" ref={this.imgCheckOffRef} /> 
                <img src={CheckOn} alt="CheckOn" ref={this.imgCheckOnRef} /> 
                <img src={TagX} alt="TagX" ref={this.imgTagXRef} />  
                <img src={Search} alt="TagX" ref={this.imgSearchRef} />
                <img src={ArrowUp} alt="ArrowUp" />
                <img src={ArrowDown} alt="ArrowDown" />
                    */
                }
                {
                    /*
                <div>
                <img src={Background} alt="Background" />
                <img src={SplashBK} alt="SplashBK" />
                </div> 
                    */
                }
            </div>
        )
    }
}    
