import { connectDB} from "../config/db";
import Country from "../models/country.model";

const countries = [
  { name: "India", code: "IN" },
  { name: "Australia", code: "AU" },
  { name: "England", code: "ENG" },
  { name: "South Africa", code: "SA" },
];

const seedCountries = async () => {
  await connectDB();
  await Country.deleteMany({});
  await Country.insertMany(countries);
  console.log("Countries seeded");
  process.exit(0);
};


seedCountries();
