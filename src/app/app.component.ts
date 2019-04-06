import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './spinner.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  showSpinner: boolean;

  constructor(private spinnerService: SpinnerService,
    private httpClient: HttpClient) { }

  ngOnInit() {
    this.spinnerService.onVisibilityChange((value) => {
      this.showSpinner = value;
    });
  }

  doWork() {

    this.httpClient.get<any>('http://dummy.restapiexample.com/api/v1/employees')
      .subscribe(
        success => {
          console.log('Done');
        },
        error => {
          console.error('Error');
        }
      );
  }
}
