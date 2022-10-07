import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
    
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app2';
  dtOptions: DataTables.Settings = {};
  information: any[] = [];
   
  constructor(private http: HttpClient) { }
   
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
   
    this.http.get('http://localhost/angular_mysqlv1/server/server.php')
      .subscribe(information => {
        this.information.push(information);
        // this.information = information;
    });
   
  }
   
}