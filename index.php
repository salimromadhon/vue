<?php
$p = (isset($_GET['p'])) ? 'pages/'.htmlentities($_GET['p']).'.html' : NULL;
$content = '';

if ($p == NULL OR !file_exists($p)) {
	$pages = glob('pages/*.html');

	$content .= '<h1>Vue Experiments</h1>';
	$content .= '<ul>';
	foreach ($pages as $page) {
		$page = explode('/', $page);
		$page = $page[count($page)-1];
		$page = explode('.', $page);
		$slug = '';

		for($i = 0; $i < count($page)-1; $i++) {
			$slug .= '.'.$page[$i];
		}
		$slug = trim($slug, '.');

		$content .= '<li><a href="'.$slug.'">'.$slug.'</a></li>';
	}
	$content .= '</ul>';
} else {
	$content .= file_get_contents($p);
}
?>
<!DOCTYPE html>
<html>
<head>
	<title>Vue Experiments</title>
	<style type="text/css">
		body, pre, code {
			margin: 0 !important;
			padding: 0 !important;
		}
		.content {
			padding: 30px;
		}
		.navigation a {
			background-color: skyblue;
			color: white;
			text-align: center;
			padding: .2em 30px;
			display: block;
		}
		.source {
			background-color: #f5f2f0;
			padding: 30px;
		}
		a {
			color: blue;
			text-decoration: none;
			outline: none;
			cursor: pointer;
		}
	</style>
	<link rel="stylesheet" type="text/css" href="css/prism.css">
</head>
<body>

	<script type="text/javascript" src="vue/vue.js"></script>
	<div class="content">
		<?php echo $content; ?>
	</div>
	<?php if ($p != NULL AND file_exists($p)): ?>
		<div class="navigation"><a href=".">•••</a></div>
		<div class="source">
			<pre><code class="language-html"><?php echo htmlentities($content); ?></code></pre>
		</div>
	<?php endif; ?>
	<script type="text/javascript" src="js/jquery.js"></script>
	<script type="text/javascript" src="js/prism.js"></script>
</body>
</html>