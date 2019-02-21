import { Component } from '@angular/core';
import { RxSpeechRecognitionService } from '@kamiazya/ngx-speech-recognition';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public service: RxSpeechRecognitionService){}
}
