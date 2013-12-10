var _window = $(window),
    header = $('.header'),
    max = 50,
    padding = parseFloat(header.css('padding-top')),
    currentPadding = padding,
    scrollPos = _window.scrollTop();
    
_window.scroll(function() {  
   
    if (scrollPos < _window.scrollTop() && currentPadding < max) {
        header.css('padding', ++currentPadding + 'px 0');
    } else if (scrollPos > _window.scrollTop() && currentPadding > padding) {
        header.css('padding', --currentPadding + 'px 0');
    }
    
    if (_window.scrollTop() == 0)
        header.css('padding', padding + 'px 0');
    
    scrollPos = _window.scrollTop();
});