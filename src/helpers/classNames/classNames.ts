type Mods = Record<string, boolean | string>

const obj: Mods = {'hovered': 'true'};

export function classNames(className: string,
                           mods: Mods,
                           additional: string[]): string {
  return [className,
          ...additional,
          ...Object.entries(mods)
                   .filter(([className, value]) => Boolean(value))
                   .map(([className, value]) => className)].join(' ');
}