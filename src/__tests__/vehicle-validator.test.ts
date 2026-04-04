import { registrationSchema } from '@/lib/validators/vehicle';

describe('registrationSchema', () => {
  it('accepts a standard current-format plate', () => {
    const result = registrationSchema.safeParse({ registration: 'AB12 CDE' });
    expect(result.success).toBe(true);
    if (result.success) expect(result.data.registration).toBe('AB12CDE');
  });

  it('strips spaces and uppercases input', () => {
    const result = registrationSchema.safeParse({ registration: 'ab12 cde' });
    expect(result.success).toBe(true);
    if (result.success) expect(result.data.registration).toBe('AB12CDE');
  });

  it('accepts a personalised plate', () => {
    const result = registrationSchema.safeParse({ registration: 'R1CKI' });
    expect(result.success).toBe(true);
  });

  it('rejects a single character', () => {
    const result = registrationSchema.safeParse({ registration: 'A' });
    expect(result.success).toBe(false);
  });

  it('rejects a plate over 8 characters', () => {
    const result = registrationSchema.safeParse({ registration: 'TOOLONGPLATE' });
    expect(result.success).toBe(false);
  });

  it('rejects an empty string', () => {
    const result = registrationSchema.safeParse({ registration: '' });
    expect(result.success).toBe(false);
  });
});
