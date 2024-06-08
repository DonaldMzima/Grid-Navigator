import { Component, OnInit } from '@angular/core';
import { navigate } from '../../../utils/core/directions';
// import { navigate } from '../utils/directions';
@Component({
  selector: 'app-instructions',
  standalone: true,
  imports: [],
  templateUrl: './instructions.component.html',
  styleUrl: './instructions.component.css',
})
export class InstructionsComponent implements OnInit {
  totalDistance: number = 0;

  ngOnInit(): void {
    console.log('ngOnInit is called after a delay');
    const instructions = ['L5', 'R5', 'L5', 'R5'];
    this.totalDistance = navigate(instructions);
    console.log(`The total number of blocks away is: ${this.totalDistance}`);
  }
}
