function checkNameInput() {
  const inputField = document.getElementById('nameInput');
  const nameError = document.getElementById('nameError');
  const nameError2 = document.getElementById('nameError2');

  if (inputField.value.trim() === '') {
    nameError.style.display = 'block'; // 메시지 표시
    nameError2.style.display = 'block'; // 메시지 표시
  } else {
    nameError.style.display = 'none'; // 메시지 숨김
    nameError2.style.display = 'none'; // 메시지 숨김
  }
}

function checkBreedInput() {
  const inputField = document.getElementById('breedInput');
  const breadError = document.getElementById('breadError');
  const breadError2 = document.getElementById('breadError2');

  if (inputField.value.trim() === '') {
    breadError.style.display = 'block'; // 메시지 표시
    breadError2.style.display = 'block'; // 메시지 표시
  } else {
    breadError.style.display = 'none'; // 메시지 숨김
    breadError2.style.display = 'none'; // 메시지 숨김
  }
}

function checkWeightInput() {
  const inputField = document.getElementById('weightInput');
  const weightError = document.getElementById('weightError');
  const weightError2 = document.getElementById('weightError2');

  if (inputField.value.trim() === '') {
    weightError.style.display = 'block'; // 메시지 표시
    weightError2.style.display = 'block'; // 메시지 표시
  } else {
    weightError.style.display = 'none'; // 메시지 숨김
    weightError2.style.display = 'none'; // 메시지 숨김
  }
}

function checkIntroduceInput() {
  const inputField = document.getElementById('introduceInput');
  const introduceError = document.getElementById('introduceError');
  const introduceError2 = document.getElementById('introduceError2');

  if (inputField.value.trim() === '') {
    introduceError.style.display = 'block'; // 메시지 표시
    introduceError2.style.display = 'block'; // 메시지 표시
  } else {
    introduceError.style.display = 'none'; // 메시지 숨김
    introduceError2.style.display = 'none'; // 메시지 숨김
  }
}

//날짜변환
function submitForm() {
  const startDate = document.querySelector('input[name="adoptPeriodstart"]').value;
  const endDate = document.querySelector('input[name="adoptPeriodend"]').value;

  // 문자열을 Date 객체로 변환
  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);

  // 필요한 경우 Date 객체를 처리하거나 서버에 전송
  console.log(startDateObj, endDateObj);

  // 폼 제출 (필요한 경우)
  document.getElementById('adoptForm').submit();
}


// 글작성취소버튼
function cancleClick() {
  if (confirm('작성중인 글은 저장되지 않습니다. 정말로 취소하시겠습니까?')) {
    console.log('취소되었습니다.');
    location.href = '/adopt/adopt';
  } else {
    console.log('취소하지 않았습니다.');
  }
}

// 썸머노트 크기 및 튜닝
$(function () {
  const maxLength = 1000;

  $("#contents").summernote({
    width: 780,                   // 가로값 설정
    minHeight: 500,               // 높이값 설정
    maxHeight: 500,
    placeholder: "내용을 입력해주세요", // 안내 문구 설정
    disableDrageAndDrop: true,    // 드래그 비활성화
    focus: true,                  // 초기화 후 커서가 편집 가능한 영역에 포커스를 맞춤
    lang: 'ko-KR',                // 한글 설정
    toolbar: [
      ['insert', ['picture']],
      ['fontSize', ['fontsize']],
      ['fontName', ['fontname']],
      ['style', ['bold', 'italic', 'underline', 'strikethrough', 'clear']],
      ['color', ['forecolor', 'backcolor']],
      ['para', ['ul', 'ol', 'paragraph']],
      ['table', ['table']],
      ['insert', ['link', 'video']],
      ['view', ['fullscreen', 'codeview', 'help']]
    ],
    callbacks: {
    }
  });
});



{
  let adoptPageBtn = document.getElementById('adoptPage');
  adoptPageBtn.addEventListener('click', function () {
    location.href = '/adopt/adopt';
  });
}

{
  let protectPageBtn = document.getElementById('protectPage');
  protectPageBtn.addEventListener('click', function () {
    location.href = '/adopt/protect';
  });
}

{
  let reviewPageBtn = document.getElementById('reviewPage');
  reviewPageBtn.addEventListener('click', function () {
    location.href = '/adopt/review';
  });
}

// 폼 제출 시 제목이나 내용이 비었을 경우 경고창 표시
function validatePostForm() {
  var title = document.getElementById("subject").value;
  var content = document.getElementById("contents").value;

  // 제목 또는 내용이 비어 있을 경우 경고창을 띄우고, 폼 제출을 막음
  if (title.trim() === "" || content.trim() === "") {
    alert("제목과 내용을 모두 입력해주세요.");
    return false; // 폼 제출을 막음
  }

  return true; // 폼 제출 허용
}

