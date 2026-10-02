// यो Server Component हो (Default)
// हामी सिधै server बाट data लिन सक्छौं (Database को सट्टा अहिले एउटा Array राखियो)

async function getProducts() {
  // यो कोड Server मा मात्रै रन हुन्छ
  const products = [
    { id: 1, name: "Wireless Mouse", price: 1500 },
    { id: 2, name: "Mechanical Keyboard", price: 4500 },
    { id: 3, name: "Gaming Headset", price: 3000 },
  ];
  return products;
}

export default async function Home() {
  const products = await getProducts(); // Server बाट data तानेको

  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>हाम्रो सानो पसल (Day 1 Project)</h1>
      <p>यो Server Component हो, जहाँ data सिधै server बाट लोड हुन्छ।</p>
      
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        {products.map((item) => (
          <div key={item.id} style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px" }}>
            <h3>{item.name}</h3>
            <p>मूल्य: Rs. {item.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}