export class TemperatureConverter {
  celsiusToFahrenheit(celsius: number): number {
    return (celsius * 9) / 5 + 32;
  }

  isFreezing(celsius: number): boolean {
    return celsius <= 0;
  }
}