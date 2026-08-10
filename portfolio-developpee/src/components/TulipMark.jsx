export default function TulipMark() {
  return (
    <span className="tulip-mark" aria-hidden="true">
      <svg viewBox="0 0 34 42" role="img">
        <defs>
          <linearGradient id="tulip-pink" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffb2d3" />
            <stop offset=".5" stopColor="#ff5fa2" />
            <stop offset="1" stopColor="#db2777" />
          </linearGradient>
        </defs>
        <path className="tulip-stem" d="M17 21.5c.5 7.5-.3 12.4-1.8 17" />
        <path className="tulip-leaf" d="M16.7 31.2C10.6 27.7 7 30 6 34.8c4.8.8 8.5-.5 10.7-3.6Z" />
        <path className="tulip-leaf" d="M16.5 34.5c5.9-4.1 9.3-2.3 10.8 2.1-4.4 1.3-8.2.6-10.8-2.1Z" />
        <path className="tulip-bloom" d="M17 23.8C8.1 23.8 4.2 17.3 5.1 7c4 1.3 6.7 3.8 8.2 7.1C13.4 8.7 15.1 4.8 17 2c2 2.8 3.7 6.7 3.8 12.1 1.5-3.3 4.2-5.8 8.1-7.1.9 10.3-3 16.8-11.9 16.8Z" />
        <path className="tulip-highlight" d="M17 5.8c.8 4.6.7 9.3 0 14.3" />
      </svg>
    </span>
  )
}
