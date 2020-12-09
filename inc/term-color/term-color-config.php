<?php
/**********************************************/
// Load modules
/**********************************************/

/*
色選択機能をつける対象のタームの指定

// ★★★★★★ 関数のprefixは固有のものに変更する事 ★★★★★★ */
add_filter( 'term_color_taxonomies_custom', 'vkblocks_term_color_taxonomies_custom' );
function vkblocks_term_color_taxonomies_custom( $taxonomies ) {
	// 存在するtaxonomiesを取得
	$args           = array( 'show_ui' => true );
	$get_taxonomies = get_taxonomies( $args );
	// term color を有効化する taxonomy の配列に追加
	foreach ( $get_taxonomies as $key => $value ) {
			$taxonomies[] = $value;
	}
	return $taxonomies;
}

	/*
	読み込みタイミングを init にしておかないと
	init で作成されたカスタム分類に対応できない
	★★★★★★ 関数のprefixは固有のものに変更する事 ★★★★★★
	*/

add_action( 'init', 'vkblocks_load_term_color' );
function vkblocks_load_term_color() {
	require_once( 'package/class.term-color.php' );
}
