// Core vehicle data returned from the DVLA API
export interface BasicVehicleInfo {
  registrationNumber:      string;
  make:                    string;
  colour:                  string;
  fuelType:                string;
  engineCapacity:          number;
  co2Emissions:            number;
  yearOfManufacture:       number;
  taxStatus:               string;
  taxDueDate:              string | null;
  motStatus:               string;
  motExpiryDate:           string | null;
  typeApproval:            string | null;
  wheelplan:               string | null;
  monthOfFirstRegistration: string | null;
  dateOfLastV5CIssued:     string | null;
}

// Individual MOT test record
export interface MotTest {
  completedDate:  string;
  testResult:     'PASSED' | 'FAILED';
  expiryDate:     string | null;
  odometerValue:  number | null;
  odometerUnit:   string | null;
  advisories:     string[];
  failures:       string[];
}

// Full MOT history for a vehicle
export interface MotHistoryData {
  registration:   string;
  make:           string | null;
  model:          string | null;
  testCount:      number;
  latestMileage:  number | null;
  tests:          MotTest[];
}
