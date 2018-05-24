import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the StadiumsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StadiumsProvider {
  public Stadiums:any[]=  [
    {
      "id": 1,
      "name": "Luzhniki Stadium",
      "city": "Moscow",
      "lat": 55.715765,
      "lng": 37.5515217,
      "image": "https://upload.wikimedia.org/wikipedia/commons/e/e6/Luzhniki_Stadium%2C_Moscow.jpg"
    },
    {
      "id": 2,
      "name": "Otkrytiye Arena",
      "city": "Moscow",
      "lat": 55.817765,
      "lng": 37.440363,
      "image": "https://upload.wikimedia.org/wikipedia/commons/5/50/Stadium_Spartak_in_Moscow.jpg"
    },
    {
      "id": 3,
      "name": "Krestovsky Stadium",
      "city": "Saint Petersburg",
      "lat": 59.972740,
      "lng": 30.221408,
      "image": "https://upload.wikimedia.org/wikipedia/commons/a/ad/Spb_06-2017_img40_Krestovsky_Stadium.jpg"
    },
    {
      "id": 4,
      "name": "Kaliningrad Stadium",
      "city": "Kaliningrad",
      "lat": 54.698157,
      "lng": 20.533859,
      "image": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Kaliningrad_stadium_-_2018-04-07.jpg"
    },
    {
      "id": 5,
      "name": "Kazan Arena",
      "city": "Kazan",
      "lat": 55.820983,
      "lng": 49.160966,
      "image": "https://upload.wikimedia.org/wikipedia/commons/3/3a/Kazan_Arena_08-2016.jpg"
    },
    {
      "id": 6,
      "name": "Nizhny Novgorod Stadium",
      "city": "Nizhny Novgorod",
      "lat": 56.337287,
      "lng": 43.963251,
      "image": "https://upload.wikimedia.org/wikipedia/commons/9/90/Nizhny_Novgorod_Stadium_%28March_2018%29.jpg"
    },
    {
      "id": 7,
      "name": "Cosmos Arena",
      "city": "Samara",
      "lat": 53.278146,
      "lng": 50.238854,
      "image": "http://img.fifa.com/image/upload/t_l4/d0mymt1ubl2pypmu3gn3.jpg"
    },
    {
      "id": 8,
      "name": "Volgograd Arena",
      "city": "Volgograd",
      "lat": 48.734195,
      "lng": 44.548345,
      "image": "https://upload.wikimedia.org/wikipedia/commons/6/61/Construction_of_Volgograd_Arena_inside_04.jpg"
    },
    {
      "id": 9,
      "name": "Mordovia Arena",
      "city": "Saransk",
      "lat": 54.181795,
      "lng": 45.203851,
      "image": "https://upload.wikimedia.org/wikipedia/commons/c/c9/%D0%A1%D1%82%D0%B0%D0%B4%D0%B8%D0%BE%D0%BD_Mordovia_arena.jpg"
    },
    {
      "id": 10,
      "name": "Rostov Arena",
      "city": "Rostov-on-Don",
      "lat": 47.209581,
      "lng": 39.738424,
      "image": "https://upload.wikimedia.org/wikipedia/commons/9/94/Rostov-Arens_%28april_2018%29_01.jpg"
    },
    {
      "id": 11,
      "name": "Fisht Olympic Stadium",
      "city": "Sochi",
      "lat": 43.402011,
      "lng": 39.955709,
      "image": "https://upload.wikimedia.org/wikipedia/commons/5/55/Fisht_Stadium_in_January_2018.jpg"
    },
    {
      "id": 12,
      "name": "Central Stadium",
      "city": "Yekaterinburg",
      "lat": 56.832490,
      "lng": 60.573585,
      "image": "https://upload.wikimedia.org/wikipedia/commons/d/d2/Estadio_Central_%28Ekaterinburg-arena%29.jpg"
    }
  ];

constructor(public http: HttpClient) {
  // console.log('Hello TeamsProvider Provider');
 console.log(this.Stadiums);
}


GetStadiums(){
  return this.Stadiums;
}
}