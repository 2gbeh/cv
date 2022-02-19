"use strict";

const Top = `<!-- Top -->
  <meta name="description" content="${Context.summary}" />
  <meta name="keywords" content="${Context.keywords}" />
  <meta name="robots" content="index,follow" />
  <meta name="owner" content="${Context.owner}" />
  <meta name="designer" content="Tugbeh Emmanuel" />
  <meta name="copyright" content="2017" />
  <meta name="theme-color" content="${Context.theme.blue}" />

  <link href="./css/layout.css" type="text/css" rel="stylesheet" />  
  <link href="./css/template.css" type="text/css" rel="stylesheet" />  
  <link href="./css/login.css" type="text/css" rel="stylesheet" /> 
  <link href="./css/tables.css" type="text/css" rel="stylesheet" />  
  <link href="./css/forms.css" type="text/css" rel="stylesheet" />  
  <link href="./css/profile.css" type="text/css" rel="stylesheet" />
  <link href="./css/theme.css" type="text/css" rel="stylesheet" />  
  <link href="./fi/uicons-regular-straight.css" type="text/css" rel="stylesheet" />

  <link href="./img/favicon.png" rel="icon" type="image/png" />  
  <title>${Context.title}</title>  
<!-- /Top -->`;

const Meta = `<!-- Meta -->
  <!-- Open Graph -->
  <meta property="og:site_name" content="uPanel" />
  <meta property="og:title" content="${Context.title}" />
  <meta property="og:description" content="${Context.summary}" />
  <meta property="og:url" content="${Context.url}" />
  <meta property="og:image" content="${Context.url}img/social-preview.png" />
  <meta property="og:image:alt" content="Social Preview" />
  <meta property="og:image:width " content="640" />
  <meta property="og:image:height " content="320" />
  <meta property="og:type" content="website" />
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${Context.title}" />
  <meta name="twitter:description" content="${Context.summary}" />
  <meta name="twitter:url" content="${Context.url}" />
  <meta name="twitter:image" content="${Context.url}img/social-preview.png" />
  <meta name="twitter:image:src" content="${Context.url}img/social-preview.png" />
  <meta name="twitter:image:alt" content="Social Preview" />
  <meta name="twitter:image:width " content="640" />
  <meta name="twitter:image:height " content="320" />  
  <!-- <style type="text/css">* {background-color: #000; color: #000;}</style> -->
<!-- /Meta -->`;

const Header = `<!-- Header -->
  <div class="up-header">
    <table border="0">
      <tr>
        <th>
          <a href="home.html" title="Home">
            <img src="img/typeface-w.png" alt="uPanel" class="up-typeface" />
          </a>
       </th>
        <td>
          <ul class="desktop">
            <li>              
              <form action="" method="get" autocomplete="off" onsubmit="return false">
                <div class="up-fi-group">
                  <input onchange="App.search('.up-header form input')" type="search" name="q" value="" placeholder="Search ( / )" list="dl_ticket_no" required />
                  <i class="fi fi-rs-search"></i>
                </div>
                <datalist id="dl_ticket_no"></datalist>
              </form>
            </li>
            <li>
              <a href="#" title="Notifications">
                &#128276;
              </a>
            </li>            
            <li>
              <a href="#" title="My Account">
                <i class="fi fi-rs-user"></i>
                ${getSession('whois')}
              </a>
            </li>
            <li>
              <a href="#" title="IP Address">
                <i class="fi fi-rs-lock"></i>
                <small style="font-size: 15px;">127.0.0.1</small>
              </a>
            </li>            
            <li>
              <a href="javascript:void(0)" onclick="handleLogout()" title="Exit">
                <i class="fi fi-rs-sign-out"></i>
                Logout
              </a>
            </li>           
          </ul>   
          <ul class="mobile">
            <li>
              <a onclick="toggleDrawer(this)" class="navicon" title="Menu">
                &equiv;
              </a>
            </li>            
          </ul>                    
        </td>
      </tr>
    </table> 
  </div>
<!-- /Header -->`;

const Nav = `<!-- Nav -->
<div class="up-nav">
    <ul class="desktop">
      <li>
        <a href="?" title="Reload">
          <i class="fi fi-rs-refresh"></i>
           Reload
        </a>
      </li>
      <li>
        <a href="home.html">
          <i class="fi fi-rs-home"></i>
          Authenticate
        </a>
      </li>
      <li>
        <a href="#">      
          <i class="fi fi-rs-plane"></i>
          Flights
        </a>
      </li>            
      <li>
        <a href="profile.html">
          <i class="fi fi-rs-address-book"></i>
          Passengers
        </a>
      </li>      
      <li>
        <a href="#">
          <i class="fi fi-rs-receipt"></i>
          Tickets
        </a>
      </li>      
      <li>
        <a href="#">
          <i class="fi fi-rs-settings"></i>
          Settings
        </a>
      </li> 
      <li>
        <a href="#">
          <i class="fi fi-rs-globe"></i>
          Visit Website
        </a>
      </li>
      <li>
        <a href="#">
          <!-- <i class="fi fi-rs-thermometer-half"></i> -->
          <i class="fi fi-rs-stopwatch"></i>
          ISP Renewal &nbsp; <meter value="0.25" title="Expires 07/02/2023">25%</meter>
        </a>
      </li>                       
    </ul>
    <ul class="mobile" id="drawer">
      <li>
        <a href="home.html">
          <i class="fi fi-rs-home"></i>
          Authenticate
        </a>
      </li>
      <li>
        <a href="#">      
          <i class="fi fi-rs-plane"></i>
          Flights
        </a>
      </li>            
      <li>
        <a href="profile.html">
          <i class="fi fi-rs-address-book"></i>
          Passengers
        </a>
      </li>      
      <li>
        <a href="#">
          <i class="fi fi-rs-receipt"></i>
          Tickets
        </a>
      </li>      
      <li>
        <a href="#">
          <i class="fi fi-rs-settings"></i>
          Settings
        </a>
      </li> 
      <li>
        <a href="#">
          <i class="fi fi-rs-globe"></i>
          Visit Website
        </a>
      </li>      
      <li>
        <a href="#">
          <!-- <i class="fi fi-rs-thermometer-half"></i> -->
          <i class="fi fi-rs-stopwatch"></i>
          ISP Renewal
          <small style="font-size: 14px;">(07/02/2023)</small>
        </a>
      </li>  
      <li>
        <a href="#" title="Notifications">
          <i class="fi fi-rs-bell"></i>
          Notifications
        </a>
      </li>            
      <li>
        <a href="profile.html" title="My Account">
          <i class="fi fi-rs-user"></i>
          ${getSession('whois')}
          <small style="font-size: 14px;">(127.0.0.1)</small>
        </a>
      </li>
      <li>
        <a href="javascript:void(0)" onclick="handleLogout()" title="Exit">
          <i class="fi fi-rs-sign-out"></i>
          Logout
        </a>
      </li>    
    </ul>    
  </div>
<!-- /Nav -->`;

const Footer = `<!-- Footer -->
  <div class="up-footer">
    <section class="help">
      Need help? Email 
      <a href="mailto:support@upanel.com" target="_blank" class="lnk">support@upanel.com</a>, or 
      <a href="tel:+2348169960927" target="_blank" class="btn">Call (+234)816-996-0927</a>
    </section>

    <section class="menu">
      <ul>
        <li><a href="#top" title="Back to top">TOP</a></li>
        <li><a href="javascript:void(0)" target="_blank">Domain</a></li> 
        <li><a href="javascript:void(0)" target="_blank">cPanel</a></li> 
        <li><a href="javascript:void(0)" target="_blank">Webmail</a></li> 
        <li><a href="javascript:void(0)" target="_blank">phpMyAdmin</a></li>
        <li><a href="javascript:void(0)" target="_blank">Administrator</a></li>
        <li><a href="javascript:void(0)" target="_blank">Documentation</a></li>
      </ul>
    </section>
    
    <section class="copy">
      <a href="" title="Reload">
        <img src="img/typeface.png" alt="uPanel" class="up-typeface" />
      </a>
      <var>v4.10.2.22</var>
      <address>
        Copyright &copy; 2017
        <a href="https://www.facebook.com/hwplabs" target="_blank" rel="author" title="Visit Webmaster">HWP Labs.</a> 
        <cite>CRBN 658815</cite>
      </address>
    </section>
  </div>
<!-- /Footer -->`;
