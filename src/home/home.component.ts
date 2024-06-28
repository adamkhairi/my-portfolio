import {Component} from '@angular/core';
import personalData from '../shared/personalData.json';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  dataInfos = personalData;
}
