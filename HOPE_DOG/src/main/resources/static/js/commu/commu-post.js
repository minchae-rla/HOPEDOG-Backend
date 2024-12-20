
//게시글 삭제
function deleteAlert() {
    const commuNo = document.querySelector('.commuNo').textContent.trim();

    if (confirm('정말 삭제하시겠습니까?')) {
        console.log('글이 삭제되었습니다.');
        console.log(commuNo);

        // fetch를 사용하여 DELETE 요청을 보냅니다.
        fetch(`/commu/commuDelete/${commuNo}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.status === 200) {  // 서버가 200 상태 코드를 반환하면 성공
                    // 삭제 성공 시 리다이렉트
                    window.location.href = '/commu/main';
                } else {
                    alert('삭제에 실패했습니다.'); // 실패 시 알림 표시
                }
            })
            .catch(error => {
                console.error('Error:', error); // 오류 메시지 출력
                alert('삭제 중 오류가 발생했습니다.'); // 오류 발생 시 알림 표시
            });
    }
}

//게시글 수정버튼
function modifyClick() {
    const commuNo = document.querySelector('.commuNo').textContent.trim(); // carNo를 HTML에서 가져옵니다.
    const commuWriter = document.querySelector('.commuWriter').textContent.trim(); // carNo를 HTML에서 가져옵니다.
    console.log(commuNo);
    console.log(commuWriter);

    if (confirm('정말 수정하시겠습니까?')) {
        console.log('수정페이지로 이동합니다.');
        // centerMemberNo와 memberNo를 둘 다 URL에 포함
        location.href = `/commu/commuModify?commuNo=${commuNo}&carWriter=${commuWriter}`;
    } else {
        console.log('신청서페이지로 이동하지 않습니다.');
    }
}

//게시글 신고버튼
    function ReportAlert() {
        const reportContent = prompt('신고사유를 100글자 이내로 입력해주세요');
        const commuNo = document.querySelector('.commuNo').textContent.trim();
        //commuNo인 요소에서 텍스트 내용 가져오고 commuNo 변수에 저장
        console.log(commuNo);

        location.href = `/commu/commuReport?commuNo=${commuNo}&reportContent=${encodeURIComponent(reportContent)}`;


    }

    //댓글 수정 버튼
    function modifyCommentBtnClick(index) {
        const commentBox1 = document.getElementById(`commu-comment-buttonBox-${index}`);
        const commentBox2 = document.getElementById(`commu-modifyInput-${index}`);
        const commentBox3 = document.getElementById(`commu-comment-${index}`);

        // 수정 버튼을 누르면 수정/삭제 div와 기존 댓글을 숨기고, 수정 입력창을 표시
        commentBox1.style.display = 'none';
        // 수정,삭제 버튼div
        commentBox3.style.display = 'none';
        //댓글 수정 입력창
        commentBox2.style.display = 'block';
        //기존 댓글 div
    }

function editCommentBtnClick(index) {
    const commentBox1 = document.getElementById(`commu-comment-buttonBox-${index}`); // 수정/삭제 버튼 div
    const commentBox2 = document.getElementById(`commu-modifyInput-${index}`);       // 댓글 수정하는 div
    const commentBox3 = document.getElementById(`commu-comment-${index}`);           // 기존 댓글

    // 수정한 댓글 값을 가져옴
    const modifiedComment = document.getElementById(`modifiedCommentInput-${index}`).value;

    // AJAX 요청을 통해 수정된 댓글을 서버로 전송
    const commuNo = document.getElementById(`commuNo-${index}`).value; // 게시글 번호
    const commuCommentNo = document.getElementById(`commuCommentNo-${index}`).value; // 댓글 번호

    fetch('/commu/commuCommentModi', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            commuNo: commuNo,
            commuCommentNo: commuCommentNo,
            commuComment: modifiedComment
        })
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // 서버에서 수정된 댓글을 받아서 화면에 갱신
                commentBox3.textContent = modifiedComment; // 기존 댓글을 수정된 댓글로 갱신
                commentBox1.style.display = 'block'; // 수정/삭제 div 표시
                commentBox3.style.display = 'block'; // 기존 댓글 표시
                commentBox2.style.display = 'none'; // 댓글 수정 입력창 숨기기
            } else {
                alert('댓글 수정에 실패했습니다.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('댓글 수정 요청에 문제가 발생했습니다.');
        });
}

    // 댓글삭제버튼
    function CommentDeleteClick(commuCommentNo, commuNo) {
        if (confirm('정말 삭제하시겠습니까?')) {
            // 삭제 요청을 위한 폼 생성
            const form = document.createElement('form');
            form.method = 'post'; // POST 방식
            form.action = `/commu/commuCommentDelete`; // URL 설정

            // commuCommentNo와 commuNo를 위한 input 요소 추가
            const commuCommentNoInput = document.createElement('input');
            commuCommentNoInput.type = 'hidden';
            commuCommentNoInput.name = 'commuCommentNo';
            commuCommentNoInput.value = commuCommentNo;
            form.appendChild(commuCommentNoInput);

            const commuNoInput = document.createElement('input');
            commuNoInput.type = 'hidden';
            commuNoInput.name = 'commuNo';
            commuNoInput.value = commuNo;
            form.appendChild(commuNoInput);

            // 폼 제출
            document.body.appendChild(form);
            form.submit(); // 폼 제출
        }
    }

 //댓글 신고 버튼
    function CommentReportClick() {
        const reportComment = prompt('신고사유를 100글자 이내로 입력해주세요');
        const commuNo = document.querySelector('.commuNo').textContent.trim();
        const commuCommentNo = document.querySelector('.commuCommentNo').textContent.trim();

        location.href = `/commu/commuCommentReport?commuNo=${commuNo}&reportComment=${encodeURIComponent(reportComment)}&commuCommentNo=${commuCommentNo}`;
    }


// 댓글 미입력 방지
function validateCommentForm() {
    const commentInput = document.querySelector('.comm-detail-commentregi');

    if (!commentInput.value.trim()) { // 입력 값이 비어 있거나 공백만 있을 때
        alert("댓글을 입력해 주세요.");
        return false; // 폼 제출 중단
    }
    return true; // 폼 제출 허용
}


