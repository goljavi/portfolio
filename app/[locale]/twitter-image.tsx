import { ImageResponse } from 'next/og'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

export const runtime = 'nodejs'

export const alt = 'Javier Goldschmidt | Full Stack Developer'
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {

    // Read the profile image file
    const imagePath = join(process.cwd(), 'components/images/me.png')
    const imageBuffer = readFileSync(imagePath)
    const imageSrc = `data:image/png;base64,${imageBuffer.toString('base64')}`

    return new ImageResponse(
        (
            <div
                style={{
                    background: '#020617',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 40,
                    }}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={imageSrc}
                        width="280"
                        height="280"
                        alt="Javier Goldschmidt"
                        style={{
                            borderRadius: 140,
                            border: '8px solid #22d3ee',
                            objectFit: 'cover',
                        }}
                    />
                </div>
                <div
                    style={{
                        fontSize: 80,
                        fontWeight: 900,
                        color: 'white',
                        marginBottom: 20,
                        letterSpacing: -2,
                        textAlign: 'center',
                    }}
                >
                    Javier Goldschmidt
                </div>
                <div
                    style={{
                        fontSize: 40,
                        color: '#94a3b8',
                        fontWeight: 500,
                        textAlign: 'center',
                    }}
                >
                    Full Stack Developer
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
