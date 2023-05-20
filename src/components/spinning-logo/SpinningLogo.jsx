import './SpinningLogo.css'

function SpinningLogo() {
  const text = "Welcome To The New Era"
  const letters = text.split('')
  return (
    <div className="navbar">
      <div className="logo-container">
        <div className="circle">
          <div className="logo"></div>
          <div className="text">
            <p>
              {letters.map((char, i) => (
                <span
                  key={i}
                  style={{ transform: `rotate(${i * 18}deg)` }}
                >
                  {char}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpinningLogo
