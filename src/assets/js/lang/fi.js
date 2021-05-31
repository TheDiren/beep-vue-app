/*
 * BEEP - Translations
 * Author: Pim van Gennip (pim@iconize.nl)
 *
 */
const translations = {
  /* Date picker */
  monthsFull: [
    'Tammikuu',
    'Helmikuu',
    'Maaliskuu',
    'Huhtikuu',
    'Toukokuu',
    'Kesäkuu',
    'Heinäkuu',
    'Elokuu',
    'Syyskuu',
    'Lokakuu',
    'Marrakuu',
    'Joulukuu',
  ],
  monthsShort: [
    'Tammi',
    'Helmi',
    'Maalis',
    'Huhti',
    'Touko',
    'Kesä',
    'Heinä',
    'Elo',
    'Syys',
    'Loka',
    'Marras',
    'Joulu',
  ],
  weekdaysFull: [
    'Sunnuntai',
    'Maanantai',
    'Tiistai',
    'Keskiviikko',
    'Torstai',
    'Perjantai',
    'Lauantai',
  ],
  weekdaysShort: ['Su', 'Ma', 'Ti', 'Ke', 'To', 'Pe', 'La'],
  Today: 'Tänään',
  Clear: 'Poista',
  Close: 'Sulje',
  firstDay: 1,
  format: 'pppp p kkkk vvvv',

  /* main */
  Website: 'Verkkosivu',
  Feedback: 'Palaute',
  Feedback_mail_header: 'BEEP app palaute',
  Feedback_mail_body:
    'Hyvä BEEP Säätiö,%0D%0A%0D%0ATässä palautteeni about the BEEP sovelluksesta.%0D%0A%0D%0AHuomasin että:%0D%0A%0D%0AJuuri ennen kuin näin tapahtui, tein:%0D%0A%0D%0ANäyttö näytti tältä (lisää kuvakaappaus):%0D%0A%0D%0A%0D%0A%0D%0A',
  Diagnostic_info: 'Diagnostiikkatiedot (jos kyseessä on bugi):%0D%0A',
  back: 'Takaisin',
  menu: 'Valikko',
  lighting: 'Kirkkaus',
  camera: 'Kamera',
  weather: 'Sää',
  sensors: 'Laitteet',
  sensors_na: 'BEEP pesiesi etävalvontasensorit ovat pian saatavilla...',

  no_valid_authentication: 'Todennustietoja ei vastaanotettu',
  succesfully_saved: 'Tallennettu onnistuneesti',

  switch_language: 'Vaihda kieli',
  Delete: 'Poista',
  Search: 'Hae...',

  /* user error messages */
  User: 'Käyttäjä',
  User_data: 'Käyttäjän tiedot',
  user_data: 'käyttäjän tiedot',
  updated: 'päivitetty',
  delete_complete_account:
    'Oletko varma että haluat poistaa koko tilisi mukaanlukien kaikki mehiläistarhat, pesät ja pesätarkastukset? Tietoja ei voi palauttaa.',
  username_is_required: 'Anna käyttäjätunnus',
  username_already_exists: 'Käyttäjätunnus on jo olemassa',
  password_is_required: 'Anna salasana',
  email_is_required: 'Anna sähköpostiosoite',
  email_already_exists: 'Sähköpostiosoite on jo käytössä',
  'policy accepted_is_required': 'Hyväksy käyttöehdot ennen rekisteröintiä',

  already_registered: 'Olen jo rekisteröitynyt',
  invalid_user: 'Käyttäjätunnus tuntematon tai väärä salasana',
  no_password_match: 'Salasanat eivät täsmää',
  invalid_token: 'Virheellinen koodi',

  no_valid_email: 'Virheellinen sähköpostiosoite',

  empty_fields: 'Täytä kaikki kentät',
  match_passwords: 'Salasanat eivät täsmää',

  succesfully_registered: 'Olet rekisteröitynyt onnistuneesti.',
  authentication_failed: 'Tunnistautminen epäonnistui',

  no_valid_input_received:
    'Tietoja ei voitu tallentaa, oikeanlaista tietoa ei vastaanotettu.',

  remove_all_settings: 'Poista kaikki asetukset',
  remove_apiary: 'Poista mehiläistarha',
  remove_hive: 'Poista pesä',
  remove_inspection: 'Poista pesätarkastus',

  Error: 'Virhe',
  Warning: 'Varoitus',
  first_remove_hives:
    'Huomio: tällä tarhalla on vielä pesiä. Voit tallentaa haluamasi pesät (ja niiden tarkastukset) siirtämällä ne ensin toiseen mehiläistarhaan. Jos jatkat poistamista, poistat KAIKKI tämän tarhapaikan pesät ja niiden tarkastukset.',

  Date: 'Päivämäärä',
  ok: 'Ok',
  previous: 'Edellinen',
  prev: 'edellinen',
  next: 'Seuraava',
  add: 'Lisää',
  create_new: 'Lisää uusi',
  New: 'Uusi',

  warning: 'Varoitus',

  apply: 'Ota käyttöön',
  Cancel: 'Peruuta',
  automatic: 'Automaattinen',
  manually: 'Manuaalinen',
  on: 'On',
  off: 'Off',

  /* login */
  login_title: 'Kirjaudu',
  login: 'Kirjaudu',
  back_to_login: 'Takaisin kirjatumiseen',
  forgot_password: 'Unohditko salasanasi?',

  username: 'Käyttäjätunnus',
  password: 'Salasana',
  confirm_password: 'Vahvista salasana',
  email: 'Sähköposti',
  token: 'Koodi',

  create_login_question:
    'Minulla ei ole tiliä. Rekisteröidy uudeksi käyttäjäksi',
  create_login: 'Rekisteröidy uudeksi käyttäjäksi',
  create_login_summary: 'Luo uusi käyttäjätili',
  save: 'Tallenna',
  save_and_return: 'Tallenna ja palaa',

  logout: 'Kirjaudu ulos',
  logout_title: 'Kirjaudu ulos tililtä',
  logout_now: 'Haluatko varmasti kirjautua ulos?',
  member_since: 'Jäsen alkaen',

  /* password recovery */
  password_recovery_title: 'Unohditko salasanasi?',
  password_recovery_remembered: 'Nyt muistin salasanani taas!',
  password_recovery_user: 'Käyttäjän tiedot',
  password_recovery_send_mail: 'Lähetä vahvistuskoodi',
  password_recovery_code_not_received: 'Etkö saanut koodia 5 minuutissa?',
  password_recovery_enter_code:
    'Onko sinulla jo vahvistuskoodi? Kirjoita se tähän',
  password_recovery_reset_title: 'Syötä uusi salasana',
  password_recovery_reset_password: 'Vaihda salasana',
  password_recovery_reminder_success:
    'Sähköposti on lähetetty. Klikkaa sähköpostissa olevaa linkkiä vaihtaaksesi salasanan tälle tilille.',
  password_recovery_reminder_summary:
    'Syötä sähköpostiosoitteesi. Saat sähköpostin, jossa on linkki salasanan vaihtamiseen.',

  password_recovery_reset_summary:
    'Määritä uusi salasana tilillesi saamallasi koodilla',
  password_recovery_reset_success:
    'Salasanasi vaihtaminen onnistui ja olet nyt kirjautunut sisään.',

  new_password: 'Uusi salasana',
  confirm_new_password: 'Vahvista uusi salasana',

  go_to_dashboard: 'Mene hallintapaneeliini',

  /* overview */
  overview_title: 'Yhteenveto',
  overview: 'Yhteenveto',
  color: 'Väri',
  state: 'On/off',
  connection_state: 'Yhteyden tila',

  /* hives */
  locations_title: 'BEEP',
  hives_title: 'BEEP',
  Hive: 'Pesä | Pesät',
  hive: 'pesä | pesät',
  Location: 'Mehiläistarha | Mehiläistarhat',
  location: 'mehiläistarha | mehiläistarhat',
  Name: 'Nimi',
  name: 'nimi',
  Type: 'Tyyppi',
  type: 'tyyppi',
  Layer: 'Osasto',
  layer: 'Osasto',
  brood: 'Sikiöt',
  honey: 'Hunaja',
  inspect: 'Tarkasta',
  inspection: 'tarkastus | tarkastukset',
  Inspection: 'Tarkastus | Tarkastukset',
  New_inspection: 'Uusi tarkastus',
  Edit_inspection: 'Muokkaa tarkastusta',
  Actions: 'Toimenpiteet',
  Conditions: 'Olosuhteet (tarkastettu)',
  edit: 'Muokkaa',
  // Hive_brood_layers: 'Sikiö osastot',
  // Hive_honey_layers: 'Hunaja osastot',
  Hive_layer_amount: 'Osastojen määrä',
  Bee_race: 'Mehiläisten rotu',
  Birth_date: 'Syntymäpäivä',
  Color: 'Väri',
  Queen_colored: 'Emo merkattu',
  Queen_clipped: 'Emo siivet typistetty',
  Queen_fertilized: 'Emo pariutunut',
  Age: 'Ikä',
  years_old: 'vuotta vanha',

  /* Hive check items */
  Date_of_inspection: 'Tarkastuspäivämäärä',
  action: 'Toimenpide',
  reminder: 'Muista',
  remind_date: 'Muistutuspäivä',

  overall: 'Yleiskuva',
  positive_impression: 'Yleisarvio',
  needs_attention: 'Tarvitsee lisähuomiota',
  notes: 'Muistiinpanot',
  notes_for_next_inspection:
    'Lyhyt muistiinpano seuraavaa tarkastuskertaa varten (näkyy yleiskatsauksessa)',
  Not_implemented_yet: 'Tätä kohdetta ei ole vielä otettu käyttöön',
  save_input_first: 'Haluatko tallentaa tiedot ensin?',

  /* dashboard */
  dashboard_title: 'Hallintapaneeli',
  dashboard: 'Hallintapaneeli',
  // measurements: 'Mittaukset',
  measurementsError: 'Mittauksia ei voi ladata, tarkista verkkoyhteys',
  last_measurement: 'Viimeisin mittaus',
  at: 'klo',
  measurement_system: 'BEEP mittausjärjestelmä',
  no_data: 'Tietoja ei käytettävissä',
  no_chart_data: 'Ei kaaviotietoja valitulta ajanjaksolta',

  /* settings */
  General: 'Yleisasetukset',
  Place: 'Sijainti',
  Country: 'Maa',
  City: 'Kaupunki',
  Address: 'Osoite',
  Lattitude: 'Leveysaste',
  Longitude: 'Pituusaste',
  Street: 'Katu',
  Number: 'Numero',
  Postal_code: 'Postinumero',
  Description: 'Kuvaus',
  Hive_settings: 'Pesän asetukset',
  Hive_amount: 'Pesien määrä täällä tarhapaikalla',
  Hive_prefix: 'Pesän nimen etuliite (ennen numeroa)',
  Hive_number_offset: 'Pesien alkunumero',
  Hive_type: 'Pesätyyppi',
  Hive_layers: 'Pesän osastot',
  Hive_frames: 'Kehiä per osasto',
  Hive_color: 'Pesän väri',
  Queen: 'Emo',
  queen: 'emo',

  settings_title: 'Asetukset',
  settings_description: 'Anturien asetukset',
  settings: 'asetukset',

  sensors_title: 'Laiteasetukset',
  sensors_description: 'Laitteiden tila ja rekisteröinti',
  // sensors: 'Laitteet',
  sensor: 'laite',

  Select: 'Valitse',
  Not_selected: 'Ei valittu',
  Poor: 'Huono',
  Fair: 'Kohtalainen',
  Average: 'Keskimääräinen',
  Good: 'Hyvä',
  Excellent: 'Erinomainen',
  Low: 'Matala',
  Medium: 'Keskitaso',
  High: 'Korkea',
  Extreme: 'äärimmäinen',

  /* colors */
  select_color: 'Valitse väri',
  advanced: 'Lisäasetukset',

  /* sensors */
  Select_sensor: 'Valitse anturi',
  // temperature: 'Lämpötila',
  t: 'Lämpötila',
  t_0: 'Lämpötila 1',
  t_1: 'Lämpötila 2',
  t_2: 'Lämpötila 3',
  t_3: 'Lämpötila 4',
  t_4: 'Lämpötila 5',
  t_5: 'Lämpötila 6',
  t_6: 'Lämpötila 7',
  t_7: 'Lämpötila 8',
  t_8: 'Lämpötila 9',
  t_9: 'Lämpötila 10',
  light: 'Auringonvalo',
  l: 'Auringonvalo',
  water: 'Vesi',
  w: 'Vesi',
  humidity: 'Kosteus',
  h: 'Kosteus',
  air_pressure: 'Ilmanpaine',
  p: 'Ilmanpaine',
  weight: 'Paino',
  w_v: 'Painoanturin arvo kaikki anturit',
  w_fl: 'Painoanturin arvo etu vasen',
  w_fr: 'Painoanturin arvo etu oikea',
  w_bl: 'Painoanturin arvo taka vasen',
  w_br: 'Painoanturin arvo taka oikea',
  weight_kg: 'Paino',
  weight_kg_corrected: 'Paino (corr)',
  weight_combined_kg: 'Paino yhdistelmä',
  bat_volt: 'Akku',
  bv: 'Akku',
  sound_fanning_4days: 'Tuuletus 4pv mehiläiset',
  s_fan_4: 'Tuuletus 4pv mehiläiset',
  sound_fanning_6days: 'Tuuletus 6pv mehiläiset',
  s_fan_6: 'Tuuletus 6pv mehiläiset',
  sound_fanning_9days: 'Tuuletus 9pv mehiläiset',
  s_fan_9: 'Tuuletus 9pv mehiläiset',
  sound_flying_adult: 'Lentomehiläiset',
  s_fly_a: 'Lentomehiläiset',
  sound_total: 'ääni yhteensä',
  s_tot: 'ääni yhteensä',
  s_spl: 'äänen painetaso',
  bee_count_in: 'Mehiläisten määrä sisään',
  bc_i: 'Mehiläisten määrä sisään',
  bee_count_out: 'Mehiläisten määrä ulos',
  bc_o: 'Mehiläisten määrä ulos',
  t_i: 'Sisälämpötila',
  rssi: 'Signaalin voimakkuus',
  snr: 'Signaali kohina',
  lat: 'Leveysaste',
  lon: 'Pituusaste',
  Sound_measurements: 'äänen mittaukset',
  Sensor_info: 'Anturin tiedot',
  s_bin098_146Hz: '098-146Hz',
  s_bin146_195Hz: '146-195Hz',
  s_bin195_244Hz: '195-244Hz',
  s_bin244_293Hz: '244-293Hz',
  s_bin293_342Hz: '293-342Hz',
  s_bin342_391Hz: '342-391Hz',
  s_bin391_439Hz: '391-439Hz',
  s_bin439_488Hz: '439-488Hz',
  s_bin488_537Hz: '488-537Hz',
  s_bin537_586Hz: '537-586Hz',
  s_bin_71_122: '071-122Hz',
  s_bin_122_173: '122-173Hz',
  s_bin_173_224: '173-224Hz',
  s_bin_224_276: '224-276Hz',
  s_bin_276_327: '276-327Hz',
  s_bin_327_378: '327-378Hz',
  s_bin_378_429: '378-429Hz',
  s_bin_429_480: '429-480Hz',
  s_bin_480_532: '480-532Hz',
  s_bin_532_583: '532-583Hz',
  s_bin_0_201: '0-201Hz',
  s_bin_201_402: '201-402Hz',
  s_bin_402_602: '402-602Hz',
  s_bin_602_803: '602-803Hz',
  s_bin_803_1004: '803-1004Hz',
  s_bin_1004_1205: '1004-1205Hz',
  s_bin_1205_1406: '1205-1406Hz',
  s_bin_1406_1607: '1406-1607Hz',
  s_bin_1607_1807: '1607-1807Hz',
  s_bin_1807_2008: '1807-2008Hz',
  icon: 'Kuvake',
  precipIntensity: 'Sademäärä',
  precipProbability: 'Sateen todennäköisyys',
  precipType: 'Sade tyyppi',
  temperature: 'Ulkolämpötila',
  apparentTemperature: 'Näkyvä lämpötila',
  dewPoint: 'Kastepiste',
  // humidity: 'Kosteus',
  pressure: 'Ilmanpaine',
  windSpeed: 'Tuulennopeus',
  windGust: 'Tuuli puuskissa',
  windBearing: 'Tuulen suunta',
  cloudCover: 'Pilvisyys',
  uvIndex: 'UV indeksi',
  visibility: 'Näkyvyys',
  ozone: 'Otsoni',

  /* Measurements */
  hour: 'Tunti',
  day: 'Päivä',
  week: 'Viikko',
  month: 'Kuukausi',
  year: 'Vuosi',

  /* settings */
  could_not_load_settings: 'Asetuksia ei voitu ladata',
  offline: 'Ei yhteyttä',
  remote: 'Etä',
  connected: 'Suora',

  yes: 'Kyllä',
  no: 'Ei',

  footer_text: 'Avoimen lähdekoodin mehiläistarhausta',
  beep_foundation: 'BEEP säätiö',

  Checklist: 'Tarkistuslista | Tarkistusluettelot',
  checklist: 'tarkistuslista | tarkistusluettelot',
  Checklist_items: 'Tarkistuslistan kohteet',
  edit_hive_checklist:
    'Lisää/poista kohteita pesän tarkastuslistalta valitsemalla ruutu/poistamalla valinta. Voit myös järjestää kohteet haluamaasi järjestykseen vetämällä ja pudottamalla. Vinkki: jos kirjoitat termin hakukenttään, kaikki kyseistä termiä sisältävät kohteet muuttuvat punaisiksi.',

  /* user */
  Data_export: 'Vie tiedot',
  Export_your_data:
    'Vie kaikki BEEP-tililläsi olevat tiedot ja lähetä Excel-tiedostona sähköpostissa. Excel-tiedostossa on oma välilehti henkilökohtaisille, pesän, tarhapaikan ja tarkastusten tiedoille.',

  Terms_of_use: 'Käyttöehdot',
  accept_policy:
    'Hyväksyn BEEP-palveluehdot, jotka ovat uuden eurooppalaisen tietosuojalain mukaiset.',
  policy_url: 'https://beep.nl/terms-of-service',
  policy_version: 'beep_terms_2018_05_25_avg_v1',
  approve_policy: 'Et ole vielä hyväksynyt viimeisimpiä käyttöehtoja',

  /* weight calibration settings */
  calibrate_weight: 'Kalibroi paino',
  calibrate_explanation:
    'Nollaa anturipaino vähentämällä nykyinen mittausarvo.',
  set_as_zero_value: 'Aseta nämä arvot 0 arvoiksi',
  set_weight_factor: 'Määritä painokerroin',
  own_weight_kg: 'Mikä on oma painosi kiloina?',
  start_calibration:
    'Astu nyt vaaalle ja paina alla olevaa nappia määritelläksesi painokertoimen. Jaa painosi tasaisesti.',
  currently_there_is: 'Paino on',
  nothing: 'ei mitään',
  on_the_scale: 'vaaalla',
  calibration_started:
    'Kalibrointi aloitettu... Odota kunnes seuraava mittaus tulee voimaan.',
  calibration_ended: 'Kalibrointi onnistui!',

  /* General items */
  server_down:
    'Sovellus ei ole käytössä huoltotöiden takia. Yritä myöhemmin uudelleen',
  add_to_calendar: 'Lisää kalenteriin',
  sort_on: 'Lajittelu päällä',
  Whats_new: 'Uutta!',
  Manual: 'Ohjeet',

  Site_title: 'BEEP | Mehiläismonitori',

  could_not_create_user:
    'Käyttäjää ei voida luoda tällä hetkellä.Pahoittelemme häiriötä, yritä myöhemmin uudelleen.',
  email_verified: 'Your e-mail address has been verified.',
  email_not_verified: 'Sähköpostiosoitettasi ei ole vielä vahvistettu',
  email_new_verification:
    'Klikkaa tätä linkkiä lähettääksesi uuden vahvistussähköpostin',
  email_verification_sent:
    'Vahvistuslinkillä varustettu viesti on lähetetty sähköpostiosoitteeseesi. Aktivoi tilisi ja kirjaudu sisään napsauttamalla sähköpostissa olevaa linkkiä.',

  not_filled: 'Vaaditaan, mutta ei täytetä',
  cannot_deselect:
    'Tätä kohdetta ei voi poistaa, koska se sisältää pakollista tietoa',
  Undelete: 'älä poista',
  the_field: 'Kenttä',
  is_required: 'on pakollinen',

  No_groups: 'Ryhmiä ei ole käytettävissä',
  not_available_yet:
    'Ei vielä käytettävissä. Klikkaa yläkulmassa olevaa painiketta lisätäksesi ryhmän.',
  Users: 'Käyttäjät',
  member: 'ryhmän jäsen | ryhmän jäsenet',
  Member: 'Ryhmän jäsen | Ryhmän jäsenet',
  Invite: 'Kutsu',
  Invited: 'Kutsuttu',
  Invitation: 'Kutsu | Kutsutut',
  Admin: 'Järjestelmänvalvoja',
  Creator: 'Ryhmän omistaja',
  Group: 'Yhteistyöryhmä | Tee yhteistyötä',
  group: 'yhteistyöryhmä | tee yhteistyötä',
  group_short: 'ryhmä | ryhmät',
  to_share:
    'Jaa tämän ryhmän kanssa. 1 napsautus = Ryhmän jäsenillä vain lukuoikeus 2 napsautusta = Ryhmän jäsenet voivat muokata',
  Invitation_accepted: 'Kutsu hyväksytty',
  Accept: 'Hyväksy',
  My_shared: 'Jaetut',
  invitee_name: 'Kutsutun nimi',
  Remove_group:
    'Oletko varma että haluat poistaa tämän ryhmän kokonaan kaikilta sen jäseniltä?',
  Detach_from_group: 'Poista minut ja pesäni tästä ryhmästä',
  my_hive: 'Minun pesäni',
  created: 'Luotu',
  group_detached: 'Poistuit ryhmästä onnistuneesti',
  group_activated: 'Ryhmäkutsu hyväksytty',
  group_explanation_1:
    '1. Luo uusi yhteistyöryhmä, jolla on selkeä otsikko ja valinnainen kuvaus',
  group_explanation_2: '2. Kutsu muita BEEP käyttäjiä sähköpostilla',
  group_explanation_3:
    '3. Jaa tietyt pesät, joita muut voivat tarkastella ja tehdä yhteistyötä',
  Filter_and_sort_on: 'Suodata ja lajittele:',

  /* New translations v2.2.0 */
  roofed: 'Onko mehiläistarhalla katos?',
  info: 'Info',

  research: 'Tutkimus',
  start_date: 'Aloituspäivämäärä',
  end_date: 'Päättymispäivämäärä',
  purpose: 'Tutkimuksen tarkoitus',
  institution: 'Tutkimuslaitos',
  type_of_data_used: 'Datan käyttö',
  link: 'Linkki',
  Consent: 'Suostumus',
  history: 'Historia',
  Current_consent: 'Nykyinen suostumus',
  consent_yes: 'Suostun jakamaan tietoni',
  consent_no: 'EN suostu jakamaan tietojani',
  my_beep_data: 'Oma BEEP datani',
  Consent_can_only_be_set: 'Suostumus voidaan muuttaa vain',
  earlier: 'aiempi',
  later: 'myöhempi',

  new_apiary_explanation: 'Luo uusi mehiläistarha neljässä vaiheessa',
  start_here: 'Aloita tästä',
  optional: 'valinnainen',
  dimensions: 'Mitat',
  details: 'yksityiskohdat',
  configuration: 'konfiguraatio',
  adjustments: 'säädöt',
  changes_queen_color: 'Muokkaus muuttaa värin',

  Brood_box_and_frame: 'Sikiöosasto ja kehä',
  Hive_order: 'Pesien järjestys tarhapaikalla',
  bb_width_cm: 'Sikiöosaston leveys (cm)',
  bb_height_cm: 'Sikiöosaston korkeus (cm)',
  bb_depth_cm: 'Sikiöosaston syvyys (cm)',
  fr_width_cm: 'Kehän leveys (cm)',
  fr_height_cm: 'Kehän korkeus (cm)',
  queen_line: 'linja',
  queen_tree: 'sukupuu',
  queen_description: 'muistiinpanot',
  Hive_short: 'Pesä | Pesät',

  Image: 'Kuva | Kuvat',
  Size: 'Koko',
  preview: 'esikatsele',

  Sensor_definitions: 'Anturimääritelmät',
  Inside: 'Mittaa sisällä',
  Offset: 'Offset',
  Multiplier: 'Kerroin',
  Input: 'Input',
  Output: 'Output',
  Last: 'Viimeinen',

  Export_sensor_data:
    "Vie kaikki tiedot per laite korkeimmalla mahdollisella resoluutiolla .csv-tiedostona, jonka voit avata Excelissä tai SPSS: ssä. HUOMAUTUS: 'aika ' -sarakkeessa olevat päivämäärän ja kellonajan tiedot ovat GMT-aikaa, muotoillut RFC 3339 -päivämäärä-aika -standardilla.",
  CSV_export_separator: 'CSV-datasarakkeen erotin',
  Selected_date: 'Valittu ajanjakso',
  Sensor_measurements: 'Anturimittaukset',
  too_much_data:
    'Liian paljon käsiteltäviä tietoja, valitse vähemmän anturimittauksia tai lyhennä aikajaksoa aloitus- ja lopetuspäivän välillä',
  sample_code_hive:
    'Valitse ensin pesä, jotta voit luoda yksilöllisen näytekoodin',
  sample_code_generate: 'Luo yksilöllinen näytekoodi',
  sample_code_delete: 'Poista yksilöllinen näytekoodi',

  measurement_interval: 'väli',
  from_weather_service: 'sääpalvelusta',

  /* New translations v3 */
  Collaborate: 'Tehdä yhteistyötä',

  /* TO BE TRANSLATED */
  click_hives_to_filter: 'Click hives to filter',
  for: 'for',
  last_visit: 'Last visit',
  apiary_details: 'Apiary details',
  group_details: 'Group details',
  diary: 'Diary',
  data: 'Data',
  photo: 'photo | photos',
  add_checklist: 'Add checklist',
  add_hive: 'Add hive',
  delete_apiary: 'Delete apiary',
  edit_apiary: 'Edit apiary',
  new_apiary: 'New apiary',
  delete_group: 'Delete group',
  edit_group: 'Edit group',
  new_group: 'New group',
  verification_code: 'verification code',
  limit_exceeded: 'Limit has been reached, try again later',
  confirm_email_title: 'Confirm your email',
  confirm_email_summary:
    "You've received a verification code in your email. Enter it below to verify your email adress",
  confirm: 'Confirm',
  Profile: 'Profile',
  Checklist_template: 'Checklist template | Checklist templates',
  Help: 'Help',
  Privacy: 'Privacy',
  FAQ: 'FAQ',
  Support: 'Support',
  no_inspections: 'Add first inspection',
  no_results: 'No results',
  Hive_brood_layer: 'Sikiö osasto | Sikiö osastot',
  Hive_honey_layer: 'Hunaja osasto | Hunaja osastot',
  Hive_queen_excluder_layer: 'Queen excluder | Queen excluders',
  Hive_feeding_box_layer: 'Feeding box | Feeding boxes',
  overrides_layer_colors: 'overrides layer colors',
  drag_layers: 'Drag layers to configure hive',
  page: 'page | pages',
  not_found: 'not found',
  sorry: 'Sorry',
  delete_layer: 'Delete layer',
  not_saved_error: 'Data could not be saved',
  something_wrong: 'Something went wrong',
  not_editable: 'not editable',
  unsaved_changes: 'Unsaved changes',
  save_changes:
    'Are you sure you want to leave this page? Any unsaved changes will be lost.',
  no_apiaries_yet: "You don't have any apiaries yet",
  need_help: 'Need help?',
  Apiary_color: 'Apiary color',
  Set_notification_date: 'Set notification date',
  remove_image: 'Remove image',
  Total_colony_size: 'Total colony size',
  bee: 'bee | bees',
  with_bees: 'with bees',
  change_checklist_confirm:
    'Are you sure you want to select a different checklist? Values of already filled in fields will be kept.',
  view: 'View',
  share: 'Share',
  edit_details: 'Edit details',
  remove_queen: 'Remove queen',
  remove_group_short: 'Remove collaboration group',
  device: 'Device | Devices',
  click_date_to_edit: 'Click date to edit.',
  accept_policy_1: 'I accept the BEEP ',
  accept_policy_2: ', that are compatible with the new European privacy law',
  terms_of_use: 'terms of service',
  invalid_password:
    'Password must contain at least 8 characters, one lowercase letter, one uppercase letter, one number and one special character (\\]{}()?\\-"!@#%&/\\,><\':;|_~`)',
  sensor_definition: 'sensor definition | sensor definitions',
  measurement: 'mittaus | mittaukset',
  remove_device: 'Remove device',
  last_message_received: 'Last message received',
  transmission_ratio: 'Transmission ratio',
  period: 'Period',
  download: 'Download',
  different_end_start: 'End and start date must differ',
  later_end_start: 'Start date must be earlier than end date',
  new_email_verification_sent:
    'A message with a verification link has been sent to your new e-mail address. Click the link in the e-mail to confirm your new e-mail address and log in.',
  sensordef_info:
    "A sensor definition is intended to convert a sensor value from an incoming 'raw' sensor value into a value according to a physical quantity and unit (e.g. w_v = 1098273 => weight_kg = 62,400 kg) or to calibrate a sensor (e.g. t_0 = 15.3 ° C => t_0 = 15.8 ° C). This can be done by setting an 'offset' and a 'multiplier'. The input and output value remains the same if offset '0' and multiplier '1' is set. The BEEP base app (from the App Store) will provide you with the right sensor definitions at the initial setup of your BEEP base.",
  or: 'or',
  select_all_hives: 'Select all hives',
  select_all_editable_hives: 'Selecteer alle aanpasbare bijenkasten',
  Alert: 'Alert | Alerts',
  alert: 'alert | alerts',
  remove_alert: 'Remove alert',
  alerts_enabled: 'Alerts enabled',
  alerts_disabled: 'Alerts disabled',
  edit_checklist_confirm:
    'Are you sure you want to edit the checklist? Any unsaved changes to your inspection will be lost.',
  edit_checklist_confirm_deselectedhives:
    'Are you sure you want to edit the checklist? Any unsaved changes to your inspection and your hive selection will be lost.',
  user_not_edited:
    'User data has not been edited. Possibly the user data is identical to the user data already in the database, or one or more fields are not correctly filled in. Please check your data and try again.',
  user_not_deleted: 'Something went wrong, user has not been deleted.',
  research_consent: 'Research consent',
  checklist_types: 'Personal, shared, research',
  edit_hive_checklist_no_touch:
    'Check/uncheck the boxes in the list below to add/remove items from your hive checklist. You can also unfold/fold and drag/drop the items to re-order them to your own style (N.B. this is not possible on a touchscreen device).',
  edit_hive_checklist_touch:
    'Check/uncheck the boxes in the list below to add/remove items from your hive checklist. Changing the order of items is only possible on a desktop computer.',
  input_not_possible_for_bulkinspection:
    'This item is not available when multiple hives are selected for an inspection, as it can only be filled in per individual hive. It is possible to fill in this item for a single hive at a later time, by editing the inspection for that hive.',
  save_bulkinspection_confirm:
    'Are you sure that you want to save this inspection for multiple hives at the same time?',
  deleted_but_not_saved_devices_warning:
    "N.B.: devices will only be removed after clicking the 'Save and delete' button in the top right corner.",
  no_alerts: 'No new alerts',
  alertrule: 'alert rule | alert rules',
  alertrule_pagetitle: 'Alert settings',
  Measurement: 'Measurement | Measurements',
  Calculation: 'Calculation',
  calculation: 'calculation',
  Calculation_minutes: 'Calculate per x number of minutes',
  Alert_on_occurences: 'When would you like to receive this alert?',
  Alert_on_occurences_hint:
    'Directly, or only after it has occurred an x number of times?',
  Direct: 'Directly',
  After: 'After ',
  times: ' times',
  Comparator: 'Comparator',
  comparator: 'comparator',
  Comparison: 'Comparison',
  comparison: 'comparison',
  Threshold_value: 'Threshold value',
  Minimum: 'Minimum',
  Maximum: 'Maximum',
  Derivative: 'Derivative (increase or decrease)',
  Count: 'Count',
  Value: 'Value',
  Difference: 'Difference',
  Absolute_value: 'Absolute value',
  Absolute_value_of_dif: 'Absolute value of the difference',
  Exclude_months: 'Deactivate this alert during the following months:',
  Exclude_hours: 'Deactivate this alert during the following hours:',
  Exclude_hives: 'Deactivate this alert for the following hives:',
  Exclude_hives_details:
    'N.B. By default, this alert will be executed for all hives with a measurement device.',
  months: 'months',
  hours: 'hours',
  delete_alertrule: 'Delete alert rule',
  Active: 'Active',
  Alert_via_email: 'Alert via email',
  Webhook_url: 'Webhook url',
  this_field: 'This field',
  alertrule_default: 'Default alert rule | Default alert rules',
  copy: 'Copy',
  Home: 'Home',
  Select_default_alertrule: 'Copy default alert rule',
  /* below, please keep all terms between [] in english: */
  alertrule_main_sentence:
    'I would like to receive an alert if the [calculation] [comparison] of the [measurement_quantity] [comparator] [threshold_value][measurement_unit]. This calculation will be executed every [calculation_minutes] hours, ',
  alertrule_occurences_direct_sentence:
    'and I would like to receive the alert directly. ',
  alertrule_occurences_indirect_sentence:
    ' but I would like to receive the alert only if it occurs [alert_on_occurences] times. ',
  alertrule_exclude_months_sentence:
    'This alert will be deactivated during the following months: [exclude_months]. ',
  alertrule_exclude_hours_sentence:
    'This alert will be deactivated during the following hours: [exclude_hours]. ',
  alertrule_exclude_hives_sentence:
    'This alert will be deactivated for the following hives: [exclude_hive_ids].',
  min: 'minimum',
  max: 'maximum',
  ave: 'average',
  der: 'derivative',
  cnt: 'count',
  equal_to: 'is equal to',
  less_than: 'is less than',
  greater_than: 'is greater than',
  less_than_or_equal: 'is less than or equal to',
  greater_than_or_equal: 'is greater than or equal to',
  alertrule_not_active:
    "This alert has been deactivated. You can activate it by checking the 'Active' box and saving this alert rule.",
  export_email_sent: 'Email with Excel file has been sent',
  export_file_saved: 'Excel file has been saved in your Downloads folder',
  Updated_at: 'Updated at',
  Not_yet_saved: 'Not yet saved',
  beep_base_explanation:
    "Jos sinulla on BEEP alusta (ks. yllä oleva kuva), käytä 'BEEP base app' (iOS ja Android) yhteyden muodostamiseksi tämän sovelluksen kanssa. Jos sinulla ei vielä ole BEEP alustaa, klikkaa valikon kohdasta 'BEEP verkkosivu' saadaksesi lisätietoja BEEP alustan saamisesta. Jos sinulla on oma mittauslaite ja haluat nähdä sen tiedot BEEP-sovelluksessa, lähetä meille viesti ja pyydä liittymistä Slack-yhteisöömme ja saat pääsyn API-kuvaukseen.",
  add_own_device: 'Add own device',
  devices_info_text:
    'Please note: do you own a BEEP base? Use the BEEP base app to add your device. It will then automatically appear in the list below.',
  devices_url_text: 'Here you can find more information on the BEEP base app.',
  alert_explanation_1:
    'If you own a BEEP base or another device you can set alerts, such that you will receive an alert when the measurement data meets certain requirements. For example, a sudden drop in weight because of swarming. Alerts will be shown in this app, you can choose to receive them via email as well.',
  alert_explanation_2:
    'To get you started there are a few default alert rules you can use (and adapt to your own needs). In addition, you can create your own alert rules.',
  alertrules_url_text:
    "Go to 'Alert settings' to create your first alert rule.",
  Apiary_management: 'Apiary management',
  Move: 'Move',
  Current_apiary: 'Current apiary',
  sensor_key: 'Device unique identifier',
  disabled_settings: 'Manually editing these settings is disabled.',
  Address_placeholder: 'Number, Street name, City',
  first_create_apiary: 'First, create an apiary',
  alertrule_deleted: 'Alert rule has been deleted',
  Unknown: 'Unknown',
  unknown: 'unknown',
  research_warning:
    "Please note: if you did not receive an invitation to participate, it is not needed to give consent to share your data, as your data won't be used in that case.",
  research_explanation_p1:
    'The BEEP platform is used in the research projects that are listed below. After you are invited to participate in a research project, you need to give consent for the researchers to access your bee data.',
  research_explanation_p2:
    'You can withdraw your consent at any time. From that moment onwards, no new data will be shared. The data that you shared in the period for which you gave consent will remain available for the research. In case of questions, please direct these to the contact person of your research project.',
  research_info:
    'Before you consent, please review the research description provided through the link below and request for additional details if needed.',
  save_and_delete: 'Save and delete',
  drag_layers_info_text:
    'Drag layers from the left hand side to the desired position within the hive on the right hand side. Delete a layer from the hive by clicking on it and then clicking on the red bin icon. Within the hive layers can be dragged as well to edit the position, layer color can be edited by clicking on the layer.',
}

export default translations
