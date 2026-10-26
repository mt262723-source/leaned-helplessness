export interface StoryBranchNode {
  id: string;
  stage: number;
  routeType: 'initial' | 'pessimistic' | 'optimistic';
  sceneTitle: string;
  location: string;
  timeContext: string;
  narration: string;
  characterSpeech: string;
  characterEmotion: 'shock' | 'despair' | 'resolute' | 'tired' | 'curious' | 'confident';
  panelDescription: string;
  promptQuestion: string;
  options: {
    text: string;
    targetNodeId: string;
    route: 'pessimistic' | 'optimistic';
    badgeLabel: string;
    explanatoryNote: string;
  }[];
}

export const STORY_NODES: Record<string, StoryBranchNode> = {
  // SCENE 1: INITIAL MOMENT
  'scene-1-intro': {
    id: 'scene-1-intro',
    stage: 1,
    routeType: 'initial',
    sceneTitle: '장면 1: 성적표를 마주한 오후',
    location: '교실 창가 자리',
    timeContext: '중간고사 성적표 배부 직후',
    narration: '지난 3주간 밤잠을 줄여가며 문제집을 세 번이나 반복해 풀었던 민우. 하지만 건네받은 성적표 위에는 붉은 숫자로 "58점"이 적혀 있습니다.',
    characterSpeech: '“...3주 동안 주말도 없이 매달렸는데, 겨우 58점이라고? 내가 쏟아부은 시간들은 다 뭐였던 걸까...”',
    characterEmotion: 'shock',
    panelDescription: '흐린 창밖 햇살 아래, 붉은색 58점이 적힌 시험지를 손에 쥐고 얼어붙은 민우. 주변 친구들의 웅성거림이 멀게만 느껴집니다.',
    promptQuestion: '이 순간, 민우의 머릿속에 가장 먼저 스치는 생각은 무엇일까요?',
    options: [
      {
        text: '“난 역시 원래 머리가 나쁜가 봐. 다음에도 어차피 달라지지 않을 거야.”',
        targetNodeId: 'scene-2-pessimistic',
        route: 'pessimistic',
        badgeLabel: '비관적 해석 선택',
        explanatoryNote: '실패를 나의 영구적이고 바꿀 수 없는 결함(지능)으로 일반화하는 비관적 설명 양식(Seligman, 1990)입니다.'
      },
      {
        text: '“너무 속상하고 맥이 빠져... 하지만 이번에 어디서 빗나갔는지 확인하고 방법을 바꿔보자.”',
        targetNodeId: 'scene-2-optimistic',
        route: 'optimistic',
        badgeLabel: '현실적 낙관 선택',
        explanatoryNote: '실망한 감정을 인정하되, 실패의 원인을 "수정 가능한 학습 전략"으로 분리하는 현실적 낙관성입니다.'
      }
    ]
  },

  // SCENE 2 - PESSIMISTIC ROUTE
  'scene-2-pessimistic': {
    id: 'scene-2-pessimistic',
    stage: 2,
    routeType: 'pessimistic',
    sceneTitle: '장면 2A: 어두워진 방과 닫힌 가방',
    location: '민우의 방',
    timeContext: '시험 당일 저녁 9시',
    narration: '집으로 돌아온 민우는 시험지를 가방 깊숙이 구겨 넣었습니다. 불도 켜지 않은 방에서 침대에 웅크린 채 끝없이 스마트폰 짧은 영상만 넘기고 있습니다.',
    characterSpeech: '“틀린 문제 봐서 뭐 해. 비참해지기만 하지... 어차피 난 해도 안 되는 놈인데 책상에 앉아서 뭐 하겠어.”',
    characterEmotion: 'despair',
    panelDescription: '어두운 방, 파란 스마트폰 불빛만이 침대에 누운 민우의 지친 얼굴을 비추고 있습니다. 책가방은 바닥 구석에 팽개쳐져 있습니다.',
    promptQuestion: '밤이 깊어질수록 자책감이 커집니다. 민우는 지금 어떤 결정을 내릴까요?',
    options: [
      {
        text: '“그냥 포기하자. 기대를 안 하면 다음엔 실망할 일도 없잖아.”',
        targetNodeId: 'scene-3-pessimistic-final',
        route: 'pessimistic',
        badgeLabel: '회피 지속',
        explanatoryNote: '상처받지 않기 위해 스스로 시도를 차단하는 "방어적 비관주의"이나, 무기력이 만성화될 위험이 있습니다.'
      },
      {
        text: '“계속 이러고 있으니 속만 더 답답해... 찬물로 세수하고, 딱 10분만 시험지를 꺼내보자.”',
        targetNodeId: 'scene-2-optimistic-transition',
        route: 'optimistic',
        badgeLabel: '작은 전환 시도',
        explanatoryNote: '무기력의 관성을 끊는 가장 작은 신체적·행동적 환기(Micro-Break)를 시도합니다.'
      }
    ]
  },

  // SCENE 2 - OPTIMISTIC ROUTE
  'scene-2-optimistic': {
    id: 'scene-2-optimistic',
    stage: 2,
    routeType: 'optimistic',
    sceneTitle: '장면 2B: 스탠드를 켜고 마주한 오답',
    location: '민우의 책상',
    timeContext: '시험 당일 저녁 8시 30분',
    narration: '속상한 마음에 한숨이 계속 나오지만, 민우는 따뜻한 보리차 한 잔을 마시며 스탠드를 켰습니다. 구겨졌던 시험지를 조심스레 펴고 색깔 펜을 들었습니다.',
    characterSpeech: '“속상한 건 사실이지만... 틀린 9문제를 뜯어보자. 개념을 몰랐던 건 3개, 계산 실수 3개, 시간이 부족했던 게 3개네. 전부 다 모르는 게 아니었어!”',
    characterEmotion: 'curious',
    panelDescription: '따뜻한 노란빛 스탠드 조명 아래, 민우가 포스트잇에 오답 원인을 세 바구니로 분류해 적고 있습니다. 막막했던 안개가 조금씩 걷히기 시작합니다.',
    promptQuestion: '오답의 원인이 드러났습니다. 민우가 취할 다음 행동은 무엇일까요?',
    options: [
      {
        text: '“계산 실수는 오답 노트에 정리하고, 헷갈렸던 개념 3개는 내일 친구 지훈이와 선생님께 질문하자.”',
        targetNodeId: 'scene-3-optimistic-final',
        route: 'optimistic',
        badgeLabel: '적응적 지원 요청',
        explanatoryNote: '혼자 끙끙 앓지 않고 주변의 자원과 타인을 적극 활용하는 건강한 그릿의 핵심 실천입니다.'
      },
      {
        text: '“내일 물어보는 것도 부끄러운데... 일단 오늘 밤 혼자서 끝까지 다 풀어내야만 해.”',
        targetNodeId: 'scene-3-rigid-final',
        route: 'pessimistic',
        badgeLabel: '경직된 완벽주의',
        explanatoryNote: '도움 요청을 꺼리고 과도한 독기나 완벽주의로 밀어붙이면 심리적 고립과 2차 번아웃에 빠지기 쉽습니다.'
      }
    ]
  },

  // SCENE 2 TRANSITION (From pessimistic to optimistic pivot)
  'scene-2-optimistic-transition': {
    id: 'scene-2-optimistic-transition',
    stage: 2,
    routeType: 'optimistic',
    sceneTitle: '장면 2B-변화: 작은 환기, 스탠드를 켜다',
    location: '민우의 방',
    timeContext: '시험 당일 저녁 10시',
    narration: '침대에서 일어나 찬물로 세수를 하고 거울을 본 민우. "그래, 58점을 받은 건 팩트지만, 그렇다고 내가 통째로 무능한 건 아니잖아." 민우는 스탠드를 켜고 가방에서 시험지를 꺼냈습니다.',
    characterSpeech: '“오늘 밤에 다 끝낼 필요는 없어. 딱 15분만 타이머를 맞추고, 왜 틀렸는지만 메모해 두자.”',
    characterEmotion: 'resolute',
    panelDescription: '정돈된 책상 위에 타이머를 15분으로 맞춰두고, 깊은 호흡을 내쉬며 펜을 쥔 민우. 얼굴에 드리웠던 짙은 그늘이 옅어졌습니다.',
    promptQuestion: '작은 통제감을 되찾은 민우, 어떤 전략을 세울까요?',
    options: [
      {
        text: '“오답 원인만 분류하고, 내일 방과 후에 수학 선생님께 조언을 구해봐야겠어.”',
        targetNodeId: 'scene-3-optimistic-final',
        route: 'optimistic',
        badgeLabel: '도움 요청 & 마이크로 액션',
        explanatoryNote: '내가 감당할 수 있는 크기로 부담을 줄이고 외부 지지망과 연결하는 이상적인 회복 경로입니다.'
      }
    ]
  },

  // SCENE 3 - PESSIMISTIC FINAL OUTCOME
  'scene-3-pessimistic-final': {
    id: 'scene-3-pessimistic-final',
    stage: 3,
    routeType: 'pessimistic',
    sceneTitle: '장면 3A: 2주 후 — 번져가는 무력감',
    location: '교실 뒷자리',
    timeContext: '2주 뒤 다음 수업 시간',
    narration: '시험지를 덮어두었던 민우는 다음 수업 시간에도 문제집을 제대로 펴지 못했습니다. "어차피 해도 안 될 텐데"라는 생각이 다른 과목으로까지 번져, 숙제 제출도 늦어지기 시작했습니다.',
    characterSpeech: '“수학뿐만 아니라 영어도 국어도 손에 안 잡혀... 난 왜 매번 이 모양일까.”',
    characterEmotion: 'tired',
    panelDescription: '선생님의 판서 소리가 희미하게 울리는 교실, 턱을 괴고 멍하니 책상을 바라보는 민우. 작은 실패가 일상 전체의 무력감으로 확산되었습니다.',
    promptQuestion: '이 상황은 민우가 나약해서 생긴 벌이 아닙니다.',
    options: []
  },

  // SCENE 3 - OPTIMISTIC FINAL OUTCOME
  'scene-3-optimistic-final': {
    id: 'scene-3-optimistic-final',
    stage: 3,
    routeType: 'optimistic',
    sceneTitle: '장면 3B: 2주 후 — 되찾은 주도권과 미소',
    location: '학교 자습실',
    timeContext: '2주 뒤 방과 후',
    narration: '선생님께 오답 노트를 보여드리며 질문했던 민우는 자신이 "문제의 조건을 성급하게 건너뛰는 습관"이 있었다는 걸 알게 되었습니다. 하루 15분씩 풀이 과정을 정갈하게 쓰는 연습을 이어갔습니다.',
    characterSpeech: '“성적이 갑자기 100점이 된 건 아니지만, 이제 다음 시험에선 뭘 조심해야 하는지 명확히 알고 있어. 다시 부딪쳐 볼 용기가 생겼어!”',
    characterEmotion: 'confident',
    panelDescription: '자습실에서 형광펜으로 풀이 노트를 체크하며 은은한 미소를 짓는 민우. 곁에는 친구 지훈이가 서로 격려하는 메모가 놓여 있습니다.',
    promptQuestion: '민우는 결과에 대한 통제감과 건강한 그릿을 경험했습니다.',
    options: []
  },

  // SCENE 3 - RIGID PERFECTIONISM FINAL OUTCOME
  'scene-3-rigid-final': {
    id: 'scene-3-rigid-final',
    stage: 3,
    routeType: 'pessimistic',
    sceneTitle: '장면 3C: 2주 후 — 무리한 버티기의 한계',
    location: '도서관',
    timeContext: '2주 뒤 늦은 밤',
    narration: '누구에게도 묻지 않고 밤샘을 강행하며 혼자 끙끙 앓았던 민우. 억지로 버티려 했지만 피로가 누적되어 두통이 잦아졌고, 책만 보면 가슴이 답답해지는 번아웃에 직면했습니다.',
    characterSpeech: '“분명 죽어라 참았는데 왜 능률은 더 떨어지지... 버티는 것조차 내겐 버거운 걸까.”',
    characterEmotion: 'tired',
    panelDescription: '수북이 쌓인 문제집 사이에 고개를 묻은 민우. 무조건 버티는 "가짜 그릿"이 가져온 소진의 모습을 보여줍니다.',
    promptQuestion: '그릿은 무조건 참는 독기가 아닙니다. 전략 변경과 쉼이 필요합니다.',
    options: []
  }
};

export interface RouteComparisonData {
  dimension: string;
  pessimisticAspect: string;
  optimisticAspect: string;
  psychologicalImpact: string;
}

export const COMPARISON_TABLE: RouteComparisonData[] = [
  {
    dimension: '1. 개인화 (Personalization)',
    pessimisticAspect: '“내 머리와 지능이 나쁜 탓이다” (불변의 자아 결함으로 귀인)',
    optimisticAspect: '“시간 분배와 특정 단원의 개념 정리 방식이 어긋났다” (수정 가능한 전략으로 귀인)',
    psychologicalImpact: '원인을 바꿀 수 없는 성격·지능에 두면 무력해지지만, 방법에 두면 개선할 행동이 보입니다.'
  },
  {
    dimension: '2. 영속성 (Permanence)',
    pessimisticAspect: '“앞으로도 영원히 달라지지 않고 실패할 것이다”',
    optimisticAspect: '“이번 시험에서의 일시적 결과일 뿐, 피드백을 반영하면 다음엔 바뀐다”',
    psychologicalImpact: '실패가 영구적이라고 믿으면 뇌는 에너지를 절약하기 위해 도전을 멈춥니다.'
  },
  {
    dimension: '3. 보편성 (Pervasiveness)',
    pessimisticAspect: '“수학도 망쳤으니 난 인생 모든 영역에서 무능한 사람이다”',
    optimisticAspect: '“수학의 미적분 3문제가 취약했던 것일 뿐, 내 전체 가치가 훼손된 건 아니다”',
    psychologicalImpact: '국소적인 오류를 전인격적 결함으로 확대 해석하지 않는 것이 심리적 방어막이 됩니다.'
  },
  {
    dimension: '4. 실제 행동 양상',
    pessimisticAspect: '시험지 은폐, 스마트폰 과몰입, 질문 회피, 공부 중단',
    optimisticAspect: '오답 원인 세분화, 15분 마이크로 학습, 선생님·친구에게 조언 요청',
    psychologicalImpact: '작고 구체적인 행동을 실행할 때 뇌의 배내측 전두엽이 활성화되어 무기력을 끕니다.'
  },
  {
    dimension: '5. 건강한 그릿의 관점',
    pessimisticAspect: '포기해 버리거나, 반대로 혼자 무리하게 독기로 버티다 번아웃에 직면',
    optimisticAspect: '감정을 돌보고, 도움을 청하며, 학습 전략을 유연하게 수정하는 적응적 지속',
    psychologicalImpact: '진정한 그릿은 맹목적 버티기가 아니라 목표를 위해 방향키를 유연하게 조정하는 지혜입니다.'
  }
];
