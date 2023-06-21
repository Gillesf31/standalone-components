import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-test-standalone',
  templateUrl: './test-standalone.component.html',
})
export class TestStandaloneComponent {}
