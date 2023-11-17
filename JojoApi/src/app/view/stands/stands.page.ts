import { Component, OnInit } from '@angular/core';
import { StandsService } from 'src/app/services/stands.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stands',
  templateUrl: './stands.page.html',
  styleUrls: ['./stands.page.scss'],
})
export class StandsPage implements OnInit {

  queryValue: string = ''; // Declare e inicialize as propriedades
  queryType: string = '';
  stands : any;
  
  constructor(private standsService: StandsService, HttpClient : HttpClient) {
    this.standsService = standsService;
   }

   ngOnInit() {
    this.getStands();
  }

  getStands() {
    this.standsService.getStands().subscribe(data => {
      this.stands = data;
      console.log('Stands:', this.stands);
    });
  }

  searchStandsByQuery() {
    if (this.queryType.trim() !== '' && this.queryValue.trim() !== '') {
      const query = {
        [this.queryType]: this.queryValue
      };
      this.standsService.getStandsByQuery(query)
        .subscribe((data: any) => {
          this.stands = data;
        }, (error: any) => {
          console.error(error);
        });
    } else {
      this.getStands();
    }
  }
  

}
