import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  updateDoc,
} from '@angular/fire/firestore';

@Component({
  selector: 'app-edit-voiture',
  templateUrl: './edit-voiture.component.html',
  styleUrls: ['./edit-voiture.component.css'],
})
export class EditVoitureComponent implements OnInit {
  private id: string = '';
  vehicules!: any;
  vehicule: any = {};
  constructor(private aRoute: ActivatedRoute, private fs: Firestore) {
    this.aRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.getTheselectedVehicule();
    });
  }

  ngOnInit(): void {}

  getTheselectedVehicule() {
    const instance = collection(this.fs, 'vehicule');
    const data = collectionData(instance, { idField: 'id' });
    data.subscribe((res) => {
      this.vehicules = res;
      this.vehicules.forEach((element: any) => {
        if (element.id == this.id) {
          this.vehicule = element;
          console.log(this.vehicule);
        }
      });
    });
  }
  updatevoiture(f: any) {
    const instance = doc(this.fs, 'vehicule', this.id);
    const data = {
      model: f.value.model,
      marque: f.value.marque,
      numero: f.value.numero,
      puissance: f.value.puissance,
      type: f.value.type,
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
