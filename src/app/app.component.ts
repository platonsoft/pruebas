import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { ItemsService } from './services/items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-mainsoft';
  products: any;

  constructor(public itemsService: ItemsService, private route: ActivatedRoute, private router: Router, private primengConfig: PrimeNGConfig){
    this.primengConfig.ripple = true;
    this.itemsService.listaItems().subscribe(result => {
      const datalocal = sessionStorage.getItem('data');
      if(!datalocal){
        this.products = result.result.items;
        sessionStorage.setItem('data', JSON.stringify(this.products));
      }else{
        this.products= JSON.parse(datalocal);
      }
    });
  }

  addItem(item: any): void{
    console.log(item);
    this.router.navigate(['/item/add']);
    
  }

  editItem(item: any): void{
    console.log(item);
    
  }

  delItem(item: any): void{
    console.log(item);
    
  }
}
