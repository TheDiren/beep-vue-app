/*
 * Beep - Translations
 * Author: Pim van Gennip (pim@iconize.nl)
 *
 */
const translations = {
  /* Date picker */
  monthsFull: [
    'Januar',
    'Februar',
    'März',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember',
  ],
  monthsShort: [
    'Jan',
    'Feb',
    'Mär',
    'Apr',
    'Mai',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Okt',
    'Nov',
    'Dez',
  ],
  weekdaysFull: [
    'Sonntag',
    'Montag',
    'Dienstag',
    'Mittwoch',
    'Donnerstag',
    'Freitag',
    'Samstag',
  ],
  weekdaysShort: ['Son', 'Mon', 'Die', 'Mit', 'Don', 'Fre', 'Sam'],
  Today: 'Heute',
  Clear: 'Löschen',
  Close: 'Schließen',
  firstDay: 1,
  format: 'dddd d mmmm yyyy',

  /* main */
  Website: 'Webseite',
  Feedback: 'Feedback',
  Feedback_mail_header: 'Beep app feedback',
  Feedback_mail_body:
    'Dear Beep foundation,%0D%0A%0D%0AHereby my feedback about the Beep app.%0D%0A%0D%0AI discovered this:%0D%0A%0D%0AJust before that happened, i did:%0D%0A%0D%0AThe screen was looking like (please include a screenshot):%0D%0A%0D%0A%0D%0A%0D%0A',
  Diagnostic_info: 'Diagnostic information (in case of a bug):%0D%0A',
  back: 'Zurück',
  menu: 'Menü',
  lighting: 'Beleuchtung',
  camera: 'Kamera',
  weather: 'Wetter',
  sensors: 'Sensoren',
  sensors_na:
    'BEEP Sensoren zum Anzeigen der Beuten-Daten werden bald verfügbar sein...',

  no_valid_authentication: 'Keine gültigen Authentifizierungsdaten erhalten',
  succesfully_saved: 'Erfolgreich gesichert',

  switch_language: 'Sprache wechseln',
  Delete: 'Löschen',
  Search: 'Suchen...',

  /* user error messages */
  User: 'Benutzer',
  User_data: 'Benutzerdaten',
  user_data: 'Benutzerdaten',
  updated: 'aktualisiert',
  delete_complete_account:
    'Bist Du sicher, dass Du Deinen kompletten Account sämtlich aller Daten löschen möchtest? Es ist unwiderruflich',
  username_is_required: 'Bitte Benutzernamen eingeben',
  username_already_exists: 'Der Benutzername existiert bereits',
  password_is_required: 'Bitte gib ein Passwort ein',
  email_is_required: 'Bitte gib eine Email-Adresse an',
  email_already_exists: 'Die Email-Adresse ist bereits in Verwendung',
  policy_accepted_is_required:
    'Um Dich zu registrieren, musst Du die Benutzungsbedingungen akzeptieren',

  already_registered: 'Ich bin bereits registriert',
  invalid_user: 'Der Benutzer konnte nicht gefunden werden',
  invalid_password: 'Das Passwort ist zu kurz (min. 8 Zeichen)',
  no_password_match: 'Falsches Passwort',
  invalid_token: 'Falscher Code',

  no_valid_email: 'Falsche Emailadresse',

  empty_fields: 'Bitte alle Felder ausfüllen',
  match_passwords: 'Falsches Passwort',

  succesfully_registered: 'Du wurdest erfolgreich registriert',
  authentication_failed: 'Authentifizierung fehlgeschlagen',

  no_valid_input_received:
    'Die Daten konnten nicht gesichert werden- keine gültigen Daten erhalten.',

  remove_all_settings: 'Entferne alle Einstellungen',
  remove_apiary: 'Entferne Bienenstand',
  remove_hive: 'Entferne Beute',
  remove_inspection: 'Entferne Durchsicht',

  Error: 'Fehler',
  Warning: 'Warnung',
  first_remove_hives:
    'Da sind bereits Beuten an diesem Ort. Der Ort kann gelöscht werden, wenn alle Beuten an einen anderen Ort transferiert oder gelöscht wurden.',

  Date: 'Datum',
  ok: 'Ok',
  previous: 'Vorherige',
  prev: 'vorherige',
  next: 'Nächste',
  add: 'hinzufügen',
  create_new: 'Neu anlegen:',
  New: 'Neu',

  warning: 'Warnung',

  apply: 'Bestätigen',
  Cancel: 'Abbrechen',
  automatic: 'Automatisch',
  manually: 'Manuel',
  on: 'An',
  off: 'Aus',

  /* login */
  login_title: 'Login',
  login: 'Login',
  back_to_login: 'Zurück zum Login',
  forgot_password: 'Passwort vergessen?',

  username: 'Benutzername',
  password: 'Passwort',
  confirm_password: 'Password bestätigen',
  email: 'Email',
  token: 'Code',

  create_login_question:
    'Noch keinen Account? Registriere Dich als neuer Benutzer',
  create_login: 'Als neuer Benutzer registrieren',
  create_login_summary: 'Lege einen neuen Benutzer an',
  save: 'Sichern',
  save_and_return: 'speichern und zurück',

  logout: 'Ausloggen',
  logout_title: 'Ausloggen als ',
  logout_now: 'Willst Du Dich jetzt wirklich ausloggen?',
  member_since: 'BEEPler seit',

  /* password recovery */
  password_recovery_title: 'Hast Du Dein Passwort vergessen?',
  password_recovery_remembered:
    'Oh, jetzt erinnere ich mich wieder an mein Passwort!',
  password_recovery_user: 'Benutzer information',
  password_recovery_send_mail: 'Sende Verificationscode',
  password_recovery_code_not_received:
    'Verifikationscode nicht innerhalb von 5 minuten erhalten?',
  password_recovery_enter_code:
    'Verifikationscode bekommen? Bitte hier eingeben',
  password_recovery_reset_title: 'Gib ein neues Passwort an',
  password_recovery_reset_password: 'Passwort ändern',
  password_recovery_reminder_success:
    'Eine Email wurde versendet. Bitte klicke auf den link in Deiner Email um das Passwort für diesen Account zurückzusetzen.',
  password_recovery_reminder_summary:
    'Bitte Email-Addresse eingeben. Du wirst eine Email erhalten mit einem Link um Dein Passwort ändern zu können',

  password_recovery_reset_summary:
    'Bitte benutze den Code den Du erhalten hast um ein neues Passwort für Deinen Account eingeben zu können',
  password_recovery_reset_success:
    'Dein Passwort wurde erfolgreich geändert und Du bist eingeloggt.',

  new_password: 'Neues Passwort',
  confirm_new_password: 'Bestätige das neue Passwort',

  go_to_dashboard: 'Gehe zu meiner Übersichtstabelle',

  /* overview */
  overview_title: 'Übersicht',
  overview: 'Übersicht',
  color: 'Farbe',
  state: 'An/Aus',
  connection_state: 'Status der Verbindung',

  /* hives */
  locations_title: 'Bienenhaus',
  hives_title: 'Beuten',
  Hive: 'Beute | Beuten',
  hive: 'Beute | Beuten',
  Location: 'Bienenhaus | Bienenhäuser',
  location: 'Bienenhaus | Bienenhäuser',
  Name: 'Name',
  name: 'Name',
  Type: 'Typ',
  type: 'Typ',
  Layer: 'Zarge',
  layer: 'Zarge',
  brood: 'Brut',
  honey: 'Honig',
  inspect: 'durchsehen',
  inspection: 'Durchsicht | Durchsichten',
  Inspection: 'Durchsicht | Durchsichten',
  New_inspection: 'Neue Durchsicht',
  Edit_inspection: 'Bearbeite Durchsicht',
  Actions: 'Bearbeitungen',
  Conditions: 'Bedingungen (geprüft)',
  edit: 'Bearbeite',
  Hive_brood_layers: 'Brutzargen',
  Hive_honey_layers: 'Honigzargen',
  Hive_layer_amount: 'Zargenanzahl',
  Bee_race: 'Bienenrasse',
  Birth_date: 'Geburtstag',
  Color: 'Farbe',
  Queen_colored: 'Königin gezeichnet',
  Queen_clipped: 'Flügel beschnitten',
  Queen_fertilized: 'Königin begattet',
  Age: 'Alter',
  years_old: 'Jahre alt',

  /* Hive check items */
  Date_of_inspection: 'Datum der Durchsicht',
  action: 'Aktion',
  reminder: 'Erinnerung',
  remind_date: 'Aufzeichnungsdatum',

  overall: 'Im Ganzen',
  positive_impression: 'Gesamteindruck',
  needs_attention: 'braucht Aufmerksamkeit',
  notes: 'Anmerkungen',
  notes_for_next_inspection:
    'Kurze Anmerkung für die nächste Durchsicht (in der Übersicht zu sehen)',
  Not_implemented_yet: 'Dieser Punkt ist noch nicht implementiert',
  save_input_first: 'Möchtest Du Deine Eingabe erst sichern?',

  /* dashboard */
  dashboard_title: 'Übersichtstabelle',
  dashboard: 'Übersichtstabelle',
  measurements: 'Messungen',
  measurementsError:
    'Kann keine Messungen laden, bitte Netzwerkverbindung prüfen',
  last_measurement: 'Letzte aufgezeichnete Messung war',
  at: 'am',
  measurement_system: 'Beep Meßsystem',
  no_data: 'Kein Data',
  no_chart_data: 'Kein Graph für den gewählten Zeitraum',

  /* settings */
  General: 'Generell',
  Place: 'Standort',
  Country: 'Land',
  City: 'Stadt',
  Address: 'Addresse',
  Lattitude: 'Lattitude',
  Longitude: 'Longitude',
  Street: 'Straße',
  Number: 'Hausnummer.',
  Postal_code: 'Postleitzahl',
  Description: 'Beschreibung',
  Hive_settings: 'Beute Einstellung',
  Hive_amount: 'Anzahl der Beuten an diesem Ort',
  Hive_prefix: 'Beutenprefix (vor der Zahl)',
  Hive_number_offset: 'Startnummer Beute',
  Hive_type: 'Beutentyp',
  Hive_layers: 'Zargen',
  Hive_frames: 'Rähmchen per Zarge',
  Hive_color: 'Beutenfarbe',
  Queen: 'Königin',
  queen: 'Königin',

  settings_title: 'Einstellungen',
  settings_description: 'Einstellungen der Sensoren',
  settings: 'Einstellungen',

  sensors_title: 'Sensoreinstellungen',
  sensors_description: 'Sensor Status und Registrierung',
  // sensors : 'Sensoren',
  sensor: 'Device',

  Select: 'Wähle',
  Not_selected: 'Nicht gewählt',
  Poor: 'Arm',
  Fair: 'Fair',
  Average: 'Durchschnitt',
  Good: 'Gut',
  Excellent: 'Excellent',
  Low: 'Tief',
  Medium: 'Mitte',
  High: 'Hoch',
  Extreme: 'Extrem',

  /* colors */
  select_color: 'Wähle eine Farbe',
  advanced: 'Erweitert',

  /* sensors */
  Select_sensor: 'Wähle einen Sensor',
  temperature: 'Temperatur',
  t: 'Temperatur',
  t_0: 'Temperatur 1',
  t_1: 'Temperatur 2',
  t_2: 'Temperatur 3',
  t_3: 'Temperatur 4',
  t_4: 'Temperatur 5',
  t_5: 'Temperatur 6',
  t_6: 'Temperatur 7',
  t_7: 'Temperatur 8',
  t_8: 'Temperatur 9',
  t_9: 'Temperatur 10',
  light: 'Sonnenlicht',
  l: 'Sonnenlicht',
  water: 'Wasser',
  w: 'Wasser',
  humidity: 'Feuchtigkeit',
  h: 'Feuchtigkeit',
  air_pressure: 'Luftdruck',
  p: 'Luftdruck',
  weight: 'Gewicht',
  w_v: 'Gewichtssensor Wert für alle',
  w_fl: 'Gewichtssensor Wert vorne links',
  w_fr: 'Gewichtssensor Wert vorne rechts',
  w_bl: 'Gewichtssensor Wert hinten links',
  w_br: 'Gewichtssensor Wert hinten rechts',
  weight_kg: 'Gewicht',
  weight_kg_corrected: 'Gewicht (korrigiert)',
  weight_combined_kg: 'Gewicht kombiniert',
  bat_volt: 'Batterie',
  bv: 'Batterie',
  sound_fanning_4days: 'Fan 4d Bienen',
  s_fan_4: 'Fan 4d Bienens',
  sound_fanning_6days: 'Fan 6d Bienen',
  s_fan_6: 'Fan 6d Bienen',
  sound_fanning_9days: 'Fan 9d Bienens',
  s_fan_9: 'Fan 9d Bienen',
  sound_flying_adult: 'Fliegende Bienen',
  s_fly_a: 'Fliegende Bienen',
  sound_total: 'Totaler Sound',
  s_tot: 'Totaler Sound',
  s_spl: 'Totaler Sound',
  bee_count_in: 'Bienenzähler nach innen',
  bc_i: 'Bienenzähler nach innen',
  bee_count_out: 'Bienenzähler nach außen',
  bc_o: 'Bienenzähler nach außen',
  t_i: 'Temp. innen',
  rssi: 'Signal Stärke',
  snr: 'Signal Krach',
  Sound_measurements: 'Soundmessungen',
  Sensor_info: 'Sensor info',
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
  icon: 'Icon',
  precipIntensity: 'Rainfall',
  precipProbability: 'Rain probability',
  precipType: 'Rain type',
  outsideTemperature: 'Outside temperature',
  apparentTemperature: 'Apparent temperature',
  dewPoint: 'Dew point',
  // 'humidity'              : 'Humidity',
  pressure: 'Air pressure',
  windSpeed: 'Wind speed',
  windGust: 'Wind gust',
  windBearing: 'Wind bearing',
  cloudCover: 'Cloud cover',
  uvIndex: 'UV index',
  visibility: 'Visibility',
  ozone: 'Ozone',

  /* Measurements */
  hour: 'Stunde',
  day: 'Tag',
  week: 'Woche',
  month: 'Monat',
  year: 'Jahr',

  /* settings */
  could_not_load_settings: 'Die Einstellungen konnten nicht geladen werden',
  offline: 'Keine Verbindung',
  remote: 'Fernbedienung',
  connected: 'Direkt',

  yes: 'Ja',
  no: 'Nein',

  footer_text: 'Open source beekeeping',
  beep_foundation: 'the BEEP foundation',

  Checklist: 'Stockkarte |  Stockkarten',
  Checklist_items: 'Stockkarte Artikel',
  edit_hive_checklist:
    'Aktivieren / deaktivieren Sie die Kästchen in der Liste, um Artikel aus Ihrer Stockkarte hinzuzufügen / zu entfernen. Sie können die Artikel auch entfalten / falten und ziehen / ablegen, um sie an Ihren eigenen Stil anzupassen. Tipp: Wenn Sie einen Suchbegriff in das Suchfeld eingeben, werden alle Artikel, die diesen Begriff enthalten, ausgeklappt und rot gefärbt.',

  /* user */
  Data_export: 'Daten Export',
  Export_your_data:
    'Exportiere alle Daten aus Deinem Account per Email (Exceldatei).',

  Terms_of_use: 'Nutzungsbedingungen (EN)',
  accept_policy:
    'Ich akzeptiere die BEEP-Nutzungsbedingungen, die mit dem neuen europäischen Datenschutzgesetz vereinbar sind',
  policy_url: 'https://beep.nl/terms-of-service',
  policy_version: 'beep_terms_2018_05_25_avg_v1',
  approve_policy:
    'Sie haben die aktuellen Nutzungsbedingungen noch nicht erfüllt.',

  /* weight calibration settings */
  calibrate_weight: 'Kalibriere Gewicht',
  calibrate_explanation:
    'Stellen Sie das Gewicht der Sensoren auf 0 ein, indem Sie den aktuellen Messwert subtrahieren.',
  set_as_zero_value: 'Setzen Sie diese Werte als 0 Werte',
  set_weight_factor: 'Definiere den Gewichtsfaktor',
  own_weight_kg: 'Wie hoch ist Ihr Eigengewicht in kg??',
  start_calibration:
    'Treten Sie nun auf die Waage und drücken Sie die Taste unten, um den Gewichtsfaktor festzulegen. Verteilen Sie Ihr Gewicht gleichmäßig.',
  currently_there_is: 'Da ist ein Gewicht von',
  nothing: 'nichts',
  on_the_scale: 'auf der Skala',
  calibration_started:
    'Calibration started... Wait for the next measurement to take effect.',
  calibration_ended: 'Calibration succeeded!',

  /* General items */
  server_down:
    'Die App ist aufgrund von Wartungsarbeiten nicht verfügbar. Bitte versuche es später erneut',
  add_to_calendar: 'Zum Kalender hinzufügen',
  sort_on: 'Sortieren nach',
  Whats_new: 'Neu!',
  Manual: 'Anleitung',

  Site_title: 'BEEP | Bienenmonitor',

  could_not_create_user:
    'Benutzer kann derzeit nicht erstellt werden. Entschuldigen Sie die Unannehmlichkeiten und versuchen Sie es später erneut. ',
  email_verified: 'Ihre E-Mail-Adresse wurde verifiziert.',
  email_not_verified: 'Ihre E-Mail-Adresse wurde noch nicht bestätigt.',
  email_new_verification:
    'Klicken Sie auf diesen Link, um eine neue Bestätigungs-E-Mail zu senden.',
  email_verification_sent:
    'Eine Nachricht mit einem Bestätigungslink wurde an Ihre E-Mail-Adresse gesendet. Klicken Sie auf den Link in der E-Mail, um Ihr Konto zu aktivieren und sich anzumelden. ',

  not_filled: 'ist erforderlich, aber nicht ausgefüllt',
  cannot_deselect:
    'Dieses Objekt kann nicht entfernt werden, da es ein erforderliches Objekt enthält',
  sensor_key: 'Sensor key',
  Undelete: 'Nicht löschen',
  the_field: 'The',
  is_required: 'ist erforderlich',

  No_groups: 'Keine Gruppen verfügbar',
  not_available_yet: 'noch nicht verfügbar. Bitte erstelle hier das erste.',
  Users: 'Benutzer',
  member: 'Gruppenmitglied | Gruppenmitglieder',
  Member: 'Gruppenmitglied',
  Members: 'Gruppenmitglieder',
  Invite: 'Einladen',
  Invited: 'Eingeladen',
  invitations: 'einladungen',
  Admin: 'Administrator',
  Creator: 'Gruppeninhaber',
  Collaborate: 'Kooperieren',
  Group: 'Kollaborationsgruppe | Kollaborationsgruppen',
  group: 'Kollaborationsgruppe | Kollaborationsgruppen',
  to_share:
    'mit dieser Gruppe zu teilen. 1 Klick = Gruppenmitglieder können nur anzeigen, 2 Klicks = Gruppenmitglieder können bearbeiten',
  Invitation_accepted: 'Einladung angenommen',
  Accept: 'Akzeptieren',
  My_shared: 'Mein geteiltes',
  invitee_name: 'Name des eingeladenen Teilnehmers',
  Remove_group:
    'Sind Sie sicher, dass Sie diese freigegebene Gruppe für alle Mitglieder der Gruppe vollständig entfernen möchten?',
  Detach_from_group: 'Entferne mich und meine Bienenstöcke aus dieser Gruppe',
  my_hive: 'Mein Beute',
  created: 'erstellt',
  group_detached: 'Die Gruppe erfolgreich verlassen',
  group_activated: 'Gruppeneinladung angenommen',
  group_explanation_1:
    '1. Erstellen Sie eine neue Kooperationsgruppe mit einem eindeutigen Titel und einer optionalen Beschreibung.',
  group_explanation_2:
    '2. Laden Sie andere Beep-Benutzer zu ihrer Beep-E-Mail-Adresse ein.',
  group_explanation_3:
    '3. Teilen Sie bestimmte Bienenstöcke, die von anderen gesehen werden sollen, oder arbeiten Sie zusammen an',
  Filter_and_sort_on: 'Filtern und sortieren nach:',

  /* New translations v2.2.0 */
  roofed: 'Does the apiary have a roof?',
  info: 'Info',

  research: 'Research',
  research_explanation:
    'This screen contains the available researches for which you can opt-in to share your data with. When you consent to share your BEEP account data, you contribute to research to support honeybee health. Before you consent, please review the research description provided through the link below and request for additional details if needed. You can withdraw your consent at any time, no new data will be shared from that moment. The data that your shared in the period that you did consent to will remain available for research. In case of questions, please direct these to the contact person provided.',
  research_info:
    'By sharing your data with researchers, you help them to being able to analyse more data and come to better conclusions for their research.',
  start_date: 'Start date',
  end_date: 'End date',
  purpose: 'Research purpose',
  institution: 'Research institution',
  type_of_data_used: 'Data usage',
  link: 'Link',
  Consent: 'Consent',
  history: 'history',
  Current_consent: 'Current consent',
  consent_yes: 'I consent to share my data',
  consent_no: 'I do NOT consent to share my data',
  my_beep_data: 'My own BEEP data',
  Consent_can_only_be_set: 'Consent can only be adjusted to',
  earlier: 'an earlier',
  later: 'a later',

  new_apiary_explanation: 'Create a new apiary in 4 steps',
  start_here: 'Click here to start',
  optional: 'optional',
  dimensions: 'dimensions',
  details: 'details',
  configuration: 'configuration',
  adjustments: 'adjustments',
  changes_queen_color: 'editing changes the color',

  Brood_box_and_frame: 'Brood box and frame',
  Hive_order: 'Hive order at apiary',
  bb_width_cm: 'Brood box width (cm)',
  bb_height_cm: 'Brood box height (cm)',
  bb_depth_cm: 'Brood box depth (cm)',
  fr_width_cm: 'Frame width (cm)',
  fr_height_cm: 'Frame height (cm)',
  queen_line: 'line',
  queen_tree: 'tree',
  queen_description: 'notes',
  Hive_short: 'Hive',

  Images: 'Images',
  Size: 'Size',
  preview: 'preview',

  Sensor_definitions: 'Sensor definitions',
  Inside: 'Measures inside',
  Offset: 'Offset',
  Multiplier: 'Multiplier',
  Input: 'Input',
  Output: 'Output',
  Last: 'Last',

  Export_sensor_data:
    "Export all data per device in the highest possible resolution as a .csv file that you can open in Excel, or SPSS. NB: The date time data in the 'time' column is in GMT time, formatted by the RFC 3339 date-time standard.",
  CSV_export_separator: 'CSV data column separator',
  Selected_date: 'Selected time span',
  Sensor_measurements: 'Sensor measurements',
  too_much_data:
    'Too much data to process, please select fewer Sensor measurements, or reduce the timespan between start and end date.',

  beep_base_explanation:
    "If you have a BEEP base (shown in the picture above), please use the native app (iOS and Android) to set-up the communication with this app. If you don't have a BEEP base yet, please click on the menu item 'BEEP website' for updates on how to get a BEEP base. I you have your own measurement device and would like to see the data in the BEEP app, please send us a message to ask for joining our Slack community and you can get access to the API description.",

  /* New translations v3 */
  click_hives_to_filter: 'Klicken Sie zum Filtern auf Beuten',
  for: 'für',
  last_visit: 'Letzter Besuch',
  apiary_details: 'Details des Bienenhauses',
  group_details: 'Gruppendetails',
  diary: 'Tagebuch',
  data: 'Daten',
  photo: 'Foto | Fotos',
  add_checklist: 'Stockkarte hinzufügen',
  add_hive: 'Beute hinzufügen',
  delete_apiary: 'Bienenhaus löschen',
  edit_apiary: 'Bienenhaus bearbeiten',
  new_apiary: 'Neues Bienenhaus',
  delete_group: 'Gruppe löschen',
  edit_group: 'Gruppe bearbeiten',
  new_group: 'Neue Gruppe',
  verification_code: 'verifikationscode',
  /* TO BE TRANSLATED */
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
}

export default translations
