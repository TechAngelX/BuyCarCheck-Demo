import { NextRequest, NextResponse } from 'next/server';
import { registrationSchema } from '@/lib/validators/vehicle';

/**
 * POST /api/check/basic
 *
 * Free vehicle check — queries the DVLA Vehicle Enquiry API.
 * Returns tax status, MOT status, make, colour, engine, CO2 and VED data.
 *
 * If DVLA_API_KEY is not set the endpoint returns realistic mock data,
 * so the app is fully runnable without credentials for demo purposes.
 */
export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = registrationSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid registration' }, { status: 400 });
  }

  const { registration } = parsed.data;
  const apiKey = process.env.DVLA_API_KEY;

  if (!apiKey) {
    // No API key — return mock data for demonstration
    return NextResponse.json(getMockData(registration));
  }

  const res = await fetch(
    'https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles',
    {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ registrationNumber: registration }),
    },
  );

  if (res.status === 404) {
    return NextResponse.json({ error: 'Vehicle not found' }, { status: 404 });
  }

  if (!res.ok) {
    return NextResponse.json({ error: 'DVLA service unavailable' }, { status: 502 });
  }

  const data = await res.json();
  return NextResponse.json(data);
}

function getMockData(registration: string) {
  return {
    registrationNumber:       registration,
    make:                     'VOLKSWAGEN',
    colour:                   'BLUE',
    fuelType:                 'PETROL',
    engineCapacity:           1395,
    co2Emissions:             128,
    yearOfManufacture:        2019,
    taxStatus:                'Taxed',
    taxDueDate:               '2026-01-01',
    motStatus:                'Valid',
    motExpiryDate:            '2026-08-14',
    monthOfFirstRegistration: '2019-03',
    dateOfLastV5CIssued:      '2021-06-15',
  };
}
