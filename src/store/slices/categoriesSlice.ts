import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SubCategory {
  [key: string]: string[];
}

interface Category {
  [key: string]: SubCategory[];
}

interface CategoriesState {
  categories: Category;
}

const initialState: CategoriesState = {
  categories: {
    "Building materials": [
      {
        "Aluminium": [
          "Buildbond Cladding Aluminium Interior",
          "Cladbond Cladding Aluminium Exterior",
          "LHbond Cladding Aluminium Interior"
        ]
      },
      {
        "Blocks": [
          "Clay Bricks",
          "Cobble Block",
          "Cover Block With Middle Hole",
          "Glass Blocks",
          "Cement Blocks",
          "Mascons Brick Finish Random Paving Blocks"
        ]
      },
      {
        "Cement & Concrete": [
          "Bag Cement",
          "Grout"
        ]
      },
      {
        "Chemical": [
          "Admixtures",
          "Bitumen",
          "Lubricant"
        ]
      },
      {
        "Insulation": [
          "E-Foam Extruded Polystyrene XPS Thermal Insulation Boards",
          "Glass Wool Rolls",
          "Glass Wool Sheets",
          "Rockwool Insulation Sheets"
        ]
      },
      {
        "Paint": [
          "Exterior Paint",
          "Interior Paint",
          "Road Marking",
          "Wood Paint & Sealers"
        ]
      },
      {
        "Panels & Partitions": [
          "Decorative Panels",
          "Glass & Mirrors",
          "MDF Boards",
          "Plastic Sheets & Panels",
          "Wood Panels"
        ]
      },
      {
        "Sealant & Adhesive": [
          "Epoxy Resin"
        ]
      },
      {
        "Steel Items": [
          "Angle Iron",
          "Channel Iron Bar",
          "GI Box Bar",
          "GI Pipes",
          "H iron beam",
          "Mascons GI Pipes"
        ]
      },
      {
        "Tiles": [
          "Wall Tiles",
          "Floor Tile"
        ]
      },
      {
        "Timber": [
          "Timber Planks",
          "Plywood Boards"
        ]
      },
      {
        "Waterproofing": []
      }
    ],
    "Kitchen & Bathroom": [
      {
        "Sanitary Ware": [
          "Toilets",
          "Wash basins",
          "Bidets",
          "Urinals",
          "Pedestals"
        ]
      },
      {
        "Faucets and Taps": [
          "Kitchen taps",
          "Basin mixer taps",
          "Shower mixers",
          "Wall-mounted taps",
          "Sensor taps (touchless)"
        ]
      },
      {
        "Sinks": [
          "Stainless steel sinks",
          "Granite or quartz sinks",
          "Single or double bowl",
          "Undermount or top-mount sinks"
        ]
      },
      {
        "Bathroom Accessories": [
          "Towel rails and racks",
          "Toilet paper holders",
          "Soap dishes and dispensers",
          "Mirrors and mirror cabinets",
          "Toothbrush holders",
          "Shower caddies and baskets"
        ]
      },
      {
        "Showers and Bathtubs": [
          "Shower panels",
          "Rain showers",
          "Hand showers",
          "Bathtubs",
          "Shower enclosures and glass partitions"
        ]
      },
      {
        "Cabinetry & Vanities": [
          "Kitchen cabinets",
          "Bathroom vanities",
          "Sink counters and tops"
        ]
      },
      {
        "Countertops": [
          "Granite",
          "Quartz",
          "Marble",
          "Concrete",
          "Solid surface"
        ]
      },
      {
        "Ventilation & Exhaust Systems": [
          "Kitchen exhaust fans or hoods",
          "Bathroom exhaust fans",
          "Ducting and vent grilles"
        ]
      },
      {
        "Water Heating Systems": [
          "Instant water heaters (for kitchen and bathroom)",
          "Solar water heaters",
          "Storage geysers"
        ]
      }
    ],
    "Doors & Windows": [
      {
        "Locks & Handles": []
      },
      {
        "Door Window Accessories": []
      },
      {
        "Door Sashes": [
          "Plywood Doors"
        ]
      },
      {
        "Fire Rated": []
      }
    ],
    "Electrical": [
      {
        "Wires & Cables": []
      },
      {
        "Electrical Switches & Sockets": []
      },
      {
        "Distribution Boards & Circuit Protection": []
      },
      {
        "Lighting": [
          "Indoor Lighting",
          "Outdoor & Landscape Lighting",
          "Specialty & Functional Lighting",
          "Smart & Dimmable Lighting"
        ]
      },
      {
        "Electrical Accessories": []
      },
      {
        "Smart and Low Voltage Systems": [
          "Smart light switches and dimmers",
          "Home automation panels",
          "CCTV systems",
          "Fire alarms and smoke detectors",
          "Doorbells and intercoms"
        ]
      },
      {
        "Home Appliances": [
          "Washing Machines",
          "Refrigerator / Freezer",
          "Motors",
          "Fan",
          "Microwave Oven",
          "Dishwasher",
          "Air Conditioner (Split / Window)",
          "Electric Oven / Cooker",
          "Electric Kettle",
          "Toasters, Blenders, Mixers",
          "Televisions",
          "Audio Systems",
          "Satellite & Antenna Systems",
          "Wi-Fi Routers",
          "Smart Home Devices"
        ]
      }
    ],
    "Flooring": [
      {
        "Carpets": []
      },
      {
        "Epoxy Flooring": []
      },
      {
        "Industrial Flooring": []
      },
      {
        "Outdoor Decking": []
      },
      {
        "Rendered Flooring": []
      },
      {
        "Titanium Flooring": []
      },
      {
        "Vinyl Flooring": []
      },
      {
        "Wood Flooring": []
      }
    ],
    "Hardware": [
      {
        "Nails": []
      },
      {
        "Nuts & Bolts": []
      },
      {
        "Plugs & Anchors": []
      },
      {
        "Screws": []
      }
    ],
    "Plumbing": [
      {
        "Conduits & Casings": []
      },
      {
        "Fire Suppression Equipment": []
      },
      {
        "Plumbing Valves & Accessories": []
      },
      {
        "Pipe Fittings": []
      },
      {
        "PPR Pipes & Fittings": []
      },
      {
        "Water Pumps": []
      },
      {
        "PVC & Other Pipes": []
      },
      {
        "Septic & Sewage": [
          "Sewage Treatment Plants"
        ]
      },
      {
        "Water Filtration": []
      },
      {
        "Water Tanks & Storage": []
      }
    ],
    "Roofing & Ceiling": [
      {
        "Roofing Accessories": []
      },
      {
        "Roofing Sheets": []
      },
      {
        "Roof Tiles": []
      },
      {
        "Ceiling Tiles": []
      }
    ],
    "Tools & Equipment": [
      {
        "Automotive": []
      },
      {
        "Hand Tools": []
      },
      {
        "Masonry Tools": []
      },
      {
        "Measuring Equipment": []
      },
      {
        "Power Tools": []
      },
      {
        "Safety Equipment": [
          "Fire Extinguishers",
          "Gloves",
          "Raincoats",
          "Safety Helmets",
          "Safety Shoes & Boots"
        ]
      },
      {
        "Scaffolding": [
          "Acro Jacks"
        ]
      },
      {
        "Welding Equipment": []
      },
      {
        "Lifting Equipment": []
      },
      {
        "Landscape & External Works": [
          "Car Park Accessories",
          "Fences",
          "Gabions",
          "Manholes"
        ]
      }
    ],
    "Furniture": [
      {
        "Living Room": []
      },
      {
        "Bedroom": []
      },
      {
        "Dining Room": []
      },
      {
        "Home Office": []
      },
      {
        "Office Furniture": []
      },
      {
        "Storage Furniture": []
      }
    ]
  }
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Category>) => {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;