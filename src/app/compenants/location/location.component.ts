import { Component, OnInit } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  deleteDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements OnInit {
  locations!: Observable<any>;
  clients!: Observable<any>;
  vehicles!: Observable<any>;
  constructor(private fs: Firestore) {
    this.getData();
    this.getAllClients();
    this.getAllVehicles();
  }

  ngOnInit(): void {}
  addlocation(f: any) {
    let data = f.value;
    const instance = collection(this.fs, 'locations');
    addDoc(instance, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getData() {
    const instance = collection(this.fs, 'locations');
    const data = collectionData(instance, { idField: 'id' });
    data.subscribe((res) => {
      console.log(res);
    });
    this.locations = data;
  }
  deletelocation(id: string) {
    const instance = doc(this.fs, 'locations', id);
    console.log(instance);
    deleteDoc(instance)
      .then((res) => {
        console.log('deleted');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getAllClients() {
    const instance = collection(this.fs, 'client');
    const data = collectionData(instance, { idField: 'id' });
    data.subscribe((res) => {
      console.log(res);
    });
    this.clients = data;
  }

  getAllVehicles() {
    const instance = collection(this.fs, 'vehicule');
    const data = collectionData(instance, { idField: 'id' });
    data.subscribe((res) => {
      console.log(res);
    });
    this.vehicles = data;
  }
}
