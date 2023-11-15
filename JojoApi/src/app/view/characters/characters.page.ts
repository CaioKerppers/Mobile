import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {
  characters: any;

  constructor(private charactersService: CharactersService, private http: HttpClient) { }

  ngOnInit() {
    this.charactersService.getCharacters().subscribe(data => {
      this.characters = data;
      console.log('Personagens:', this.characters);
    });
  }
}
