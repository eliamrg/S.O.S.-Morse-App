import { Component } from '@angular/core';
//import { Flashlight } from '@awesome-cordova-plugins/flashlight/ngx';
import { Flashlight } from '@ionic-native/flashlight/ngx';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  text:String;
  morse:String;
  alphabet:any={
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  };
  
  constructor(private flashlight: Flashlight) {  
  }

 async showDefaultPhrase(palabra:string){
  this.text=palabra;  
  this.showTextInMorse();
    await this.flashlightMorse();
 }


  async flashlightMorse(){
     let pause=200;
     let dot=300;
     let line=1500;
    console.log('Mostrando mensjaje: '+this.morse)
    for (var i = 0; i < this.morse.length; i++) {
      if(this.morse[i]=="."){
        this.flashlight.switchOn();
        await new Promise(f => setTimeout(f, dot));
        this.flashlight.switchOff();
        await new Promise(f => setTimeout(f, pause));
      }
      else if(this.morse[i]=="-"){
        this.flashlight.switchOn();
        await new Promise(f => setTimeout(f, line));
        this.flashlight.switchOff();
        await new Promise(f => setTimeout(f, pause));
      }
    }
  }

  textChange(change){
    this.showTextInMorse();
  
  }

  showTextInMorse(){
    this.morse="";
    for (var i = 0; i < this.text.length; i++) {
      if(this.text[i]==" "){
        this.morse=this.morse+" | ";
      }
      else if(this.alphabet[this.text[i].toLowerCase()]!=null){
        this.morse=this.morse+"   "+this.alphabet[this.text[i].toLowerCase( )]; 
      }
      else{
        this.morse=this.morse+" ? ";
      }
    }
  }
}
