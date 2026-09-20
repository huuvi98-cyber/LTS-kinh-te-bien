export type WaveIntensity = 'subtle' | 'moderate' | 'gentle' | 'static';

export type WaveSpeed = 'slow' | 'normal' | 'fast';

export interface SeriesPart {
  id: number;
  roman: string;
  title: string;
  subtitle: string;
  summary: string;
  highlights: string[];
  pillar: string;
  iconName: string;
}

export interface WaveConfig {
  intensity: WaveIntensity;
  speed: WaveSpeed;
  amplitude: number; // in pixels
  wavelength: number; // in characters or distance
  frequency: number; // speed multiplier
  enabled: boolean;
  interactiveRipple: boolean;
}
