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
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  clients!: Observable<any>;
  constructor(private fs: Firestore) {
    this.getData();
  }

  ngOnInit(): void {}
  addclient(f: any) {
    let data = f.value;
    const instance = collection(this.fs, 'client');
    addDoc(instance, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getData() {
    const instance = collection(this.fs, 'client');
    const data = collectionData(instance, { idField: 'id' });
    data.subscribe((res) => {
      console.log(res);
    });
    this.clients = data;
  }
  deleteclient(id: string) {
    const instance = doc(this.fs, 'client', id);
    console.log(instance);
    deleteDoc(instance)
      .then((res) => {
        console.log('deleted');
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
