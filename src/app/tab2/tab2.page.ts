import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

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
  constructor() {}
  textChange(change){
    
    let wordArray:string[]=[];
    wordArray = this.morse.trim().split(' ');
    this.text="";
    
    
    var allowedCharacters=true;
    for(var i = 0; i < this.morse.length; i++){
      if(this.morse[i]==" " || this.morse[i]=="|" || this.morse[i]=="." || this.morse[i]=="-"){}
      else{
        allowedCharacters=false;
      }
    }
    if(allowedCharacters){
      for(let word of wordArray){

        var found=false;
        if(word== '|' ){
          this.text=this.text+" ";
          found=true;
        }
        else{
          Object.entries(this.alphabet).find(([key, value]) => {
            if (value== word ) {
              
              this.text=this.text+""+key.valueOf();
              found=true;
            }
          });
        }
        if (!found && this.morse.trim().length!=0){
          this.text=this.text+"#";
        }
      }
    }
    else{
      this.text="Se está utilizando caracteres invalidos";
    }
  }
  
}
