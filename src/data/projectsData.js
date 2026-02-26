import braj1 from "../assets/brajVatika.webp";
import radha1 from "../assets/radhaCottage.webp";

const projectsData = [
  {
    id: 1,
    slug: "braj-vatika",
    title: "Braj Vatika",
    type: "Residential Plot",
    area: "104 - 1010 Sq. Yards",
    location: "Chhatikara, Vrindavan",
    image: braj1,
    description: `
Braj Vatika Residential Society is a premium plotted development designed to offer peaceful and modern living in the heart of Vrindavan.

It combines spiritual surroundings with modern infrastructure, wide roads, gated security, and eco-friendly planning.
    `,
    amenities: [
      "Gated Community",
      "Wide Roads",
      "Street Lighting",
      "Fresh Water",
      "24x7 Security",
      "Green Parks"
    ]
  },
  {
    id: 2,
    slug: "radha-cottage", // 👈 updated slug
    title: "Radha Cottage", // 👈 corrected name
    type: "Residential Villas",
    area: "Luxury Villa Project",
    location: "Vrindavan",
    image: radha1,
    description: `
Radha Cottage offers beautifully designed villas in a peaceful spiritual environment.

Modern architecture blends with traditional Braj aesthetics to provide a premium and serene living experience.
    `,
    amenities: [
      "Club House",
      "Landscaped Gardens",
      "Security",
      "Power Backup",
      "Parking",
      "Temple Nearby"
    ]
  }
];

export default projectsData;