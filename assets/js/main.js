$(document).ready(function() {
  // Variables
  var $burger = $('.headerBurger')
  var showingCrisp = false

  // Listeners
  $burger.on('click', function() { document.body.classList.toggle('-menu-opened') })
  $('#chat-button').on('click', openChat)

  // Functions
  function openChat(e) {
    $(document.body).addClass('-showingCrisp')
    e.preventDefault()
    $crisp.push(['do', 'chat:open'])
  }

  // Init
  $(document.documentElement).addClass('-jsReady')
})
