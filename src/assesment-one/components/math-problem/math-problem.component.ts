import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-math-problem',
  templateUrl: './math-problem.component.html',
  styleUrls: ['./math-problem.component.css']
})

export class MathProblemComponent implements OnInit {
  // Corner condition handled
  // Case 1 : Only number fron 1 to 9 are valid
  // Case 2 : Pattern validation done to avoid typing exponential number
  // Case 3 : Max value added to avoid garbage/unpredictable output. Javascript maximum supporting Safe interger is 9007199254740991
  mathForm = new FormGroup({
    inputone: new FormControl('', [Validators.required, Validators.pattern('^[1-9]*$'), Validators.max(999)]),
    inputtwo: new FormControl('', [Validators.required, Validators.pattern('^[1-9]*$'), Validators.max(999)]),
  });
  @ViewChild('submit') submit: ElementRef;
  @ViewChild('clear') clear: ElementRef;
  result = 0;
  constructor() { }

  ngOnInit(): void {
  }

  calculateOutput(): void {
    const first = Math.pow(this.mathForm.get('inputone').value, 2);
    const second = Math.ceil(Math.sqrt(this.mathForm.get('inputtwo').value)); // added to get round number to avoid decimal
    this.result = first - second;
    alert(`Calculated output is ${this.result}`);
    this.submit.nativeElement.blur();
  }
  clearForm(): void {
    this.mathForm.reset();
    this.clear.nativeElement.blur();
  }

}
