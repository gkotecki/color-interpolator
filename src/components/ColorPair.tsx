import chroma from 'chroma-js';
import ColorView from './ColorView';

export default function ColorPair({ color }: { color: chroma.Color }) {
  return (
    <section className="flex flex-col">
      <ColorView bg={chroma('white')} color={color}/>
      <div className="w-36 h-4" style={{ background: color.alpha(1).css() }}></div>
      <ColorView bg={chroma('black')} color={color}/>
    </section>
  );
}
