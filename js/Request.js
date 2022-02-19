"use strict";

class Request
{
	static encode (uri) {
		return encodeURI(uri);
	}
	static decode (uri) {
		return decodeURI(uri);
	}

	static esc (req) {
		return req.replace(/\+/g,' ').
						replace(/%2C/g,',').
						replace(/%3A/g,':').  
						replace(/%20/g,' ').
						replace(/%40/g,'@');
	}

	static exist (p) {
		return location.href.indexOf('?') > 1 && location.href.indexOf(`${p}=`) > 1;
	}
	static write (req) {
		location.href = req;
	}	
	static append (p) {
		return 1;
		if (location.href.split('?').length > 1) {
			location.href += '&' + p;
		} else {
			location.href += '?' + p;
		}
	}
	static read (p) {
		const url = location.href;
		if (url.indexOf('?') > 1) {
			let q = url.split('?')[1];
			if (typeof p !== 'undefined') {
				let arr = q.split('&');
				for (let e of arr) {
					if (p == e.split('=')[0]) {
						return this.decode(e.split('=')[1]);
					}
				}
			}
			return q;
		}
	}

	static meta() {
		const url = location.href, res = {};
		let p = url.split('/');
		p.pop(); 
		let q = url.split('&'), obj = {};
		q[0] = q[0].split('?')[1];
		for (let e of q) {
			obj[e.split('=')[0]] = e.split('=')[1];
		}
		return {path: p, query: obj}
	}

	static ajax(endpoint, params, callback) {
		let query = endpoint+ '?' +params; // p1=x&p2=y
		let xhttp = window.XMLHttpRequest? new XMLHttpRequest(): new ActiveXObject('Microsoft.XMLHTTP');
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200)
				callback(this.responseText);
		};
		xhttp.open('GET', query, true);
		xhttp.send();
	}
}