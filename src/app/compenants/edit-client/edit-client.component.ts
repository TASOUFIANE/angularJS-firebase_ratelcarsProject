import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  updateDoc,
} from '@angular/fire/firestore';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css'],
})
export class EditClientComponent implements OnInit {
  private id: string = '';
  clients!: any;
  client: any = {};
  constructor(private aRoute: ActivatedRoute, private fs: Firestore) {
    this.aRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.getTheselectedClient();
    });
  }

  ngOnInit(): void {}

  getTheselectedClient() {
    const instance = collection(this.fs, 'client');
    const data = collectionData(instance, { idField: 'id' });
    data.subscribe((res) => {
      this.clients = res;
      this.clients.forEach((element: any) => {
        if (element.id == this.id) {
          this.client = element;
          console.log(this.client);
        }
      });
    });
  }
  updateclient(f: any) {
    const instance = doc(this.fs, 'client', this.id);
    const data = {
      nom: f.value.nom,
      prenom: f.value.prenom,
      numero: f.value.numero,
      adresse: f.value.adresse,
    };
    updateDoc(instance, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
