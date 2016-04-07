define(['initr/module', 'jquery', 'vendor/jquery.waypoints.min', 'vendor/imagesloaded.pkgd.min'], function (Module, $, waypoint, imagesLoaded) {

    'use strict';

    /**
     * ScrollAnimations
     *
     * @version 1.1.0
     *
     * @param config
     * @param $els
     * @param initr
     * @constructor
     */
    function ScrollAnimations(config, $els, initr) {

        Module.apply(this, [config, $els, initr]);

        this.init();

    }

    ScrollAnimations.prototype = new Module();
    ScrollAnimations.prototype.constructor = ScrollAnimations;

    ScrollAnimations.prototype.init = function () {

        var containers = this.$els.filter('[data-animation-container]');
        var items = this.$els.not(containers);

        var images = new imagesLoaded('.page-wrapper', function() {

            //set single items
            animate(items);

            // setup animation sets
            containers.each(function() {
                animate($(this));
            });

        });

        function animate( items ) {
            items.each(function() {
                var $this = $(this),
                    $children = $(this).find('[data-animation-child]');

                if ($children.length > 0) {

                    // setup children
                    $children.each(function() {
                        var $child = $(this);
                        var $delay = $child.attr('data-animation-delay');

                        $child.css({
                            '-webkit-animation-delay':  $delay,
                            '-moz-animation-delay':     $delay,
                            '-ms-animation-delay':      $delay,
                            '-o-animation-delay':       $delay,
                            'animation-delay':          $delay
                        });
                    });

                } else {

                    var $delay = $(this).attr('data-animation-delay');

                    // setup single item
                    $this.css({
                        '-webkit-animation-delay':  $delay,
                        '-moz-animation-delay':     $delay,
                        '-ms-animation-delay':      $delay,
                        '-o-animation-delay':       $delay,
                        'animation-delay':          $delay
                    });

                }

                // create waypoint
                var waypoint = new Waypoint({
                    element: $this,
                    offset: '80%',
                    handler: function(direction) {
                        if (direction == 'down') {

                            if ($children.length > 0) {

                                // animate the children
                                $children.each(function() {
                                    $(this).addClass('animated').addClass( $(this).attr('data-animation') )
                                });

                            } else {

                                // animate the single item
                                $this.addClass('animated').addClass( $this.attr('data-animation') );

                            }

                        } // endif direction == down
                    }
                });
            })
        }

    };

    return ScrollAnimations;

});

