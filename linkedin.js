// New LinkedIn
function acceptInvite() {
  const acceptButtons = document.querySelectorAll('[data-control-name="accept"]');
  acceptButtons[0].click();

  window.setTimeout(acceptInvite, 1000);
}

// Legacy LinkedIn
function acceptInvites(loops) {

  function loadInvites() {
    var moreButtons = document.getElementsByClassName('see-more');
    moreButtons[0].click();
  }

  function clickButtons() {
    var acceptButtons = document.getElementsByClassName('bt-invite-accept');
    for (var i = 0; i < acceptButtons.length; i++) {
      let button = acceptButtons[i];
      window.setTimeout(() => {
        button.click();
      }, (100 * i));
    }
  }
  
  while(loops--) {
    window.setTimeout(() => {
      loadInvites();
      clickButtons();
    }, (1000 * loops));
  }
}
