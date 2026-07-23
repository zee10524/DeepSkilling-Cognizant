import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  today = new Date();
  price = 1250000;
  name = 'angular developer';
  longText = 'Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.';
  searchTerm = '';
  activeTab = 'builtin';

  employees = [
    { id: 1, name: 'Alice Johnson',   dept: 'Engineering', salary: 85000,  joinDate: new Date('2021-03-15'), active: true  },
    { id: 2, name: 'Bob Smith',       dept: 'Marketing',   salary: 65000,  joinDate: new Date('2020-07-01'), active: false },
    { id: 3, name: 'Carol White',     dept: 'Engineering', salary: 92000,  joinDate: new Date('2019-11-20'), active: true  },
    { id: 4, name: 'David Brown',     dept: 'HR',          salary: 55000,  joinDate: new Date('2022-01-10'), active: true  },
    { id: 5, name: 'Eva Martinez',    dept: 'Engineering', salary: 110000, joinDate: new Date('2018-05-22'), active: true  },
    { id: 6, name: 'Frank Wilson',    dept: 'Marketing',   salary: 72000,  joinDate: new Date('2023-02-14'), active: false }
  ];
}
