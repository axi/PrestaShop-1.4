/* * 2007-2013 PrestaShop * * NOTICE OF LICENSE * * This source file is subject to the Open Software License (OSL 3.0) * that is bundled with this package in the file LICENSE.txt. * It is also available through the world-wide-web at this URL: * http://opensource.org/licenses/osl-3.0.php * If you did not receive a copy of the license and are unable to * obtain it through the world-wide-web, please send an email * to license@prestashop.com so we can send you a copy immediately. * * DISCLAIMER * * Do not edit or add to this file if you wish to upgrade PrestaShop to newer * versions in the future. If you wish to customize PrestaShop for your * needs please refer to http://www.prestashop.com for more information. * *  @author PrestaShop SA <contact@prestashop.com> *  @copyright  2007-2013 PrestaShop SA *  @license    http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0) *  International Registered Trademark & Property of PrestaShop SA*/function popup1x(){ 	var win2 = window.open('http://www.kwixo.com/static/payflow/html/popup-1x.htm','WIKwixo','toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no,resizable=yes, width=820, height=800'); }function popuprnp1xrnp(){ 	var win2 = window.open('http://www.kwixo.com/static/payflow/html/popup-1x-rnp.htm','WIKwixo','toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no,resizable=yes, width=820, height=800'); }function popuprnp3x(){ 	var win2 = window.open('http://www.kwixo.com/static/payflow/html/popup-3x.htm','WIKwixo','toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no,resizable=yes, width=820, height=800');}function popupsimulcred(urlsimul){	var win2 = window.open(urlsimul,'WIKwixo','toolbar=no, location=no, directories=no, status=no,menubar=no, scrollbars=no, resizable=yes, width=550, height=714');}function ShowHide(){		var div = document.getElementById('kwixo_log');	if(div.style.display=="none") { 		div.style.display = "block"; 	} else { 		div.style.display = "none";	}}function executeTagline(){		var id_order = $("#id_order").attr('value');	var tid = $("#tid").attr('value');	var token = $("#token_kwixo").attr('value');		$("#info_tagline").hide();	$("#loader_tagline").show();		$.ajax({		url: '../modules/kwixo/tagline.php', 		type:'POST', 		data: "id_order="+id_order+"&tid="+tid+"&token="+token+"",		cache:false, 		success:function(reponse){							var elem = reponse.split('__');			$("#date_tagline").empty();			$("#tag").empty();			$("#date_tagline").append(elem[1]);			$("#tag").append(elem[0]);			$("#loader_tagline").hide();			$("#info_tagline").show();			},		error:function(XMLHttpRequest, textStatus, errorThrown){			alert(textStatus);		}	})}