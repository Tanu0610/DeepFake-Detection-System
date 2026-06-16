export type MediaType = 'image' | 'video';

export enum CNNFilterType {
  INPUT = 'INPUT',
  SOBEL_EDGE = 'SOBEL_EDGE',
  HIGH_PASS_NOISE = 'HIGH_PASS_NOISE',
  CHROMINANCE_LIGHT = 'CHROMINANCE_LIGHT',
  BIOLOGICAL_ALIGNMENT = 'BIOLOGICAL_ALIGNMENT',
}

export interface MetricCategory {
  id: string;
  name: string;
  score: number; // 0 to 100 (percentage of confidence or tampering depending on context)
  status: 'clean' | 'compromised' | 'warning';
  description: string;
}

export interface AnomalyMarker {
  id: string;
  label: string;
  description: string;
  x: number; // percentage from left (0 to 100)
  y: number; // percentage from top (0 to 100)
  severity: 'low' | 'medium' | 'high';
}

export interface PresetMedia {
  id: string;
  name: string;
  type: MediaType;
  url: string; // fallback if needed or canvas preset name
  isDeepfake: boolean;
  expectedConfidence: number;
  description: string;
  creatorDetails: string;
  // Specific features that will render on custom canvas draws
  canvasDrawType: 'real_portrait_1' | 'fake_portrait_1' | 'real_speaker_video' | 'fake_speaker_video';
}

export interface ForensicReport {
  isDeepfake: boolean;
  confidenceScore: number;
  tamperingDetected: boolean;
  detectedModelPreset?: string;
  forensicSummary: string;
  categories: {
    spatialGradients: MetricCategory;
    noiseInconsistency: MetricCategory;
    lightingMismatches: MetricCategory;
    biologicalConsistency: MetricCategory;
  };
  anomalies: AnomalyMarker[];
  geminiAnalyzed: boolean;
  timestamp: string;
}
