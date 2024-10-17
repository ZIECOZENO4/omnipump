
// "use client"
// import { useEffect, useRef, useMemo } from 'react';
// import { motion, useAnimation } from 'framer-motion';

// const FirstAnimation: React.FC = () => {
//   const controls = useAnimation();
//   const gapControls = useAnimation();
//   const mouseControls = useAnimation();
//   const dropControls = useAnimation();
//   const audioRef = useRef<HTMLAudioElement | null>(null);

//   // Generate or retrieve cached grid
//   const gridCells = useMemo(() => {
//     if (typeof window !== 'undefined') {
//       const cachedGrid = localStorage.getItem('animationGrid');
//       if (cachedGrid) {
//         return JSON.parse(cachedGrid) as number[];
//       }
//       const newGrid = Array.from({ length: 57600 }, (_, i) => i);
//       localStorage.setItem('animationGrid', JSON.stringify(newGrid));
//       return newGrid;
//     }
//     return [] as number[];
//   }, []);

//   useEffect(() => {
//     const animateBackground = async () => {
//       while (true) {
//         // Fast zoom out
//         await Promise.all([
//           controls.start({
//             scale: [1, 100],
//             rotate: [0, 2],
//             transition: { 
//               duration: 3, // Faster zoom out
//               ease: "easeInOut" 
//             }
//           }),
//           gapControls.start({
//             gap: ["0.1px", "50px"],
//             transition: { 
//               duration: 3,
//               ease: "easeInOut" 
//             }
//           })
//         ]);

//         // Pause at zoomed out state
//         await new Promise(resolve => setTimeout(resolve, 2000));

//         // Fast zoom in
//         await Promise.all([
//           controls.start({
//             scale: [100, 1],
//             rotate: [-2, 0],
//             transition: { 
//               duration: 3, // Faster zoom in
//               ease: "easeInOut" 
//             }
//           }),
//           gapControls.start({
//             gap: ["50px", "0.1px"],
//             transition: { 
//               duration: 3,
//               ease: "easeInOut" 
//             }
//           })
//         ]);

//         // Pause at zoomed in state
//         await new Promise(resolve => setTimeout(resolve, 1000));
//       }
//     };

//     const animateMouse = async () => {
//       while (true) {
//         await mouseControls.start({
//           x: Math.random() * 100 - 50,
//           y: Math.random() * 100 - 50,
//           scale: [1, 1.3, 1],
//           rotate: [0, 360],
//           transition: { duration: 5, ease: "easeInOut" }
//         });
//         await new Promise(resolve => setTimeout(resolve, 1000));
//       }
//     };

//     const animateDrop = async () => {
//       while (true) {
//         await dropControls.start({
//           scale: [0, 1],
//           opacity: [1, 0],
//           transition: { duration: 2, ease: "easeOut" }
//         });
//         await new Promise(resolve => setTimeout(resolve, 3000));
//       }
//     };

//     animateBackground();
//     animateMouse();
//     animateDrop();

//     // Start audio playback
//     const playAudio = () => {
//       if (audioRef.current) {
//         audioRef.current.play().catch(error => {
//           console.error("Audio playback failed:", error);
//         });
//       }
//     };

//     // Attempt to play audio on component mount
//     playAudio();

//     // Add event listener for user interaction
//     document.addEventListener('click', playAudio);

//     return () => {
//       document.removeEventListener('click', playAudio);
//     };
//   }, [controls, gapControls, mouseControls, dropControls]);

//   return (
//     <div className="fixed inset-0 overflow-hidden bg-black z-0">
//       <motion.div
//         className="w-full h-full wave"
//         animate={controls}
//         initial={{ scale: 1, rotate: 0 }}
//       >
//         <motion.div 
//           className="w-full h-full grid grid-cols-[repeat(240,1fr)] grid-rows-[repeat(240,1fr)]"
//           animate={gapControls}
//           initial={{ gap: "0.1px" }}
//         >
//           {gridCells.map((i: number) => (
//             <div key={i} className="border border-[#373737]"></div>
//           ))}
//         </motion.div>
//       </motion.div>
//       <motion.div
//         className="absolute top-1/2 left-1/2 w-4 h-4  rounded-full"
//         animate={dropControls}
//         initial={{ scale: 0, opacity: 0 }}
//       />
//       <audio ref={audioRef} src="/audio/play.mp3" loop />
//     </div>
//   );
// };

// export default FirstAnimation;

"use client"
import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Vector3, Group, Mesh, Material, Camera } from 'three'
import { motion } from 'framer-motion-3d'

const GridCell: React.FC = React.memo(() => (
  <mesh>
    <planeGeometry args={[1, 1]} />
    <meshBasicMaterial color="#373737" wireframe />
  </mesh>
))

interface GridProps {
  gridSize?: number;
}

const Grid: React.FC<GridProps> = React.memo(({ gridSize = 240 }) => {
  const grid = useMemo(() => {
    const arr: [number, number, number][] = []
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        arr.push([i - gridSize / 2, j - gridSize / 2, 0])
      }
    }
    return arr
  }, [gridSize])

  return (
    <group>
      {grid.map((pos, index) => (
        <GridCell key={index} position={pos as Vector3} />
      ))}
    </group>
  )
})

const AnimatedScene: React.FC = () => {
  const groupRef = useRef<Group>(null)
  const { camera } = useThree()

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const t = clock.getElapsedTime()
    const scale = 1 + Math.sin(t * 0.5) * 0.5
    groupRef.current.scale.set(scale, scale, scale)
    groupRef.current.rotation.z = Math.sin(t * 0.2) * 0.05
    ;(camera as Camera).position.z = 150 + Math.sin(t * 0.5) * 50
  })

  return (
    <group ref={groupRef}>
      <Grid />
    </group>
  )
}

const MouseAnimation: React.FC = () => {
  const meshRef = useRef<Mesh>(null)

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.getElapsedTime()
    meshRef.current.position.x = Math.sin(t) * 50
    meshRef.current.position.y = Math.cos(t) * 50
    meshRef.current.rotation.z = t
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshBasicMaterial color="white" />
    </mesh>
  )
}

const DropAnimation: React.FC = () => {
  const meshRef = useRef<Mesh>(null)

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.getElapsedTime()
    const scale = (Math.sin(t) + 1) / 2
    meshRef.current.scale.set(scale, scale, scale)
    ;(meshRef.current.material as Material).opacity = 1 - scale
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 10]}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshBasicMaterial color="white" transparent />
    </mesh>
  )
}

const FirstAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden bg-black z-0">
      <Canvas camera={{ position: [0, 0, 200], fov: 75 }}>
        <AnimatedScene />
        <MouseAnimation />
        <DropAnimation />
      </Canvas>
    </div>
  )
}

export default React.memo(FirstAnimation)