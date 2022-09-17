function save_option() {
  var goal = document.getElementById('goal').value;
  var limit = document.getElementById('limit').value;
  
  chrome.storage.sync.set({
    readingGoal: goal,
    readingLimit: limit
  }, function() {
    var status = document.getElementById('status').value;
    status.textContext = 'Your options have been saved.'
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
                         
function restore_options() {
  chrome.storage.sync.get({
    readingGoal: 3
  }, function(items) {
    document.getElementById('color').value = items.favoriteColor;
    document.getElementById('like').checked = items.likesColor;
  });
}
  
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
  
}
