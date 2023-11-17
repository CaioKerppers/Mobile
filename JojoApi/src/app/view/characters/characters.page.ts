import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

  queryValue: string = '';
  queryType: string = '';
  characters: any;

  constructor(private charactersService: CharactersService, private http: HttpClient) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.charactersService.getCharacters().subscribe(
      (data: any[]) => {
        if (data && data.length > 0) {
          this.characters = data;
          console.log('Personagens:', this.characters);
        }
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  searchCharactersByQuery() {
    if (this.queryType.trim() !== '' && this.queryValue.trim() !== '') {
      const query = {
        [this.queryType]: this.queryValue
      };
      this.charactersService.getCharactersByQuery(query)
        .subscribe(
          (data: any) => {
            this.characters = data;
          },
          (error: any) => {
            console.error(error);
          }
        );
    } else {
      this.getCharacters();
    }
  }

}
