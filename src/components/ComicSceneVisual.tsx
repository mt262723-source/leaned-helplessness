import React from 'react';

interface ComicSceneVisualProps {
  nodeId: string;
  emotion: 'shock' | 'despair' | 'resolute' | 'tired' | 'curious' | 'confident';
}

export const ComicSceneVisual: React.FC<ComicSceneVisualProps> = ({ nodeId, emotion }) => {
  // Render clean, bespoke 2D comic illustration vectors with authentic hand-drawn feel, warm palettes, and speech elements
  return (
    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-stone-100 rounded-xl overflow-hidden border-2 border-stone-800 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]">
      {/* Comic Halftone texture overlay */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#1c1917 1px, transparent 1px)',
          backgroundSize: '12px 12px'
        }}
      />

      {/* Dynamic 2D Comic Scenes according to nodeId */}
      {nodeId === 'scene-1-intro' && (
        <svg viewBox="0 0 640 360" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Classroom Background */}
          <rect width="640" height="360" fill="#F4EFEA" />
          {/* Window */}
          <rect x="40" y="30" width="180" height="180" fill="#E2E8F0" rx="4" stroke="#292524" strokeWidth="3" />
          <line x1="130" y1="30" x2="130" y2="210" stroke="#292524" strokeWidth="3" />
          <line x1="40" y1="120" x2="220" y2="120" stroke="#292524" strokeWidth="3" />
          {/* Distant Clouds in Window */}
          <path d="M70,80 Q90,65 110,80 Q130,70 150,85 L60,85 Z" fill="#CBD5E1" opacity="0.6" />
          {/* Classroom Blackboard edge */}
          <rect x="250" y="30" width="360" height="140" fill="#2E4A3E" stroke="#292524" strokeWidth="3" rx="4" />
          <text x="270" y="70" fill="#94A3B8" fontSize="16" fontFamily="sans-serif">수학 (중간고사 성적 확인)</text>
          
          {/* Desk */}
          <path d="M120,220 L580,220 L550,360 L80,360 Z" fill="#D6C5B3" stroke="#292524" strokeWidth="3" />
          
          {/* Test Paper on Desk with red 58 */}
          <g transform="translate(180, 230) rotate(-6)">
            <rect width="130" height="100" fill="#FFFFFF" stroke="#292524" strokeWidth="2.5" rx="2" />
            <line x1="15" y1="25" x2="90" y2="25" stroke="#94A3B8" strokeWidth="2" />
            <line x1="15" y1="40" x2="115" y2="40" stroke="#94A3B8" strokeWidth="2" />
            <line x1="15" y1="55" x2="80" y2="55" stroke="#94A3B8" strokeWidth="2" />
            <line x1="15" y1="70" x2="105" y2="70" stroke="#94A3B8" strokeWidth="2" />
            {/* Red checkmarks and 58 */}
            <path d="M20,20 L30,45 L15,40" stroke="#EF4444" strokeWidth="3" fill="none" />
            <path d="M50,35 L60,60 L45,55" stroke="#EF4444" strokeWidth="3" fill="none" />
            <text x="75" y="55" fill="#EF4444" fontSize="34" fontWeight="bold" fontFamily="sans-serif">58</text>
            <circle cx="95" cy="42" r="26" stroke="#EF4444" strokeWidth="3" fill="none" opacity="0.8" />
          </g>

          {/* Minwoo Character (Side-front view, head down, shocked) */}
          <g transform="translate(360, 110)">
            {/* Hair back */}
            <path d="M20,60 Q50,10 90,40 Q130,20 150,70 Q130,120 70,110 Z" fill="#1C1917" />
            {/* Neck */}
            <rect x="75" y="105" width="30" height="30" fill="#F8D3B4" stroke="#292524" strokeWidth="2.5" />
            {/* Torso & School Uniform */}
            <path d="M40,135 Q90,120 140,135 L160,250 L20,250 Z" fill="#3B4856" stroke="#292524" strokeWidth="3" />
            {/* Collar */}
            <path d="M70,135 L90,165 L110,135 Z" fill="#FFFFFF" stroke="#292524" strokeWidth="2" />
            {/* Face */}
            <path d="M45,65 Q85,55 125,75 Q130,115 85,120 Q50,115 45,65 Z" fill="#FCE5D2" stroke="#292524" strokeWidth="2.5" />
            {/* Hair bangs */}
            <path d="M40,65 Q60,35 85,50 Q110,35 130,65 Q115,85 105,75 Q90,85 75,70 Q60,85 40,65 Z" fill="#1C1917" />
            {/* Shocked Eyes (Wide open, shaking pupil) */}
            <circle cx="70" cy="85" r="5" fill="#1C1917" />
            <circle cx="72" cy="83" r="1.5" fill="#FFFFFF" />
            <circle cx="98" cy="88" r="5" fill="#1C1917" />
            <circle cx="100" cy="86" r="1.5" fill="#FFFFFF" />
            {/* Slanted troubled eyebrows */}
            <line x1="62" y1="76" x2="78" y2="79" stroke="#1C1917" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="106" y1="81" x2="90" y2="82" stroke="#1C1917" strokeWidth="2.5" strokeLinecap="round" />
            {/* Small open mouth (gasp) */}
            <ellipse cx="85" cy="103" rx="4" ry="5" fill="#C2410C" stroke="#292524" strokeWidth="1.5" />
            {/* Sweat drop of shock */}
            <path d="M125,75 C130,70 135,78 130,83 C125,86 120,80 125,75 Z" fill="#60A5FA" stroke="#292524" strokeWidth="1" />
            {/* Shock effect lines */}
            <line x1="30" y1="60" x2="10" y2="50" stroke="#EF4444" strokeWidth="2" />
            <line x1="25" y1="80" x2="5" y2="80" stroke="#EF4444" strokeWidth="2" />
            <line x1="35" y1="100" x2="15" y2="105" stroke="#EF4444" strokeWidth="2" />
          </g>

          {/* Comic Panel Sound Effect FX */}
          <g transform="translate(240, 90) rotate(-8)">
            <rect x="0" y="0" width="90" height="34" fill="#FEF08A" stroke="#292524" strokeWidth="2" rx="4" />
            <text x="14" y="24" fill="#991B1B" fontSize="18" fontWeight="900" fontFamily="sans-serif">쿵...!!</text>
          </g>
        </svg>
      )}

      {nodeId === 'scene-2-pessimistic' && (
        <svg viewBox="0 0 640 360" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Dark Room Background */}
          <rect width="640" height="360" fill="#1E232A" />
          {/* Window showing dark night */}
          <rect x="50" y="30" width="140" height="140" fill="#0F172A" stroke="#334155" strokeWidth="2.5" rx="3" />
          <circle cx="140" cy="65" r="14" fill="#FDE047" opacity="0.6" />
          {/* Floor */}
          <rect x="0" y="240" width="640" height="120" fill="#161B22" />
          {/* Discarded Backpack in corner */}
          <g transform="translate(90, 230) rotate(-15)">
            <rect width="70" height="85" fill="#334155" rx="10" stroke="#0F172A" strokeWidth="2.5" />
            <rect x="15" y="45" width="40" height="30" fill="#475569" rx="4" stroke="#0F172A" strokeWidth="1.5" />
            {/* Crumpled test paper sticking out */}
            <path d="M45,20 L65,10 L70,30 L50,35 Z" fill="#E2E8F0" stroke="#0F172A" strokeWidth="1.5" />
            <line x1="52" y1="18" x2="63" y2="14" stroke="#EF4444" strokeWidth="2" />
          </g>

          {/* Bed & Minwoo curled up holding glowing smartphone */}
          <g transform="translate(260, 160)">
            {/* Bed Mattress & Blanket */}
            <path d="M-40,80 L350,80 L320,170 L-70,170 Z" fill="#2E3748" stroke="#0F172A" strokeWidth="3" />
            <path d="M-10,70 Q120,40 280,70 L260,150 L-30,150 Z" fill="#3B465A" stroke="#0F172A" strokeWidth="2" />
            
            {/* Minwoo Head & Body under blanket */}
            <g transform="translate(40, 20)">
              {/* Back of Head hair */}
              <circle cx="60" cy="40" r="32" fill="#0F172A" />
              {/* Face silhouette */}
              <path d="M65,30 Q90,30 85,60 Q65,70 50,65 Z" fill="#D4B098" />
              {/* Slumped tired eye */}
              <line x1="72" y1="46" x2="82" y2="48" stroke="#1E232A" strokeWidth="2" />
              {/* Arm holding phone */}
              <path d="M50,65 Q80,75 110,60" fill="none" stroke="#D4B098" strokeWidth="14" strokeLinecap="round" />
              {/* Smartphone */}
              <rect x="105" y="35" width="22" height="42" rx="4" fill="#0F172A" stroke="#64748B" strokeWidth="1.5" transform="rotate(15, 105, 35)" />
              {/* Blue screen glow cone */}
              <polygon points="112,42 160,10 180,90 120,70" fill="#38BDF8" opacity="0.25" />
              <rect x="108" y="38" width="16" height="34" rx="2" fill="#7DD3FC" opacity="0.9" transform="rotate(15, 105, 35)" />
            </g>
          </g>

          {/* Dark gloomy thought cloud */}
          <g transform="translate(280, 40)">
            <path d="M40,30 Q60,10 90,20 Q120,5 140,25 Q160,15 170,35 Q190,45 180,65 Q190,85 170,95 Q140,115 110,100 Q80,110 50,95 Q30,85 40,65 Q25,45 40,30 Z" 
              fill="#111827" stroke="#374151" strokeWidth="2" />
            <circle cx="250" cy="120" r="5" fill="#374151" />
            <circle cx="265" cy="140" r="3" fill="#374151" />
            <text x="60" y="55" fill="#94A3B8" fontSize="13" fontWeight="bold">“어차피 해봤자...”</text>
            <text x="55" y="75" fill="#DC2626" fontSize="12" fontWeight="500">다음에도 똑같을 거야</text>
          </g>
        </svg>
      )}

      {nodeId === 'scene-2-optimistic' && (
        <svg viewBox="0 0 640 360" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Warm Study Room Background */}
          <rect width="640" height="360" fill="#FDFBF7" />
          
          {/* Warm Desk Lamp Cone Glow */}
          <polygon points="120,60 0,360 480,360" fill="#FEF08A" opacity="0.28" />
          
          {/* Bookshelf in background */}
          <rect x="440" y="40" width="160" height="180" fill="#E8DFD8" stroke="#292524" strokeWidth="2.5" rx="3" />
          <line x1="440" y1="100" x2="600" y2="100" stroke="#292524" strokeWidth="2" />
          <line x1="440" y1="160" x2="600" y2="160" stroke="#292524" strokeWidth="2" />
          {/* Books */}
          <rect x="450" y="55" width="14" height="45" fill="#38BDF8" />
          <rect x="466" y="50" width="18" height="50" fill="#F43F5E" />
          <rect x="486" y="60" width="22" height="40" fill="#10B981" />
          <rect x="455" y="115" width="25" height="45" fill="#F59E0B" />
          <rect x="482" y="110" width="20" height="50" fill="#6366F1" />

          {/* Lamp Hardware */}
          <path d="M80,220 L90,100 L120,65" fill="none" stroke="#292524" strokeWidth="4" strokeLinecap="round" />
          <path d="M105,50 L145,75 L125,95 Z" fill="#F59E0B" stroke="#292524" strokeWidth="2" />
          
          {/* Study Desk */}
          <rect x="40" y="220" width="560" height="140" fill="#EADCC9" stroke="#292524" strokeWidth="3" rx="4" />
          
          {/* Mug with Steam */}
          <g transform="translate(140, 205)">
            <rect width="28" height="32" rx="4" fill="#38BDF8" stroke="#292524" strokeWidth="2" />
            <path d="M28,8 Q38,16 28,24" fill="none" stroke="#292524" strokeWidth="2" />
            <path d="M8,-5 Q12,-15 8,-22" fill="none" stroke="#94A3B8" strokeWidth="2" opacity="0.6" />
            <path d="M18,-2 Q22,-12 18,-18" fill="none" stroke="#94A3B8" strokeWidth="2" opacity="0.6" />
          </g>

          {/* Clean Test Paper with Colored Sticky Notes */}
          <g transform="translate(200, 235)">
            <rect width="180" height="110" fill="#FFFFFF" stroke="#292524" strokeWidth="2" rx="2" />
            {/* Sticky note 1 (Orange: Concept) */}
            <rect x="15" y="15" width="45" height="40" fill="#FED7AA" stroke="#F97316" strokeWidth="1.5" rx="1" />
            <text x="18" y="32" fill="#9A3412" fontSize="9" fontWeight="bold">개념부족</text>
            <text x="25" y="46" fill="#EA580C" fontSize="11" fontWeight="900">3문제</text>
            {/* Sticky note 2 (Green: Calculation) */}
            <rect x="68" y="15" width="45" height="40" fill="#BBF7D0" stroke="#16A34A" strokeWidth="1.5" rx="1" />
            <text x="72" y="32" fill="#166534" fontSize="9" fontWeight="bold">계산실수</text>
            <text x="78" y="46" fill="#15803D" fontSize="11" fontWeight="900">3문제</text>
            {/* Sticky note 3 (Blue: Time) */}
            <rect x="120" y="15" width="45" height="40" fill="#BAE6FD" stroke="#0284C7" strokeWidth="1.5" rx="1" />
            <text x="124" y="32" fill="#075985" fontSize="9" fontWeight="bold">시간부족</text>
            <text x="130" y="46" fill="#0369A1" fontSize="11" fontWeight="900">3문제</text>

            <line x1="15" y1="75" x2="165" y2="75" stroke="#CBD5E1" strokeWidth="2" />
            <line x1="15" y1="90" x2="135" y2="90" stroke="#CBD5E1" strokeWidth="2" />
          </g>

          {/* Minwoo Character Sitting with focused, curious expression */}
          <g transform="translate(400, 110)">
            {/* Hair */}
            <path d="M25,50 Q60,15 100,45 Q120,70 95,115 Q50,110 25,50 Z" fill="#1C1917" />
            {/* Face */}
            <path d="M35,55 Q75,45 110,65 Q115,105 75,112 Q40,105 35,55 Z" fill="#FCE5D2" stroke="#292524" strokeWidth="2.5" />
            {/* Eye focused on desk */}
            <circle cx="58" cy="80" r="4.5" fill="#1C1917" />
            <circle cx="60" cy="78" r="1.5" fill="#FFFFFF" />
            {/* Focused Eyebrow */}
            <line x1="50" y1="72" x2="68" y2="74" stroke="#1C1917" strokeWidth="2.5" strokeLinecap="round" />
            {/* Small thoughtful smile */}
            <path d="M60,98 Q72,103 80,96" fill="none" stroke="#292524" strokeWidth="2" strokeLinecap="round" />
            {/* Torso */}
            <path d="M15,130 Q70,115 125,130 L140,240 L0,240 Z" fill="#0284C7" stroke="#292524" strokeWidth="3" />
            {/* Arm holding pen */}
            <path d="M40,150 L-30,195" fill="none" stroke="#FCE5D2" strokeWidth="14" strokeLinecap="round" />
            {/* Pen */}
            <line x1="-35" y1="190" x2="-20" y2="210" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
          </g>

          {/* Speech / Insight Bubble */}
          <g transform="translate(190, 45)">
            <path d="M10,0 L180,0 Q190,0 190,10 L190,50 Q190,60 180,60 L50,60 L30,75 L35,60 L10,60 Q0,60 0,50 L0,10 Q0,0 10,0 Z" 
              fill="#FFFFFF" stroke="#292524" strokeWidth="2" />
            <text x="14" y="24" fill="#0F172A" fontSize="13" fontWeight="bold">“전부 다 모르는 게 아니었어!”</text>
            <text x="14" y="44" fill="#0284C7" fontSize="12" fontWeight="600">오답 원인을 나누니 길이 보여</text>
          </g>
        </svg>
      )}

      {nodeId === 'scene-2-optimistic-transition' && (
        <svg viewBox="0 0 640 360" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Transition Scene: Turning on lamp, timer on */}
          <rect width="640" height="360" fill="#FAF5EF" />
          
          {/* Desk */}
          <rect x="0" y="230" width="640" height="130" fill="#E5D5C5" stroke="#292524" strokeWidth="3" />
          
          {/* 15 Minute Digital Kitchen Timer */}
          <g transform="translate(140, 180)">
            <rect width="90" height="65" rx="8" fill="#F8FAFC" stroke="#292524" strokeWidth="2.5" />
            <rect x="12" y="12" width="66" height="30" rx="3" fill="#0F172A" />
            <text x="19" y="34" fill="#22C55E" fontSize="20" fontWeight="bold" fontFamily="monospace">15:00</text>
            <circle cx="28" cy="52" r="5" fill="#E2E8F0" stroke="#292524" strokeWidth="1" />
            <circle cx="45" cy="52" r="5" fill="#E2E8F0" stroke="#292524" strokeWidth="1" />
            <circle cx="62" cy="52" r="5" fill="#22C55E" stroke="#292524" strokeWidth="1" />
          </g>

          {/* Minwoo Character Resolute */}
          <g transform="translate(320, 100)">
            {/* Hair */}
            <path d="M30,50 Q70,10 110,40 Q130,80 100,120 Q60,115 30,50 Z" fill="#1C1917" />
            {/* Face */}
            <path d="M40,55 Q80,45 115,65 Q120,105 80,115 Q45,105 40,55 Z" fill="#FCE5D2" stroke="#292524" strokeWidth="2.5" />
            {/* Eyes confident */}
            <circle cx="65" cy="80" r="4" fill="#1C1917" />
            <circle cx="95" cy="83" r="4" fill="#1C1917" />
            <line x1="55" y1="72" x2="72" y2="73" stroke="#1C1917" strokeWidth="2" />
            <line x1="88" y1="74" x2="105" y2="73" stroke="#1C1917" strokeWidth="2" />
            <path d="M72,97 Q80,102 90,96" fill="none" stroke="#292524" strokeWidth="2" />
            {/* Torso */}
            <path d="M10,135 Q75,120 140,135 L155,260 L0,260 Z" fill="#0D9488" stroke="#292524" strokeWidth="3" />
          </g>

          {/* Narration Banner */}
          <g transform="translate(80, 40)">
            <rect width="250" height="50" rx="4" fill="#FEF3C7" stroke="#292524" strokeWidth="2" />
            <text x="16" y="24" fill="#92400E" fontSize="13" fontWeight="bold">“딱 15분만 타이머를 맞추자.”</text>
            <text x="16" y="42" fill="#78350F" fontSize="12">작은 시작이 무기력의 고리를 끊습니다.</text>
          </g>
        </svg>
      )}

      {nodeId === 'scene-3-pessimistic-final' && (
        <svg viewBox="0 0 640 360" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Muted Gray Classroom Tone */}
          <rect width="640" height="360" fill="#ECEEEF" />
          {/* Blackboard */}
          <rect x="40" y="30" width="300" height="110" fill="#475569" stroke="#334155" strokeWidth="2.5" rx="3" />
          <text x="60" y="65" fill="#94A3B8" fontSize="14">다음 단원 평가 안내</text>
          <line x1="60" y1="80" x2="220" y2="80" stroke="#64748B" strokeWidth="1.5" />
          
          {/* Classroom desks */}
          <rect x="0" y="230" width="640" height="130" fill="#CBD5E1" stroke="#334155" strokeWidth="2.5" />
          
          {/* Piled Unopened Books */}
          <g transform="translate(100, 190)">
            <rect width="90" height="20" fill="#94A3B8" stroke="#334155" strokeWidth="1.5" rx="2" />
            <rect x="5" y="-18" width="80" height="20" fill="#64748B" stroke="#334155" strokeWidth="1.5" rx="2" />
            <rect x="10" y="-36" width="70" height="20" fill="#475569" stroke="#334155" strokeWidth="1.5" rx="2" />
          </g>

          {/* Minwoo resting chin on palm looking blankly */}
          <g transform="translate(360, 95)">
            <path d="M30,55 Q65,15 105,45 Q125,75 100,120 Q55,115 30,55 Z" fill="#334155" />
            <path d="M40,60 Q80,50 115,70 Q118,110 80,118 Q45,110 40,60 Z" fill="#E2D0C4" stroke="#334155" strokeWidth="2.5" />
            {/* Blank eye */}
            <line x1="58" y1="82" x2="72" y2="82" stroke="#334155" strokeWidth="2.5" />
            {/* Hand supporting chin */}
            <path d="M30,120 Q50,110 65,118" fill="none" stroke="#E2D0C4" strokeWidth="12" strokeLinecap="round" />
            <path d="M15,140 Q70,130 135,140 L150,260 L0,260 Z" fill="#64748B" stroke="#334155" strokeWidth="2.5" />
          </g>

          {/* Editorial Callout Card */}
          <g transform="translate(180, 50)">
            <rect width="260" height="55" rx="6" fill="#FFFFFF" stroke="#475569" strokeWidth="2" />
            <text x="16" y="24" fill="#1E293B" fontSize="13" fontWeight="bold">학습된 무기력의 확산</text>
            <text x="16" y="44" fill="#64748B" fontSize="12">수학 한 과목의 실패가 다른 과목의 회피로 이어짐</text>
          </g>
        </svg>
      )}

      {nodeId === 'scene-3-optimistic-final' && (
        <svg viewBox="0 0 640 360" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Bright, Warm Hopeful Study Room */}
          <rect width="640" height="360" fill="#F0FDF4" />
          
          {/* Window with clear sky */}
          <rect x="50" y="30" width="160" height="160" fill="#BAE6FD" stroke="#292524" strokeWidth="2.5" rx="4" />
          <circle cx="150" cy="70" r="22" fill="#FBBF24" />
          <path d="M70,120 Q95,100 120,115 Q145,105 170,120 L70,120 Z" fill="#FFFFFF" opacity="0.8" />

          {/* Desk */}
          <rect x="0" y="220" width="640" height="140" fill="#EADBC8" stroke="#292524" strokeWidth="3" />
          
          {/* Note from Teacher / Friend */}
          <g transform="translate(120, 235) rotate(-4)">
            <rect width="130" height="85" fill="#FEF08A" stroke="#292524" strokeWidth="2" rx="2" />
            <text x="14" y="26" fill="#854D0E" fontSize="11" fontWeight="bold">선생님의 피드백 메모</text>
            <text x="14" y="45" fill="#713F12" fontSize="10">“조건만 꼼꼼히 체크하면</text>
            <text x="14" y="60" fill="#713F12" fontSize="10">다음엔 실수 확실히 줄어든다!”</text>
            <path d="M100,55 L108,68 L122,48" stroke="#16A34A" strokeWidth="3" fill="none" />
          </g>

          {/* Minwoo with a Bright, Confident Smile */}
          <g transform="translate(340, 95)">
            {/* Hair */}
            <path d="M30,50 Q70,10 115,40 Q135,75 105,120 Q60,115 30,50 Z" fill="#1C1917" />
            {/* Face */}
            <path d="M40,55 Q80,45 120,65 Q125,105 85,115 Q45,105 40,55 Z" fill="#FCE5D2" stroke="#292524" strokeWidth="2.5" />
            {/* Bright Eyes */}
            <circle cx="68" cy="78" r="4.5" fill="#1C1917" />
            <circle cx="70" cy="76" r="1.5" fill="#FFFFFF" />
            <circle cx="98" cy="80" r="4.5" fill="#1C1917" />
            <circle cx="100" cy="78" r="1.5" fill="#FFFFFF" />
            {/* Confident Smile */}
            <path d="M68,95 Q84,110 100,95" fill="none" stroke="#292524" strokeWidth="2.5" strokeLinecap="round" />
            {/* Torso */}
            <path d="M15,130 Q75,115 140,130 L155,260 L0,260 Z" fill="#2563EB" stroke="#292524" strokeWidth="3" />
            {/* Thumbs up or holding notebook */}
            <path d="M35,145 L-20,185" fill="none" stroke="#FCE5D2" strokeWidth="14" strokeLinecap="round" />
            <rect x="-45" y="170" width="40" height="50" rx="3" fill="#FFFFFF" stroke="#292524" strokeWidth="2" />
            <path d="M-35,190 L-30,202 L-15,182" stroke="#22C55E" strokeWidth="3" fill="none" />
          </g>

          {/* Speech Bubble */}
          <g transform="translate(230, 40)">
            <rect width="210" height="52" rx="6" fill="#FFFFFF" stroke="#16A34A" strokeWidth="2" />
            <text x="16" y="24" fill="#15803D" fontSize="13" fontWeight="bold">“이제 어떻게 대응할지 보여!”</text>
            <text x="16" y="42" fill="#166534" fontSize="12">결과를 통제할 수 있다는 감각 회복</text>
          </g>
        </svg>
      )}

      {nodeId === 'scene-3-rigid-final' && (
        <svg viewBox="0 0 640 360" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Muted Night Library */}
          <rect width="640" height="360" fill="#24262E" />
          {/* Huge piles of books */}
          <rect x="60" y="160" width="110" height="30" fill="#4B5563" stroke="#111827" strokeWidth="2" />
          <rect x="70" y="130" width="90" height="30" fill="#374151" stroke="#111827" strokeWidth="2" />
          <rect x="80" y="100" width="70" height="30" fill="#1F2937" stroke="#111827" strokeWidth="2" />
          
          {/* Exhausted Minwoo slumped on desk */}
          <rect x="0" y="230" width="640" height="130" fill="#1F2937" stroke="#111827" strokeWidth="2.5" />
          
          {/* Energy Drink Can */}
          <rect x="200" y="195" width="18" height="38" rx="2" fill="#DC2626" stroke="#111827" strokeWidth="1.5" />
          <rect x="225" y="202" width="18" height="31" rx="2" fill="#DC2626" stroke="#111827" strokeWidth="1.5" />

          <g transform="translate(320, 140)">
            {/* Slumped head on arms */}
            <circle cx="80" cy="50" r="35" fill="#111827" />
            <path d="M30,85 Q80,75 130,85 L120,130 L40,130 Z" fill="#475569" />
          </g>

          {/* Warning badge */}
          <g transform="translate(180, 45)">
            <rect width="270" height="52" rx="4" fill="#FEE2E2" stroke="#DC2626" strokeWidth="2" />
            <text x="16" y="24" fill="#991B1B" fontSize="13" fontWeight="bold">가짜 그릿(Blind Grit)의 함정</text>
            <text x="16" y="42" fill="#B91C1C" fontSize="12">휴식과 도움 요청 없는 무조건적 버티기</text>
          </g>
        </svg>
      )}

      {/* Comic Panel Step Indicator in top-left */}
      <div className="absolute top-3 left-3 bg-stone-900/85 backdrop-blur-sm text-stone-100 text-xs font-semibold px-2.5 py-1 rounded border border-stone-700/60 shadow-sm flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
        <span>2D 인터랙티브 스토리 패널</span>
      </div>
    </div>
  );
};
