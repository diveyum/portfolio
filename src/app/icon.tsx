import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(to bottom right, #22d3ee, #0891b2)',
          color: 'white',
          fontWeight: 700,
          fontFamily: 'monospace',
          borderRadius: '8px',
          fontSize: '14px',
        }}
      >
        DA
      </div>
    ),
    {
      ...size,
    }
  )
}
