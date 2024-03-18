import { Component, OnInit } from '@angular/core';

 declare const L:any;
 
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  ngOnInit() {
    if (!navigator.geolocation) {
      console.log('location is not supported');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      console.log
        // (
        //   `lat:${position.coords.latitude}, lon: ${position.coords.longitude}`
        // );
      let map = L.map('map').setView([12.9738888889,80.2191666667], 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.marker([12.9738888889,80.2191666667],13).addTo(map)
        .bindPopup('CONSULT CYCLE')
        .openPopup();
      
      });
    }
  }