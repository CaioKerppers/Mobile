import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './characters-details.page.html',
  styleUrls: ['./characters-details.page.scss'],
})
export class CharactersDetailsPage implements OnInit {

  characterId: string | null = null;
  character: any;

  constructor(
    private route: ActivatedRoute,
    private charactersService: CharactersService
  ) { }

  ngOnInit() {
    this.characterId = this.route.snapshot.paramMap.get('id');
    if (this.characterId !== null) {
      const characterIdAsNumber = +this.characterId;
      if (!isNaN(characterIdAsNumber)) {
        this.charactersService.getCharacterById(characterIdAsNumber).subscribe(
          (data: any) => {
            this.character = data;
            console.log('Detalhes do Personagem:', this.character);
          },
          (error: any) => {
            console.error('Erro ao buscar os detalhes do personagem:', error);
          }
        );
      } else {
        console.error('ID de personagem inválido:', this.characterId);
      }
    } else {
      console.error('ID de personagem nulo.');
    }
  }
  
}
