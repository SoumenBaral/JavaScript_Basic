function reversed(text)
{
    for (let i = text.length-1; i >=0; i--) {
        const element = text[i];
        console.log(element);
    }
}
const text = "ami to vala na vala loia thikoo";
const rev = reversed(text)
console.log(rev);