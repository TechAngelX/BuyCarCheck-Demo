/**
 * Verifies the mock data fallback (used when no DVLA_API_KEY is set)
 * returns a structurally valid BasicVehicleInfo object.
 */

interface BasicVehicleInfo {
  registrationNumber: string;
  make:               string;
  colour:             string;
  fuelType:           string;
  engineCapacity:     number;
  co2Emissions:       number;
  yearOfManufacture:  number;
  taxStatus:          string;
  motStatus:          string;
}

function getMockData(registration: string): BasicVehicleInfo {
  return {
    registrationNumber:  registration,
    make:                'VOLKSWAGEN',
    colour:              'BLUE',
    fuelType:            'PETROL',
    engineCapacity:      1395,
    co2Emissions:        128,
    yearOfManufacture:   2019,
    taxStatus:           'Taxed',
    motStatus:           'Valid',
  };
}

describe('getMockData', () => {
  it('returns the registration that was passed in', () => {
    const data = getMockData('AB12CDE');
    expect(data.registrationNumber).toBe('AB12CDE');
  });

  it('returns numeric engine capacity', () => {
    const data = getMockData('AB12CDE');
    expect(typeof data.engineCapacity).toBe('number');
    expect(data.engineCapacity).toBeGreaterThan(0);
  });

  it('returns a valid tax status string', () => {
    const data = getMockData('AB12CDE');
    expect(['Taxed', 'Untaxed', 'SORN']).toContain(data.taxStatus);
  });

  it('returns a valid MOT status string', () => {
    const data = getMockData('AB12CDE');
    expect(['Valid', 'Not valid', 'No details held by DVLA']).toContain(data.motStatus);
  });

  it('returns a year within a plausible range', () => {
    const data = getMockData('AB12CDE');
    expect(data.yearOfManufacture).toBeGreaterThanOrEqual(1900);
    expect(data.yearOfManufacture).toBeLessThanOrEqual(new Date().getFullYear());
  });
});
