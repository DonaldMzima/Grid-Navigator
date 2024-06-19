import { Component, OnInit } from '@angular/core';

import { navigate } from '../../../utils/core/directions';

import { FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-instructions',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css'],
})
export class InstructionsComponent implements OnInit {
  instructionForm: any;
  totalDistance: number = 0;

  travelInstructions = new FormControl('');

  ngOnInit(): void {
    // this.instructionForm = this.fb.group({
    //   instructions: ['', Validators.required],
    // });

    const instructions =
      this.travelInstructions.value ||
      ''.split(',').map((inst: string) => inst.trim());
    this.totalDistance = navigate(instructions as string[]);
    console.log(`The total number of blocks away is: ${this.totalDistance}`);
    console.log('travelInstructions ', this.travelInstructions.value);
  }

  onSubmit() {
    console.log('travelInstructions in form ', this.travelInstructions.value);

    // const instructions = this.instructionForm.value.instructions
    //   .split(',')
    //   .map((inst: string) => inst.trim());
    // this.totalDistance = navigate(instructions);
    // console.log(`The total number of blocks away is: ${this.totalDistance}`);
  }
}
