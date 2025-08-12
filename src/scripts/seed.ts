import Country from '../models/model';

const countries = [
  { name: 'India', code: 'IN' },
  { name: 'Australia', code: 'AU' },
  { name: 'England', code: 'ENG' },
  { name: 'South Africa', code: 'SA' },
];

export const seedCountries = async () => {

  
  const existing = await Country.find({});
  if (existing.length === 0) {
    await Country.insertMany(countries);
    console.log(' Countries seeded successfully');
  } else {
    console.log(' Countries already exist, skipping seeding');
  }
};
