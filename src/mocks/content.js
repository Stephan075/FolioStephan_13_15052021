// liste des features

const featureList = [
  {
    images: "./img/icon-chat.png",
    alt: "Chat Icon",
    featureTitle: "You are our #1 priority",
    featureParagraphe:
      "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  },
  {
    images: "./img/icon-money.png",
    alt: "Money Icon",
    featureTitle: "More savings means higher rates",
    featureParagraphe:
      "The more you save with us, the higher your interest rate will be!",
  },
  {
    images: "./img/icon-security.png",
    alt: "Security Icon",
    featureTitle: "Security you can trust",
    featureParagraphe:
      "We use top of the line encryption to make sure your data and money is always safe.",
  },
];

const allAccount = [
  {
    title: "Argent Bank Checking (x8349)",
    amount: "2,082.79",
    Description: "Current Balance",
  },
  {
    title: "Argent Bank Savings (x6712)",
    amount: "10,928.42",
    amountDescription: "Available Balance",
  },
  {
    title: "Argent Bank Credit Card (x8349)",
    amount: "184.30",
    amountDescription: "Current Balance",
  },
];

module.exports = { featureList, allAccount };
