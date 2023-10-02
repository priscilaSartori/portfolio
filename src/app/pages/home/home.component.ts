import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  words: string[] = ['Desenvolvedora Web.', 'Desenvolvedora Front-End.', 'Desenvolvedora Back-End.', 'Desenvolvedora Full-Stack.'];
  currentWordIndex = 0;
  partialWord = '';

  ngOnInit() {
    this.typeWord();
  }
  
  typeWord() {
  const lastWord = this.words[this.currentWordIndex];
  const length = lastWord.length;

  let index = 0;
  const intervalId = setInterval(() => {
    if (index < length) {
      this.partialWord += lastWord[index];
      index+=1;
    } else {
      this.partialWord = this.partialWord.slice(0, -1); 
    }
    if (this.partialWord.length === 0 && index === length) {
      clearInterval(intervalId);
      this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
      setTimeout(() => this.typeWord(), 1500);
    }
    }, 100);
  }
}