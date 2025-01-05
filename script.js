function showAnswer(element) {
    const qnaDiv = element.closest('.qna');//looks for closest class name qna in
    if (!qnaDiv) return;//just in case for error handling

    const svg = qnaDiv.querySelector('svg');//select svg with respect to the qna class user selected
    const answerDiv = qnaDiv.querySelector('.answer');//look for class answer among th descends
    if (!answerDiv || !svg) return;

    // Check if the answer is already shown ,check if show class is there
    const ansVisible = answerDiv.classList.contains('show');
    if (!ansVisible) {
        //if answer is not visibile ,make it visible and change icon to "-"
        svg.innerHTML = '<path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/>';
        answerDiv.classList.add('show');
    } else {
        svg.innerHTML = '<path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/>';
        answerDiv.classList.remove('show');
    }
}
