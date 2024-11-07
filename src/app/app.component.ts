import { Component, signal } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  ValidationErrors,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class AppComponent {
  ageForm: FormGroup;
  currentYear = new Date().getFullYear();

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
    this.ageForm = new FormGroup(
      {
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
          Validators.min(1),
          Validators.max(this.currentYear),
        ]),
      },
      { validators: this.dateValidator() }
    );
  }

  allowOnlyDigits(event: Event): void {
    const input = event.target as HTMLInputElement;
    const cleanNumber = input.value.replace(/[^0-9]/g, '');
    this.ageForm.get(input.id)?.setValue(cleanNumber, { emitEvent: false });
  }

  checkMinMax(event: Event, min: number, max: number): void {
    const input = event.target as HTMLInputElement;

    if (Number(input.value) < min) {
      this.ageForm
        .get(input.id)
        ?.setValue(min.toString(), { emitEvent: false });
    }
    if (Number(input.value) > max) {
      this.ageForm
        .get(input.id)
        ?.setValue(max.toString(), { emitEvent: false });
    }
  }

  dateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const day = Number(control.get('day')?.value);
      const month = Number(control.get('month')?.value);
      const year = Number(control.get('year')?.value);

      if (!day || !month || !year) {
        return { invalidDate: true };
      }

      const dayString = String(day).padStart(2, '0');
      const monthString = String(month).padStart(2, '0');
      const yearString = String(year).padStart(4, '0');
      const dateString = new Date(
        `${yearString}-${monthString}-${dayString}T00:00:00Z`
      );
      const date = new Date(dateString);

      const isValidDate =
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day;

      const isNotInFuture = date <= new Date();

      if (!isValidDate) {
        return { invalidDate: true };
      }
      if (!isNotInFuture) {
        return { dateInFuture: true };
      }

      return null;
    };
  }

  calculateAge(): void {
    if (this.ageForm.invalid) {
      alert('Please enter a valid date.');
      return;
    }

    const { day, month, year } = this.ageForm.value;

    const dayString = String(day).padStart(2, '0');
    const monthString = String(month).padStart(2, '0');
    const yearString = String(year).padStart(4, '0');
    const birthDate = new Date(
      `${yearString}-${monthString}-${dayString}T00:00:00Z`
    );
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
  }

  private daysInMonth(month: number, year: number): number {
    return new Date(year, month + 1, 0).getDate();
  }
}
