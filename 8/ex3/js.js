/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2022-04-19 19:41:11
 * @version $Id$
 */
var num = 0;

$('body').on('click', '.u-add', (e) => {
  Add(e);
})

$('body').on('click', '.u-del', (e) => {
  Del(e);
})

function Add(e) {
  let t = e.currentTarget;
  let item = `<div class="u-content"><div class="u-no">${++num}</div><div class="u-info"></div><div class="u-del">Delete</div></div>`
  $(t).prev().append(item);
}

function Del(e) {
  let t = e.currentTarget;
  $(t).parent().remove();
  num --;
  upload();
}

function upload() {
  let contentList = $('.m-data').children();
  let i = num;
  contentList.map((index,item)=>{
  	$(item).find('.u-no').text(num - (--i));
  })
}
