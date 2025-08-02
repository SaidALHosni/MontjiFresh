
// Richer static seed data for Montji demo (persisted to localStorage on first load)
window.MONTJI_SEED = {
  settings: {
    currency: "OMR",
    deliveryBaseKm: 30,
    deliveryBaseCost: 1.5,
    deliveryStepKm: 30,
    deliveryStepCost: 0.6,
    joinFeeBusinessman: 2,
    joinFeeFamily: 2
  },
  ads: [
    { id: "ad1", title: "Muttrah Corniche Food Walk", image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=1200&auto=format&fit=crop&q=60", link: "https://goo.gl/maps/" },
    { id: "ad2", title: "Seeb Night Market Bites", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&auto=format&fit=crop&q=60", link: "https://goo.gl/maps/" },
    { id: "ad3", title: "Taste of Nizwa Souq", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&auto=format&fit=crop&q=60", link: "https://goo.gl/maps/" }
  ],
  users: [
    { id: "admin1", role: "admin", name: "Montji Admin", email: "admin@montji.demo", password: "admin" },
    { id: "emp1", role: "employee", name: "Sara Employee", email: "sara@montji.demo", password: "sara" },
    { id: "delco1", role: "deliverycompany", name: "FastOman Delivery", email: "fast@montji.demo", password: "fast" },
    { id: "bm1", role: "businessman", name: "Yusuf", email: "yusuf@montji.demo", password: "yusuf", shopName: "Yusuf's Shelf Market", city: "Muscat" },
    { id: "bm2", role: "businessman", name: "Fatma", email: "fatma@montji.demo", password: "fatma", shopName: "Al Bawshar Foods", city: "Bawshar" },
    { id: "fam1", role: "familybusiness", name: "Al-Hana Family", email: "hana@montji.demo", password: "hana", city: "Seeb", logo: "https://i.pravatar.cc/100?img=15" },
    { id: "fam2", role: "familybusiness", name: "Bayt Nizwa", email: "nizwa@montji.demo", password: "nizwa", city: "Nizwa", logo: "https://i.pravatar.cc/100?img=32" },
    { id: "fam3", role: "familybusiness", name: "Muttrah Kitchen", email: "muttrah@montji.demo", password: "muttrah", city: "Muttrah", logo: "https://i.pravatar.cc/100?img=23" },
    { id: "cust1", role: "customer", name: "Ahmed", email: "ahmed@montji.demo", password: "ahmed", city: "Barka" },
    { id: "cust2", role: "customer", name: "Maryam", email: "maryam@montji.demo", password: "maryam", city: "Muscat" }
  ],
  shelves: [
    { id: "sh1", shopOwnerId: "bm1", label: "Shelf A", lengthCm: 120, monthlyCost: 8, rentedByFamilyId: "fam1", status: "approved" },
    { id: "sh2", shopOwnerId: "bm1", label: "Shelf B", lengthCm: 90, monthlyCost: 6, rentedByFamilyId: "fam3", status: "approved" },
    { id: "sh3", shopOwnerId: "bm2", label: "Corner 1", lengthCm: 100, monthlyCost: 7, rentedByFamilyId: null, status: "available" }
  ],
  shelfRequests: [
    { id: "sr1", shelfId: null, shopOwnerId: "bm2", familyId: "fam2", requestedLengthCm: 100, requestedMonthlyCost: 7, status: "pending", createdAt: new Date().toISOString() }
  ],
  deliveryCompanies: [
    { id: "delco1", name: "FastOman Delivery", baseKm: 30, baseCost: 1.5, stepKm: 30, stepCost: 0.6 },
    { id: "delco2", name: "Salalah Express", baseKm: 25, baseCost: 1.2, stepKm: 25, stepCost: 0.7 }
  ],
  dishes: [
    { id: "d1", title: "Shuwa (Omani slow-cooked lamb)", foodType: "Omani", price: 6.8, image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=1200&auto=format&fit=crop&q=60", ownerType: "familybusiness", ownerId: "fam1", availableAtShopOwnerId: "bm1", city: "Seeb", sizeOptions: ["Small","Medium","Large"], discounts: { generalPct: 0, bySize: { "Large": 10 }, byQty: [{ qty: 3, pct: 5 }, { qty: 5, pct: 10 }] } },
    { id: "d2", title: "Majboos Chicken", foodType: "Omani", price: 3.8, image: "https://images.unsplash.com/photo-1478144592103-25e218a04891?w=1200&auto=format&fit=crop&q=60", ownerType: "familybusiness", ownerId: "fam3", availableAtShopOwnerId: "bm1", city: "Muttrah", sizeOptions: ["Single","Family"], discounts: { generalPct: 0, bySize: {}, byQty: [{ qty: 4, pct: 7 }] } },
    { id: "d3", title: "Koshari (Egyptian)", foodType: "Egyptian", price: 3.2, image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=1200&auto=format&fit=crop&q=60", ownerType: "businessman", ownerId: "bm1", city: "Muscat", sizeOptions: ["Single","Family"], discounts: { generalPct: 5, bySize: {}, byQty: [{ qty: 4, pct: 7 }] } },
    { id: "d4", title: "Kunafa (Cheese)", foodType: "Levantine", price: 2.9, image: "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=1200&auto=format&fit=crop&q=60", ownerType: "businessman", ownerId: "bm2", city: "Bawshar", sizeOptions: ["Slice","Tray"], discounts: { generalPct: 0, bySize: { "Tray": 8 }, byQty: [] } },
    { id: "d5", title: "Harees", foodType: "Omani", price: 2.4, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&auto=format&fit=crop&q=60", ownerType: "familybusiness", ownerId: "fam2", availableAtShopOwnerId: null, city: "Nizwa", sizeOptions: ["Small","Large"], discounts: { generalPct: 0, bySize: { "Large": 5 }, byQty: [{ qty: 5, pct: 10 }] } },
    { id: "d6", title: "Falafel Wrap Box", foodType: "Levantine", price: 2.2, image: "https://images.unsplash.com/photo-1604908176997-43143928c549?w=1200&auto=format&fit=crop&q=60", ownerType: "familybusiness", ownerId: "fam1", availableAtShopOwnerId: "bm1", city: "Seeb", sizeOptions: ["Single","Double"], discounts: { generalPct: 0, bySize: {}, byQty: [{ qty: 6, pct: 12 }] } },
    { id: "d7", title: "Mandi Lamb", foodType: "Arabic", price: 7.5, image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=1200&auto=format&fit=crop&q=60", ownerType: "familybusiness", ownerId: "fam3", availableAtShopOwnerId: "bm1", city: "Muttrah", sizeOptions: ["Half","Full"], discounts: { generalPct: 0, bySize: {}, byQty: [] } },
    { id: "d8", title: "Fattoush Salad", foodType: "Levantine", price: 1.8, image: "https://images.unsplash.com/photo-1543332164-6e82f355bad2?w=1200&auto=format&fit=crop&q=60", ownerType: "businessman", ownerId: "bm2", city: "Bawshar", sizeOptions: ["Small","Large"], discounts: { generalPct: 10, bySize: {}, byQty: [] } },
    { id: "d9", title: "Molokhia with Rice", foodType: "Egyptian", price: 3.9, image: "https://images.unsplash.com/photo-1604908553981-349c0fba53f5?w=1200&auto=format&fit=crop&q=60", ownerType: "familybusiness", ownerId: "fam2", availableAtShopOwnerId: "bm2", city: "Nizwa", sizeOptions: ["Single","Family"], discounts: { generalPct: 0, bySize: {}, byQty: [{ qty: 3, pct: 8 }] } },
    { id: "d10", title: "Dates & Omani Halwa Platter", foodType: "Omani", price: 4.5, image: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=1200&auto=format&fit=crop&q=60", ownerType: "familybusiness", ownerId: "fam1", availableAtShopOwnerId: null, city: "Seeb", sizeOptions: ["Small","Large"], discounts: { generalPct: 0, bySize: { "Large": 6 }, byQty: [] } }
  ],
  orders: [],
  carts: {},
  reviews: [],
  sessions: { currentUserId: null }
};
