import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Behave Like Compiler — Engineering Career Training | Bangalore'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#0D1B5E',
          padding: '72px 80px',
          fontFamily: 'monospace',
          position: 'relative',
        }}
      >
        {/* Dot grid background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(rgba(139,185,247,0.12) 1.5px, transparent 1.5px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Top: logo + chip */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', zIndex: 1 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '56px',
              height: '56px',
              borderRadius: '10px',
              backgroundColor: '#1E328B',
              border: '2px solid rgba(139,185,247,0.3)',
            }}
          >
            <span style={{ color: '#FEBB39', fontWeight: 700, fontSize: '18px' }}>BLC</span>
          </div>

          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '8px 16px',
              borderRadius: '999px',
              backgroundColor: 'rgba(30,50,139,0.8)',
              border: '1px solid rgba(139,185,247,0.3)',
              color: 'rgba(139,185,247,0.9)',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Engineering Career Training · Bangalore
          </span>
        </div>

        {/* Centre: headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', zIndex: 1 }}>
          <div
            style={{
              color: '#FFFFFF',
              fontSize: '64px',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-1px',
              maxWidth: '900px',
            }}
          >
            Have Patience and{' '}
            <span style={{ color: '#FEBB39' }}>Behave Like Compiler</span>
          </div>
          <div
            style={{
              color: 'rgba(255,255,255,0.55)',
              fontSize: '22px',
              fontWeight: 400,
              maxWidth: '720px',
            }}
          >
            Bridging academic learning and real-world industry for engineering students.
          </div>
        </div>

        {/* Bottom: stats row */}
        <div style={{ display: 'flex', gap: '48px', zIndex: 1 }}>
          {[
            { value: '500+', label: 'Students' },
            { value: '85%', label: 'Placement Rate' },
            { value: '15+', label: 'Companies' },
            { value: '10+', label: 'Colleges' },
          ].map((stat) => (
            <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ color: '#FEBB39', fontSize: '28px', fontWeight: 700 }}>
                {stat.value}
              </span>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
