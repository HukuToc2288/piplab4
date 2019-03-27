import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-toolbox/lib/button';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/Link';
import Input from 'react-toolbox/lib/input';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

const AppIcon = () => (
	<img width="32" height="32" src="https://se.ifmo.ru/image/company_logo?img_id=10734&t=1552755572798"/>
);

const authIcon = () => (
	<img src="https://pbs.twimg.com/media/DyQF-BWWkAA4lpW.jpg"/>
);

class Main extends React.Component {

  state = { login: '', psswd: '', };

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };


render(){
	return(
<div>
  <AppBar title='Чернышев Н.Е., Комаров Е.А., Группа P3201, Вариант 18161' rightIcon={<AppIcon/>}>
  </AppBar>
<Card style={{padding: "1.5em", maxWidth: "50em", margin: "0 auto"}}>
<CardTitle
      title="Авторизация"
    />	
	<form method="post" action="/login" class="authForm">
      <section class="authWrapper">
		<Input type='text' label='Логин' name='login' value={this.state.name} onChange={this.handleChange.bind(this, 'login')} maxLength={16 } />
		<Input type="password" label='Пароль' name='psswd' value={this.state.psswd} onChange={this.handleChange.bind(this, 'psswd')} maxLength={16 } />
      </section>
	  <Button type='submit' label='Войти' accent />
	</form>
	</Card>
</div>
);
}
}

ReactDOM.render(<Main/>, document.getElementById('app'));