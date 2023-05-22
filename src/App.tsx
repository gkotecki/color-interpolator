import chroma from 'chroma-js';
import { useState } from 'react';
import ColorPair from './components/ColorPair';

export default function App() {
  const [chosenColor, setChosenColor] = useState(chroma('#faa'));

  return (
    <div className="flex h-screen w-screen bg-neutral-400 p-12">
      <ColorPair color={chosenColor} />
      <ColorPair color={chosenColor} />
      <ColorPair color={chosenColor} />
    </div>
  );
}
