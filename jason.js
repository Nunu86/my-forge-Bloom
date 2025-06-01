function runSearch(event) {
  let searchItem = event.target.value.toLowerCase();
  let theList = document.querySelector(`#list`);
  let li = theList.getElementsByTagName(`li`);

  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];
    if (
      a.innerHTML.toLowerCase().indexOf(searchItem.toLocaleLowerCase()) > -1
    ) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
let searchBar = document.querySelector(`#inputTab`);
searchBar.addEventListener("keyup", runSearch);
