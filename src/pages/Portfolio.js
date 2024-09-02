import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';

const Portfolio = () => {
    const texture = useTexture('/assets/img/portfolio.jpg');

    return (
        <div className="portfolio-page">
            <Canvas>
                <OrbitControls />
                <mesh>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial map={texture} />
                </mesh>
            </Canvas>
        </div>
    );
};

export default Portfolio;
