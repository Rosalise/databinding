import { AfterViewInit, Component } from '@angular/core';
import { TextAnimation } from 'ngx-teximate';
import { fadeInDown } from 'ng-animate';
import { right } from '@popperjs/core';

@Component({
  selector: 'app-root',
  template: `<teximate [text]="text" [enter]="enterAnimation"></teximate>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "Your name";
  meaning = "";

  isShowDiv = true;  
  showNext() : void {
    this.isShowDiv = !this.isShowDiv; 
  }

  isShowAnswer = true;  
  showNextAnswer() : void {
    this.isShowAnswer = !this.isShowAnswer; 
  }

  text = 'text';
 
  enterAnimation: TextAnimation = {
    animation: fadeInDown,
    delay: 50,
    type: 'letter'

}

meaningCheck(meaning : string) : string {
  if(this.meaning === "Lord Voldemort")
  {
    document.getElementById("phrase3").innerHTML = "You're right, muggle. Avada Kedavra!";
    return "You're right, muggle. Avada Kedavra!";
  }
  else {
    document.getElementById("phrase3").innerHTML = "That's not right! I am Lord Voldemort! Avada Kedavra!";
    return "That's not right! I am Lord Voldemort! Avada Kedavra!";
  }

}

}
