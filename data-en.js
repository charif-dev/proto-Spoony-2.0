/* Spoony 2.0 - internal demo. English text of the 15 scenarios. All site data is fictional. */
window.SC_EN = {
  industrie: {
    title: "Industry", vector: "OBL ISO 50001",
    tagline: "Motors, compressors, machine tools, robots and conveyors tracked feeder by feeder.",
    site: "Precision engineering plant", place: "Industrial site, Centre-Val de Loire",
    ipe: { label: "kWh per part", unit: "kWh/part" },
    departs: ["Air compressor C1", "Air compressor C2", "5-axis machining centre", "Welding robot cell R3", "Conveyor line A", "Workshop air handling unit"],
    alerts: [
      { txt: "Probable air leak: C1 runs 38% of the time outside production.", reco: "Run a targeted leak detection campaign on the workshop 2 air network." },
      { txt: "Conveyor line A ran idle for 47 min this morning.", reco: "Tie the conveyor stop to the part presence signal." }
    ],
    entry: "Instrument the air plant and the three most loaded machines."
  },
  batiment: {
    title: "Tertiary buildings", vector: "OBL tertiary decree",
    tagline: "Retail, offices, universities: the per-use metering the French tertiary decree expects.",
    site: "Office building, 12,000 m²", place: "Île-de-France",
    ipe: { label: "kWh per m² per year", unit: "kWh/m².yr" },
    departs: ["Chiller plant unit 1", "Air handling units floors 1 to 6", "Floor lighting", "Lifts A and B", "Server room", "Staff restaurant"],
    alerts: [
      { txt: "The floors' air handling unit runs on Sunday at 62% of its rated power.", reco: "Fix the BMS weekend schedule." },
      { txt: "Lighting on at 11:40 pm on two empty floors.", reco: "Check the presence detectors on levels 4 and 5." }
    ],
    entry: "Instrument the main switchboard and the HVAC, lighting and lift feeders."
  },
  mobilite: {
    title: "Transport and vertical mobility", vector: "ROI maintenance",
    tagline: "Escalators, lifts and doors of a multi-brand fleet brought into one data set.",
    site: "Major European station", place: "Central hall, 14 escalators",
    ipe: { label: "kWh per passenger", unit: "kWh/passenger" },
    departs: ["Escalator E1, brand A", "Escalator E2, brand A", "Escalator E3, brand B", "Platform 4 lift", "North automatic doors", "Platform lighting substation"],
    alerts: [
      { txt: "E3 uses 23% more than E1 and E2 for comparable traffic.", reco: "Schedule a gearbox inspection of E3 before the next calendar service." },
      { txt: "Platform 4 lift: 1,240 cycles this week, 2.1 times the average.", reco: "Bring the service forward based on actual use, within the manufacturer's recommendations." }
    ],
    entry: "Instrument a multi-brand panel of escalators, lifts and doors."
  },
  photovoltaique: {
    title: "Photovoltaic generation", vector: "NOT CSR",
    tagline: "Every inverter measured, generation matched against site consumption.",
    site: "Solar carport, 480 kWp", place: "Logistics centre car park",
    ipe: { label: "Self-consumption rate", unit: "%" },
    departs: ["Inverter INV-1", "Inverter INV-2", "Inverter INV-3", "Inverter INV-4", "Warehouse consumption", "Grid export"],
    alerts: [
      { txt: "INV-3 produces 14% less than its neighbours under the same sunshine.", reco: "Check fouling and connectors on string 3." },
      { txt: "Grid export between noon and 2 pm while the docks are idle.", reco: "Shift electric forklift charging to this slot." }
    ],
    entry: "Instrument each inverter and the site's main feeder."
  },
  bornes: {
    title: "Charging stations", vector: "ROI contracted power",
    tagline: "Per-station metering, load shedding against contracted power, OCPP protocol.",
    site: "Car park with 24 charge points", place: "Headquarters of a services company",
    ipe: { label: "kWh per session", unit: "kWh/session" },
    departs: ["Stations 1 to 6", "Stations 7 to 12", "Stations 13 to 18", "Stations 19 to 24", "Main building", "Heat pump"],
    alerts: [
      { txt: "Peak at 8:50 am: 96% of the contracted power.", reco: "Enable progressive load shedding of stations 13 to 24 between 8:30 and 9:30 am." },
      { txt: "Station 15: sessions interrupted three times this week.", reco: "Check the cable and the contactor of station 15." }
    ],
    entry: "Instrument the station groups and the car park's main feeder."
  },
  maintenance: {
    title: "Process, automation and maintenance", vector: "ROI availability",
    tagline: "The electrical signature of each feeder serves as a machine health indicator.",
    site: "Bottling line", place: "Industrial site, Grand Est",
    ipe: { label: "kWh per thousand bottles", unit: "kWh/1000 btl" },
    departs: ["Blow moulder", "Filler", "Overhead conveyors", "Labeller", "Packer and shrink oven", "Process chiller"],
    alerts: [
      { txt: "Shrink oven start-up current peak up 9% over 10 days.", reco: "Check the heating elements at the next planned stop." },
      { txt: "Overhead conveyors active for 26 min while the blow moulder was stopped.", reco: "Tie the conveyors to the blow moulder's run state." }
    ],
    entry: "Instrument the bottleneck machine and its auxiliaries."
  },
  tri: {
    title: "Sorting and recycling centres",
    tagline: "One unavailable motor on a sorting line stops the whole section.",
    fact: "164 sorting centres in mainland France, according to Citeo as cited by Natura Sciences in 2023.",
    site: "Selective collection sorting centre", place: "Line of 42 motors",
    ipe: { label: "kWh per tonne sorted", unit: "kWh/t" },
    departs: ["Trommel", "Ballistic separator", "Optical sorter T2", "Sorting cabin conveyor", "Baling press", "Film suction"],
    alerts: [
      { txt: "12% phase imbalance on the ballistic separator.", reco: "Check terminal tightness and motor condition before the next campaign." },
      { txt: "Sorting cabin conveyor ran idle for 52 min between two feeds.", reco: "Automatic stop after 5 min with no material detected." }
    ],
    entry: "Instrument one section of the line."
  },
  carrieres: {
    title: "Quarries and aggregates",
    tagline: "On a crusher, vibration is the process itself.",
    fact: "2,995 quarries in operation in 2023, according to SDES.",
    site: "Hard-rock quarry", place: "Crushing and screening plant",
    ipe: { label: "kWh per tonne produced", unit: "kWh/t" },
    departs: ["Primary jaw crusher", "Secondary cone crusher", "3-deck screen", "Conveyor T1", "Conveyor T4 to stockpile", "Wash pump"],
    alerts: [
      { txt: "T1 runs idle 18% of the primary's running time.", reco: "Tie T1 to the feed hopper level." },
      { txt: "Cone current drifting up 7% at equal tonnage for 6 days.", reco: "Check mantle wear and the tightening setting." }
    ],
    entry: "Instrument the primary crusher and one critical conveyor."
  },
  ciment: {
    title: "Cement plants",
    tagline: "An ISO 50001 audit no longer accepts a pro-rata energy split.",
    fact: "29 cement plants in France, according to SFIC as cited by MineralInfo in 2025.",
    site: "Dry-process cement plant", place: "Rotary kiln and two mills",
    ipe: { label: "kWh per tonne of clinker", unit: "kWh/t clinker" },
    departs: ["Raw mill", "Kiln induced-draft fan", "Cement mill BK2", "Clinker cooler", "Bag filter dust collector", "Utility compressors"],
    alerts: [
      { txt: "BK2: current draw up 5.8% at constant throughput.", reco: "Check the liners and the ball charge at the next stop." },
      { txt: "The dust collector runs at full speed with the kiln stopped.", reco: "Lower the speed setpoint during kiln stops." }
    ],
    entry: "Instrument one mill and its critical auxiliaries."
  },
  papier: {
    title: "Paper and board mills",
    tagline: "The hot, humid atmosphere of a paper machine wears out surface-mounted instrumentation.",
    fact: "73 paper mills listed by Copacel.",
    site: "Board mill, paper machine PM2", place: "Continuous operation 7 days a week",
    ipe: { label: "kWh per tonne produced", unit: "kWh/t" },
    departs: ["Pulper", "Refiner R2", "Mixing pump", "Vacuum pumps", "Dryer section ventilation", "Winder"],
    alerts: [
      { txt: "Vacuum pumps: power up 6% at constant basis weight.", reco: "Check the tightness of the suction boxes." },
      { txt: "Refiner R2 is 12% above its baseline on the current grade.", reco: "Review the specific refining energy setpoint." }
    ],
    entry: "Instrument one machine section and its utilities."
  },
  siderurgie: {
    title: "Steel and rolling mills",
    tagline: "On a rolling mill, the motor stays out of reach during operation because of temperature.",
    fact: "Few sites, dozens of measurement points per equipped site.",
    site: "Hot rolling mill", place: "Reheating furnace and 6 stands",
    ipe: { label: "kWh per tonne rolled", unit: "kWh/t" },
    departs: ["Roughing stand", "Finishing stand F3", "Combustion air fan", "Hydraulic unit", "Furnace dust extraction", "Cooling pumps"],
    alerts: [
      { txt: "Hydraulic unit: 14 starts per hour against 6 at baseline.", reco: "Check the accumulator and internal leaks." },
      { txt: "Dust extraction at full speed during the roll change.", reco: "Schedule a reduced speed during tool changes." }
    ],
    entry: "Instrument one furnace or line and its critical auxiliaries."
  },
  eau: {
    title: "Water and wastewater",
    tagline: "A submersible pump will never get a vibration sensor.",
    fact: "4,048 treatment plants of 2,000 population equivalents and above in 2024, according to the ministry's sanitation portal.",
    site: "Wastewater plant, 80,000 PE", place: "Lifting, aeration, dewatering",
    ipe: { label: "kWh per m³ treated", unit: "kWh/m³" },
    departs: ["Lifting pump P1", "Lifting pump P2", "Aeration blower S1", "Aeration blower S2", "Dewatering centrifuge", "Recirculation pump"],
    alerts: [
      { txt: "P2 draws 11% more than P1 for the same flow.", reco: "Inspect the impeller of P2: clogging or wear is likely." },
      { txt: "The blowers run flat out at night despite the lower load.", reco: "Review the dissolved oxygen setpoint during off-peak hours." }
    ],
    entry: "Instrument the lifting and aeration of one plant."
  },
  agro: {
    title: "Continuous-process food and beverage",
    tagline: "High-pressure washdown rules out any instrumentation mounted on the machine.",
    fact: "Sugar mills, dairies, starch plants: stopping during the campaign is not an option.",
    site: "Sugar mill in campaign", place: "Slicing, diffusion, evaporation",
    ipe: { label: "kWh per tonne of beet", unit: "kWh/t beet" },
    departs: ["Beet slicer", "Juice pumps", "Centrifuges", "Refrigeration compressors", "Compressed air", "Washing station"],
    alerts: [
      { txt: "Juice pumps: unstable power profile for 30 hours.", reco: "Check cavitation and the upstream tank level." },
      { txt: "Compressed air: night load at 41% with no associated production.", reco: "Look for leaks on the packaging workshop network." }
    ],
    entry: "Instrument one line and its utilities over a full campaign."
  },
  rail: {
    title: "Rail infrastructure and vertical mobility",
    tagline: "One shared energy data set to run a multi-brand fleet on actual use.",
    fact: "Deployment under way in a major European station, extension under study.",
    site: "Substation and passenger station", place: "Multi-brand fleet, 3 generations",
    ipe: { label: "kWh per 1,000 cycles", unit: "kWh/1000 cycles" },
    departs: ["Escalator E5, brand C", "Escalator E6, brand A", "Accessible lift platform 2", "Landing doors", "Substation auxiliaries", "Point heating"],
    alerts: [
      { txt: "Point heating active at 9 °C outside.", reco: "Tie the heating to the rail temperature." },
      { txt: "E5: running time 21 hours a day, calendar-based maintenance unsuited.", reco: "Move E5 to maintenance based on actual use." }
    ],
    entry: "Instrument a multi-brand panel of escalators, lifts and doors."
  },
  verre: {
    title: "Glassworks, ports and heavy handling",
    tagline: "An unplanned furnace stop damages the production tool itself.",
    fact: "Heat, vibration, salt exposure: the measurement stays in the cabinet.",
    site: "Container terminal", place: "Gantry cranes, conveyors and air plant",
    ipe: { label: "kWh per container handled", unit: "kWh/TEU" },
    departs: ["STS 2 gantry, hoist", "STS 2 gantry, travel", "RTG 7 yard crane", "Bulk conveyor", "Air plant", "Yard lighting"],
    alerts: [
      { txt: "STS 2 hoist: current peaks up 8% at identical load.", reco: "Inspect the brake and the hoist ropes." },
      { txt: "Yard lighting at full power on unoccupied bays.", reco: "Dim by zone according to yard occupancy." }
    ],
    entry: "Instrument one furnace and its air plant, or one gantry crane and its auxiliaries."
  }
};
