"use strict";
/* Object Literals */

// Shared State
const Context = {
	name: 'Ade Airline',
	alias: '<em>Ade Airline</em>',
  owner: 'HWP Labs',  
  contractor: 'Tugbeh Emmanuel',
	email: 'webmaster@hwplabs.com',  
  phone: '(+234)816-996-0927',
  address: '1, Liberty Way, Edo NG 300283',
	h1: 'Ade Airline',	
	h2: 'Flight Ticket Verification System',
	h3: 'Admin Portal',
	title: 'Ade Airline - Flight Ticket Verification System',
	summary: 'Design and implementation of flight reservation and ticketing system using photo identification.',
	keywords: '',
	copyright: '<address>Copyright &copy; 2017 <a href="https://www.facebook.com/hwplabs" target="_blank" rel="author" title="Visit Webmaster">HWP Labs.</a> <cite>CRBN 658815</cite></address>', 
  support: 'support@upanel.com',
	noreply: 'no-reply@upanel.com',
	mailto: 'mailto:dehphantom@yahoo.com',
	tel: 'tel:+2348169960927',
	wa: 'https://wa.me/2348169960927',
  ip: '127.0.0.1',
	domain: 'upanel.com',
  subdomain: '',
	url: 'https://2gbeh.github.io/ade-airline/',
  url_: 'https://2gbeh.github.io/ade-airline/',
	cpanel: '#',
	webmail: '#',
  phpmyadmin: '#',
	admin: '#',
	user: '#',
	index: 'index.html',
	login: 'index.html',
  error: '404.html',
	server: 'adeairli',
	db_name: 'adeairli_db',
	db_user: 'root',
	db_pass: '',
	admin_user: 'admin',
	admin_pass: '1234',	
  hosted: '2022-02-08',
	version: '2.8.2.22',
  theme: {orange: '#ff6c2c', blue:'#293a4a'},
	db: {
		admin: '[{"username":"admin","email":"admin@upanel.com","phone":null,"password":"1234","STATUS":"4","DATE":"2022-02-08 00:00:00","ID":"2"},{"username":"2gbeh","email":"webmaster@hwplabs.com","phone":"08169960927","password":"4444","STATUS":"5","DATE":"2022-02-08 00:00:00","ID":"1"}]',
		
		user: '[{"photo":"303.png","names":"chukwuyem glory","phone":"08063411234","kin":"Chukwuyem Bright 08031111211","age":"30","married":"1","soo":"Delta","lga":"Ika south","town":"Agbor ","address":"44 Odozi Street, Agbor.","departure":"Asaba International Airport","destination":"Enugu International airline ","flight_date":"2021-12-28","flight_time":"09:00:00","airline":"Dana Airline","amount":"19500","ticket_no":"303","STATUS":"0","DATE":"2022-02-09 11:11:32","ID":"6"},{"photo":"404.png","names":"Udoka Henry","phone":"08034347781","kin":"Osato Abel 08034000211","age":"29","married":"0","soo":"Delta","lga":"Ika South","town":"Ozanogogo","address":"8 Gbigbi Street, Ozanogogo.","departure":"Asaba International Airport","destination":"Benin International Airport","flight_date":"2020-01-02","flight_time":"09:00:00.000000","airline":"Dana Airline","amount":"19500","ticket_no":"404","STATUS":"0","DATE":"2022-02-09 11:11:32","ID":"5"},{"photo":"401.png","names":"Peter Johnson","phone":"08033421041","kin":"Peter Moses 08034142410","age":"64","married":"1","soo":"Delta","lga":"Ika South","town":"Abavo","address":"54 Amen street, Abavo.","departure":"Asaba International Airport","destination":"Abuja International Airport","flight_date":"2022-01-21","flight_time":"09:00:00.000000","airline":"Peace Airline","amount":"21000","ticket_no":"401","STATUS":"0","DATE":"2022-02-09 10:51:05","ID":"4"},{"photo":"412.png","names":"Amayo Blessing","phone":"07041213721","kin":"07044412111 Joy Amayo","age":"34","married":"1","soo":"Edo","lga":"Akoko-Edo","town":"Uselu","address":"13 Technical road, Benin.","departure":"International Airport Benin","destination":"International Airport Abuja","flight_date":"2021-12-24","flight_time":"10:00:00.000000","airline":"Peace Airline","amount":"24000","ticket_no":"412","STATUS":"0","DATE":"2022-02-09 10:45:22","ID":"2"},{"photo":"441.png","names":"David Samuel","phone":"08062194022","kin":"07041112110 David Tina","age":"41","married":"1","soo":"Edo","lga":"Uhuode","town":"Ugbor","address":"Plot 2 Favour Street, Ijenin.","departure":"International Airport Benin","destination":"International Airport Abuja","flight_date":"2021-12-24","flight_time":"10:00:00.000000","airline":"Peace Airline","amount":"24000","ticket_no":"441","STATUS":"0","DATE":"2022-02-09 10:35:54","ID":"1"}]',
	}
};

const db_2 = {
  admin: '[{"username":"admin","email":"admin@upanel.com","phone":null,"password":"1234","STATUS":"4","DATE":"2022-02-08 00:00:00","ID":"2"},{"username":"2gbeh","email":"webmaster@hwplabs.com","phone":"08169960927","password":"4444","STATUS":"5","DATE":"2022-02-08 00:00:00","ID":"1"}]',
  
	user: '[{"photo":"v9172.png","names":"Samson Ishan","plate_no":"AGB414QW","reg_no":"GA220","engine_no":"BZ9H30DV","chassis_no":"V9172","reg_state":"Abia","phone":"07036636714","address":"Osadebe Way Asaba.","soo":"Delta","lga":"Oshimili North","country":"Nigeria","dob":"1974-01-15","married":"1","occupation":"Business","STATUS":"0","DATE":"2022-02-10 09:55:19","ID":"5"},{"photo":"A2171.png","names":"Obaro Ijedi","plate_no":"ISO811DI","reg_no":"EA1400","engine_no":"DZ9H4V","chassis_no":"A2171","reg_state":"Delta","phone":"07033214133","address":"54 Okpe Isoko","soo":"Delta ","lga":"Isoko North","country":"Nigeria","dob":"1981-04-10","married":"1","occupation":"Business","STATUS":"0","DATE":"2022-02-10 09:55:19","ID":"4"},{"photo":"P5711.png","names":"Egbor Adulphus","plate_no":"AGB187EA","reg_no":"FA2001","engine_no":"AZ9H21DV","chassis_no":"P5711","reg_state":"Delta","phone":"09022142161","address":"Okpa Street, Ute.","soo":"Delta","lga":"Ika South","country":"Nigeria","dob":"1954-06-06","married":"1","occupation":"Lawyer","STATUS":"0","DATE":"2022-02-10 09:35:29","ID":"3"},{"photo":"Q471J.png","names":"Emmanuel Ozabor","plate_no":"AGB212AA","reg_no":"ELL00031","engine_no":"AT3H44AI","chassis_no":"Q471J","reg_state":"Edo","phone":"08034434771","address":"41 Baleke Street, Agbor.","soo":"Delta ","lga":"Ika South","country":"Nigeria","dob":"1984-07-05","married":"1","occupation":"Banker","STATUS":"0","DATE":"2022-02-10 09:35:29","ID":"2"},{"photo":"T4471.png","names":"Patrick Isibor","plate_no":"EA411WQA","reg_no":"FLI00042","engine_no":"AT5H27DV","chassis_no":"T4471","reg_state":"Enugu","phone":"08063919007","address":"24 Odi Street Agbor","soo":"Delta ","lga":"Ika South","country":"Nigeria","dob":"1980-10-22","married":"1","occupation":"Technician","STATUS":"0","DATE":"2022-02-09 11:46:06","ID":"1"}]',
};