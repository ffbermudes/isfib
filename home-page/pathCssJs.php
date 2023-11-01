<?php

function injetCssJss()
{
	if (is_page('Home'))
	{
		wp_register_style('css-home', get_stylesheet_directory_uri() . '/home-page/css/main.css');
		wp_enqueue_style('css-home');
	}
}

add_action('wp_enqueue_scripts', 'injetCssJss');

?>
