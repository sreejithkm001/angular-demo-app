import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
// export class AppComponent {
//   title = 'angular-demo-app';
// }
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.example();
  }
  example() {
    var variable1 = 'TCS';
    let variable2 = 'ACCENTURE';
    const variable3 = 'BEINEX';

    if (2 > 1) {
      var variable1 = 'COGNIZANT';
      let variable2 = 'CAPGEMINI'; 
      console.log('1', variable1);
      console.log('2', variable2);
      console.log('3', variable3);
    }
    console.log('4', variable1); //variable value ressigned
    console.log('5', variable2); //let cannot perform ressign
    console.log('6', variable3);
  }
}
