export type PageId = 'understand' | 'story' | 'practice';

export interface ResearchPaper {
  id: string;
  title: string;
  authors: string;
  year: number;
  journal: string;
  keySummary: string;
  supportedClaim: string;
  limitations: string;
  url: string;
}

export interface CoreConcept {
  id: string;
  title: string;
  subtitle: string;
  definition: string;
  keyTakeaway: string;
  bulletPoints: string[];
}

export interface EverydayExample {
  id: string;
  title: string;
  trigger: string;
  helplessThought: string;
  psychologicalImpact: string;
  reframedPerspective: string;
}

export interface StoryChoiceOption {
  id: 'A' | 'B';
  type: 'pessimistic' | 'optimistic';
  buttonLabel: string;
  thoughtBubble: string;
  explanatoryStyleNote: string;
}

export interface StorySceneData {
  step: number;
  sceneTitle: string;
  location: string;
  timeContext: string;
  narration: string;
  characterSpeech: string;
  visualScene: 'exam_fail' | 'despair_room' | 'desk_study' | 'classroom_revisit';
  questionPrompt: string;
  choices: StoryChoiceOption[];
}

export interface ActionGuideStep {
  stepNumber: number;
  title: string;
  tagline: string;
  corePrinciple: string;
  concreteMethod: string;
  realWorldExample: string;
}

export interface PracticalScenario {
  id: string;
  title: string;
  situation: string;
  initialFeeling: string;
  unhelpfulReaction: string;
  stepByStepAction: string[];
  encouragement: string;
}
