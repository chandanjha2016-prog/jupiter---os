
export default function Dashboard() {
  return (
    <div style={{background: '#1A1A1A', color: '#D8CA9D', minHeight: '100vh', padding: '30px', fontFamily: 'Arial', textAlign: 'center'}}>
      <h1>JUPITER OS Command Center 🪐</h1>
      
      <div style={{border: '2px solid #D8CA9D', padding: '20px', margin: '20px 0', borderRadius: '10px'}}>
        <h2>10,000 Storm Agents - LIVE</h2>
        <p>Status: Harvesting Energy from Storms ⚡</p>
        <p>Uptime: 99.99%</p>
      </div>

      <div style={{border: '2px solid #D8CA9D', padding: '20px', margin: '20px 0', borderRadius: '10px'}}>
        <h2>Radiation Shield: 100%</h2>
        <p>Auto Deflecting Cosmic Rays ✅</p>
      </div>

      <div style={{border: '2px solid #D8CA9D', padding: '20px', margin: '20px 0', borderRadius: '10px'}}>
        <h2>Self-Healing Core</h2>
        <p>Last Storm Impact: Auto Recovered 0.5s ago ✅</p>
      </div>
    </div>
  )
}
