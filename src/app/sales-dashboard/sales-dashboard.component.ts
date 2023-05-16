// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import * as Plotly from 'plotly.js';

// interface SalesGraphData {
//   sales_graph: string;
// }

// @Component({
//   selector: 'app-sales-dashboard',
//   templateUrl: './sales-dashboard.component.html',
//   styleUrls: ['./sales-dashboard.component.css']
// })
// export class SalesDashboardComponent implements OnInit {

//   constructor(private http: HttpClient) { }

//   ngOnInit() {
//     this.http.get<SalesGraphData>('/sales_dashboard/').subscribe(data => {
//       let salesGraph = JSON.parse(data.sales_graph);
//       Plotly.newPlot('sales-graph', salesGraph.data, salesGraph.layout);
//     });
//   }

// }
