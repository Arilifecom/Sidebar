const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');
const mainimg = document.querySelector('.mainimg');

toggleBtn.addEventListener('click', function (){
  // if(sidebar.classList.contains('show-sidebar')){
  //   sidebar.classList.remove('show-sidebar')
  // }else{
  //   sidebar.classList.add('show-sidebar');
  // }
  // toggleは(＂＂)内のクラスの有無を切り替える
  sidebar.classList.toggle('show-sidebar');
  mainimg.classList.toggle('hide-img');
});

closeBtn.addEventListener('click', function(){
  sidebar.classList.remove('show-sidebar')
  mainimg.classList.remove('hide-img')
});