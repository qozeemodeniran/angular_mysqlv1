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
  information; // from database
  // dummy_data = {dummy_name: "Dummy Name", dummy_email: "Dummy Email"}; // hardcoded data
  // var dummy_data = [{
  //   'dummy_name': 'Dummy Name', 
  //   'dummy_email': 'Dummy Email'
  // }];

  dummy_data = [
    {
      'dummy_name': 'Dummy Name', 
      'dummy_email': 'Dummy Email'
    },
    {
      'dummy_name': 'Dummy Name', 
      'dummy_email': 'Dummy Email'
    },
    {
      'dummy_name': 'Dummy Name', 
      'dummy_email': 'Dummy Email'
    },
    {
      'dummy_name': 'Dummy Name', 
      'dummy_email': 'Dummy Email'
    },
    {
      'dummy_name': 'Dummy Name', 
      'dummy_email': 'Dummy Email'
    },
    {
      'dummy_name': 'Dummy Name', 
      'dummy_email': 'Dummy Email'
    },
    {
      'dummy_name': 'Dummy Name', 
      'dummy_email': 'Dummy Email'
    },
    {
      'dummy_name': 'Dummy Name', 
      'dummy_email': 'Dummy Email'
    },
    {
      'dummy_name': 'Dummy Name', 
      'dummy_email': 'Dummy Email'
    },
    {
      'dummy_name': 'Dummy Name', 
      'dummy_email': 'Dummy Email'
    },
    {
      'dummy_name': 'Dummy Name', 
      'dummy_email': 'Dummy Email'
    },
    {
      'dummy_name': 'Dummy Name', 
      'dummy_email': 'Dummy Email'
    },
    {
      'dummy_name': 'Dummy Name', 
      'dummy_email': 'Dummy Email'
    },
    {
      'dummy_name': 'Dummy Name', 
      'dummy_email': 'Dummy Email'
    },
    {
      'dummy_name': 'Dummy Name', 
      'dummy_email': 'Dummy Email'
    }
  ];


  dtTrigger: Subject<any> = new Subject<any>();
  
  
  constructor(private http: HttpClient) { }

  addRows() {
    var k = '<tbody>'
    // dummy_data.length = 6;
    for(let i = 0; i < this.dummy_data.length; i++) {
      k+='<tr>';
      k+='<td>' + this.dummy_data[i].dummy_name + '</td>';
      k+='<td>' + this.dummy_data[i].dummy_email + '</td>';
      k+='</tr>';
    }
    k+= '</tbody>'; 
    document.getElementById('tdata')!.innerHTML = k;
    // this.dtTrigger.next(this.dummy_data);
  }

    // return this.dummy_data;
  
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