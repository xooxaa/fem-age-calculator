# Age Calculator App

This is an Angular project created as a solution to the [Age Calculator App challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q).

## Overview

The **Age Calculator App** allows users to input their date of birth and instantly see their age in years, months, and days. This project is designed to practice handling user input, date calculations, and dynamic UI updates in a responsive and user-friendly way.

## Challenge Description

The task is to build a frontend application that can:

1. Calculate the user’s age accurately based on the input date.
2. Display the age in years, months, and days.
3. Update the results dynamically as the user provides input.
4. Validate the input date, including handling edge cases like future dates or invalid dates.

### Screenshots and Design

For detailed designs and layout, refer to the **Frontend Mentor** challenge [design files](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). The designs are provided for both desktop and mobile views to ensure the application is fully responsive.

## Features

- **Dynamic Age Calculation**: Calculates age in years, months, and days from the entered birthdate.
- **Form Validation**: Ensures valid date entries, preventing future dates and handling leap years.
- **Responsive Design**: Adapts to different screen sizes for seamless user experience on desktop and mobile devices.
- **Error Handling**: Displays appropriate error messages for invalid inputs.

## Technologies Used

- **Angular**: To build the app and handle UI components, data binding, and input validation.
- **TypeScript**: For adding types and enhancing code reliability.
- **CSS/SCSS**: For styling and responsive design.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (version 14 or above)
- **Angular CLI** (version 13 or above)

### Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/age-calculator-app.git
   ```

2. **Navigate to the project directory:**

```bash
   cd age-calculator-app
```

3. **Install dependencies:**

```bash
   npm install
```

4. **Run the application locally:**

```bash
   ng serve
```

5. Open the application in your browser at [http://localhost:4200](http://localhost:4200).

## Project Structure

- **src/app**: Contains all the Angular components and logic for this app.
- **src/assets**: Place for any assets, like images or fonts.
- **src/styles**: Contains global CSS/SCSS styling.

## How to Use

- Enter your date of birth in the input fields provided.
- Press the Calculate button.
- The app will display your age in years, months, and days.
- Any invalid input will prompt an error message until corrected.

## Roadmap and Future Enhancements

Some potential improvements could include:

- **Additional styling** to enhance visual appeal.
- **Animations** for dynamic age display.
- **Dark mode support** for accessibility.

## License

This project is licensed under the [MIT License](MIT License).
