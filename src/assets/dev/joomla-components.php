<!--JOOMLA HEAD-->
<jdoc:include type="head" />

<!--JOOMLA MESSAGE-->
<jdoc:include type="message" />

<!--JOOMLA COMPONENT-->
<jdoc:include type="component" />

<!--JOOMLA MODULE POSITION: 00000-->
<jdoc:include type="modules" name="00000" style="nowrap" />

<!--JOOMLA MODULE POSITION: 00000 (in compontent)-->
<?php
	jimport( 'joomla.application.module.helper' );
	$modules = JModuleHelper::getModules('00000');
	$attribs['style'] = 'nowrap';

	foreach($modules as $module){
		echo JModuleHelper::renderModule($module, $attribs);
	}
?>


<?php
	// com_fieldsattach field init
	JLoader::register('fieldattach', 'components/com_fieldsattach/helpers/fieldattach.php');
?>
<!--COM_FIELDSATTACH FIELD VALUE: id=1 -->
<?php fieldattach::getFieldValue($this->item->id, 1, false);?>


<?php if ($is_home_page) { ?>
<?php } else { ?>
<?php } ?>

<?php if (in_array($menu_ID, array(
	'menu-id-388',
	'menu-id-389',
	'menu-id-390',
	'menu-id-391',
	'menu-id-392',
	'menu-id-393'
))) { ?>
<?php } else { ?>
<?php } ?>

<!--REQUIRE: blocks/00000/00000.php-->
<?php require(__DIR__ . '/partials/00000/00000.php'); ?>
<?php require($_SERVER['DOCUMENT_ROOT'] . '/' . $base_URL . '/blocks/00000/00000.php'); ?>

<!-- подключение файлов перед компонентами джумлы -->
$current_styles     = array(
						JURI::root() . $current_path . $current_block_name . '.css' => array(
							//'mime' => 'text/css',
							//'media' => '',
							//'attribs' => ''
						)
					);
$current_scripts    = array(
						JURI::root() . $current_path . $current_block_name . '.js' => array(
							//'mime' => 'text/javascript'
						)
					);

$this->_styleSheets = array_merge($current_styles, $this->_styleSheets);
$this->_scripts = array_merge($current_scripts, $this->_scripts);
