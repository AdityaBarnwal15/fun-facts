const facts = [
    "I have been passionate about acting since I was a child and have participated in numerous school plays and local theater productions.",
    "I am currently studying drama and theater arts to hone my acting skills and pursue a career in the entertainment industry.",
    "I enjoy exploring different acting techniques and have taken workshops in method acting and improvisation.",
    "I love watching classic films and studying the performances of legendary actors to learn and draw inspiration.",
    "In my free time, I write and perform my own monologues to practice and express my creativity."
];

document.getElementById('generate-fact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact-display').textContent = facts[randomIndex];
});
