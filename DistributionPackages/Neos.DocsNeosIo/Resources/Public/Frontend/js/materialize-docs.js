(function($) {
  $(function() {
    var window_width = $(window).width();

    // convert rgb to hex value string
    function rgb2hex(rgb) {
      if (/^#[0-9A-F]{6}$/i.test(rgb)) {
        return rgb;
      }

      rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

      if (rgb === null) {
        return 'N/A';
      }

      function hex(x) {
        return ('0' + parseInt(x).toString(16)).slice(-2);
      }

      return '#' + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }

    $('.dynamic-color .col').each(function() {
      $(this)
        .children()
        .each(function() {
          var color = $(this).css('background-color'),
            classes = $(this).attr('class');
          $(this).html('<span>' + rgb2hex(color) + ' ' + classes + '</span>');
          if (classes.indexOf('darken') >= 0 || $(this).hasClass('black')) {
            $(this).css('color', 'rgba(255,255,255,.9');
          }
        });
    });

    // Floating-Fixed table of contents
    setTimeout(function() {
      var tocWrapperHeight = 260; // Max height of ads.
      var tocHeight = $('.toc-wrapper .table-of-contents').length
        ? $('.toc-wrapper .table-of-contents').height()
        : 0;
      var socialHeight = 95; // Height of unloaded social media in footer.
      var footerOffset = $('body > footer').first().length
        ? $('body > footer')
            .first()
            .offset().top
        : 0;
      var bottomOffset = footerOffset - socialHeight - tocHeight - tocWrapperHeight;

      if ($('nav').length) {
        $('.toc-wrapper').pushpin({
          top: $('nav').height(),
          bottom: bottomOffset
        });
      } else if ($('#index-banner').length) {
        $('.toc-wrapper').pushpin({
          top: $('#index-banner').height(),
          bottom: bottomOffset
        });
      } else {
        $('.toc-wrapper').pushpin({
          top: 0,
          bottom: bottomOffset
        });
      }
    }, 100);


    // Toggle Flow Text
    var toggleFlowTextButton = $('#flow-toggle');
    toggleFlowTextButton.click(function() {
      $('#flow-text-demo')
        .children('p')
        .each(function() {
          $(this).toggleClass('flow-text');
        });
    });

    //    Toggle Containers on page
    var toggleContainersButton = $('#container-toggle-button');
    toggleContainersButton.click(function() {
      $('body .browser-window .container, .had-container').each(function() {
        $(this).toggleClass('had-container');
        $(this).toggleClass('container');
        if ($(this).hasClass('container')) {
          toggleContainersButton.text('Turn off Containers');
        } else {
          toggleContainersButton.text('Turn on Containers');
        }
      });
    });


    // Set checkbox on forms.html to indeterminate
    var indeterminateCheckbox = document.getElementById('indeterminate-checkbox');
    if (indeterminateCheckbox !== null) indeterminateCheckbox.indeterminate = true;

    // Pushpin Demo Init
    if ($('.pushpin-demo-nav').length) {
      $('.pushpin-demo-nav').each(function() {
        var $this = $(this);
        var $target = $('#' + $(this).attr('data-target'));
        $this.pushpin({
          top: $target.offset().top,
          bottom: $target.offset().top + $target.outerHeight() - $this.height()
        });
      });
    }

    // CSS Transitions Demo Init
    if ($('#scale-demo').length && $('#scale-demo-trigger').length) {
      $('#scale-demo-trigger').click(function() {
        $('#scale-demo').toggleClass('scale-out');
      });
    }

    // Plugin initialization
    $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true,
      onCycleTo: function(item, dragged) {}
    });
    $('.collapsible').collapsible();
    $('.collapsible.expandable').collapsible({
      accordion: false
    });

    $('.dropdown-trigger').dropdown();
    $('.slider').slider();
    $('.parallax').parallax();
    $('.materialboxed').materialbox();
    $('.modal').modal();
    $('.scrollspy').scrollSpy();
    $('.datepicker').datepicker();
    $('.tabs').tabs();
    $('.timepicker').timepicker();
    $('.tooltipped').tooltip();
    $('select')
      .not('.disabled')
      .formSelect();
    $('.sidenav').sidenav();
    $('.tap-target').tapTarget();
    $('input.autocomplete').autocomplete({
      data: { Apple: null, Microsoft: null, Google: 'http://placehold.it/250x250' }
    });
    $('input[data-length], textarea[data-length]').characterCounter();

    // Swipeable Tabs Demo Init
    if ($('#tabs-swipe-demo').length) {
      $('#tabs-swipe-demo').tabs({ swipeable: true });
    }

    // Chips
    $('.chips').chips();
    $('.chips-initial').chips({
      readOnly: true,
      data: [
        {
          tag: 'Apple'
        },
        {
          tag: 'Microsoft'
        },
        {
          tag: 'Google'
        }
      ]
    });
    $('.chips-placeholder').chips({
      placeholder: 'Enter a tag',
      secondaryPlaceholder: '+Tag'
    });
    $('.chips-autocomplete').chips({
      autocompleteOptions: {
        data: {
          Apple: null,
          Microsoft: null,
          Google: null
        }
      }
    });

    // Fab
    $('.fixed-action-btn').floatingActionButton();
    $('.fixed-action-btn.horizontal').floatingActionButton({
      direction: 'left'
    });
    $('.fixed-action-btn.click-to-toggle').floatingActionButton({
      direction: 'left',
      hoverEnabled: false
    });
    $('.fixed-action-btn.toolbar').floatingActionButton({
      toolbarEnabled: true
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space