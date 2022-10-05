import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app1';

  data: any[] = [];
  constructor(private http: HttpClient) {
    this.http.get('http://localhost/angular_mysqlv1/server/server.php').subscribe(data => {
    this.data.push(data);
    console.log(this.data);


    }, error => console.error(error));
  }
}
