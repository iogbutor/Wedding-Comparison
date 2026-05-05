import { useState } from “react”;

const venues = [
“Jericho Terrace”,
“Sand Castle”,
“Verdi’s of Westbury”,
“The Royal Palm”,
“Westbury Manor”,
“Mansion at Oyster Bay”,
“The Fox Hollow”,
“The Lannin”,
“Coral House”,
“Mansion at Glen Cove”,
“Heritage Club at Bethpage”,
“Bourne Mansion”,
“Oheka Castle”,
];

const venueShort = [
“Jericho Terrace”,
“Sand Castle”,
“Verdi’s”,
“Royal Palm”,
“Westbury Manor”,
“Mansion @ OB”,
“Fox Hollow”,
“The Lannin”,
“Coral House”,
“Glen Cove Mansion”,
“Heritage Club”,
“Bourne Mansion”,
“Oheka Castle”,
];

const costComponents = [
{
category: “VENUE & FACILITY”,
items: [
{
label: “Venue / Room Fee”,
note: “Base rental or included in pkg”,
costs: [
{ low: 3000, high: 6000 },
{ low: 5000, high: 8000 },
{ low: 2500, high: 5000 },
{ low: 2000, high: 4500 },
{ low: 4000, high: 7000 },
{ low: 4500, high: 8000 },
{ low: 4000, high: 7500 },
{ low: 5000, high: 9000 },
{ low: 3000, high: 6000 },
{ low: 5000, high: 9000 },
{ low: 6000, high: 10000 },
{ low: 6000, high: 10000 },
{ low: 15000, high: 26000 },
],
},
{
label: “Ceremony Setup Fee”,
note: “If ceremony held on-site”,
costs: [
{ low: 1000, high: 2000 },
{ low: 1500, high: 2500 },
{ low: 800, high: 1500 },
{ low: 750, high: 1500 },
{ low: 1200, high: 2000 },
{ low: 1500, high: 2500 },
{ low: 1000, high: 2000 },
{ low: 1500, high: 2500 },
{ low: 1000, high: 2000 },
{ low: 1500, high: 2500 },
{ low: 1500, high: 2500 },
{ low: 2000, high: 3500 },
{ low: 2500, high: 4000 },
],
},
],
},
{
category: “FOOD & BEVERAGE”,
items: [
{
label: “Cocktail Hour Catering”,
note: “Per person, 375 guests”,
costs: [
{ low: 18750, high: 26250 },
{ low: 22500, high: 30000 },
{ low: 15000, high: 22500 },
{ low: 13125, high: 18750 },
{ low: 18750, high: 26250 },
{ low: 20625, high: 28125 },
{ low: 18750, high: 26250 },
{ low: 22500, high: 30000 },
{ low: 16875, high: 24375 },
{ low: 22500, high: 30000 },
{ low: 22500, high: 30000 },
{ low: 24375, high: 33750 },
{ low: 37500, high: 45000 },
],
},
{
label: “Dinner / Reception Catering”,
note: “Per person, 4-course meal”,
costs: [
{ low: 18750, high: 26250 },
{ low: 22500, high: 30000 },
{ low: 15000, high: 22500 },
{ low: 13125, high: 18750 },
{ low: 18750, high: 26250 },
{ low: 20625, high: 28125 },
{ low: 18750, high: 26250 },
{ low: 22500, high: 30000 },
{ low: 16875, high: 24375 },
{ low: 22500, high: 30000 },
{ low: 22500, high: 30000 },
{ low: 24375, high: 33750 },
{ low: 37500, high: 45000 },
],
},
{
label: “Open Bar Service”,
note: “Top shelf liquor, wine, beer”,
costs: [
{ low: 7500, high: 11250 },
{ low: 9000, high: 13500 },
{ low: 6000, high: 9000 },
{ low: 5625, high: 8250 },
{ low: 7500, high: 11250 },
{ low: 8250, high: 12000 },
{ low: 7500, high: 11250 },
{ low: 9000, high: 13500 },
{ low: 6750, high: 9750 },
{ low: 9000, high: 13500 },
{ low: 9000, high: 13500 },
{ low: 9750, high: 14250 },
{ low: 15000, high: 20000 },
],
},
{
label: “Wedding Cake”,
note: “Often included in venue pkg”,
costs: [
{ low: 1500, high: 2500 },
{ low: 1800, high: 2800 },
{ low: 1200, high: 2000 },
{ low: 1000, high: 1800 },
{ low: 1500, high: 2500 },
{ low: 1600, high: 2600 },
{ low: 1500, high: 2500 },
{ low: 1800, high: 2800 },
{ low: 1300, high: 2200 },
{ low: 1800, high: 2800 },
{ low: 1800, high: 2800 },
{ low: 2000, high: 3200 },
{ low: 2500, high: 4000 },
],
},
{
label: “Viennese / Dessert Hour”,
note: “Optional add-on”,
costs: [
{ low: 3750, high: 5625 },
{ low: 4500, high: 6750 },
{ low: 2250, high: 3750 },
{ low: 1875, high: 3375 },
{ low: 3375, high: 5250 },
{ low: 3750, high: 5625 },
{ low: 3375, high: 5250 },
{ low: 4500, high: 6750 },
{ low: 2625, high: 4500 },
{ low: 4500, high: 6750 },
{ low: 4500, high: 6750 },
{ low: 5250, high: 7500 },
{ low: 7500, high: 11250 },
],
},
],
},
{
category: “SERVICE & STAFFING”,
items: [
{
label: “Maitre D / Event Coordinator”,
note: “Day-of management”,
costs: [
{ low: 1500, high: 2500 },
{ low: 1500, high: 2500 },
{ low: 1000, high: 2000 },
{ low: 1000, high: 2000 },
{ low: 1500, high: 2500 },
{ low: 1500, high: 2500 },
{ low: 1500, high: 2500 },
{ low: 1500, high: 2500 },
{ low: 1200, high: 2000 },
{ low: 1500, high: 2500 },
{ low: 1500, high: 2500 },
{ low: 1500, high: 2500 },
{ low: 2000, high: 3500 },
],
},
{
label: “Bridal Attendant”,
note: “Usually included”,
costs: [
{ low: 500, high: 1000 },
{ low: 500, high: 1000 },
{ low: 500, high: 1000 },
{ low: 500, high: 1000 },
{ low: 500, high: 1000 },
{ low: 500, high: 1000 },
{ low: 500, high: 1000 },
{ low: 500, high: 1000 },
{ low: 500, high: 1000 },
{ low: 500, high: 1000 },
{ low: 500, high: 1000 },
{ low: 500, high: 1000 },
{ low: 500, high: 1000 },
],
},
{
label: “Service Charge / Gratuity”,
note: “Typically 6-8% of total”,
costs: [
{ low: 3500, high: 5000 },
{ low: 4000, high: 5500 },
{ low: 2500, high: 4000 },
{ low: 2000, high: 3500 },
{ low: 3200, high: 5000 },
{ low: 3500, high: 5200 },
{ low: 3200, high: 5000 },
{ low: 4000, high: 5500 },
{ low: 2800, high: 4200 },
{ low: 4000, high: 5500 },
{ low: 4200, high: 6000 },
{ low: 4500, high: 6500 },
{ low: 8000, high: 12000 },
],
},
],
},
{
category: “DECOR & EXPERIENCE”,
items: [
{
label: “Floral Arrangements”,
note: “Centerpieces, ceremony, bouquets”,
costs: [
{ low: 8000, high: 15000 },
{ low: 8000, high: 15000 },
{ low: 6000, high: 12000 },
{ low: 6000, high: 12000 },
{ low: 8000, high: 15000 },
{ low: 8000, high: 15000 },
{ low: 8000, high: 15000 },
{ low: 10000, high: 18000 },
{ low: 7000, high: 13000 },
{ low: 10000, high: 18000 },
{ low: 10000, high: 18000 },
{ low: 12000, high: 22000 },
{ low: 18000, high: 35000 },
],
},
{
label: “Lighting & Uplighting”,
note: “Room lighting, dance floor FX”,
costs: [
{ low: 2000, high: 4000 },
{ low: 2500, high: 5000 },
{ low: 1500, high: 3000 },
{ low: 1500, high: 3000 },
{ low: 2000, high: 4000 },
{ low: 2500, high: 4500 },
{ low: 2000, high: 4000 },
{ low: 2500, high: 5000 },
{ low: 1800, high: 3500 },
{ low: 2500, high: 5000 },
{ low: 2500, high: 5000 },
{ low: 3000, high: 6000 },
{ low: 4000, high: 8000 },
],
},
{
label: “DJ / Entertainment”,
note: “5-6 hrs, lighting package”,
costs: [
{ low: 3000, high: 6000 },
{ low: 3000, high: 6000 },
{ low: 2500, high: 5000 },
{ low: 2500, high: 5000 },
{ low: 3000, high: 6000 },
{ low: 3000, high: 6000 },
{ low: 3000, high: 6000 },
{ low: 3500, high: 7000 },
{ low: 2500, high: 5500 },
{ low: 3500, high: 7000 },
{ low: 3500, high: 7000 },
{ low: 4000, high: 8000 },
{ low: 5000, high: 10000 },
],
},
],
},
{
category: “MEDIA & MEMORIES”,
items: [
{
label: “Photography”,
note: “8-10 hrs, full coverage”,
costs: [
{ low: 4000, high: 8000 },
{ low: 4000, high: 8000 },
{ low: 3500, high: 7000 },
{ low: 3500, high: 7000 },
{ low: 4000, high: 8000 },
{ low: 4000, high: 8000 },
{ low: 4000, high: 8000 },
{ low: 4500, high: 9000 },
{ low: 3500, high: 7500 },
{ low: 4500, high: 9000 },
{ low: 4500, high: 9000 },
{ low: 5000, high: 10000 },
{ low: 6000, high: 12000 },
],
},
{
label: “Videography”,
note: “Full-day cinematic film”,
costs: [
{ low: 2500, high: 5000 },
{ low: 2500, high: 5000 },
{ low: 2000, high: 4000 },
{ low: 2000, high: 4000 },
{ low: 2500, high: 5000 },
{ low: 2500, high: 5000 },
{ low: 2500, high: 5000 },
{ low: 3000, high: 6000 },
{ low: 2000, high: 4500 },
{ low: 3000, high: 6000 },
{ low: 3000, high: 6000 },
{ low: 3500, high: 7000 },
{ low: 4000, high: 8000 },
],
},
],
},
{
category: “TAX & FEES”,
items: [
{
label: “NY State Sales Tax”,
note: “~8.625% on taxable items”,
costs: [
{ low: 4500, high: 6500 },
{ low: 5000, high: 7500 },
{ low: 3500, high: 5500 },
{ low: 3000, high: 5000 },
{ low: 4500, high: 6500 },
{ low: 4800, high: 7000 },
{ low: 4500, high: 6500 },
{ low: 5000, high: 7500 },
{ low: 4000, high: 6000 },
{ low: 5000, high: 7500 },
{ low: 5200, high: 7800 },
{ low: 5500, high: 8500 },
{ low: 9000, high: 14000 },
],
},
],
},
];

const fmt = (n) =>
n >= 1000 ? “$” + (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1) + “k” : “$” + n;

const fmtRange = (low, high) => fmt(low) + “-” + fmt(high);

const getMidpoint = (low, high) => (low + high) / 2;

const categoryColors = {
“VENUE & FACILITY”: “#b5986a”,
“FOOD & BEVERAGE”: “#7a9e7e”,
“SERVICE & STAFFING”: “#8a9ab5”,
“DECOR & EXPERIENCE”: “#b57a9a”,
“MEDIA & MEMORIES”: “#9a8ab5”,
“TAX & FEES”: “#b59a7a”,
};

export default function WeddingComparison() {
const [activeVenue, setActiveVenue] = useState(null);
const [activeItem, setActiveItem] = useState(null);
const [showTotals, setShowTotals] = useState(false);

const venueTotals = venues.map((_, vi) => {
let low = 0, high = 0;
costComponents.forEach((cat) =>
cat.items.forEach((item) => {
low += item.costs[vi].low;
high += item.costs[vi].high;
})
);
return { low, high };
});

// Flatten rows to avoid fragment-with-key issues
const rows = [];
costComponents.forEach((cat, ci) => {
rows.push({ type: “category”, cat, ci, key: “cat-” + ci });
cat.items.forEach((item, ii) => {
rows.push({ type: “item”, item, ci, ii, key: ci + “-” + ii });
});
});

return (
<div style={{
fontFamily: “Georgia, ‘Times New Roman’, serif”,
background: “linear-gradient(135deg, #1a1410 0%, #2d2218 50%, #1a1410 100%)”,
minHeight: “100vh”,
color: “#e8dcc8”,
}}>
{/* Header */}
<div style={{
background: “linear-gradient(180deg, #0d0b08 0%, #1a1410 100%)”,
borderBottom: “1px solid #40301888”,
padding: “32px 40px 24px”,
position: “sticky”,
top: 0,
zIndex: 10,
}}>
<div style={{ maxWidth: 1800, margin: “0 auto” }}>
<div style={{ display: “flex”, alignItems: “baseline”, gap: 16, marginBottom: 6 }}>
<span style={{ fontSize: 11, letterSpacing: “0.3em”, color: “#b5986a”, textTransform: “uppercase” }}>Nassau County</span>
<span style={{ color: “#b5986a44”, fontSize: 14 }}>◆</span>
<span style={{ fontSize: 11, letterSpacing: “0.3em”, color: “#b5986a88”, textTransform: “uppercase” }}>350-400 Guests</span>
</div>
<h1 style={{ fontSize: “clamp(22px, 3vw, 36px)”, fontWeight: 400, letterSpacing: “0.05em”, margin: 0, color: “#f0e6d0” }}>
Wedding Venue Cost Comparison
</h1>
<p style={{ margin: “8px 0 0”, fontSize: 13, color: “#a09070”, fontStyle: “italic” }}>
All estimates based on 375 guests (midpoint). Ranges reflect off-peak vs. peak Saturday pricing.
</p>
</div>
</div>

```
  {/* Toggle */}
  <div style={{ maxWidth: 1800, margin: "0 auto", padding: "16px 40px 0" }}>
    <button
      onClick={() => setShowTotals(!showTotals)}
      style={{
        background: showTotals ? "#b5986a" : "transparent",
        border: "1px solid #b5986a",
        color: showTotals ? "#1a1410" : "#b5986a",
        padding: "8px 20px",
        borderRadius: 2,
        fontSize: 12,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        cursor: "pointer",
        fontFamily: "Georgia, serif",
      }}
    >
      {showTotals ? "Hide Totals Row" : "Show Totals Row"}
    </button>
  </div>

  {/* Table */}
  <div style={{ maxWidth: 1800, margin: "16px auto", padding: "0 40px 60px", overflowX: "auto" }}>
    <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "auto", fontSize: 12 }}>
      <thead>
        <tr>
          <th style={{
            width: 220,
            minWidth: 220,
            textAlign: "left",
            padding: "14px 16px",
            background: "#0d0b08",
            borderBottom: "2px solid #b5986a",
            borderRight: "1px solid #b5986a33",
            position: "sticky",
            left: 0,
            zIndex: 5,
            color: "#b5986a",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}>
            Cost Component
          </th>
          {venues.map((v, i) => (
            <th
              key={v}
              onMouseEnter={() => setActiveVenue(i)}
              onMouseLeave={() => setActiveVenue(null)}
              style={{
                padding: "12px 14px",
                minWidth: 145,
                background: activeVenue === i ? "#2a2010" : "#0d0b08",
                borderBottom: "2px solid #b5986a",
                borderRight: i < venues.length - 1 ? "1px solid #b5986a22" : "none",
                color: activeVenue === i ? "#f0e6d0" : "#c8b890",
                fontSize: 11,
                fontWeight: 400,
                letterSpacing: "0.04em",
                textAlign: "center",
                cursor: "default",
                lineHeight: 1.4,
                fontFamily: "Georgia, serif",
              }}
            >
              {venueShort[i]}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {rows.map((row) => {
          if (row.type === "category") {
            const { cat, ci } = row;
            return (
              <tr key={row.key}>
                <td
                  colSpan={venues.length + 1}
                  style={{
                    padding: "10px 16px",
                    background: "#150f0a",
                    color: categoryColors[cat.category] || "#b5986a",
                    fontSize: 10,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    borderTop: ci > 0 ? "1px solid #b5986a33" : "none",
                    borderBottom: "1px solid #b5986a22",
                  }}
                >
                  {cat.category}
                </td>
              </tr>
            );
          }

          const { item, ci, ii } = row;
          const isActive = activeItem === row.key;
          const allMids = item.costs.map((c) => getMidpoint(c.low, c.high));
          const minMid = Math.min(...allMids);
          const maxMid = Math.max(...allMids);

          return (
            <tr
              key={row.key}
              onMouseEnter={() => setActiveItem(row.key)}
              onMouseLeave={() => setActiveItem(null)}
            >
              <td style={{
                padding: "10px 16px",
                background: isActive ? "#1f1812" : "#17120d",
                borderRight: "1px solid #b5986a33",
                position: "sticky",
                left: 0,
                zIndex: 2,
                borderBottom: "1px solid #b5986a18",
              }}>
                <div style={{ color: "#e8dcc8", fontSize: 12, marginBottom: 2 }}>{item.label}</div>
                <div style={{ color: "#7a6a52", fontSize: 10, fontStyle: "italic" }}>{item.note}</div>
              </td>

              {item.costs.map((cost, vi) => {
                const mid = getMidpoint(cost.low, cost.high);
                const norm = maxMid === minMid ? 0.5 : (mid - minMid) / (maxMid - minMid);
                const isColActive = activeVenue === vi;
                const isLowest = mid === minMid;
                const isHighest = mid === maxMid;
                const cellBg = (isColActive || isActive) ? "#251e14" : (vi % 2 === 0 ? "#1c1710" : "#1a1410");

                return (
                  <td
                    key={vi}
                    style={{
                      padding: "10px 14px",
                      minWidth: 145,
                      textAlign: "center",
                      background: cellBg,
                      borderRight: vi < venues.length - 1 ? "1px solid #b5986a18" : "none",
                      borderBottom: "1px solid #b5986a18",
                      position: "relative",
                    }}
                  >
                    <div style={{
                      position: "absolute",
                      bottom: 0,
                      left: "10%",
                      width: "80%",
                      height: 2,
                      background: isLowest ? "#7a9e7e" : isHighest ? "#b57a7a" : "#b5986a",
                      opacity: 0.4 + norm * 0.4,
                      borderRadius: 1,
                    }} />
                    <div style={{
                      fontSize: 13,
                      color: isLowest ? "#9fc9a0" : isHighest ? "#c9a0a0" : "#d4c4a4",
                      letterSpacing: "0.02em",
                    }}>
                      {fmtRange(cost.low, cost.high)}
                    </div>
                  </td>
                );
              })}
            </tr>
          );
        })}

        {showTotals && (
          <tr>
            <td style={{
              padding: "14px 16px",
              background: "#0d0b08",
              borderTop: "2px solid #b5986a",
              position: "sticky",
              left: 0,
              zIndex: 2,
              color: "#b5986a",
              fontSize: 13,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}>
              Estimated Total
              <div style={{ fontSize: 10, color: "#7a6a52", marginTop: 2, fontStyle: "italic", textTransform: "none" }}>
                All components combined
              </div>
            </td>
            {venueTotals.map((t, vi) => (
              <td key={vi} style={{
                padding: "14px 14px",
                textAlign: "center",
                background: "#0d0b08",
                borderTop: "2px solid #b5986a",
                borderRight: vi < venues.length - 1 ? "1px solid #b5986a33" : "none",
              }}>
                <div style={{ fontSize: 13, color: "#f0e6d0", fontWeight: 600, letterSpacing: "0.02em" }}>
                  {fmtRange(t.low, t.high)}
                </div>
              </td>
            ))}
          </tr>
        )}
      </tbody>
    </table>

    {/* Legend */}
    <div style={{
      marginTop: 24,
      display: "flex",
      gap: 24,
      flexWrap: "wrap",
      alignItems: "center",
      borderTop: "1px solid #b5986a22",
      paddingTop: 16,
    }}>
      <span style={{ fontSize: 11, color: "#7a6a52", letterSpacing: "0.1em", textTransform: "uppercase" }}>Legend:</span>
      <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "#9fc9a0" }}>
        <span style={{ display: "inline-block", width: 20, height: 2, background: "#7a9e7e", borderRadius: 1 }} />
        Lowest across venues
      </span>
      <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "#c9a0a0" }}>
        <span style={{ display: "inline-block", width: 20, height: 2, background: "#b57a7a", borderRadius: 1 }} />
        Highest across venues
      </span>
      <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "#d4c4a4" }}>
        <span style={{ display: "inline-block", width: 20, height: 2, background: "#b5986a", borderRadius: 1 }} />
        Mid-range
      </span>
      <span style={{ marginLeft: "auto", fontSize: 11, color: "#7a6a52", fontStyle: "italic" }}>
        Hover venue column or row to highlight · Estimates for planning purposes only
      </span>
    </div>
  </div>
</div>
```

);
}
