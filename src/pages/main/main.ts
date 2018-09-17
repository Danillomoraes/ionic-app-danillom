import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.feeds= [
      {
        title: "Novo Fallout Anunciado!",
        info: "A Bethesda anunciou um novo game da franquia Fallout, intitulado Fallout 76. A empresa vem criando expectativa sobre um novo título da ...",
        img: "https://sm.ign.com/t/ign_br/gallery/f/fallout-76/fallout-76-screenshots_kvq5.640.jpg"
      },
      {
        title: "lorem ipsun",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9W4wam4avZk4Csw7De5dkRDvQ0_t3TqeAE4JGPUJRtgJjIg4c"
      }
    ]
    console.log('ionViewDidLoad MainPage');
  }

}
