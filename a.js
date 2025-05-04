
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
// 스크롤 위치에 따른 컨텐츠 효과
function updateActiveIndex() {
  const sections = document.querySelectorAll('.paragraphs > div');
  const navLinks = document.querySelectorAll('.small-index');
  const bigBoxes = document.querySelectorAll('.big-box');

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;
    const scrollPosition = window.scrollY;

    const correspondingNavLink = navLinks[index];
    const correspondingBigBox = bigBoxes[index];

    if (scrollPosition >= sectionTop - window.innerHeight / 2 && scrollPosition < sectionBottom - window.innerHeight / 3) {
      if (correspondingNavLink) {
        correspondingNavLink.classList.add('active');
      }

      if (correspondingBigBox && !correspondingBigBox.classList.contains('animated')) {
        correspondingBigBox.classList.add('DtoU', 'animated');
      }

    } else {
      if (correspondingNavLink) {
        correspondingNavLink.classList.remove('active');
      }
    }
  });
}

 
// 상단 텍스트 변경 구현
document.addEventListener('DOMContentLoaded', function() {
  const moveToTopLink = document.querySelector('.moveToTop');
  const topTextElement = moveToTopLink.querySelector('.top-text');
  const sections = document.querySelectorAll('.paragraphs > div');

  // -------------------------------------------
  function updateHeaderText(text, animationClass) {
    let newHTML = `<div class="header-text ${animationClass}">`; 
    for (const char of text) {
      if (char === ' ') {
        newHTML += `<span>&nbsp;</span>`; 
      } else {
        newHTML += `<span>${char}</span>`;
      }
    }
    newHTML += `</div>`;
    topTextElement.innerHTML = newHTML;
  }
  // ------------------------------------------------
  if (topTextElement && sections.length > 0) {
    window.addEventListener('scroll', function() {
      const currentScrollPosition = window.scrollY;
      let currentTitle = "HELLO";
      let currentAnimationClass = "hello-animation"; // 초기 애니메이션 

      for (let i = 0; i < sections.length; i++) {
        const sectionTop = sections[i].offsetTop;
        const sectionBottom = sectionTop + sections[i].offsetHeight;
        const sectionTitleElement = sections[i].querySelector('.para-title');

        if (currentScrollPosition >= sectionTop + (window.innerHeight) / 20 && currentScrollPosition < sectionBottom - window.innerHeight / 3) {
          if (sectionTitleElement) {
            currentTitle = sectionTitleElement.textContent.trim();
            currentAnimationClass = `section${i + 1}-animation`; // 섹션별 애니메이션 클래스
          } else {
            currentTitle = " "; // 제목이 없으면 기본으로
            currentAnimationClass = "hello-animation";
          }
          break;
        } else if (currentScrollPosition >= 0.5) {
          currentTitle = " ";
          currentAnimationClass = ""; // 애니메이션x
        }
      }

      updateHeaderText(currentTitle, currentAnimationClass);
    });

    // 초기 로딩 시 "HELLO" 
    updateHeaderText("HELLO", "hello-animation");
  }
});
//-----------------------------------
 
// 스크롤 이벤트 리스너 등록
window.addEventListener('scroll', updateActiveIndex);

// 초기 로드 시에도 한번 실행하여 첫 번째 섹션에 색깔을 적용 
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
 
