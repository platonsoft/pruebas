import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-edit-items',
  templateUrl: './add-edit-items.component.html',
  styleUrls: ['./add-edit-items.component.css']
})
export class AddEditItemsComponent implements OnInit {
  tittleText='';
  accesURLText='';
  aboutText='';
  fromGroup: FormGroup;
  idItemSel: any;
  data: any;

  constructor(private route: ActivatedRoute, private router: Router, private messageService: MessageService) {
    this.idItemSel = this.route.snapshot.paramMap.get('id');
    console.log('ID: ' + this.idItemSel);
    let dataSesion = sessionStorage.getItem('data');

    if(dataSesion){
      this.data = JSON.parse(dataSesion);
    }else{
      this.cancelar();
    }
    
    if(this.idItemSel){
      this.tittleText = this.data[this.idItemSel].title;
      this.accesURLText = this.data[this.idItemSel].accessURL;
      this.aboutText = this.data[this.idItemSel]._about;
    }
  }

  ngOnInit(): void {
  }

  guardarItem(): void{
    if(this.idItemSel){
      this.data[this.idItemSel].title = this.tittleText;
      this.data[this.idItemSel].accessURL = this.accesURLText;
      this.data[this.idItemSel]._about = this.aboutText;
      sessionStorage.setItem('data',JSON.stringify(this.data));
      this.messageService.add({severity:'success', summary: 'Guardado', detail: 'Guardado correctamente'});
      
    }else{
      let nuevo = {
        title: this.tittleText,
        accessURL: this.accesURLText,
        _about: this.aboutText
      }
      this.data.push(nuevo);
      sessionStorage.setItem('data',JSON.stringify(this.data));
      this.messageService.add({severity:'success', summary: 'Agregado Exitoso', detail: 'Nuevo Item Agregado correctamente'});
    }
    setTimeout(result => 
      { 
        this.router.navigate(['/home']);
      },3000);
  }

  cancelar(): void{
    this.router.navigate(['/home']);
  }

}
