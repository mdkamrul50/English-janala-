const loadLessons = () => {
  fetch('https://openapi.programming-hero.com/api/levels/all')
    .then((res) => res.json())
    .then((json) => displayLessons(json.data));
};

const loadLevelWord = (id)=>{
  const url = `https://openapi.programming-hero.com/api/level/${id}`
fetch(url)
.then(res=>res.json())
.then(data=>displayLevelWord(data.data))
}

const displayLevelWord = (word) =>{
const wordContainer = document.getElementById('word-container');
wordContainer.innerHTML = ""

if(word.length == 0){
  wordContainer.innerHTML = `
  <div class="space-y-4 text-center col-span-3">
  <img class="mx-auto" src="./assets/alert-error.png" alt="" />
    <p class="text-gray-500">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
    <h2 class="font-semibold text-3xl">নেক্সট Lesson এ যান</h2>
    </div>
  `;
}
word.forEach(word => {
  const card = document.createElement("div")
  card.innerHTML = `
  <div class="bg-white rounded-xl shadow-sm text-center py-10 space-y-5">
<h2 class="font-bold text-2xl">${word.word ? word.word : 'শব্দ পাওয়া যায় নি'}</h2>
<p class="text-xl font-medium">Meaning /Pronounciation</p>
<span  class="font-medium text-2xl">${word.meaning ? word.meaning : 'অর্থ পাওয়া যায়নি'} / ${word.pronunciation ? word.pronunciation : 'pronunciation পাওয়া যায় নি'}</span>
<div class="flex justify-between items-center px-8">
<button class="btn bg-[#1A91FF20] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
<button class="btn bg-[#1A91FF20] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
</div>
</div>
  `;
wordContainer.append(card)

});
}

const displayLessons = (Lessons) => {

  const levelContainer = document.getElementById('level-container');
  levelContainer.innerHTML = '';

  for (let lesson of Lessons) {
    const btnDiv = document.createElement('div');
    btnDiv.innerHTML = `
    <button onclick="loadLevelWord(${lesson.level_no})" class=" btn btn-outline btn-primary"><i class="fa-brands fa-leanpub"></i></i>Lesson ${lesson.level_no}</button>
    `;

    levelContainer.append(btnDiv);
  }
};

loadLessons();
