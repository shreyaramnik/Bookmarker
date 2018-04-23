
document.getElementById("BMform").addEventListener("submit", saveBM)


function saveBM(e) {
 e.preventDefault();

    var siteName= document.getElementById('siteName').value;
    var url = document.getElementById("url").value;

     if (!siteName || !url ) {
       alert('please enter field');
       return false;
     }

    var site={
      name: siteName,
      URL : url
    };

    if(localStorage.getItem('BM') === null){
      var bookmarks = [];
      bookmarks.push(site);

     localStorage.setItem('BM', JSON.stringify(bookmarks));
   }
      else{
      var bookmarks= JSON.parse(localStorage.getItem('BM'));
     
       bookmarks.push(site);
       localStorage.setItem('BM', JSON.stringify(bookmarks));
      
      }
    document.getElementById('siteName').value="";
    document.getElementById("url").value="";
      
       fetchBM();       
    }


//Delete BM
function deleteBM(url) {
  var bookmarks = JSON.parse(localStorage.getItem('BM'));
  for(var i=0; i<bookmarks.length; i++){
    if(url== bookmarks[i].URL){
      bookmarks.splice(i, 1 );
    }
  }
    localStorage.setItem('BM', JSON.stringify(bookmarks));
  fetchBM();
}


//fetch bookmark
function fetchBM() {
  var bookmarks = JSON.parse(localStorage.getItem('BM'));
  var BMlist= document.getElementById('BMlist');
  BMlist.innerHTML = "";
    for(var i=0; i<bookmarks.length; i++){
     var url = bookmarks[i].URL;
      
       BMlist.innerHTML += '<div class="well">'+
                              '<h4>'+ bookmarks[i].name + '</h4>'+
                              '<a class="btn btn-default" target="_blank" href="'+url+'">Visit</a>   '+
                              '<a onclick="deleteBM(\'' + url+'\')" class=" btn btn-danger " href="#">Delete</a>';
                            

         
      }
      console.log(bookmarks)
     
    }
 




