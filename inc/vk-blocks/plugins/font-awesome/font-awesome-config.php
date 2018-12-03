<?php
/*-------------------------------------------*/
/*  Load modules
/*-------------------------------------------*/
if ( ! class_exists( 'Vk_Font_Awesome_Versions' ) ) {

	require dirname( __FILE__ ) . '/package/class-vk-font-awesome-versions.php';

	global $font_awesome_directory_uri;
	$font_awesome_directory_uri = plugins_url( 'package', __FILE__).'/';

	global $set_enqueue_handle_style;
	$set_enqueue_handle_style = 'vkExUnit_common_style';
}