let noclick = 0; // Initialize the noclick variable globally

function answer1(element) {
    const svg = element.querySelector('svg');
    const ans = document.getElementById("a1");

    if (noclick === 1) {
        svg.innerHTML = '<path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/>';
        ans.classList.toggle('show');
        noclick++; // Reset noclick after action
    } else if (noclick === 2) {
        svg.innerHTML ='<path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/>'
        noclick=0;
    }
    else{
        return alert("error")
    }
}
function answer2(element) {
    const svg = element.querySelector('svg');
    const ans = document.getElementById("a2");

    if (noclick === 1) {
        svg.innerHTML = '<path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/>';
        ans.classList.toggle('show');
        noclick = 0; // Reset noclick after action
    } else {
        noclick = 1; // Update noclick to 1 if not clicked
    }
}
function answer3(element) {
    const svg = element.querySelector('svg');
    const ans = document.getElementById("a3");

    if (noclick === 1) {
        svg.innerHTML = '<path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/>';
        ans.classList.toggle('show');
        noclick = 0; // Reset noclick after action
    } else {
        noclick = 1; // Update noclick to 1 if not clicked
    }
}
function answer4(element) {
    const svg = element.querySelector('svg');
    const ans = document.getElementById("a4");

    if (noclick === 1) {
        svg.innerHTML = '<path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/>';
        ans.classList.toggle('show');
        noclick = 0; // Reset noclick after action
    } else {
        noclick = 1; // Update noclick to 1 if not clicked
    }
}
function showAnswer(element) {
    const qnaDiv = element.closest('.qna');
    if (!qnaDiv) return;

    // Find the `.answer` within the same `.qna`
    const answerDiv = qnaDiv.querySelector('.answer');
    if (!answerDiv) return;

    // Perform any specific logic for answer4
    const answerId = answerDiv.id;
    if (answerId === "a1") {
        answer1(element);
    }
    else if (answerId === "a2") {
        answer2(element);

    }
    else if (answerId === "a3") {
        answer3(element);

    }
    else if (answerId === "a4") {
        answer4(element);
    }
    else{
        console.log(answerId,"doesnt exist");
    }
}

