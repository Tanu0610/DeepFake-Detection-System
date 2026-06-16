import { PresetMedia } from '../types';

export const PRESET_MEDIA_LIST: PresetMedia[] = [
  {
    id: 'real-portrait',
    name: 'Authentic Portrait Check (Cam_01_RAW)',
    type: 'image',
    url: '',
    isDeepfake: false,
    expectedConfidence: 98,
    description: 'High-resolution capture on DSLR camera. Features uniform biological symmetry, naturally matching specular eye highlights, and a contiguous spatial noise floor across all segments.',
    creatorDetails: 'Sony Alpha ILCE-7, 55mm, ISO 100',
    canvasDrawType: 'real_portrait_1',
  },
  {
    id: 'fake-portrait',
    name: 'GAN Facial Swap Overlay (FaceSwap_v3a_Synth)',
    type: 'image',
    url: '',
    isDeepfake: true,
    expectedConfidence: 97,
    description: 'Synthetically manipulated composite overlay. Mismatched pupil shapes (asymmetrical specular reflections), visible blending artifact vectors across the neck plane, and anomalous high-pass noise print grids.',
    creatorDetails: 'Target replacement via InsightFace & Stable diffusion post-processing',
    canvasDrawType: 'fake_portrait_1',
  },
  {
    id: 'real-video-frame',
    name: 'Verified Video Keyframe (Video_News_045)',
    type: 'image',
    url: '',
    isDeepfake: false,
    expectedConfidence: 94,
    description: 'Static frame sourced from live broadcast interview. Uniform illumination angles on face, complete eye/ear spacing consistency, and natural facial movement markers within safe gradient thresholds.',
    creatorDetails: 'HD Broadcast Feed, H.264 compression',
    canvasDrawType: 'real_speaker_video',
  },
  {
    id: 'fake-video-frame',
    name: 'Neural Deepfake clone (DeepSpeaker_Clone_7)',
    type: 'image',
    url: '',
    isDeepfake: true,
    expectedConfidence: 89,
    description: 'Synthesized model trained on public interview recordings. Demonstrates significant biological mesh offsets on eyelids, and localized double-compression high-frequency noise patches around the chin.',
    creatorDetails: 'Wav2Lip model + MesoNet CNN analysis triggered',
    canvasDrawType: 'fake_speaker_video',
  }
];
