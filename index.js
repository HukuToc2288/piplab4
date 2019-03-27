import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-toolbox/lib/button';
import AppBar from 'react-toolbox/lib/app_bar';
import Input from 'react-toolbox/lib/input';
import checkBoxTheme from 'react-toolbox/lib/checkbox/theme.css'
import appBarTheme from 'react-toolbox/lib/checkbox/theme.css'
import buttonTheme from 'react-toolbox/lib/checkbox/theme.css'
import inputTheme from 'react-toolbox/lib/checkbox/theme.css'

import Checkbox from "react-toolbox/components/checkbox/Checkbox";

const AppIcon = () => (
	<img width="32" height="32" src="https://se.ifmo.ru/image/company_logo?img_id=10734&t=1552755572798"/>
);

const authIcon = () => (
	<img src="https://pbs.twimg.com/media/DyQF-BWWkAA4lpW.jpg"/>
);

class XCheckbox extends React.Component {
    state = {"-4": false, "-3": false, "-2": false, "-1": false, "0": false, "1": false, "2": true, "3": false, "4": false};
    handleChange = (field, label) => {
        for (let key in this.state){
            this.setState({[key]: false})
        }
        this.setState({[field]: true});
        document.getElementsByName("xValueInput")[0].value=field;
    };

    render () {
        return (
            <div>
                <Checkbox
                    theme={checkBoxTheme}
                    checked={this.state["-4"]}
                    label="-4"
                    onChange={this.handleChange.bind(this, "-4")}/>
                <Checkbox
                    theme={checkBoxTheme}
                    checked={this.state["-3"]}
                    label="-3"
                    onChange={this.handleChange.bind(this, "-3")}/>
                <Checkbox
                    theme={checkBoxTheme}
                    checked={this.state["-2"]}
                    label="-2"
                    onChange={this.handleChange.bind(this, "-2")}/>
                <Checkbox
                    theme={checkBoxTheme}
                    checked={this.state["-1"]}
                    label="-1"
                    onChange={this.handleChange.bind(this, "-1")}/>
                <Checkbox
                    theme={checkBoxTheme}
                    checked={this.state["0"]}
                    label="0"
                    onChange={this.handleChange.bind(this, "0")}/>
                <Checkbox
                    theme={checkBoxTheme}
                    checked={this.state["1"]}
                    label="1"
                    onChange={this.handleChange.bind(this, "1")}/>
                <Checkbox
                    theme={checkBoxTheme}
                    checked={this.state["2"]}
                    label="2"
                    onChange={this.handleChange.bind(this, "2")}/>
                <Checkbox
                    theme={checkBoxTheme}
                    checked={this.state["3"]}
                    label="3"
                    onChange={this.handleChange.bind(this, "3")}/>
                <Checkbox
                    theme={checkBoxTheme}
                    checked={this.state["4"]}
                    label="4"
                    onChange={this.handleChange.bind(this, "4")}/>
            </div>
        );
    }
}

class RCheckbox extends React.Component {
    state = {"-4": false, "-3": false, "-2": false, "-1": false, "0": false, "1": false, "2": false, "3": true, "4": false};
    handleChange = (field, label) => {
        for (let key in this.state){
            this.setState({[key]: false})
        }
        this.setState({[field]: true});
        document.getElementsByName("rValueInput")[0].value=field;
        setR(field);
    };

    render () {
        return (
            <div>
                <Checkbox
                    disabled
                    theme={checkBoxTheme}
                    checked={this.state["-4"]}
                    label="-4"
                    onChange={this.handleChange.bind(this, "-4")}/>
                <Checkbox
                    disabled
                    theme={checkBoxTheme}
                    checked={this.state["-3"]}
                    label="-3"
                    onChange={this.handleChange.bind(this, "-3")}/>
                <Checkbox
                    disabled
                    theme={checkBoxTheme}
                    checked={this.state["-2"]}
                    label="-2"
                    onChange={this.handleChange.bind(this, "-2")}/>
                <Checkbox
                    disabled
                    theme={checkBoxTheme}
                    checked={this.state["-1"]}
                    label="-1"
                    onChange={this.handleChange.bind(this, "-1")}/>
                <Checkbox
                    theme={checkBoxTheme}
                    checked={this.state["0"]}
                    label="0"
                    onChange={this.handleChange.bind(this, "0")}/>
                <Checkbox
                    theme={checkBoxTheme}
                    checked={this.state["1"]}
                    label="1"
                    onChange={this.handleChange.bind(this, "1")}/>
                <Checkbox
                    theme={checkBoxTheme}
                    checked={this.state["2"]}
                    label="2"
                    onChange={this.handleChange.bind(this, "2")}/>
                <Checkbox
                    theme={checkBoxTheme}
                    checked={this.state["3"]}
                    label="3"
                    onChange={this.handleChange.bind(this, "3")}/>
                <Checkbox
                    theme={checkBoxTheme}
                    checked={this.state["4"]}
                    label="4"
                    onChange={this.handleChange.bind(this, "4")}/>
            </div>
        );
    }
}

class Main extends React.Component {

    state = { yValue: ""};
    yChange = (value) => {
        value = value.replace(/[^-0-9\.]/g,'');

        while(true)
        {
            let ind1 = value.indexOf(".");
            if(ind1>=0)
            {
                let ind2 = value.indexOf(".", ind1+1);
                if(ind2>0 || ind1==0)
                    value = value.substr(0,ind1) + value.substr(ind1+1,value.length-1-ind1);
                else
                    break;
            }
            else
                break;
        }

        while(true)
        {
            let ind1 = value.indexOf("-");
            if(ind1==0)
            {
                if(value.indexOf(".")==1)
                    value = value = value.substr(0,1) + value.substr(1+1,value.length-1-0);
                let ind2 = value.indexOf("-", ind1+1);
                if(ind2>0)
                    value = value.substr(0,ind2) + value.substr(ind2+1,value.length-1-ind2);
                else
                    break;
            }
            else if(ind1>0)
                value = value.substr(0,ind1) + value.substr(ind1+1,value.length-1-ind1);
            else
                break;
        }
        this.setState({...this.state,yValue: value});
    };


render(){
	return(
<div>
  <AppBar title='Чернышев Н.Е., Комаров Е.А., Группа P3201, Вариант 18161' rightIcon={<AppIcon/>}>
  </AppBar>
  <table>
        <tbody>
        <tr>
            <td>
                    <fieldset>
                        <table>
                            <tr>
                                <td colspan="2">
                                    <legend>Параметр X</legend>
                                </td>
                                <td>
                                    <legend>Параметр R</legend>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <div>
                                        <XCheckbox/>
                                    </div>
                                </td>
                                <td align="center">
                                    <RCheckbox/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3">
                                    <legend>Параметр Y</legend>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3">
                                    <Input required="ТруЪ" type='text' name="yValueInput" label='Значение' value={this.state.yValue} onChange={this.yChange.bind(this)} maxLength={8} />
                                </td>
                            </tr>
                            <input type="hidden" name="xValueInput" value="2"/>
                            <input type="hidden" name="rValueInput" value="3"/>
                            <tr>
                                <td colspan="3">
                                    <Button type="button" id="checkButton" onMouseUp={window.addDot} label="Отправить"/>
                                </td>
                            </tr>
                        </table>
                    </fieldset>
            </td>
            <td>
                <canvas width = "500" height = "500"></canvas>
            </td>
        </tr>
        </tbody>
    </table>

    <h1>Результаты</h1>
    <thead>
    <tr>
        <th>Параметр X</th>
        <th>Параметр Y</th>
        <th>Параметр R</th>
        <th>Время проверки</th>
        <th>Результат</th>
    </tr>
    </thead>
    <tbody id="results">
    </tbody>
</div>
);
}
}

ReactDOM.render(<Main/>, document.getElementById('app'));