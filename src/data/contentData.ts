import { ResearchPaper, CoreConcept, EverydayExample, ActionGuideStep, PracticalScenario } from '../types';

export const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    id: 'seligman-maier-2016',
    title: 'Learned helplessness at fifty: Insights from neuroscience',
    authors: 'Steven F. Maier & Martin E. Seligman',
    year: 2016,
    journal: 'Clinical Psychology Science (NIH/PMC)',
    keySummary: '초기 이론과 달리 신경과학적 연구 결과, 무기력은 학습되는 것이 아니라 통제 불가능한 스트레스에 대한 뇌(배측 솔개핵, DRN)의 초기 디폴트 반응입니다. 오히려 뇌는 전두엽(ventromedial prefrontal cortex, vmPFC)의 활성화를 통해 "상황을 통제할 수 있다"는 사실을 학습함으로써 무기력을 억제하고 극복합니다.',
    supportedClaim: '통제감을 회복하는 구체적이고 작은 인지적 경험이 뇌의 무기력 반응을 차단하는 핵심 열쇠임을 입증합니다.',
    limitations: '실험실 동물 모델 및 기능적 신경영상 연구에 기반하므로, 복합적인 사회적 맥락(예: 빈곤, 구조적 불평등)에서의 장기적 무기력에는 환경적 개선이 병행되어야 합니다.',
    url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4920136/'
  },
  {
    id: 'seligman-1990',
    title: 'Learned Optimism: How to Change Your Mind and Your Life',
    authors: 'Martin E. P. Seligman',
    year: 1990,
    journal: 'Knopf / American Psychological Association (APA)',
    keySummary: '실패에 직면했을 때 개인이 내리는 설명 양식(Explanatory Style)의 차이를 규명했습니다. 실패를 영구적(Permanent)이고 전면적(Pervasive)이며 개인적(Personal)인 결함으로 해석하면 만성적 무기력으로 이어지지만, 일시적이고 구체적이며 방법의 문제로 해석하면 회복탄력성이 급격히 향상됩니다.',
    supportedClaim: '비관적 자동 사고는 인지적 재구조화(사실 확인, 대안 가설 탐색)를 통해 현실적인 낙관적 사고로 전환될 수 있습니다.',
    limitations: '현실적인 위험이나 명백한 한계를 도외시하는 맹목적 긍정주의(Pollyannaism)와는 구별되어야 하며, 인지적 노력과 훈련이 요구됩니다.',
    url: 'https://psycnet.apa.org/record/1991-97063-000'
  },
  {
    id: 'duckworth-2007',
    title: 'Grit: Perseverance and passion for long-term goals',
    authors: 'Angela L. Duckworth, Christopher Peterson, Michael D. Matthews, & Dennis R. Kelly',
    year: 2007,
    journal: 'Journal of Personality and Social Psychology (APA)',
    keySummary: '장기적 목표를 향한 열정과 끈기(Grit)가 지능지수(IQ)나 단순 재능보다 지속적인 성취와 학업 유지율을 더 강력하게 예측함을 밝혔습니다. 중요한 것은 무조건적인 인내가 아니라, 장기적 목적의식과 계획적인 실천입니다.',
    supportedClaim: '실패를 겪었을 때 쉽게 포기하지 않고 관심사를 유지하며 노력의 밀도를 지속하는 태도의 중요성을 제시합니다.',
    limitations: '무조건적인 악바리 근성이나 비생산적인 버티기는 번아웃을 유발할 수 있습니다. 후속 연구들(Crede et al., 2017)은 전략적 목표 재조정, 충분한 회복, 주변의 적응적 지원 체계가 함께 결합되어야 건강한 그릿이 성립함을 지적합니다.',
    url: 'https://psycnet.apa.org/record/2007-07849-006'
  },
  {
    id: 'yeager-dweck-2012',
    title: 'Mindsets that promote resilience: When students believe that personal characteristics can be developed',
    authors: 'David S. Yeager & Carol S. Dweck',
    year: 2012,
    journal: 'Educational Psychologist',
    keySummary: '지능과 능력이 고정된 것이 아니라 노력, 새로운 학습 전략 모색, 타인의 피드백을 통해 발달할 수 있다고 믿는 성장 마인드셋(Growth Mindset)이 시험 실패 후 학생들의 스트레스 호르몬 수치를 낮추고 학업 재도전을 촉진함을 입증했습니다.',
    supportedClaim: '실패를 "내 한계에 대한 판결"이 아니라 "전략을 수정하라는 데이터"로 재정의하는 인지적 접근이 실제 재도전 행동을 이끕니다.',
    limitations: '단순히 "노력하면 다 된다"는 구호에 그칠 경우 오히려 자책을 가중시킬 수 있으므로, 실행 가능한 구체적 전략 피드백과 제도적 지지가 함께 제공되어야 합니다.',
    url: 'https://www.tandfonline.com/doi/abs/10.1080/00461520.2012.722805'
  }
];

export const CORE_CONCEPTS: CoreConcept[] = [
  {
    id: 'learned-helplessness',
    title: '학습된 무기력',
    subtitle: 'Learned Helplessness',
    definition: '자신의 노력으로 피할 수 없었던 부정적 경험이 반복되면서, 실제로는 상황을 통제하고 해결할 능력이 있음에도 불구하고 "어차피 해도 안 될 것"이라는 신념으로 인해 시도 자체를 단념하는 심리적 상태.',
    keyTakeaway: '무기력은 선천적인 의지박약이나 성격적 결함이 아닙니다. 과거의 통제 불능 경험으로부터 뇌가 학습한 일시적인 방어 반응입니다.',
    bulletPoints: [
      '원인: 반복된 실패와 "내 행동이 결과에 아무 영향을 주지 못했다"는 인지',
      '행동적 특징: 새로운 기회가 와도 회피하거나 시도 전부터 포기',
      '신경과학적 발견: 뇌의 기본 스트레스 반응이므로, 작은 통제 경험을 통해 전두엽을 활성화하여 해소 가능'
    ]
  },
  {
    id: 'explanatory-style',
    title: '설명 양식 (비관 vs 현실적 낙관)',
    subtitle: 'Explanatory Style (3P Model)',
    definition: '실패나 어려움이 닥쳤을 때, 그 원인을 스스로에게 어떻게 설명하고 납득하는지에 대한 습관화된 사고방식.',
    keyTakeaway: '맹목적인 긍정("무조건 다 잘 될 거야")이 아닌, "사실과 원인을 구체적이고 일시적인 영역으로 분해하는 현실적 낙관성"이 핵심입니다.',
    bulletPoints: [
      '개인화 (Personal): 비관은 "전부 내 지능 탓", 낙관은 "이번엔 공부 방법과 시간 분배가 부족했다"',
      '영속성 (Permanent): 비관은 "앞으로도 절대 안 변해", 낙관은 "이번 시험에 한정된 일시적 결과일 뿐이다"',
      '보편성 (Pervasive): 비관은 "난 인생 모든 게 엉망이야", 낙관은 "수학의 미적분 한 단원이 취약했을 뿐이다"'
    ]
  },
  {
    id: 'healthy-grit',
    title: '건강한 그릿 (Grit)',
    subtitle: 'Healthy Grit & Resilience',
    definition: '자신에게 의미 있는 장기 목표를 향해 열정과 끈기를 유지하는 힘. 단, 무작정 고통을 참고 버티는 소진이 아닌 "전략적 적응"을 포함합니다.',
    keyTakeaway: '건강한 그릿은 실패를 숨기거나 혼자 앓는 독기가 아니라, 유연한 휴식, 질문하기, 그리고 작은 방법 수정을 멈추지 않는 태도입니다.',
    bulletPoints: [
      '버티기와의 차이: 무의미한 맹목적 버티기는 번아웃을 부르지만, 그릿은 목표를 위해 전략을 바꿈',
      '도움 요청의 중요성: 스승, 동료, 멘토에게 솔직하게 오답을 보여주고 조언을 구하는 용기',
      '자기 자비 (Self-Compassion): 지친 나를 돌보고 회복할 시간을 인정하는 균형 감각'
    ]
  }
];

export const EVERYDAY_EXAMPLES: EverydayExample[] = [
  {
    id: 'exam-failure',
    title: '정성껏 준비한 시험에서 낮은 점수를 받았을 때',
    trigger: '몇 주 동안 수면 시간을 줄이며 밤샘 공부를 했으나 평소보다 낮은 성적표를 마주함',
    helplessThought: '“난 원래 머리가 나쁜가 봐. 다음 시험에도 어차피 이 점수일 텐데 더 해봤자 내 시간만 아깝지.”',
    psychologicalImpact: '노력과 결과의 연결고리를 스스로 끊어버려, 다음 시험 준비 때 책을 펴지도 않고 침대에 눕게 됨.',
    reframedPerspective: '“열심히 한 만큼 실망이 큰 건 당연해. 하지만 3주간 공부한 기본기가 사라진 건 아니야. 이번 시험에서 어느 단원에서 오답이 났는지 분석하고, 암기 방식이 아닌 문제 적용 훈련으로 전략을 바꿔보자.”'
  },
  {
    id: 'presentation-mistake',
    title: '팀 프로젝트나 대중 발표 중 말문이 막혔을 때',
    trigger: '중요한 발표 중 갑자기 긴장하여 슬라이드 내용을 잊고 당황스러운 침묵이 발생함',
    helplessThought: '“사람들이 다 나를 무능하게 보겠지? 난 사람들 앞에 서면 항상 망쳐. 다시는 발표 기회를 맡지 말아야지.”',
    psychologicalImpact: '한 번의 실수를 자신의 고정된 정체성으로 규정하고, 이후 팀 회의나 과제에서 발언을 원천 차단함.',
    reframedPerspective: '“발표 중간에 긴장해서 당황했던 2분간의 해프닝일 뿐이야. 전체 발표 내용 자체는 유익했어. 다음번에는 첫 3분 도입부 대본을 메모 카드에 적어두고 동료 앞에서 사전 리허설을 2번 해보는 장치를 두자.”'
  },
  {
    id: 'new-challenge-hesitation',
    title: '새로운 기술이나 도전을 시작하기 두려울 때',
    trigger: '프로그래밍, 외국어, 운동 등 새로운 도전을 시작하려고 하지만 책 첫 장만 넘기다 덮어둠',
    helplessThought: '“예전에도 운동이랑 영어 끊어놓고 작심삼일이었잖아. 시작해 봤자 이번에도 중간에 관둘 텐데 돈과 에너지만 버리지.”',
    psychologicalImpact: '과거의 중단 경험을 미래의 실패 예언으로 일반화하여 어떤 새로운 시도도 시작하지 못함.',
    reframedPerspective: '“과거에 멈췄던 건 내 의지가 약해서가 아니라, 첫날부터 주 5일 2시간씩 무리한 계획을 세웠기 때문이야. 이번에는 완벽주의를 버리고, 매일 딱 10분만 단어 5개를 읽거나 가벼운 스트레칭 1세트부터 시작해보자.”'
  }
];

export const ACTION_GUIDE_STEPS: ActionGuideStep[] = [
  {
    stepNumber: 1,
    title: '지금 느끼는 감정을 온전히 인정하기',
    tagline: 'Name It to Tame It (이름 붙여 길들이기)',
    corePrinciple: '실패 후 찾아오는 분노, 부끄러움, 무력감을 "긍정적으로 생각해야 해"라며 억누르면 무의식적인 회피와 소진으로 이어집니다. 감정은 판단의 대상이 아니라 인정해야 할 심리적 신호입니다.',
    concreteMethod: '속상한 내 마음을 제3자의 시선에서 구체적인 감정 단어로 명명해 보세요. "아, 내가 지금 열심히 준비했던 만큼 크게 실망했고, 자존심이 상해서 속상하구나."',
    realWorldExample: '억지 미소를 지으며 "난 괜찮아"라고 삼키는 대신, 빈 공책에 "진짜 속상하고 억울하고 맥이 빠진다"라고 감정을 쏟아내기.'
  },
  {
    stepNumber: 2,
    title: '일어난 사건을 구체적 사실로 분해하기',
    tagline: '객관적 사실(Fact)과 비관적 해석(Interpretation) 분리',
    corePrinciple: '무기력에 빠지면 "난 끝났어"라는 극단적 해석이 사실처럼 굳어집니다. 일어난 사건을 쪼개어 보면 전체가 무너진 것이 아니라 일부 요소가 어긋났을 뿐임을 알 수 있습니다.',
    concreteMethod: '시험지를 펼쳐서 오답 8문제를 유형별로 분리합니다. ① 개념 자체를 몰랐던 문제: 2문항, ② 공식은 알았으나 계산 실수: 3문항, ③ 시간 부족으로 손대지 못한 문제: 3문항.',
    realWorldExample: '“내 머리가 나빠서 60점을 받았다”는 거짓 해석을 멈추고, “시간 배분과 계산 연습 부족으로 20점을 잃었다”는 객관적 사실을 확인하기.'
  },
  {
    stepNumber: 3,
    title: '통제 가능한 것과 불가능한 것 구분하기',
    tagline: '통제의 원 (Circle of Control) 정렬',
    corePrinciple: '이미 지나간 과거, 출제자의 시험 난이도, 타인의 수군거림은 내가 통제할 수 없습니다. 통제할 수 없는 영역에 집착할 때 무기력이 심화됩니다.',
    concreteMethod: '종이 중앙에 원을 그리고, 바깥에는 [내가 바꿀 수 없는 것], 안쪽에는 [내가 지금 당장 조절할 수 있는 것]을 적어 에너지를 안쪽으로 모읍니다.',
    realWorldExample: '시험의 난이도나 남들의 등수는 바깥에 두고, "오늘 밤 11시에 잠들기", "내일 방과 후 선생님께 14번 문제 질문하기"를 안쪽에 두기.'
  },
  {
    stepNumber: 4,
    title: '실행 가능한 가장 작은 행동 하나 정하기',
    tagline: '마이크로 액션 (Micro-Step Strategy)',
    corePrinciple: '신경과학 연구(Seligman & Maier, 2016)에 따르면, 뇌가 무기력에서 빠져나오는 유일한 길은 "내 행동이 환경에 긍정적 변화를 만들었다"는 미세한 성공 감각(Self-Efficacy)을 맛보는 것입니다.',
    concreteMethod: '거창한 재도전 계획 대신, 5분 이내에 실패할 수 없을 만큼 작은 행동을 지금 당장 실행합니다.',
    realWorldExample: '책상 정리하기, 오답 노트에 헷갈렸던 공식 한 줄 적기, 친구에게 "이 문제 풀이법 좀 알려줄 수 있어?"라고 문자 한 줄 보내기.'
  },
  {
    stepNumber: 5,
    title: '결과를 돌아보고 전략과 목표를 유연하게 조정하기',
    tagline: '반성적 조정과 적응적 끈기',
    corePrinciple: '진정한 그릿은 벽에 머리를 계속 부딪치는 고집이 아닙니다. 이전 방식이 통하지 않았다면 쉬어가거나, 방법을 바꾸거나, 목표의 시점을 재설정하는 것이 건강한 성숙입니다.',
    concreteMethod: '일주일 뒤 "지난주에 바꾼 방법이 나에게 편안했는가?", "어떤 지점에서 피로도가 높았는가?"를 가볍게 점검하고 속도를 조절합니다.',
    realWorldExample: '새벽 공부가 집중을 흐렸다면 과감히 취침 시간을 1시간 늘리고, 자투리 낮 시간을 활용하는 방식으로 시간표 조정하기.'
  }
];

export const PRACTICAL_SCENARIOS: PracticalScenario[] = [
  {
    id: 'case-test',
    title: '상황 1: 기대 이하의 시험 점수를 받았을 때',
    situation: '열심히 준비했던 중간고사 성적이 평균보다 낮게 나와 충격을 받은 상황',
    initialFeeling: '허탈함, 자괴감, 배신감, "공부해 봤자 머리 좋은 애들을 못 따라간다"는 패배감',
    unhelpfulReaction: '성적표를 구겨 넣고 며칠 동안 공부를 놓아버리거나, 반대로 잠을 3시간으로 줄이며 무리하게 스스로를 채찍질함.',
    stepByStepAction: [
      '1단계: 실망감을 부정하지 않고 "충분히 속상할 만하다"며 심호흡 3번 하기',
      '2단계: 시험지를 꺼내 [개념 모름 / 실수 / 시간 부족] 세 바구니로 분류하기',
      '3단계: 실수로 틀린 문제의 풀이 과정을 1문제만 천천히 다시 써보기',
      '4단계: 성적이 잘 나온 과목의 친구나 선생님에게 "이 부분 공부할 때 어떻게 접근했어?"라고 조언 구하기'
    ],
    encouragement: '시험 점수는 당신의 지적 가치를 결정짓는 판결문이 아니라, 다음 목적지로 가기 위한 길 안내 내비게이션의 궤적 데이터입니다.'
  },
  {
    id: 'case-speech',
    title: '상황 2: 사람들 앞에서 발표 중 실수했을 때',
    situation: '학교나 직장 발표에서 슬라이드가 꼬이고 긴장해 횡설수설하고 내려온 상황',
    initialFeeling: '얼굴이 화끈거림, 수치심, "모두가 나를 한심하게 생각할 것"이라는 조명 효과(Spotlight Effect)',
    unhelpfulReaction: '발표 이후 팀원들의 눈을 피하고, 다음 프로젝트에서 의견 내는 것을 극구 사양함.',
    stepByStepAction: [
      '1단계: 청중들은 생각보다 내 실수에 오래 집중하지 않는다는 심리학적 사실(조명 효과 편향) 떠올리기',
      '2단계: 당일 팀원에게 "아까 긴장해서 버벅였는데 잘 들어줘서 고마워요!"라고 가볍게 먼저 말 건네기',
      '3단계: 어디서 당황했는지 파악하고(예: 슬라이드 4번의 수치 질문), 다음 발표 땐 핵심 키워드 큐카드를 준비하기',
      '4단계: 3일 후 편안한 친구 1명 앞에서 그 부분을 다시 2분 동안 스피치해보고 털어내기'
    ],
    encouragement: '실수는 무능의 증거가 아니라 누구나 거치는 성장의 무대 위 해프닝입니다. 위축되지 않고 가볍게 넘기는 유연함이 가장 큰 매력입니다.'
  },
  {
    id: 'case-start',
    title: '상황 3: 새로운 프로젝트나 학습을 시작하기 두려울 때',
    situation: '도전하고 싶은 분야(코딩, 외국어, 자격증)가 있지만 과거 포기했던 기억 때문에 망설여지는 상황',
    initialFeeling: '“어차피 또 흐지부지될 텐데”, “지금 시작하기엔 너무 늦었어”라는 지연 행동과 회피',
    unhelpfulReaction: '완벽한 계획표를 며칠 동안 짜다가 질려서 정작 실행은 하루도 못 하고 포기함.',
    stepByStepAction: [
      '1단계: "시작하는 두려움은 뇌가 변화를 경계하는 자연스러운 생존 본능"임을 자각하기',
      '2단계: 목표의 크기를 1/10로 축소하기 (예: 책 한 권 독파 → 하루 2쪽 읽기)',
      '3단계: 매일 정해진 기존 루틴 뒤에 붙이기 (예: 아침 커피 마신 직후 영단어 3개 확인)',
      '4단계: 3일 연속 성공 시 스스로에게 좋아하는 음료나 간식으로 작은 칭찬 보상하기'
    ],
    encouragement: '위대한 시작은 없습니다. 작고 초라한 시작이 반복되어 비로소 위대한 지속이 완성됩니다.'
  }
];
