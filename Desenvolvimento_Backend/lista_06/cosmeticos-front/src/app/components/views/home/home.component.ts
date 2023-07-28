import { CosmeticoService } from './../../../services/cosmetico.service';
import { Component, OnInit } from '@angular/core';
import { Cosmetico } from 'src/app/models/cosmetico';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private cosmeticoService: CosmeticoService) { }

  cosmeticos!: Cosmetico[];

  ngOnInit(): void {
    this.cosmeticoService.getCosmeticos().subscribe((response: Cosmetico[]) =>{
      this.cosmeticos = response;
    })
  }

}
