import chroma from 'chroma-js';
import { useMemo } from 'react';

export default function ColorView({ bg, color }: { bg: chroma.Color; color: chroma.Color }) {
  const bgName = useMemo(() => chroma(bg).name(), [bg]);
  const colorName = useMemo(() => chroma(color).name(), [color]);

  return (
    <div className="flex h-48 w-48 items-center justify-center" style={{ background: bgName }}>
      <div className="flex h-32 w-32 p-1" style={{ background: colorName }}>
        {colorName}
      </div>
    </div>
  );
}
