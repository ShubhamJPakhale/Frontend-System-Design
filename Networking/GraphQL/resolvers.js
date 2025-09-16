const data = {
  mobile: [
    {
      id: "m1",
      mobileName: "iPhone 13",
      price: "$799",
      company: "Apple",
      releaseYear: 2021,
    },
    {
      id: "m2",
      mobileName: "Galaxy S21",
      price: "$699",
      company: "Samsung",
      releaseYear: 2021,
    },
    {
      id: "m3",
      mobileName: "Pixel 6",
      price: "$599",
      company: "Google",
      releaseYear: 2021,
    },
    {
      id: "m4",
      mobileName: "iPhone 13",
      price: "$799",
      company: "Apple",
      releaseYear: 2021,
    },
    {
      id: "m5",
      mobileName: "OnePlus 9",
      price: "$729",
      company: "OnePlus",
      releaseYear: 2021,
    },
    {
      id: "m6",
      mobileName: "Galaxy S21",
      price: "$699",
      company: "Samsung",
      releaseYear: 2021,
    },
  ],
  company: [
    {
      id: "c1",
      companyName: "Apple",
      headQuarter: "Cupertino, CA",
      founded: "1976",
    },
    {
      id: "c2",
      companyName: "Samsung",
      headQuarter: "Seoul, South Korea",
      founded: "1938",
    },
    {
      id: "c3",
      companyName: "Google",
      headQuarter: "Mountain View, CA",
      founded: "1998",
    },
    {
      id: "c4",
      companyName: "Apple",
      headQuarter: "Austin, TX",
      founded: "1976",
    },
    {
      id: "c5",
      companyName: "OnePlus",
      headQuarter: "Shenzhen, China",
      founded: "2013",
    },
    {
      id: "c6",
      companyName: "Samsung",
      headQuarter: "New York, USA",
      founded: "1938",
    },
  ],
};

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const resolvers = {
  Mobile: {
    company: (parent) =>
      data.company.find((company) => company.companyName === parent.company),
  },
  Company: {
    mobile: (parent) =>
      data.mobile.filter((mobile) => mobile.company === parent.companyName),
  },
  Query: {
    mobile: () => data.mobile,
    company: () => data.company,
  },
  Mutation: {
    addMobile: (parent, args, context, info) => {
      console.log(args);
      const newMobile = { ...args, id: data.mobile.length + 1 };
      data.mobile.push(newMobile);
      return newMobile;
    },
  },
};
