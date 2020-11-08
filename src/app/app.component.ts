import { Component , ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	  @ViewChild('number') valueN ;
	  title = 'Count-Down Timer';
	  minutes : string = '00' ; 
	  seconds : string = '00' ; 
	  hours : string = '00' ; 
	  timeUpMsg : string = '' ;
	  time = 0 ;
	  myInterval = -1 ;
	  sec = 0;  
  
	startTimer(term){	
		this.valueN.nativeElement.value = 0;

		if(term%1 != 0 || term <= 0){
			this.timeUpMsg = 'wrong input' ;
			alert(this.timeUpMsg) ;
		}	
		else{
		this.timeUpMsg = '' ;
			if(this.myInterval == -1){
				var sec = 0;
				if(this.time != 0) {
					--this.time ;
					this.sec = this.time ;
					sec = this.time ;
				}
				else{
					this.time = term*60 ;
					sec = this.time ;
					this.sec = sec ;
				}
				this.myInterval = setInterval(() => {
					var time = --sec ;
				  	this.time = time ;
				  	const minutes = Math.floor((time/60)%60);
				  	const hours = Math.floor((time/60)/60) ;
				  	const seconds = time % 60 ;
				  	this.minutes = (minutes < 10) ? '0' + minutes : '' + minutes ;
				  	this.seconds = (seconds < 10) ? '0' + seconds : '' + seconds ;
				  	this.hours = (hours < 10) ? '0' + hours : '' + hours ;
					
					if(this.time == 0){
						this.timeUpMsg = "And the Time is up!!!"  ;
						alert(this.timeUpMsg) ;
						window.location.reload() ;
						this.time = 0 ;
						this.hours == '00' ;
						this.minutes == '00' ;
						this.seconds == '00' ;
						clearInterval(this.myInterval) ;
						this.myInterval = 0 ;
						this.timeUpMsg = '' ;

					} ; 
				} ,1000) ;
			}
		}
	}

	stopTimer(){
		if(this.myInterval != -1){
			clearInterval(this.myInterval) ;
			this.myInterval = -1 ;
		}
	}

	resetTimer(){
		this.time = 0 ;
		this.hours = '00' ;
		this.minutes = '00' ;
		this.seconds = '00' ;
		window.location.reload() ;
		clearInterval(this.myInterval) ;
		this.myInterval = -1 ;
	}
}

