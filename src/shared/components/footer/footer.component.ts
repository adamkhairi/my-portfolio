import { Component } from '@angular/core';
import personalData from "../../personalData.json";
import dataInfos from "../../personalData.json";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  dataInfos = personalData;
}
