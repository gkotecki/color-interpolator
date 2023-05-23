import chroma from 'chroma-js';

export default function ColorView({ bg, color }: { bg: chroma.Color; color: chroma.Color }) {
  return (
    <div className="flex h-44 w-36 items-center justify-center" style={{ background: bg.css('hsl') }}>
      <div className="flex h-32 w-32 flex-col p-1" style={{ background: color.css('hsl') }}>
        <span className="text-xs">{color.name()}</span>
        <span className="text-xs">{color.css()}</span>
        <span className="text-xs">{color.css('hsl')}</span>
      </div>
    </div>
  );
}
