/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2022-04-19 19:19:18
 * @version $Id$
 */

 var selected = '1';

$('body').on('click', '.u-tab', (e)=>{
  slideDoor(e);
})

function slideDoor(e) {
  let t = e.currentTarget;
  let next = $(t).attr('id');
  $(t).parent().find('.focus').removeClass('focus');
  $(t).addClass('focus');
  let contentList = $(t).parent().next().children();
  contentList.map((index,item)=>{
  	let id = $(item).attr('id');
  	console.log(id);
  	if ( id === selected) {
  	  $(item).addClass('hide'); 
  	}
  	if ( id === next) {
  	  $(item).removeClass('hide'); 
  	}
  })
  selected = next;
}

