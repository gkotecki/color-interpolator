import chroma from 'chroma-js';
import ColorView from './ColorView';

export default function ColorPair({ color }: { color: chroma.Color }) {
  return (
    <div className="flex flex-col">
      <ColorView bg={chroma('white')} color={color} />
      <ColorView bg={chroma('black')} color={color} />
    </div>
  );
}
