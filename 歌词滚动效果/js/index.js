//将歌词转变成对象数组
function parseLrc() {
    let lines = lrc.split('\n');
    let result = [];
    for (let i = 0; i < lines.length; i++) {
        const str = lines[i];
        const parts = str.split(']');
        const timeStr = parts[0].substring(1);
        const obj = {
            time: parseTime(timeStr),
            words: parts[1]
        }
        result.push(obj)
    }
    return result;
}
/**
 * 将时间字符串解析为秒
 * @param {*} timeStr 时间字符串
 * @returns 秒
 */
function parseTime(timeStr) {
    let parts = timeStr.split(":");
    return (+parts[0] * 60 + +parts[1]);
    // 通过运算符+可将字符串直接转换为数字
}
const lrcData = parseLrc();
const doms = {
    audio: document.querySelector('audio'),
    ul: document.querySelector('.container ul'),
    container: document.querySelector('.container')
};
/**
 * 播放器播放到第几秒的情况
 * 计算出在当前情况下，应该高亮显示的歌词下标
 */
function findIndex() {
    const currTime = doms.audio.currentTime;
    for (let i = 0; i < lrcData.length; i++) {
        if (currTime < lrcData[i].time) {
            return i - 1;
        }
    }
    return lrcData.length - 1;
}

/**
 * 生成歌词列表
 */
function createLrcElements() {
    const frag = document.createDocumentFragment();//优化：使用文档片段，脱离dom树
    for (let i = 0; i < lrcData.length; i++) {
        const li = document.createElement('li');
        li.textContent = lrcData[i].words;
        frag.appendChild(li);
    }
    doms.ul.appendChild(frag);
}
createLrcElements();

const containerHeight = doms.container.clientHeight;
const ulHeight = doms.ul.clientHeight;
const liHeight = doms.ul.children[0].clientHeight;
const maxOffset = ulHeight - containerHeight;
/**
 * 设置ul的偏移量
 */
function setOffset() {
    const index = findIndex();
    let offset = liHeight * index + liHeight / 2 - containerHeight / 2;
    if (offset < 0) { offset = 0; }
    if (offset > maxOffset) { offset = maxOffset; }
    doms.ul.style.transform = `translateY(-${offset}px)`;
    let li = doms.ul.querySelector('.active');
    if (li) { li.classList.remove('active'); }
    // doms.ul.children[index].className='active';
    li = doms.ul.children[index];
    if (li) { li.classList.add('active'); }
}

doms.audio.addEventListener('timeupdate', setOffset)