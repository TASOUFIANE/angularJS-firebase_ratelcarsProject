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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  vehicules!: Observable<any>;
  constructor(private fs: Firestore) {
    this.getData();
  }

  ngOnInit(): void {}
  addvoiture(f: any) {
    let data = f.value;
    const instance = collection(this.fs, 'vehicule');
    addDoc(instance, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getData() {
    const instance = collection(this.fs, 'vehicule');
    const data = collectionData(instance, { idField: 'id' });
    data.subscribe((res) => {
      console.log(res);
    });
    this.vehicules = data;
  }
  deletevehicule(id: string) {
    const instance = doc(this.fs, 'vehicule', id);
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
