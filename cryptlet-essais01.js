
function cryptlet() {
  if( document.activeElement && document.activeElement.type != undefined) {
	
		encrypt();
	}
	else {
		decrypt();
	}
}
function encrypt()
{
	console.log('encrypt');
	var ae = document.activeElement ;
	if( ae.type == 'textarea' || ae.type == 'text')
	{
		var s=ae.selectionStart,e=ae.selectionEnd;
		if( e>0 && e>s )
		{
			console.log("SEL: "+ s+", "+e);
			text = ae.value.substring(s,e);
			pass = prompt("Enter password :");
			code = sjcl.encrypt(pass, text);
			ae.value = ae.value.substring(0,s) + code + ae.value.substring(e);
		}
	}
}

function decrypt()
{
	console.log('decrypt');
	var code = '';
	if (window.getSelection) {
		code = window.getSelection().toString();
	} else if (document.getSelection) {
		code = document.getSelection().toString();
	} else if (document.selection) {
		code = document.selection.createRange().text;
	}
	console.log('code: '+code.length);
	if( code.length>0 )
	{
		pass = prompt("Enter password :");
		clear = sjcl.decrypt(pass, code);
		alert(clear);
	}
	
}

cryptlet();
