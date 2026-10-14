import { TemperatureConverter } from './temperature-converter';

describe('TemperatureConverter', () => {
  let converter: TemperatureConverter;

  beforeEach(() => {
    converter = new TemperatureConverter();
  });

  it('muuntaa 0 C -> 32 F', () => {
    const result = converter.celsiusToFahrenheit(0);

    expect(result).toBe(32);
  });

  it('muuntaa 100 C -> 212 F', () => {
    const result = converter.celsiusToFahrenheit(100);

    expect(result).toBe(212);
  });

  it('muuntaa -40 C -> -40 F', () => {
    const result = converter.celsiusToFahrenheit(-40);

    expect(result).toBe(-40);

  });
  it('isFreezing palauttaa true arvolla -1 C', () => {
    const result = converter.isFreezing(-1);

    expect(result).toBe(true);
  });

  it('isFreezing palauttaa true arvolla 0 C', () => {
    const result = converter.isFreezing(0);

    expect(result).toBe(true);
  });

  it('isFreezing palauttaa false arvolla 1 C', () => {
    const result = converter.isFreezing(1);

    expect(result).toBe(false);
  });
});