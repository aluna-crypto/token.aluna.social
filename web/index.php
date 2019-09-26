<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Aluna Social - Multi-exchange Social Trading Terminal for Crypto Traders and Investors</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="icon" type="image/x-icon" href="/favicon.ico" />

  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:title" content="Aluna Social - Multi-exchange Social Trading Terminal for Crypto Traders and Investors">
  <meta property="og:description" content="A modern crypto-trading terminal, enabling traders to manage all their exchange accounts from one place while leveraging social features.">
  <meta property="og:url" content="http://alunacrypto.com">
  <meta property="og:image" content="https://aluna.social/img/og-image-landscape.jpg">

	<link rel="stylesheet" href="/css/main.css">
  <!-- Google Analytics -->
  <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-104081953-1', 'auto');
  ga('send', 'pageview');
  </script>
  <!-- End Google Analytics -->

	<script
	  src="https://code.jquery.com/jquery-3.4.1.min.js"
	  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
	  crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.js"></script>


	<script src="/assets/js/libs/three/three.js"></script>
	<script src="/assets/js/libs/three/js/WebGL.js"></script>
	<script type="x-shader/x-vertex" id="vertexshader">

		attribute float scale;

		void main() {

			vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );

			gl_PointSize = scale * ( 300.0 / - mvPosition.z );

			gl_Position = projectionMatrix * mvPosition;

		}

	</script>
	<script type="x-shader/x-fragment" id="fragmentshader">

		uniform vec3 color;

		void main() {

			if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.475 ) discard;

			gl_FragColor = vec4( color, 1.0 );

		}

	</script>

	<script src="/assets/js/main.js"></script>
</head>
<body class="home">
	<div id="wave"></div>
	<div class="wrapper"> <!-- // 294 -->
    <a href='https://aluna.social' target='_blank' style='text-decoration:none;color:#ffffff;'>
      <div style="text-align: center;width: 100%;height: 40px;background-color: #7247d3;color: #ffffff;padding-top: 14px;z-index: 9999; position: fixed;">
        Our trading platform is live! Join us at https://aluna.social!
      </div>
    </a>
		<div class="row row--header">
			<div class="header-row-inner">

				<a href="/"><div class="logo">
					Aluna
				</div></a>
				<div class="nav-handle nav-handle--open"> <!-- --expanded -->
					<div class="line line-1"></div>
					<div class="line line-2"></div>
					<div class="line line-3"></div>
				</div>

				<div class="overlay"> <!-- --expanded -->
					<div class="overlay-inner">

						<a href="/"><div class="logo">
							Aluna
						</div></a>
						<div class="nav-handle nav-handle--close"> <!-- --expanded -->
							Open Navigation
						</div>
						<div class="newsletter-block">
							<h3>Newsletter</h3>

							<form action="" method="POST" class="newsletter-signup">
								<div class="error-message"></div>
								<input name="email" type="text" placeholder="Your email">
								<input name="submit" type="submit" value="newsletter">
							</form>

							<h3 class="send-email">Send us an email</h3>

							<a class="email-link" href="mailto:supoport@aluna.social">support@aluna.social</a>

							<div class="social-icons">
								<a href="https://twitter.com/AlunaSocial" target="_blank" class="icon icon--twitter">twitter</a>
								<a href="https://www.linkedin.com/company/alunasocial" target="_blank" class="icon icon--linkedin">linkedin</a>
								<a href="https://medium.com/@aluna" target="_blank" class="icon icon--medium">medium</a>
								<a href="https://bitcointalk.org/index.php?topic=5131343" target="_blank" class="icon icon--bitcoin">bitcoin</a>
								<a href="https://t.me/alunasocial" target="_blank" class="icon icon--telegram">telegram</a>
								<a href="https://www.youtube.com/channel/UCYBt4Skw5m2z7CM4LdAMREw" target="_blank" class="icon icon--youtube">youtube</a>
								<a href="https://github.com/alunacrypto" target="_blank" class="icon icon--github">github</a>
							</div>
						</div>

						<div class="link-block">
							<a href="downloads/Aluna_Whitepaper_v1.1.pdf" target="_blank" class="arrow-move">
								<div class="text">Whitepaper</div>
								<span class="circle"></span>
								<div class="arrow"></div>
							</a>
							<a href="platform.html"  class="arrow-move">
								<div class="text">Platform</div>
								<span class="circle"></span>
								<div class="arrow"></div>
							</a>
							<a href="roadmap.html"  class="arrow-move">
								<div class="text">Roadmap</div>
								<span class="circle"></span>
								<div class="arrow"></div>
							</a>
							<a href="gamified-trading.html"  class="arrow-move">
								<div class="text">Gamified Trading</div>
								<span class="circle"></span>
								<div class="arrow"></div>
							</a>
							<a href="token.html"  class="arrow-move">
								<div class="text">ALN Token</div>
								<span class="circle"></span>
								<div class="arrow"></div>
							</a>
							<a href="https://blog.aluna.social/" target="_blank"  class="arrow-move">
								<div class="text">Blog</div>
								<span class="circle"></span>
								<div class="arrow"></div>
							</a>
							<a href="faqs.html"  class="arrow-move">
								<div class="text">FAQs</div>
								<span class="circle"></span>
								<div class="arrow"></div>
							</a>
							<!-- <a href="legal.html"  class="arrow-move">
								<div class="text">Legal</div>
								<span class="circle"></span>
								<div class="arrow"></div>
							</a> -->
							<a href="https://aluna.social/" target="_blank"  class="arrow-move">
								<div class="text">Join in</div>
								<span class="circle"></span>
								<div class="arrow"></div>
							</a>
						</div>



					</div> <!-- overlay inner -->
				</div>

			</div>
		</div>
		<div class="row row--hero">
			<div class="row-inner">
				<div class=""></div>
				<h2>
					<span>Trade</span>
					<span>Network</span>
					<span>Automate</span>
				</h2>
				<h3>All in one place.</h3>


				<div class="get-started">

					<a href="https://aluna.social/" class="circle-link ">
						<div class="text">GET STARTED</div>
						<span class="circle"></span>
						<div class="arrow"></div>
						<!-- <span class="circle">
							<div class="text">
								GE
							</div>
							<div class="inner-circle"></div>
						</span>
						<span class="after-circle">
							T STARTED
							<span class="arrow"></span>
						</span> -->
					</a>
				</div>
			</div>
		</div>

		<div class="row row--next-gen">
			<div class="row-inner">

				<h2 class="row-title">NEXT <br>GENERATION <br>TRADING</h2>

				<div class="video-box">
					<iframe src="https://www.youtube.com/embed/Q7F8iHGqBPM?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<div class="play" video-one-play></div>
					<img src="/assets/images/video-1.png" alt="">
				</div>

				<p><b>Aluna</b> combines the best of trading terminals and social networks to create the next-generation social trading platform. </p>

				<div class="learn-more">
					<a href="platform.html" class="circle-link">
						<div class="text">LEARN MORE</div>
						<span class="circle"></span>
						<div class="arrow"></div>
					</a>
				</div>
			</div>
		</div>

		<div class="row row--features">
			<div class="row-inner">

				<div class="feature-holder">
					<div class="feature feature--one">
						<div class="icon"><div class="icon-mask"><div class="icon-inner"></div></div></div>
						<div class="title">One-stop shop</div>
						<div class="text">Manage trades through a single interface <br>using our API trading execution engine.</div>
					</div>

					<div class="feature feature--two">
						<div class="icon"><div class="icon-mask"><div class="icon-inner"></div></div></div>
						<div class="title">Transparency</div>
						<div class="text">Follow signals from signal providers based <br>on actual trades and trading history.</div>
					</div>

					<div class="feature feature--three">
						<div class="icon"><div class="icon-mask"><div class="icon-inner"></div></div></div>
						<div class="title">Sentiment Analysis</div>
						<div class="text">Access curated sentiment data on the community’s inclinations and predictions.</div>
					</div>

					<div class="feature feature--four">
						<div class="icon"><div class="icon-mask"><div class="icon-inner"></div></div></div>
						<div class="title">Gamification</div>
						<div class="text">Experience gamified social trading as you climb the leaderboard or risk tokens to win rewards.</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row row--points">
			<div class="row-inner">

				<h2 class="row-title">EARN, <br>SPEND AND STAKE</h2>

				<p class="row-body">Social trading evolves with the introduction of our native <br><b>ALN token</b> economy, enabling predictions as a core feature and establishing a community incentivised to share data.</p>

				<div class="animation" id="wp-one">
					<div class="ring-1"></div>
					<div class="ring-2"></div>
					<div class="ring-3"></div>

					<div class="middle"></div>

					<div class="orbit">
						<div class="satelite satelite--earn">
							<div class="inner"></div>
						</div>
						<div class="satelite satelite--spend">
							<div class="inner"></div>
						</div>
						<div class="satelite satelite--stake">
							<div class="inner"></div>
						</div>
					</div>

				</div>

				<div class="points">
					<div class="point">
						Earn ALN by building reputation through contributing to the platform and community.
					</div>
					<div class="point">
						Spend ALN on the platform to get discounted or free access to premium features.
					</div>
					<div class="point">
						Stake ALN in a gamified environment to back your opinions and predictions about the market.
					</div>
				</div>

				<div class="learn-more">
					<a href="gamified-trading.html" class="circle-link">
						<div class="text">LEARN MORE</div>
						<span class="circle"></span>
						<div class="arrow"></div>
					</a>
				</div>
			</div>
		</div>


		<div class="row row--news-signup">
			<div class="row-inner">
				<div class="info">
					<h3>HEAR IT FROM US FIRST</h3>
					<p>Sign up to our newsletter</p>
				</div>

				<form action="" method="POST" class="newsletter-signup">
					<div class="error-message"></div>
					<input name="email" type="text" placeholder="Your email">
					<input name="submit" type="submit" value="newsletter">
				</form>
			</div>
		</div>

		<div class="row row--team">
			<div class="row-inner">

				<h2 class="row-title">TEAM</h2>

				<div class="team-members">

					<div class="member">
						<div class="portrait">
							<img src="/assets/images/staff-alvin.png" alt="">
						</div>
						<div class="name">Alvin Lee</div>
						<div class="title">Co-founder</div>
						<div class="links">
							<a href="https://www.linkedin.com/in/alvinleehe/" target="_blank" class="link link--linkedin"></a>
							<a href="https://twitter.com/onemanatatime?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5E author" target="_blank" class="link link--twitter"></a>
						</div>
					</div>

					<div class="member">
						<div class="portrait">
							<img src="/assets/images/staff-henrique.png" alt="">
						</div>
						<div class="name">Henrique Matias</div>
						<div class="title">Co-founder</div>
						<div class="links">
							<a href="https://www.linkedin.com/in/henriquematias/" target="_blank" class="link link--linkedin"></a>
							<a href="https://github.com/hems" target="_blank" class="link link--github"></a>
						</div>
					</div>

					<div class="member">
						<div class="portrait">
							<img src="/assets/images/staff-anderson.png" alt="">
						</div>
						<div class="name">Anderson Arboleya</div>
						<div class="title">CTO</div>
						<div class="links">
							<a href="https://www.linkedin.com/in/andersonarboleya/" target="_blank" class="link link--linkedin"></a>
							<a href="https://github.com/arboleya" target="_blank" class="link link--github"></a>
						</div>
					</div>

					<div class="member">
						<div class="portrait">
							<img src="/assets/images/staff-bernardo.png" alt="">
						</div>
						<div class="name">Bernardo Bonanca</div>
						<div class="title">Frontend Engineer</div>
						<div class="links">
							<a href="https://www.linkedin.com/in/bernardobonanca/" target="_blank" class="link link--linkedin"></a>
							<a href="https://github.com/benskz" target="_blank" class="link link--github"></a>
						</div>
					</div>

					<div class="member">
						<div class="portrait">
							<img src="/assets/images/staff-alex.png" alt="">
						</div>
						<div class="name">Alex Beltechi</div>
						<div class="title">Product Designer</div>
						<div class="links">
							<a href="https://www.linkedin.com/in/beltechi/" target="_blank" class="link link--linkedin"></a>
							<a href="https://www.beltechi.com/" target="_blank" class="link link--website"></a>
						</div>
					</div>

					<div class="member">
						<div class="portrait">
							<img src="/assets/images/staff-filipe.png" alt="">
						</div>
						<div class="name">Filipe Dias</div>
						<div class="title">Full Stack Developer</div>
						<div class="links">
							<a href="https://www.linkedin.com/in/nosleepfilipe/" target="_blank" class="link link--linkedin"></a>
							<a href="https://github.com/nosleepfilipe" target="_blank" class="link link--github"></a>
						</div>
					</div>


				</div>
			</div>
		</div>

		<div class="row row--footer">
			<div class="footer-row-inner">
				<div class="footer-emblem"></div>

				<div class="footer-logo"></div>

				<div class="footer-links">
					<a href="downloads/Aluna_Whitepaper_v1.1.pdf" target="_blank">
						WHITEPAPER
					</a>
					<a href="/">
						HOME
					</a>
					<a href="platform.html">
						PLATFORM
					</a>
					<a href="roadmap.html">
					  ROADMAP	
					</a>
					<a href="gamified-trading.html">
						GAMIFIED TRADING
					</a>
					<a href="token.html">
						ALN TOKEN
					</a>
          <a href="https://blog.aluna.social/" target="_blank">
           BLOG 
          </a>
					<a href="faqs.html">
						FAQs
					</a>
					<!-- <a href="legal.html">
						LEGAL
					</a> -->
					<a href="https://aluna.social/" target="_blank">
						JOIN IN
					</a>
				</div>

				<div class="social-icons">
					<a href="https://twitter.com/AlunaSocial" target="_blank" class="icon icon--twitter">twitter</a>
					<a href="https://www.linkedin.com/company/alunasocial" target="_blank" class="icon icon--linkedin">linkedin</a>
					<a href="https://medium.com/@aluna" target="_blank" class="icon icon--medium">medium</a>
					<a href="https://bitcointalk.org/index.php?topic=5131343" target="_blank" class="icon icon--bitcoin">bitcoin</a>
					<a href="https://t.me/alunasocial" target="_blank" class="icon icon--telegram">telegram</a>
					<a href="https://www.youtube.com/channel/UCYBt4Skw5m2z7CM4LdAMREw" target="_blank" class="icon icon--youtube">youtube</a>
					<a href="https://github.com/alunacrypto" target="_blank" class="icon icon--github">github</a>
					<a href="mailto:support@aluna.social" target="_blank" class="icon icon--mail">email</a>
				</div>

				<div class="copyright">&copy; 2019 Aluna Social. All rights reserved.</div>
			</div>
		</div>
	</div>



</body>
</html>
