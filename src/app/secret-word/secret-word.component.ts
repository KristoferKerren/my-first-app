import { Component } from '@angular/core';

@Component({
    selector: 'app-secret-word',
    templateUrl: './secret-word.component.html',
    styleUrls: ['./secret-word.component.scss']
})

export class SecretWordComponent {
    secretWord: string = "Bananacake";
    showWord: boolean = false;
    logs: string[] = [];

    onToggleWord() : void {
        this.showWord = !this.showWord;
        this.logs.push(this.getLog());
    }

    getLog() : string {
        var today = new Date();
        var time: string = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var isShown: string = this.showWord ? "shown" : "hidden"
        return "User clicked on button " + time + ". Secret word is now " + isShown + ".";
    }
}