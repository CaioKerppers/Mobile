import { Component, OnInit } from '@angular/core';
import { StandsService } from 'src/app/services/stands.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stands',
  templateUrl: './stands.page.html',
  styleUrls: ['./stands.page.scss'],
})
export class StandsPage implements OnInit {

  stands : any;
  
  constructor(private standsService: StandsService, HttpClient : HttpClient) { }

  ngOnInit() {
    this.standsService.getStands().subscribe(data => {
      this.stands = data;
      console.log('Stands:', this.stands);
    });
  }

}
