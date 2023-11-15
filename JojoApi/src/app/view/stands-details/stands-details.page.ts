import { Component, OnInit } from '@angular/core';
import { StandsService } from 'src/app/services/stands.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stands-details',
  templateUrl: './stands-details.page.html',
  styleUrls: ['./stands-details.page.scss'],
})
export class StandsDetailsPage implements OnInit {
  stand: any = null;

  constructor(private route: ActivatedRoute,
    private standsService: StandsService) { }

  ngOnInit() {
  const standId = this.route.snapshot.paramMap.get('id');
  if (standId !== null) {
    const standIdAsNumber = +standId; // Converter para número
    if (!isNaN(standIdAsNumber)) { // Verificar se é um número válido
      this.standsService.getStandById(standIdAsNumber).subscribe(
        (data: any) => {
          this.stand = data;
          console.log('Detalhes do Stand:', this.stand);
        },
        (error: any) => {
          console.error('Erro ao buscar os detalhes do Stand:', error);
          // Lidar com o erro, por exemplo, exibindo uma mensagem para o usuário
        }
      );
    } else {
      console.error('ID de Stand inválido:', standId);
      // Lidar com o ID de Stand inválido, por exemplo, redirecionar para uma página de erro
    }
  } else {
    console.error('ID de Stand nulo.');
    // Lidar com o ID de Stand nulo, por exemplo, redirecionar para uma página de erro
  }
}


}
