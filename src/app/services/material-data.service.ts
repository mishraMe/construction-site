import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Material} from '../entities/material';

export class MaterialDataService implements InMemoryDbService{

  constructor() { }

  createDb() {
    const materials: Material[] = [
      {id : 4572375, name: 'Gravel', quantity: 23.0, deliveryDate: '12/10/2021', cost: 2300.0, color: '#65344'},
      {id : 2000005, name: 'Sand', quantity: 43.0, deliveryDate: '12/11/2021', cost: 3300.0, color: '#65376'},
      {id : 1684590, name: 'Mud', quantity: 23.0, deliveryDate: '12/10/2021', cost: 9000.0, color: '#63324'}
    ];
    return {materials};
  }
}
