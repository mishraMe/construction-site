import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Material} from '../entities/material';
import {MaterialService} from '../services/material.service';
import {pipe} from 'rxjs';
import {dematerialize} from 'rxjs/operators';

@Component({
  selector: 'app-material-config-window',
  templateUrl: './material-config-window.component.html',
  styleUrls: ['./material-config-window.component.css']
})
export class MaterialConfigWindowComponent implements OnInit {

  @Input() materialName;
  @Input() materialQuant;
  @Input() materialColor;
  @Input() materialDelivery;
  @Input() materialCost;
  @Input('action') action;
  id: number;
  material: Material;
  @Output() newElementsEmitter = new EventEmitter<any>();
  constructor(private materialService: MaterialService) {
    this.materialService = materialService;
  }

  ngOnInit(): void {
    this.refreshWindow();
  }

  deleteElement(id){
    this.materialService.deleteMaterials(id).subscribe( data =>{
    });
    this.getAllCurrentMaterials();
  }

  editElement(element){
    this.id = element.id;
    this.materialName = element.name;
    this.materialCost = element.cost;
    this.materialDelivery = element.deliveryDate;
    this.materialQuant = element.quantity;
    this.materialColor = element.color;
  }

  updateElement(){
    this.createMaterialObj();
    this.materialService.updateMaterials(this.material).subscribe(data =>{
    });
    this.getAllCurrentMaterials();
  }

  addToList(): void{
    this.id = Math.floor(Math.random() * 12345) + 274863;
    this.createMaterialObj();
    this.materialService.addMaterials(this.material).subscribe(data => {
    });
    this.getAllCurrentMaterials();
  }

  getAllCurrentMaterials(){
    this.materialService.getMaterials().subscribe(data => {
      this.newElementsEmitter.emit({data: data, showConfig: false});
    });
  }

  createMaterialObj(): void{
    this.material = {id : this.id, name : this.materialName, quantity: this.materialQuant,
      cost: this.materialCost, color: this.materialColor, deliveryDate: this.materialDelivery};
  }

  refreshWindow() : void{
    this.materialName = '';
    this.materialDelivery = '';
    this.materialCost = 0.0;
    this.materialQuant = 0.0;
    this.materialColor = '#1111';
  }
}
