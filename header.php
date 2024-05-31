<!-- PHP per HEADER -->
<header>
    
    <div id="flex-container1-header">
        <div class="flex-item1-header">
            <a href="#">
                <img id=icona-azienda src="imgs_loghi_homepage/logo_header.png" alt="logo_azienda">
            </a>
        </div>
        
        <div class="flex-item1-header">
            <ul>
                <li><a href="#">Soggiorni</a></li>
                <li><a href="#">Esperienze</a></li>
                <li><a href="#">Esperienze online</a></li>
            </ul>   
        </div>

        <div class="flex-item1-header"> 

            <a href="affitta.php" id="affitta-con-airbnb"><strong>Affitta con Airbnb</strong></a>
            <img id="icona_mondo_a_griglia" src="imgs_loghi_homepage/icona_mondo_a_griglia.png" alt="icona_mondo_a_griglia">

            <div class="menu-a-tendina-header">
                <button id="pulsante-menu-header">
                    <img id="icona-menu" src="imgs_loghi_homepage/icona_menu.png" alt="icona_menu">
                    <img id="icona-ospite" src="imgs_loghi_homepage/icona_ospite.jpg" alt="icona_ospite">
                </button> 

                <div class="contenuto-menu-a-tendina-header">

                    <?php
                        if(!isset($_COOKIE['user_logged_in'])) {
                            // Se l'utente non è loggato
                            echo '<a id="pulsante-accedi" href="#">Accedi</a>';
                            echo '<a id="pulsante-registrati" href="#">Registrati</a>';
                            echo '<a href="#">Gift Card</a>';
                            echo '<a href="affitta.php">Affitta con Airbnb</a>';
                            echo '<a href="#">Centro Assistenza</a>';
                        } else {
                            // Se l'utente è loggato
                            echo '<a href="#">Messaggi</a>';
                            echo '<a href="#">Viaggi</a>';
                            echo '<a href="preferiti.php">Preferiti</a>';
                            echo '<a href="affitta.php">Affitta con Airbnb</a>';
                            echo '<a id="pulsante-account" href="#">Account</a>';
                            echo '<a href="#">Gift Card</a>';
                            echo '<a href="#">Centro Assistenza</a>';
                            echo '<a id="pulsante-logout" href="pagina_autenticazione/logout.php">Esci</a>';
                        }
                    ?>
                
                </div>  
            </div>
        </div> 
    </div>

    <div id="autenticazione-modale">
            <div class="autenticazione-contenuto-modale">

                <!-- Header -->
                <div class="header-autenticazione">
                    <div class="pulsante-chiusura-autenticazione">&times;</div>
                    <p class="titolo-header-autenticazione">Accedi o registrati</p>
                </div>

                <!-- Main -->
                <div class="main-autenticazione">

                    <!-- Section -->
                    <div class="sezione-autenticazione">
                        <p class="titolo-sezione-autenticazione">Ti diamo il benvenuto su Airbnb</p>
                        
                        <div>
                            <form>
                                <select>
                                    <option>Afghanistan (+93)</option>
                                    <option>Albania (+355) </option>
                                    <option>Algeria (+213)</option>
                                    <option>Andorra (+376)</option>
                                    <option>Angola (+244)</option>
                                    <option>Anguilla (+1)</option>
                                    <option>Antigua e Barbuda (+1)</option>
                                    <option>Arabia Saudita (+966)</option>
                                    <option>Argentina (+54)</option>
                                    <option>Armenia (+374)</option>
                                    <option>Aruba (+297)</option>
                                    <option>Australia (+61)</option>
                                    <option>Austria (+43)</option>
                                    <option>Azerbaigian (+994)</option>
                                    <option>Bahamas (+1)</option>
                                    <option>Bahrein (+973)</option>
                                    <option>Bangladesh (+880)</option>
                                    <option>Barbados (+1)</option>
                                    <option>Belgio (+32)</option>
                                    <option>Belize (+501)</option>
                                    <option>Benin (+229)</option>
                                    <option>Bermuda (+1)</option>
                                    <option>Bhutan (+975)</option>
                                    <option>Bielorussia (+375)</option>
                                    <option>Bolivia (+591)</option>
                                    <option>Bonaire, Sint Eustatius, e Saba (+599)</option>
                                    <option>Bosnia ed Erzegovina (+387)</option>
                                    <option>Botswana (+267)</option>
                                    <option>Brasile (+55)</option>
                                    <option>Brutei (+673)</option>
                                    <option>Bulgaria (+359)</option>
                                    <option>Burkina Faso (+226)</option>
                                    <option>Burundi (+257)</option>
                                    <option>Cambogia (+855)</option>
                                    <option>Camerun (+237)</option>
                                    <option>Canada (+1)</option>
                                    <option>Capo Verde (+238)</option>
                                    <option>Cechia (+420)</option>
                                    <option>Ciad (+235)</option>
                                    <option>Cile (+56)</option>
                                    <option>Cina (+86)</option>
                                    <option>Cipro (+357)</option>
                                    <option>Città del Vaticano (+379)</option>
                                    <option>Colombia (+57)</option>
                                    <option>Comore (+269)</option>
                                    <option>Congo (+242)</option>
                                    <option>Corea del Sud (+82)</option>
                                    <option>Costa d'Avorio (+225)</option>
                                    <option>Costa Rica (+506)</option>
                                    <option>Croazia (+385)</option>
                                    <option>Cuba (+53)</option>
                                    <option>Curaçao (+599)</option>
                                    <option>Danimarca (+45)</option>
                                    <option>Repubblica Democratica del Congo (+243)</option>
                                    <option>Dominica (+1)</option>
                                    <option>Ecuador (+593)</option>
                                    <option>Egitto (+20)</option>
                                    <option>El Salvador (+503)</option>
                                    <option>Emiratori Arabi Uniti (+971)</option>
                                    <option>Eritrea (+291)</option>
                                    <option>Estonia (+372)</option>
                                    <option>Etiopia (+251)</option>
                                    <option>Figi (+679)</option>
                                    <option>Filipine (+63)</option>
                                    <option>Finlandia (+358)</option>
                                    <option>Francia (+33)</option>
                                    <option>Gabon (+241)</option>
                                    <option>Gambia (+220)</option>
                                    <option>Georgia (+995)</option>
                                    <option>Georgia del Sud e Sandwich australi (+500)</option>
                                    <option>Germania (+49)</option>
                                    <option>Ghana (+233)</option>
                                    <option>Giamaica (+1)</option>
                                    <option>Giappone (+81)</option>
                                    <option>Gibiliterra (+350)</option>
                                    <option>Gibuti (+253)</option>
                                    <option>Giordania (+962)</option>
                                    <option>Grecia (+30)</option>
                                    <option>Grenada (+1)</option>
                                    <option>Groenlandia (+299)</option>
                                    <option>Guadalupa (+590)</option>
                                    <option>Guam (+1)</option>
                                    <option>Guatemala (+502)</option>
                                    <option>Guinea (+224)</option>
                                    <option>Guinea Equatoriale (+240)</option>
                                    <option>Guinea-Bissau (+245)</option>
                                    <option>Guyana (+592)</option>
                                    <option>Haiti (+509)</option>
                                    <option>Honduras (+504)</option>
                                    <option>Hong-Kong (+852)</option>
                                    <option>India (+91)</option>
                                    <option>Indonesia (+62)</option>
                                    <option>Iraq (+964)</option>
                                    <option>Irlanda (+353)</option>
                                    <option>Islanda (+354)</option>
                                    <option>Isola Christmas (+61)</option>
                                    <option>Isola di Man (+44)</option>
                                    <option>Isola Norfolk</option></otion>
                                    <otiion>Isole Åland</otiion>
                                    <option>Isola Cayman (+1)</option>
                                    <option>Isole Cocos (+61)</option>
                                    <option>Isole Cook (+682)</option>
                                    <option>Isole Fær Øer (+298)</option>
                                    <option>Isole Falkland (Malvine) (+500)</option>
                                    <option>Isole Pitcairn (+64)</option>
                                    <option>Isole Salomone (+677)</option>
                                    <option>Isole Turks e Caicos (+1)</option>
                                    <option>Isole Vergini Americane (+1)</option>
                                    <option>Isole Vergini Britanniche (+1)</option>
                                    <option>Istraele (+39)</option>
                                    <option>Italia (+39)</option>
                                    <option>Kazakistan (+996)</option>
                                    <option>Kiribati (+686)</option>
                                    <option>Kosovo (+383)</option>
                                    <option>Kuwait (+965)</option>
                                    <option>Laos (+856)</option>
                                    <option>Lesotho (+266)</option>
                                    <option>Lettonia (+371)</option>
                                    <option>Libano (+961)</option>
                                    <option>Liberia (+231)</option>
                                    <option>Libia (+218)</option>
                                    <option>Liechtendstein (423)</option>
                                    <option>Lituania (+370)</option>
                                    <option>Lussemburgo (+352)</option>
                                    <option>Macao (+853)</option>
                                    <option>Macedonia settentrinale (+389)</option>
                                    <option>Madagascar (+261)</option>
                                    <option>Malawi (+265)</option>
                                    <option>Malaysia (+60)</option>
                                    <option>Maldive (+960)</option>
                                    <option>Mali (+223)</option>
                                    <option>Malta (+356)</option>
                                    <option>Marocco (+212)</option>
                                    <option>Martinica (+596)</option>
                                    <option>Mauritania (+222)</option>
                                    <option>Mauritius (+230)</option>
                                    <option>Mayotte (+262)</option>
                                    <option>Messico (+52)</option>
                                    <option>Micronesia (+691)</option>
                                    <option>Moldavia (+373)</option>
                                    <option>Mocano (+377)</option>
                                    <option>Mongolia (+976)</option>
                                    <option>Montemburgo (+382)</option>
                                    <option>Monserrat (+1)</option>
                                    <option>Mozambico (+258)</option>
                                    <option>Myanmar (Birbinia) (+95)</option>
                                    <option>Namibia (+264)</option>
                                    <option>Nauru (+674)</option>
                                    <option>Nepal (+977)</option>
                                    <option>Nicaragua (+505)</option>
                                    <option>Niger (+227)</option>
                                    <option>Niue (+673)</option>
                                    <option>Norvegia (+47)</option>
                                    <option>Nuova Calendonia (+687)</option>
                                    <option>Nuova Zelanda (+64)</option>
                                    <option>Oman (+968)</option>
                                    <option>Paesi Bassi (+31)</option>
                                    <option>Pakistan (+92)</option>
                                    <option>Palau (+680)</option>
                                    <option>Panamá (+507)</option>
                                    <option>Papua Nuova Guinea (+675)</option>
                                    <option>Paraguay (+48)</option>
                                    <option>Perù (+51)</option>
                                    <option>Polinesia francese (+689)</option>
                                    <option>Polonia (+48)</option>
                                    <option>Portogallo (+351)</option>
                                    <option>Portorico (+1)</option>
                                    <option>Quatar (+974)</option>
                                    <option>Regno Unito (+44)</option>
                                    <option>Repubblica Centrafricana (+236)</option>
                                    <option>Repubblica Dominicana (+1)</option>
                                    <option>Riunione (+262)</option>
                                    <option>Romania (+40)</option>
                                    <option>Ruanda (+250)</option>
                                    <option>Russia (+7)</option>
                                    <option>Sahara occidentale (+212)</option>
                                    <option>Saint Kitts e Nevis (+1)</option>
                                    <option>Saint Lucia (+1)</option>
                                    <option>Saint Martin (+590)</option>
                                    <option>Saint Vincent e Grenadine (+1)</option>
                                    <option>Saint-Barthelemy (+590)</option>
                                    <option>Saint-Pierre e Miquelon</option>
                                    <option>Samoa (+685)</option>
                                    <option>Samoa americane (+1)</option>
                                    <option>San Marino (+378)</option>
                                    <option>Sant'Elena (+290)</option>
                                    <option>São Tomé e Príncipe (+239)</option>
                                    <option>Senegal (+221)</option>
                                    <option>Serbia (+381)</option>
                                    <option>Seychelles (+248)</option>
                                    <option>Sierra Leone (+232)</option>
                                    <option>Singapore (+65)</option>
                                    <option>Sint Maarten (+1)</option>
                                    <option>Slovacchia (+421)</option>
                                    <option>Slovenia (+386)</option>
                                    <option>Somalia (+252)</option>
                                    <option>Spagna (+34)</option>
                                    <option>Sri Lanka (+94)</option>
                                    <option>Stati Uniti (+1)</option>
                                    <option>Sud Sudan (+211)</option>
                                    <option>Sudafrica (+27)</option>
                                    <option>Suriname (+597)</option>
                                    <option>Svalbard e Jan Mayen (+47)</option>
                                    <option>Svezia (+46)</option>
                                    <option>Svizzera (+41)</option>
                                    <option>Swaziland (+268)</option>
                                    <option>Tagikistan (+992)</option>
                                    <option>Taiwan (+886)</option>
                                    <option>Tanzania (+255)</option>
                                    <option>Territori palestinesi (+970)</option>
                                    <option>Territorio brittanico dell'Oceano Indiano (+246)</option>
                                    <option>Thailandia (+66)</option>
                                    <option>Timor Est (+670)</option>
                                    <option>Togo (+228)</option>
                                    <option>Tokelau (+690)</option>
                                    <option>Trinidad e Tobago (+1)</option>
                                    <option>Tunisia (+216)</option>
                                    <option>Turkmenistan (+993)</option>
                                    <option>Tuvalu (+688)</option>
                                    <option>Ucraina (+380)</option>
                                    <option>Uganda (+256)</option>
                                    <option>Ungheria (+36)</option>
                                    <option>Uruguay (+598)</option>
                                    <option>Uzbekistan (+998)</option>
                                    <option>Vanuatu (+678)</option>
                                    <option>Venezuela (+58)</option>
                                    <option>Vietman (+84)</option>
                                    <option>Wallis e Futuna (+681)</option>
                                    <option>Yemen (+697)</option>
                                    <option>Zambia (+260)</option>
                                    <option>Zimbabwe (+263)</option>
                                </select>
                            </form>
                
                            <form>
                                <input type="text" placeholder="Numero di telefono">
                            </form>
                        </div>

                        <p>Ti chiameremo o ti invieremo un messaggio per confermare il tuo numero. Sono previsti costi standard per messaggi e traffico dei dati. Informativa sulla privacy</p>
                        <button class="continua-sezione-autenticazione">Continua</button>
                    </div>
                </div>

                <!-- Footer -->
                <div class="footer-autenticazione">
                    <button class="facebook-footer-autenticazione">Continua con Facebook</button>
                    
                    <button>
                        <div id="g_id_onload"
                            data-client_id="208008594756-eu9dap22c7mdevjdl643s3dksm35t42g.apps.googleusercontent.com"
                            data-context="signin"
                            data-ux_mode="popup"
                            data-callback="handleCredentialResponse"
                            data-auto_prompt="false">
                        </div>
                        <div class="g_id_signin"
                            data-type="standard"
                            data-shape="rectangular"
                            data-theme="outline"
                            data-text="signin_with"
                            data-size="large"
                            data-logo_alignment="left">
                        </div>
                    </button>

                    <button class="apple-footer-autenticazione">Continua con Apple</button>

                    <a href="pagina_autenticazione/check_email.html">
                        <button class="email-footer-autenticazione">Continua con un indirizzo email</button>
                    </a>
                </div>
            </div>
    </div> 

</header>