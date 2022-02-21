import { Component, OnInit } from "@angular/core";
import { Chart, registerables } from "chart.js";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
	constructor() {
		Chart.register(...registerables);
	}

	ngOnInit(): void {
		// Line Chart
		const lineCanvasEle: any = document.getElementById("line_chart");
		const lineChar = new Chart(lineCanvasEle.getContext("2d"), {
			type: "line",
			data: {
				labels: [
					"Enero",
					"Febrero",
					"Marzo",
					"Abril",
					"Mayo",
					"Junio",
					"Julio",
					"Agosto",
					"Septiembre",
					"Octubre",
					"Noviembre",
					"Diciembre"
				],
				datasets: [
					{
						data: [12, 15, 18, 14, 11, 19, 12],
						label: "Orders",
						borderColor: "rgba(54, 162, 235)",
						fill: false
					},
					{
						data: [65, 59, 80, 81, 56, 55, 40],
						label: "Sales",
						borderColor: "rgb(75, 192, 192)",
						fill: true
					}
				]
			},
			options: {
				responsive: true,
				scales: {
					y: {
						beginAtZero: true
					}
				},
				maintainAspectRatio: false
			}
		});
	}
}
