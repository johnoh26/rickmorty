import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-character-detail',
  template: `
  <ng-container *ngIf="!error &&currentCharacter && location">
    <img src={{currentCharacter?.image}}>
    <p>
      Location name: {{currentCharacter.location?.name ?? "NA"}}
    </p>
    <p>
      Location type: {{location?.type ?? "NA"}}
    </p>
    <p>
     Location dimension: {{location?.dimension ?? "NA"}}
    </p>
    <p>
      Number of residents: {{location?.residents?.length ?? "NA"}}
    </p>
    <button [routerLink]="['']">Back to dashboard</button>
  </ng-container>
  <p *ngIf="error">Error Page - {{error}}</p>
  `,
  styles: [
  ]
})
export class CharacterDetailComponent implements OnInit {
  currentCharacter: any;
  image: any;
  location: any;
  error = null;

  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      let characters = this.httpService.getCharacters()

      if(!characters) { // navigating via url; need to fetch characters data
        this.httpService.fetchCharacters().subscribe((data) => {
          characters = { ... data.results}
          if(id && characters) {
            this.currentCharacter = characters[id];
            this.httpService.fetchLocation(this.currentCharacter?.location.url).subscribe((data) => {
              this.location = { ... data}
            }, (error) => {this.error = error;})
          }
        }, (error) => {this.error = error;})
      } else if(id && characters) { // navigating from dashboard; reuse fetched characters data
        this.currentCharacter = characters[id];
        this.httpService.fetchLocation(this.currentCharacter?.location.url).subscribe((data) => {
          this.location = { ... data}
        }, (error) => {this.error = error;})
      }
    })
  }
}
