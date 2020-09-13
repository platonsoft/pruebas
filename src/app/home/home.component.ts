import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any;

  constructor(public itemsService: ItemsService, private route: ActivatedRoute, private router: Router,private messageService: MessageService){
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

  ngOnInit(): void {
  }

  addItem(): void{
    this.router.navigate(['/item/add']);
  }

  editItem(item: any): void{
    this.router.navigate(['/item/add',{id: item}]);
  }

  delItem(item: any): void{
    let dataSesion = sessionStorage.getItem('data');

    if(dataSesion){
      let data = JSON.parse(dataSesion);
      data.splice(item, 1);
      sessionStorage.setItem('data',JSON.stringify(data));
      this.messageService.add({severity:'success', summary: 'Eliminado', detail: 'Eliminado correctamente'});
      setTimeout(result => 
        { 
          window.location.reload();
        },3000);
      
    }
  }

}
