import { Component} from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent {
	userName: string = 'Nallely';
	titulo: string = '';
	email: string = '';
	message: string = '';
	class:string = '';
	form:any={};
	show: boolean;
	learners = [
		{
			name:'Ricky',
			age: 59
		},
		{
			name:'Riky',
			age: 40
		},{
			name:'Ricy',
			age: 12
		},
	]
  
	onKeyDown(e) {
		console.log(e.value);
		this.titulo = e.value;
  }
  togglePass(pass, check){
   
    if(check.checked) pass.type='text'
    else pass.type='password'
	}
	testing(){
		console.log(this.email)
		if(this.form.password.length< 6) {
			this.message='muy pequeño'
			this.show = true;
		} else {
			this.message='Bienvenido'
			this.show = false;
		}
	}
	toggleError(pass, alert){
/* 		console.log(alert.class)
		if(pass.value.length > 6){
			console.log('error')
		} */
	}
	tachar(este){
		este.target.style='text-decoration:line-through'; 
		
	}
}
