import React,{ Component } from "react"
import DatePicker from "react-datepicker";
import "./Page1.css"
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import ja from 'date-fns/locale/ja';
import "react-datepicker/dist/react-datepicker.css";
import "./CheckOnOff.css"
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
                <div className="page1--inner">
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

https://reactdatepicker.com/
`}
                </pre>
                </div>
            </div>
        )
    }
}    
