const glimpseImages = import.meta.glob('./assets/glimpse/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG}', {
  eager: true,
  import: 'default'
});

export const galleryHighlights = Object.values(glimpseImages);

export const portfolioWorks = [
  {
    id: 1,
    title: "Royal Mehendi at Umaid Bhawan",
    city: "Jodhpur",
    eventType: "Mehendi",
    rating: 5,
    reviews: 12,
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    description: "A vibrant, colorful Mehendi ceremony with traditional Rajasthani elements, marigold drapes, and hanging brass urlis.",
    testimonials: [
      "The setup was exactly how we envisioned. Magical! - Ananya",
      "Colors and attention to detail were breathtaking. - Rahul"
    ]
  },
  {
    id: 2,
    title: "Elegant Lake Palace Wedding",
    city: "Udaipur",
    eventType: "Wedding",
    rating: 4.5,
    reviews: 24,
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
    description: "A serene pastel-themed wedding set against the beautiful Lake Pichola, featuring a floating floral mandap.",
    testimonials: [
      "KESHAV CATERERS & DECORATORS made our special day feel like a fairy tale. - Priya"
    ]
  },
  {
    id: 3,
    title: "Sufi Night Sangeet",
    city: "Jaipur",
    eventType: "Sangeet",
    rating: 5,
    reviews: 8,
    image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=800&q=80",
    description: "A dark, moody, yet glamorous evening with heavy candle lights, velvet drapes, and crystal chandeliers.",
    testimonials: [
      "The vibe was impeccable. - Karthik"
    ]
  },
  {
    id: 4,
    title: "Grand Reception at Rambagh",
    city: "Jaipur",
    eventType: "Reception",
    rating: 4.8,
    reviews: 15,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    description: "A luxurious reception filled with thousands of exotic flowers, grand crystal centerpieces, and a stunning stage setup.",
    testimonials: [
      "Our guests are still talking about the decor! - Shreya"
    ]
  }
];

export const decorItems = [
  {
    id: 1,
    name: "Floral Mandap Setup",
    description: "A fully customizable mandap created with fresh imported roses and jasmine.",
    price: "75,000",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Traditional Brass Urlis",
    description: "Set of 5 large antique brass urlis decorated with floating lotuses and diyas.",
    price: "5,000",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "LED Fairy Light Gazebo",
    description: "A magical outdoor structure draped entirely in warm-white fairy lights.",
    price: "25,000",
    image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Welcome Entrance Gate",
    description: "Grand entrance archway mimicking palace doors, adorned with marigolds.",
    price: "35,000",
    image: "https://images.unsplash.com/photo-1560962386-896495df93a6?auto=format&fit=crop&w=600&q=80"
  }
];

export const extraServices = [
  { id: 1, icon: "Music", title: "DJ & Sound", description: "Top-tier DJs and premium sound setup." },
  { id: 2, icon: "Camera", title: "Photography & Videography", description: "Capturing your timeless moments." },
  { id: 3, icon: "Palette", title: "Mehendi Artists", description: "Professional intricate mehendi designers." },
  { id: 4, icon: "Car", title: "Logistics & Transport", description: "Luxury car rentals to coordinated bus rides." },
];

const menuImages = import.meta.glob('./assets/menu/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG}', {
  eager: true,
  import: 'default'
});
export const menuGallery = Object.values(menuImages);

export const palacesVenues = [
  {
    id: 1,
    name: " TAJ FARMS AND RESORT",
    city: "JaipurNH-73A Balachaur, Yamunanagar, Haryana 135103 ",
    capacity: "500 - 2000 guests",
    space: "Indoor Halls & Outdoor Lawns",
    description: "Our flagship heritage property blending ancient architecture with modern luxury. Perfect for grand royal weddings.",
    images: ["https://images.unsplash.com/photo-1582570081608-251025553b47?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1596440409743-348cdfa2b6b0?auto=format&fit=crop&w=800&q=80"]
  },
  {
    id: 2,
    name: "ALPINE Hotels & Banquets & Restaurant ",
    city: "Matka chownk, near Mahindra showroom, Yamuna Nagar, Haryana 135003",
    capacity: "upto 300 guests",
    space: "Indoor Hall & Hotel Rooms & Restaurant",
    description: "An exclusive property for kitty parties , small gatherings , personal get-together , safe night stays , good food .",
    images: ["https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&w=800&q=80"]
  }
];
