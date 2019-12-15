import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhoneBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class PhoneBookPage {

  contactArray = [{name: 'John1', telephone: '0870388294', imageUrl: 'assets/imgs/girl1.jpg'}
                  ,{name: 'John2', telephone: '0870388294', imageUrl: 'assets/imgs/girl2.jpg'}
                  ,{name: 'John3', telephone: '0870388294', imageUrl: 'assets/imgs/girl3.jpg'}
                  ,{name: 'John4', telephone: '0870388294', imageUrl: 'assets/imgs/girl4.jpg'}
                ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }

}//end class
