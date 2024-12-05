const value=document.querySelector(".val")
const btn=document.querySelector(".btn")
const text=document.querySelector('.text')
abjad=function(word){
    let number=0
    for (let i = 0; i < word.length; i++) {
        if (word[i]==="ا") {number+=1}
        if (word[i]==="ب" |word[i]==="پ") {number+=2}
        if (word[i]==="ج"||word[i]==="چ") {number+=3}
        if (word[i]==="د") {number+=4}
        if (word[i]==="ه") {number+=5}
        if (word[i]==="و") {number+=6}
        if (word[i]==="ز"||word[i]==="ژ") {number+=7}
        if (word[i]==="ح") {number+=8}
        if (word[i]==="ط") {number+=9}
        if (word[i]==="ی") {number+=10}
        if (word[i]==="ک" ||word[i]==="گ") {number+=20}
        if (word[i]==="ل") {number+=30}
        if (word[i]==="م") {number+=40}
        if (word[i]==="ن") {number+=50}
        if (word[i]==="س") {number+=60}
        if (word[i]==="ع") {number+=70}
        if (word[i]==="ف") {number+=80}
        if (word[i]==="ص") {number+=90}
        if (word[i]==="ق") {number+=100}
        if (word[i]==="ر") {number+=200}
        if (word[i]==="ش") {number+=300}
        if (word[i]==="ت") {number+=400}
        if (word[i]==="ث") {number+=500}
        if (word[i]==="خ") {number+=600}
        if (word[i]==="ذ") {number+=700}
        if (word[i]==="ض") {number+=800}
        if (word[i]==="ظ") {number+=900}
        if (word[i]==="غ") {number+=1000}
        
    }
    return number
}
btn.addEventListener("click",()=>{
    text.innerHTML=abjad(value.value)
})