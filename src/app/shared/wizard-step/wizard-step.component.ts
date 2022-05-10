import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-wizard-step',
  templateUrl: './wizard-step.component.html',
  styleUrls: ['./wizard-step.component.scss']
})
export class WizardStepComponent implements OnInit {
  @Input() title!: string;
  @Output() previousStepClicked = new EventEmitter();
  @Output() nextStepClicked = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  goToPreviousStep() {
    this.previousStepClicked.emit();
  }

  goToNextStep() {
    this.nextStepClicked.emit();
  }

}
