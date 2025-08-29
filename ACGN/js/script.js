// 获取所有.item元素
let items=document.querySelectorAll('.item');

// 设置选中态样式
function setActive(){
    // 遍历所有.item元素，移出active样式
    items.forEach((item)=>{
        item.classList.remove('active');
    })
    // 为当前选中项添加active样式
    this.classList.add('active');
}
// 遍历所有.item元素，分别为其设置点击事件
items.forEach((item)=>{
    item.addEventListener('mouseenter',setActive);
})

let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 1.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 0.5 + 'px';
});