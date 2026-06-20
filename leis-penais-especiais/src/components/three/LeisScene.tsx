import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const ACCENT = '#FF6B1A'
const COUNT = 20
const RADIUS = 4

type OctaPosition = {
  position: [number, number, number]
  /** phase offset to desync individual bobbing/rotation */
  phase: number
}

/**
 * Deterministic 3D spiral layout. Positions are computed once (no per-render
 * randomness) using a Fibonacci-style angular increment so the points spread
 * evenly on nested shells inside `RADIUS`.
 */
function buildPositions(): OctaPosition[] {
  const positions: OctaPosition[] = []
  const golden = Math.PI * (3 - Math.sqrt(5)) // ~2.399963 rad

  for (let i = 0; i < COUNT; i++) {
    // y goes from near +1 to near -1 across the count (unit sphere mapping)
    const y = 1 - (i / (COUNT - 1)) * 2
    const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y))
    const theta = golden * i

    // gentle inward modulation so it reads as an organized cloud, not a shell
    const shell = 0.55 + 0.45 * ((i % 4) / 3)

    const x = Math.cos(theta) * radiusAtY
    const z = Math.sin(theta) * radiusAtY

    positions.push({
      position: [x * RADIUS * shell, y * RADIUS * 0.85, z * RADIUS * shell],
      phase: theta,
    })
  }

  return positions
}

function Octahedron({ data }: { data: OctaPosition }) {
  const meshRef = useRef<THREE.Mesh>(null)

  // One shared geometry instance per mesh, reused for the body and the edges.
  const geometry = useMemo(() => new THREE.OctahedronGeometry(0.5, 0), [])
  const edges = useMemo(() => new THREE.EdgesGeometry(geometry), [geometry])

  useFrame((_, delta) => {
    const mesh = meshRef.current
    if (!mesh) return
    // subtle individual rotation + bobbing, desynced via phase
    mesh.rotation.x += delta * 0.15
    mesh.rotation.y += delta * 0.1
    mesh.position.y =
      data.position[1] + Math.sin(performance.now() * 0.0006 + data.phase) * 0.12
  })

  return (
    <mesh ref={meshRef} geometry={geometry} position={data.position}>
      <meshStandardMaterial
        color="#141417"
        transparent
        opacity={0.55}
        roughness={0.4}
        metalness={0.1}
      />
      <lineSegments geometry={edges}>
        <lineBasicMaterial color={ACCENT} transparent opacity={0.5} />
      </lineSegments>
    </mesh>
  )
}

function Constellation() {
  // Outer group: handles the pointer parallax tilt (lerped).
  // Inner group: handles the continuous auto-rotation. Splitting them keeps the
  // parallax from fighting the spin (otherwise the lerp would chase a value
  // that the spin keeps changing).
  const tiltRef = useRef<THREE.Group>(null)
  const spinRef = useRef<THREE.Group>(null)
  const positions = useMemo(() => buildPositions(), [])

  useFrame((state, delta) => {
    const spin = spinRef.current
    if (spin) {
      // slow, sober auto-rotation
      spin.rotation.y += delta * 0.08
      spin.rotation.x += delta * 0.02
    }

    const tilt = tiltRef.current
    if (tilt) {
      // Subtle mouse parallax. `state.pointer` is the R3F normalized pointer
      // (-1..1), updated from global pointer events — so it keeps working even
      // though the canvas/container has pointer-events: none, and clicks still
      // pass through to the hero content below.
      const targetX = state.pointer.y * 0.1
      const targetY = state.pointer.x * 0.1
      tilt.rotation.x += (targetX - tilt.rotation.x) * 0.05
      tilt.rotation.y += (targetY - tilt.rotation.y) * 0.05
    }
  })

  return (
    <group ref={tiltRef}>
      <group ref={spinRef}>
        {positions.map((data, i) => (
          <Octahedron key={i} data={data} />
        ))}
      </group>
    </group>
  )
}

export default function LeisScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0, 9], fov: 50 }}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={30} color={ACCENT} />
      <Constellation />
    </Canvas>
  )
}
