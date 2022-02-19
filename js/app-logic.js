"use strict";

class App 
{
  static #mode = new Model(Context.db.user);
  static #data = this.#mode.data;
  static #cal = new Calendar();
  
  constructor() {    
    let ctx = Context, page = file(), oauth = ['index.html', 'forgot.html'];
    ////////////////////////////////////////////////////////////////////////////////////////////
    if (oauth.indexOf(page) < 0 && getSession('whois') == undefined) {
      href(`${ctx.login}?error=Session expired, kindly login to continue.`);
    }
    ////////////////////////////////////////////////////////////////////////////////////////////
    if (node('head')) {
      after('head', Top);
      if (node('body').dataset.title) {
        Doc.title = `${ctx.name} - ${node('body').dataset.title}`;
      } else {        
        after('head', Meta);
        Doc.title = `${ctx.title}`;
      }
      if (Request.exist('error') == true) {
        App.notice(Request.read('error')); 
      }     
    }    
    ////////////////////////////////////////////////////////////////////////////////////////////
    if (node('header')) {
      set('header', Header);
      node('.up-header img').src = '#';
      node('.up-header img').alt = ctx.name;
      node('.up-header form datalist').innerHTML = App.datalist();
    }
    ////////////////////////////////////////////////////////////////////////////////////////////
    if (node('nav')) {
      set('nav', Nav);
    } 
    ////////////////////////////////////////////////////////////////////////////////////////////
    if (node('aside')) {
      set('aside', Aside);
    }        
    ////////////////////////////////////////////////////////////////////////////////////////////
    if (node('main')) {  
      if (node('.up-login')) {  
        node('.up-login h1 img').src = '#';
        node('.up-login h1 img').alt = ctx.name;
        node('.up-login h2').innerHTML = ctx.h2;          
      } else if (node('.up-tables')) {  
        node('.up-tables .rows form datalist').innerHTML = App.datalist();
        node('.up-tables .rows table tbody').innerHTML = App.home();
        var n = App.#data.length;
        node('.up-tables .pagi table caption').innerHTML = `0 - ${n - 1} of ${n} records`;
      } else if (node('.up-profile')) {  
        if (Request.exist('q') == true) {
          var q = Request.read('q');
          App.notice(`Showing flight records of passenger with <b>Ticket No. #${q}</b>`);
          App.profile(q);
        }
      }      
    }
    ////////////////////////////////////////////////////////////////////////////////////////////
    if (node('footer')) {
      set('footer', Footer);
      node('.up-footer .help a.lnk').href = ctx.mailto;
      node('.up-footer .help a.lnk').innerHTML = ctx.support;
      node('.up-footer .help a.btn').innerHTML = `Call ${ctx.phone}`;
      nodes('.up-footer .menu a')[1].href = ctx.url;
      nodes('.up-footer .menu a')[2].href = ctx.cpanel;
      nodes('.up-footer .menu a')[3].href = ctx.webmail;
      nodes('.up-footer .menu a')[4].href = ctx.login;
      nodes('.up-footer .menu a')[5].href = ctx.wa;
      nodes('.up-footer .menu a')[6].href = '#';
      node('.up-footer .copy img').src = '#';
      node('.up-footer .copy img').alt = ctx.name;  
      node('.up-footer .copy var').innerHTML = `v${ctx.version}`; 
    }  
  }
  ////////////////////////////////////////////////////////////////////////////////////////////
  static notice(msg) {
    const e = `<i onclick="document.querySelector('#notice').style.display = 'none'" title="Close">&times</i> ${msg}`;  
    if (node('.up-notice')) {
      node('#notice').innerHTML = e;
    } else {
      before('main', `<p class="up-notice" id="notice">${e}</p>`);
    }
  }
  static login() {
    const form = document.forms[0],
          post_user = form.username.value,
          post_pass = form.password.value,
          data_user = Context.admin_user,
          data_pass = Context.admin_pass;
    let post = [post_user, post_pass], data = [data_user, data_pass];
    var res = handleLogin(post, data);

    if (isEmpty(post_user) == true || isEmpty(post_pass) == true) {
      this.notice('Enter username and password');
    } else if (res.errno == 200) {
      setSession('whois', post_user);
      href(`home.html?error=${this.#cal.salute}, Administrator`);
    } else {
      this.notice(res.error);
    }
  }
  static forgot() {    
    const form = document.forms[0];
    if (isEmpty(form.email.value) == true) {
      this.notice('Enter email address.');
    } else {
      this.notice('A password reset link or coed has been sent to your email.');
    }
  }
  static datalist() {
    let dl = '';
    for (let e of this.#data) {
      dl += `<option value=${e.ticket_no} />`;
    }
    return dl;
  }
  static search(selector) {
    const q = get(selector, true);
    if (isEmpty(q) == true || isNaN(q)) {
      this.notice('Enter a valid flight Ticket No.');
      set(selector, q, true);
    } else {
      let arr = [];
      for (let e of this.#data) {
        arr.push(e.ticket_no); 
      }      
      //log(arr, q);
      if (arr.indexOf(q) > -1) {
        href(`profile.html?q=${q}`);
      } else {
        this.notice('Ticket No. does not exit in flight records.');
      }
    }
  }  
  static photo_f (p) {
    let buf = p != undefined && p.length >= 5 && p.indexOf('.') > 0? p: 'default.png';
    return `background-image: url('uploads/${buf}')`;
  }  
  static home() {
    let buf = '', sn = 1;
    for (let e of this.#data) {      
      this.#cal.date = `${e.flight_date}T${e.flight_time}`;
      var schedule_f = this.#cal.dt_t();

      buf += `<tr>
        <td class="w1p"><input type="checkbox" disabled /></td>
        <td class="w1p tar">${sn}</td> 
        <td class="w1p">
          <figure style="${this.photo_f(e.photo)}" class="up-figure">&nbsp;</figure>
        </td>
        <td>${names_f(e.names)}</td>
        <td>
          <a href="tel:${e.phone}" target="_blank" class="lnk">
            ${e.phone}
          </a>
        </td>
        <td class="tar">${money_f(e.amount)}.00</td>
        <td>${e.airline}</td>
        <td class="tar">${e.ticket_no}</td>
        <td>${e.departure}</td>
        <td>${e.destination}</td>
        <td class="wsn">${schedule_f}</td>
        <td class="w1p wsn">
          <a href="profile.html?q=${e.ticket_no}" class="btn">
            <i class="fi fi-rs-portrait"></i>
            Manage
          </a>
          <a href="javascript:void(0)" class="btn">
            <i class="fi fi-rs-pencil"></i>
            Edit
          </a>
          <a href="javascript:void(0)" class="btn">
            <i class="fi fi-rs-cross-circle"></i>
            Delete
          </a>              
        </td>
      </tr>`;
      sn++;
    }
    return buf;
  }
  static profile(q) {
    const td = nodes('.up-profile ul.tiles table tr td');
    let row = this.#mode.SELECT('ticket_no', q), e = row[0];    
    dir(td, e);
    td[0].querySelector('figure').style = this.photo_f(e.photo);
    td[1].querySelector('p').innerHTML = names_f(e.names);    
    td[2].querySelector('p').innerHTML = `&#8358; ${money_f(e.amount)}.00`;
    td[3].querySelector('p').innerHTML = `${e.airline.toUpperCase()} #${e.ticket_no}`;
    var n = App.#data.length, p = Math.round((1 * 100) / n);
    td[4].querySelector('p').innerHTML = `1 / ${n} &nbsp; (~${p}%)`;
    td[4].querySelector('ol').title = `${p}%`; 
    td[4].querySelector('ol li').style.width = `${p}%`;
    
    td[5].querySelector('p').innerHTML = `${names_f(e.names)} (${e.age})`;
    td[6].querySelector('p').innerHTML = e.married < 1? 'Single': 'Married';
    td[7].querySelector('p').innerHTML = `<a href="tel:${e.phone}">${e.phone}</a>`;
    td[8].querySelector('p').innerHTML = e.address;
    td[9].querySelector('p').innerHTML = e.soo;
    td[10].querySelector('p').innerHTML = `${e.lga}, ${e.town}`;
    td[11].querySelector('p').innerHTML = e.kin;

    td[12].querySelector('p').innerHTML = `&#8358; ${money_f(e.amount)}.00`;
    td[13].querySelector('p').innerHTML = `${e.airline}`;
    td[14].querySelector('p').innerHTML = `${e.ticket_no}`;
    td[15].querySelector('p').innerHTML = e.departure;
    td[16].querySelector('p').innerHTML = e.destination;
    this.#cal.date = `${e.flight_date}T${e.flight_time}`;
    td[17].querySelector('p').innerHTML = this.#cal.date_t();;
    td[18].querySelector('p').innerHTML = this.#cal.time_t();;
  }

}