/*
 * Beep - Translations
 * Author: Pim van Gennip (pim@iconize.nl)
 *
 */
const translations = {
  /* Date picker */
  monthsFull: [
    'januari',
    'februari',
    'maart',
    'april',
    'mei',
    'juni',
    'juli',
    'augustus',
    'september',
    'oktober',
    'november',
    'december',
  ],
  monthsShort: [
    'jan',
    'feb',
    'maa',
    'apr',
    'mei',
    'jun',
    'jul',
    'aug',
    'sep',
    'okt',
    'nov',
    'dec',
  ],
  weekdaysFull: [
    'zondag',
    'maandag',
    'dinsdag',
    'woensdag',
    'donderdag',
    'vrijdag',
    'zaterdag',
  ],
  weekdaysShort: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
  Today: 'Vandaag',
  Clear: 'Verwijderen',
  Close: 'Sluiten',
  firstDay: 1,
  format: 'dddd d mmmm yyyy',

  /* main */
  Website: 'Website',
  Feedback: 'Feedback',
  Feedback_mail_header: 'Beep app feedback',
  Feedback_mail_body:
    'Beste Stichting Beep,%0D%0A%0D%0AHierbij mijn feedback over de Beep app.%0D%0A%0D%0AIk kwam het volgende tegen:%0D%0A%0D%0AVoordat dit gebeurde deed ik het volgende:%0D%0A%0D%0AHet beeld zag er zo uit (graag screenshot meesturen):%0D%0A%0D%0A%0D%0A%0D%0A',
  Diagnostic_info:
    'Diagnostische informatie (voor het traceren van evt. problemen):%0D%0A',
  back: 'Terug',
  menu: 'Menu',
  lighting: 'Sfeerverlichting',
  camera: 'Camera',
  weather: 'Weer',
  sensors: 'Meetsystemen',
  sensors_na:
    'Hier komt straks een overzicht van jouw BEEP sensoren, waarmee je kasten op afstand kunt monitoren. Je kunt ook sensoren van andere partijen koppelen, mits ze een API hebben, waarmee je de data kunt uitlezen.',

  no_valid_authentication: 'Geen geldige login ontvangen',
  succesfully_saved: 'Succesvol opgeslagen',

  switch_language: 'Andere taal',
  Delete: 'Verwijderen',
  Search: 'Zoeken...',

  /* user error messages */
  User: 'Gebruiker',
  User_data: 'Gebruikersgegevens',
  user_data: 'gebruikersgegevens',
  updated: 'aangepast',
  delete_complete_account:
    'Weet je zeker dat je je volledige account, inclusief alle bijenstaden, kasten en inspecties wilt verwijderen? Dit is niet terug te draaien.',
  username_is_required: 'Vul een gebruikersnaam in.',
  username_already_exists: 'De gebruikersnaam is al in gebruik',
  password_is_required: 'Vul een wachtwoord in.',
  email_is_required: 'Vul een e-mailadres in',
  email_already_exists: 'Het e-mailadres is al in gebruik',
  policy_accepted_is_required:
    'Om te registreren, dien je de Servicevoorwaarden te accepteren',

  already_registered: 'Ik heb al een account',
  invalid_user: 'Gebruikersnaam of wachtwoord incorrect',
  invalid_password: 'Wachtwoord te kort (min. 8 tekens)',
  no_password_match: 'De wachtwoorden komen niet overeen',
  invalid_token: 'Ongeldige code',

  no_valid_email: 'Ongeldig e-mailadres',

  empty_fields: 'U heeft niet alle velden goed ingevuld.',
  match_passwords: 'De wachtwoorden komen niet overeen.',

  succesfully_registered: 'Je bent succesvol geregistreerd.',
  authentication_failed: 'Inloggen niet gelukt',

  no_valid_input_received:
    'Data kon niet worden opgeslagen, geen geldige gegevens.',

  remove_all_settings: 'Verwijder app data',
  remove_apiary: 'Verwijder bijenstand',
  remove_hive: 'Verwijder kast',
  remove_inspection: 'Verwijder inspectie',

  Error: 'Fout',
  Warning: 'Let op',
  first_remove_hives:
    'Let op: er zijn nog kasten op deze bijenstand aanwezig. U kunt specifieke kasten (en hun inspecties) bewaren door ze eerst te verplaatsen naar een andere bijenstand. Als u doorgaat met verwijderen, verwijdert u ALLE kasten en inspecties die op deze locatie aanwezig zijn.',

  Date: 'Datum',
  ok: 'Ok',
  previous: 'Vorige',
  prev: 'vorige',
  next: 'Volgende',
  add: 'Toevoegen',
  create_new: 'Maak een nieuwe',
  New: 'Nieuwe',

  warning: 'Let op',

  apply: 'Toepassen',
  Cancel: 'Annuleren',
  automatic: 'Automatisch',
  manually: 'Handmatig',
  on: 'Aan',
  off: 'Uit',

  /* login */
  login_title: 'Inloggen',
  login: 'Aanmelden',
  back_to_login: 'Terug naar inloggen',
  forgot_password: 'Wachtwoord vergeten?',

  username: 'Gebruikersnaam',
  password: 'Wachtwoord',
  confirm_password: 'Bevestig wachtwoord',
  email: 'E-mail',
  token: 'Code',

  create_login_question:
    'Nog geen account? Registreer als een nieuwe gebruiker',
  create_login: 'Registreer als een nieuwe gebruiker',
  create_login_summary: 'Creeër een nieuw account',
  save: 'Opslaan',
  save_and_return: 'Opslaan en terug',

  logout: 'Uitloggen',
  logout_title: 'Uitloggen als ',
  logout_now: 'Weet je zeker dat je wil uitloggen?',
  member_since: 'Beept sinds',

  /* password recovery */
  password_recovery_title: 'Wachtwoord vergeten?',
  password_recovery_remembered: 'Oh wacht, ik weet mijn wachtwoord weer!',
  password_recovery_user: 'Gebruikersinformatie',
  password_recovery_send_mail: 'Verstuur code',
  password_recovery_code_not_received: 'Code niet ontvangen binnen 5 minuten?',
  password_recovery_enter_code: 'Voer de ontvangen code in',
  password_recovery_reset_title: 'Stel een nieuw wachtwoord in',
  password_recovery_reset_password: 'Verander wachtwoord',
  password_recovery_reminder_success:
    'Er is een e-mail verstuurd, klik op de link in de e-mail om uw wachtwoord opnieuw in te stellen.',
  password_recovery_reminder_summary:
    'Vul je e-mailadres in. Je ontvangt vervolgens een link waarmee je een nieuw wachtwoord kunt instellen in de volgende stap.',

  password_recovery_reset_summary:
    'Gebruik de ontvangen code om een nieuw wachtwoord voor je account in te stellen',
  password_recovery_reset_success:
    'Je wachtwoord is succesvol aangepast, je bent nu ingelogd.',

  new_password: 'Nieuw wachtwoord',
  confirm_new_password: 'Bevestig nieuw wachtwoord',

  go_to_dashboard: 'Ga direct naar het overzicht',

  /* overview */
  overview_title: 'Overzicht',
  overview: 'Overzicht',
  color: 'Kleur',
  state: 'Stand',
  climate: 'Klimaatregeling',
  plant_state: 'Status planten',
  connection_state: 'Status verbinding',

  /* hives */
  locations_title: 'Beep',
  hives_title: 'Beep',
  Hive: 'Kast | Bijenkasten',
  hive: 'kast | bijenkasten',
  Location: 'Bijenstand | Bijenstanden',
  location: 'bijenstand | bijenstanden',
  Name: 'Naam',
  name: 'naam',
  Type: 'Type',
  type: 'type',
  Layer: 'Laag',
  layer: 'laag',
  brood: 'Broed',
  honey: 'Honing',
  inspect: 'Inspecteren',
  inspection: 'inspectie | inspecties',
  Inspection: 'Inspectie | Inspecties',
  New_inspection: 'Nieuwe inspectie',
  Edit_inspection: 'Inspectie aanpassen',
  Actions: 'Acties',
  Conditions: 'Bevindingen (geïnspecteerd)',
  edit: 'Aanpassen',
  Hive_brood_layers: 'Broedkamers',
  Hive_honey_layers: 'Honingkamers',
  Hive_layer_amount: 'Aantal kamers',
  Bee_race: 'Bijenras',
  Birth_date: 'Geboortedatum',
  Color: 'Kleur',
  Queen_colored: 'Moer gemerkt',
  Queen_clipped: 'Moer geknipt',
  Queen_fertilized: 'Moer bevrucht',
  Age: 'Leeftijd',
  years_old: 'jaar oud',

  /* Hive check items */
  Date_of_inspection: 'Inspectiedatum',
  reminder: 'Herinnering',
  remind_date: 'Herinneringsdatum',

  condition: 'Inspectie',
  overall: 'Algemeen',
  positive_impression: 'Totaalindruk',
  needs_attention: 'Extra aandacht nodig',
  notes: 'Notities',
  notes_for_next_inspection:
    'Korte notitie voor volgende inspectie (zichtbaar in overzicht)',
  Not_implemented_yet: 'Dit item is nog niet geïmplementeerd',
  save_input_first: 'Wil je je ingevoerde gegevens eerst opslaan?',

  /* dashboard */
  dashboard_title: 'Dashboard',
  dashboard: 'Dashboard',
  measurements: 'Metingen',
  measurementsError: 'Kan geen metingen laden, controleer de netwerkverbinding',
  last_measurement: 'Laatste meetwaarde',
  at: 'op',
  measurement_system: 'Beep meetsysteem',
  no_data: 'Geen data beschikbaar',
  no_chart_data: 'Geen sensordata beschikbaar voor de geselecteerde periode',

  /* settings */
  General: 'Algemeen',
  Place: 'Locatie',
  Country: 'Land',
  City: 'Stad',
  Address: 'Adres',
  Lattitude: 'Breedtegraad',
  Longitude: 'Lengtegraad',
  Street: 'Straat',
  Number: 'Nr.',
  Postal_code: 'Postcode',
  Description: 'Beschrijving',
  Hive_settings: 'Kastinstellingen',
  Hive_amount: 'Aantal kasten',
  Hive_prefix: 'Kastnaam voorvoegsel (vòòr nummer)',
  Hive_number_offset: 'Startnummer kasten',
  Hive_type: 'Kasttype',
  Hive_layers: 'Kamers per kast',
  Hive_frames: 'Ramen per kamer',
  Hive_color: 'Kastkleur',
  Queen: 'Moer',
  queen: 'moer',

  settings_title: 'Instellingen overzicht',
  settings_description: 'Overzicht van de account instellingen',
  settings: 'Instellingen',

  sensors_title: 'Meetsysteem instellingen',
  sensors_description: 'Meetsysteem status en registratie',
  //   sensors: 'Meetsystemen',
  sensor: 'Meetsysteem',

  Select: 'Selecteer',
  Not_selected: 'Niet geselecteerd',
  Poor: 'Slecht',
  Fair: 'Matig',
  Average: 'Gemiddeld',
  Good: 'Goed',
  Excellent: 'Zeer goed',
  Low: 'Laag',
  Medium: 'Gemiddeld',
  High: 'Hoog',
  Extreme: 'Extreem',

  /* colors */
  select_color: 'Selecteer een kleur',
  advanced: 'Geavanceerd',

  /* sensors */
  Select_sensor: 'Selecteer een sensor',
  t: 'Temperatuur',
  t_0: 'Temperatuur 1',
  t_1: 'Temperatuur 2',
  t_2: 'Temperatuur 3',
  t_3: 'Temperatuur 4',
  t_4: 'Temperatuur 5',
  t_5: 'Temperatuur 6',
  t_6: 'Temperatuur 7',
  t_7: 'Temperatuur 8',
  t_8: 'Temperatuur 9',
  t_9: 'Temperatuur 10',
  //   temperature: 'Temperatuur',
  l: 'Zonlicht',
  light: 'Zonlicht',
  water: 'Water',
  w: 'Water',
  humidity: 'Luchtvochtigheid',
  h: 'Luchtvochtigheid',
  air_pressure: 'Luchtdruk',
  p: 'Luchtdruk',
  weight: 'Gewicht',
  w_v: 'Gewicht sensorwaarde gecombineerd',
  w_fl: 'Gewicht sensorwaarde links voor',
  w_fr: 'Gewicht sensorwaarde rechts voor',
  w_bl: 'Gewicht sensorwaarde links achter',
  w_br: 'Gewicht sensorwaarde rechts achter',
  weight_kg: 'Gewicht',
  weight_kg_corrected: 'Gewicht (corr)',
  weight_combined_kg: 'Gewicht combi',
  bat_volt: 'Batterij',
  bv: 'Batterij',
  sound_fanning_4days: 'Vent 4d bijen',
  s_fan_4: 'Vent 4d bijen',
  sound_fanning_6days: 'Vent 6d bijen',
  s_fan_6: 'Vent 6d bijen',
  sound_fanning_9days: 'Vent 9d bijen',
  s_fan_9: 'Vent 9d bijen',
  sound_flying_adult: 'Vlieggeluid',
  s_fly_a: 'Vlieggeluid',
  sound_total: 'Totaal geluid',
  s_tot: 'Totaal geluid',
  s_spl: 'Geluidsdruk',
  bee_count_in: 'Bijen naar binnen',
  bc_i: 'Bijen naar binnen',
  bee_count_out: 'Bijen naar buiten',
  bc_o: 'Bijen naar buiten',
  t_i: 'Temp. in kast',
  rssi: 'Zendsterkte',
  snr: 'Zendruis',
  lat: 'Noorderbreedte',
  lon: 'Oosterlengte',
  Sound_measurements: 'Geluidsmetingen',
  Sensor_info: 'Sensorinformatie',
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
  icon: 'Icoon',
  precipIntensity: 'Regenval',
  precipProbability: 'Kans op regen',
  precipType: 'Soort regen',
  temperature: 'Buitentemperatuur',
  apparentTemperature: 'Schijnbare temperatuur',
  dewPoint: 'Douwpunt',
  //   humidity: 'Luchtvochtigheid',
  pressure: 'Luchtdruk',
  windSpeed: 'Windsnelheid',
  windGust: 'Windstoten',
  windBearing: 'Windrichting',
  cloudCover: 'Bewolking',
  uvIndex: 'UV index',
  visibility: 'Zicht',
  ozone: 'Ozon',

  /* Measurements */
  hour: 'Uur',
  day: 'Dag',
  week: 'Week',
  month: 'Maand',
  year: 'Jaar',

  /* settings */
  could_not_load_settings: 'De instellingen konden niet worden geladen',
  offline: 'Geen verbinding',
  remote: 'Op afstand',
  connected: 'Direct',

  yes: 'Ja',
  no: 'Nee',

  footer_text: 'Open source bijenmonitor',
  beep_foundation: 'Stichting BEEP',

  Checklist: 'Kastkaart | Kastkaarten',
  Checklist_items: 'Kastkaartelementen',
  edit_hive_checklist:
    'Vink items in de onderstaande lijst van beschikbare kastkaartitems aan/uit om ze aan je eigen kastkaart toe te voegen/te verwijderen. Voor meer overzicht, kun je de categorieën in- en uitklappen. Ook kun je ze naar boven/beneden slepen om de volgorde van jouw kastkaart te bepalen. Tip: Als je in het zoekveld een term invult, worden alle items die de zoekterm bevatten rood en klappen ze uit.',

  /* user */
  Data_export: 'Data exporteren',
  Export_your_data:
    'Exporteer alle data die is opgeslagen in je Beep account en verstuur deze in een e-mail met als bijlage een Excel (.xslx) bestand. Het bestand heeft meerdere tabbladen met daarop je persoonlijke-, bijenstand-, kast- en inspectiegegevens.',

  Terms_of_use: 'Servicevoorwaarden',
  accept_policy:
    'Ik accepteer de BEEP servicevoorwaarden, die in lijn zijn met de nieuwe Europese privacywetgeving',
  policy_url: 'https://beep.nl/servicevoorwaarden',
  policy_version: 'beep_terms_2018_05_25_avg_v1',
  approve_policy:
    'Je hebt nog geen akkoord gegeven op de aangepaste gebruikersvoorwaarden.',

  /* weight calibration settings */
  calibrate_weight: 'Gewicht calibreren',
  current_offset_is: 'Huidige nulwaarde is',
  calibrate_explanation:
    'Gewicht van de sensoren bij de volgende meting op 0 zetten door de huidige waarde ervanaf te trekken.',
  set_as_zero_value: 'Stel deze waarde(n) in als 0-waarde(n)',
  set_weight_factor: 'Gewichtsfactor bepalen',
  own_weight_kg: 'Wat is je eigen gewicht in kg?',
  start_calibration:
    'Stap nu op de weegschaal en druk de onderstaande knop in zodra je er op staat. Verdeel je gewicht gelijkmatig.',
  currently_there_is: 'Er staat nu',
  nothing: 'niets',
  on_the_scale: 'op de weegschaal',
  calibration_started: 'Calibratie gestart... Wacht op de volgende meting.',
  calibration_ended: 'Calibratie geslaagd!',

  /* General items */
  server_down:
    'De app is tijdelijk niet beschikbaar door onderhoud, probeer het later opnieuw',
  add_to_calendar: 'Zet in agenda',
  sort_on: 'Sorteer op',
  Whats_new: 'Nieuw!',
  Manual: 'Handleiding',

  Site_title: 'BEEP | Bijenmonitor',

  could_not_create_user:
    'Gebruiker kan op dit moment niet aangemaakt worden, probeer het a.u.b. later opnieuw.',
  email_verified: 'Je e-mail adres is gevalideerd.',
  email_not_verified: 'Je e-mail adres is nog niet gevalideerd.',
  email_new_verification:
    'Klik op deze link om een nieuwe validatie e-mail te versturen.',
  email_verification_sent:
    'Er is een bericht met een validatie-link naar je e-mail adres gestuurd. Klik op de link in de e-mail om je account te activeren en in te loggen.',

  not_filled: 'is verplicht, maar niet ingevuld',
  cannot_deselect:
    'Dit item kan niet worden verwijderd, omdat het een verplicht item bevat',
  sensor_key: 'Sensor code',
  Undelete: 'Niet verwijderen',
  the_field: 'Vul een',
  is_required: 'in',

  No_groups: 'Geen groepen beschikbaar',
  not_available_yet:
    'nog niet beschikbaar. Maak de eerste aan door op de knop in de rechte bovenhoek te drukken.',
  Users: 'Gebruikers',
  member: 'groepslid | groepsleden',
  Member: 'Groepslid | Groepsleden',
  Invite: 'Uitnodigen',
  Invited: 'Uitgenodigd',
  invitations: 'uitnodigingen',
  Admin: 'Beheerder',
  Creator: 'Groep eigenaar',
  Collaborate: 'Samenwerken',
  Group: 'Samenwerkingsgroep | Samenwerkingsgroepen',
  group: 'samenwerkingsgroep | samenwerkingsgroepen',
  to_share:
    'om te delen met de groep. 1x klikken = delen om te bekijken, 2x klikken is delen met aanpassingsmogelijkheid',
  Invitation_accepted: 'Uitnodiging geaccepteerd',
  Accept: 'Accepteer',
  My_shared: 'Mijn gedeelde',
  invitee_name: 'Naam genodigde',
  Remove_group:
    'Weet u zeker dat u deze gedeelde groep voor alle leden wilt verwijderen',
  Detach_from_group: 'Verwijder mij en mijn kasten uit deze groep',
  my_hive: 'Mijn kast',
  created: 'aangemakt',
  group_detached: 'Succesvol uit de groep gestapt',
  group_activated: 'Groepsuitnodiging geaccepteerd',
  group_explanation_1:
    '1. Maak een nieuwe samenwerkingsgroep aan met een duidelijke titel en evt. beschrijving',
  group_explanation_2:
    '2. Nodig andere Beep gebruikers uit op hun Beep e-mail adres',
  group_explanation_3:
    '3. Deel specifieke kasten om te bekijken, of om samen aan te werken',
  Filter_and_sort_on: 'Filter en sorteer op:',

  /* New translations v2.2.0 */
  info: 'Info',
  research: 'Onderzoek',
  roofed: 'Heeft de bijenstand een dak?',
  research_explanation:
    'Dit scherm bevat de beschikbare onderzoeken waarvoor je toestemming kunt geven om de gegevens die je in de BEEP app bijhoudt mee te delen. Door toestemming te geven voor het delen van de bij het onderzoek aangegeven gegevens, kun je bijdragen aan onderzoek ter ondersteuning van de gezondheid van honingbijen. Lees voordat je toestemming geeft de onderzoeksbeschrijving via de onderstaande link en vraag indien nodig om aanvullende informatie. Je kunt je toestemming te allen tijde intrekken. Vanaf dat moment worden er geen nieuwe gegevens gedeeld. De gegevens die je hebt gedeeld in de periode waarvoor je toestemming hebt gegeven, blijven beschikbaar voor onderzoek. Neem bij vragen contact op met de daarvoor bestemde contactpersoon.',
  research_info:
    'Door uw gegevens met onderzoekers te delen, helpt u hen om meer gegevens te kunnen analyseren en tot betere conclusies te komen voor hun onderzoek.',
  start_date: 'Startdatum',
  end_date: 'Einddatum',
  purpose: 'Onderzoeksdoel',
  institution: 'Onderzoeksinstituut',
  type_of_data_used: 'Gebruik data',
  link: 'Link',
  Consent: 'Toestemming',
  history: 'geschiedenis',
  Current_consent: 'Huidige toestemming',
  consent_yes: 'Ik sta toe mijn data te gebruiken',
  consent_no: 'Ik sta NIET toe mijn data te gebruiken',
  my_beep_data: 'Mijn eigen BEEP gegevens',
  Consent_can_only_be_set: 'Toestemming kan alleen aangepast worden naar',
  earlier: 'een eerdere',
  later: 'een latere',

  new_apiary_explanation: 'Maak een nieuwe bijenstand in 4 stappen',
  start_here: 'Begin hier',
  optional: 'optioneel',
  dimensions: 'afmetingen',
  details: 'details',
  configuration: 'configuratie',
  adjustments: 'aanpassingen',
  changes_queen_color: 'wijzigen past de kleur aan',

  Brood_box_and_frame: 'Broedkamer- en raam',
  Hive_order: 'Kastvolgorde op bijenstand',
  bb_width_cm: 'Broedkamerbreedte (cm)',
  bb_height_cm: 'Broedkamerhoogte (cm)',
  bb_depth_cm: 'Broedkamerdiepte (cm)',
  fr_width_cm: 'Raambreedte (cm)',
  fr_height_cm: 'Raamhoogte (cm)',
  queen_line: 'lijn',
  queen_tree: 'stamboom',
  queen_description: 'notitie',
  Hive_short: 'Kast',

  Images: 'Afbeeldingen',
  Size: 'Grootte',
  preview: 'voorbeeld',

  Sensor_definitions: 'Sensor definitie',
  Inside: 'Meet binnen',
  Offset: 'Offset',
  Multiplier: 'Multiplier',
  Input: 'Input',
  Output: 'Output',
  Last: 'Laatste',

  Export_sensor_data:
    "Exporteer alle sensordata in de hoogst beschikbare resolutie per meetapparaat in een .csv bestand dat je in Excel of SPSS kunt openen. Let op dat de datum/tijdaanduiding in de 'time' kolom altijd in GMT tijd is, opgemaakt volgens de RFC 3339 standaard.",
  CSV_export_separator: 'CSV data kolomscheidingsteken',
  Selected_date: 'Geselecteerde tijdspanne',
  Sensor_measurements: 'Sensormetingen',
  too_much_data:
    'Te veel data om te exporteren. Selecteer minder Sensormetingen en/of beperk de tijdspanne tussen start en einddatum.',

  beep_base_explanation:
    "Als je een BEEP-base hebt (zoals getoond in het bovenstaande afbeelding), gebruik dan de native app (iOS en Android) om de communicatie met deze app in te stellen. Als je nog geen BEEP-base hebt, klik dan op het menu item 'BEEP website' voor updates over hoe je aan een BEEP-base kunt komen. Als je je eigen meetapparaat hebt en de gegevens graag in de BEEP-app wilt zien, stuur ons dan een bericht met het verzoek om lid te worden van onze Slack-community en je krijgt toegang tot de API-beschrijving.",

  /* New translations v3 */
  click_hives_to_filter: 'Klik op bijenkasten om te filteren',
  for: 'voor',
  last_visit: 'Laatste bezoek',
  apiary_details: 'Bijenstand details',
  group_details: 'Groep details',
  diary: 'logboek',
  data: 'data',
  photo: "foto | foto's",
  add_checklist: 'Voeg kastkaart toe',
  add_hive: 'Voeg kast toe',
  delete_apiary: 'Wis bijenstand',
  edit_apiary: 'Bewerk bijenstand',
  new_apiary: 'Nieuwe bijenstand',
  delete_group: 'Wis groep',
  edit_group: 'Bewerk groep',
  new_group: 'Nieuwe groep',
  verification_code: 'verificatiecode',
  limit_exceeded: 'Limiet is bereikt, probeer later opnieuw',
  confirm_email_title: 'Bevestig e-mailadres',
  confirm_email_summary:
    'U heeft een e-mail met een verificatiecode ontvangen. Vul deze hieronder in om uw e-mailadres te verifiëren',
  confirm: 'Bevestig',
  Profile: 'Profiel',
  Checklist_template: 'Kastkaart template | Kastkaart templates',
  Help: 'Help',
  Privacy: 'Privacy',
  FAQ: 'Veelgestelde vragen',
  Support: 'Support',
}

export default translations
