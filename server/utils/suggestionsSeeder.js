import mongoose from "mongoose";
import dotenv from "dotenv";
import Suggestion from "../models/Suggestion.js";

dotenv.config();

const suggestions = [
  // Entertainment
  { keyword: "Bigg Boss latest episode" },
  { keyword: "Bigg Boss voting trends" },
  { keyword: "Bigg Boss 2025 contestants" },
  { keyword: "Bigg Boss eviction results" },

  { keyword: "Jawan movie review" },
  { keyword: "Jawan movie box office" },
  { keyword: "Jawan songs playlist" },
  { keyword: "Jawan behind the scenes" },

  { keyword: "Pathaan movie collection" },
  { keyword: "Pathaan vs Jawan comparison" },
  { keyword: "Pathaan action scenes" },
  { keyword: "Pathaan review IMDB" },

  { keyword: "Koffee with Karan new season" },
  { keyword: "Koffee with Karan guest list" },
  { keyword: "Koffee with Karan best episodes" },
  { keyword: "Koffee with Karan controversies" },

  // TV Shows & Web Series
  { keyword: "Mirzapur season 3 release date" },
  { keyword: "Mirzapur season 3 cast" },
  { keyword: "Mirzapur season 3 trailer" },
  { keyword: "Mirzapur season 3 spoilers" },

  { keyword: "Sacred Games season 3 rumors" },
  { keyword: "Sacred Games season 3 plot" },
  { keyword: "Sacred Games characters" },
  { keyword: "Sacred Games ending explained" },

  { keyword: "Scam 2003 full episodes" },
  { keyword: "Scam 2003 story" },
  { keyword: "Scam 2003 real story" },
  { keyword: "Scam 2003 vs Scam 1992" },

  { keyword: "The Family Man season 3 trailer" },
  { keyword: "The Family Man season 3 updates" },
  { keyword: "The Family Man lead actor" },
  { keyword: "The Family Man action scenes" },

  // News & Current Affairs
  { keyword: "Lok Sabha elections 2025 updates" },
  { keyword: "Lok Sabha elections candidates" },
  { keyword: "Lok Sabha elections result date" },
  { keyword: "Lok Sabha elections poll predictions" },

  { keyword: "Petrol price today in India" },
  { keyword: "Petrol price in Delhi" },
  { keyword: "Diesel price today" },
  { keyword: "Fuel price hike reasons" },

  { keyword: "Budget 2025 highlights" },
  { keyword: "Budget 2025 tax slabs" },
  { keyword: "Budget 2025 for middle class" },
  { keyword: "Budget 2025 analysis" },

  { keyword: "Earthquake in Delhi today" },
  { keyword: "Earthquake epicenter India" },
  { keyword: "Earthquake safety tips" },
  { keyword: "Earthquake alerts app" },

  // Sports
  { keyword: "IPL 2025 schedule" },
  { keyword: "IPL 2025 teams" },
  { keyword: "IPL 2025 match timings" },
  { keyword: "IPL 2025 live streaming" },

  { keyword: "Who won IPL 2024" },
  { keyword: "IPL 2024 final match highlights" },
  { keyword: "IPL 2024 orange cap winner" },
  { keyword: "IPL 2024 purple cap winner" },

  { keyword: "India vs Pakistan next match" },
  { keyword: "India vs Pakistan T20 2025" },
  { keyword: "India vs Pakistan match tickets" },
  { keyword: "India vs Pakistan rivalry stats" },

  { keyword: "MS Dhoni retirement news" },
  { keyword: "MS Dhoni last match" },
  { keyword: "MS Dhoni biography" },
  { keyword: "MS Dhoni future plans" },

  // Daily Use
  { keyword: "weather today" },
  { keyword: "weather tomorrow" },
  { keyword: "Delhi weather forecast" },
  { keyword: "rain prediction today" },

  { keyword: "how to link PAN with Aadhaar" },
  { keyword: "PAN Aadhaar link deadline" },
  { keyword: "PAN Aadhaar link online portal" },
  { keyword: "Check PAN Aadhaar link status" },

  { keyword: "IRCTC train ticket booking" },
  { keyword: "IRCTC login problem" },
  { keyword: "IRCTC app download" },
  { keyword: "IRCTC PNR status check" },

  { keyword: "bank holiday list 2025" },
  { keyword: "bank holidays in January 2025" },
  { keyword: "bank holidays state wise 2025" },
  { keyword: "bank closed today?" },

  // Tech & Gadgets
  { keyword: "iPhone 16 features" },
  { keyword: "iPhone 16 price in India" },
  { keyword: "iPhone 16 release date" },
  { keyword: "iPhone 16 vs iPhone 15" },

  { keyword: "Best budget phone 2025" },
  { keyword: "Best phones under ₹20,000" },
  { keyword: "Top 5 smartphones 2025" },
  { keyword: "Budget gaming phones 2025" },

  { keyword: "Samsung Galaxy S25 leaks" },
  { keyword: "Galaxy S25 features" },
  { keyword: "Galaxy S25 launch date" },
  { keyword: "Galaxy S25 vs S24" },

  // Misc
  { keyword: "Horoscope today" },
  { keyword: "Weekly horoscope forecast" },
  { keyword: "Horoscope love prediction" },
  { keyword: "Daily zodiac reading" },

  { keyword: "Top 10 baby names 2025" },
  { keyword: "Modern Hindu baby names" },
  { keyword: "Unique baby names for boys" },
  { keyword: "Unique baby names for girls" },

  { keyword: "Sarkari result latest" },
  { keyword: "Sarkari result 10th 2025" },
  { keyword: "Sarkari result railway exams" },
  { keyword: "Sarkari result admit card" },

  { keyword: "COVID-19 cases in India today" },
  { keyword: "COVID-19 symptoms 2025" },
  { keyword: "COVID-19 vaccine booster" },
  { keyword: "COVID-19 new variant India" },
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await Suggestion.deleteMany({});
    await Suggestion.insertMany(suggestions);
    console.log("✅ Suggestions seeded successfully!");
    process.exit();
  } catch (err) {
    console.error("Seeding failed:", err);
    process.exit(1);
  }
};
// seed();
export default seed;
