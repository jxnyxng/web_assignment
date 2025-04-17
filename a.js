
// 새로고침 했을 때 상단으로 시작
history.scrollRestoration = "manual"; 
 
// 목차 및 페이지 스크롤 관련 코드-----------------------------------------------------------------
const indexLinks = document.querySelectorAll('.small-index');

indexLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // 기본 링크 이동 방지
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 300;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});
// -------------------------------------------------------------------------
const topLinks = document.querySelectorAll('.moveToTop');

topLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // 기본 링크 이동 방지
 
   console.log("top");

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
// 목차 색상 변경 코드
// 현재 보고 있는 목차에 색깔 표시
function updateActiveIndex() {
  const sections = document.querySelectorAll('.paragraphs > div'); // paragraphs 클래스 바로 아래 div 선택
  const navLinks = document.querySelectorAll('.small-index');

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;
    const scrollPosition = window.scrollY;

    const correspondingNavLink = navLinks[index];

    if (correspondingNavLink) {
      if (scrollPosition >= sectionTop -  (window.innerHeight) / 2 && scrollPosition < sectionBottom - window.innerHeight / 2) {
        correspondingNavLink.classList.add('active');   
      } else {
        correspondingNavLink.classList.remove('active'); 
      }
    }
  });
}

// 스크롤 이벤트 리스너 등록
window.addEventListener('scroll', updateActiveIndex);

// 초기 로드 시에도 한번 실행하여 첫 번째 섹션에 색깔을 적용할 수 있도록 함
document.addEventListener('DOMContentLoaded', updateActiveIndex);

// -------------------------------------------------------------------------------------
 
// 퀵메뉴 링크 이동 코드---------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
  const solvedACImg = document.querySelector('.quickMenu .solvedAC');
  const tstoryImg = document.querySelector('.quickMenu .Tstory');
  const gitHubImg = document.querySelector('.quickMenu .gitHub');

  solvedACImg.addEventListener('click', function() {
      window.open('https://solved.ac/en/profile/kim0607mi', '_blank'); // 솔브드 이동
  });

  tstoryImg.addEventListener('click', function() {
      window.open('https://kim0607mi.tistory.com/', '_blank'); // 티스토리 이동
  });

  gitHubImg.addEventListener('click', function() {
      window.open('https://github.com/jxnyxng', '_blank'); // 깃허브 이동
  }); 
});

//원페이지 스크롤 구현
 
// 상단 텍스트 변경 구현
document.addEventListener('DOMContentLoaded', function() {
  const moveToTopLink = document.querySelector('.moveToTop');
  const topTextElement = moveToTopLink.querySelector('.topText');
  const triggerPosition = 800; // 텍스트 변경이 발생하는 스크롤 Y축 위치 (원하는 값으로 변경)
  const originalText = "hello"; // 원래 텍스트
  const newText = " "; // 변경할 새로운 텍스트

  if (topTextElement) {
    window.addEventListener('scroll', function() {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition > triggerPosition) {
        topTextElement.textContent = newText;
      } else {
        topTextElement.textContent = originalText;
      }
    });
  }
});