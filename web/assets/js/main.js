$(function() {
    // console.log( "ready!" );


    //
    //
    //
    // Favicon tests
    //
    //
    //

    // if(matchMedia('(prefers-color-scheme: dark)').matches) {
    //  /* your dark mode code */
    //      console.log("is dark");
    // }

    // if(matchMedia('(prefers-color-scheme: light)').matches) {
    //  /* your dark mode code */
    //      console.log("is light");
    // }


    //
    //
    //
    // Newslettter signup
    //
    //
    //
    $('.newsletter-signup').submit(function( event ) {
        event.preventDefault();


        var $this = $(this);
        var input = $this.find('input[name="email"]');
        $.ajax({
            type: "get",
            url: '/subscribe.php?email=' + input.val(),
            // data: data,
            success: success,
        });

        function success(response) {
            var response = JSON.parse(JSON.parse(response));
            // console.log('test', response);

            if(response.errors.length > 0) {

                // console.log("fail", );
                $('.error-message').html('<div class="type type--error">' + response.errors[0].message + '</div>')
            } else {
                // console.log("win");
                $('[name="email"]').val('');
                $('.error-message').html('<div class="type type--success">Thank you for signing up! </div>')

            }
            setTimeout(function(){
                $('.error-message').html('');
            }, 4000)
        }
        
    });


    //
    //
    //
    // Header expander 
    //
    //
    //

    //main nav handle OPEN
    $('.row.row--header .nav-handle.nav-handle--open').on('click', function(){
    	var $handle = $('.row.row--header .nav-handle');
    	var $overlay = $('.row.row--header .overlay');

		$handle.addClass('nav-handle--expanded');

        // setTimeout(function(){

        // },500)
		$overlay.animate({ opacity: "0" }, 0 ).show().animate({ opacity: "1" }, 1500 );

    });

    //main nav handle "close"
    $('.row.row--header .nav-handle.nav-handle--close').on('click', function(){
        var $handle = $('.row.row--header .nav-handle');
        var $overlay = $('.row.row--header .overlay');



        $overlay.animate({ opacity: "0" }, 1500 )

        setTimeout(function(){
            $handle.removeClass('nav-handle--expanded');
            $overlay.hide();
        },1700)


    });

    //
    //
    //
    // Hovers
    //
    //
    //

    //head
    // $('a.arrow-move').mouseenter(function() {
    //     // $(this).show();

    //     // var $link = $(this);

    //     // if(!$link.hasClass('moving')) {

    //     //     $link.addClass('moving');

    //     //     $link.find('.circle').animate({
    //     //         width: '270px'
    //     //     }, 300, 'swing').animate({
    //     //         left: '205px',
    //     //         width: '50px'
    //     //     }, 300, 'swing', function(){
    //     //         $link.removeClass('moving');

    //     //         // console.log("COMPLETE: ", $link.is(":hover") );

    //     //         // if still hovered allow unhover 

    //     //         if($link.is(":hover")) {
    //     //             // still hovered, no rush
    //     //         } else {

    //     //             $link.find('.circle').animate({
    //     //                 width: '270px',
    //     //                 left: '-16px'
    //     //             }, 300, 'swing').animate({
    //     //                 width: '50px'
    //     //             }, 300, 'swing', function(){
    //     //                 $link.removeClass('moving');
    //     //             });
    //     //         }

    //     //         // if not hovered then run a "auto close" 
    //     //     });
    //     // }



    // }).mouseleave(function() {
    //     // $(this).hide();

    //     // var $link = $(this);

    //     // if(!$link.hasClass('moving')) {
    //     //     $link.addClass('moving');

    //     //     $link.find('.circle').animate({
    //     //         width: '270px',
    //     //         left: '-16px'
    //     //     }, 300, 'swing').animate({
    //     //         width: '50px'
    //     //     }, 300, 'swing', function(){
    //     //         $link.removeClass('moving');
    //     //     });
    //     //     // $(this).addClass('animate-out');
    //     // }


    // });








    //in site
    $('a.circle-link').mouseenter(function() {
        // $(this).show();

        var $link = $(this);

        var width_expanded = '215px';
        var width_normal = '50px';
        var move_left = '150px';
        var left_normal = '-25px';

        if($link.hasClass('long')) {
            var width_expanded = '315px';
            var move_left = '250px';
        }

        if(!$link.hasClass('moving')) {

            $link.addClass('moving');

            $link.find('.circle').animate({
                width: width_expanded
            }, 300, 'swing').animate({
                left: move_left,
                width: width_normal
            }, 300, 'swing', function(){
                $link.removeClass('moving');

                // console.log("COMPLETE: ", $link.is(":hover") );

                // if still hovered allow unhover 

                if($link.is(":hover")) {
                    // still hovered, no rush
                } else {

                    $link.find('.circle').animate({
                        width: width_expanded,
                        left: left_normal
                    }, 300, 'swing').animate({
                        width: width_normal
                    }, 300, 'swing', function(){
                        $link.removeClass('moving');
                    });
                }

                // if not hovered then run a "auto close" 
            });
        }



    }).mouseleave(function() {
        // $(this).hide();

        var $link = $(this);

        var width_expanded = '215px';
        var width_normal = '50px';
        var move_left = '150px';
        var left_normal = '-25px';      
        
        if($link.hasClass('long')) {
            var width_expanded = '315px';
            var move_left = '250px';
        }


        if(!$link.hasClass('moving')) {
            $link.addClass('moving');

            $link.find('.circle').animate({
                width: width_expanded,
                left: left_normal
            }, 300, 'swing').animate({
                width: width_normal
            }, 300, 'swing', function(){
                $link.removeClass('moving');
            });
            // $(this).addClass('animate-out');
        }


    });



    //
    //
    //
    // FAQ
    //
    //
    //
    $('.row.row--faq .faq-links a').on('click', function(){
        var $link = $(this);

        $('.row.row--faq .faq-links a').removeClass('selected');
        $link.addClass('selected');

        $('.row.row--faq .faq-items .item').each( function(item){
            var $item = $(this);

            var faqFor = $item.attr('data-for');

            if($link.attr('data-toggle') == 'all') {
                $item.show();
            } else {
                if(faqFor.includes($link.attr('data-toggle'))) {
                    $item.show();
                } else {
                    $item.hide();
                }
            }
        })
    })

    //
    //
    //
    // Countdown
    //
    //
    //

    if( $('.row--countdown').length > 0 ) {
        // Set the date we're counting down to
        var countDownDate = new Date("May 28, 2019 11:30:00").getTime();

        function setTime () {
                      // Get todays date and time
            var now = new Date().getTime();
            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            $('.row--countdown .days .value').html(days);
            $('.row--countdown .hours .value').html(hours);
            $('.row--countdown .mins .value').html(minutes);

            if(days == 1) {
                $('.row--countdown .days .label').html('DAY');
            }
            if(hours == 1) {
                $('.row--countdown .hours .label').html('HOUR');
            }
            if(minutes == 1) {
                $('.row--countdown .hours .label').html('MINUTE');
            }

            if (distance < 0) {

                $('.row--countdown .days .value').html('00');
                $('.row--countdown .hours .value').html('00');
                $('.row--countdown .mins .value').html('00');

            } else {
                setTimeout(function(){
                    setTime();
                }, 30000)
            }
        }

        //init
        setTime();

    }






    //
    //
    //
    // Waypoints
    //
    //
    //

    //
    // rainbow circles
    //
    // var pageOnecirles = $('.row--features').waypoint(function(direction) {
    //     console.log("features triggered");

    //     // $('#wp-one').addClass('armed');

    //     $('.row--features .feature--one, .row--features .feature--five').addClass('animate-in');

    //     setTimeout(function(){
    //         $('.row--features .feature--two, .row--features .feature--six').addClass('animate-in');
    //     },300)
    //     setTimeout(function(){
    //         $('.row--features .feature--three, .row--features .feature--seven').addClass('animate-in');
    //     },600)
    //     setTimeout(function(){
    //         $('.row--features .feature--four, .row--features .feature--eight').addClass('animate-in');
    //     },900)
    // }, {
    //     offset: '50%'
    // })


    //
    // One
    //
    // var pageOneOrbit = $('#wp-one').waypoint(function(direction) {

    //     $('#wp-one').addClass('armed');
    // }, {
    //     offset: '50%' //100
    // })

    var pageOneOrbitStepTwo = $('#wp-one').waypoint(function(direction) {

        $('#wp-one').addClass('triggered');

        setTimeout(function(){
            $('.satelite--spend').animate({
                opacity: 1
            }, 700);

        }, 3000)

        setTimeout(function(){
            $('.satelite--earn').animate({
                opacity: 1
            }, 700);

        }, 3800)

        setTimeout(function(){
            $('.satelite--stake').animate({
                opacity: 1
            }, 700);

        }, 4600)
    }, {
        offset: '50%' // 75
    })


    //
    // Roadmap
    //

    
    var roadmapItem = $('.item--last').waypoint(function(direction) {


        $('.item--last').addClass('triggered')
    }, {
        offset: '60%'
    })
    // var roadmapItems = [];
    // $('.roadmap-holder .item').each(function(index){

    //     roadmapItems[index] = $(this).waypoint(function(direction) {
    //             $(this.element).addClass('triggered');
    //         }, {
    //             offset: '75%'
    //     })
    // })


    //
    //
    // Page 4
    //
    //

    //
    // Reputation
    //
    var pageFourReputation = $('#wp-two .badges').waypoint(function(direction) {

        $('#wp-two .badges').addClass('triggered');
    }, {
        offset: '75%'
    })




    //
    // Gamified trading
    //
    var pageFourReputation = $('#gt-anim-1').waypoint(function(direction) {

        $('#gt-anim-1').addClass('triggered')
    }, {
        offset: '60%'
    })

    var pageFourReputation = $('#gt-anim-2').waypoint(function(direction) {

        $('#gt-anim-2').addClass('triggered')
    }, {
        offset: '60%'
    })

    //
    //
    // Page 5
    //
    //

    //
    // // Info band
    // //
    // window.odometerOptions = {
    //   duration: 10000, // Change how long the javascript expects the CSS animation to take
    //   animation: 'count'
    // };
    
    // var pageFourReputation = $('#wp-three').waypoint(function(direction) {

    //     $('#wp-three .odometer.first').html('0,000,000');

    //         $('#wp-three .odometer.second').html('3');            
    //     // setTimeout(function(){
    //     // }, 10000)
    // }, {
    //     offset: '105%'
    // })


    window.odometerOptions = {
      duration: 10000, // Change how long the javascript expects the CSS animation to take
    };
    
    var pageFourReputation = $('#wp-four').waypoint(function(direction) {

        $('#wp-four').addClass('triggered');
    }, {
        offset: '75%'
    })



    if( $('.row--features') ) {

        // rainbow circles 
        $( window ).scroll(function(e) {
            var currentScroll = $(window).scrollTop();
            var fiftyPercent = (window.innerHeight / 2);
            var trigger = currentScroll + fiftyPercent;

            $('.row--features').each(function(){
                var $this = $(this);
                var height = $this.height();
                var start = ($this.offset().top + 50);
                var bottom = (start + height + 0);


                if(trigger >= start) {
                    if(trigger > bottom) {
                        // console.log("passed")

                        $this.find('.icon').css('background-position', '50% 120px');
                    } else {
                        var reverse = -1 * (start - trigger);

                        var decimalPercent = (reverse/height);
                        // reverse = -120 - reverse;

                        var offset = (240 * decimalPercent) - 120;


                        // 120 to - 120
                        $this.find('.icon').css('background-position', '50% ' + offset + 'px');

                    }
                } else  {
                    $this.find('.icon').css('background-position', '50% -120px');
                }
            })
            // var offset 
          // $( "span" ).css( "display", "inline" ).fadeOut( "slow" );
        });
    }


    $('[video-one-play]').on('click', function(){
        var $this = $(this);
        var $videoHolder = $this.parent();

        $videoHolder.html('<iframe src="https://www.youtube.com/embed/Q7F8iHGqBPM?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');

        setTimeout(function(){
            $this.hide()
            $videoHolder.find('img').hide();
        }, 1000)
    })

    $('[video-two-play]').on('click', function(){
        var $this = $(this);
        var $videoHolder = $this.parent();

        $videoHolder.html('<iframe src="https://www.youtube.com/embed/NM82evAmw2I?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');

        setTimeout(function(){
            $this.hide()
            $videoHolder.find('img').hide();
        }, 1000)
    })

    $('[video-three-play]').on('click', function(){
        var $this = $(this);
        var $videoHolder = $this.parent();

        $videoHolder.html('<iframe src="https://www.youtube.com/embed/ZeUNDH3laAU?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');

        setTimeout(function(){
            $this.hide()
            $videoHolder.find('img').hide();
        }, 1000)
    })


    //
    //
    //
    // Read more
    // 
    //
    //

    $('.toggle-social-staking').on('click', function(event){

        if(window.innerWidth > 1024) {
            event.preventDefault();
            $('.full-modal').toggleClass('active');
        }
    })




    //
    ///
    /// PArticle effect 
    ///
    //

    if($('body').hasClass('home')) {

        if ( WEBGL.isWebGLAvailable() === false ) {

            // document.getElementById("wave").innerHTML( WEBGL.getWebGLErrorMessage() );

        }

        var SEPARATION = 110, AMOUNTX = 50, AMOUNTY = 22;

        var container, stats;
        var camera, scene, renderer;

        var particles, count = 0;

        var mouseX = 0, mouseY = 0;

        var windowHalfX = window.innerWidth / 2;
        var windowHalfY = window.innerHeight / 2;

        init();
        animate();

        function init() {

            container = document.createElement( 'div' );
            document.getElementById("wave").appendChild( container );

            camera = new THREE.PerspectiveCamera( 75, window.innerWidth / (window.innerHeight * 1), 1, 10000 );
            camera.position.z = -1500;
            camera.position.x = 1500;

            scene = new THREE.Scene();

            //

            var numParticles = AMOUNTX * AMOUNTY;

            var positions = new Float32Array( numParticles * 3 );
            var scales = new Float32Array( numParticles );

            var i = 0, j = 0;

            for ( var ix = 0; ix < AMOUNTX; ix ++ ) {

                for ( var iy = 0; iy < AMOUNTY; iy ++ ) {

                    positions[ i ] = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 ); // x
                    positions[ i + 1 ] = 0; // y
                    positions[ i + 2 ] = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 ); // z

                    scales[ j ] = 1;

                    i += 3;
                    j ++;

                }

            }

            var geometry = new THREE.BufferGeometry();
            geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
            geometry.addAttribute( 'scale', new THREE.BufferAttribute( scales, 1 ) );

            var material = new THREE.ShaderMaterial( {

                uniforms: {
                    color: { value: new THREE.Color( 0xaaaaaa ) },
                },
                vertexShader: document.getElementById( 'vertexshader' ).textContent,
                fragmentShader: document.getElementById( 'fragmentshader' ).textContent

            } );

            //

            particles = new THREE.Points( geometry, material );
            scene.add( particles );

            //

            renderer = new THREE.WebGLRenderer( { antialias: true } );
            renderer.setPixelRatio( window.devicePixelRatio );
            renderer.setSize( window.innerWidth, window.innerHeight );
            container.appendChild( renderer.domElement );


            window.addEventListener( 'resize', onWindowResize, false );

        }

        function onWindowResize() {

            windowHalfX = window.innerWidth / 2;
            windowHalfY = window.innerHeight / 2;

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize( window.innerWidth, window.innerHeight );

        }


        mouseX = windowHalfX * 0.5;
        mouseY = 10;


        function animate() {

            requestAnimationFrame( animate );

            render();
            // stats.update();

        }

        function render() {

            camera.position.x += ( mouseX - camera.position.x ) * .05;
            camera.position.y += ( - mouseY - camera.position.y ) * .05; // sets animation speeds
            camera.lookAt( scene.position );


            var positions = particles.geometry.attributes.position.array;
            var scales = particles.geometry.attributes.scale.array;

            var i = 0, j = 0;

            for ( var ix = 0; ix < AMOUNTX; ix ++ ) {

                for ( var iy = 0; iy < AMOUNTY; iy ++ ) {

                    positions[ i + 1 ] = ( Math.sin( ( ix + count ) * 0.3 ) * 50 ) +
                                    ( Math.sin( ( iy + count ) * 0.5 ) * 50 );

                    scales[ j ] = ( Math.sin( ( ix + count ) * 0.3 ) + 1 ) * 8 +
                                    ( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 8;

                    i += 3;
                    j ++;

                }

            }

            particles.geometry.attributes.position.needsUpdate = true;
            particles.geometry.attributes.scale.needsUpdate = true;

            renderer.render( scene, camera );

            count += 0.01;

        }

    }
});