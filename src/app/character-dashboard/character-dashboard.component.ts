import { Component, Injectable, OnInit, Output } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-character-dashboard',
  template: `
    <div *ngIf="characters"> 
      <p>Dashboard</p>
      <ng-container *ngFor="let num of numCharacters"> 
        <ul>
          <li> 
            <a [routerLink]="['/character', characters[num].id]"> 
              {{characters[num].id}}. Name: {{characters[num].name}} | Status: {{characters[num].status}} | Species: {{characters[num].species}}
            </a>
          </li>
        </ul>  
      </ng-container>
    </div>
  `,
  styles: []
})

@Injectable()
export class CharacterDashboardComponent implements OnInit {
  characters: any;
  numCharacters = Array(20).fill(0).map((x,i)=>i);
  error = null

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
        this.getCharacters()
  }

  getCharacters() {
    this.httpService.fetchCharacters().subscribe((data) => {
      this.characters = { ... data.results}
      this.httpService.setCharacters(this.characters)},
      (error) => {
        this.error = error;
    });
  }
}
