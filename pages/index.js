
export default function Home() {
  return (
    <div style={{background: 'linear-gradient(180deg, #D8CA9D 0%, #C88B3A 50%, #A0522D 100%)', color: '#1A1A1A', minHeight: '100vh', textAlign: 'center', padding: '60px 20px', fontFamily: 'Arial'}}>
      <h1 style={{fontSize: '60px', textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>JUPITER OS 🪐</h1>
      <p style={{fontSize: '22px', fontWeight: 'bold'}}>Storm-Powered OS for Deep Space Enterprises</p>
      <p>1,000,000x Energy | Radiation Shield | 10,000 Storm Agents</p>
      
      <div style={{background: 'rgba(255,255,255,0.2)', padding: '20px', margin: '40px auto', borderRadius: '15px', maxWidth: '600px'}}>
        <h2>Great Red Spot: ACTIVE 🌀</h2>
        <p>Energy Harvested: 98.7%</p>
        <p>Storm Velocity: 430 km/h</p>
      </div>

      <a href="/dashboard" style={{background: '#1A1A1A', color: '#D8CA9D', padding: '15px 40px', borderRadius: '10px', textDecoration: 'none', fontSize: '18px', fontWeight: 'bold'}}>Enter Command Center</a>
      
      <p style={{marginTop: '60px', fontSize: '14px'}}>© 2026 Chandan Jha | Built for the Future</p>
    </div>
  )
}
