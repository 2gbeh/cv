"use strict";

class Calendar 
{
  static get W() {return Array.from(Array(7).keys());}
	static get WW() {return this.DAY.map(e => e.slice(0,2));}
  static get WWW() {return this.DAY.map(e => e.slice(0,3));}
  static DAY = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];	
  static get D() {return Array.from(Array(32).keys());}
  static get DD() {return this.D.map(e => e < 10? `0${e}`: e);}
  static get M() {return Array.from(Array(13).keys());}
  static get MM() {return this.M.map(e => e < 10? `0${e}`: e);}  
  static get MMM() {return this.MONTH.map(e => e == undefined? null: e.slice(0,3));}
  static MONTH = [null, 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];  
  static H12 = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  static get HH12() {return this.H12.map(e => e < 10? `0${e}`: e);}  
  static get H24() {return Array.from(Array(24).keys());}
  static get HH24() {return this.H24.map(e => e < 10? `0${e}`: e);}
  static get I() {return Array.from(Array(60).keys());}
  static get II() {return this.I.map(e => e < 10? `0${e}`: e);}	

  constructor(dt = null) {
		// Ex. const c = new Calendar('1970-01-01T00:00:00');
    this.dt = dt == undefined? new Date(): new Date(dt); 
  }

  set date(dt) {
    this.dt = new Date(dt); // // Ex. new Calendar().date('1970-01-01T00:00:00');
  }  

  get date() {
    return this.dt; // Fri Nov 06 2020 21:04:22 GMT+0100 (West Africa Standard Time)
  }
	///////////////////////////////////////////////////////////////////////////////////
  get w() {
		return this.dt.getDay(); // 0 - 6
	}	
  get ww() {
		return Calendar.WW[this.w]; // Su - Sa
	}	
  get www() {
		return Calendar.WWW[this.w]; // Sun - Sat
	}	
  get day() {
		return Calendar.DAY[this.w]; // Sunday - Saturday
	}	
  get d() {
		return this.dt.getDate(); // 1 - 31
	}	
  get dd() {
		return Calendar.DD[this.d]; // 01 - 31
	}	
  get dth() {
		// *st, *nd, *rd, *th
		let n = this.d, z = n.toString().slice(-1), buf = '';
		if (z == 1 && n != 11) {
			buf = 'st';
		}	else if (z == 1 && n != 12) {
			buf = 'nd';
		}	else if (z == 1 && n != 13) {
			buf = 'rd';
		}	else {
			buf = 'th';
		}
		return n + buf;
	}	
  get m() {
		return this.dt.getMonth() + 1; // 1 - 12
	}
  get mm() {
		return Calendar.MM[this.m]; // 01 - 12
	}
  get mmm() {
		return Calendar.MMM[this.m]; // Jan - Dec
	}
  get month() {
		return Calendar.MONTH[this.m]; // January - December
	}
  get yy() {
		return this.yyyy.toString().slice(-2); // *92
	}	 
  get yyyy() {
		return this.dt.getFullYear(); // 1992
	}
  get h24() {
		return this.dt.getHours(); // 0 - 23
	}
  get hh24() {
		return Calendar.HH24[this.h24]; // 00 - 23
	}
  get h12() {
		return Calendar.H12[this.h24]; // 1 - 12
	}
  get hh12() {
		return Calendar.HH12[this.h24]; // 01 - 12
	}
  get i() {
		return this.dt.getMinutes(); // 0 - 59
	}	
  get ii() {
		return Calendar.II[this.i]; // 00 - 59
	}	
  get s() {
		return this.dt.getSeconds(); // 0 - 59
	}	
  get ss() {
		return Calendar.II[this.s]; // 00 - 59
	}
  get ms() {
		return this.dt.getMilliseconds(); // 0 - 999
	}	
  get mms() {
		const ms = this.ms; // 000 - 999
		if (ms < 10) return `00${ms}`;
		else if (ms >= 10 && ms < 100) return `0${ms}`;
		else return ms;
	}	
	get epoch() {
		return this.dt.getTime(); // secs since Jan 1, 1970
	}
	get ante() {		
		const hr = this.dt.getHours();
		return hr >= 0 && hr < 12? "AM": "PM"; // AM or PM
	}	
	get salute() {		
		const hr = this.dt.getHours();
		if (hr >= 0 && hr <= 11) return 'Good morning';
		else if (hr >= 12 && hr <= 16) return 'Good afternoon';
		else if (hr >= 17 && hr <= 20) return 'Good evening';
		else return 'Hello';
	}
	get ago_f () {
		/* 1970-01-01 <=> 52 years ago */
		const now = new Date();
		let	Y = this.yyyy, m = this.m, d = this.d,
				dif = now.getFullYear() - Y, buf = '';

		if (dif < 1) {
			dif = (now.getMonth() + 1) - m;
			if (dif < 1) {
				dif = now.getDate() - d;
				if (dif < 1) {					
					return 'today';
				} else if (dif == 1) {
					return 'yesterday';
				}	else {
					buf = 'days';
				}
			}	else {
				buf = dif > 1? 'months': 'month';
			}
		}	else {
			buf = (now.getMonth() + 13) - m;
			if (dif == 1 && buf < 12) {
				dif = buf;
				buf = buf > 1? 'months': 'month';
			} else {
				buf = dif > 1? 'years': 'year';
			}
		}
		return `${dif} ${buf} ago`;
	}	
	///////////////////////////////////////////////////////////////////////////////////
  date_f() {
    return `${this.yyyy}-${this.mm}-${this.dd}`; // 1970-01-01
  }
  time_f() {
    return `${this.hh24}:${this.ii}:${this.ss}`; // 00:00:00
  }	
  dt_f() {
    return `${this.date_f()} ${this.time_f()}`; // 1970-01-01 00:00:00
  }
  dt_f2() {
    return this.dt_f().replace(' ','T'); // 1970-01-01T00:00:00
  }
  dt_f3() {
    return this.dt_f().replaceAll('-','').replace(' ','').replaceAll(':',''); // 19700101000000
  }	
  date_t() {
    return `${this.www}, ${this.mmm} ${this.d}, ${this.yyyy}`; // Mon, Jan 1, 1970
  }
  time_t() {
    return `${this.hh12}:${this.ii} ${this.ante}`; // 12:00 AM
  }	
  dt_t() {
    return `${this.date_t()}<br/>${this.time_t()}`; // Mon, Jan 1, 1970\r\n12:00 AM
  }
  date_w() {
    return `${this.mmm} ${this.d}`; // Jan 1
  }
  time_w() {
    return `${this.hh24}:${this.ii}`; // 00:00
  }	
  date_uk() {
    return `${this.dd}/${this.mm}/${this.yyyy}`; // 01/31/1970
  }
  date_us() {
    return `${this.mm}/${this.dd}/${this.yyyy}`; // 31/01/1970
  }
	///////////////////////////////////////////////////////////////////////////////////
	isDate(date) {
		if (date !== undefined && isNaN(date)) {
			let arr = [];
			if (date.indexOf('/') > 0) {
				arr = date.split('/'); // Ex. 01/01/1970
				return arr[0].length == 2 && arr[1].length == 2 && arr[2].length == 4;
			}	else if (date.indexOf('-') > 0) {
				arr = date.split('-'); // Ex. 1970-01-01
				return arr[0].length == 4 && arr[1].length == 2 && arr[2].length == 2;
			}	else {
				return false;
			}
		}	else {
			return false;
		}
	}
	isTime(time) {
		if (time !== undefined && isNaN(time) && time.indexOf(':') > 0) {
			let arr = time.split(':'); // Ex. 00:00:00
			return arr[0].length == 2 && arr[1].length == 2 && arr[2].length == 2;
		}	else {
			return false;
		}
	}
	isTimestamp(dt) {
		if (dt !== undefined && isNaN(dt)) {
			let arr = [];
			if (dt.indexOf(' ') > 0) {
				arr = dt.split(' '); // Ex. 1970-01-01 00:00:00
				return this.isDate(arr[0]) && this.isTime(arr[1]);
			}	else if (dt.indexOf('T') > 0) {
				arr = dt.split('T'); // Ex. 1970-01-01T00:00:00
				return this.isDate(arr[0]) && this.isTime(arr[1]);
			}	else {
				return false;
			}
		}	else {
			return false;
		}
	}			
}