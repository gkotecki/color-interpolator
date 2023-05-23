import chroma from 'chroma-js';
import { useState } from 'react';
import ColorPair from './components/ColorPair';

export default function App() {
  const [chosenColor, setChosenColor] = useState(chroma('#d6f5ea'));
  const [alpha, setAlpha] = useState(0.2);

  const scale = chroma.scale(['white', chosenColor, 'black']).correctLightness(true).colors(7);

  return (
    <div className="flex h-screen w-screen flex-col gap-10 bg-neutral-400 p-10">
      <main className="flex">
        <ColorPair color={chosenColor} />
        <ColorPair color={chroma.blend(chosenColor, 'black', 'overlay').alpha(alpha)} />
        <ColorPair color={chroma.blend(chosenColor, 'white', 'multiply').alpha(alpha)} />
        <ColorPair color={chroma(scale[1]).alpha(alpha)} />
        <ColorPair color={chroma(scale[2]).alpha(alpha)} />
      </main>
    </div>
  );
}
