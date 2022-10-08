import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
   
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app2';
  dtOptions: DataTables.Settings = {};
  information;
  // information: any[] = [];
  dtTrigger: Subject<any> = new Subject<any>();
  
  
  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
    this.dtOptions = {
      // pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
    };
  
    this.http.get('http://localhost/angular_mysqlv1/server/server.php')
      .subscribe(information => {
        // this.information.push(information);
        // console.log(this.information);
        this.information = information;
        // this.information = (information as any).information;
        this.dtTrigger.next(information);
    });
  
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  
}