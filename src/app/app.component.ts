import { Component, computed, signal } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class AppComponent {
  // Reactive form group
  ageForm: FormGroup;

  // Signals for computed age values
  age = signal<{
    years: number | null;
    months: number | null;
    days: number | null;
  }>({
    years: null,
    months: null,
    days: null,
  });

  constructor() {
    this.ageForm = new FormGroup({
      day: new FormControl(1, [
        Validators.required,
        Validators.min(1),
        Validators.max(31),
      ]),
      month: new FormControl(1, [
        Validators.required,
        Validators.min(1),
        Validators.max(12),
      ]),
      year: new FormControl(2000, [
        Validators.required,
        Validators.min(1900),
        Validators.max(2099),
      ]),
    });
  }

  calculateAge(): void {
    const { day, month, year } = this.ageForm.value;

    if (day && month && year) {
      const birthDate = new Date(year, month - 1, day);
      const currentDate = new Date();

      let years = currentDate.getFullYear() - birthDate.getFullYear();
      let months = currentDate.getMonth() - birthDate.getMonth();
      let days = currentDate.getDate() - birthDate.getDate();

      if (days < 0) {
        months--;
        days += this.daysInMonth(birthDate.getMonth(), birthDate.getFullYear());
      }
      if (months < 0) {
        years--;
        months += 12;
      }

      this.age.set({ years, months, days });
    } else {
      alert('Please enter a valid date.');
    }
  }

  private daysInMonth(month: number, year: number): number {
    return new Date(year, month + 1, 0).getDate();
  }
}
