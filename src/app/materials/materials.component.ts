import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {Material} from '../entities/material';
import {MaterialService} from '../services/material.service';
import {MaterialConfigWindowComponent} from '../material-config-window/material-config-window.component';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  noElementsMessage = 'no materials to show';
  showConfigWindow = false;
  currentElements: Material[] = [];
  totalCost: number = 0.0;
  @ViewChild(MaterialConfigWindowComponent) configWindow: MaterialConfigWindowComponent;

  constructor(private router: Router, private materialService : MaterialService) {
    this.router = router;
    this.materialService = materialService;
  }

  ngOnInit(): void {
    this.materialService.getMaterials().subscribe(data => {
      this.currentElements = data;
      this.getTotalCost();
    });
  }

  elementsPresent(): boolean{
    return this.currentElements.length > 0;
  }

  addElement(): void{
    this.showConfigWindow = true;
    this.configWindow.action = 'new';
  }

  editElement(element: Material) : void{
    this.showConfigWindow = true;
    this.configWindow.action = 'edit';
    this.configWindow.editElement(element);
  }

  deleteElement(id): void{
    this.configWindow.deleteElement(id);
  }

  getCurrentElements(value){
   this.currentElements = value.data;
   this.showConfigWindow = value.showConfig;
   this.getTotalCost();
  }

  getTotalCost() : void{
    this.totalCost = this.currentElements.map(x => x.cost * x.quantity).reduce((a, b) => {
      return a + b;
    });
  }

}
