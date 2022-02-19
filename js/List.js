"use strict";

class List 
{
  static BOOL = [null, 'Yes', 'No'];
  static ACTION = [null, 'INSERT', 'SELECT', 'UPDATE', 'DELETE'];
  static ADMIN = [null, 'Editor', 'Publisher', 'Administrator', 'Super Admin', 'Webmaster'];
  static USER = [null, 'Default User', 'Verified User', 'Subscribed User', 'Super User', 'Deactivated'];
  static TITLE = [null, 'Dr.', 'Esq.', 'Hon.', 'Jr.', 'Mr.', 'Mrs.', 'Ms.', 'Msgr.', 'Prof.', 'Rev.', 'Sr.', 'St.'];  
  static MARITAL = [null, 'Single', 'Married', 'Separated', 'Divorced', 'Widowed'];
  static RELIGION = [null, 'Christianity', 'Islam', 'Hinduism', 'Buddhism', 'Sikhism', 'Taoism', 'Judaism', 'Confucianism', 'Bahá\'í', 'Shinto', 'Jainism', 'Zoroastrianism', 'Others'];
  static RACE = [null, 'White/Caucasian', 'Mongoloid/Asian', 'Negroid/Black', 'Australoid'];
  static CONTINENT = [null, 'Africa', 'North/South America', 'Antarctica', 'Asia', 'Australia', 'Europe', 'Oceania'];
  static E_CHANNEL = [null, 'ATM/Quick Teller', 'Bank Transfer', 'Cash Deposit', 'Internet Banking', 'Mobile Transfer', 'Point-Of-Sale (POS)', 'SMS/USSD Code'];
  static COLOR = [null, 'red', 'pink', 'purple', 'indigo', 'light blue', 'cyan', 'green', 'light green', 'amber', 'orange', 'deep orange'];
  static HEXCODE = [null, '#9c27b0', '#e91e63', '#f44336', '#ff5722', '#009688', '#4caf50', '#3f51b5', '#2196f3', '#607d8b', '#ff9800', '#ffc107', '#795548'];
  static PAYMENT = [null, 'Pay on Delivery', 'Pay Online'];
  static DELIVERY = [null, 'Home Delivery', 'Pickup Station'];
  static TICKET = ['Queued', 'Opened', 'Closed', 'Priority'];
  static TRANSACTION = ['Pending', 'Approved', 'Declined'];
  static SHIPMENT = [null, 'Cancelled', 'Confirmed', 'Packaged', 'En-route', 'Critical', 'Arrived', 'Delivered', 'Returned'];    
  static AGE_GROUP = [null, '0 \u2013 12  (Adolescent)', '13 \u2013 18  (Teenager)', '19 \u2013 44  (Adult)', '45 \u2013 64  (Senior)', '65 \u2013 above  (Elder)'];
  static VALID_ID = [null, 'Affidavit', 'Age Declaration', 'Birth Certificate', 'Driver&#700;s License', 'HMO\/Hospital Card', 'Int&#700;l Travel Passport', 'National ID Card', 'Staff\/Student ID Card', 'Utility Bill', 'Voter&#700;s Card', 'Resident\/Work Permit'];
  static STATE = [null, 'Abia', 'Abuja', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'];
  static BANK = [null, 'Access Bank', 'Citi Bank', 'Diamond Bank (Access)', 'Ecobank', 'FCMB', 'Fidelity Bank', 'FirstBank', 'GTBank', 'Heritage Bank', 'Jaiz Bank', 'Jubilee Bank', 'Keystone Bank', 'Mainstreet Bank', 'Skye Bank (Polaris)', 'Stanbic IBTC', 'Standard Chartered Bank', 'Sterling Bank', 'Suntrust Bank', 'UBA', 'Union Bank', 'Unity Bank', 'WEMA Bank', 'Zenith Bank'];

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
  
  static GENDER = '{"0":"","M":"Male","F":"Female"}';
  static ERROR = '{"0":"","100":"ATTENTION","200":"SUCCESS","300":"WARNING","400":"DANGER","500":"CAUTION"}';
  static DEGREE = '{"0":"","WASSCE":"West African Secondary School Certificate Examination","GCE ":"General Certificate of Education","OND":"Ordinary National Diploma","NHD":"Higher National Diploma","LLB":"Bachelor of Law","B.Sc":"Bachelor of Science","PGD":"Post Graduate Diploma","PGDE":"Post Graduate Diploma in Education","M.Sc":"Master of Science","Ph.D":"Doctor of Philosophy"}';
  static COUNTRY = '{"0":"","AFG":"Afghanistan","ALA":"\u00c5land Islands","ALB":"Albania","DZA":"Algeria","ASM":"American Samoa","AND":"Andorra","AGO":"Angola","AIA":"Anguilla","ATA":"Antarctica","ATG":"Antigua and Barbuda","ARG":"Argentina","ARM":"Armenia","ABW":"Aruba","AUS":"Australia","AUT":"Austria","AZE":"Azerbaijan","BHS":"Bahamas","BHR":"Bahrain","BGD":"Bangladesh","BRB":"Barbados","BLR":"Belarus","BEL":"Belgium","BLZ":"Belize","BEN":"Benin","BMU":"Bermuda","BTN":"Bhutan","BOL":"Bolivia, Plurinational State","BES":"Bonaire, Sint Eustatius and Saba","BIH":"Bosnia and Herzegovina","BWA":"Botswana","BVT":"Bouvet Island","BRA":"Brazil","IOT":"British Indian Ocean Territory","BRN":"Brunei Darussalam","BGR":"Bulgaria","BFA":"Burkina Faso","BDI":"Burundi","KHM":"Cambodia","CMR":"Cameroon","CAN":"Canada","CPV":"Cape Verde","CYM":"Cayman Islands","CAF":"Central African Republic","TCD":"Chad","CHL":"Chile","CHN":"China","CXR":"Christmas Island","CCK":"Cocos (Keeling) Islands","COL":"Colombia","COM":"Comoros","COG":"Congo","COD":"Congo, the Democratic Republic of the","COK":"Cook Islands","CRI":"Costa Rica","CIV":"C\u00f4te d&#700;Ivoire","HRV":"Croatia","CUB":"Cuba","CUW":"Cura\u00e7ao","CYP":"Cyprus","CZE":"Czech Republic","DNK":"Denmark","DJI":"Djibouti","DMA":"Dominica","DOM":"Dominican Republic","ECU":"Ecuador","EGY":"Egypt","SLV":"El Salvador","GNQ":"Equatorial Guinea","ERI":"Eritrea","EST":"Estonia","ETH":"Ethiopia","FLK":"Falkland Islands (Malvinas)","FRO":"Faroe Islands","FJI":"Fiji","FIN":"Finland","FRA":"France","GUF":"French Guiana","PYF":"French Polynesia","ATF":"French Southern Territories","GAB":"Gabon","GMB":"Gambia","GEO":"Georgia","DEU":"Germany","GHA":"Ghana","GIB":"Gibraltar","GRC":"Greece","GRL":"Greenland","GRD":"Grenada","GLP":"Guadeloupe","GUM":"Guam","GTM":"Guatemala","GGY":"Guernsey","GIN":"Guinea","GNB":"Guinea-Bissau","GUY":"Guyana","HTI":"Haiti","HMD":"Heard Island and McDonald Islands","VAT":"Holy See (Vatican City State)","HND":"Honduras","HKG":"Hong Kong","HUN":"Hungary","ISL":"Iceland","IND":"India","IDN":"Indonesia","IRN":"Iran, Islamic Republic","IRQ":"Iraq","IRL":"Ireland","IMN":"Isle of Man","ISR":"Israel","ITA":"Italy","JAM":"Jamaica","JPN":"Japan","JEY":"Jersey","JOR":"Jordan","KAZ":"Kazakhstan","KEN":"Kenya","KIR":"Kiribati","PRK":"Korea, Democratic People&#700;s Republic","KOR":"Korea, Republic","KWT":"Kuwait","KGZ":"Kyrgyzstan","LAO":"Lao People&#700;s Democratic Republic","LVA":"Latvia","LBN":"Lebanon","LSO":"Lesotho","LBR":"Liberia","LBY":"Libya","LIE":"Liechtenstein","LTU":"Lithuania","LUX":"Luxembourg","MAC":"Macao","MKD":"Macedonia, the former Yugoslav Republic","MDG":"Madagascar","MWI":"Malawi","MYS":"Malaysia","MDV":"Maldives","MLI":"Mali","MLT":"Malta","MHL":"Marshall Islands","MTQ":"Martinique","MRT":"Mauritania","MUS":"Mauritius","MYT":"Mayotte","MEX":"Mexico","FSM":"Micronesia, Federated States","MDA":"Moldova, Republic","MCO":"Monaco","MNG":"Mongolia","MNE":"Montenegro","MSR":"Montserrat","MAR":"Morocco","MOZ":"Mozambique","MMR":"Myanmar","NAM":"Namibia","NRU":"Nauru","NPL":"Nepal","NLD":"Netherlands","NCL":"New Caledonia","NZL":"New Zealand","NIC":"Nicaragua","NER":"Niger","NGA":"Nigeria","NIU":"Niue","NFK":"Norfolk Island","MNP":"Northern Mariana Islands","NOR":"Norway","OMN":"Oman","PAK":"Pakistan","PLW":"Palau","PSE":"Palestinian Territory, Occupied","PAN":"Panama","PNG":"Papua New Guinea","PRY":"Paraguay","PER":"Peru","PHL":"Philippines","PCN":"Pitcairn","POL":"Poland","PRT":"Portugal","PRI":"Puerto Rico","QAT":"Qatar","REU":"R\u00e9union","ROU":"Romania","RUS":"Russian Federation","RWA":"Rwanda","BLM":"Saint Barth\u00e9lemy","SHN":"Saint Helena, Ascension and Tristan da Cunha","KNA":"Saint Kitts and Nevis","LCA":"Saint Lucia","MAF":"Saint Martin (French part)","SPM":"Saint Pierre and Miquelon","VCT":"Saint Vincent and the Grenadines","WSM":"Samoa","SMR":"San Marino","STP":"Sao Tome and Principe","SAU":"Saudi Arabia","SEN":"Senegal","SRB":"Serbia","SYC":"Seychelles","SLE":"Sierra Leone","SGP":"Singapore","SXM":"Sint Maarten (Dutch part)","SVK":"Slovakia","SVN":"Slovenia","SLB":"Solomon Islands","SOM":"Somalia","ZAF":"South Africa","SGS":"South Georgia and the South Sandwich Islands","SSD":"South Sudan","ESP":"Spain","LKA":"Sri Lanka","SDN":"Sudan","SUR":"Suriname","SJM":"Svalbard and Jan Mayen","SWZ":"Swaziland","SWE":"Sweden","CHE":"Switzerland","SYR":"Syrian Arab Republic","TWN":"Taiwan, Province of China","TJK":"Tajikistan","TZA":"Tanzania, United Republic","THA":"Thailand","TLS":"Timor-Leste","TGO":"Togo","TKL":"Tokelau","TON":"Tonga","TTO":"Trinidad and Tobago","TUN":"Tunisia","TUR":"Turkey","TKM":"Turkmenistan","TCA":"Turks and Caicos Islands","TUV":"Tuvalu","UGA":"Uganda","UKR":"Ukraine","ARE":"United Arab Emirates","GBR":"United Kingdom","USA":"United States","UMI":"United States Minor Outlying Islands","URY":"Uruguay","UZB":"Uzbekistan","VUT":"Vanuatu","VEN":"Venezuela, Bolivarian Republic","VNM":"Viet Nam","VGB":"Virgin Islands, British","VIR":"Virgin Islands, U.S.","WLF":"Wallis and Futuna","ESH":"Western Sahara","YEM":"Yemen","ZMB":"Zambia","ZWE":"Zimbabwe"';

  static trueList(list) {
    return Array.isArray(list)? list: JSON.parse(list);
  }
  static isKey(list, k) {
    if (k != null && k !== 'undefined') {
      const li = this.trueList(list);    
      k = k.toString();
      return Object.keys(li).includes(k);
    }
    return false;
  }
  static isValue(list, k) {
    if (k != null && k !== 'undefined') {
      const li = this.trueList(list);
      k = k.toString();
      return Object.values(li).includes(k);
    }
    return false;
  }
  static asAlt(list, k) {
    const li = this.trueList(list);
    k = k.toString();
    if (this.isKey(list, k))
      return li[k];
    else if (this.isValue(list, k)) {      
      for (let i in li) 
        if (li[i] == k)
          return i;
    }
    else
      return 'N/A';
  }    
  
  static asDL(list) {
    const li = this.trueList(list);
    var buf = '', e = '';
    for (let i in li) {
      e = li[i];
      if (e != 0 && e != null && e !== 'undefined')
        buf += `<option value="${e}" />`;
    }
    return buf;
  }

  static asDDL(list, k = '0') {
    const li = this.trueList(list);
    var e = '', buf = '';
    k = k.toString();
    for (let i in li) {
      e = li[i];
      if (e != 0 && e != null && e !== 'undefined') {
        if (k != 0 && k != null && k !== 'undefined' && k.toLowerCase() == i.toLowerCase())
          buf += `<option value="${i}" selected>${e}</option>`;
        else
          buf += `<option value="${i}">${e}</option>`;
      }
    }
    return buf;
  }
}

function testList() {
  tab(List.ACTION, JSON.parse(List.GENDER));
  dir(
    List.asDL(List.ACTION),
    List.asDL(List.GENDER),  
    List.asDDL(List.ACTION),
    List.asDDL(List.GENDER),
    List.asDDL(List.BOOL, 2),
    List.asDDL(List.GENDER, 'f'),    
    List.isKey(List.ACTION, 0),
    List.isKey(List.GENDER, 'm'),
    List.isValue(List.ACTION, 'INSERT'),
    List.isValue(List.GENDER, 'Male'),    
    List.asAlt(List.ACTION, 1),
    List.asAlt(List.GENDER, 'M'),
    List.asAlt(List.ACTION, 'SELECT'),
    List.asAlt(List.GENDER, 'Male'),        
  );
}
//testList();