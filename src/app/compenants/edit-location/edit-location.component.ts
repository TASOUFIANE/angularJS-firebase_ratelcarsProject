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
  selector: 'app-edit-location',
  templateUrl: './edit-location.component.html',
  styleUrls: ['./edit-location.component.css'],
})
export class EditLocationComponent implements OnInit {
  private id: string = '';
  locations!: any;
  location: any = {};
  constructor(private aRoute: ActivatedRoute, private fs: Firestore) {
    this.aRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.getTheselectedLocation();
    });
  }

  ngOnInit(): void {}

  getTheselectedLocation() {
    const instance = collection(this.fs, 'locations');
    const data = collectionData(instance, { idField: 'id' });
    data.subscribe((res) => {
      this.locations = res;
      this.locations.forEach((element: any) => {
        if (element.id == this.id) {
          this.location = element;
          console.log(this.location);
        }
      });
    });
  }
  updatelocation(f: any) {
    const instance = doc(this.fs, 'locations', this.id);
    const data = {
      numero: f.value.numero,
      date_debut: f.value.date_debut,
      date_fin: f.value.date_fin,
      client: f.value.client,
      vehicule: f.value.vehicule,
      heure_debut: f.value.heure_debut,
      heure_fin: f.value.heure_fin,
      kilometrage_debut: f.value.kilometrage_debut,
      kilometrage_fin: f.value.kilometrage_fin,
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
